
import React, { useState, useEffect } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Slider } from './ui/slider';
import { Checkbox } from './ui/checkbox';
import { truckBrands, truckWeights } from '@/data/truckData';
import { TruckFilters, VehicleType } from '@/models/TruckTypes';
import { Filter } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/components/ui/use-toast';

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
    // Áp dụng từng bộ lọc riêng lẻ
    for (const key in localFilters) {
      onFilterChange(key as keyof TruckFilters, localFilters[key as keyof TruckFilters]);
    }
    
    // Hiển thị thông báo
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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0
    }).format(price);
  };

  const vehicleTypes: { value: VehicleType; label: string }[] = [
    { value: 'truck', label: 'Xe Tải' },
    { value: 'trailer', label: 'Sơ Mi Rơ Mooc' },
    { value: 'tractor', label: 'Xe Đầu Kéo' },
    { value: 'crane', label: 'Cẩu' },
  ];

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
        <div className="space-y-4">
          <Label className="text-base font-medium">Loại xe</Label>
          <RadioGroup
            value={localFilters.vehicleType || ''}
            onValueChange={(value) => {
              const newValue = value as VehicleType | '';
              handleFilterChange('vehicleType', newValue || null);
            }}
          >
            {vehicleTypes.map((type) => (
              <div key={type.value} className="flex items-center space-x-2">
                <RadioGroupItem value={type.value} id={`type-${type.value}`} />
                <Label htmlFor={`type-${type.value}`}>{type.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <Separator />

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
