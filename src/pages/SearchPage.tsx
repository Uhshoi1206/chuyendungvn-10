
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import VehicleGrid from '@/components/catalog/VehicleGrid';
import { trucks } from '@/data/truckData';
import { Truck } from '@/models/TruckTypes';
import { Button } from '@/components/ui/button';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [filteredVehicles, setFilteredVehicles] = useState<Truck[]>([]);
  const [loading, setLoading] = useState(true);
  const queryString = searchParams.get('q') || '';

  useEffect(() => {
    if (queryString.trim() === '') {
      setFilteredVehicles([]);
      setLoading(false);
      return;
    }

    // Mô phỏng tìm kiếm
    const timer = setTimeout(() => {
      const normalizedQuery = queryString.toLowerCase().trim();
      
      const results = trucks.filter(truck => 
        truck.name.toLowerCase().includes(normalizedQuery) ||
        truck.brand.toLowerCase().includes(normalizedQuery) ||
        truck.description.toLowerCase().includes(normalizedQuery) ||
        truck.weightText.toLowerCase().includes(normalizedQuery) ||
        truck.type.toLowerCase().includes(normalizedQuery)
      );

      setFilteredVehicles(results);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [queryString]);

  // Xử lý đặt lại bộ lọc
  const handleResetFilters = () => {
    // Trong trường hợp này, chúng ta không có bộ lọc để đặt lại
    // Nhưng cần cung cấp hàm này để truyền cho VehicleGrid
  };

  return (
    <Layout>
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-2">Kết quả tìm kiếm</h1>
          <p className="text-gray-600 mb-8">
            {loading ? 'Đang tìm kiếm...' : filteredVehicles.length > 0
              ? `Tìm thấy ${filteredVehicles.length} kết quả cho "${queryString}"`
              : `Không tìm thấy kết quả nào cho "${queryString}"`
            }
          </p>

          {loading ? (
            <div className="text-center py-10">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              <p className="mt-4 text-gray-600">Đang tìm kiếm kết quả phù hợp...</p>
            </div>
          ) : (
            <>
              {filteredVehicles.length > 0 ? (
                <VehicleGrid vehicles={filteredVehicles} onResetFilters={handleResetFilters} />
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold mb-2">Không tìm thấy kết quả</h3>
                  <p className="text-gray-600 mb-6">Vui lòng thử tìm kiếm với từ khóa khác</p>
                  <Button asChild>
                    <a href="/danh-muc">Xem danh mục xe</a>
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
