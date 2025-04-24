
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  publishDate: string;
  readTime: number;
  category: 'truck' | 'trailer' | 'crane';
  author: string;
  tags: string[];
  featured?: boolean;
}
