
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  publishDate: string;
  readTime: number;
  category: 'truck' | 'trailer' | 'crane' | 'lifestyle' | 'shopping' | 'health';
  author: string;
  tags: string[];
  featured?: boolean;
}

