
export interface TruckWeight {
  id: string;
  name: string;
  value: number;
}

export interface TruckBrand {
  id: string;
  name: string;
  logo?: string;
}

export type VehicleType = 'xe-tai' | 'mooc' | 'dau-keo' | 'xe-cau';

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

export interface TruckFilters {
  brand: string | null;
  minPrice: number | null;
  maxPrice: number | null;
  minWeight: number | null;
  maxWeight: number | null;
  search: string | null;
  vehicleType: VehicleType | null;
}

// Tiện ích để lấy prefix URL dựa theo loại phương tiện
export const getVehicleUrlPrefix = (type: VehicleType): string => {
  switch (type) {
    case 'xe-tai':
      return 'xe-tai';
    case 'dau-keo':
      return 'xe-dau-keo';
    case 'xe-cau':
      return 'xe-cau';
    case 'mooc':
      return 'mooc';
    default:
      return 'xe-tai';
  }
};

// Tiện ích để lấy tên hiển thị cho loại phương tiện
export const getVehicleTypeName = (type: VehicleType): string => {
  switch (type) {
    case 'xe-tai':
      return 'Xe tải';
    case 'dau-keo':
      return 'Xe đầu kéo';
    case 'xe-cau':
      return 'Xe cẩu';
    case 'mooc':
      return 'Sơ mi rơ mooc';
    default:
      return 'Xe tải';
  }
};
