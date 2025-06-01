
import React from 'react';
import { Link } from 'react-router-dom';
import { Truck } from '@/models/TruckTypes';
import SectionTitle from '@/components/SectionTitle';

interface BrandCategoriesProps {
  trucks: Truck[];
}

const BrandCategories = ({ trucks }: BrandCategoriesProps) => {
  // Tạo danh sách thương hiệu duy nhất từ sản phẩm có sẵn
  const getUniqueBrands = () => {
    const brandSet = new Set<string>();
    trucks.forEach(truck => {
      if (truck.brand && truck.brand.trim()) {
        brandSet.add(truck.brand.trim());
      }
    });
    
    // Chuyển đổi Set thành mảng và sắp xếp theo thứ tự alphabet
    return Array.from(brandSet).sort().map((brand, index) => ({
      id: index + 1,
      name: brand
    }));
  };

  const brands = getUniqueBrands();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Thương Hiệu Nổi Tiếng"
          description="Chúng tôi phân phối đa dạng các loại phương tiện thương mại (xe tải, xe cẩu, mooc, xe đầu kéo) từ những thương hiệu uy tín, đảm bảo chất lượng và độ tin cậy."
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.length > 0 ? (
            brands.map(brand => (
              <Link 
                key={brand.id} 
                to={`/danh-muc-xe?brand=${brand.name}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center border border-gray-100 hover:border-primary/20 group"
              >
                <span className="font-bold text-xl group-hover:text-primary transition-colors">{brand.name}</span>
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
