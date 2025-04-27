export type VehicleType = 'xe-tai' | 'xe-cau' | 'mooc' | 'dau-keo';
export type LegacyVehicleType = 'truck' | 'crane' | 'trailer' | 'tractor';

export interface Truck {
  id: string;
  name: string;
  slug: string;
  brand: string;
  price: number;
  priceText: string;
  weight: number;
  weightText: string;
  length: number;
  engine: string;
  fuelType: string;
  features: string[];
  description: string;
  images: string[];
  thumbnailUrl: string;
  isHot: boolean;
  isNew: boolean;
  type: VehicleType;
}

export interface TruckWeight {
  id: string;
  name: string;
  value: number;
}

export interface TruckBrand {
  id: string;
  name: string;
}

export interface TruckFilters {
  brand: string | null;
  minPrice: number | null;
  maxPrice: number | null;
  minWeight: number | null;
  maxWeight: number | null;
  vehicleType: VehicleType | null;
  search: string | null;
}

// Hàm chuyển đổi loại xe thành đường dẫn URL
export const getVehicleUrlPrefix = (type: VehicleType): string => {
  return type; // Vì type đã là chuỗi URL nên không cần chuyển đổi
};

// Hàm chuyển đổi từ các giá trị cũ sang mới
export const convertLegacyVehicleType = (legacyType: LegacyVehicleType): VehicleType => {
  switch (legacyType) {
    case 'truck':
      return 'xe-tai';
    case 'crane':
      return 'xe-cau';
    case 'trailer':
      return 'mooc';
    case 'tractor':
      return 'dau-keo';
    default:
      return 'xe-tai';
  }
};

// Hàm để lấy tên hiển thị cho loại phương tiện
export const getVehicleTypeName = (type: VehicleType): string => {
  switch (type) {
    case 'xe-tai':
      return 'Xe tải';
    case 'xe-cau':
      return 'Xe cẩu';
    case 'mooc':
      return 'Sơ mi rơ mooc';
    case 'dau-keo':
      return 'Xe đầu kéo';
    default:
      return 'Xe tải';
  }
};
