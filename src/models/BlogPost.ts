// Định nghĩa các danh mục blog có sẵn
// Khi thêm danh mục mới, cần thêm vào đây và trong blogData.ts
export type BlogCategory = 'xe-tai' | 'cau' | 'mooc-ben' | 'mooc-san' | 'mooc-xuong' | 'xe-dau-keo';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  images: string[]; // Mảng hình ảnh cho mỗi bài viết
  publishDate: string;
  readTime: number;
  category: BlogCategory;
  author: string;
  tags: string[];
  featured?: boolean;
}

// Map các danh mục và nhãn tương ứng - Đã được chuyển sang blogData.ts
export const blogCategoryLabels: Record<BlogCategory, string> = {
  'xe-tai': 'Xe Tải',
  'cau': 'Cẩu',
  'mooc-ben': 'Mooc Ben',
  'mooc-san': 'Mooc Sàn',
  'mooc-xuong': 'Mooc Xương',
  'xe-dau-keo': 'Xe Đầu Kéo'
};
