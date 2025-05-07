
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import SectionDivider from '@/components/SectionDivider';
import { 
  featuredTrucks, 
  specializedCranes, 
  semiTrailers, 
  tractors,
  truckWeights 
} from '@/data/truckData';
import { blogPosts, blogCategories } from '@/data/blogData';
import { truckBrands } from '@/data/truckData';
import VehicleCarousel from '@/components/home/VehicleCarousel';
import BrandCategories from '@/components/home/BrandCategories';
import ContactSection from '@/components/home/ContactSection';
import BlogSection from '@/components/home/BlogSection';

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>XeTaiViet - Chuyên Phương Tiện Thương Mại | Xe Tải, Cẩu, Mooc & Đầu Kéo</title>
        <meta 
          name="description" 
          content="Chuyên cung cấp xe tải, xe cẩu, sơ mi rơ mooc và xe đầu kéo với đa dạng thương hiệu: Hyundai, Thaco, Isuzu, Hino, Dongfeng, JAC. Giá tốt nhất thị trường!" 
        />
      </Helmet>

      {/* Hero Section */}
      <Hero />
      
      {/* Xe Tải Nổi Bật */}
      <VehicleCarousel 
        vehicles={featuredTrucks} 
        title="Xe Tải Nổi Bật" 
        description="Các dòng xe tải được nhiều khách hàng tin dùng, đa dạng tải trọng và thương hiệu"
        viewAllUrl="/danh-muc?type=xe-tai"
        viewAllText="Xem tất cả xe tải"
      />

      {/* Cẩu Chuyên Dụng */}
      <VehicleCarousel 
        vehicles={specializedCranes} 
        title="Cẩu Chuyên Dụng" 
        description="Các dòng xe cẩu chuyên dụng, đa dạng tải trọng và thương hiệu"
        viewAllUrl="/danh-muc?type=xe-cau"
        viewAllText="Xem tất cả xe cẩu"
      />

      {/* Sơ Mi Rơ Mooc */}
      <VehicleCarousel 
        vehicles={semiTrailers} 
        title="Sơ Mi Rơ Mooc" 
        description="Các dòng mooc chuyên dụng, đa dạng loại và thương hiệu"
        viewAllUrl="/danh-muc?type=mooc"
        viewAllText="Xem tất cả sơ mi rơ mooc"
      />

      {/* Xe Đầu Kéo */}
      <VehicleCarousel 
        vehicles={tractors} 
        title="Xe Đầu Kéo" 
        description="Các dòng xe đầu kéo, đa dạng công suất và thương hiệu"
        viewAllUrl="/danh-muc?type=dau-keo"
        viewAllText="Xem tất cả xe đầu kéo"
      />
      
      {/* Phân Loại Theo Tải Trọng */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Phân Loại Theo Tải Trọng"
            description="Dễ dàng tìm kiếm phương tiện phù hợp với nhu cầu vận chuyển của bạn"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {truckWeights.map((weight, index) => (
              <a 
                key={index}
                href={`/danh-muc?minWeight=${weight.minWeight}&maxWeight=${weight.maxWeight}`}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-4 text-center"
              >
                <div className="text-lg font-bold mb-2">{weight.name}</div>
                <div className="text-gray-600 text-sm">
                  {weight.minWeight} - {weight.maxWeight} tấn
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Thương Hiệu Nổi Tiếng */}
      <BrandCategories brands={truckBrands} />
      
      {/* Liên Hệ Tư Vấn */}
      <ContactSection />
      
      {/* Tin Tức & Chia Sẻ */}
      <BlogSection posts={blogPosts.slice(0, 4)} categories={blogCategories} />
      
    </Layout>
  );
};

export default Index;
