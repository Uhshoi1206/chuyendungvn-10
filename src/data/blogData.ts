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

// Thêm bài viết blog chi tiết về Hyundai New Porter H150 vào cuối mảng blogPosts
const hyundaiH150Post: BlogPost = {
  id: (blogPosts.length + 1).toString(),
  slug: "hyundai-new-porter-h150-danh-gia-chi-tiet",
  title: "Hyundai New Porter H150 – Đánh giá chi tiết dòng xe tải nhỏ linh hoạt",
  description: "Khám phá những ưu điểm nổi bật của Hyundai New Porter H150 – xe tải nhỏ bán chạy hàng đầu tại Việt Nam với thiết kế hiện đại, tiết kiệm nhiên liệu và khả năng vận hành linh hoạt trong đô thị.",
  content: `
    <h2>Giới thiệu về Hyundai New Porter H150</h2>
    <p>Hyundai New Porter H150 là dòng xe tải nhẹ đến từ thương hiệu Hyundai nổi tiếng, sở hữu thiết kế mạnh mẽ, nhỏ gọn, khả năng vận hành ưu việt và đặc biệt phù hợp với nhu cầu vận chuyển trong thành phố cũng như các khu vực đông dân cư.</p>
    <img src="https://tongkhoxetai.vn/upload/images/hyundai-new-porter-h150.jpg" alt="Hyundai New Porter H150" className="w-full h-auto my-4 rounded-lg" />
    <h3>Thiết kế hiện đại, tinh tế</h3>
    <p>Xe sở hữu ngoại thất thanh lịch, màu sắc trang nhã, cabin rộng rãi mang lại cảm giác thoải mái cho người lái. Hệ thống chiếu sáng và gương chiếu hậu bố trí hợp lý, tăng độ an toàn khi di chuyển ban đêm hoặc các cung đường khó quan sát.</p>
    <img src="https://tongkhoxetai.vn/upload/images/xe-tai-hyundai-new-porter-h150-gia-bao-nhieu.jpg" alt="Nội thất xe tải Hyundai H150" className="w-full h-auto my-4 rounded-lg" />
    <h3>Vận hành mạnh mẽ & tiết kiệm nhiên liệu</h3>
    <p>Động cơ D4CB Diesel 2.5L công suất 130HP giúp H150 dễ dàng vượt qua các địa hình phức tạp, tải trọng thường xuyên mà vẫn tiết kiệm nhiên liệu tối đa. Xe đạt tiêu chuẩn khí thải Euro 4 thân thiện với môi trường.</p>
    <h3>An toàn và tiện nghi</h3>
    <p>Trang bị hệ thống phanh ABS, khung gầm chắc chắn, hệ thống giảm xóc, điều hòa hai chiều, giải trí Bluetooth/CD cùng nhiều tiện nghi hỗ trợ lái xe an toàn và thư thái.</p>
    <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c" alt="Vận chuyển cùng H150" className="w-full h-auto my-4 rounded-lg" />
    <h3>Kết luận</h3>
    <p>Hyundai New Porter H150 là lựa chọn hoàn hảo cho nhu cầu vận chuyển hàng hóa trong thành phố, nhỏ gọn, hiệu quả và giá cạnh tranh – rất đáng để đầu tư cho doanh nghiệp và cá nhân.</p>
    <img src="https://images.unsplash.com/photo-1597733336794-12d05021d510" alt="Hyundai H150 trên phố" className="w-full h-auto my-4 rounded-lg" />
  `,
  images: [
    "https://tongkhoxetai.vn/upload/images/hyundai-new-porter-h150.jpg",
    "https://tongkhoxetai.vn/upload/images/xe-tai-hyundai-new-porter-h150-gia-bao-nhieu.jpg",
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c",
    "https://images.unsplash.com/photo-1597733336794-12d05021d510"
  ],
  publishDate: new Date().toISOString().split('T')[0],
  readTime: 6,
  category: "xe-tai" as BlogCategory,
  author: "Nguyễn Văn A",
  tags: ["xe-tai", "hyundai", "porter-h150", "xe tai nhe"],
  featured: true
};

// Đảm bảo không bị trùng lặp featured: chỉ một bài nổi bật / danh mục
const updatedBlogPosts: BlogPost[] = [
  ...blogPosts.filter(
    post => !(post.category === "xe-tai" && post.featured)
  ),
  hyundaiH150Post,
  ...blogPosts.filter(
    post => post.category !== "xe-tai"
  )
].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

// Gán lại blogPosts để các trang sử dụng đúng bài viết mới nhất
blogPosts = updatedBlogPosts;

// Export đúng duy nhất một lần ở cuối file
export { blogPosts, blogCategories, generateBlogPosts };
