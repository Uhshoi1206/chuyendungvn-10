
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TruckFilters } from '@/models/TruckTypes';
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
    
    let newFilters: TruckFilters = { ...filters };
    
    if (brand) {
      newFilters.brand = brand;
    }
    
    if (search) {
      newFilters.search = search;
      setSearchInput(search);
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
    }
    
    setFilters(newFilters);
  }, [location.search]);

  const handleFilterChange = (newFilters: TruckFilters) => {
    setFilters(newFilters);
    
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
    
    navigate(`/danh-muc?${params.toString()}`, { replace: true });
  };

  const handleSearch = () => {
    const newFilters = {
      ...filters,
      search: searchInput,
    };
    handleFilterChange(newFilters);
  };

  const handleResetFilters = () => {
    setFilters({
      brand: null,
      minPrice: null,
      maxPrice: null,
      minWeight: null,
      maxWeight: null,
      search: null,
    });
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
  };
};
