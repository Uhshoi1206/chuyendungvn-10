
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { blogPosts } from '@/data/blogData';
import { BlogCategory, blogCategoryLabels } from '@/models/BlogPost';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalendarDays, Clock, User } from 'lucide-react';

const BlogCategoryPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') as BlogCategory;
  
  const categoryPosts = blogPosts.filter(post => post.category === category);

  if (!category || !blogCategoryLabels[category]) {
    return <div>Danh mục không tồn tại</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">{blogCategoryLabels[category]}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categoryPosts.map(post => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm transition hover:shadow-md h-full flex flex-col">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.images[0]}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
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
                    <div className="mt-auto flex items-center text-sm">
                      <User className="h-4 w-4 mr-1 text-primary" />
                      <span className="text-gray-700">{post.author}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogCategoryPage;
