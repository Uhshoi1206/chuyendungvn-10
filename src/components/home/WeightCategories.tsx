
import React from 'react';
import { Link } from 'react-router-dom';
import { truckWeights } from '@/data/truckData';
import SectionTitle from '@/components/SectionTitle';
import { Truck } from 'lucide-react';

const WeightCategories: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Phân Loại Theo Tải Trọng"
          description="Lựa chọn phương tiện vận tải phù hợp với nhu cầu vận chuyển của bạn dựa theo tải trọng"
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {truckWeights.map(weight => (
            <Link 
              key={weight.id} 
              to={`/danh-muc?minWeight=${weight.minWeight}&maxWeight=${weight.maxWeight}`}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md border border-gray-100 hover:border-primary/20 transition-all group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-primary mb-2">
                  <Truck className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold group-hover:text-primary transition-colors mb-1">{weight.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeightCategories;
