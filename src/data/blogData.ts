import { BlogPost, BlogCategory } from '@/models/BlogPost';

// Định nghĩa các danh mục blog - Chỉ cần sửa object này để thêm/xóa danh mục
const blogCategories: Record<BlogCategory, string> = {
  'xe-tai': 'Xe Tải',
  'cau': 'Cẩu',
  'mooc': 'Mooc',
  'xe-dau-keo': 'Xe Đầu Kéo'
};

// Hàm tạo bài viết - giúp tạo nhiều bài viết dễ dàng
const createBlogPost = (
  id: string,
  slug: string,
  title: string,
  description: string,
  category: BlogCategory,
  publishDate: string,
  isFeatured: boolean = false
): BlogPost => {
  // Tạo nội dung mẫu dựa trên title
  const content = `
    <p>${description} Đây là bài viết chi tiết về ${title.toLowerCase()}...</p>
    <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c" alt="${title}" className="w-full h-auto my-4 rounded-lg" />
    <p>Thông tin chi tiết và phân tích chuyên sâu về ${title.toLowerCase()}. Chúng tôi sẽ tìm hiểu các ưu điểm, nhược điểm và ứng dụng thực tế.</p>
    <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec" alt="${title}" className="w-full h-auto my-4 rounded-lg" />
    <p>Các yếu tố cần xem xét khi lựa chọn ${title.toLowerCase()} phù hợp với nhu cầu của bạn...</p>
    <img src="https://images.unsplash.com/photo-1580674285054-bed31e145f59" alt="${title}" className="w-full h-auto my-4 rounded-lg" />
    <p>Kết luận về ${title.toLowerCase()} và lời khuyên cho người mua.</p>
    <img src="https://images.unsplash.com/photo-1597733336794-12d05021d510" alt="${title}" className="w-full h-auto my-4 rounded-lg" />
  `;

  // Tạo danh sách hình ảnh ngẫu nhiên cho bài viết
  const imageIds = [
    "1519003722824-194d4455a60c",
    "1578575437130-527eed3abbec", 
    "1580674285054-bed31e145f59",
    "1597733336794-12d05021d510",
    "1541625602330-2277a4c46182",
    "1565008447742-97f6f38c985c",
    "1566576721346-d4a3b4eaeb55",
    "1573046706408-dd2ab8e73088",
    "1586191582056-b7f0372a3bd6",
    "1505369430934-a0be1aa5bce3"
  ];
  
  // Lấy ngẫu nhiên 4 ảnh từ danh sách
  const randomImages = [];
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * imageIds.length);
    randomImages.push(`https://images.unsplash.com/photo-${imageIds[randomIndex]}`);
  }

  // Tạo đối tượng bài viết
  return {
    id,
    slug,
    title,
    description,
    content,
    images: randomImages,
    publishDate,
    readTime: Math.floor(Math.random() * 10) + 3, // 3-12 phút
    category,
    author: ['Nguyễn Văn A', 'Trần Thị B', 'Lê Văn C', 'Phạm Thị D'][Math.floor(Math.random() * 4)],
    tags: [`${category}`, 'vận tải', 'logistic', 'xe chuyên dụng'],
    featured: isFeatured
  };
};

// Tạo dữ liệu bài viết cho mỗi danh mục
const generateBlogPosts = () => {
  let allPosts: BlogPost[] = [];
  let idCounter = 1;

  // Tự động tạo 6 bài viết cho mỗi danh mục
  Object.keys(blogCategories).forEach((category, categoryIndex) => {
    for (let i = 0; i < 6; i++) {
      const postId = idCounter.toString();
      idCounter++;
      const isFeatured = i === 0; // Bài đầu tiên của mỗi danh mục được đánh dấu là nổi bật

      // Tạo ngày đăng bài ngẫu nhiên trong 30 ngày gần đây
      const date = new Date();
      date.setDate(date.getDate() - Math.floor(Math.random() * 30));
      const publishDate = date.toISOString().split('T')[0];

      const post = createBlogPost(
        postId,
        `${category}-bai-viet-${i+1}`,
        `${blogCategories[category as BlogCategory]} - Bài ${i+1}: Kiến thức cơ bản và ứng dụng`,
        `Tìm hiểu về các thông tin quan trọng liên quan đến ${blogCategories[category as BlogCategory].toLowerCase()} và cách ứng dụng trong thực tế vận tải.`,
        category as BlogCategory,
        publishDate,
        isFeatured
      );
      
      allPosts.push(post);
    }
  });

  // Sắp xếp tất cả bài viết theo ngày đăng, mới nhất lên đầu
  return allPosts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
};

