
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  images: string[]; // Mảng hình ảnh cho mỗi bài viết
  publishDate: string;
  readTime: number;
  category: 'xe-tai' | 'cau' | 'mooc-ben' | 'mooc-san' | 'mooc-xuong';
  author: string;
  tags: string[];
  featured?: boolean;
}

export type BlogCategory = 'xe-tai' | 'cau' | 'mooc-ben' | 'mooc-san' | 'mooc-xuong';

export const blogCategoryLabels: Record<BlogCategory, string> = {
  'xe-tai': 'Xe Tải',
  'cau': 'Cẩu',
  'mooc-ben': 'Mooc Ben',
  'mooc-san': 'Mooc Sàn',
  'mooc-xuong': 'Mooc Xương'
};
