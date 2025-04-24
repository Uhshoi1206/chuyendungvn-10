
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { blogPosts, blogCategories } from '@/data/blogData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, ArrowLeft, User, Share } from 'lucide-react';

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
        {/* Hero Section */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              className="mb-8"
              onClick={() => navigate('/blog')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại Blog
            </Button>

            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  {blogCategories[post.category]}
                </span>
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
                <Button variant="ghost" className="p-0 hover:bg-transparent" onClick={() => navigator.share?.({
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
        <div className="container mx-auto px-4 -mt-12">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video relative overflow-hidden rounded-xl shadow-lg mb-12">
              <img
                src={post.image}
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
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.trim().startsWith('-')) {
                  const items = paragraph.split('\n');
                  return (
                    <ul key={index} className="my-4">
                      {items.map((item, i) => (
                        <li key={i}>{item.trim().replace('-', '').trim()}</li>
                      ))}
                    </ul>
                  );
                }
                return <p key={index} className="mb-6">{paragraph}</p>;
              })}
            </div>
            
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="bg-white py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold mb-8">Bài viết liên quan</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map(relatedPost => (
                    <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="group">
                      <div className="h-full">
                        <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          {blogCategories[relatedPost.category]}
                        </span>
                        <h3 className="text-xl font-semibold mt-3 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
                          <div className="flex items-center gap-1">
                            <CalendarDays className="w-4 h-4" />
                            <span>{new Date(relatedPost.publishDate).toLocaleDateString('vi-VN')}</span>
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
