
export type VehicleType = 'xe-tai' | 'xe-cau' | 'mooc' | 'dau-keo';

export interface Truck {
  id: string;
  name: string;
  slug: string;
  brand: string;
  type: VehicleType;
  price: number;
  priceText: string;
  weight: number;
  weightText: string;
  length: number;
  width?: number;
  height?: number;
  isNew?: boolean;
  isHot?: boolean;
  thumbnailUrl: string;
  images: string[];
  description: string;
  specifications?: Record<string, string>;
  relatedProducts?: string[];
}

export interface TruckBrand {
  id: string;
  name: string;
  image?: string;
  description?: string;
}

export interface TruckWeight {
  id: string;
  name: string;
  value: string;
  minWeight: number;
  maxWeight: number;
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

// Hàm hỗ trợ lấy tiền tố URL dựa trên loại xe
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

// Hàm hỗ trợ lấy tên hiển thị của loại xe
export const getVehicleTypeName = (type: VehicleType): string => {
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
};

// Hàm phân tích tham số weight từ URL thành dải tải trọng
export const parseWeightParam = (weightParam: string | null): { minWeight: number, maxWeight: number } | null => {
  if (!weightParam) return null;
  
  const parts = weightParam.split('-');
  
  if (parts.length === 2) {
    const minWeight = parseFloat(parts[0]);
    const maxWeight = parseFloat(parts[1]);
    
    if (!isNaN(minWeight) && !isNaN(maxWeight)) {
      return { minWeight, maxWeight };
    }
  }
  
  return null;
};

// Hàm tạo tham số weight cho URL từ giá trị min và max
export const createWeightParam = (minWeight: number, maxWeight: number): string => {
  return `${minWeight}-${maxWeight}`;
};
