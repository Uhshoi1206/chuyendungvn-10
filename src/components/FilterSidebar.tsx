
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Filter } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { TruckFilters } from '@/models/TruckTypes';
import { VehicleTypeFilter } from './filters/VehicleTypeFilter';
import { SearchFilter } from './filters/SearchFilter';
import { BrandFilter } from './filters/BrandFilter';
import { PriceFilter } from './filters/PriceFilter';
import { WeightFilter } from './filters/WeightFilter';

interface FilterSidebarProps {
  filters: TruckFilters;
  onFilterChange: (key: keyof TruckFilters, value: any) => void;
  onResetFilters: () => void;
  className?: string;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  className = ""
}) => {
  const [localFilters, setLocalFilters] = useState<TruckFilters>(filters);
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000000000]);
  const [weightRange, setWeightRange] = useState<number[]>([0, 20]);

  useEffect(() => {
    // Cập nhật trạng thái local khi filters từ props thay đổi
    setLocalFilters(filters);
    if (filters.minPrice !== null && filters.maxPrice !== null) {
      setPriceRange([filters.minPrice, filters.maxPrice]);
    }
    if (filters.minWeight !== null && filters.maxWeight !== null) {
      setWeightRange([filters.minWeight, filters.maxWeight]);
    }
  }, [filters]);

  const handleFilterChange = (key: keyof TruckFilters, value: any) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
    setLocalFilters({
      ...localFilters,
      minPrice: value[0],
      maxPrice: value[1],
    });
  };

  const handleWeightChange = (value: number[]) => {
    setWeightRange(value);
    setLocalFilters({
      ...localFilters,
      minWeight: value[0],
      maxWeight: value[1],
    });
  };

  const handleApplyFilters = () => {
    // Truyền toàn bộ đối tượng localFilters vào hàm onFilterChange parent
    for (const key in localFilters) {
      if (Object.prototype.hasOwnProperty.call(localFilters, key)) {
        onFilterChange(key as keyof TruckFilters, localFilters[key as keyof TruckFilters]);
      }
    }
    
    toast({
      title: "Đã áp dụng bộ lọc",
      description: "Danh sách sản phẩm đã được cập nhật.",
    });
  };

  const handleResetFilters = () => {
    setLocalFilters({
      brand: null,
      minPrice: null,
      maxPrice: null,
      minWeight: null,
      maxWeight: null,
      search: null,
      vehicleType: null,
    });
    setPriceRange([0, 1000000000]);
    setWeightRange([0, 20]);
    onResetFilters();
    
    toast({
      title: "Đã đặt lại bộ lọc",
      description: "Tất cả bộ lọc đã được xóa.",
    });
  };

  return (
    <div className={`bg-white p-5 rounded-lg shadow-md ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Bộ lọc tìm kiếm
        </h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleResetFilters}
          className="text-gray-500 hover:text-primary"
        >
          Đặt lại
        </Button>
      </div>

      <div className="space-y-6">
        <VehicleTypeFilter
          selectedType={localFilters.vehicleType}
          onTypeChange={(value) => handleFilterChange('vehicleType', value)}
        />

        <Separator />

        <SearchFilter
          searchValue={localFilters.search}
          onSearchChange={(value) => handleFilterChange('search', value)}
        />

        <Separator />

        <BrandFilter
          selectedBrand={localFilters.brand}
          onBrandChange={(value) => handleFilterChange('brand', value)}
        />

        <Separator />

        <PriceFilter
          priceRange={priceRange}
          onPriceChange={handlePriceChange}
        />

        <Separator />

        <WeightFilter
          weightRange={weightRange}
          onWeightChange={handleWeightChange}
        />

        <Button
          onClick={handleApplyFilters}
          className="w-full bg-primary hover:bg-red-700"
        >
          Áp dụng bộ lọc
        </Button>
      </div>
    </div>
  );
};

export default FilterSidebar;
