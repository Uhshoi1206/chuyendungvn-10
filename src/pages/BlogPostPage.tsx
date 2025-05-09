import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogPosts, blogCategories } from '@/data/blogData';
import { blogCategoryLabels, blogCategorySlugs } from '@/models/BlogPost';
import Layout from '@/components/Layout';
import { CalendarDays, ChevronRight, Clock, Share2, User, ThumbsUp, MessageCircle, BookmarkPlus, Facebook, Twitter, Linkedin, Copy, ArrowLeft } from 'lucide-react';
import useRelatedTruckForBlogPost from '@/hooks/useRelatedTruckForBlogPost';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 text-center py-12">
          <h1 className="text-3xl font-bold mb-4">Bài viết không tồn tại</h1>
          <p className="mb-8">Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <Link to="/blog" className="text-primary hover:underline">Quay lại trang Blog</Link>
        </div>
      </Layout>
    );
  }

  // Lấy slug tiếng Việt cho danh mục
  const getCategorySlug = (category: string) => {
    return blogCategorySlugs[category as keyof typeof blogCategorySlugs] || category;
  };

  // Tìm sản phẩm liên quan nếu bài viết tập trung vào 1 sản phẩm cụ thể
  const relatedTruck = useRelatedTruckForBlogPost(post);

  // Lấy các bài viết liên quan (cùng danh mục, trừ bài viết hiện tại)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);
    
  // Các bài viết đề xuất (khác danh mục)
  const recommendedPosts = blogPosts
    .filter(p => p.category !== post.category && p.id !== post.id)
    .slice(0, 2);

  // Tạo initials cho avatar
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Layout>
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm mb-6 py-2">
            <Link to="/" className="text-gray-500 hover:text-primary">Trang chủ</Link>
            <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
            <Link to="/blog" className="text-gray-500 hover:text-primary">Blog</Link>
            <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
            <Link to={`/danh-muc-bai-viet/${getCategorySlug(post.category)}`} className="text-gray-500 hover:text-primary">
              {blogCategoryLabels[post.category]}
            </Link>
            <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
            <span className="truncate max-w-[200px] text-gray-700">{post.title}</span>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {/* Quay lại button */}
                <div className="p-4 md:p-6">
                  <Link to={`/danh-muc-bai-viet/${getCategorySlug(post.category)}`} className="inline-flex items-center text-primary hover:underline mb-4">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Quay lại {blogCategoryLabels[post.category]}
                  </Link>
                  
                  {/* Category badge */}
                  <Link 
                    to={`/danh-muc-bai-viet/${getCategorySlug(post.category)}`} 
                    className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium mb-4"
                  >
                    {blogCategoryLabels[post.category]}
                  </Link>
                  
                  {/* Title */}
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    {post.title}
                  </h1>
                  
                  {/* Post meta */}
                  <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                    <div className="flex items-center">
                      <Avatar className="h-9 w-9 mr-2">
                        <AvatarImage src="" alt={post.author} />
                        <AvatarFallback className="bg-primary/20 text-primary">
                          {getInitials(post.author)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{post.author}</div>
                        <div className="text-xs text-gray-500">Chuyên gia xe tải</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      <span>{new Date(post.publishDate).toLocaleDateString('vi-VN')}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime} phút đọc</span>
                    </div>
                  </div>
                </div>
                
                {/* Cover image */}
                <div className="aspect-[21/9] relative">
                  <img
                    src={post.images[0]}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content with better typography */}
                <div className="p-4 md:p-8">
                  {/* Post content */}
                  <div 
                    className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  
                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-8 pt-6 border-t">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Share and Like buttons */}
                  <div className="mt-8 pt-6 border-t">
                    <div className="flex flex-wrap justify-between items-center">
                      <div className="flex gap-4 mb-4 sm:mb-0">
                        <button className="flex items-center gap-2 text-gray-600 hover:text-primary">
                          <ThumbsUp className="h-5 w-5" />
                          <span>Thích</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-600 hover:text-primary">
                          <MessageCircle className="h-5 w-5" />
                          <span>Bình luận</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-600 hover:text-primary">
                          <BookmarkPlus className="h-5 w-5" />
                          <span>Lưu bài</span>
                        </button>
                      </div>
                      
                      <div className="flex gap-3">
                        <span className="text-sm text-gray-500 mr-2 hidden sm:block">Chia sẻ:</span>
                        <button className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90">
                          <Facebook className="h-4 w-4" />
                        </button>
                        <button className="w-8 h-8 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:opacity-90">
                          <Twitter className="h-4 w-4" />
                        </button>
                        <button className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90">
                          <Linkedin className="h-4 w-4" />
                        </button>
                        <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300">
                          <Copy className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Author bio */}
                  <div className="mt-8 pt-6 border-t">
                    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start bg-gray-50 rounded-xl p-6">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src="" alt={post.author} />
                        <AvatarFallback className="bg-primary/20 text-primary text-xl">
                          {getInitials(post.author)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-center sm:text-left">{post.author}</h3>
                        <p className="text-gray-600 mb-3 text-center sm:text-left">Chuyên gia xe tải với hơn 10 năm kinh nghiệm trong ngành vận tải thương mại.</p>
                        <div className="flex gap-2 justify-center sm:justify-start">
                          <Button variant="outline" size="sm" className="rounded-full">
                            <Facebook className="h-4 w-4 mr-1" />
                            Theo dõi
                          </Button>
                          <Button variant="outline" size="sm" className="rounded-full">
                            <Twitter className="h-4 w-4 mr-1" />
                            Tweet
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* --- Section Mua ngay nếu có sản phẩm --- */}
              {relatedTruck && (
                <div className="mt-8">
                  <div className="bg-gradient-to-tr from-primary/10 to-white border border-primary/10 rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6">
                    <div className="w-full md:w-48 h-28 flex-shrink-0 rounded-lg overflow-hidden shadow">
                      <img
                        src={relatedTruck.images[0]}
                        alt={relatedTruck.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1 min-w-0 text-center md:text-left">
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
                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-4">Bài viết liên quan</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map(relatedPost => (
                      <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="group">
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition h-full flex flex-col">
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
            
            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-6">
              {/* Danh mục phổ biến */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold mb-4">Danh Mục</h3>
                <div className="space-y-2">
                  {Object.entries(blogCategories).map(([key, label]) => (
                    <Link 
                      key={key} 
                      to={`/danh-muc-bai-viet/${getCategorySlug(key)}`}
                      className={`flex items-center justify-between px-3 py-2 rounded-md transition-colors ${
                        key === post.category 
                          ? 'bg-primary/20 text-primary font-medium' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <span>{label}</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Bài viết đề xuất */}
              {recommendedPosts.length > 0 && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-bold mb-4">Bài Viết Đề Xuất</h3>
                  <div className="space-y-4">
                    {recommendedPosts.map(recPost => (
                      <Link key={recPost.id} to={`/blog/${recPost.slug}`} className="flex gap-3 group">
                        <div className="w-1/3 aspect-square rounded-md overflow-hidden flex-shrink-0">
                          <img 
                            src={recPost.images[0]} 
                            alt={recPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1">
                          <span className="text-xs text-primary font-medium block mb-1">
                            {blogCategories[recPost.category]}
                          </span>
                          <h4 className="text-sm font-bold line-clamp-2 group-hover:text-primary transition-colors">
                            {recPost.title}
                          </h4>
                          <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {recPost.readTime} phút
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Form đăng ký tư vấn */}
              <div className="bg-primary/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Đăng Ký Nhận Tư Vấn</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Để lại thông tin để nhận tư vấn miễn phí về sản phẩm phù hợp với nhu cầu của bạn
                </p>
                <form className="space-y-3">
                  <input 
                    type="text" 
                    placeholder="Họ tên"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary" 
                  />
                  <input 
                    type="tel" 
                    placeholder="Số điện thoại"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary" 
                  />
                  <Button className="w-full">Gửi yêu cầu</Button>
                </form>
              </div>
              
              {/* Tags */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold mb-4">Từ Khóa Phổ Biến</h3>
                <div className="flex flex-wrap gap-2">
                  <Link to="/blog?tag=hyundai" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    #hyundai
                  </Link>
                  <Link to="/blog?tag=xe-tai" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    #xe_tải
                  </Link>
                  <Link to="/blog?tag=van-tai" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    #vận_tải
                  </Link>
                  <Link to="/blog?tag=xe-tai-nhe" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    #xe_tải_nhẹ
                  </Link>
                  <Link to="/blog?tag=xe-cau" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    #xe_cẩu
                  </Link>
                  <Link to="/blog?tag=so-mi-ro-mooc" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    #sơ_mi_rơ_mooc
                  </Link>
                  <Link to="/blog?tag=dong-co" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    #động_cơ
                  </Link>
                  <Link to="/blog?tag=lai-xe" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    #lái_xe
                  </Link>
                  <Link to="/blog?tag=bao-duong" className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm">
                    #bảo_dưỡng
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostPage;
