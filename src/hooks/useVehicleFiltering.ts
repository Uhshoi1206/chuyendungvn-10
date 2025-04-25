
import { Truck, VehicleType } from '@/models/TruckTypes';

export const useVehicleFiltering = (vehicles: Truck[], selectedType: VehicleType, filters: {
  brand: string | null;
  minPrice: number | null;
  maxPrice: number | null;
  minWeight: number | null;
  maxWeight: number | null;
  search: string | null;
}) => {
  // Lọc xe theo loại trước tiên
  const vehiclesByType = vehicles.filter(truck => truck.type === selectedType);
  
  // Áp dụng các bộ lọc khác
  const filteredVehicles = vehiclesByType.filter(truck => {
    // Lọc theo thương hiệu
    if (filters.brand && filters.brand.trim() !== '' && truck.brand.toLowerCase() !== filters.brand.toLowerCase()) {
      return false;
    }
    
    // Lọc theo giá
    if (filters.minPrice !== null && truck.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice !== null && truck.price > filters.maxPrice) {
      return false;
    }
    
    // Lọc theo trọng lượng
    if (filters.minWeight !== null && filters.maxWeight !== null) {
      // Trường hợp đặc biệt cho "trên 15 tấn"
      if (filters.maxWeight >= 15 && truck.weight >= filters.minWeight) {
        return true;
      }
      
      if (truck.weight < filters.minWeight || truck.weight > filters.maxWeight) {
        return false;
      }
    } else if (filters.minWeight !== null && truck.weight < filters.minWeight) {
      return false;
    } else if (filters.maxWeight !== null && truck.weight > filters.maxWeight) {
      return false;
    }
    
    // Lọc theo từ khóa tìm kiếm
    if (filters.search && !truck.name.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return { filteredVehicles };
};
