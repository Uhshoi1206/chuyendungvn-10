
// Định nghĩa các danh mục blog có sẵn
export type BlogCategory = 'xe-tai' | 'cau' | 'mooc' | 'xe-dau-keo';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  images: string[];
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
  'mooc': 'Mooc',
  'xe-dau-keo': 'Xe Đầu Kéo'
};
