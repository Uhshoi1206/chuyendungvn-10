
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
  
  // Lấy bài viết mới nhất từ mỗi danh mục (xe-tai, cau, mooc, xe-dau-keo)
  const latestPostsByCategory = Object.keys(blogCategories).map(category => {
    const categoryPosts = blogPosts.filter(post => post.category === category);
    return categoryPosts.sort((a, b) => 
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    )[0]; // Lấy bài viết mới nhất của mỗi danh mục
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Phân loại theo tải trọng */}
        <WeightCategories weights={truckWeights} />
        
        {/* Xe Tải Nổi Bật */}
        <FeaturedTrucks trucks={featuredTrucks} />
        
        {/* Thương hiệu nổi tiếng */}
        <BrandCategories brands={truckBrands} />
        
        {/* Các loại xe khác */}
        <VehicleSection 
          title="Xe Đầu Kéo"
          description="Xe đầu kéo mạnh mẽ, phù hợp cho vận tải đường dài và hàng hóa siêu trường siêu trọng."
          vehicles={featuredTractors}
          type="tractor"
          linkText="Xem tất cả xe đầu kéo"
          className="bg-gray-50"
        />
        
        <VehicleSection 
          title="Sơ Mi Rơ Mooc"
          description="Đa dạng các loại sơ mi rơ mooc, đáp ứng mọi nhu cầu vận chuyển từ container đến hàng rời."
          vehicles={featuredTrailers}
          type="trailer"
          linkText="Xem tất cả sơ mi rơ mooc"
        />
        
        <VehicleSection 
          title="Cẩu Chuyên Dụng"
          description="Cẩu các loại với nhiều tính năng vượt trội, phù hợp cho công trường và bốc xếp hàng hóa."
          vehicles={featuredCranes}
          type="crane"
          linkText="Xem tất cả cẩu"
          className="bg-gray-50"
        />
        
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
