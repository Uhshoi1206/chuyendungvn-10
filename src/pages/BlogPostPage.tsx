
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { blogPosts, blogCategories } from '@/data/blogData';
import { BlogCategory, blogCategoryLabels } from '@/models/BlogPost';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, ArrowLeft, User, Share, Tag, ChevronRight } from 'lucide-react';

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    navigate('/404');
    return null;
  }

  // Find related posts (same category)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center text-sm text-gray-500">
              <Link to="/" className="hover:text-primary">Trang chủ</Link>
              <span className="mx-2">/</span>
              <Link to="/blog" className="hover:text-primary">Blog</Link>
              <span className="mx-2">/</span>
              <Link to={`/blog?category=${post.category}`} className="hover:text-primary">
                {blogCategoryLabels[post.category as BlogCategory]}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-700 truncate max-w-[150px] md:max-w-[300px]">{post.title}</span>
            </div>
          </div>
        </div>
        
        {/* Hero Section */}
        <div className="bg-white py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Link 
                  to={`/blog?category=${post.category}`}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm inline-block hover:bg-primary/20 transition-colors"
                >
                  {blogCategoryLabels[post.category as BlogCategory]}
                </Link>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  <span>{new Date(post.publishDate).toLocaleDateString('vi-VN')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} phút đọc</span>
                </div>
                <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-primary" onClick={() => navigator.share?.({
                  title: post.title,
                  text: post.description,
                  url: window.location.href
                }).catch(() => {})}>
                  <Share className="w-4 h-4 mr-2" />
                  <span>Chia sẻ</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="container mx-auto px-4 -mt-6 mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={post.images[0]}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Mô tả */}
              <p className="lead text-xl text-gray-600 mb-8">
                {post.description}
              </p>
              
              {/* Phần nội dung với các hình ảnh */}
              <div className="my-8">
                <div dangerouslySetInnerHTML={{ __html: post.content.substring(0, post.content.length / 3) }} />
                
                {/* Hình ảnh thứ hai */}
                {post.images[1] && (
                  <div className="my-8">
                    <img
                      src={post.images[1]}
                      alt={`${post.title} - Hình minh họa 2`}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <p className="text-center text-sm text-gray-500 mt-2">Hình ảnh minh họa</p>
                  </div>
                )}
                
                <div dangerouslySetInnerHTML={{ __html: post.content.substring(post.content.length / 3, post.content.length * 2/3) }} />
                
                {/* Hình ảnh thứ ba */}
                {post.images[2] && (
                  <div className="my-8 flex justify-center">
                    <div className="w-3/4">
                      <img
                        src={post.images[2]}
                        alt={`${post.title} - Hình minh họa 3`}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                      <p className="text-center text-sm text-gray-500 mt-2">Hình ảnh minh họa</p>
                    </div>
                  </div>
                )}
                
                <div dangerouslySetInnerHTML={{ __html: post.content.substring(post.content.length * 2/3) }} />
                
                {/* Hình ảnh thứ tư */}
                {post.images[3] && (
                  <div className="my-8">
                    <img
                      src={post.images[3]}
                      alt={`${post.title} - Hình minh họa 4`}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <p className="text-center text-sm text-gray-500 mt-2">Hình ảnh minh họa</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center flex-wrap gap-2">
                  <Tag className="w-5 h-5 text-primary mr-2" />
                  {post.tags.map(tag => (
                    <Link key={tag} to={`/blog?tag=${tag}`} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors">
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* Author Box */}
            <div className="mt-12 bg-gray-50 rounded-lg p-6 border border-gray-100">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                  <User className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">{post.author}</h3>
                  <p className="text-gray-500 text-sm">Tác giả</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="bg-white py-16 border-t border-gray-100">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Bài viết liên quan</h2>
                  <Link 
                    to={`/blog?category=${post.category}`} 
                    className="text-primary flex items-center hover:underline"
                  >
                    <span>Xem thêm</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map(relatedPost => (
                    <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="group">
                      <div className="h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                        <div className="aspect-video relative overflow-hidden">
                          <img
                            src={relatedPost.images[0]}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-5">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">
                              {blogCategoryLabels[relatedPost.category as BlogCategory]}
                            </span>
                            <span className="text-xs text-gray-500 flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {relatedPost.readTime} phút
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold mt-2 group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
                            <div className="flex items-center gap-1">
                              <CalendarDays className="w-4 h-4" />
                              <span>{new Date(relatedPost.publishDate).toLocaleDateString('vi-VN')}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;
