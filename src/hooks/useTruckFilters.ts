
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
    
    // Xử lý các trường hợp cụ thể theo đúng phạm vi
    if (categoryWeight === 1) {
      return { min: 0, max: 1 };  // Dưới 1 tấn
    } else if (categoryWeight === 2) {
      return { min: 1, max: 2 };  // 1-2 tấn
    } else if (categoryWeight === 3.5) {
      return { min: 2, max: 3.5 };  // 2-3.5 tấn
    } else if (categoryWeight === 5) {
      return { min: 3.5, max: 5 };  // 3.5-5 tấn
    } else if (categoryWeight === 8) {
      return { min: 5, max: 8 };  // 5-8 tấn
    } else if (categoryWeight === 15) {
      return { min: 8, max: 15 };  // 8-15 tấn
    } else if (categoryWeight === 20) {
      return { min: 15, max: 20 };  // 15-20 tấn
    }
    
    // Fallback nếu không khớp với trường hợp cụ thể nào
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
      
      // Tìm trọng lượng phù hợp nhất từ danh sách
      if (newFilters.minWeight >= 20) {
        weightCategory = 25;  // Trên 20 tấn
      } else if (newFilters.maxWeight <= 1) {
        weightCategory = 1;   // Dưới 1 tấn
      } else if (newFilters.minWeight >= 15) {
        weightCategory = 20;  // 15-20 tấn
      } else if (newFilters.minWeight >= 8) {
        weightCategory = 15;  // 8-15 tấn
      } else if (newFilters.minWeight >= 5) {
        weightCategory = 8;   // 5-8 tấn
      } else if (newFilters.minWeight >= 3.5) {
        weightCategory = 5;   // 3.5-5 tấn
      } else if (newFilters.minWeight >= 2) {
        weightCategory = 3.5; // 2-3.5 tấn
      } else if (newFilters.minWeight >= 1) {
        weightCategory = 2;   // 1-2 tấn
      } else {
        // Fallback - tìm danh mục trọng lượng phù hợp
        weightCategory = truckWeights.find(w => 
          w.value >= newFilters.maxWeight!
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
