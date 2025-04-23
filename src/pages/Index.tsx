
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import TruckItem from '@/components/TruckItem';
import ContactForm from '@/components/ContactForm';
import { trucks, truckWeights, truckBrands } from '@/data/truckData';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  // Get hot trucks for featured section
  const hotTrucks = trucks.filter(truck => truck.isHot);
  // Get new trucks
  const newTrucks = trucks.filter(truck => truck.isNew);
  
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
                to={`/tim-kiem?weight=${weight.value}`}
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
                to={`/tim-kiem?brand=${brand.name}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center border border-gray-100"
              >
                <span className="font-bold text-xl">{brand.name}</span>
              </Link>
            ))}
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
