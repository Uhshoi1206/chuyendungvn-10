// src/data/feeData.ts
export const REGISTRATION_PLATE_FEES = {
  HANOI_HCM: 500000,
  CITIES_TOWNS: 150000,
  OTHERS: 150000,
};

export const ROAD_MAINTENANCE_FEES_TRUCK = { // Per year
  UNDER_4_TONS: 2160000,
  FROM_4_TO_UNDER_8_5_TONS: 3240000,
  FROM_8_5_TO_UNDER_13_TONS: 4680000,
  FROM_13_TO_UNDER_19_TONS: 7080000,
  FROM_19_TO_UNDER_27_TONS: 8640000,
  FROM_27_TONS_UP: 12480000,
};

export const ROAD_MAINTENANCE_FEES_TRACTOR = { // Per year
  UNDER_19_TONS: 7080000,
  FROM_19_TO_UNDER_27_TONS: 8640000,
  FROM_27_TO_UNDER_40_TONS: 12480000,
  FROM_40_TONS_UP: 16920000,
};

export const INSPECTION_FEE = 380000; // Approximate average including certificate

export const CIVIL_LIABILITY_INSURANCE_FEES_TRUCK = { // Per year, before VAT
  UNDER_3_TONS: 853000,
  FROM_3_TO_8_TONS: 1660000,
  FROM_8_TO_15_TONS: 2746000,
  OVER_15_TONS: 3200000,
};

export const CIVIL_LIABILITY_INSURANCE_FEES_TRACTOR = 4800000; // Per year, before VAT

export const PROVINCES = [
  { value: 'hanoi', label: 'Hà Nội' },
  { value: 'hcm', label: 'TP. Hồ Chí Minh' },
  { value: 'other_cities', label: 'Thành phố trực thuộc tỉnh / Thị xã khác' },
  { value: 'other_areas', label: 'Khu vực khác' },
  // Thêm các tỉnh thành khác nếu cần phân loại chi tiết hơn cho các phí khác
];

export const BEFORE_REGISTRATION_FEE_RATE_TRUCK = 0.02; // 2%
export const VAT_RATE = 0.1; // 10% for insurance, can be different for car price itself
export const PHYSICAL_INSURANCE_RATE = 0.015; // 1.5%
