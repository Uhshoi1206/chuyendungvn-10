
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { trucks, truckWeights, truckBrands } from '@/data/truckData';
import { blogPosts, blogCategories } from '@/data/blogData';

// Import các component mới
import FeaturedTrucks from '@/components/home/FeaturedTrucks';
import VehicleSection from '@/components/home/VehicleSection';
import WeightCategories from '@/components/home/WeightCategories';
import BrandCategories from '@/components/home/BrandCategories';
import BlogSection from '@/components/home/BlogSection';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  // Get hot trucks for featured section
  const hotTrucks = trucks.filter(truck => truck.isHot && truck.type === 'truck');
  
  // Lọc sản phẩm theo loại
  const cranes = trucks.filter(truck => truck.type === 'crane');
  const trailers = trucks.filter(truck => truck.type === 'trailer');
  const tractors = trucks.filter(truck => truck.type === 'tractor');

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
      <Hero />
      
      <FeaturedTrucks trucks={hotTrucks} />
      
      <VehicleSection
        title="Cẩu Chất Lượng Cao"
        description="Các loại cẩu chuyên dụng với công nghệ tiên tiến, đa dạng tải trọng, phù hợp cho nhiều mục đích sử dụng khác nhau."
        vehicles={cranes}
        type="crane"
        linkText="Xem tất cả cẩu"
      />
      
      <VehicleSection
        title="Sơ Mi Rơ Mooc Đa Dạng"
        description="Các loại mooc chất lượng cao, đa dạng kích thước và tải trọng, đáp ứng mọi nhu cầu vận chuyển."
        vehicles={trailers}
        type="trailer"
        linkText="Xem tất cả mooc"
        className="bg-gray-50"
      />
      
      <VehicleSection
        title="Xe Đầu Kéo Cao Cấp"
        description="Các dòng xe đầu kéo mạnh mẽ, bền bỉ, tiết kiệm nhiên liệu, phù hợp cho vận chuyển hàng hóa đường dài."
        vehicles={tractors}
        type="tractor"
        linkText="Xem tất cả xe đầu kéo"
      />
      
      <WeightCategories weights={truckWeights} />
      <BrandCategories brands={truckBrands} />
      <BlogSection posts={latestPostsByCategory} categories={blogCategories} />
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Index;
