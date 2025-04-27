
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

export type VehicleType = 'truck' | 'trailer' | 'tractor' | 'crane';

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
    case 'truck':
      return 'xe-tai';
    case 'tractor':
      return 'xe-dau-keo';
    case 'crane':
      return 'xe-cau';
    case 'trailer':
      return 'mooc';
    default:
      return 'xe-tai';
  }
};

// Tiện ích để lấy tên hiển thị cho loại phương tiện
export const getVehicleTypeName = (type: VehicleType): string => {
  switch (type) {
    case 'truck':
      return 'Xe tải';
    case 'tractor':
      return 'Xe đầu kéo';
    case 'crane':
      return 'Xe cẩu';
    case 'trailer':
      return 'Sơ mi rơ mooc';
    default:
      return 'Xe tải';
  }
};
