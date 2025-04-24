
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FilterSidebar from '@/components/FilterSidebar';
import { trucks } from '@/data/truckData';
import { VehicleType } from '@/models/TruckTypes';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTruckFilters } from '@/hooks/useTruckFilters';
import { useIsMobile } from '@/hooks/use-mobile';
import CatalogHeader from '@/components/catalog/CatalogHeader';
import MobileSearch from '@/components/catalog/MobileSearch';
import VehicleGrid from '@/components/catalog/VehicleGrid';

const TruckCatalog = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const weightParam = queryParams.get('weight') ? parseFloat(queryParams.get('weight') || '0') : null;
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

  // Lọc xe theo loại trước tiên
  const vehiclesByType = trucks.filter(truck => truck.type === selectedType);
  
  // Áp dụng các bộ lọc khác
  const filteredTrucks = vehiclesByType.filter(truck => {
    if (filters.brand && truck.brand !== filters.brand) {
      return false;
    }
    
    if (filters.minPrice !== null && truck.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice !== null && truck.price > filters.maxPrice) {
      return false;
    }
    
    if (filters.minWeight !== null && filters.maxWeight !== null) {
      if (filters.maxWeight >= 20 && truck.weight >= filters.minWeight) {
        return true;
      }
      
      if (truck.weight < filters.minWeight || truck.weight > filters.maxWeight) {
        return false;
      }
    } else if (filters.minWeight !== null && truck.weight < filters.minWeight) {
      return false;
    } else if (filters.maxWeight !== null && truck.weight > filters.maxWeight) {
      return false;
    }
    
    if (filters.search && !truck.name.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  const vehicleTypeLabels: Record<VehicleType, string> = {
    truck: 'Xe Tải',
    trailer: 'Sơ Mi Rơ Mooc',
    tractor: 'Xe Đầu Kéo'
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CatalogHeader />
      
      {/* Vehicle Type Tabs */}
      <div className="container mx-auto px-4 py-6">
        <Tabs
          defaultValue="truck"
          value={selectedType}
          onValueChange={(value) => setSelectedType(value as VehicleType)}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="truck">Xe Tải</TabsTrigger>
            <TabsTrigger value="trailer">Sơ Mi Rơ Mooc</TabsTrigger>
            <TabsTrigger value="tractor">Xe Đầu Kéo</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      {/* Mobile Search */}
      <MobileSearch
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
        filters={filters}
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
        vehicleTypeLabel={vehicleTypeLabels[selectedType]}
      />
      
      {/* Main Content */}
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Sidebar - Desktop Only */}
          <div className="hidden md:block w-full md:w-1/4 lg:w-1/5">
            <div className="sticky top-24">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onResetFilters={handleResetFilters}
              />
            </div>
          </div>
          
          {/* Vehicles Grid */}
          <div className="w-full md:w-3/4 lg:w-4/5">
            {/* Search and Sort - Desktop Only */}
            <div className="hidden md:flex justify-between items-center mb-6">
              <div className="relative w-1/2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder={`Tìm ${vehicleTypeLabels[selectedType].toLowerCase()}...`}
                  className="pl-10"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <div className="text-gray-600">
                Hiển thị {filteredTrucks.length} kết quả
              </div>
            </div>
            
            {/* Results count - Mobile only */}
            <div className="md:hidden mb-4 text-gray-600">
              Hiển thị {filteredTrucks.length} kết quả
            </div>
            
            {/* Vehicles Grid */}
            <VehicleGrid
              vehicles={filteredTrucks}
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
