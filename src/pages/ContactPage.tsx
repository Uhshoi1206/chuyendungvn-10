import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Card } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">Liên Hệ</h1>
          <p className="text-gray-300">
            Liên hệ với chúng tôi để được tư vấn và báo giá tốt nhất
          </p>
        </div>
      </div>
      
      {/* Contact Info Cards */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 flex flex-col items-center text-center">
            <div className="w-14 h-14 flex items-center justify-center bg-red-50 text-primary rounded-full mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-1">Điện thoại</h3>
            <p className="text-gray-600">
              <a
                href="tel:0764678901"
                className="hover:underline font-semibold text-black"
                aria-label="Gọi ngay 0764678901"
              >0764678901</a>
            </p>
          </Card>
          
          <Card className="p-6 flex flex-col items-center text-center">
            <div className="w-14 h-14 flex items-center justify-center bg-red-50 text-primary rounded-full mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-1">Email</h3>
            <p className="text-gray-600">contact@xetaiviet.vn</p>
          </Card>
          
          <Card className="p-6 flex flex-col items-center text-center">
            <div className="w-14 h-14 flex items-center justify-center bg-red-50 text-primary rounded-full mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-1">Địa chỉ</h3>
            <p className="text-gray-600">123 Đường Quốc Lộ 1A, Quận Bình Tân, TP. Hồ Chí Minh</p>
          </Card>
          
          <Card className="p-6 flex flex-col items-center text-center">
            <div className="w-14 h-14 flex items-center justify-center bg-red-50 text-primary rounded-full mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-1">Giờ làm việc</h3>
            <p className="text-gray-600">Thứ Hai - Thứ Bảy: 8:00 - 18:00</p>
          </Card>
        </div>
        
        {/* Contact Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-6">Gửi yêu cầu tư vấn</h2>
            <p className="text-gray-600 mb-6">
              Vui lòng điền đầy đủ thông tin bên dưới. 
              Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
            </p>
            
            <ContactForm source="trang-lien-he" />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Bản đồ</h2>
            <div className="aspect-video overflow-hidden rounded-lg shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6696584237108!2d106.6413080147119!3d10.7549171922773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f62a90e5dbd%3A0x674d5126513db295!2zUXXhu5FjIEzhu5kgMUEsIEjhu5MgQ2jDrCBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1619203457489!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Địa chỉ XeTaiViet"
              ></iframe>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-3">Thông tin liên hệ</h3>
              <div className="space-y-3">
                <p className="flex items-start">
                  <Phone className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                  <span className="text-gray-700">
                    Hotline: <a
                      href="tel:0764678901"
                      className="hover:underline font-semibold text-black"
                      aria-label="Gọi ngay 0764678901"
                    >0764678901</a> (Tư vấn miễn phí 24/7)
                  </span>
                </p>
                <p className="flex items-start">
                  <Mail className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Email: contact@xetaiviet.vn</span>
                </p>
                <p className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Địa chỉ: 123 Đường Quốc Lộ 1A, Quận Bình Tân, TP. Hồ Chí Minh
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
