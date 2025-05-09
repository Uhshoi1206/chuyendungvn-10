
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogPosts, blogCategories } from '@/data/blogData';
import { BlogCategory } from '@/models/BlogPost';
import Layout from '@/components/Layout';
import { CalendarDays, Clock, User, ChevronRight, ArrowLeft, Tag, TrendingUp, Shield, Eye } from 'lucide-react';

const BlogCategoryPage = () => {
  const { category } = useParams();
  const currentCategory = category as BlogCategory;
  
  const categoryPosts = blogPosts.filter(post => post.category === currentCategory);
  const categoryLabel = blogCategories[currentCategory];

  // Biểu tượng cho mỗi danh mục
  const getCategoryIcon = () => {
    switch(currentCategory) {
      case 'industry-news': return <TrendingUp className="h-6 w-6" />;
      case 'product-review': return <Tag className="h-6 w-6" />;
      case 'driver-tips': return <Shield className="h-6 w-6" />;
      case 'maintenance': return <Eye className="h-6 w-6" />;
      default: return <Tag className="h-6 w-6" />;
    }
  };

  // Mô tả cho mỗi danh mục
  const getCategoryDescription = () => {
    switch(currentCategory) {
      case 'industry-news': 
        return 'Cập nhật các tin tức mới nhất về thị trường xe tải, xe cẩu, sơ mi rơ mooc và đầu kéo. Theo dõi xu hướng thị trường và thay đổi chính sách trong ngành vận tải.';
      case 'product-review': 
        return 'Đánh giá chi tiết các dòng xe thương mại. Phân tích ưu nhược điểm, thông số kỹ thuật và trải nghiệm thực tế khi sử dụng sản phẩm.';
      case 'driver-tips': 
        return 'Chia sẻ các kỹ năng, kinh nghiệm lái xe an toàn và hiệu quả. Các mẹo hữu ích giúp tài xế làm việc chuyên nghiệp hơn.';
      case 'maintenance': 
        return 'Hướng dẫn bảo dưỡng, chăm sóc xe đúng cách để kéo dài tuổi thọ phương tiện. Các biện pháp phòng ngừa và xử lý sự cố thường gặp.';
      default: 
        return 'Tổng hợp các bài viết liên quan đến ngành vận tải và phương tiện thương mại tại Việt Nam.';
    }
  };

  if (!currentCategory || !categoryLabel) {
    return (
      <Layout>
        <div className="container mx-auto px-4 text-center py-12">
          <h1 className="text-3xl font-bold mb-4">Danh mục không tồn tại</h1>
          <p className="mb-8">Danh mục bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link to="/blog" className="text-primary hover:underline">Quay lại trang Blog</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section cho danh mục */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <Link to="/blog" className="text-gray-300 hover:text-white flex items-center mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Quay lại Blog
          </Link>
          
          <div className="flex items-center mb-4">
            <span className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 text-primary rounded-lg mr-3">
              {getCategoryIcon()}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold">{categoryLabel}</h1>
          </div>
          
          <p className="md:text-lg text-gray-300 max-w-2xl">
            {getCategoryDescription()}
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Hiển thị bài viết nổi bật của danh mục (bài mới nhất) */}
        {categoryPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Bài Viết Nổi Bật</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to={`/blog/${categoryPosts[0].slug}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition h-full flex flex-col">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={categoryPosts[0].images[0]}
                      alt={categoryPosts[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-0 left-0 bg-primary text-white px-3 py-1 rounded-br-lg">
                      Nổi bật
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {categoryPosts[0].title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {categoryPosts[0].description}
                    </p>
                    <div className="mt-auto flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1 text-primary" />
                        <span>{categoryPosts[0].author}</span>
                      </div>
                      <div className="flex items-center">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        <span>{new Date(categoryPosts[0].publishDate).toLocaleDateString('vi-VN')}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{categoryPosts[0].readTime} phút</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              
              <div className="flex flex-col space-y-4">
                {categoryPosts.slice(1, 4).map(post => (
                  <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition h-full flex items-start">
                      <div className="w-1/3 aspect-square relative overflow-hidden">
                        <img
                          src={post.images[0]}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="w-2/3 p-4">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <CalendarDays className="h-3 w-3 mr-1" />
                          <span>{new Date(post.publishDate).toLocaleDateString('vi-VN')}</span>
                          <Clock className="h-3 w-3 ml-3 mr-1" />
                          <span>{post.readTime} phút</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Tất cả bài viết trong danh mục */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Tất Cả Bài Viết</h2>
          
          {categoryPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryPosts.map(post => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition h-full flex flex-col">
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
          ) : (
            <div className="text-center py-10">
              <p className="text-lg text-gray-600">Không có bài viết nào trong danh mục này.</p>
            </div>
          )}
        </div>
        
        {/* Phân trang */}
        {categoryPosts.length > 12 && (
          <div className="flex justify-center mt-12">
            <nav className="flex items-center gap-1">
              <button className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center hover:border-primary">
                <ChevronRight className="h-4 w-4 transform rotate-180" />
              </button>
              <button className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">1</button>
              <button className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center hover:border-primary">2</button>
              <button className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center hover:border-primary">3</button>
              <span className="px-2">...</span>
              <button className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center hover:border-primary">10</button>
              <button className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center hover:border-primary">
                <ChevronRight className="h-4 w-4" />
              </button>
            </nav>
          </div>
        )}
        
        {/* Danh mục khác */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Khám Phá Danh Mục Khác</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(blogCategories)
              .filter(([key]) => key !== currentCategory)
              .map(([key, label]) => (
                <Link
                  key={key}
                  to={`/blog/category/${key}`}
                  className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:border-primary/20 hover:shadow-md transition group text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-primary group-hover:bg-primary/10 mb-3">
                    {key === 'industry-news' && <TrendingUp className="h-5 w-5" />}
                    {key === 'product-review' && <Tag className="h-5 w-5" />}
                    {key === 'driver-tips' && <Shield className="h-5 w-5" />}
                    {key === 'maintenance' && <Eye className="h-5 w-5" />}
                  </div>
                  <h3 className="font-medium">{label}</h3>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogCategoryPage;
