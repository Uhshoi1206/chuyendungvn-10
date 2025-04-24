import { BlogPost, BlogCategory } from '@/models/BlogPost';

// Định nghĩa các danh mục blog - Chỉ cần sửa object này để thêm/xóa danh mục
export const blogCategories: Record<BlogCategory, string> = {
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
export const generateBlogPosts = () => {
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
export const blogPosts: BlogPost[] = generateBlogPosts();
