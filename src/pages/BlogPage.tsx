
import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, blogCategories } from '@/data/blogData';
import { blogCategoryLabels } from '@/models/BlogPost';
import Layout from '@/components/Layout';
import { CalendarDays, User, ChevronRight, Clock } from 'lucide-react';

const BlogPage = () => {
  // Nhóm bài viết theo danh mục
  const groupedPosts = Object.entries(blogCategories).reduce((acc, [category, label]) => {
    acc[category] = blogPosts
      .filter(post => post.category === category)
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
      .slice(0, 3); // Hiển thị 3 bài viết mới nhất mỗi danh mục
    return acc;
  }, {} as Record<string, typeof blogPosts>);
  
  return (
    <Layout>
      {/* Blog Header Section */}
      <div className="bg-gray-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Blog Xe Tải Việt</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Thông tin hữu ích về xe tải, xe cẩu, sơ mi rơ mooc, xe đầu kéo và ngành vận tải thương mại tại Việt Nam
          </p>
        </div>
      </div>

      {/* Blog Categories Sections */}
      <div className="container mx-auto px-4 py-12">
        {Object.entries(blogCategories).map(([category, label]) => (
          <div key={category} className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">{label}</h2>
              <Link 
                to={`/blog/category/${category}`}
                className="text-primary hover:text-red-700 flex items-center text-sm font-medium"
              >
                Xem tất cả
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {groupedPosts[category]?.map(post => (
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
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default BlogPage;
