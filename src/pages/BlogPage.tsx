
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, blogCategories } from '@/data/blogData';
import { BlogCategory } from '@/models/BlogPost';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalendarDays, Clock, User } from 'lucide-react';

const BlogPage = () => {
  const [activeTab, setActiveTab] = useState<'all' | BlogCategory>('all');
  
  const featuredPosts = blogPosts.filter(post => post.featured);
  
  const filteredPosts = activeTab === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        {/* Blog Header Section */}
        <div className="bg-gray-900 text-white py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Blog Xe Tải Việt</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Thông tin hữu ích về xe tải, vận tải và ngành công nghiệp ô tô tại Việt Nam
            </p>
          </div>
        </div>
        
        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold mb-6">Bài Viết Nổi Bật</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map(post => (
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
                          {blogCategories[post.category]}
                        </Link>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.description}
                      </p>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center text-sm">
                          <User className="h-4 w-4 mr-1 text-gray-500" />
                          <span className="text-gray-700">{post.author}</span>
                        </div>
                        <span className="text-sm text-gray-500 flex items-center">
                          <CalendarDays className="h-4 w-4 mr-1" />
                          {new Date(post.publishDate).toLocaleDateString('vi-VN')}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* Blog Categories Tabs */}
        <div className="container mx-auto px-4 pt-4 pb-12">
          <div className="mb-6 border-b">
            <div className="flex overflow-x-auto pb-1 hide-scrollbar">
              <button 
                className={`px-4 py-2 font-medium whitespace-nowrap ${
                  activeTab === 'all' 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('all')}
              >
                Tất cả bài viết
              </button>
              
              {Object.entries(blogCategories).map(([key, label]) => (
                <button 
                  key={key}
                  className={`px-4 py-2 font-medium whitespace-nowrap ${
                    activeTab === key 
                      ? 'text-primary border-b-2 border-primary' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveTab(key as BlogCategory)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
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
                        {blogCategories[post.category]}
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
                    <div className="mt-auto flex items-center text-sm">
                      <User className="h-4 w-4 mr-1 text-primary" />
                      <span className="text-gray-700">{post.author}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-10">
              <p className="text-lg text-gray-600">Không có bài viết nào trong danh mục này.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
