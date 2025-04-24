
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Clock, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlogPost } from '@/models/BlogPost';

interface BlogSectionProps {
  posts: BlogPost[];
  categories: Record<string, string>;
}

const BlogSection = ({ posts, categories }: BlogSectionProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Tin Tức & Chia Sẻ</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cập nhật thông tin mới nhất về ngành vận tải và các dòng xe tải phổ biến trên thị trường
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => post && (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition h-full flex flex-col">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.images[0]}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Link 
                      to={`/blog/category/${post.category}`}
                      className="inline-block bg-red-100 bg-opacity-90 text-primary rounded-full px-3 py-1 text-xs font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {categories[post.category]}
                    </Link>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString('vi-VN')}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime} phút
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" className="px-6">
            <Link to="/blog" className="flex items-center gap-2">
              Xem tất cả bài viết
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
