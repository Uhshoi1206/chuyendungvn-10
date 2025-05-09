
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  category: BlogCategory;
  images: string[];
  publishDate: number;
  readTime: number;
  author: string;
  tags?: string[];
  views?: number; // Thêm trường lượt xem
  comments?: number; // Thêm trường số bình luận
}

// Định nghĩa các danh mục blog
export type BlogCategory = 'industry-news' | 'product-review' | 'driver-tips' | 'maintenance' | 'buying-guide' | 'technology';

// Nhãn hiển thị cho các danh mục
export const blogCategoryLabels: Record<BlogCategory, string> = {
  'industry-news': 'Tin Ngành',
  'product-review': 'Đánh Giá Xe',
  'driver-tips': 'Lái Xe',
  'maintenance': 'Bảo Dưỡng',
  'buying-guide': 'Tư Vấn Mua Xe',
  'technology': 'Công Nghệ & Đổi Mới'
};
