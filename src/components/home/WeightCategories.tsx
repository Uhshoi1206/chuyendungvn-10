
import React from 'react';
import { Link } from 'react-router-dom';
import { TruckWeight } from '@/models/TruckTypes';
import SectionTitle from '@/components/SectionTitle';

interface WeightCategoriesProps {
  weights: TruckWeight[];
}

const WeightCategories = ({ weights }: WeightCategoriesProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Phân Loại Theo Tải Trọng"
          description="Chúng tôi cung cấp đa dạng các loại phương tiện thương mại với nhiều tải trọng khác nhau, từ xe tải nhẹ đến xe đầu kéo hạng nặng, đáp ứng mọi nhu cầu vận chuyển của khách hàng."
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {weights.map(weight => (
            <Link 
              key={weight.id} 
              to={`/danh-muc?minWeight=${weight.minWeight}&maxWeight=${weight.maxWeight}`}
              className="relative bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 group"
            >
              <div className="p-5 flex flex-col items-center">
                <div className="h-16 w-16 mb-3 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="18" height="12" x="3" y="8" rx="2"/><path d="M10 8V5c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3"/><path d="M5 14h14"/><path d="M5 8v12"/><path d="M19 8v12"/></svg>
                </div>
                <h3 className="font-bold text-lg mb-1">{weight.name}</h3>
                <p className="text-sm text-gray-500">
                  {weight.minWeight} - {weight.maxWeight < 100 ? weight.maxWeight : '> 100'} tấn
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeightCategories;
