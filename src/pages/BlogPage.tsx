import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, blogCategories } from '@/data/blogData';
import { BlogCategory, BlogPost, blogCategoryLabels } from '@/models/BlogPost';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Clock, User, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'all'>('all');
  
  // Group posts by category
  const postsByCategory: Record<BlogCategory, BlogPost[]> = {
    'xe-tai': blogPosts.filter(post => post.category === 'xe-tai'),
    'cau': blogPosts.filter(post => post.category === 'cau'),
    'mooc-ben': blogPosts.filter(post => post.category === 'mooc-ben'),
    'mooc-san': blogPosts.filter(post => post.category === 'mooc-san'),
    'mooc-xuong': blogPosts.filter(post => post.category === 'mooc-xuong'),
  };

  // Find featured posts for each category
  const featuredPosts: Record<BlogCategory, BlogPost> = {} as Record<BlogCategory, BlogPost>;
  Object.keys(blogCategoryLabels).forEach((category) => {
    const categoryKey = category as BlogCategory;
    featuredPosts[categoryKey] = postsByCategory[categoryKey].find(post => post.featured) || 
                                postsByCategory[categoryKey][0];
  });

  // Find featured post (global)
  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        {/* Hero Section - Intro */}
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

        {/* Hero Posts Grid - Featured Articles */}
        <div className="container mx-auto px-4 -mt-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Featured Large Post */}
            <div className="lg:col-span-2">
              <Link to={`/blog/${featuredPost.slug}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm transition hover:shadow-md h-full flex flex-col">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img
                      src={featuredPost.images[0]}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                        {blogCategories[featuredPost.category]}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div>
                      <span className="text-sm text-gray-500 mb-2 flex items-center">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        {new Date(featuredPost.publishDate).toLocaleDateString('vi-VN')}
                      </span>
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {featuredPost.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {featuredPost.description}
                      </p>
                    </div>
                    
                    <div className="mt-auto flex items-center text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center ml-4">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{featuredPost.readTime} phút đọc</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Other Featured Posts */}
            <div className="space-y-6">
              {postsByCategory['xe-tai'].slice(1, 3).map(post => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm transition hover:shadow-md flex flex-col h-[calc(50%-0.75rem)]">
                    <div className="flex flex-row">
                      <div className="w-1/3 aspect-square relative overflow-hidden">
                        <img
                          src={post.images[0]}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="w-2/3 p-4">
                        <span className="text-xs text-gray-500 mb-1 flex items-center">
                          <CalendarDays className="h-3 w-3 mr-1" />
                          {new Date(post.publishDate).toLocaleDateString('vi-VN')}
                        </span>
                        <h3 className="text-base font-bold mb-1 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <div className="flex items-center text-xs text-gray-500">
                          <User className="h-3 w-3 mr-1" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="space-y-6">
              {postsByCategory['cau'].slice(0, 2).map(post => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm transition hover:shadow-md flex flex-col h-[calc(50%-0.75rem)]">
                    <div className="flex flex-row">
                      <div className="w-1/3 aspect-square relative overflow-hidden">
                        <img
                          src={post.images[0]}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="w-2/3 p-4">
                        <span className="text-xs text-gray-500 mb-1 flex items-center">
                          <CalendarDays className="h-3 w-3 mr-1" />
                          {new Date(post.publishDate).toLocaleDateString('vi-VN')}
                        </span>
                        <h3 className="text-base font-bold mb-1 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <div className="flex items-center text-xs text-gray-500">
                          <User className="h-3 w-3 mr-1" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Category Sections */}
        {Object.keys(blogCategoryLabels).map((category) => {
          const categoryKey = category as BlogCategory;
          const categoryPosts = postsByCategory[categoryKey];
          const categoryFeatured = featuredPosts[categoryKey];
          
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
                  {/* Featured Category Post */}
                  <div className="md:col-span-1">
                    <Link to={`/blog/${categoryFeatured.slug}`} className="group">
                      <div className="bg-white rounded-lg overflow-hidden shadow-sm transition hover:shadow-md h-full flex flex-col">
                        <div className="aspect-video relative overflow-hidden">
                          <img
                            src={categoryFeatured.images[0]}
                            alt={categoryFeatured.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="text-sm text-gray-500 flex items-center">
                              <CalendarDays className="h-4 w-4 mr-1" />
                              {new Date(categoryFeatured.publishDate).toLocaleDateString('vi-VN')}
                            </span>
                            <span className="text-sm text-gray-500 flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {categoryFeatured.readTime} phút
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {categoryFeatured.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {categoryFeatured.description}
                          </p>
                          <div className="mt-auto flex items-center text-sm">
                            <User className="h-4 w-4 mr-1 text-primary" />
                            <span className="text-gray-700">{categoryFeatured.author}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  
                  {/* Other Category Posts */}
                  <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categoryPosts.filter(post => post.id !== categoryFeatured.id)
                      .slice(0, 4)
                      .map(post => (
                      <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm transition hover:shadow-md h-full flex flex-col">
                          <div className="aspect-video relative overflow-hidden">
                            <img
                              src={post.images[1] || post.images[0]}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-4 flex flex-col flex-grow">
                            <div className="mb-2">
                              <span className="text-sm text-gray-500 flex items-center">
                                <CalendarDays className="h-4 w-4 mr-1" />
                                {new Date(post.publishDate).toLocaleDateString('vi-VN')}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                            </h3>
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
