
import React from 'react';
import { Link } from 'react-router-dom';
import { truckWeights } from '@/data/truckData';
import SectionTitle from '@/components/SectionTitle';

const WeightCategories: React.FC = () => {
  const getWeightIcon = (id: number) => {
    // Chọn biểu tượng dựa trên mức tải trọng (có thể thay bằng SVG hoặc FontAwesome)
    const icons = ['🚚', '🚛', '📦', '🏭', '🏢', '🏗️', '⚡', '🔥'];
    return icons[id - 1] || '🚚';
  };
  
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
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="text-3xl mb-2">{getWeightIcon(weight.id)}</div>
                <h3 className="font-bold group-hover:text-primary transition-colors">{weight.name}</h3>
                <p className="text-sm text-gray-500">
                  {weight.minWeight === 0 
                    ? `Tối đa ${weight.maxWeight} tấn` 
                    : weight.maxWeight >= 100
                      ? `Trên ${weight.minWeight} tấn`
                      : `${weight.minWeight} - ${weight.maxWeight} tấn`
                  }
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
