
// Types for truck data

export type VehicleType = 'xe-tai' | 'xe-cau' | 'mooc' | 'dau-keo';

export interface TruckFilters {
  brand: string | null;
  minPrice: number | null;
  maxPrice: number | null;
  minWeight: number | null;
  maxWeight: number | null;
  vehicleType: VehicleType | null;
  search: string | null;
}

export interface TruckBrand {
  id: string;
  name: string;
  logo?: string;
}

export interface TruckWeight {
  id: string;
  name: string;
  value: string; // Giá trị để lọc (ví dụ: "0-1", "1-2")
  min: number; // Giá trị tối thiểu (tấn)
  max: number; // Giá trị tối đa (tấn)
}

export interface Truck {
  id: string;
  name: string;
  slug: string;
  brand: string;
  description: string;
  type: VehicleType;
  price: number;
  priceText: string;
  weight: number;
  weightText: string;
  length: number;
  width?: number;
  height?: number;
  wheelbase?: number; // Chiều dài cơ sở
  thumbnailUrl: string;
  images: string[];
  isHot: boolean;
  isNew: boolean;
  features?: string[];
  specifications?: Record<string, string>;
  
  // Thêm các thuộc tính mới cho so sánh xe
  engineType?: string; // Loại động cơ
  engineCapacity?: string; // Dung tích động cơ
  horsePower?: string; // Công suất
  torque?: string; // Mô-men xoắn
  transmission?: string; // Hộp số
  fuelConsumption?: string; // Mức tiêu thụ nhiên liệu
  origin?: string; // Xuất xứ
  dimensions?: string; // Kích thước tổng thể
  seats?: number; // Số chỗ ngồi
  emission?: string; // Tiêu chuẩn khí thải
  payload?: string; // Tải trọng
  year?: number; // Năm sản xuất
  warranty?: string; // Bảo hành
  
  // Thêm các thuộc tính còn thiếu cho trang chi tiết
  engine?: string; // Loại động cơ hiển thị
  fuelType?: string; // Loại nhiên liệu
}

// Hàm trợ giúp để lấy tiền tố URL dựa trên loại xe
export function getVehicleUrlPrefix(type: VehicleType): string {
  switch (type) {
    case 'xe-tai':
      return 'xe-tai';
    case 'xe-cau':
      return 'xe-cau';
    case 'mooc':
      return 'mooc';
    case 'dau-keo':
      return 'dau-keo';
    default:
      return 'xe-tai';
  }
}

// Hàm trợ giúp để lấy tên loại xe theo tiếng Việt
export function getVehicleTypeName(type: VehicleType): string {
  switch (type) {
    case 'xe-tai':
      return 'Xe Tải';
    case 'xe-cau':
      return 'Xe Cẩu';
    case 'mooc':
      return 'Sơ Mi Rơ Mooc';
    case 'dau-keo':
      return 'Xe Đầu Kéo';
    default:
      return 'Xe Tải';
  }
}
