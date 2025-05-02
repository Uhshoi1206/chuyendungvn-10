
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FeaturedTrucks from '@/components/home/FeaturedTrucks';
import WeightCategories from '@/components/home/WeightCategories';
import BrandCategories from '@/components/home/BrandCategories';
import VehicleSection from '@/components/home/VehicleSection';
import ContactSection from '@/components/home/ContactSection';
import BlogSection from '@/components/home/BlogSection';
import { trucks, truckWeights, truckBrands } from '@/data/truckData';
import { blogPosts, blogCategories } from '@/data/blogData';
import SectionDivider from '@/components/SectionDivider';

const Index = () => {
  const [featuredTrucks, setFeaturedTrucks] = useState(trucks.slice(0, 3));
  const [craneTrucks, setCraneTrucks] = useState(trucks.filter(truck => truck.type === 'xe-cau').slice(0, 3));
  const [moocTrucks, setMoocTrucks] = useState(trucks.filter(truck => truck.type === 'mooc').slice(0, 3));
  const [headTrucks, setHeadTrucks] = useState(trucks.filter(truck => truck.type === 'dau-keo').slice(0, 3));
  const [latestPosts, setLatestPosts] = useState(blogPosts.slice(0, 4));

  return (
    <Layout>
      <Helmet>
        <title>XeTaiViet - Chuyên Phương Tiện Thương Mại | Xe Tải, Cẩu, Mooc & Đầu Kéo</title>
        <meta name="description" content="Chuyên cung cấp xe tải, xe cẩu, sơ mi rơ mooc và xe đầu kéo. Đa dạng thương hiệu: Hyundai, Thaco, Isuzu, Hino, Dongfeng, JAC. Báo giá tốt nhất thị trường!" />
      </Helmet>
      
      <Hero />
      <SectionDivider style="wave" bgTop="bg-gray-900" bgBottom="bg-gray-50" className="h-16" />
      
      <FeaturedTrucks trucks={featuredTrucks} />
      <SectionDivider style="curved" bgTop="bg-gray-50" bgBottom="bg-white" className="h-16" />
      
      <VehicleSection
        title="Cẩu Chuyên Dụng"
        description="Đa dạng các loại xe cẩu với tải trọng từ 3 tấn đến 25 tấn, đáp ứng đầy đủ nhu cầu nâng hạ, vận chuyển hàng hóa."
        vehicles={craneTrucks}
        type="xe-cau"
        linkText="Xem tất cả xe cẩu"
      />
      <SectionDivider style="wave" bgTop="bg-white" bgBottom="bg-gray-50" className="h-16" />
      
      <VehicleSection
        title="Sơ Mi Rơ Mooc"
        description="Đa dạng các loại mooc với nhiều kích thước và chủng loại, từ mooc phẳng, mooc lồng, mooc ben đến mooc xitec."
        vehicles={moocTrucks}
        type="mooc"
        linkText="Xem tất cả loại mooc"
        className="bg-gray-50"
      />
      <SectionDivider style="curved" bgTop="bg-gray-50" bgBottom="bg-white" className="h-16" />
      
      <VehicleSection
        title="Xe Đầu Kéo"
        description="Xe đầu kéo từ nhiều thương hiệu uy tín, phù hợp cho vận tải đường dài và vận chuyển hàng hóa nặng."
        vehicles={headTrucks}
        type="dau-keo"
        linkText="Xem tất cả xe đầu kéo"
      />
      <SectionDivider style="wave" bgTop="bg-white" bgBottom="bg-gray-50" className="h-16" />
      
      <WeightCategories weights={truckWeights} />
      <SectionDivider style="curved" bgTop="bg-gray-50" bgBottom="bg-white" className="h-16" />
      
      <BrandCategories brands={truckBrands} />
      <SectionDivider style="wave" bgTop="bg-white" bgBottom="bg-gray-50" className="h-16" />
      
      <ContactSection />
      <SectionDivider style="curved" bgTop="bg-gray-50" bgBottom="bg-white" className="h-16" />
      
      <BlogSection posts={latestPosts} categories={blogCategories} />
    </Layout>
  );
};

export default Index;
