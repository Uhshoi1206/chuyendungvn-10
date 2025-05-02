
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FeaturedTrucks from '@/components/home/FeaturedTrucks';
import VehicleSection from '@/components/home/VehicleSection';
import WeightCategories from '@/components/home/WeightCategories';
import BrandCategories from '@/components/home/BrandCategories';
import ContactSection from '@/components/home/ContactSection';
import BlogSection from '@/components/home/BlogSection';
import { trucks, truckBrands, truckWeights } from '@/data/truckData';
import { blogPosts, blogCategories } from '@/data/blogData';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  // Lọc các xe tải nổi bật
  const featuredTrucks = trucks.filter(truck => truck.type === 'xe-tai' && truck.isHot);
  
  // Lọc xe cẩu
  const cranes = trucks.filter(truck => truck.type === 'xe-cau');
  
  // Lọc sơ mi rơ mooc
  const trailers = trucks.filter(truck => truck.type === 'mooc');
  
  // Lọc xe đầu kéo
  const tractors = trucks.filter(truck => truck.type === 'dau-keo');

  return (
    <Layout>
      <Helmet>
        <title>XeTaiViet - Chuyên Phương Tiện Thương Mại | Xe Tải, Cẩu, Mooc & Đầu Kéo</title>
        <meta name="description" content="Chuyên cung cấp xe tải, xe cẩu, sơ mi rơ mooc và xe đầu kéo. Đa dạng thương hiệu: Hyundai, Thaco, Isuzu, Hino, Dongfeng, JAC. Báo giá tốt nhất thị trường!" />
      </Helmet>
      
      <Hero />
      
      <FeaturedTrucks trucks={featuredTrucks} />
      
      <VehicleSection
        title="Cẩu Chuyên Dụng"
        description="Dòng xe cẩu chuyên dụng đa dạng tải trọng từ 5 - 100 tấn, phục vụ cho các công trình xây dựng, lắp đặt kết cấu và thiết bị công nghiệp."
        vehicles={cranes}
        type="xe-cau"
        linkText="Xem tất cả xe cẩu"
        className="bg-white"
      />
      
      <VehicleSection
        title="Sơ Mi Rơ Mooc"
        description="Sơ mi rơ mooc đa dạng: sàn, ben, xitec, chuyên dụng... đáp ứng mọi nhu cầu vận chuyển hàng hóa container, vật liệu xây dựng và hàng siêu trường siêu trọng."
        vehicles={trailers}
        type="mooc"
        linkText="Xem tất cả mooc"
        className=""
      />
      
      <VehicleSection
        title="Xe Đầu Kéo"
        description="Xe đầu kéo mạnh mẽ, bền bỉ với công suất lớn, phù hợp vận tải đường dài và liên tỉnh. Đa dạng mẫu mã từ 2 chân đến 3 chân."
        vehicles={tractors}
        type="dau-keo"
        linkText="Xem tất cả đầu kéo"
        className="bg-white"
      />
      
      <WeightCategories weights={truckWeights} />
      
      <BrandCategories brands={truckBrands} />
      
      <ContactSection />
      
      <BlogSection posts={blogPosts.slice(0, 4)} categories={blogCategories} />
    </Layout>
  );
};

export default Index;
