
import React from 'react';
import { Link } from 'react-router-dom';
import { TruckBrand } from '@/models/TruckTypes';

interface BrandCategoriesProps {
  brands: TruckBrand[];
}

const BrandCategories = ({ brands }: BrandCategoriesProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Thương Hiệu Nổi Tiếng</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chúng tôi phân phối đa dạng các loại phương tiện thương mại (xe tải, xe cẩu, mooc, xe đầu kéo) 
            từ những thương hiệu uy tín, đảm bảo chất lượng và độ tin cậy.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.length > 0 ? (
            brands.map(brand => (
              <Link 
                key={brand.id} 
                to={`/danh-muc?brand=${brand.name}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center border border-gray-100"
              >
                <span className="font-bold text-xl">{brand.name}</span>
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              Chưa có thương hiệu nào trong danh mục
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrandCategories;
