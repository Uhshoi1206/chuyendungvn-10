
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import TruckItem from '@/components/TruckItem';
import { trucks, truckBrands } from '@/data/truckData';
import { blogPosts, blogCategories } from '@/data/blogData';

import BrandCategories from '@/components/home/BrandCategories';
import ContactSection from '@/components/home/ContactSection';
import BlogSection from '@/components/home/BlogSection';
import WeightCategories from '@/components/home/WeightCategories';

const Index: React.FC = () => {
  // Lọc xe tải nổi bật (4 xe có isHot = true)
  const featuredTrucks = trucks
    .filter(truck => truck.type === 'xe-tai' && truck.isHot)
    .slice(0, 4);
  
  // Lọc xe cẩu nổi bật (3 xe có type = xe-cau)
  const featuredCranes = trucks
    .filter(truck => truck.type === 'xe-cau')
    .slice(0, 3);
  
  // Lọc mooc nổi bật (3 xe có type = mooc)
  const featuredTrailers = trucks
    .filter(truck => truck.type === 'mooc')
    .slice(0, 3);
  
  // Lọc đầu kéo nổi bật (3 xe có type = dau-keo)
  const featuredTractors = trucks
    .filter(truck => truck.type === 'dau-keo')
    .slice(0, 3);
  
  return (
    <Layout>
      <Helmet>
        <title>XeTaiViet - Chuyên Phương Tiện Thương Mại | Xe Tải, Cẩu, Mooc & Đầu Kéo</title>
        <meta name="description" content="Chuyên cung cấp xe tải, xe cẩu, sơ mi rơ mooc và xe đầu kéo. Đa dạng thương hiệu: Hyundai, Thaco, Isuzu, Hino, Dongfeng, JAC. Báo giá tốt nhất thị trường!" />
      </Helmet>
      
      <Hero />
      
      {/* Xe Tải Nổi Bật */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Xe Tải Nổi Bật"
            description="Các dòng xe tải được nhiều khách hàng tin dùng, đa dạng tải trọng và thương hiệu"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTrucks.map(truck => (
              <TruckItem key={truck.id} truck={truck} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="px-6 border-primary text-primary hover:bg-primary/10">
              <Link to="/danh-muc?type=xe-tai" className="flex items-center gap-2">
                Xem tất cả xe tải
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Cẩu Chuyên Dụng */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Cẩu Chuyên Dụng"
            description="Các dòng xe cẩu chuyên dụng, đa dạng tải trọng và thương hiệu"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCranes.map(truck => (
              <TruckItem key={truck.id} truck={truck} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="px-6 border-primary text-primary hover:bg-primary/10">
              <Link to="/danh-muc?type=xe-cau" className="flex items-center gap-2">
                Xem tất cả xe cẩu
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Sơ Mi Rơ Mooc */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Sơ Mi Rơ Mooc"
            description="Các dòng mooc chuyên dụng, đa dạng loại và thương hiệu"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTrailers.map(truck => (
              <TruckItem key={truck.id} truck={truck} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="px-6 border-primary text-primary hover:bg-primary/10">
              <Link to="/danh-muc?type=mooc" className="flex items-center gap-2">
                Xem tất cả sơ mi rơ mooc
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Xe Đầu Kéo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Xe Đầu Kéo"
            description="Các dòng xe đầu kéo, đa dạng công suất và thương hiệu"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTractors.map(truck => (
              <TruckItem key={truck.id} truck={truck} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="px-6 border-primary text-primary hover:bg-primary/10">
              <Link to="/danh-muc?type=dau-keo" className="flex items-center gap-2">
                Xem tất cả xe đầu kéo
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Phân Loại Theo Tải Trọng */}
      <WeightCategories />
      
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
