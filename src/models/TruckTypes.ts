
export type VehicleType = 'xe-tai' | 'xe-cau' | 'mooc' | 'dau-keo';

export interface TruckBrand {
  id: number;
  name: string;
}

export interface TruckWeight {
  id: number;
  name: string;
  minWeight: number;
  maxWeight: number;
  value?: number | string; // Thêm thuộc tính value để hỗ trợ mã trong useTruckFilters
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

export interface Truck {
  id: string; // Thay đổi từ number sang string
  name: string;
  slug: string;
  brand: string;
  price: number;
  priceText: string;
  weightText: string;
  weight: number;
  length: number;
  width: number;
  height: number;
  dimensions: string;
  type: VehicleType;
  isNew?: boolean;
  isHot?: boolean;
  origin?: string;
  thumbnailUrl: string;
  images: string[];
  specifications?: Record<string, any>;
  description?: string;
  features?: string[];
  [key: string]: any;
}

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
      return '';
  }
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
      return '';
  }
}
