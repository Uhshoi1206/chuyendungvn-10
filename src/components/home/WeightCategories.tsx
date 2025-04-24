
import React from 'react';
import { Link } from 'react-router-dom';
import { TruckWeight } from '@/models/TruckTypes';

interface WeightCategoriesProps {
  weights: TruckWeight[];
}

const WeightCategories = ({ weights }: WeightCategoriesProps) => {
  return (
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
          {weights.map(weight => (
            <Link 
              key={weight.id} 
              to={`/danh-muc?weight=${weight.value}`}
              className="bg-white p-5 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="font-bold text-lg mb-2">{weight.name}</div>
              <p className="text-gray-600 text-sm">Xem các dòng xe</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeightCategories;
