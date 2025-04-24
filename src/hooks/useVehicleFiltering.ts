
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
    if (filters.brand && truck.brand !== filters.brand) {
      return false;
    }
    
    if (filters.minPrice !== null && truck.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice !== null && truck.price > filters.maxPrice) {
      return false;
    }
    
    if (filters.minWeight !== null && filters.maxWeight !== null) {
      if (filters.maxWeight >= 20 && truck.weight >= filters.minWeight) {
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
    
    if (filters.search && !truck.name.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return { filteredVehicles };
};
