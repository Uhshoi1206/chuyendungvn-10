
import { Truck, VehicleType } from '@/models/TruckTypes';

export const useVehicleFiltering = (vehicles: Truck[], selectedType: VehicleType | null, filters: {
  brand: string | null;
  minPrice: number | null;
  maxPrice: number | null;
  minWeight: number | null;
  maxWeight: number | null;
  search: string | null;
}) => {
  console.log("useVehicleFiltering được gọi với:", { selectedType, filters });
  
  // Lọc xe theo loại nếu loại được chọn, nếu không thì hiển thị tất cả
  let filteredVehicles = selectedType ? vehicles.filter(truck => truck.type === selectedType) : vehicles;
  console.log("Số xe theo loại:", filteredVehicles.length);
  
  // Áp dụng các bộ lọc khác
  filteredVehicles = filteredVehicles.filter(truck => {
    // Lọc theo thương hiệu
    if (filters.brand) {
      console.log(`So sánh brand: '${truck.brand}' với '${filters.brand}'`);
      if (truck.brand !== filters.brand) {
        return false;
      }
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
      console.log(`Lọc xe ${truck.name} có trọng lượng ${truck.weight} với khoảng [${filters.minWeight}, ${filters.maxWeight}]`);
      
      // Trường hợp đặc biệt cho "trên 20 tấn"
      if (filters.maxWeight >= 25) {
        if (truck.weight < filters.minWeight) {
          return false;
        }
      }
      // Các trường hợp thông thường - phải nằm trong khoảng min và max
      else if (truck.weight < filters.minWeight || truck.weight > filters.maxWeight) {
        return false;
      }
    }
    
    // Lọc theo từ khóa tìm kiếm
    if (filters.search && filters.search !== "" && !truck.name.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  console.log("Kết quả lọc cuối cùng:", filteredVehicles.length);
  return { filteredVehicles };
};