// Tạo danh sách bài viết
let blogPosts: BlogPost[] = generateBlogPosts();

// ======= Thêm bài viết blog chi tiết về Hyundai New Porter H150 =======

const hyundaiH150Post: BlogPost = {
  id: (blogPosts.length + 1).toString(),
  slug: "hyundai-new-porter-h150-danh-gia-chi-tiet",
  title: "Hyundai New Porter H150 – Đánh giá chi tiết dòng xe tải nhỏ linh hoạt",
  description: "Khám phá ưu điểm nổi bật của Hyundai New Porter H150 – xe tải nhẹ hiện đại, tiết kiệm nhiên liệu, vận hành linh hoạt trong đô thị và phù hợp với mọi doanh nghiệp vận tải.",
  content: `
    <h2>Giới thiệu về Hyundai New Porter H150</h2>
    <p>Hyundai New Porter H150 là một trong những dòng xe tải nhỏ thành công nhất tại Việt Nam, nổi bật với thiết kế nhỏ gọn, động cơ mạnh mẽ và khả năng hoạt động ổn định trên mọi cung đường đô thị. Xe phù hợp cho cả cá nhân kinh doanh vận chuyển và doanh nghiệp cần phương tiện giao nhận có tính linh hoạt cao.</p>
    <img src="https://tongkhoxetai.vn/upload/images/hyundai-new-porter-h150.jpg" alt="Xe tải Hyundai New Porter H150" className="w-full h-auto my-4 rounded-lg" />
    <h3>Thiết kế hiện đại, tối ưu không gian</h3>
    <p>Cabin rộng rãi thoải mái cho 3 người, bảng điều khiển dễ sử dụng, tầm nhìn thoáng đãng và nhiều hộc để đồ tiện lợi. Ngoại thất trẻ trung, mạnh mẽ và bền bỉ với vật liệu cao cấp.</p>
    <img src="https://tongkhoxetai.vn/upload/images/xe-tai-hyundai-new-porter-h150-gia-bao-nhieu.jpg" alt="Nội thất Hyundai H150" className="w-full h-auto my-4 rounded-lg" />
    <h3>Động cơ vận hành mạnh mẽ & tiết kiệm nhiên liệu</h3>
    <p>Xe được trang bị động cơ D4CB Diesel 2.5L công suất 130PS, đạt tiêu chuẩn khí thải Euro 4, vận hành êm ái, tiết kiệm nhiên liệu và thân thiện với môi trường. Khả năng leo dốc tốt, tải trọng 1.5 tấn và bền bỉ theo thời gian.</p>
    <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c" alt="Xe tải Hyundai H150 động cơ mạnh mẽ" className="w-full h-auto my-4 rounded-lg" />
    <h3>An toàn tối ưu – Trang bị tiện nghi</h3>
    <p>Trang bị phanh ABS, hệ thống giảm xóc, điều hòa hai chiều, giải trí Bluetooth/CD và các tính năng hỗ trợ an toàn vượt trội, giúp lái xe luôn an tâm trên mọi quãng đường.</p>
    <img src="https://images.unsplash.com/photo-1597733336794-12d05021d510" alt="Hyundai H150 thùng xe" className="w-full h-auto my-4 rounded-lg" />
    <h3>Kết luận</h3>
    <p>Hyundai New Porter H150 xứng đáng là lựa chọn hàng đầu trong phân khúc xe tải nhẹ: kinh tế, tiện dụng, bền bỉ, dễ bảo dưỡng và linh hoạt phù hợp với nhu cầu vận tải tại Việt Nam.</p>
  `,
  images: [
    "https://tongkhoxetai.vn/upload/images/hyundai-new-porter-h150.jpg",
    "https://tongkhoxetai.vn/upload/images/xe-tai-hyundai-new-porter-h150-gia-bao-nhieu.jpg",
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c",
    "https://images.unsplash.com/photo-1597733336794-12d05021d510"
  ],
  publishDate: new Date().toISOString().split('T')[0],
  readTime: 7,
  category: "xe-tai",
  author: "Nguyễn Văn A",
  tags: ["xe-tai", "hyundai", "porter-h150", "xe tải nhẹ", "đô thị"],
  featured: true
};

