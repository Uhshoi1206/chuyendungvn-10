
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet-async';
import Hero from '@/components/Hero';
import FeaturedTrucks from '@/components/home/FeaturedTrucks';
import VehicleSection from '@/components/home/VehicleSection';
import WeightCategories from '@/components/home/WeightCategories';
import BrandCategories from '@/components/home/BrandCategories';
import ContactSection from '@/components/home/ContactSection';
import BlogSection from '@/components/home/BlogSection';
import { trucks, truckBrands, truckWeights } from '@/data/truckData';
import { blogCategories, blogPosts } from '@/data/blogData';

const Index = () => {
  // Lọc danh sách xe theo loại
  const trucksByType = (type: 'xe-tai' | 'xe-cau' | 'mooc' | 'dau-keo', count: number = 3) => {
    return trucks.filter(truck => truck.type === type).slice(0, count);
  };

  // Lấy xe tải nổi bật
  const featuredTrucks = trucks
    .filter(truck => truck.isHot || truck.isNew)
    .filter(truck => truck.type === 'xe-tai')
    .slice(0, 3);

  // Lọc ra bài viết mới nhất theo danh mục
  const featuredPosts = Object.keys(blogCategories).map(category => {
    const postsInCategory = blogPosts.filter(post => post.category === category);
    return postsInCategory.sort((a, b) => b.publishDate - a.publishDate)[0];
  }).filter(Boolean).slice(0, 4);

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
        description="Cẩu chuyên dụng đa dạng sức nâng, từ 3 tấn đến 15 tấn, phù hợp với nhiều mục đích sử dụng khác nhau trong xây dựng và vận chuyển."
        vehicles={trucksByType('xe-cau')}
        type="xe-cau"
        linkText="Xem tất cả xe cẩu"
        className="bg-gray-50"
      />

      <VehicleSection
        title="Sơ Mi Rơ Mooc"
        description="Sơ mi rơ mooc đa dạng loại: sàn, ben, xitec, chở container... đáp ứng mọi nhu cầu vận chuyển hàng hóa."
        vehicles={trucksByType('mooc')}
        type="mooc"
        linkText="Xem tất cả sơ mi rơ mooc"
      />

      <VehicleSection
        title="Xe Đầu Kéo"
        description="Xe đầu kéo với công suất lớn, được thiết kế để vận chuyển hàng hóa siêu trường, siêu trọng trên các quãng đường dài."
        vehicles={trucksByType('dau-keo')}
        type="dau-keo"
        linkText="Xem tất cả xe đầu kéo"
        className="bg-gray-50"
      />

      <WeightCategories weights={truckWeights} />
      
      <BrandCategories brands={truckBrands} />
      
      <ContactSection />
      
      <BlogSection posts={featuredPosts} categories={blogCategories} />
    </Layout>
  );
};

export default Index;
