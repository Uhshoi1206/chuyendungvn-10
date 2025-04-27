
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
    
    // Lọc theo trọng lượng - sửa lại triệt để phần này
    if (filters.minWeight !== null && filters.maxWeight !== null) {
      console.log(`Kiểm tra xe ${truck.name} có trọng lượng ${truck.weight} tấn trong khoảng [${filters.minWeight}, ${filters.maxWeight}]`);
      
      // Xử lý các trường hợp cụ thể cho từng phạm vi tải trọng
      if (filters.maxWeight >= 25 && filters.minWeight >= 20) {
        // Trường hợp "Trên 20 tấn"
        if (truck.weight < 20) {
          console.log(`Xe ${truck.name} bị loại (${truck.weight} < 20 tấn)`);
          return false;
        }
      } 
      else if (filters.minWeight === 0 && filters.maxWeight <= 1) {
        // Trường hợp "Dưới 1 tấn"
        if (truck.weight > 1) {
          console.log(`Xe ${truck.name} bị loại (${truck.weight} > 1 tấn)`);
          return false;
        }
      }
      else {
        // Các trường hợp phạm vi bình thường
        if (truck.weight < filters.minWeight || truck.weight > filters.maxWeight) {
          console.log(`Xe ${truck.name} bị loại (${truck.weight} nằm ngoài [${filters.minWeight}, ${filters.maxWeight}])`);
          return false;
        }
      }
      
      console.log(`Xe ${truck.name} có trọng lượng ${truck.weight} tấn phù hợp với khoảng [${filters.minWeight}, ${filters.maxWeight}]`);
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
