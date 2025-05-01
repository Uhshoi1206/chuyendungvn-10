
export type VehicleType = 'xe-tai' | 'xe-cau' | 'mooc' | 'dau-keo';

export interface Truck {
  id: string;
  name: string;
  slug: string;
  type: VehicleType;
  brand: string;
  price: number;
  priceText: string;
  weight: number;
  weightText: string;
  length: number;
  width?: number;
  height?: number;
  thumbnailUrl: string;
  images: string[];
  description: string;
  isNew?: boolean;
  isHot?: boolean;
  specifications?: Record<string, string>;
  // Thêm các trường bị thiếu
  wheelbase?: number;
  engine?: string;
  engineType?: string;
  engineCapacity?: string;
  horsePower?: string;
  torque?: string;
  transmission?: string;
  fuelType?: string;
  fuelConsumption?: string;
  origin?: string;
  dimensions?: string;
  seats?: number;
  emission?: string;
  features?: string[];
}

export interface TruckBrand {
  id: string;
  name: string;
}

export interface TruckWeight {
  id: string;
  name: string;
  value: number | string;
  min: number;
  max: number;
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

export const getVehicleTypeName = (type: VehicleType): string => {
  switch (type) {
    case 'xe-tai': return 'Xe Tải';
    case 'xe-cau': return 'Xe Cẩu';
    case 'mooc': return 'Sơ Mi Rơ Mooc';
    case 'dau-keo': return 'Xe Đầu Kéo';
    default: return 'Phương Tiện';
  }
};

export const getVehicleUrlPrefix = (type: VehicleType): string => {
  return type;
};

export const generateCompareUrl = (trucks: Truck[]): string => {
  if (!trucks || trucks.length === 0) return '/so-sanh-xe';
  
  // Tạo URL từ slug của các xe
  const trucksSlug = trucks.map(truck => truck.slug).join('-vs-');
  return `/so-sanh-xe/${trucksSlug}`;
};
