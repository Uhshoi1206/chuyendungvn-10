
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FilterSidebar from '@/components/FilterSidebar';
import { trucks } from '@/data/truckData';
import { VehicleType } from '@/models/TruckTypes';
import { useTruckFilters } from '@/hooks/useTruckFilters';
import { useIsMobile } from '@/hooks/use-mobile';
import { useVehicleFiltering } from '@/hooks/useVehicleFiltering';
import CatalogHeader from '@/components/catalog/CatalogHeader';
import MobileSearch from '@/components/catalog/MobileSearch';
import VehicleGrid from '@/components/catalog/VehicleGrid';
import VehicleTypeTabs from '@/components/catalog/VehicleTypeTabs';
import DesktopSearch from '@/components/catalog/DesktopSearch';

const TruckCatalog = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const brandParam = queryParams.get('brand');
  const searchParam = queryParams.get('search');
  const isMobile = useIsMobile();
  const [selectedType, setSelectedType] = useState<VehicleType>('truck');

  const initialFilters = {
    brand: brandParam || null,
    minPrice: null,
    maxPrice: null,
    minWeight: null,
    maxWeight: null,
    search: searchParam || null,
  };

  const {
    filters,
    searchInput,
    setSearchInput,
    handleFilterChange,
    handleSearch,
    handleResetFilters,
  } = useTruckFilters(initialFilters);

  const { filteredVehicles } = useVehicleFiltering(trucks, selectedType, filters);

  const vehicleTypeLabels: Record<VehicleType, string> = {
    truck: 'Xe Tải',
    trailer: 'Sơ Mi Rơ Mooc',
    tractor: 'Xe Đầu Kéo'
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CatalogHeader />
      
      <VehicleTypeTabs 
        selectedType={selectedType}
        onTypeChange={(value) => setSelectedType(value)}
      />
      
      <MobileSearch
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
        filters={filters}
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
        vehicleTypeLabel={vehicleTypeLabels[selectedType]}
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
            <DesktopSearch
              searchInput={searchInput}
              onSearchChange={setSearchInput}
              onSearch={handleSearch}
              totalResults={filteredVehicles.length}
              vehicleTypeLabel={vehicleTypeLabels[selectedType]}
            />
            
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
