
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TruckFilters, VehicleType } from '@/models/TruckTypes';
import { truckWeights } from '@/data/truckData';

export const useTruckFilters = (initialFilters: TruckFilters) => {
  const [filters, setFilters] = useState<TruckFilters>(initialFilters);
  const [searchInput, setSearchInput] = useState<string>(initialFilters.search || '');
  const location = useLocation();
  const navigate = useNavigate();

  // Hàm để lấy phạm vi trọng lượng cho một danh mục
  const getWeightRange = (categoryWeight: number): { min: number, max: number } => {
    const weightCategory = truckWeights.find(w => w.value === categoryWeight);
    if (!weightCategory) return { min: 0, max: 0 };
    
    // Đối với danh mục "dưới 1 tấn"
    if (categoryWeight === 1) {
      return { min: 0, max: 1 };
    }
    
    // Đối với danh mục "trên 15 tấn"
    if (categoryWeight === 20) {
      return { min: 15, max: 100 };
    }
    
    // Đối với các danh mục khác, tìm phạm vi
    const categoryIndex = truckWeights.findIndex(w => w.value === categoryWeight);
    if (categoryIndex > 0) {
      const minWeight = truckWeights[categoryIndex - 1].value;
      return { min: minWeight, max: categoryWeight };
    }
    
    return { min: 0, max: categoryWeight };
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const brand = queryParams.get('brand');
    const weightParam = queryParams.get('weight');
    const search = queryParams.get('search');
    const vehicleType = queryParams.get('type') as VehicleType | null;
    
    let newFilters: TruckFilters = { ...filters };
    
    if (brand) {
      newFilters.brand = brand;
    } else {
      newFilters.brand = null;
    }
    
    if (search) {
      newFilters.search = search;
      setSearchInput(search);
    } else {
      newFilters.search = null;
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
    
    setFilters(newFilters);
  }, [location.search]);

  // Update the handleFilterChange function to accept both formats (key/value or entire filter object)
  const handleFilterChange = (keyOrFilters: keyof TruckFilters | TruckFilters, value?: any) => {
    let newFilters: TruckFilters;
    
    if (typeof keyOrFilters === 'object') {
      // Handle case where entire filters object is passed
      newFilters = { ...keyOrFilters };
    } else {
      // Handle case where key and value are passed separately
      newFilters = { ...filters, [keyOrFilters]: value };
    }
    
    setFilters(newFilters);
    updateUrl(newFilters);
  };
  
  const updateUrl = (newFilters: TruckFilters) => {
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
    
    if (newFilters.search) {
      params.set('search', newFilters.search);
    }

    if (newFilters.vehicleType) {
      params.set('type', newFilters.vehicleType);
    }
    
    navigate(`/danh-muc?${params.toString()}`, { replace: true });
  };

  const handleSearch = () => {
    const newFilters = {
      ...filters,
      search: searchInput,
    };
    setFilters(newFilters);
    updateUrl(newFilters);
  };

  const handleResetFilters = () => {
    const emptyFilters: TruckFilters = {
      brand: null,
      minPrice: null,
      maxPrice: null,
      minWeight: null,
      maxWeight: null,
      search: null,
      vehicleType: null,
    };
    setFilters(emptyFilters);
    setSearchInput('');
    navigate('/danh-muc', { replace: true });
  };

  return {
    filters,
    searchInput,
    setSearchInput,
    handleFilterChange,
    handleSearch,
    handleResetFilters,
    updateUrl
  };
};
