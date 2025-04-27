import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeaturedTrucks from '@/components/home/FeaturedTrucks';
import VehicleSection from '@/components/home/VehicleSection';
import WeightCategories from '@/components/home/WeightCategories';
import BrandCategories from '@/components/home/BrandCategories';
import ContactSection from '@/components/home/ContactSection';
import BlogSection from '@/components/home/BlogSection';
import { trucks } from '@/data/truckData';
import { truckBrands, truckWeights } from '@/data/truckData';
import { blogPosts, blogCategories } from '@/data/blogData';

const Index = () => {
  const featuredTrucks = trucks.filter(truck => truck.type === 'truck' && truck.isHot);
  const featuredCranes = trucks.filter(truck => truck.type === 'crane');
  const featuredTrailers = trucks.filter(truck => truck.type === 'trailer');
  const featuredTractors = trucks.filter(truck => truck.type === 'tractor');
  
  // Lấy bài viết mới nhất từ mỗi danh mục
  const latestPostsByCategory = Object.keys(blogCategories).map(category => {
    const categoryPosts = blogPosts.filter(post => post.category === category);
    return categoryPosts.sort((a, b) => 
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    )[0];
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Xe Tải Nổi Bật */}
        <FeaturedTrucks trucks={featuredTrucks} />
        
        {/* Cẩu Chuyên Dụng */}
        <VehicleSection 
          title="Cẩu Chuyên Dụng"
          description="Giải pháp nâng hạ chuyên nghiệp với các dòng cẩu hiện đại, đa năng và an toàn. Đáp ứng mọi nhu cầu từ công trường xây dựng đến nhà máy sản xuất, với tầm với xa, tải trọng lớn và công nghệ tiên tiến."
          vehicles={featuredCranes}
          type="crane"
          linkText="Xem tất cả cẩu"
          className="bg-gray-50"
        />
        
        {/* Sơ Mi Rơ Mooc */}
        <VehicleSection 
          title="Sơ Mi Rơ Mooc"
          description="Đa dạng các loại sơ mi rơ mooc, đáp ứng mọi nhu cầu vận chuyển từ container đến hàng rời."
          vehicles={featuredTrailers}
          type="trailer"
          linkText="Xem tất cả sơ mi rơ mooc"
        />
        
        {/* Xe Đầu Kéo */}
        <VehicleSection 
          title="Xe Đầu Kéo"
          description="Xe đầu kéo mạnh mẽ, phù hợp cho vận tải đường dài và hàng hóa siêu trường siêu trọng."
          vehicles={featuredTractors}
          type="tractor"
          linkText="Xem tất cả xe đầu kéo"
          className="bg-gray-50"
        />
        
        {/* Phân Loại Theo Tải Trọng */}
        <WeightCategories weights={truckWeights} />
        
        {/* Thương hiệu nổi tiếng */}
        <BrandCategories brands={truckBrands} />
        
        {/* Liên hệ tư vấn */}
        <ContactSection />
        
        {/* Tin tức & blog */}
        <BlogSection posts={latestPostsByCategory} categories={blogCategories} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
