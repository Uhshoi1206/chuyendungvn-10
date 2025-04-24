
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TruckItem from '@/components/TruckItem';
import { TruckType } from '@/models/TruckTypes';

interface FeaturedTrucksProps {
  trucks: TruckType[];
}

const FeaturedTrucks = ({ trucks }: FeaturedTrucksProps) => {
  return (
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
          {trucks.slice(0, 3).map(truck => (
            <TruckItem key={truck.id} truck={truck} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild variant="outline" className="px-6">
            <Link to="/danh-muc?type=truck">Xem tất cả xe tải</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTrucks;
