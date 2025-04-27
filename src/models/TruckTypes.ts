
export type VehicleType = 'xe-tai' | 'xe-cau' | 'mooc' | 'dau-keo';

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
};
