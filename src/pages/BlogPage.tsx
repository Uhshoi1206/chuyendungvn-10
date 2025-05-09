
import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, blogCategories } from '@/data/blogData';
import { blogCategoryLabels } from '@/models/BlogPost';
import Layout from '@/components/Layout';
import { CalendarDays, User, ChevronRight, Clock, Search, Tag, TrendingUp, Shield, Eye } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const BlogPage = () => {
  // Nhóm bài viết theo danh mục
  const groupedPosts = Object.entries(blogCategories).reduce((acc, [category, label]) => {
    acc[category] = blogPosts
      .filter(post => post.category === category)
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
      .slice(0, 3); // Hiển thị 3 bài viết mới nhất mỗi danh mục
    return acc;
  }, {} as Record<string, typeof blogPosts>);
  
  // Lấy ra 5 bài viết mới nhất cho phần hero
  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 5);
  
  // Biểu tượng tương ứng cho mỗi danh mục
  const categoryIcons = {
    'industry-news': <TrendingUp className="h-6 w-6" />,
    'product-review': <Tag className="h-6 w-6" />,
    'driver-tips': <Shield className="h-6 w-6" />,
    'maintenance': <Eye className="h-6 w-6" />
  };
  
  return (
    <Layout>
      {/* Blog Header Section */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog Xe Tải Việt</h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
                Thông tin hữu ích về xe tải, xe cẩu, sơ mi rơ mooc, xe đầu kéo và ngành vận tải thương mại tại Việt Nam
              </p>
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  className="pl-10 py-6 rounded-full border-gray-600 bg-gray-800/50 focus:bg-gray-800 text-white" 
                  placeholder="Tìm kiếm bài viết, thông tin xe..." 
                />
                <Button className="absolute right-1 top-1 rounded-full px-6">
                  Tìm kiếm
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <div className="flex flex-col space-y-4">
                {latestPosts.slice(0, 1).map(post => (
                  <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                    <div className="flex items-center bg-gray-800/40 rounded-lg p-3 hover:bg-gray-800 transition">
                      <div className="hidden sm:block w-16 h-16 flex-shrink-0 mr-4">
                        <img 
                          src={post.images[0]} 
                          alt={post.title} 
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div>
                        <span className="text-primary text-xs font-medium mb-1 block">
                          {blogCategories[post.category]} • {new Date(post.publishDate).toLocaleDateString('vi-VN')}
                        </span>
                        <h3 className="text-white font-medium group-hover:text-primary/90 transition-colors line-clamp-1">
                          {post.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
                <div className="grid grid-cols-2 gap-3">
                  {latestPosts.slice(1, 5).map(post => (
                    <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                      <div className="bg-gray-800/40 p-3 rounded-lg hover:bg-gray-800 transition">
                        <span className="text-xs text-primary font-medium mb-1 block">
                          {blogCategories[post.category]}
                        </span>
                        <h3 className="text-sm text-white font-medium group-hover:text-primary/90 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Danh mục Blog với biểu tượng đẹp mắt */}
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(blogCategories).map(([category, label]) => (
              <Link 
                key={category} 
                to={`/blog/category/${category}`}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition text-center border border-gray-100 hover:border-primary/20 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  {category === 'industry-news' && <TrendingUp className="h-6 w-6" />}
                  {category === 'product-review' && <Tag className="h-6 w-6" />}
                  {category === 'driver-tips' && <Shield className="h-6 w-6" />}
                  {category === 'maintenance' && <Eye className="h-6 w-6" />}
                </div>
                <h2 className="text-xl font-bold">{label}</h2>
                <p className="text-gray-600 text-sm mt-2">
                  {category === 'industry-news' && 'Tin tức mới nhất về ngành vận tải'}
                  {category === 'product-review' && 'Đánh giá chi tiết các dòng xe'}
                  {category === 'driver-tips' && 'Kỹ năng và kinh nghiệm lái xe'}
                  {category === 'maintenance' && 'Bảo dưỡng và chăm sóc xe'}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Categories Sections */}
      <div className="container mx-auto px-4 py-12">
        {Object.entries(blogCategories).map(([category, label]) => (
          <div key={category} className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3">
                  {category === 'industry-news' && <TrendingUp />}
                  {category === 'product-review' && <Tag />}
                  {category === 'driver-tips' && <Shield />}
                  {category === 'maintenance' && <Eye />}
                </div>
                <h2 className="text-2xl font-bold">{label}</h2>
              </div>
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
        
        {/* Đăng ký nhận tin mới nhất */}
        <div className="bg-gradient-to-tr from-primary/10 to-gray-50 rounded-xl p-8 mt-16 mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Đăng Ký Nhận Tin Mới Nhất</h3>
            <p className="text-gray-600 mb-6">
              Nhận thông tin mới nhất về sản phẩm, khuyến mãi và bài viết hữu ích về ngành vận tải
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input placeholder="Email của bạn" className="flex-grow" />
              <Button variant="default" className="whitespace-nowrap">
                Đăng ký
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
