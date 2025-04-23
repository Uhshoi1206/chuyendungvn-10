
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TruckItem from '@/components/TruckItem';
import FilterSidebar from '@/components/FilterSidebar';
import { trucks, truckWeights } from '@/data/truckData';
import { Truck, TruckFilters } from '@/models/TruckTypes';
import { Button } from '@/components/ui/button';
import { Filter, Search } from 'lucide-react';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { useIsMobile } from '@/hooks/use-mobile';
import { Input } from '@/components/ui/input';

const TruckCatalog = () => {
  const initialFilters: TruckFilters = {
    brand: null,
    minPrice: null,
    maxPrice: null,
    minWeight: null,
    maxWeight: null,
    search: null,
  };
  
  const [filters, setFilters] = useState<TruckFilters>(initialFilters);
  const [searchInput, setSearchInput] = useState<string>('');
  const isMobile = useIsMobile();
  
  // Apply filters
  const filteredTrucks = trucks.filter(truck => {
    // Brand filter
    if (filters.brand && truck.brand !== filters.brand) {
      return false;
    }
    
    // Price range filter
    if (filters.minPrice !== null && truck.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice !== null && truck.price > filters.maxPrice) {
      return false;
    }
    
    // Weight range filter
    if (filters.minWeight !== null && filters.maxWeight !== null) {
      // Include trucks within the weight range (inclusive of min, exclusive of max - except for the highest category)
      if (truck.weight < filters.minWeight || truck.weight > filters.maxWeight) {
        // Special case for the highest category "Trên 15 tấn"
        if (filters.maxWeight === 20 && truck.weight >= filters.minWeight) {
          return true;
        }
        return false;
      }
    } else if (filters.minWeight !== null && truck.weight < filters.minWeight) {
      return false;
    } else if (filters.maxWeight !== null && truck.weight > filters.maxWeight) {
      return false;
    }
    
    // Search filter
    if (filters.search && !truck.name.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  const handleFilterChange = (newFilters: TruckFilters) => {
    setFilters(newFilters);
  };
  
  const handleResetFilters = () => {
    setFilters(initialFilters);
    setSearchInput('');
  };
  
  const handleSearch = () => {
    setFilters({
      ...filters,
      search: searchInput,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">Danh Mục Xe Tải</h1>
          <p className="text-gray-300">
            Tìm kiếm và lựa chọn xe tải phù hợp với nhu cầu vận chuyển của bạn
          </p>
        </div>
      </div>
      
      {/* Search Bar for Mobile */}
      <div className="container mx-auto py-4 px-4 md:hidden">
        <div className="flex space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Tìm kiếm xe tải..."
              className="pl-10"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          <Drawer>
            <DrawerTrigger asChild>
              <Button size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="p-4 max-h-[80vh] overflow-y-auto">
                <FilterSidebar
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onResetFilters={handleResetFilters}
                />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      
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
          
          {/* Trucks Grid */}
          <div className="w-full md:w-3/4 lg:w-4/5">
            {/* Search and Sort - Desktop Only */}
            <div className="hidden md:flex justify-between items-center mb-6">
              <div className="relative w-1/2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Tìm kiếm xe tải..."
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
            
            {/* Trucks Grid */}
            {filteredTrucks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTrucks.map(truck => (
                  <TruckItem key={truck.id} truck={truck} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">😢</div>
                <h3 className="text-2xl font-bold mb-2">Không tìm thấy kết quả</h3>
                <p className="text-gray-600 mb-4">Vui lòng thử lại với bộ lọc khác</p>
                <Button onClick={handleResetFilters}>Đặt lại bộ lọc</Button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TruckCatalog;
