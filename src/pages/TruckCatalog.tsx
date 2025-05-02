
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import FilterSidebar from '@/components/FilterSidebar';
import VehicleGrid from '@/components/catalog/VehicleGrid';
import CatalogHeader from '@/components/catalog/CatalogHeader';
import { TruckFilters, VehicleType, parseWeightParam } from '@/models/TruckTypes';
import { trucks } from '@/data/truckData';
import { Helmet } from 'react-helmet-async';
import VehicleTypeTabs from '@/components/catalog/VehicleTypeTabs';

const TruckCatalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<TruckFilters>({
    brand: null,
    minPrice: null,
    maxPrice: null,
    minWeight: null,
    maxWeight: null,
    vehicleType: null,
    search: null
  });
  
  const [filteredTrucks, setFilteredTrucks] = useState(trucks);

  // Xử lý query params khi component mount
  useEffect(() => {
    const updateFiltersFromParams = () => {
      const newFilters = { ...filters };
      
      // Xử lý type parameter
      const typeParam = searchParams.get('type');
      if (typeParam) {
        newFilters.vehicleType = typeParam as VehicleType;
      }
      
      // Xử lý brand parameter
      const brandParam = searchParams.get('brand');
      if (brandParam) {
        newFilters.brand = brandParam;
      }
      
      // Xử lý search parameter
      const searchParam = searchParams.get('q');
      if (searchParam) {
        newFilters.search = searchParam;
      }
      
      // Xử lý weight parameter
      const weightParam = searchParams.get('weight');
      if (weightParam) {
        const weightRange = parseWeightParam(weightParam);
        if (weightRange) {
          newFilters.minWeight = weightRange.minWeight;
          newFilters.maxWeight = weightRange.maxWeight;
        }
      }
      
      // Cập nhật state filters
      setFilters(newFilters);
    };
    
    updateFiltersFromParams();
  }, [searchParams]);
  
  // Lọc danh sách xe khi filters thay đổi
  useEffect(() => {
    const applyFilters = () => {
      let results = [...trucks];
      
      // Lọc theo loại xe
      if (filters.vehicleType) {
        results = results.filter(truck => truck.type === filters.vehicleType);
      }
      
      // Lọc theo thương hiệu
      if (filters.brand) {
        results = results.filter(truck => truck.brand === filters.brand);
      }
      
      // Lọc theo giá
      if (filters.minPrice !== null && filters.maxPrice !== null) {
        results = results.filter(truck => 
          truck.price >= filters.minPrice! && truck.price <= filters.maxPrice!
        );
      }
      
      // Lọc theo tải trọng
      if (filters.minWeight !== null && filters.maxWeight !== null) {
        results = results.filter(truck => 
          truck.weight >= filters.minWeight! && truck.weight <= filters.maxWeight!
        );
      }
      
      // Lọc theo từ khóa tìm kiếm
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        results = results.filter(truck => 
          truck.name.toLowerCase().includes(searchLower) || 
          truck.brand.toLowerCase().includes(searchLower) ||
          truck.description.toLowerCase().includes(searchLower)
        );
      }
      
      setFilteredTrucks(results);
    };
    
    applyFilters();
  }, [filters]);
  
  // Xử lý khi filter thay đổi
  const handleFilterChange = (key: keyof TruckFilters | TruckFilters, value?: any) => {
    // Nếu truyền vào cả object filters
    if (typeof key === 'object') {
      setFilters(key);
      updateQueryParams(key);
      return;
    }
    
    // Nếu chỉ truyền key và value riêng
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    updateQueryParams(newFilters);
  };
  
  // Cập nhật query params khi filters thay đổi
  const updateQueryParams = (currentFilters: TruckFilters) => {
    const params = new URLSearchParams();
    
    if (currentFilters.vehicleType) {
      params.set('type', currentFilters.vehicleType);
    }
    
    if (currentFilters.brand) {
      params.set('brand', currentFilters.brand);
    }
    
    if (currentFilters.search) {
      params.set('q', currentFilters.search);
    }
    
    if (currentFilters.minWeight !== null && currentFilters.maxWeight !== null) {
      params.set('weight', `${currentFilters.minWeight}-${currentFilters.maxWeight}`);
    }
    
    setSearchParams(params);
  };
  
  // Reset filters
  const handleResetFilters = () => {
    setFilters({
      brand: null,
      minPrice: null,
      maxPrice: null,
      minWeight: null,
      maxWeight: null,
      vehicleType: null,
      search: null
    });
    
    // Xóa tất cả query params
    setSearchParams({});
  };
  
  // Xử lý khi thay đổi loại xe trong tabs
  const handleVehicleTypeChange = (type: VehicleType) => {
    const newFilters = { ...filters, vehicleType: type };
    setFilters(newFilters);
    updateQueryParams(newFilters);
  };

  return (
    <Layout>
      <Helmet>
        <title>Danh Mục Xe - XeTaiViet</title>
        <meta name="description" content="Khám phá danh mục xe tải, xe cẩu, sơ mi rơ mooc và xe đầu kéo đa dạng với đầy đủ thông số kỹ thuật và giá cả tại XeTaiViet." />
      </Helmet>
      
      <CatalogHeader />
      
      {/* Vehicle Type Tabs */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto">
          <VehicleTypeTabs 
            selectedType={filters.vehicleType || 'xe-tai'} 
            onTypeChange={handleVehicleTypeChange} 
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <FilterSidebar 
            filters={filters} 
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
            className="lg:w-1/4 w-full"
          />
          
          <div className="lg:w-3/4 w-full">
            <p className="text-gray-600 mb-6">
              Hiển thị <strong>{filteredTrucks.length}</strong> phương tiện
            </p>
            
            <VehicleGrid 
              vehicles={filteredTrucks} 
              onResetFilters={handleResetFilters}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TruckCatalog;