// Đảm bảo chỉ có một bài featured cho mỗi danh mục (thay bài mới vào nếu là xe-tai)
const updatedBlogPosts: BlogPost[] = [
  ...blogPosts.filter((post) => !(post.category === "xe-tai" && post.featured)),
  hyundaiH150Post,
  ...blogPosts.filter((post) => post.category !== "xe-tai"),
].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

blogPosts = updatedBlogPosts;

// ======= Thêm 3 bài viết mới về Thaco Ollin 350.E4, Isuzu QKR 270, Hyundai HD800 =======
const customPosts: BlogPost[] = [
  {
    id: (blogPosts.length + 1).toString(),
    slug: "thaco-ollin-350e4-danh-gia-uu-nhuoc-diem",
    title: "Thaco Ollin 350.E4 – Đánh giá ưu nhược điểm thực tế",
    description:
      "Khám phá chi tiết về Thaco Ollin 350.E4: xe tải nhẹ động cơ mạnh mẽ, tiết kiệm nhiên liệu và giá thành hợp lý dành cho doanh nghiệp vừa và nhỏ.",
    content: `
      <h2>Giới thiệu Thaco Ollin 350.E4</h2>
      <p>Thaco Ollin 350.E4 là dòng xe tải nhẹ ứng dụng công nghệ hiện đại, động cơ Euro 4 giúp tiết kiệm nhiên liệu và bảo vệ môi trường. Xe có tải trọng 3.49 tấn, thích hợp cho vận chuyển hàng tại nội thành và liên tỉnh.</p>
      <img src="https://xetaipo.com.vn/wp-content/uploads/2022/08/xe-tai-thaco-ollin-350-e4.jpg" alt="Thaco Ollin 350.E4" className="w-full h-auto my-4 rounded-lg" />
      <h3>Đặc điểm nổi bật</h3>
      <ul>
        <li>Động cơ Yuchai tiết kiệm nhiên liệu, bền bỉ</li>
        <li>Thiết kế nhỏ gọn, phù hợp đường phố Việt Nam</li>
        <li>Khung gầm chắc chắn, nội thất tiện nghi</li>
      </ul>
      <h3>Nhược điểm cần lưu ý</h3>
      <p>Trang bị tiêu chuẩn còn khá cơ bản, khả năng chống ồn ở tốc độ cao chưa thực sự ấn tượng, tuy nhiên với tầm giá thì Ollin 350.E4 vẫn là lựa chọn xứng đáng.</p>
      <h3>Kết luận</h3>
      <p>Cạnh tranh trực tiếp với các dòng xe Nhật, Ollin 350.E4 nổi bật ở chi phí đầu tư thấp, bảo dưỡng thuận tiện và linh hoạt vận hành.</p>
    `,
    images: [
      "https://xetaipo.com.vn/wp-content/uploads/2022/08/xe-tai-thaco-ollin-350-e4.jpg",
      "https://autoth.com.vn/wp-content/uploads/2020/06/ollin-350-e4-thung-dai.jpg",
      "https://xetaiso1.com/wp-content/uploads/2019/02/xetaiollin.jpg",
      "https://autoth.com.vn/wp-content/uploads/2020/06/ollin-350-cabin.jpg"
    ],
    publishDate: new Date().toISOString().split("T")[0],
    readTime: 6,
    category: "xe-tai",
    author: "Nguyễn Văn A",
    tags: ["xe-tai", "thaco", "ollin-350-e4", "xe tải nhẹ"],
    featured: false,
  },
  {
    id: (blogPosts.length + 2).toString(),
    slug: "isuzu-qkr-270-dong-co-ben-bi-thich-hop-do-thi",
    title: "Isuzu QKR 270 – Dòng xe tải bền bỉ, phù hợp đô thị Việt",
    description:
      "Isuzu QKR 270 là lựa chọn xe tải nhẹ lý tưởng cho các tuyến đường nội thành: tiết kiệm nhiên liệu, độ bền cao, thương hiệu Nhật uy tín.",
    content: `
      <h2>Giới thiệu Isuzu QKR 270</h2>
      <p>Dòng xe QKR 270 của Isuzu nổi bật ở khả năng vận hành ổn định, động cơ Common Rail tiết kiệm nhiên liệu, đáp ứng tiêu chuẩn khí thải Euro 4. Thiết kế cabin vuông hiện đại với tầm nhìn rộng rãi.</p>
      <img src="https://isuzudongnam.vn/wp-content/uploads/2021/09/isuzu-qkr-270.jpg" alt="Isuzu QKR 270" className="w-full h-auto my-4 rounded-lg" />
      <h3>Ưu điểm nổi bật</h3>
      <ul>
        <li>Thương hiệu nổi tiếng Nhật Bản, độ bền vượt trội</li>
        <li>Vận hành tiết kiệm, bảo dưỡng dễ dàng</li>
        <li>Thùng xe đa dạng, tải trọng linh động</li>
      </ul>
      <h3>Có phù hợp với doanh nghiệp vận tải nhỏ?</h3>
      <p>Với chi phí sử dụng hợp lý, Isuzu QKR 270 đặc biệt thích hợp cho các doanh nghiệp kinh doanh vận chuyển nội thành hoặc giao nhận hàng hóa tần suất lớn.</p>
    `,
    images: [
      "https://isuzudongnam.vn/wp-content/uploads/2021/09/isuzu-qkr-270.jpg",
      "https://otoisuzu.com.vn/uploads/images/2020/12/03/isuzu-qkr-270-thung-dai.jpeg",
      "https://isuzutentien.vn/wp-content/uploads/2021/12/xe-tai-isuzu-qkr-2701.jpg",
      "https://ototruonggiang.com.vn/wp-content/uploads/2020/09/qkr270.jpg"
    ],
    publishDate: new Date().toISOString().split("T")[0],
    readTime: 5,
    category: "xe-tai",
    author: "Phạm Thị D",
    tags: ["xe-tai", "isuzu", "qkr-270", "vận tải"],
    featured: false,
  },
  {
    id: (blogPosts.length + 3).toString(),
    slug: "danh-gia-xe-tai-hyundai-hd800",
    title: "Đánh giá xe tải Hyundai HD800: Động cơ mạnh mẽ, độ bền vượt trội",
    description:
      "Hyundai HD800 gây ấn tượng ở động cơ mạnh mẽ, khả năng chịu tải tốt và chi phí vận hành hợp lý – lựa chọn hàng đầu trong phân khúc tầm trung.",
    content: `
      <h2>Giới thiệu xe tải Hyundai HD800</h2>
      <p>Hyundai HD800 là dòng xe tải tầm trung có lịch sử lâu đời, nổi tiếng với độ bền cao, khả năng vận hành mạnh mẽ và tiết kiệm nhiên liệu nhờ động cơ D4DB 4.0L.</p>
      <img src="https://hyundaivic.vn/wp-content/uploads/2021/11/xe-tai-hyundai-hd800.jpg" alt="Hyundai HD800" className="w-full h-auto my-4 rounded-lg" />
      <h3>Lý do nên chọn HD800</h3>
      <ul>
        <li>Động cơ bền bỉ, tải trọng lớn đến 8 tấn</li>
        <li>Khung gầm chắc chắn, vận hành ổn định mọi địa hình</li>
        <li>Chi phí bảo trì thấp, phụ tùng phổ biến</li>
      </ul>
      <h3>Kết luận</h3>
      <p>Hyundai HD800 xứng đáng là bạn đồng hành tin cậy của các doanh nghiệp vận tải với độ bền, hiệu suất và giá trị đầu tư lâu dài.</p>
    `,
    images: [
      "https://hyundaivic.vn/wp-content/uploads/2021/11/xe-tai-hyundai-hd800.jpg",
      "https://xetaisaigon.vn/wp-content/uploads/2019/03/hyundai-hd800.jpg",
      "https://xetaiquangngai.com.vn/wp-content/uploads/2020/12/xe-tai-hyundai-hd800-thung-dai.jpg",
      "https://xeototai.vn/wp-content/uploads/2020/09/hd800-noi-that.jpg"
    ],
    publishDate: new Date().toISOString().split("T")[0],
    readTime: 6,
    category: "xe-tai",
    author: "Lê Văn C",
    tags: ["xe-tai", "hyundai", "hd800", "xe tải trung"],
    featured: false,
  }
];

// Thêm các bài viết mới vào mảng blogPosts
blogPosts = [...blogPosts, ...customPosts];

// Xuất dữ liệu duy nhất một lần ở cuối file
export { blogPosts, blogCategories, generateBlogPosts };
