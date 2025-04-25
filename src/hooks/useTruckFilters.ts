
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TruckFilters, VehicleType } from '@/models/TruckTypes';
import { truckWeights } from '@/data/truckData';

export const useTruckFilters = (initialFilters: TruckFilters) => {
  const [filters, setFilters] = useState<TruckFilters>(initialFilters);
  const location = useLocation();
  const navigate = useNavigate();

  const getWeightRange = (categoryWeight: number): { min: number, max: number } => {
    const weightCategory = truckWeights.find(w => w.value === categoryWeight);
    if (!weightCategory) return { min: 0, max: 0 };
    
    if (categoryWeight === 1) {
      return { min: 0, max: 1 };
    }
    
    if (categoryWeight === 20) {
      return { min: 15, max: 100 };
    }
    
    const categoryIndex = truckWeights.findIndex(w => w.value === categoryWeight);
    if (categoryIndex > 0) {
      const minWeight = truckWeights[categoryIndex - 1].value;
      return { min: minWeight, max: categoryWeight };
    }
    
    return { min: 0, max: categoryWeight };
  };

  useEffect(() => {
    console.log("useTruckFilters: URL thay đổi, đọc tham số mới");
    const queryParams = new URLSearchParams(location.search);
    const brand = queryParams.get('brand');
    const weightParam = queryParams.get('weight');
    const vehicleType = queryParams.get('type') as VehicleType | null;
    
    let newFilters: TruckFilters = { ...filters };
    
    if (brand) {
      console.log("Đọc brand từ URL:", brand);
      newFilters.brand = brand;
    } else {
      newFilters.brand = null;
    }
    
    if (weightParam) {
      const weight = parseFloat(weightParam);
      if (!isNaN(weight)) {
        const range = getWeightRange(weight);
        newFilters = {
          ...newFilters,
          minWeight: range.min,
          maxWeight: range.max
        };
      }
    } else {
      newFilters.minWeight = null;
      newFilters.maxWeight = null;
    }

    if (vehicleType) {
      newFilters.vehicleType = vehicleType;
    } else {
      newFilters.vehicleType = null;
    }
    
    console.log("Cập nhật filters từ URL:", newFilters);
    setFilters(newFilters);
  }, [location.search]);

  const handleFilterChange = (keyOrFilters: keyof TruckFilters | TruckFilters, value?: any) => {
    let newFilters: TruckFilters;
    
    if (typeof keyOrFilters === 'object') {
      newFilters = { ...keyOrFilters };
      console.log("handleFilterChange: Cập nhật toàn bộ filters:", newFilters);
    } else {
      newFilters = { ...filters, [keyOrFilters]: value };
      console.log(`handleFilterChange: Cập nhật filter ${keyOrFilters}:`, value);
    }
    
    setFilters(newFilters);
    updateUrl(newFilters);
  };
  
  const updateUrl = (newFilters: TruckFilters) => {
    console.log("Cập nhật URL với filters:", newFilters);
    const params = new URLSearchParams();
    
    if (newFilters.brand) {
      params.set('brand', newFilters.brand);
    }
    
    if (newFilters.minWeight !== null && newFilters.maxWeight !== null) {
      const weightCategory = truckWeights.find(w => 
        w.value === newFilters.maxWeight
      );
      
      if (weightCategory) {
        params.set('weight', weightCategory.value.toString());
      }
    }

    if (newFilters.vehicleType) {
      params.set('type', newFilters.vehicleType);
    }
    
    navigate(`/danh-muc?${params.toString()}`, { replace: true });
  };

  const handleResetFilters = () => {
    console.log("Đặt lại tất cả bộ lọc");
    const emptyFilters: TruckFilters = {
      brand: null,
      minPrice: null,
      maxPrice: null,
      minWeight: null,
      maxWeight: null,
      vehicleType: null,
    };
    setFilters(emptyFilters);
    navigate('/danh-muc', { replace: true });
  };

  return {
    filters,
    handleFilterChange,
    handleResetFilters,
    updateUrl
  };
};

