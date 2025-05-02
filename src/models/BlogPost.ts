
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  category: string;
  images: string[];
  publishDate: number;
  readTime: number;
  author: string;
}
