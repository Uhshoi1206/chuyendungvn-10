
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import FilterSidebar from '@/components/FilterSidebar';
import VehicleGrid from '@/components/catalog/VehicleGrid';
import VehicleTypeTabs from '@/components/catalog/VehicleTypeTabs';
import CatalogHeader from '@/components/catalog/CatalogHeader';
import { Helmet } from 'react-helmet-async';
import { filterTrucks, trucks, truckBrands } from '@/data/truckData';
import { VehicleType, TruckFilters } from '@/models/TruckTypes';

const TruckCatalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeVehicleType, setActiveVehicleType] = useState<VehicleType>('xe-tai');
  const [filters, setFilters] = useState<TruckFilters>({
    vehicleType: null,
    brand: null,
    minPrice: null,
    maxPrice: null,
    minWeight: null,
    maxWeight: null,
    search: null,
    weight: null,
  });
  
  const [filteredVehicles, setFilteredVehicles] = useState(trucks);

  // Lấy các tham số từ URL khi component được tạo
  useEffect(() => {
    const typeParam = searchParams.get('type') as VehicleType | null;
    const brandParam = searchParams.get('brand');
    const searchParam = searchParams.get('q');
    const weightParam = searchParams.get('weight');
    
    const initialFilters: TruckFilters = {
      vehicleType: typeParam,
      brand: brandParam,
      minPrice: null,
      maxPrice: null,
      minWeight: null,
      maxWeight: null,
      search: searchParam,
      weight: weightParam,
    };
    
    // Cập nhật activeVehicleType nếu có tham số type
    if (typeParam) {
      setActiveVehicleType(typeParam);
    }
    
    setFilters(initialFilters);
    
    // Áp dụng bộ lọc ban đầu
    const filtered = filterTrucks(initialFilters);
    setFilteredVehicles(filtered);
  }, [searchParams]);

  // Xử lý thay đổi loại phương tiện từ thanh tabs
  const handleVehicleTypeChange = (type: VehicleType) => {
    setActiveVehicleType(type);
    
    // Cập nhật bộ lọc
    const newFilters = { ...filters, vehicleType: type };
    setFilters(newFilters);
    
    // Cập nhật URL
    searchParams.set('type', type);
    setSearchParams(searchParams);
    
    // Áp dụng bộ lọc
    const filtered = filterTrucks(newFilters);
    setFilteredVehicles(filtered);
  };

  // Xử lý thay đổi bộ lọc
  const handleFilterChange = (keyOrFilters: keyof TruckFilters | TruckFilters, value?: any) => {
    let newFilters: TruckFilters;
    
    // Nếu là toàn bộ object filters
    if (typeof keyOrFilters === 'object') {
      newFilters = keyOrFilters;
    } else {
      newFilters = { ...filters };
      (newFilters[keyOrFilters] as any) = value;
    }
    
    setFilters(newFilters);
    
    // Cập nhật URL khi cần thiết
    if (typeof keyOrFilters === 'string') {
      if (keyOrFilters === 'vehicleType' && value) {
        searchParams.set('type', value);
      } else if (keyOrFilters === 'brand' && value) {
        searchParams.set('brand', value);
      } else if (keyOrFilters === 'search' && value) {
        searchParams.set('q', value);
      } else if (keyOrFilters === 'weight' && value) {
        searchParams.set('weight', value);
      }
      setSearchParams(searchParams);
    }
    
    // Áp dụng bộ lọc
    const filtered = filterTrucks(newFilters);
    setFilteredVehicles(filtered);
  };

  // Xử lý đặt lại bộ lọc
  const handleResetFilters = () => {
    const resetFilters: TruckFilters = {
      vehicleType: activeVehicleType,
      brand: null,
      minPrice: null,
      maxPrice: null,
      minWeight: null,
      maxWeight: null,
      search: null,
      weight: null,
    };
    
    setFilters(resetFilters);
    
    // Xóa các tham số URL ngoại trừ type
    Array.from(searchParams.keys()).forEach(key => {
      if (key !== 'type') {
        searchParams.delete(key);
      }
    });
    setSearchParams(searchParams);
    
    // Áp dụng bộ lọc
    const filtered = filterTrucks(resetFilters);
    setFilteredVehicles(filtered);
  };

  return (
    <Layout>
      <Helmet>
        <title>Danh mục xe - XeTaiViet</title>
        <meta name="description" content="Khám phá đa dạng các loại phương tiện thương mại: xe tải, xe cẩu, sơ mi rơ mooc và xe đầu kéo với nhiều thương hiệu và tải trọng." />
      </Helmet>
      
      <CatalogHeader />
      
      <div className="container mx-auto py-8 px-4">
        <VehicleTypeTabs 
          selectedType={activeVehicleType}
          onTypeChange={handleVehicleTypeChange}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <FilterSidebar 
            filters={filters}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
            className="lg:sticky top-24 self-start"
          />
          
          <div className="lg:col-span-3">
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
