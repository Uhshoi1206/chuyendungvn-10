
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '@/data/blogData';
import { BlogCategory, blogCategoryLabels } from '@/models/BlogPost';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalendarDays, Clock, User, ChevronRight } from 'lucide-react';

const BlogPage = () => {
  const navigate = useNavigate();
  
  // Group posts by category
  const postsByCategory: Record<BlogCategory, typeof blogPosts> = {
    'xe-tai': blogPosts.filter(post => post.category === 'xe-tai'),
    'cau': blogPosts.filter(post => post.category === 'cau'),
    'mooc-ben': blogPosts.filter(post => post.category === 'mooc-ben'),
    'mooc-san': blogPosts.filter(post => post.category === 'mooc-san'),
    'mooc-xuong': blogPosts.filter(post => post.category === 'mooc-xuong'),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white pt-10 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Tin Tức & Kiến Thức</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cập nhật những thông tin mới nhất về xe tải, mooc và các loại cẩu,
                giúp bạn hiểu rõ hơn về các dòng phương tiện vận tải chuyên dụng.
              </p>
            </div>
          </div>
        </div>
        
        {/* Category Sections */}
        {Object.keys(postsByCategory).map((category) => {
          const categoryKey = category as BlogCategory;
          const categoryPosts = postsByCategory[categoryKey].slice(0, 3); // Chỉ lấy 3 bài viết
          
          return (
            <section key={category} className="py-12 bg-white border-t border-gray-100">
              <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">{blogCategoryLabels[categoryKey]}</h2>
                  <Link 
                    to={`/blog?category=${categoryKey}`} 
                    className="text-primary flex items-center hover:underline"
                  >
                    <span>Xem tất cả</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
                
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
            </section>
          );
        })}
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
