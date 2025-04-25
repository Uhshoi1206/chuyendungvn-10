import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { trucks } from '@/data/truckData';
import { Truck } from '@/models/TruckTypes';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import ContactForm from '@/components/ContactForm';
import TruckItem from '@/components/TruckItem';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';

const TruckDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  const [truck, setTruck] = useState<Truck | null>(null);
  const [relatedTrucks, setRelatedTrucks] = useState<Truck[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  useEffect(() => {
    if (slug) {
      const foundTruck = trucks.find(t => t.slug === slug);
      if (foundTruck) {
        setTruck(foundTruck);
        
        // Find related trucks (same brand or similar weight)
        const related = trucks
          .filter(t => 
            (t.brand === foundTruck.brand || 
             Math.abs(t.weight - foundTruck.weight) < 2) && 
            t.id !== foundTruck.id
          )
          .slice(0, 4);
        
        setRelatedTrucks(related);
      }
    }
  }, [slug]);
  
  if (!truck) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Không tìm thấy xe tải</h2>
            <p className="text-gray-600 mb-4">Thông tin xe tải bạn đang tìm kiếm không tồn tại.</p>
            <Button asChild>
              <Link to="/danh-muc">Quay lại danh mục xe</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleRequestPrice = () => {
    toast({
      title: "Yêu cầu báo giá thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
    });
  };
  
  // Format price to Vietnamese Dong
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="container mx-auto py-8 px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center mb-6 text-sm">
          <Link to="/" className="text-gray-600 hover:text-primary">Trang chủ</Link>
          <span className="mx-2">›</span>
          <Link to="/danh-muc" className="text-gray-600 hover:text-primary">Danh mục xe</Link>
          <span className="mx-2">›</span>
          <span className="font-medium">{truck.name}</span>
        </div>
        
        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Left: Product Images */}
          <div>
            <div className="mb-4 border rounded-lg overflow-hidden">
              <img 
                src={truck.images[activeImageIndex]} 
                alt={truck.name}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {truck.images.map((image, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`border-2 rounded-md overflow-hidden flex-shrink-0 w-20 h-20 transition-all ${
                    activeImageIndex === i ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${truck.name} - hình ${i+1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Right: Product Info */}
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              {truck.isNew && (
                <Badge className="bg-blue-500 hover:bg-blue-600">Mới</Badge>
              )}
              {truck.isHot && (
                <Badge className="bg-primary hover:bg-red-700">Hot</Badge>
              )}
              <Badge variant="outline">{truck.brand}</Badge>
            </div>
            
            <h1 className="text-3xl font-bold mb-3">{truck.name}</h1>
            
            <div className="text-2xl font-bold text-primary mb-6">
              {truck.priceText}
            </div>
            
            <Separator className="my-6" />
            
            <div className="space-y-4 mb-6">
              <h2 className="text-lg font-bold">Thông số cơ bản:</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-gray-600 text-sm">Thương hiệu</div>
                  <div className="font-medium">{truck.brand}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-gray-600 text-sm">Tải trọng</div>
                  <div className="font-medium">{truck.weightText}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-gray-600 text-sm">Chiều dài thùng</div>
                  <div className="font-medium">{truck.length} m</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-gray-600 text-sm">Động cơ</div>
                  <div className="font-medium">{truck.engine}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-gray-600 text-sm">Nhiên liệu</div>
                  <div className="font-medium">{truck.fuelType}</div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2">Tính năng nổi bật:</h2>
              <ul className="list-disc list-inside space-y-1">
                {truck.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                className="flex-1 bg-primary hover:bg-red-700" 
                size="lg"
                onClick={handleRequestPrice}
              >
                Nhận báo giá
              </Button>
              <Button asChild variant="outline" size="lg" className="flex-1">
                <a href="tel:0764678901" aria-label="Gọi ngay 0764678901">Gọi ngay: 0764678901</a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <Tabs defaultValue="description">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-3">
            <TabsTrigger value="description">Mô tả chi tiết</TabsTrigger>
            <TabsTrigger value="specifications">Thông số kỹ thuật</TabsTrigger>
            <TabsTrigger value="contact">Liên hệ tư vấn</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="p-6 bg-white border rounded-b-lg mt-2">
            <h2 className="text-xl font-bold mb-4">Mô tả chi tiết {truck.name}</h2>
            <p className="text-gray-700 mb-4">{truck.description}</p>
            <p className="text-gray-700 mb-4">
              {truck.name} là một trong những dòng xe tải phổ biến trên thị trường Việt Nam hiện nay. 
              Với thiết kế hiện đại, khả năng vận hành ổn định và độ bền cao, {truck.name} là sự lựa chọn 
              lý tưởng cho các doanh nghiệp vận tải.
            </p>
            <p className="text-gray-700">
              Xe được trang bị động cơ {truck.engine} mạnh mẽ và tiết kiệm nhiên liệu, 
              cùng với hệ thống treo chắc chắn, giúp xe vận hành êm ái trên mọi địa hình. 
              Thùng xe có chiều dài {truck.length}m, rộng rãi và thiết kế hợp lý, giúp tối ưu công suất vận chuyển.
            </p>
          </TabsContent>
          
          <TabsContent value="specifications" className="p-6 bg-white border rounded-b-lg mt-2">
            <h2 className="text-xl font-bold mb-4">Thông số kỹ thuật</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Thông số chung:</h3>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600 w-1/3">Hãng sản xuất</td>
                      <td className="py-2 font-medium">{truck.brand}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">Xuất xứ</td>
                      <td className="py-2 font-medium">Việt Nam/Nhập khẩu</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">Tải trọng</td>
                      <td className="py-2 font-medium">{truck.weightText}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">Số chỗ ngồi</td>
                      <td className="py-2 font-medium">3 chỗ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">Kích thước:</h3>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600 w-1/3">Chiều dài thùng</td>
                      <td className="py-2 font-medium">{truck.length} m</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">Chiều rộng thùng</td>
                      <td className="py-2 font-medium">2.0 m</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">Chiều cao thùng</td>
                      <td className="py-2 font-medium">1.8 m</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">Động cơ:</h3>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600 w-1/3">Loại động cơ</td>
                      <td className="py-2 font-medium">{truck.engine}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">Nhiên liệu</td>
                      <td className="py-2 font-medium">{truck.fuelType}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">Tiêu chuẩn khí thải</td>
                      <td className="py-2 font-medium">Euro IV</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="contact" className="p-6 bg-white border rounded-b-lg mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold mb-4">Liên hệ tư vấn</h2>
                <p className="text-gray-700 mb-6">
                  Vui lòng điền thông tin bên dưới để được tư vấn chi tiết về sản phẩm {truck.name} 
                  và nhận báo giá tốt nhất từ chúng tôi.
                </p>
                <ContactForm productName={truck.name} />
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Thông tin liên hệ</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-bold">Phòng kinh doanh:</div>
                    <div className="text-gray-700">
                      <a
                        href="tel:0764678901"
                        className="hover:underline font-semibold text-black"
                        aria-label="Gọi ngay 0764678901"
                      >0764678901</a>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Email:</div>
                    <div className="text-gray-700">contact@xetaiviet.vn</div>
                  </div>
                  <div>
                    <div className="font-bold">Địa chỉ:</div>
                    <div className="text-gray-700">123 Đường Quốc Lộ 1A, Quận Bình Tân, TP. Hồ Chí Minh</div>
                  </div>
                  <div>
                    <div className="font-bold">Thời gian làm việc:</div>
                    <div className="text-gray-700">Thứ Hai - Thứ Bảy: 8:00 - 18:00</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        
        {/* Related Products */}
        {relatedTrucks.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Sản phẩm liên quan</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedTrucks.map(relatedTruck => (
                <TruckItem key={relatedTruck.id} truck={relatedTruck} />
              ))}
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default TruckDetail;
