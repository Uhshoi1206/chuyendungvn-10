
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Truck } from '@/models/TruckTypes';
import TruckItem from '../TruckItem';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

interface VehicleCarouselProps {
  vehicles: Truck[];
  title: string;
  description: string;
  viewAllUrl: string;
  viewAllText: string;
}

const VehicleCarousel: React.FC<VehicleCarouselProps> = ({
  vehicles,
  title,
  description,
  viewAllUrl,
  viewAllText,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Tính toán số trang dựa trên số lượng sản phẩm và số lượng sản phẩm mỗi trang
  useEffect(() => {
    const calculatePages = () => {
      const containerWidth = containerRef.current?.clientWidth || 0;
      let columns = 4; // Mặc định hiển thị 4 sản phẩm một hàng

      // Responsive: Tính toán số cột dựa trên độ rộng của container
      if (containerWidth < 640) { // Mobile
        columns = 1;
      } else if (containerWidth < 1024) { // Tablet
        columns = 2;
      }

      setItemsPerPage(columns);
      setTotalPages(Math.ceil(vehicles.length / columns));
    };

    calculatePages();
    window.addEventListener('resize', calculatePages);

    return () => {
      window.removeEventListener('resize', calculatePages);
    };
  }, [vehicles.length]);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  // Lấy các sản phẩm cho trang hiện tại
  const currentVehicles = vehicles.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Kiểm tra có cần hiển thị điều hướng hay không (chỉ khi có nhiều hơn một trang)
  const showNavigation = totalPages > 1;

  return (
    <section className="py-16 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold relative inline-block mb-2">
            {title}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary"></div>
          </h2>
          <p className="text-gray-600">{description}</p>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Hiển thị nút điều hướng cho desktop */}
          {!isMobile && showNavigation && (
            <>
              <button
                onClick={goToPrevPage}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-3 md:-translate-x-5 lg:-translate-x-8"
                aria-label="Xem sản phẩm trước đó"
                style={{
                  background: 'linear-gradient(90deg, #ef4444, #f87171)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  border: '2px solid white'
                }}
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              
              <button
                onClick={goToNextPage}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-3 md:translate-x-5 lg:translate-x-8"
                aria-label="Xem sản phẩm tiếp theo"
                style={{
                  background: 'linear-gradient(90deg, #ef4444, #f87171)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  border: '2px solid white'
                }}
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {currentVehicles.map((vehicle, index) => (
              <div 
                key={vehicle.id} 
                className="product-hover"
                style={{ 
                  animation: `fadeSlideIn 0.3s ease forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <TruckItem truck={vehicle} />
              </div>
            ))}
          </div>

          {/* Hiển thị nút điều hướng cho mobile dạng inline */}
          {isMobile && showNavigation && (
            <div className="carousel-controls-mobile mt-4 flex justify-center gap-4">
              <button
                onClick={goToPrevPage}
                className="carousel-button-mobile"
                aria-label="Xem sản phẩm trước đó"
                style={{
                  background: 'linear-gradient(90deg, #ef4444, #f87171)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  border: '2px solid white'
                }}
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              
              <button
                onClick={goToNextPage}
                className="carousel-button-mobile"
                aria-label="Xem sản phẩm tiếp theo"
                style={{
                  background: 'linear-gradient(90deg, #ef4444, #f87171)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  border: '2px solid white'
                }}
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          <Link
            to={viewAllUrl}
            className="inline-block border border-primary text-primary px-6 py-2 rounded-md hover:bg-primary-50 transition-colors"
            onClick={() => window.scrollTo(0, 0)}
          >
            {viewAllText} <ChevronRight className="inline-block h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VehicleCarousel;
