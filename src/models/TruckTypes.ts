
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
  thumbnailUrl: string;
  images: string[];
  isNew?: boolean;
  isHot?: boolean;
  isSoldOut?: boolean;
  description?: string;
  features?: string[];
  specifications?: Record<string, string>;
  [key: string]: any;
}

export interface TruckFilters {
  vehicleType: VehicleType | null;
  brand: string | null;
  minPrice: number | null;
  maxPrice: number | null;
  minWeight: number | null;
  maxWeight: number | null;
  search: string | null;
  weight?: string | null;
}

export interface TruckBrand {
  id: string;
  name: string;
}

export interface TruckWeight {
  id: string;
  name: string;
  value: string;
  range: [number, number]; // Thêm trường range để lưu trữ khoảng tải trọng
}

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
      return type;
  }
}

export function getVehicleUrlPrefix(type: VehicleType): string {
  return type;
}
