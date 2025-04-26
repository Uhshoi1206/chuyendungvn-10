import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '@/data/blogData';
import { blogCategoryLabels } from '@/models/BlogPost';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalendarDays, ChevronRight, Clock, Share2, User } from 'lucide-react';
import useRelatedTruckForBlogPost from '@/hooks/useRelatedTruckForBlogPost';
import { Button } from '@/components/ui/button';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Bài viết không tồn tại</h1>
            <p className="mb-8">Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
            <Link to="/blog" className="text-primary hover:underline">Quay lại trang Blog</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Tìm sản phẩm liên quan nếu bài viết tập trung vào 1 sản phẩm cụ thể
  const relatedTruck = useRelatedTruckForBlogPost(post);

  // Lấy các bài viết liên quan (cùng danh mục, trừ bài viết hiện tại)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm mb-6">
            <Link to="/" className="hover:text-primary">Trang chủ</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link to="/blog" className="hover:text-primary">Blog</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link to={`/blog/category/${post.category}`} className="hover:text-primary">
              {blogCategoryLabels[post.category]}
            </Link>
          </div>
          
          {/* Bài viết chính */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
            {/* Cover image */}
            <div className="aspect-[21/9] relative">
              <img
                src={post.images[0]}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 md:p-8">
              {/* Category badge */}
              <Link to={`/blog/category/${post.category}`} className="inline-block bg-red-50 text-primary rounded-full px-3 py-1 text-sm font-medium mb-4">
                {blogCategoryLabels[post.category]}
              </Link>
              
              {/* Title */}
              <h1 className="text-2xl md:text-4xl font-bold mb-4">
                {post.title}
              </h1>
              
              {/* Post meta */}
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <CalendarDays className="h-4 w-4 mr-1" />
                  <span>{new Date(post.publishDate).toLocaleDateString('vi-VN')}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime} phút đọc</span>
                </div>
                <button className="flex items-center ml-auto text-primary">
                  <Share2 className="h-4 w-4 mr-1" />
                  <span>Chia sẻ</span>
                </button>
              </div>
              
              {/* Post content */}
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-8 pt-4 border-t">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* --- Section Mua ngay nếu có sản phẩm --- */}
          {relatedTruck && (
            <div className="mb-8">
              <div className="bg-gradient-to-tr from-primary/10 to-white border border-primary rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6 animate-fade-in">
                <div className="w-32 h-20 md:w-48 md:h-28 flex-shrink-0 rounded-lg overflow-hidden shadow">
                  <img
                    src={relatedTruck.images[0]}
                    alt={relatedTruck.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-lg font-semibold text-primary mb-1">
                    {relatedTruck.name}
                  </div>
                  <div className="text-gray-700 mb-2 line-clamp-2">
                    {relatedTruck.description}
                  </div>
                  <div className="font-bold text-xl text-rose-600 mb-2">
                    {relatedTruck.priceText}
                  </div>
                  <Button asChild size="lg">
                    <a 
                      href={`/xe-tai/${relatedTruck.slug}`}
                      className="flex items-center gap-2"
                    >
                      Xem chi tiết xe này
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Bài viết liên quan */}
          {relatedPosts.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Bài viết liên quan</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="group">
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm transition hover:shadow-md h-full flex flex-col">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={relatedPost.images[0]}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <div className="mt-auto flex items-center justify-between text-sm text-gray-500">
                          <span className="flex items-center">
                            <CalendarDays className="h-3 w-3 mr-1" />
                            {new Date(relatedPost.publishDate).toLocaleDateString('vi-VN')}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {relatedPost.readTime} phút
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
