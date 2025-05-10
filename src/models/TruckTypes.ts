
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

// Chi tiết kết cấu thùng cho xe tải thùng đông lạnh, bảo ôn
export interface CoolingBoxStructure {
  wallLayers?: number;
  wallMaterials?: string[];
  floorLayers?: number;
  floorMaterials?: string[];
  roofLayers?: number;
  roofMaterials?: string[];
  doorType?: string;
  insulationThickness?: string;
  refrigerationSystem?: string;
  temperatureRange?: string;
  
  // Thêm các thông số chi tiết hơn cho thùng đông lạnh
  coolingUnit?: string;        // Đơn vị làm lạnh
  compressorType?: string;     // Loại máy nén
  refrigerantType?: string;    // Loại môi chất lạnh
  temperatureControl?: string; // Hệ thống điều khiển nhiệt độ
  doorSize?: string;           // Kích thước cửa
  doorCount?: number;          // Số lượng cửa
  insideHeight?: number;       // Chiều cao bên trong thùng
  insideWidth?: number;        // Chiều rộng bên trong thùng
  insideLength?: number;       // Chiều dài bên trong thùng
  outsideMaterial?: string;    // Vật liệu bên ngoài
  insideMaterial?: string;     // Vật liệu bên trong
  floorMaterial?: string;      // Vật liệu sàn
  loadingSecurity?: string;    // Hệ thống an toàn hàng hóa
}

// Chi tiết về bồn xi téc
export interface TankSpecification {
  capacity?: number;
  capacityText?: string;
  compartments?: number;
  material?: string;
  thickness?: string;
  valveSystem?: string;
  pressureRating?: string;
  dischargingSystem?: string;
}

// Chi tiết về cẩu
export interface CraneSpecification {
  liftingCapacity?: number;
  liftingCapacityText?: string;
  reachLength?: number;
  reachLengthText?: string;
  rotationAngle?: string;
  stabilizers?: string;
  controlSystem?: string;
  boomSections?: number;
  hydraulicSystem?: string;
  operatingPressure?: string;
}

// Chi tiết về sơ mi rơ mooc
export interface TrailerSpecification {
  axleCount?: number;
  axleType?: string;
  axleWeight?: number;
  kingpinLoad?: number;
  suspensionType?: string;
  brakeSystem?: string;
  floorType?: string;
  floorThickness?: string;
  sideHeight?: number;
  rampType?: string;
  extensionLength?: number;
}

// Chi tiết về đầu kéo
export interface TractorSpecification {
  horsepower?: number;
  torque?: string;
  transmission?: string;
  transmissionType?: string;
  clutchType?: string;
  cabinType?: string;
  wheelbase?: number;
  fuelTankCapacity?: number;
  fuelTankCapacityText?: string;
  saddleHeight?: number;
  fifthWheelType?: string;
  maxTowingCapacity?: number;
  maxTowingCapacityText?: string;
}

export interface Truck {
  id: string;
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
  
  // Thông số kỹ thuật cơ bản
  specifications?: Record<string, any>;
  
  // Mô tả và tính năng
  description?: string;
  features?: string[];
  
  // Thông số chi tiết cho động cơ
  engineModel?: string;       // Model động cơ
  engineCapacity?: string;    // Dung tích động cơ
  enginePower?: string;       // Công suất động cơ
  engineTorque?: string;      // Mô-men xoắn
  emissionStandard?: string;  // Tiêu chuẩn khí thải
  
  // Chi tiết chuyên biệt theo loại xe
  boxType?: 'đông-lạnh' | 'bảo-ôn' | 'kín' | 'bạt' | 'lửng' | 'xi-téc';
  craneType?: 'cẩu-rời' | 'cẩu-gắn-xe';
  trailerType?: 'ben' | 'sàn' | 'sàn-rút' | 'lùn' | 'cổ-cò' | 'xương' | 'lửng' | 'rào' | 'xi-téc' | 'bồn-xi-măng' | 'bồn-sắt' | 'bồn-bột-mì';
  
  // Thông số kỹ thuật chi tiết theo loại xe
  coolingBox?: CoolingBoxStructure;
  tankSpec?: TankSpecification;
  craneSpec?: CraneSpecification;
  trailerSpec?: TrailerSpecification;
  tractorSpec?: TractorSpecification;
  
  // Thông số kỹ thuật phổ biến
  engineType?: string;
  fuel?: string;
  transmission?: string;
  wheelbase?: number;
  wheelbaseText?: string;
  tires?: string;
  brakeSystem?: string;
  cabinType?: string;
  seats?: number;
  steeringSystem?: string;
  suspensionType?: string;
  
  // Thông số khung gầm
  chassisMaterial?: string;  // Vật liệu khung gầm
  frontSuspension?: string;  // Hệ thống treo trước
  rearSuspension?: string;   // Hệ thống treo sau
  frontBrake?: string;       // Phanh trước
  rearBrake?: string;        // Phanh sau
  parkingBrake?: string;     // Phanh tay/phanh đỗ
  steeringType?: string;     // Loại hệ thống lái
  
  // Kích thước
  insideDimension?: string;  // Kích thước thùng bên trong (DxRxC)
  groundClearance?: number;  // Khoảng sáng gầm xe (mm)
  wheelTrack?: string;       // Vết bánh xe (trước/sau) (mm)
  turningRadius?: number;    // Bán kính quay vòng (m)
  
  // Trọng lượng chi tiết
  grossWeight?: string;      // Tổng tải trọng
  kerbWeight?: string;       // Trọng lượng không tải
  frontAxleLoad?: string;    // Tải trọng cầu trước
  rearAxleLoad?: string;     // Tải trọng cầu sau
  
  // Thông số hiệu suất
  maxSpeed?: string;         // Tốc độ tối đa
  climbingAbility?: string;  // Khả năng leo dốc
  fuelConsumption?: string;  // Mức tiêu thụ nhiên liệu
  
  // Trang bị tiện nghi
  cabinFeatures?: string[];  // Tính năng cabin
  
  // Cho phép mở rộng thêm các trường khác
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

export function getBoxTypeName(type?: string): string {
  switch (type) {
    case 'đông-lạnh':
      return 'Thùng Đông Lạnh';
    case 'bảo-ôn':
      return 'Thùng Bảo Ôn';
    case 'kín':
      return 'Thùng Kín';
    case 'bạt':
      return 'Thùng Bạt';
    case 'lửng':
      return 'Thùng Lửng';
    case 'xi-téc':
      return 'Xi Téc Chở Xăng Dầu';
    default:
      return '';
  }
}

export function getTrailerTypeName(type?: string): string {
  switch (type) {
    case 'ben':
      return 'Mooc Ben';
    case 'sàn':
      return 'Mooc Sàn';
    case 'sàn-rút':
      return 'Mooc Sàn Rút Dài';
    case 'lùn':
      return 'Mooc Lùn';
    case 'cổ-cò':
      return 'Mooc Cổ Cò';
    case 'xương':
      return 'Mooc Xương';
    case 'lửng':
      return 'Mooc Lửng';
    case 'rào':
      return 'Mooc Rào';
    case 'xi-téc':
      return 'Mooc Xi Téc Chở Xăng Dầu';
    case 'bồn-xi-măng':
      return 'Mooc Bồn Chở Xi Măng Rời';
    case 'bồn-sắt':
      return 'Mooc Bồn Chở Bụi Sắt';
    case 'bồn-bột-mì':
      return 'Mooc Bồn Chở Bột Mì';
    default:
      return '';
  }
}

