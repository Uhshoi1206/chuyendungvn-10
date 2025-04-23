
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
}

export interface TruckFilters {
  brand: string | null;
  minPrice: number | null;
  maxPrice: number | null;
  minWeight: number | null;
  maxWeight: number | null;
  search: string | null;
}
