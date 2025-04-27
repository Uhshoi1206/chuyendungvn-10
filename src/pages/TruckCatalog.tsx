import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import { useVehicleFiltering } from '@/hooks/useVehicleFiltering';
import Layout from '@/components/Layout';

const calculateMaxWeight = (): number => {
  let maxWeight = 0;
  trucks.forEach(truck => {
    if (truck.weight > maxWeight) {
      maxWeight = truck.weight;
    }
  });
  
  return Math.ceil(maxWeight / 5) * 5;
};

const MAX_WEIGHT = calculateMaxWeight();

const TruckCatalog = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  const [filters, setFilters] = useState<TruckFilters>({
    brand: null,
    minPrice: null,
    maxPrice: null,
    minWeight: 0,
    maxWeight: MAX_WEIGHT,
    vehicleType: null,
    search: null
  });

  const { filteredVehicles } = useVehicleFiltering(
    trucks, 
    filters.vehicleType,
    {
      brand: filters.brand,
      minPrice: filters.minPrice,
      maxPrice: filters.maxPrice,
      minWeight: filters.minWeight,
      maxWeight: filters.maxWeight,
      search: filters.search,
    }
  );

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    
    const typeParam = params.get('type');
    const brandParam = params.get('brand');
    const weightParam = params.get('weight');
    const searchParam = params.get('q');
    
    const newFilters: TruckFilters = { 
      ...filters,
      minWeight: 0,
      maxWeight: MAX_WEIGHT
    };
    
    if (typeParam) {
      newFilters.vehicleType = typeParam as VehicleType;
    } else {
      newFilters.vehicleType = null;
    }
    
    if (brandParam) {
      newFilters.brand = brandParam;
    } else {
      newFilters.brand = null;
    }
    
    if (weightParam) {
      const weight = parseFloat(weightParam);
      if (!isNaN(weight)) {
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
          newFilters.maxWeight = 999;
        }
      }
    }
    
    if (searchParam) {
      newFilters.search = searchParam;
    } else {
      newFilters.search = null;
    }
    
    setFilters(newFilters);
    console.log("Các bộ lọc được thiết lập từ URL:", newFilters);
    
  }, [location.search]);

  const handleFilterChange = (keyOrFilters: keyof TruckFilters | TruckFilters, value?: any) => {
    console.log(`Thay đổi filter:`, keyOrFilters, value);
    
    if (typeof keyOrFilters === 'object') {
      setFilters(keyOrFilters);
      
      if (isMobile) {
        setIsFilterOpen(false);
      }
    } else {
      setFilters(prev => ({ ...prev, [keyOrFilters]: value }));
      
      if (isMobile) {
        setIsFilterOpen(false);
      }
    }
  };

  const handleResetFilters = () => {
    setFilters({
      brand: null,
      minPrice: null,
      maxPrice: null,
      minWeight: 0,
      maxWeight: MAX_WEIGHT,
      vehicleType: null,
      search: null
    });
  };

  return (
    <Layout>
      <CatalogHeader />
      
      <div className="container mx-auto px-4 py-8">
        <VehicleTypeTabs
          selectedType={filters.vehicleType || null}
          onTypeChange={(value) => handleFilterChange('vehicleType', value)}
        />

        <div className="flex flex-col md:flex-row gap-8">
          {!isMobile && (
            <div className="w-full md:w-72 flex-shrink-0">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onResetFilters={handleResetFilters}
              />
            </div>
          )}

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
                      onFilterChange={handleFilterChange}
                      onResetFilters={handleResetFilters}
                      className="shadow-none p-0"
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          )}

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
