
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, blogCategories } from '@/data/blogData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Clock, ListFilter, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof blogCategories | 'all'>('all');

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Find featured post
  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];
  
  // Get other posts
  const regularPosts = filteredPosts.filter(post => post.id !== featuredPost.id);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        {/* Hero Section with Featured Post */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Tin Tức & Kiến Thức</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Cập nhật những thông tin mới nhất về xe tải, trailer và các thiết bị chuyên dụng
              </p>
            </div>
            
            {/* Featured Post */}
            <Link to={`/blog/${featuredPost.slug}`} className="block">
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="aspect-video relative overflow-hidden rounded-xl">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {blogCategories[featuredPost.category]}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {featuredPost.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      <span>{new Date(featuredPost.publishDate).toLocaleDateString('vi-VN')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime} phút đọc</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        
        {/* Blog Posts Section */}
        <div className="container mx-auto py-16 px-4">
          <div className="flex flex-wrap items-center justify-center mb-8 space-x-2">
            <Button
              variant={selectedCategory === 'all' ? "default" : "outline"}
              onClick={() => setSelectedCategory('all')}
              className="mb-2"
            >
              Tất cả
            </Button>
            {Object.entries(blogCategories).map(([key, label]) => (
              <Button
                key={key}
                variant={selectedCategory === key ? "default" : "outline"}
                onClick={() => setSelectedCategory(key as keyof typeof blogCategories)}
                className="mb-2"
              >
                {label}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                <Card className="h-full border-0 bg-white hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                        {blogCategories[post.category]}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        <span>{new Date(post.publishDate).toLocaleDateString('vi-VN')}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
