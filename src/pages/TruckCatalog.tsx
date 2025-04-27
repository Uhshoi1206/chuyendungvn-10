
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import CatalogHeader from '@/components/catalog/CatalogHeader';
import FilterSidebar from '@/components/FilterSidebar';
import VehicleGrid from '@/components/catalog/VehicleGrid';
import VehicleTypeTabs from '@/components/catalog/VehicleTypeTabs';
import { trucks } from '@/data/truckData';
import { TruckFilters, VehicleType, Truck } from '@/models/TruckTypes';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TruckCatalog = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  // Sử dụng state để lưu các bộ lọc
  const [filters, setFilters] = useState<TruckFilters>({
    brand: null,
    minPrice: null,
    maxPrice: null,
    minWeight: null,
    maxWeight: null,
    vehicleType: 'truck' as VehicleType, // Mặc định hiển thị xe tải
    search: null
  });

  const [filteredVehicles, setFilteredVehicles] = useState<Truck[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Xử lý các tham số từ URL khi tải trang
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    
    const typeParam = params.get('type');
    const brandParam = params.get('brand');
    const weightParam = params.get('weight');
    const searchParam = params.get('q');
    
    const newFilters: TruckFilters = { ...filters };
    
    if (typeParam) {
      newFilters.vehicleType = typeParam as VehicleType;
    }
    
    if (brandParam) {
      newFilters.brand = brandParam;
    }
    
    if (weightParam) {
      // Xác định phạm vi tải trọng dựa trên trọng số được chọn
      const weight = parseFloat(weightParam);
      if (weight === 1) {
        newFilters.minWeight = 0;
        newFilters.maxWeight = 1;
      } else if (weight === 2) {
        newFilters.minWeight = 1;
        newFilters.maxWeight = 2;
      } else if (weight === 3.5) {
        newFilters.minWeight = 2;
        newFilters.maxWeight = 3.5;
      } else if (weight === 5) {
        newFilters.minWeight = 3.5;
        newFilters.maxWeight = 5;
      } else if (weight === 8) {
        newFilters.minWeight = 5;
        newFilters.maxWeight = 8;
      } else if (weight === 15) {
        newFilters.minWeight = 8;
        newFilters.maxWeight = 15;
      } else if (weight === 20) {
        newFilters.minWeight = 15;
        newFilters.maxWeight = 20;
      } else if (weight === 25) {
        newFilters.minWeight = 20;
        newFilters.maxWeight = 999; // Giá trị lớn cho "trên 20 tấn"
      }
    }
    
    if (searchParam) {
      newFilters.search = searchParam;
    }
    
    setFilters(newFilters);
    
  }, [location.search]);

  // Lọc danh sách xe mỗi khi bộ lọc thay đổi
  useEffect(() => {
    let result = [...trucks];

    // Lọc theo loại phương tiện
    if (filters.vehicleType) {
      result = result.filter(vehicle => vehicle.type === filters.vehicleType);
    }
    
    // Lọc theo thương hiệu
    if (filters.brand) {
      result = result.filter(vehicle => vehicle.brand === filters.brand);
    }
    
    // Lọc theo giá
    if (filters.minPrice !== null) {
      result = result.filter(vehicle => vehicle.price >= (filters.minPrice || 0));
    }
    
    if (filters.maxPrice !== null) {
      result = result.filter(vehicle => vehicle.price <= (filters.maxPrice || Number.MAX_VALUE));
    }
    
    // Lọc theo tải trọng - ĐÃ SỬA PHẦN NÀY
    if (filters.minWeight !== null && filters.maxWeight !== null) {
      result = result.filter(vehicle => 
        vehicle.weight >= filters.minWeight! && 
        vehicle.weight <= filters.maxWeight!
      );
    }
    
    // Lọc theo từ khóa tìm kiếm
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        vehicle =>
          vehicle.name.toLowerCase().includes(searchLower) ||
          vehicle.brand.toLowerCase().includes(searchLower) ||
          vehicle.description.toLowerCase().includes(searchLower)
      );
    }
    
    console.log('Các xe phù hợp với bộ lọc:', result);
    setFilteredVehicles(result);
  }, [filters]);

  // Xử lý thay đổi một bộ lọc cụ thể
  const handleFilterChange = (key: keyof TruckFilters, value: any) => {
    console.log(`Thay đổi filter ${key}:`, value);
    setFilters(prev => ({ ...prev, [key]: value }));
    
    // Đóng sheet filter khi áp dụng trên mobile
    if (isMobile) {
      setIsFilterOpen(false);
    }
  };

  // Xử lý thay đổi tất cả các bộ lọc
  const handleAllFiltersChange = (updatedFilters: TruckFilters) => {
    setFilters(updatedFilters);
  };

  // Xử lý đặt lại tất cả các bộ lọc
  const handleResetFilters = () => {
    setFilters({
      brand: null,
      minPrice: null,
      maxPrice: null,
      minWeight: null,
      maxWeight: null,
      vehicleType: 'truck',
      search: null
    });
  };

  return (
    <Layout>
      <CatalogHeader />
      
      {/* Điều hướng phân loại xe (Tabs trên cùng) */}
      <div className="container mx-auto px-4 py-8">
        <VehicleTypeTabs
          selectedType={filters.vehicleType || 'truck'}
          onTypeChange={(value) => handleFilterChange('vehicleType', value)}
        />

        <div className="flex flex-col md:flex-row gap-8">
          {/* Thanh lọc - Desktop */}
          {!isMobile && (
            <div className="w-full md:w-72 flex-shrink-0">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleAllFiltersChange}
                onResetFilters={handleResetFilters}
              />
            </div>
          )}

          {/* Thanh lọc - Mobile */}
          {isMobile && (
            <div className="mb-4">
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    <Filter className="h-4 w-4" />
                    Lọc kết quả
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[300px]">
                  <div className="px-1 py-4 h-full overflow-y-auto">
                    <FilterSidebar
                      filters={filters}
                      onFilterChange={handleAllFiltersChange}
                      onResetFilters={handleResetFilters}
                      className="shadow-none p-0"
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          )}

          {/* Danh sách xe */}
          <div className="flex-1">
            <VehicleGrid
              vehicles={filteredVehicles}
              onResetFilters={handleResetFilters}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TruckCatalog;
