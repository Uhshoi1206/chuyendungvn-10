
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
  const featuredTrucks = trucks.filter(truck => truck.type === 'xe-tai' && truck.isHot);
  const featuredCranes = trucks.filter(truck => truck.type === 'xe-cau');
  const featuredTrailers = trucks.filter(truck => truck.type === 'mooc');
  const featuredTractors = trucks.filter(truck => truck.type === 'dau-keo');
  
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
        <Hero />
        
        <FeaturedTrucks trucks={featuredTrucks} />
        
        <VehicleSection 
          title="Cẩu Chuyên Dụng"
          description="Giải pháp nâng hạ chuyên nghiệp với các dòng cẩu hiện đại, đa năng và an toàn. Đáp ứng mọi nhu cầu từ công trường xây dựng đến nhà máy sản xuất, với tầm với xa, tải trọng lớn và công nghệ tiên tiến."
          vehicles={featuredCranes}
          type="xe-cau"
          linkText="Xem tất cả cẩu"
          className="bg-gray-50"
        />
        
        <VehicleSection 
          title="Sơ Mi Rơ Mooc"
          description="Giải pháp vận chuyển chuyên nghiệp với hệ thống sơ mi rơ mooc đa dạng, linh hoạt. Phục vụ tối ưu nhu cầu vận tải container, hàng rời, và các loại hàng siêu trường, siêu trọng với độ bền và an toàn vượt trội."
          vehicles={featuredTrailers}
          type="mooc"
          linkText="Xem tất cả sơ mi rơ mooc"
        />
        
        <VehicleSection 
          title="Xe Đầu Kéo"
          description="Giải pháp vận tải chuyên nghiệp với dòng xe đầu kéo mạnh mẽ, hiệu suất cao và tiết kiệm nhiên liệu. Phù hợp cho vận chuyển hàng siêu trường, siêu trọng trên các tuyến đường dài, với công nghệ tiên tiến và độ tin cậy cao."
          vehicles={featuredTractors}
          type="dau-keo"
          linkText="Xem tất cả xe đầu kéo"
          className="bg-gray-50"
        />
        
        <WeightCategories weights={[...truckWeights, {id: "weight-25", name: "Trên 20 Tấn", value: 25}]} />
        <BrandCategories brands={truckBrands} />
        <ContactSection />
        <BlogSection posts={latestPostsByCategory} categories={blogCategories} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
