
import React, { useState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Slider } from './ui/slider';
import { Checkbox } from './ui/checkbox';
import { truckBrands, truckWeights } from '@/data/truckData';
import { TruckFilters } from '@/models/TruckTypes';
import { Filter } from 'lucide-react';

interface FilterSidebarProps {
  filters: TruckFilters;
  onFilterChange: (filters: TruckFilters) => void;
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
    onFilterChange(localFilters);
  };

  const handleResetFilters = () => {
    setLocalFilters({
      brand: null,
      minPrice: null,
      maxPrice: null,
      minWeight: null,
      maxWeight: null,
      search: null,
    });
    setPriceRange([0, 1000000000]);
    setWeightRange([0, 20]);
    onResetFilters();
  };

  // Format price to Vietnamese Dong
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0
    }).format(price);
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
        {/* Tìm kiếm */}
        <div>
          <Label htmlFor="search" className="text-base font-medium mb-1.5 block">
            Tìm kiếm
          </Label>
          <Input 
            id="search" 
            placeholder="Nhập tên xe tải..." 
            value={localFilters.search || ''} 
            onChange={(e) => handleFilterChange('search', e.target.value)}
          />
        </div>

        <Separator />

        {/* Thương hiệu */}
        <div>
          <h3 className="text-base font-medium mb-2">Thương hiệu</h3>
          <div className="space-y-2">
            {truckBrands.map((brand) => (
              <div key={brand.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={`brand-${brand.id}`} 
                  checked={localFilters.brand === brand.name}
                  onCheckedChange={(checked) => 
                    handleFilterChange('brand', checked ? brand.name : null)
                  }
                />
                <Label 
                  htmlFor={`brand-${brand.id}`} 
                  className="cursor-pointer text-sm flex-1"
                >
                  {brand.name}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Giá xe */}
        <div>
          <h3 className="text-base font-medium mb-2">Giá xe</h3>
          <div className="px-2">
            <Slider
              defaultValue={[0, 1000000000]}
              max={1000000000}
              step={10000000}
              value={priceRange}
              onValueChange={handlePriceChange}
              className="mb-6"
            />
            <div className="flex justify-between text-sm">
              <span>{formatPrice(priceRange[0])}</span>
              <span>{formatPrice(priceRange[1])}</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Tải trọng */}
        <div>
          <h3 className="text-base font-medium mb-2">Tải trọng</h3>
          <div className="px-2">
            <Slider
              defaultValue={[0, 20]}
              max={20}
              step={0.5}
              value={weightRange}
              onValueChange={handleWeightChange}
              className="mb-6"
            />
            <div className="flex justify-between text-sm">
              <span>{weightRange[0]} tấn</span>
              <span>{weightRange[1]} tấn</span>
            </div>
          </div>
        </div>

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
