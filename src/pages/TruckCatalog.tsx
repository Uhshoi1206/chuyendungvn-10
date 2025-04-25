
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FilterSidebar from '@/components/FilterSidebar';
import { trucks } from '@/data/truckData';
import { TruckFilters, VehicleType } from '@/models/TruckTypes';
import { useTruckFilters } from '@/hooks/useTruckFilters';
import { useIsMobile } from '@/hooks/use-mobile';
import { useVehicleFiltering } from '@/hooks/useVehicleFiltering';
import CatalogHeader from '@/components/catalog/CatalogHeader';
import VehicleGrid from '@/components/catalog/VehicleGrid';
import VehicleTypeTabs from '@/components/catalog/VehicleTypeTabs';

const TruckCatalog = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const brandParam = queryParams.get('brand');
  const weightParam = queryParams.get('weight') ? parseFloat(queryParams.get('weight') || '0') : null;
  const searchParam = queryParams.get('search');
  const typeParam = queryParams.get('type') as VehicleType | null;
  const isMobile = useIsMobile();
  
  const [selectedType, setSelectedType] = useState<VehicleType>(typeParam || 'truck');

  const initialFilters: TruckFilters = {
    brand: brandParam || null,
    minPrice: null,
    maxPrice: null,
    minWeight: weightParam || null,
    maxWeight: weightParam || null,
    search: searchParam || null,
    vehicleType: typeParam || null,
  };

  const {
    filters,
    searchInput,
    setSearchInput,
    handleFilterChange,
    handleSearch,
    handleResetFilters,
    updateUrl
  } = useTruckFilters(initialFilters);

  useEffect(() => {
    handleFilterChange('vehicleType', selectedType);
    const newFilters = { ...filters, vehicleType: selectedType };
    updateUrl(newFilters);
  }, [selectedType]);

  useEffect(() => {
    if (typeParam && (typeParam === 'truck' || typeParam === 'trailer' || typeParam === 'tractor' || typeParam === 'crane')) {
      setSelectedType(typeParam);
    }
  }, [typeParam]);

  const { filteredVehicles } = useVehicleFiltering(trucks, selectedType, filters);

  console.log('Filters applied:', filters);
  console.log('Filtered vehicles:', filteredVehicles);
  console.log('Selected type:', selectedType);

  const vehicleTypeLabels: Record<VehicleType, string> = {
    truck: 'Xe Tải',
    trailer: 'Sơ Mi Rơ Mooc',
    tractor: 'Xe Đầu Kéo',
    crane: 'Cẩu'
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CatalogHeader />
      
      <VehicleTypeTabs 
        selectedType={selectedType}
        onTypeChange={(value) => setSelectedType(value)}
      />
      
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="hidden md:block w-full md:w-1/4 lg:w-1/5">
            <div className="sticky top-24">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onResetFilters={handleResetFilters}
              />
            </div>
          </div>
          
          <div className="w-full md:w-3/4 lg:w-4/5">
            <div className="md:hidden mb-4 text-gray-600">
              Hiển thị {filteredVehicles.length} kết quả
            </div>
            
            <VehicleGrid
              vehicles={filteredVehicles}
              onResetFilters={handleResetFilters}
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TruckCatalog;

