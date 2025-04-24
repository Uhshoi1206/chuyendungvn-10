
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import TruckItem from '@/components/TruckItem';
import ContactForm from '@/components/ContactForm';
import { trucks, truckWeights, truckBrands } from '@/data/truckData';
import { blogPosts, blogCategories } from '@/data/blogData';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CalendarDays, Clock, ChevronRight } from 'lucide-react';

const Index = () => {
  // Get hot trucks for featured section
  const hotTrucks = trucks.filter(truck => truck.isHot);
  // Get new trucks
  const newTrucks = trucks.filter(truck => truck.isNew);

  // Lấy bài viết mới nhất của mỗi danh mục
  const latestPostsByCategory = Object.keys(blogCategories).map(category => {
    const categoryPosts = blogPosts
      .filter(post => post.category === category)
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    
    return categoryPosts.length > 0 ? categoryPosts[0] : null;
  }).filter(post => post !== null);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Trucks Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Xe Tải Nổi Bật</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Những dòng xe tải bán chạy nhất với chất lượng vượt trội và giá thành hợp lý, 
              đang được nhiều doanh nghiệp vận tải lựa chọn.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotTrucks.slice(0, 3).map(truck => (
              <TruckItem key={truck.id} truck={truck} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="px-6">
              <Link to="/danh-muc">Xem tất cả xe tải</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Cẩu Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Cẩu Chất Lượng Cao</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Các loại cẩu chuyên dụng với công nghệ tiên tiến, đa dạng tải trọng, 
              phù hợp cho nhiều mục đích sử dụng khác nhau.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
                  alt="Cẩu tự hành"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">Cẩu Tự Hành 25 Tấn</h3>
                <p className="text-gray-600 mb-4">Cẩu tự hành hiện đại, khả năng nâng tối đa 25 tấn</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/lien-he">Liên hệ tư vấn</Link>
                </Button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1469041797191-50ace28483c3"
                  alt="Cẩu lắp xe tải"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">Cẩu Gắn Xe Tải</h3>
                <p className="text-gray-600 mb-4">Cẩu chuyên dụng lắp trên xe tải, tải trọng đa dạng</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/lien-he">Liên hệ tư vấn</Link>
                </Button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
                  alt="Cẩu công trình"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">Cẩu Tháp Công Trình</h3>
                <p className="text-gray-600 mb-4">Cẩu tháp chuyên dụng cho các công trình xây dựng</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/lien-he">Liên hệ tư vấn</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="px-6">
              <Link to="/danh-muc?type=crane">Xem tất cả cẩu</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Mooc Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Sơ Mi Rơ Mooc Đa Dạng</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Các loại mooc chất lượng cao, đa dạng kích thước và tải trọng, 
              đáp ứng mọi nhu cầu vận chuyển.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1469041797191-50ace28483c3"
                  alt="Mooc sàn"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">Mooc Sàn</h3>
                <p className="text-gray-600 mb-4">Mooc sàn 40 feet, tải trọng cao, chất lượng vượt trội</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/lien-he">Liên hệ tư vấn</Link>
                </Button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
                  alt="Mooc ben"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">Mooc Ben</h3>
                <p className="text-gray-600 mb-4">Mooc ben tự đổ, thiết kế hiện đại, bền bỉ</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/lien-he">Liên hệ tư vấn</Link>
                </Button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1469041797191-50ace28483c3"
                  alt="Mooc xương"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">Mooc Xương</h3>
                <p className="text-gray-600 mb-4">Mooc xương chuyên chở container, độ bền cao</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/lien-he">Liên hệ tư vấn</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="px-6">
              <Link to="/danh-muc?type=trailer">Xem tất cả mooc</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Xe Đầu Kéo Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Xe Đầu Kéo Cao Cấp</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Các dòng xe đầu kéo mạnh mẽ, bền bỉ, tiết kiệm nhiên liệu,
              phù hợp cho vận chuyển hàng hóa đường dài.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1550919559-2256f4b083a4"
                  alt="Xe đầu kéo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">Đầu Kéo Cao Cấp</h3>
                <p className="text-gray-600 mb-4">Xe đầu kéo cao cấp, động cơ mạnh mẽ, cabin tiện nghi</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/lien-he">Liên hệ tư vấn</Link>
                </Button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7"
                  alt="Xe đầu kéo thế hệ mới"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">Đầu Kéo Thế Hệ Mới</h3>
                <p className="text-gray-600 mb-4">Xe đầu kéo thế hệ mới, tích hợp công nghệ tiên tiến</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/lien-he">Liên hệ tư vấn</Link>
                </Button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1597404294360-feeeda04612e"
                  alt="Xe đầu kéo tiết kiệm nhiên liệu"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">Đầu Kéo Tiết Kiệm</h3>
                <p className="text-gray-600 mb-4">Xe đầu kéo tiết kiệm nhiên liệu, chi phí vận hành thấp</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/lien-he">Liên hệ tư vấn</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="px-6">
              <Link to="/danh-muc?type=tractor">Xem tất cả xe đầu kéo</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Weight Categories Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Phân Loại Theo Tải Trọng</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cung cấp đa dạng các dòng xe tải với nhiều tải trọng khác nhau, 
              đáp ứng mọi nhu cầu vận chuyển của khách hàng.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {truckWeights.map(weight => (
              <Link 
                key={weight.id} 
                to={`/danh-muc?weight=${weight.value}`}
                className="bg-white p-5 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="font-bold text-lg mb-2">{weight.name}</div>
                <p className="text-gray-600 text-sm">Xem các dòng xe</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Brand Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Thương Hiệu Nổi Tiếng</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi phân phối các dòng xe tải từ những thương hiệu hàng đầu thế giới và trong nước, 
              đảm bảo chất lượng và độ tin cậy.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {truckBrands.map(brand => (
              <Link 
                key={brand.id} 
                to={`/danh-muc?brand=${brand.name}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center border border-gray-100"
              >
                <span className="font-bold text-xl">{brand.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Section - Tự động từ blogCategories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Tin Tức & Chia Sẻ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cập nhật thông tin mới nhất về ngành vận tải và các dòng xe tải phổ biến trên thị trường
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPostsByCategory.map(post => post && (
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
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" className="px-6">
              <Link to="/blog" className="flex items-center gap-2">
                Xem tất cả bài viết
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* New Arrivals Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Xe Mới Về</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Khám phá những dòng xe tải mới nhất, được trang bị công nghệ hiện đại và 
              đáp ứng các tiêu chuẩn khí thải nghiêm ngặt.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newTrucks.map(truck => (
              <TruckItem key={truck.id} truck={truck} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Liên Hệ Tư Vấn</h2>
              <p className="text-gray-600 mb-6">
                Để được tư vấn chi tiết về sản phẩm, giá cả và chương trình khuyến mãi, 
                vui lòng để lại thông tin liên hệ. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
              </p>
              
              <ContactForm />
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-2xl font-bold mb-4">Tại sao chọn chúng tôi?</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">1</div>
                    <div>
                      <h4 className="font-bold mb-1">Đa dạng sản phẩm</h4>
                      <p className="text-gray-600">Cung cấp đầy đủ các dòng xe tải từ nhỏ đến lớn của nhiều thương hiệu.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">2</div>
                    <div>
                      <h4 className="font-bold mb-1">Giá cả cạnh tranh</h4>
                      <p className="text-gray-600">Cam kết mức giá tốt nhất thị trường và nhiều chương trình ưu đãi.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">3</div>
                    <div>
                      <h4 className="font-bold mb-1">Hỗ trợ tài chính</h4>
                      <p className="text-gray-600">Hỗ trợ vay ngân hàng lên đến 70% giá trị xe với thủ tục đơn giản.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">4</div>
                    <div>
                      <h4 className="font-bold mb-1">Dịch vụ sau bán hàng</h4>
                      <p className="text-gray-600">Hỗ trợ kỹ thuật 24/7 và mạng lưới dịch vụ rộng khắp trên toàn quốc.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
