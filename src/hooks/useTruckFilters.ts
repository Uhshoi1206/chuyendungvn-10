
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TruckFilters, VehicleType } from '@/models/TruckTypes';
import { truckWeights } from '@/data/truckData';

export const useTruckFilters = (initialFilters: TruckFilters) => {
  const [filters, setFilters] = useState<TruckFilters>(initialFilters);
  const location = useLocation();
  const navigate = useNavigate();

  const getWeightRange = (categoryWeight: number): { min: number, max: number } => {
    console.log(`Tính toán phạm vi trọng lượng cho: ${categoryWeight} tấn`);
    
    // Trường hợp đặc biệt: "Trên 20 tấn"
    if (categoryWeight >= 25) {
      return { min: 20, max: 100 };
    }
    
    // Tìm mục trong mảng trọng lượng
    const weightCategory = truckWeights.find(w => w.value === categoryWeight);
    if (!weightCategory) return { min: 0, max: 100 };
    
    // Xử lý các trường hợp cụ thể
    if (categoryWeight === 1) {
      return { min: 0, max: 1 };  // Dưới 1 tấn
    }
    
    // Tìm vị trí của loại trọng lượng trong mảng
    const categoryIndex = truckWeights.findIndex(w => w.value === categoryWeight);
    if (categoryIndex > 0) {
      const prevWeight = truckWeights[categoryIndex - 1].value;
      return { min: prevWeight, max: categoryWeight };
    }
    
    return { min: 0, max: categoryWeight };
  };

  useEffect(() => {
    console.log("useTruckFilters: URL thay đổi, đọc tham số mới");
    const queryParams = new URLSearchParams(location.search);
    const brand = queryParams.get('brand');
    const weightParam = queryParams.get('weight');
    const vehicleType = queryParams.get('type') as VehicleType | null;
    const search = queryParams.get('search');
    
    let newFilters: TruckFilters = { ...initialFilters };
    
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
        console.log(`Đọc weight từ URL: ${weight}, phạm vi: [${range.min}, ${range.max}]`);
        newFilters.minWeight = range.min;
        newFilters.maxWeight = range.max;
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

    if (search) {
      newFilters.search = search;
    } else {
      newFilters.search = null;
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
      // Xử lý phạm vi tải trọng
      let weightCategory;
      if (newFilters.minWeight >= 20) {
        weightCategory = 25;  // Trên 20 tấn
      } else {
        // Tìm danh mục trọng lượng phù hợp
        weightCategory = truckWeights.find(w => 
          w.value >= newFilters.maxWeight! && w.value > newFilters.minWeight!
        )?.value || newFilters.maxWeight;
      }
      
      params.set('weight', weightCategory.toString());
    }

    if (newFilters.vehicleType) {
      params.set('type', newFilters.vehicleType);
    }

    if (newFilters.search) {
      params.set('search', newFilters.search);
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
      search: null
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
