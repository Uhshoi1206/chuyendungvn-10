
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Truck } from '@/models/TruckTypes';
import { trucks } from '@/data/truckData';
import TruckItem from '@/components/TruckItem';
import { blogPosts, blogCategories } from '@/data/blogData';
import { CalendarDays, User, Clock } from 'lucide-react';

const SearchPage = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [productResults, setProductResults] = useState<Truck[]>([]);
  const [blogResults, setBlogResults] = useState<typeof blogPosts>([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q');
    if (query) {
      setSearchTerm(query);
      performSearch(query);
    }
  }, [location.search]);

  const performSearch = (query: string) => {
    // Tìm kiếm sản phẩm
    const prodResults = trucks.filter(truck => {
      if (truck.name.toLowerCase().includes(query.toLowerCase())) return true;
      if (truck.brand.toLowerCase().includes(query.toLowerCase())) return true;
      if (truck.description.toLowerCase().includes(query.toLowerCase())) return true;
      if (truck.features.some(feature => feature.toLowerCase().includes(query.toLowerCase()))) return true;
      if (truck.engine.toLowerCase().includes(query.toLowerCase())) return true;
      if (truck.fuelType.toLowerCase().includes(query.toLowerCase())) return true;
      return false;
    });

    // Tìm kiếm bài viết blog
    const blogFiltered = blogPosts.filter(post => {
      if (post.title.toLowerCase().includes(query.toLowerCase())) return true;
      if (post.description.toLowerCase().includes(query.toLowerCase())) return true;
      if (post.content.toLowerCase().includes(query.toLowerCase())) return true;
      if ((post.tags || []).some(tag => tag.toLowerCase().includes(query.toLowerCase()))) return true;
      return false;
    });

    setProductResults(prodResults);
    setBlogResults(blogFiltered);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const newSearchParams = new URLSearchParams();
    newSearchParams.set('q', searchTerm);
    window.history.pushState({}, '', `/search?${newSearchParams.toString()}`);
    performSearch(searchTerm);
  };

  // Tổng số kết quả tìm kiếm
  const totalResults = productResults.length + blogResults.length;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl font-bold mb-6">Tìm kiếm</h1>
          <form onSubmit={handleSearch} className="flex gap-2 mb-8">
            <Input
              type="search"
              placeholder="Nhập từ khóa tìm kiếm..."
              className="flex-1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit">Tìm kiếm</Button>
          </form>
          {searchTerm && (
            <p className="text-lg mb-4">
              {totalResults} kết quả tìm kiếm cho <span className="font-medium">"{searchTerm}"</span>
            </p>
          )}
        </div>

        {/* Nếu không có kết quả cả hai nhóm */}
        {totalResults === 0 && searchTerm ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-2">Không tìm thấy kết quả</h2>
            <p className="text-gray-600 mb-6">Không có kết quả phù hợp với từ khóa "{searchTerm}"</p>
            <p className="mb-6">Hãy thử:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 max-w-md mx-auto">
              <li>Kiểm tra lại chính tả</li>
              <li>Sử dụng các từ khóa ngắn hơn</li>
              <li>Sử dụng từ khóa khác</li>
            </ul>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setProductResults([]);
                setBlogResults([]);
                window.history.pushState({}, '', '/search');
              }}
            >
              Xóa tìm kiếm
            </Button>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            {/* DANH SÁCH SẢN PHẨM */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Sản phẩm xe tải</h2>
              {productResults.length === 0 ? (
                <p className="text-gray-600">Không tìm thấy xe tải phù hợp.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {productResults.map(truck => (
                    <TruckItem key={truck.id} truck={truck} />
                  ))}
                </div>
              )}
            </div>

            {/* DANH SÁCH BÀI VIẾT BLOG */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Bài viết Blog</h2>
              {blogResults.length === 0 ? (
                <p className="text-gray-600">Không tìm thấy bài viết phù hợp.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogResults.map(post => (
                    <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                      <div className="bg-white rounded-lg overflow-hidden shadow-sm transition hover:shadow-md h-full flex flex-col">
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
              )}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SearchPage;

