
import { Truck, TruckBrand, VehicleType, TruckWeight } from '@/models/TruckTypes';

// Dữ liệu thương hiệu xe
export const truckBrands: TruckBrand[] = [
  { id: 1, name: 'Hyundai' },
  { id: 2, name: 'Isuzu' },
  { id: 3, name: 'Hino' },
  { id: 4, name: 'Thaco' },
  { id: 5, name: 'JAC' },
  { id: 6, name: 'Suzuki' },
  { id: 7, name: 'Dongfeng' },
  { id: 8, name: 'Kia' },
  { id: 9, name: 'VEAM' },
  { id: 10, name: 'TADANO' },
  { id: 11, name: 'UNIC' },
  { id: 12, name: 'Kanglim' },
  { id: 13, name: 'Soosan' },
  { id: 14, name: 'CIMC' },
  { id: 15, name: 'DOOSUNG' },
  { id: 16, name: 'HOWO' },
];

// Định nghĩa các phạm vi tải trọng
export const truckWeights: TruckWeight[] = [
  { id: 1, name: 'Dưới 1 tấn', minWeight: 0, maxWeight: 1 },
  { id: 2, name: '1 - 2 tấn', minWeight: 1, maxWeight: 2 },
  { id: 3, name: '2 - 3.5 tấn', minWeight: 2, maxWeight: 3.5 },
  { id: 4, name: '3.5 - 5 tấn', minWeight: 3.5, maxWeight: 5 },
  { id: 5, name: '5 - 8 tấn', minWeight: 5, maxWeight: 8 },
  { id: 6, name: '8 - 15 tấn', minWeight: 8, maxWeight: 15 },
  { id: 7, name: '15 - 20 tấn', minWeight: 15, maxWeight: 20 },
  { id: 8, name: 'Trên 20 tấn', minWeight: 20, maxWeight: 100 },
];

// Dữ liệu xe - đổi id từ number sang string
export const trucks: Truck[] = [
  // ===== XE TẢI THÙNG ĐÔNG LẠNH =====
  {
    id: "101",
    name: 'Hino XZU 7.5 Tấn Thùng Đông Lạnh',
    slug: 'hino-xzu-7-5tan-thung-dong-lanh',
    brand: 'Hino',
    price: 1250000000,
    priceText: '1.250.000.000 đ',
    weightText: '7.5 Tấn',
    weight: 7.5,
    length: 6.1,
    width: 2.1,
    height: 2.2,
    dimensions: '6.1 x 2.1 x 2.2 m',
    type: 'xe-tai',
    boxType: 'đông-lạnh',
    isNew: true,
    isHot: true,
    origin: 'Nhật Bản/Việt Nam',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Hino/hino-xzu-dong-lanh.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Hino/hino-xzu-dong-lanh.jpg',
      'https://tongkhoxetai.vn/upload/images/Hino/hino-xzu-dong-lanh-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Hino/hino-xzu-dong-lanh-3.jpg',
    ],
    specifications: {
      engineType: 'Diesel N04C-WB',
      engineCapacity: '4.0L',
      horsePower: '150 HP',
      torque: '420 Nm',
      transmission: 'Số sàn 5 cấp',
      fuelConsumption: '12L/100km',
      emission: 'Euro 4',
      warranty: '3 năm hoặc 100.000 km',
      seats: 3,
      year: 2023
    },
    coolingBox: {
      wallLayers: 3,
      wallMaterials: ['Inox 304', 'Foam PU', 'Composite'],
      floorLayers: 3,
      floorMaterials: ['Inox 304', 'Foam PU', 'Composite chống trượt'],
      roofLayers: 3,
      roofMaterials: ['Inox 304', 'Foam PU', 'Composite'],
      doorType: 'Cửa mở 2 cánh phía sau, 1 cửa bên hông',
      insulationThickness: '80mm',
      refrigerationSystem: 'Máy lạnh Carrier Citimax 700',
      temperatureRange: '-18°C đến +18°C'
    },
    description: 'Hino XZU 7.5 Tấn Thùng Đông Lạnh là giải pháp vận chuyển hàng đông lạnh chuyên nghiệp với thùng đông lạnh được thiết kế đặc biệt để duy trì nhiệt độ thấp ổn định, phù hợp để vận chuyển thực phẩm, dược phẩm và các sản phẩm yêu cầu bảo quản lạnh.',
    features: [
      'Thùng đông lạnh cách nhiệt 3 lớp tiêu chuẩn',
      'Máy lạnh công suất lớn Carrier Citimax',
      'Khả năng duy trì nhiệt độ -18°C',
      'Sàn thùng chống trượt cao cấp',
      'Cửa kín khí đảm bảo không thất thoát lạnh',
      'Động cơ tiết kiệm nhiên liệu',
      'Hệ thống giám sát nhiệt độ thời gian thực'
    ]
  },
  
  // ===== XE TẢI THÙNG BẢO ÔN =====
  {
    id: "102",
    name: 'Hyundai H150 Thùng Bảo Ôn',
    slug: 'hyundai-h150-thung-bao-on',
    brand: 'Hyundai',
    price: 560000000,
    priceText: '560.000.000 đ',
    weightText: '1.5 Tấn',
    weight: 1.5,
    length: 3.0,
    width: 1.6,
    height: 1.8,
    dimensions: '3.0 x 1.6 x 1.8 m',
    type: 'xe-tai',
    boxType: 'bảo-ôn',
    isNew: false,
    isHot: true,
    origin: 'Hàn Quốc/Việt Nam',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Hyundai/h150-bao-on.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Hyundai/h150-bao-on.jpg',
      'https://tongkhoxetai.vn/upload/images/Hyundai/h150-bao-on-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Hyundai/h150-bao-on-3.jpg',
    ],
    specifications: {
      engineType: 'Diesel Kappa',
      engineCapacity: '2.5L',
      horsePower: '130 HP',
      torque: '255 Nm',
      transmission: 'Số sàn 6 cấp',
      fuelConsumption: '9L/100km',
      emission: 'Euro 4',
      warranty: '3 năm hoặc 100.000 km',
      seats: 3,
      year: 2023
    },
    coolingBox: {
      wallLayers: 2,
      wallMaterials: ['Inox 430', 'Foam PU'],
      floorLayers: 2,
      floorMaterials: ['Inox 430', 'Foam PU'],
      roofLayers: 2,
      roofMaterials: ['Inox 430', 'Foam PU'],
      doorType: 'Cửa mở 2 cánh phía sau',
      insulationThickness: '50mm',
      temperatureRange: '0°C đến +10°C'
    },
    description: 'Hyundai H150 Thùng Bảo Ôn là giải pháp hoàn hảo để vận chuyển thực phẩm, hàng hóa cần duy trì nhiệt độ mát. Thùng xe được thiết kế với lớp cách nhiệt chuyên dụng giúp duy trì nhiệt độ ổn định, phù hợp với các loại hàng như rau củ quả, bánh kẹo, sữa và các sản phẩm tươi sống.',
    features: [
      'Thùng bảo ôn 2 lớp cách nhiệt hiệu quả',
      'Cấu trúc thùng chắc chắn, dễ vệ sinh',
      'Sàn inox chống trượt, dễ dàng vệ sinh',
      'Cửa sau kín khí với gioăng cao su đặc biệt',
      'Động cơ mạnh mẽ, tiết kiệm nhiên liệu',
      'Cabin tiện nghi với nhiều tiện ích',
      'Vận hành êm ái, dễ dàng di chuyển trong đô thị'
    ]
  },
  
  // ===== XE TẢI THÙNG KÍN =====
  {
    id: "103",
    name: 'Isuzu QKR Thùng Kín',
    slug: 'isuzu-qkr-thung-kin',
    brand: 'Isuzu',
    price: 520000000,
    priceText: '520.000.000 đ',
    weightText: '2.9 Tấn',
    weight: 2.9,
    length: 4.3,
    width: 1.9,
    height: 2.0,
    dimensions: '4.3 x 1.9 x 2.0 m',
    type: 'xe-tai',
    boxType: 'kín',
    isNew: true,
    isHot: false,
    origin: 'Nhật Bản/Việt Nam',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Isuzu/qkr-thung-kin.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Isuzu/qkr-thung-kin.jpg',
      'https://tongkhoxetai.vn/upload/images/Isuzu/qkr-thung-kin-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Isuzu/qkr-thung-kin-3.jpg',
    ],
    specifications: {
      engineType: 'Diesel 4JB1',
      engineCapacity: '2.8L',
      horsePower: '110 HP',
      torque: '240 Nm',
      transmission: 'Số sàn 5 cấp',
      fuelConsumption: '10L/100km',
      emission: 'Euro 4',
      warranty: '3 năm hoặc 100.000 km',
      seats: 3,
      year: 2023
    },
    description: 'Isuzu QKR Thùng Kín là giải pháp vận chuyển hàng hóa an toàn, tránh tác động của môi trường bên ngoài. Thùng xe được thiết kế chắc chắn, kín hoàn toàn, bảo vệ hàng hóa khỏi mưa gió, bụi bẩn và tác động vật lý. Đặc biệt phù hợp để vận chuyển đồ điện tử, nội thất, quần áo và các mặt hàng cần được bảo vệ.',
    features: [
      'Thùng kín hoàn toàn bằng composite cao cấp',
      'Cánh cửa sau đóng mở linh hoạt',
      'Sàn thùng chắc chắn, chịu lực tốt',
      'Khả năng chống thấm nước cao',
      'Động cơ bền bỉ, tiết kiệm nhiên liệu',
      'Cabin rộng rãi, thoải mái cho người lái',
      'Hệ thống khung gầm chắc chắn'
    ]
  },
  
  // ===== XE TẢI THÙNG BẠT =====
  {
    id: "104",
    name: 'VEAM VPT350 Thùng Bạt',
    slug: 'veam-vpt350-thung-bat',
    brand: 'VEAM',
    price: 380000000,
    priceText: '380.000.000 đ',
    weightText: '3.5 Tấn',
    weight: 3.5,
    length: 4.8,
    width: 2.0,
    height: 2.1,
    dimensions: '4.8 x 2.0 x 2.1 m',
    type: 'xe-tai',
    boxType: 'bạt',
    isNew: false,
    isHot: false,
    origin: 'Việt Nam',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Veam/vpt350-thung-bat.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Veam/vpt350-thung-bat.jpg',
      'https://tongkhoxetai.vn/upload/images/Veam/vpt350-thung-bat-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Veam/vpt350-thung-bat-3.jpg',
    ],
    specifications: {
      engineType: 'Diesel ISUZU',
      engineCapacity: '2.7L',
      horsePower: '105 HP',
      torque: '230 Nm',
      transmission: 'Số sàn 5 cấp',
      fuelConsumption: '11L/100km',
      emission: 'Euro 4',
      warranty: '2 năm hoặc 80.000 km',
      seats: 3,
      year: 2023
    },
    description: 'VEAM VPT350 Thùng Bạt là giải pháp vận chuyển hàng hóa linh hoạt với khả năng tiếp cận hàng từ nhiều phía. Thùng xe được thiết kế với khung thép chắc chắn, bạt chống thấm cao cấp, giúp bảo vệ hàng hóa khỏi mưa gió, đồng thời cho phép dễ dàng bốc dỡ hàng từ cả phía sau và hai bên hông.',
    features: [
      'Khung thùng thép chắc chắn, bạt chống thấm cao cấp',
      'Bạt thùng có thể mở từ nhiều phía để dễ dàng bốc xếp hàng',
      'Sàn thùng làm bằng gỗ cứng, chịu lực tốt',
      'Tấm bạt chống thấm nước, chống tia UV',
      'Động cơ mạnh mẽ, tiết kiệm nhiên liệu',
      'Cabin thoải mái với nhiều tiện ích',
      'Chi phí bảo dưỡng thấp'
    ]
  },
  
  // ===== XE TẢI THÙNG LỬNG =====
  {
    id: "105",
    name: 'Isuzu VM FX Thùng Lửng',
    slug: 'isuzu-vm-fx-thung-lung',
    brand: 'Isuzu',
    price: 710000000,
    priceText: '710.000.000 đ',
    weightText: '8.2 Tấn',
    weight: 8.2,
    length: 6.5,
    width: 2.3,
    height: 0.6,
    dimensions: '6.5 x 2.3 x 0.6 m',
    type: 'xe-tai',
    boxType: 'lửng',
    isNew: false,
    isHot: false,
    origin: 'Nhật Bản',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Isuzu/vm-fx-thung-lung.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Isuzu/vm-fx-thung-lung.jpg',
      'https://tongkhoxetai.vn/upload/images/Isuzu/vm-fx-thung-lung-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Isuzu/vm-fx-thung-lung-3.jpg',
    ],
    specifications: {
      engineType: 'Diesel Common Rail',
      engineCapacity: '5.2L',
      horsePower: '210 HP',
      torque: '650 Nm',
      transmission: 'Số sàn 6 cấp',
      fuelConsumption: '14L/100km',
      emission: 'Euro 4',
      warranty: '3 năm hoặc 100.000 km',
      seats: 3,
      year: 2023
    },
    description: 'Isuzu VM FX Thùng Lửng là giải pháp tối ưu cho việc vận chuyển hàng hóa kích thước lớn, dài, vật liệu xây dựng và các thiết bị công nghiệp. Với thiết kế thùng không có thành cao, xe có khả năng chở được các loại hàng hóa có kích thước vượt quá chiều rộng của thùng xe.',
    features: [
      'Thùng lửng thấp, thuận tiện cho việc bốc dỡ hàng hóa',
      'Nền thùng làm từ thép chịu lực cao',
      'Thành thùng thấp giúp dễ dàng chất/dỡ hàng hóa',
      'Khung gầm chắc chắn, chịu tải tốt',
      'Động cơ mạnh mẽ, bền bỉ',
      'Cabin rộng rãi, trang bị đầy đủ tiện nghi',
      'Hệ thống phanh ABS/EBD đảm bảo an toàn'
    ]
  },
  
  // ===== XE TẢI XI TÉC CHỞ XĂNG DẦU =====
  {
    id: "106",
    name: 'Dongfeng Xi Téc 9 Khối',
    slug: 'dongfeng-xi-tec-9-khoi',
    brand: 'Dongfeng',
    price: 920000000,
    priceText: '920.000.000 đ',
    weightText: '9 Tấn',
    weight: 9,
    length: 7.2,
    width: 2.4,
    height: 2.8,
    dimensions: '7.2 x 2.4 x 2.8 m',
    type: 'xe-tai',
    boxType: 'xi-téc',
    isNew: true,
    isHot: true,
    origin: 'Trung Quốc',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Dongfeng/xi-tec-9-khoi.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Dongfeng/xi-tec-9-khoi.jpg',
      'https://tongkhoxetai.vn/upload/images/Dongfeng/xi-tec-9-khoi-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Dongfeng/xi-tec-9-khoi-3.jpg',
    ],
    specifications: {
      engineType: 'Diesel Cummins',
      engineCapacity: '6.7L',
      horsePower: '240 HP',
      torque: '820 Nm',
      transmission: 'Số sàn 8 cấp',
      fuelConsumption: '16L/100km',
      emission: 'Euro 4',
      warranty: '2 năm hoặc 100.000 km',
      seats: 2,
      year: 2023
    },
    tankSpec: {
      capacity: 9000,
      capacityText: '9.000 lít',
      compartments: 3,
      material: 'Thép carbon Q345 dày 5mm',
      thickness: '5mm',
      valveSystem: 'Van đáy, van xả, van khẩn cấp',
      pressureRating: '0.3 MPa',
      dischargingSystem: 'Bơm ly tâm + hệ thống ống đường ống'
    },
    description: 'Dongfeng Xi Téc 9 Khối là xe chuyên dụng phục vụ vận chuyển xăng dầu, được thiết kế đặc biệt theo tiêu chuẩn an toàn quốc tế. Bồn chứa được chia thành 3 khoang riêng biệt với hệ thống van và điều khiển độc lập, đảm bảo an toàn tuyệt đối khi vận chuyển.',
    features: [
      'Bồn chứa 3 khoang riêng biệt, dung tích 9.000 lít',
      'Thiết kế theo tiêu chuẩn an toàn PCCC',
      'Hệ thống bơm xăng dầu hiệu suất cao',
      'Hệ thống van an toàn đạt tiêu chuẩn quốc tế',
      'Động cơ mạnh mẽ, tiết kiệm nhiên liệu',
      'Trang bị hệ thống phanh ABS/ESP',
      'Cabin cách âm, giảm chấn tốt'
    ]
  },
  
  // ===== CẨU KANGLIM =====
  {
    id: "201",
    name: 'Kanglim KS1056 5 Tấn',
    slug: 'kanglim-ks1056',
    brand: 'Kanglim',
    price: 850000000,
    priceText: '850.000.000 đ',
    weightText: '5 Tấn',
    weight: 5,
    length: 3.5,
    width: 1.8,
    height: 2.3,
    dimensions: '3.5 x 1.8 x 2.3 m',
    type: 'xe-cau',
    craneType: 'cẩu-rời',
    isNew: true,
    isHot: false,
    origin: 'Hàn Quốc',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Cau/kanglim-5t.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Cau/kanglim-5t.jpg',
      'https://tongkhoxetai.vn/upload/images/Cau/kanglim-5t-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Cau/kanglim-5t-3.jpg',
    ],
    specifications: {
      engineType: 'Không có động cơ riêng (sử dụng PTO)',
      warranty: '2 năm hoặc 4.000 giờ',
      year: 2023
    },
    craneSpec: {
      liftingCapacity: 5,
      liftingCapacityText: '5 tấn tại 3m',
      reachLength: 18.7,
      reachLengthText: '18.7m (6 đoạn)',
      rotationAngle: '360° liên tục',
      stabilizers: '4 chân chống thủy lực mở rộng',
      controlSystem: 'Điều khiển tỷ lệ thủy lực',
      boomSections: 6,
      hydraulicSystem: 'Thủy lực áp suất cao',
      operatingPressure: '21 MPa'
    },
    description: 'Kanglim KS1056 là cẩu tự hành 5 tấn cao cấp đến từ Hàn Quốc, được thiết kế với công nghệ tiên tiến và khả năng nâng hạ chính xác. Cẩu có thể vươn xa đến 18.7m với 6 đoạn boom, cho phép nâng hàng ở những vị trí khó tiếp cận.',
    features: [
      'Cần cẩu 6 đoạn, với tầm với xa 18.7m',
      'Khả năng nâng tải trọng lớn 5 tấn tại bán kính 3m',
      'Hệ thống xoay 360° liên tục',
      'Hệ thống chân chống thủy lực mở rộng',
      'Bộ điều khiển từ xa không dây (tùy chọn)',
      'Hệ thống an toàn chống quá tải',
      'Cấu trúc chắc chắn, độ bền cao'
    ]
  },
  
  // ===== CẨU TADANO =====
  {
    id: "202",
    name: 'TADANO TM-ZE554MH 5 Tấn',
    slug: 'tadano-tm-ze554mh',
    brand: 'TADANO',
    price: 880000000,
    priceText: '880.000.000 đ',
    weightText: '5 Tấn',
    weight: 5,
    length: 3.6,
    width: 1.8,
    height: 2.4,
    dimensions: '3.6 x 1.8 x 2.4 m',
    type: 'xe-cau',
    craneType: 'cẩu-rời',
    isNew: false,
    isHot: true,
    origin: 'Nhật Bản',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Cau/tadano-5t-tm.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Cau/tadano-5t-tm.jpg',
      'https://tongkhoxetai.vn/upload/images/Cau/tadano-5t-tm-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Cau/tadano-5t-tm-3.jpg',
    ],
    specifications: {
      engineType: 'Không có động cơ riêng (sử dụng PTO)',
      warranty: '2 năm hoặc 5.000 giờ',
      year: 2023
    },
    craneSpec: {
      liftingCapacity: 5,
      liftingCapacityText: '5 tấn tại 2.5m',
      reachLength: 21,
      reachLengthText: '21m (5 đoạn + 1 đoạn phụ)',
      rotationAngle: '360° liên tục',
      stabilizers: '4 chân chống thủy lực H-type',
      controlSystem: 'Hệ thống điều khiển AML (Automatic Moment Limiter)',
      boomSections: 6,
      hydraulicSystem: 'Thủy lực điều khiển tỷ lệ',
      operatingPressure: '23 MPa'
    },
    description: 'TADANO TM-ZE554MH là cần cẩu 5 tấn cao cấp với công nghệ tiên tiến từ Nhật Bản, mang lại hiệu suất cao và độ tin cậy tuyệt đối. Với cần 5 đoạn chính và 1 đoạn phụ, cẩu có thể vươn xa đến 21m, đáp ứng nhiều nhu cầu nâng hạ khác nhau.',
    features: [
      'Cần cẩu 5 đoạn chính và 1 đoạn phụ với tầm với lên đến 21m',
      'Công nghệ AML (Automatic Moment Limiter) tự động kiểm soát tải trọng',
      'Hệ thống xoay 360° liên tục, không giới hạn',
      'Chân chống thủy lực kiểu H với độ ổn định cao',
      'Hệ thống điều khiển thủy lực tỷ lệ chính xác',
      'Bộ cảm biến an toàn toàn diện',
      'Khả năng hoạt động trong nhiều điều kiện thời tiết'
    ]
  },
  
  // ===== XE TẢI GẮN CẨU =====
  {
    id: "203",
    name: 'Hino FC9JLSW Gắn Cẩu UNIC',
    slug: 'hino-fc9jlsw-gan-cau-unic',
    brand: 'Hino',
    price: 1350000000,
    priceText: '1.350.000.000 đ',
    weightText: '6 Tấn',
    weight: 6,
    length: 6.4,
    width: 2.2,
    height: 3.1,
    dimensions: '6.4 x 2.2 x 3.1 m',
    type: 'xe-cau',
    craneType: 'cẩu-gắn-xe',
    isNew: true,
    isHot: true,
    origin: 'Nhật Bản',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Cau/hino-gan-cau.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Cau/hino-gan-cau.jpg',
      'https://tongkhoxetai.vn/upload/images/Cau/hino-gan-cau-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Cau/hino-gan-cau-3.jpg',
    ],
    specifications: {
      engineType: 'Diesel J05E-UG',
      engineCapacity: '5.1L',
      horsePower: '180 HP',
      torque: '520 Nm',
      transmission: 'Số sàn 6 cấp',
      fuelConsumption: '14L/100km',
      emission: 'Euro 4',
      warranty: '3 năm hoặc 100.000 km',
      seats: 3,
      year: 2023
    },
    craneSpec: {
      liftingCapacity: 3,
      liftingCapacityText: '3 tấn tại 3m',
      reachLength: 12,
      reachLengthText: '12m (4 đoạn)',
      rotationAngle: '360°',
      stabilizers: '4 chân chống thủy lực',
      controlSystem: 'Điều khiển thủy lực',
      boomSections: 4,
      hydraulicSystem: 'UNIC tiêu chuẩn Nhật Bản'
    },
    description: 'Hino FC9JLSW Gắn Cẩu UNIC là giải pháp vận chuyển và nâng hạ hàng hóa hiệu quả. Kết hợp giữa xe tải chất lượng cao của Hino và cẩu UNIC nổi tiếng của Nhật Bản, xe mang lại khả năng vận chuyển và bốc dỡ hàng hóa nặng mà không cần thiết bị hỗ trợ bên ngoài.',
    features: [
      'Kết hợp giữa xe tải và cần cẩu trong cùng một phương tiện',
      'Cẩu UNIC chính hãng Nhật Bản, nâng tải 3 tấn',
      'Thùng xe phía sau cẩu rộng rãi',
      'Hệ thống ổn định khi cẩu hoạt động',
      'Động cơ Hino mạnh mẽ, bền bỉ',
      'Cabin tiện nghi với đầy đủ trang bị',
      'Hệ thống phanh ABS, túi khí an toàn'
    ]
  },
  
  // ===== MOOC BEN =====
  {
    id: "301",
    name: 'DOOSUNG 3 Trục Ben',
    slug: 'doosung-3-truc-ben',
    brand: 'DOOSUNG',
    price: 650000000,
    priceText: '650.000.000 đ',
    weightText: '30 Tấn',
    weight: 30,
    length: 9.5,
    width: 2.3,
    height: 1.5,
    dimensions: '9.5 x 2.3 x 1.5 m',
    type: 'mooc',
    trailerType: 'ben',
    isNew: true,
    isHot: true,
    origin: 'Hàn Quốc',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Mooc/doosung-ben.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Mooc/doosung-ben.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/doosung-ben-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/doosung-ben-3.jpg',
    ],
    specifications: {
      warranty: '1 năm',
      year: 2023
    },
    trailerSpec: {
      axleCount: 3,
      axleType: 'Trục JOST Đức',
      axleWeight: 13,
      kingpinLoad: 17,
      suspensionType: 'Nhíp lá phẳng/bầu hơi',
      brakeSystem: 'Hệ thống phanh khí nén, ABS WABCO',
      floorThickness: '5mm',
      sideHeight: 1.2,
      rampType: 'Không có',
      extensionLength: 0
    },
    description: 'DOOSUNG 3 Trục Ben là sơ mi rơ mooc ben chất lượng cao đến từ Hàn Quốc, được thiết kế để vận chuyển và đổ các loại vật liệu rời như cát, đá, đất. Với hệ thống thủy lực mạnh mẽ và cấu trúc chắc chắn, mooc có khả năng nâng và đổ hàng một cách nhanh chóng và an toàn.',
    features: [
      'Hệ thống ben thủy lực mạnh mẽ, góc nâng lên đến 50°',
      'Kết cấu thùng bán vòng tăng khả năng đổ hàng',
      'Sàn thép dày 5mm chống mài mòn cao',
      'Hệ thống 3 trục chắc chắn, tải trọng cao',
      'Khung gầm được làm từ thép Q345B',
      'Hệ thống treo bầu hơi/nhíp lá phẳng tùy chọn',
      'Cửa sau mở tự động khi ben nâng'
    ]
  },
  
  // ===== MOOC SÀN =====
  {
    id: "302",
    name: 'CIMC 3 Trục Sàn',
    slug: 'cimc-3-truc-san',
    brand: 'CIMC',
    price: 420000000,
    priceText: '420.000.000 đ',
    weightText: '34 Tấn',
    weight: 34,
    length: 12.4,
    width: 2.5,
    height: 1.6,
    dimensions: '12.4 x 2.5 x 1.6 m',
    type: 'mooc',
    trailerType: 'sàn',
    isNew: true,
    isHot: false,
    origin: 'Trung Quốc',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Mooc/cimc-san.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Mooc/cimc-san.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/cimc-san-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/cimc-san-3.jpg',
    ],
    specifications: {
      warranty: '1 năm',
      year: 2023
    },
    trailerSpec: {
      axleCount: 3,
      axleType: 'Fuwa/BPW',
      axleWeight: 14,
      kingpinLoad: 20,
      suspensionType: 'Nhíp lá phẳng',
      brakeSystem: 'Hệ thống phanh khí nén, ABS',
      floorType: 'Thép tấm',
      floorThickness: '4mm',
      sideHeight: 0.6,
      rampType: 'Không có',
      extensionLength: 0
    },
    description: 'CIMC 3 Trục Sàn là sơ mi rơ mooc sàn đa năng, phù hợp để vận chuyển nhiều loại hàng hóa khác nhau như máy móc, thiết bị, container, vật liệu xây dựng. Với cấu trúc khung gầm chắc chắn và sàn thép dày, mooc có khả năng chịu tải trọng lớn lên đến 34 tấn.',
    features: [
      'Khung gầm bằng thép hợp kim cường độ cao',
      'Sàn thép dày 4mm chịu lực tốt',
      'Hệ thống 3 trục chất lượng cao',
      'Thành thấp 0.6m có thể tháo rời',
      'Chân chống cơ khí hoặc thủy lực',
      'Hệ thống điện LED đầy đủ',
      'Có lốp dự phòng và hộp đựng dụng cụ'
    ]
  },
  
  // ===== MOOC SÀN RÚT DÀI =====
  {
    id: "303",
    name: 'DOOSUNG 3 Trục Sàn Rút',
    slug: 'doosung-3-truc-san-rut',
    brand: 'DOOSUNG',
    price: 520000000,
    priceText: '520.000.000 đ',
    weightText: '32 Tấn',
    weight: 32,
    length: 13.5,
    width: 2.5,
    height: 1.5,
    dimensions: '13.5 x 2.5 x 1.5 m (có thể kéo dài đến 18m)',
    type: 'mooc',
    trailerType: 'sàn-rút',
    isNew: false,
    isHot: true,
    origin: 'Hàn Quốc',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Mooc/doosung-san-rut.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Mooc/doosung-san-rut.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/doosung-san-rut-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/doosung-san-rut-3.jpg',
    ],
    specifications: {
      warranty: '1 năm',
      year: 2023
    },
    trailerSpec: {
      axleCount: 3,
      axleType: 'JOST Đức',
      axleWeight: 13,
      kingpinLoad: 19,
      suspensionType: 'Bầu hơi',
      brakeSystem: 'Hệ thống phanh khí nén, ABS WABCO',
      floorType: 'Thép tấm+Gỗ',
      floorThickness: '3mm+28mm',
      sideHeight: 0.4,
      rampType: 'Không có',
      extensionLength: 4.5
    },
    description: 'DOOSUNG 3 Trục Sàn Rút là sơ mi rơ mooc sàn cao cấp với khả năng kéo dài đặc biệt, lý tưởng để vận chuyển các hàng hóa siêu trường, siêu trọng như cột điện, dầm cầu, thiết bị công nghiệp lớn. Mooc có thể mở rộng chiều dài từ 13.5m lên đến 18m, mang lại sự linh hoạt tối đa.',
    features: [
      'Khả năng kéo dài từ 13.5m đến 18m',
      'Hệ thống rút/mở khóa đơn giản, an toàn',
      'Khung gầm thép cường lực Q345B',
      'Hệ thống 3 trục JOST chất lượng cao',
      'Sàn thép phủ gỗ chống trượt',
      'Hệ thống treo bầu hơi êm ái',
      'Có móc buộc hàng hai bên thành'
    ]
  },
  
  // ===== MOOC CONTAINER =====
  {
    id: "304",
    name: 'DOOSUNG Chuyên Chở Container',
    slug: 'doosung-chuyen-cho-container',
    brand: 'DOOSUNG',
    price: 350000000,
    priceText: '350.000.000 đ',
    weightText: '33 Tấn',
    weight: 33,
    length: 12.4,
    width: 2.5,
    height: 1.5,
    dimensions: '12.4 x 2.5 x 1.5 m',
    type: 'mooc',
    trailerType: 'lùn',
    isNew: false,
    isHot: false,
    origin: 'Hàn Quốc',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Mooc/doosung-container.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Mooc/doosung-container.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/doosung-container-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/doosung-container-3.jpg',
    ],
    specifications: {
      warranty: '1 năm',
      year: 2023
    },
    trailerSpec: {
      axleCount: 3,
      axleType: 'JOST Đức',
      axleWeight: 13,
      kingpinLoad: 20,
      suspensionType: 'Nhíp lá phẳng',
      brakeSystem: 'Hệ thống phanh khí nén, ABS',
      floorType: 'Khung thép',
      floorThickness: 'N/A',
      sideHeight: 0,
      rampType: 'Không có'
    },
    description: 'DOOSUNG Chuyên Chở Container (Mooc Lùn) là sơ mi rơ mooc chuyên dụng để vận chuyển container 20ft, 40ft và 45ft. Được thiết kế với khung gầm thấp, mooc mang lại sự ổn định cao khi vận chuyển container và dễ dàng di chuyển trong các cảng, nhà máy.',
    features: [
      'Thiết kế khóa container 20ft, 40ft, 45ft',
      'Khung gầm thép hợp kim cường lực cao',
      'Hệ thống 3 trục JOST chất lượng cao',
      'Chiều cao khung gầm thấp tăng tính ổn định',
      'Hệ thống treo nhíp lá phẳng bền bỉ',
      'Khóa container tự động an toàn',
      'Trọng lượng bản thân thấp, tăng khả năng chở hàng'
    ]
  },
  
  // ===== MOOC CỔ CÒ =====
  {
    id: "305",
    name: 'DOOSUNG Cổ Cò',
    slug: 'doosung-co-co',
    brand: 'DOOSUNG',
    price: 450000000,
    priceText: '450.000.000 đ',
    weightText: '32 Tấn',
    weight: 32,
    length: 13.5,
    width: 2.5,
    height: 2.8,
    dimensions: '13.5 x 2.5 x 2.8 m',
    type: 'mooc',
    trailerType: 'cổ-cò',
    isNew: true,
    isHot: false,
    origin: 'Hàn Quốc',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Mooc/doosung-co-co.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Mooc/doosung-co-co.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/doosung-co-co-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/doosung-co-co-3.jpg',
    ],
    specifications: {
      warranty: '1 năm',
      year: 2023
    },
    trailerSpec: {
      axleCount: 3,
      axleType: 'JOST Đức',
      axleWeight: 13,
      kingpinLoad: 19,
      suspensionType: 'Bầu hơi',
      brakeSystem: 'Hệ thống phanh khí nén, ABS',
      floorType: 'Thép tấm + Gỗ',
      floorThickness: '3mm + 28mm',
      sideHeight: 1.2,
      rampType: 'Không có',
      extensionLength: 0
    },
    description: 'DOOSUNG Cổ Cò là sơ mi rơ mooc với thiết kế cổ cong đặc biệt (còn gọi là cổ ngỗng), cho phép sàn xe phẳng từ đầu đến cuối. Thiết kế này đặc biệt thích hợp cho việc vận chuyển thiết bị xây dựng, máy móc công nghiệp và hàng hóa có chiều cao lớn.',
    features: [
      'Thiết kế cổ cong (cổ ngỗng) cho phép sàn xe phẳng',
      'Nâng chiều cao thùng chở hàng',
      'Khung gầm thép cường lực Q345B',
      'Sàn thép phủ gỗ chống trượt',
      'Hệ thống 3 trục JOST chất lượng cao',
      'Hệ thống treo bầu hơi êm ái',
      'Có móc buộc hàng hai bên thành'
    ]
  },
  
  // ===== MOOC XƯƠNG =====
  {
    id: "306",
    name: 'DOOSUNG Xương',
    slug: 'doosung-xuong',
    brand: 'DOOSUNG',
    price: 400000000,
    priceText: '400.000.000 đ',
    weightText: '34 Tấn',
    weight: 34,
    length: 12.4,
    width: 2.5,
    height: 2.0,
    dimensions: '12.4 x 2.5 x 2.0 m',
    type: 'mooc',
    trailerType: 'xương',
    isNew: false,
    isHot: false,
    origin: 'Hàn Quốc',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Mooc/doosung-xuong.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Mooc/doosung-xuong.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/doosung-xuong-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/doosung-xuong-3.jpg',
    ],
    specifications: {
      warranty: '1 năm',
      year: 2023
    },
    trailerSpec: {
      axleCount: 3,
      axleType: 'JOST Đức',
      axleWeight: 13,
      kingpinLoad: 21,
      suspensionType: 'Nhíp lá phẳng',
      brakeSystem: 'Hệ thống phanh khí nén, ABS',
      floorType: 'Khung dạng xương',
      floorThickness: 'N/A',
      sideHeight: 0,
      rampType: 'Không có'
    },
    description: 'DOOSUNG Xương là sơ mi rơ mooc với cấu trúc khung dạng xương, không có sàn đầy đủ. Thiết kế này giúp giảm trọng lượng bản thân của mooc, tăng khả năng chở hàng, đặc biệt phù hợp để vận chuyển ống cống, bồn tròn, thiết bị dạng trụ và các hàng hóa có thể gác lên khung xương.',
    features: [
      'Cấu trúc khung dạng xương giảm trọng lượng',
      'Khung thép cường lực Q345B',
      'Hệ thống 3 trục JOST chất lượng cao',
      'Chuyên dụng cho vận chuyển ống, bồn, thiết bị dạng trụ',
      'Hệ thống móc buộc hàng dọc theo khung xương',
      'Trọng lượng bản thân nhẹ, tăng khả năng chở hàng',
      'Chi phí vận hành thấp'
    ]
  },
  
  // ===== MOOC LỬNG =====
  {
    id: "307",
    name: 'CIMC Lửng',
    slug: 'cimc-lung',
    brand: 'CIMC',
    price: 380000000,
    priceText: '380.000.000 đ',
    weightText: '34 Tấn',
    weight: 34,
    length: 12.4,
    width: 2.5,
    height: 0.8,
    dimensions: '12.4 x 2.5 x 0.8 m',
    type: 'mooc',
    trailerType: 'lửng',
    isNew: false,
    isHot: false,
    origin: 'Trung Quốc',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Mooc/cimc-lung.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Mooc/cimc-lung.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/cimc-lung-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/cimc-lung-3.jpg',
    ],
    specifications: {
      warranty: '1 năm',
      year: 2023
    },
    trailerSpec: {
      axleCount: 3,
      axleType: 'Fuwa',
      axleWeight: 13,
      kingpinLoad: 21,
      suspensionType: 'Nhíp lá phẳng',
      brakeSystem: 'Hệ thống phanh khí nén, ABS',
      floorType: 'Thép tấm',
      floorThickness: '4mm',
      sideHeight: 0.3,
      rampType: 'Không có'
    },
    description: 'CIMC Lửng là sơ mi rơ mooc với thiết kế thành thấp, lý tưởng để vận chuyển các loại hàng hóa lớn, vượt quá kích thước thành xe. Mooc có thể chở được nhiều loại hàng hóa như máy móc, thiết bị công nghiệp, vật liệu xây dựng dài, và tạo điều kiện thuận lợi cho việc bốc xếp hàng từ nhiều phía.',
    features: [
      'Thành lửng thấp 0.3m giúp dễ dàng bốc xếp hàng',
      'Sàn thép dày 4mm chịu lực tốt',
      'Khung gầm thép cường lực',
      'Hệ thống 3 trục Fuwa chất lượng cao',
      'Khóa chốt thành tiện lợi, dễ tháo lắp',
      'Trọng lượng bản thân nhẹ',
      'Có móc buộc hàng hai bên thành'
    ]
  },
  
  // ===== MOOC RÀO =====
  {
    id: "308",
    name: 'CIMC Rào',
    slug: 'cimc-rao',
    brand: 'CIMC',
    price: 410000000,
    priceText: '410.000.000 đ',
    weightText: '33 Tấn',
    weight: 33,
    length: 12.4,
    width: 2.5,
    height: 2.2,
    dimensions: '12.4 x 2.5 x 2.2 m',
    type: 'mooc',
    trailerType: 'rào',
    isNew: true,
    isHot: false,
    origin: 'Trung Quốc',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Mooc/cimc-rao.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Mooc/cimc-rao.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/cimc-rao-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/cimc-rao-3.jpg',
    ],
    specifications: {
      warranty: '1 năm',
      year: 2023
    },
    trailerSpec: {
      axleCount: 3,
      axleType: 'Fuwa',
      axleWeight: 13,
      kingpinLoad: 20,
      suspensionType: 'Nhíp lá phẳng',
      brakeSystem: 'Hệ thống phanh khí nén, ABS',
      floorType: 'Thép tấm',
      floorThickness: '4mm',
      sideHeight: 1.8,
      rampType: 'Không có'
    },
    description: 'CIMC Rào là sơ mi rơ mooc với thiết kế thành rào cao, lý tưởng để vận chuyển hàng hóa nhẹ, cồng kềnh như sản phẩm nông nghiệp, gia súc, gia cầm, và các sản phẩm đóng kiện lớn. Thành rào giúp hàng hóa không bị rơi ra ngoài trong quá trình vận chuyển và vẫn đảm bảo thông thoáng.',
    features: [
      'Thành rào cao 1.8m với thanh thép chắc chắn',
      'Thiết kế thông thoáng giúp giảm sức cản gió',
      'Sàn thép dày 4mm chịu lực tốt',
      'Khung gầm thép cường lực',
      'Hệ thống 3 trục Fuwa chất lượng cao',
      'Cửa sau mở rộng thuận tiện cho bốc xếp hàng',
      'Trọng lượng bản thân nhẹ, tăng khả năng chở hàng'
    ]
  },
  
  // ===== MOOC XI TÉC XĂNG DẦU =====
  {
    id: "309",
    name: 'DOOSUNG Xitec Xăng Dầu',
    slug: 'doosung-xitec-xang-dau',
    brand: 'DOOSUNG',
    price: 700000000,
    priceText: '700.000.000 đ',
    weightText: '30 Tấn',
    weight: 30,
    length: 12.0,
    width: 2.5,
    height: 3.2,
    dimensions: '12.0 x 2.5 x 3.2 m',
    type: 'mooc',
    trailerType: 'xi-téc',
    isNew: true,
    isHot: true,
    origin: 'Hàn Quốc',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Mooc/doosung-xitec.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Mooc/doosung-xitec.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/doosung-xitec-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/doosung-xitec-3.jpg',
    ],
    specifications: {
      warranty: '1 năm',
      year: 2023
    },
    tankSpec: {
      capacity: 40000,
      capacityText: '40.000 lít',
      compartments: 4,
      material: 'Thép carbon Q345 dày 6mm',
      thickness: '6mm',
      valveSystem: 'Van đáy API, van xả, van khẩn cấp',
      pressureRating: '0.3 MPa',
      dischargingSystem: 'Hệ thống ống mềm + bơm'
    },
    description: 'DOOSUNG Xitec Xăng Dầu là sơ mi rơ mooc xi téc chuyên dụng để vận chuyển xăng dầu với dung tích lớn. Được thiết kế theo tiêu chuẩn an toàn quốc tế, mooc có kết cấu bồn chứa dạng elip với 4 khoang riêng biệt, cho phép vận chuyển đồng thời nhiều loại nhiên liệu khác nhau.',
    features: [
      'Bồn chứa 4 khoang riêng biệt, dung tích tổng 40.000 lít',
      'Vách ngăn chống sóng giảm xóc khi di chuyển',
      'Thiết kế theo tiêu chuẩn an toàn PCCC',
      'Hệ thống van API tiêu chuẩn quốc tế',
      'Cổ bồn với nắp nhanh thuận tiện khi nạp liệu',
      'Hệ thống 3 trục JOST chất lượng cao',
      'Tích hợp hệ thống thu hồi hơi xăng dầu'
    ]
  },
  
  // ===== MOOC BỒN XI MĂNG =====
  {
    id: "310",
    name: 'CIMC Bồn Xi Măng',
    slug: 'cimc-bon-xi-mang',
    brand: 'CIMC',
    price: 580000000,
    priceText: '580.000.000 đ',
    weightText: '31 Tấn',
    weight: 31,
    length: 12.0,
    width: 2.5,
    height: 3.6,
    dimensions: '12.0 x 2.5 x 3.6 m',
    type: 'mooc',
    trailerType: 'bồn-xi-măng',
    isNew: false,
    isHot: false,
    origin: 'Trung Quốc',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Mooc/cimc-bon-xi-mang.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Mooc/cimc-bon-xi-mang.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/cimc-bon-xi-mang-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/cimc-bon-xi-mang-3.jpg',
    ],
    specifications: {
      warranty: '1 năm',
      year: 2023
    },
    tankSpec: {
      capacity: 35000,
      capacityText: '35 khối xi măng',
      compartments: 1,
      material: 'Thép carbon Q345 dày 5mm',
      thickness: '5mm',
      valveSystem: 'Hệ thống van khí nén',
      pressureRating: '0.35 MPa',
      dischargingSystem: 'Hệ thống máy nén khí 15HP'
    },
    description: 'CIMC Bồn Xi Măng là sơ mi rơ mooc bồn chuyên dụng để vận chuyển xi măng rời. Với thiết kế kín hoàn toàn và hệ thống máy nén khí chuyên dụng, mooc có khả năng bảo quản xi măng khỏi ảnh hưởng của môi trường và cho phép bơm xi măng nhanh chóng, hiệu quả.',
    features: [
      'Bồn kín hoàn toàn, bảo vệ xi măng khỏi môi trường',
      'Máy nén khí công suất 15HP đẩy xi măng nhanh chóng',
      'Hệ thống van khí nén đảm bảo an toàn',
      'Cổ bồn với nắp kín thuận tiện khi nạp liệu',
      'Hệ thống 3 trục Fuwa chất lượng cao',
      'Lớp sơn đặc biệt chống ăn mòn',
      'Thanh vệ sinh bồn đi kèm'
    ]
  },
  
  // ===== MOOC BỒN BỤI SẮT =====
  {
    id: "311",
    name: 'DOOSUNG Bồn Bụi Sắt',
    slug: 'doosung-bon-bui-sat',
    brand: 'DOOSUNG',
    price: 620000000,
    priceText: '620.000.000 đ',
    weightText: '30 Tấn',
    weight: 30,
    length: 11.8,
    width: 2.5,
    height: 3.8,
    dimensions: '11.8 x 2.5 x 3.8 m',
    type: 'mooc',
    trailerType: 'bồn-sắt',
    isNew: true,
    isHot: false,
    origin: 'Hàn Quốc',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Mooc/doosung-bon-bui-sat.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Mooc/doosung-bon-bui-sat.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/doosung-bon-bui-sat-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/doosung-bon-bui-sat-3.jpg',
    ],
    specifications: {
      warranty: '1 năm',
      year: 2023
    },
    tankSpec: {
      capacity: 30000,
      capacityText: '30 khối',
      compartments: 1,
      material: 'Thép đặc biệt chống mài mòn',
      thickness: '6mm',
      valveSystem: 'Hệ thống van khí nén đặc biệt cho bụi sắt',
      pressureRating: '0.4 MPa',
      dischargingSystem: 'Máy nén khí công suất cao 18HP'
    },
    description: 'DOOSUNG Bồn Bụi Sắt là sơ mi rơ mooc bồn chuyên dụng để vận chuyển bụi, bột sắt và các loại vật liệu bột kim loại. Được thiết kế với vật liệu đặc biệt chống mài mòn và hệ thống bơm khí mạnh mẽ, mooc đảm bảo an toàn khi vận chuyển và xả hàng hiệu quả.',
    features: [
      'Bồn làm từ thép đặc biệt chống mài mòn do bụi sắt',
      'Máy nén khí công suất cao 18HP',
      'Hệ thống lọc để tránh bụi bay ra môi trường',
      'Thiết kế đảm bảo không rò rỉ bụi sắt',
      'Hệ thống 3 trục JOST chất lượng cao',
      'Lớp phủ bên trong chống dính bụi',
      'Thiết kế an toàn chống nổ'
    ]
  },
  
  // ===== MOOC BỒN BỘT MÌ =====
  {
    id: "312",
    name: 'CIMC Bồn Bột Mì',
    slug: 'cimc-bon-bot-mi',
    brand: 'CIMC',
    price: 550000000,
    priceText: '550.000.000 đ',
    weightText: '28 Tấn',
    weight: 28,
    length: 11.5,
    width: 2.5,
    height: 3.7,
    dimensions: '11.5 x 2.5 x 3.7 m',
    type: 'mooc',
    trailerType: 'bồn-bột-mì',
    isNew: false,
    isHot: true,
    origin: 'Trung Quốc',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Mooc/cimc-bon-bot-mi.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Mooc/cimc-bon-bot-mi.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/cimc-bon-bot-mi-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/cimc-bon-bot-mi-3.jpg',
    ],
    specifications: {
      warranty: '1 năm',
      year: 2023
    },
    tankSpec: {
      capacity: 38000,
      capacityText: '38 khối',
      compartments: 1,
      material: 'Thép không gỉ 304',
      thickness: '4mm',
      valveSystem: 'Hệ thống van an toàn thực phẩm',
      pressureRating: '0.3 MPa',
      dischargingSystem: 'Máy nén khí sạch 12HP'
    },
    description: 'CIMC Bồn Bột Mì là sơ mi rơ mooc bồn chuyên dụng để vận chuyển bột mì và các loại thực phẩm dạng bột. Được thiết kế với tiêu chuẩn an toàn thực phẩm cao, bồn được làm từ thép không gỉ 304, đảm bảo vệ sinh và chất lượng sản phẩm trong quá trình vận chuyển.',
    features: [
      'Bồn inox 304 đảm bảo an toàn thực phẩm',
      'Máy nén khí sạch cho thực phẩm',
      'Hệ thống lọc khí đảm bảo không nhiễm bẩn',
      'Cửa kiểm tra và vệ sinh bồn tiện lợi',
      'Hệ thống 3 trục Fuwa chất lượng cao',
      'Thiết kế chống đọng nước, ngưng tụ bên trong bồn',
      'Lớp cách nhiệt giữ nhiệt độ ổn định cho bột'
    ]
  },
  
  // ===== XE ĐẦU KÉO HYUNDAI =====
  {
    id: "401",
    name: 'Hyundai Xcient Đầu Kéo',
    slug: 'hyundai-xcient-dau-keo',
    brand: 'Hyundai',
    price: 1950000000,
    priceText: '1.950.000.000 đ',
    weightText: '40 Tấn',
    weight: 40,
    length: 6.8,
    width: 2.5,
    height: 3.5,
    dimensions: '6.8 x 2.5 x 3.5 m',
    type: 'dau-keo',
    isNew: true,
    isHot: true,
    origin: 'Hàn Quốc',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Dau-Keo/hyundai-xcient.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Dau-Keo/hyundai-xcient.jpg',
      'https://tongkhoxetai.vn/upload/images/Dau-Keo/hyundai-xcient-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Dau-Keo/hyundai-xcient-3.jpg',
    ],
    specifications: {
      engineType: 'Diesel D6CC',
      engineCapacity: '12.7L',
      horsePower: '520 HP',
      torque: '2500 Nm',
      transmission: 'Số tự động 12 cấp ZF',
      fuelConsumption: '32L/100km',
      emission: 'Euro 5',
      warranty: '3 năm hoặc 200.000 km',
      seats: 2,
      year: 2023
    },
    tractorSpec: {
      horsepower: 520,
      torque: '2500 Nm tại 1200 rpm',
      transmission: 'ZF 12 cấp tự động',
      transmissionType: 'AMT (Automated Manual Transmission)',
      clutchType: 'Ly hợp khô đĩa đơn, điều khiển thủy lực',
      cabinType: 'Cabin ngủ rộng rãi',
      wheelbase: 3900,
      fuelTankCapacity: 400,
      fuelTankCapacityText: '400 lít (2 bình)',
      saddleHeight: 1250,
      fifthWheelType: 'JOST Đức 2 inch',
      maxTowingCapacity: 60,
      maxTowingCapacityText: '60 tấn'
    },
    description: 'Hyundai Xcient Đầu Kéo là xe đầu kéo hạng nặng cao cấp đến từ Hyundai, được thiết kế để kéo các loại sơ mi rơ mooc nặng trên đường trường. Với động cơ mạnh mẽ D6CC 12.7L sản sinh công suất 520 mã lực và mô-men xoắn lên đến 2500 Nm, xe có khả năng kéo tải trọng lớn lên đến 60 tấn.',
    features: [
      'Động cơ D6CC 12.7L mạnh mẽ 520 mã lực',
      'Hệ thống số tự động ZF 12 cấp',
      'Cabin ngủ rộng rãi với 2 giường',
      'Hệ thống phanh EBS và ESP tiên tiến',
      'Hệ thống điều hòa tự động, ghế hơi cao cấp',
      'Bình nhiên liệu dung tích lớn 400 lít',
      'Kính chắn gió toàn cảnh tăng tầm nhìn',
      'Hệ thống giám sát hành trình (GPS Fleet Management)'
    ]
  },
  
  // ===== XE ĐẦU KÉO HOWO =====
  {
    id: "402",
    name: 'HOWO Đầu Kéo',
    slug: 'howo-dau-keo',
    brand: 'HOWO',
    price: 1250000000,
    priceText: '1.250.000.000 đ',
    weightText: '35 Tấn',
    weight: 35,
    length: 6.5,
    width: 2.5,
    height: 3.3,
    dimensions: '6.5 x 2.5 x 3.3 m',
    type: 'dau-keo',
    isNew: false,
    isHot: false,
    origin: 'Trung Quốc',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Dau-Keo/howo-dau-keo.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Dau-Keo/howo-dau-keo.jpg',
      'https://tongkhoxetai.vn/upload/images/Dau-Keo/howo-dau-keo-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Dau-Keo/howo-dau-keo-3.jpg',
    ],
    specifications: {
      engineType: 'Diesel WD615',
      engineCapacity: '9.7L',
      horsePower: '420 HP',
      torque: '1900 Nm',
      transmission: 'Số sàn 16 cấp',
      fuelConsumption: '30L/100km',
      emission: 'Euro 4',
      warranty: '2 năm hoặc 100.000 km',
      seats: 2,
      year: 2023
    },
    tractorSpec: {
      horsepower: 420,
      torque: '1900 Nm tại 1300 rpm',
      transmission: 'Fuller 16 cấp',
      transmissionType: 'Số sàn',
      clutchType: 'Ly hợp khô đĩa đơn',
      cabinType: 'Cabin ngủ',
      wheelbase: 3800,
      fuelTankCapacity: 350,
      fuelTankCapacityText: '350 lít',
      saddleHeight: 1200,
      fifthWheelType: 'HOWO 2 inch',
      maxTowingCapacity: 55,
      maxTowingCapacityText: '55 tấn'
    },
    description: 'HOWO Đầu Kéo là xe đầu kéo hạng nặng đến từ Trung Quốc, được biết đến với giá thành hợp lý và hiệu suất ổn định. Với động cơ WD615 9.7L công suất 420 mã lực, xe có khả năng kéo các loại sơ mi rơ mooc nặng với tải trọng lên đến 55 tấn, phù hợp cho các công việc vận tải đường dài.',
    features: [
      'Động cơ WD615 9.7L công suất 420 mã lực',
      'Hệ thống số sàn Fuller 16 cấp',
      'Cabin ngủ trang bị tiện nghi cơ bản',
      'Hệ thống phanh ABS/ASR',
      'Ghế người lái hơi với giảm chấn',
      'Bình nhiên liệu dung tích 350 lít',
      'Chi phí bảo dưỡng thấp',
      'Phụ tùng dễ tìm, giá rẻ'
    ]
  },
  
  // ===== XE ĐẦU KÉO ISUZU =====
  {
    id: "403",
    name: 'Isuzu Giga Đầu Kéo',
    slug: 'isuzu-giga-dau-keo',
    brand: 'Isuzu',
    price: 1650000000,
    priceText: '1.650.000.000 đ',
    weightText: '38 Tấn',
    weight: 38,
    length: 6.7,
    width: 2.5,
    height: 3.4,
    dimensions: '6.7 x 2.5 x 3.4 m',
    type: 'dau-keo',
    isNew: true,
    isHot: false,
    origin: 'Nhật Bản',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Dau-Keo/isuzu-giga.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Dau-Keo/isuzu-giga.jpg',
      'https://tongkhoxetai.vn/upload/images/Dau-Keo/isuzu-giga-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Dau-Keo/isuzu-giga-3.jpg',
    ],
    specifications: {
      engineType: 'Diesel 6UZ1',
      engineCapacity: '9.8L',
      horsePower: '460 HP',
      torque: '2100 Nm',
      transmission: 'Số sàn 16 cấp',
      fuelConsumption: '29L/100km',
      emission: 'Euro 4',
      warranty: '3 năm hoặc 150.000 km',
      seats: 2,
      year: 2023
    },
    tractorSpec: {
      horsepower: 460,
      torque: '2100 Nm tại 1400 rpm',
      transmission: 'ZF 16 cấp',
      transmissionType: 'Số sàn',
      clutchType: 'Ly hợp khô đĩa đơn',
      cabinType: 'Cabin ngủ tiện nghi',
      wheelbase: 3850,
      fuelTankCapacity: 380,
      fuelTankCapacityText: '380 lít (2 bình)',
      saddleHeight: 1220,
      fifthWheelType: 'JOST Đức 2 inch',
      maxTowingCapacity: 58,
      maxTowingCapacityText: '58 tấn'
    },
    description: 'Isuzu Giga Đầu Kéo là xe đầu kéo hạng nặng từ thương hiệu Isuzu Nhật Bản nổi tiếng với độ bền và tiết kiệm nhiên liệu. Với động cơ 6UZ1 9.8L công suất 460 mã lực, xe có khả năng kéo các loại sơ mi rơ mooc nặng với hiệu suất cao và chi phí vận hành tối ưu.',
    features: [
      'Động cơ 6UZ1 9.8L công suất 460 mã lực',
      'Hệ thống số sàn ZF 16 cấp',
      'Cabin ngủ thiết kế tiện nghi, rộng rãi',
      'Hệ thống phanh ABS/EBS hiện đại',
      'Ghế người lái hơi cao cấp',
      'Hệ thống giảm xóc cabin khí nén',
      'Độ bền cao, chi phí bảo dưỡng thấp',
      'Tiết kiệm nhiên liệu vượt trội'
    ]
  },
  
  // ===== Các loại xe tải khác giữ nguyên =====
  {
    id: "1",
    name: 'Hyundai Porter H150 1.5 Tấn',
    slug: 'hyundai-porter-h150-1-5-tan',
    brand: 'Hyundai',
    price: 410000000,
    priceText: '410.000.000 đ',
    weightText: '1.5 Tấn',
    weight: 1.5,
    length: 3.6,
    width: 1.6,
    height: 1.9,
    dimensions: '3.6 x 1.6 x 1.9 m',
    type: 'xe-tai',
    isNew: true,
    isHot: true,
    origin: 'Hàn Quốc',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Hyundai/h150.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Hyundai/h150.jpg',
      'https://tongkhoxetai.vn/upload/images/Hyundai/h150-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Hyundai/h150-3.jpg',
    ],
    specifications: {
      engineType: 'Diesel',
      engineCapacity: '2.5L',
      horsePower: '130 HP',
      torque: '260 Nm',
      transmission: 'Số sàn 6 cấp',
      fuelConsumption: '8L/100km',
      emission: 'Euro 4',
      warranty: '3 năm hoặc 100.000 km',
      seats: 3,
      year: 2023
    },
    description: 'Hyundai Porter H150 1.5 tấn là một trong những dòng xe tải nhẹ được nhập khẩu, chính hãng tại Hyundai Thành Công. Xe được trang bị động cơ Kappa 1.5L, mạnh mẽ và tiết kiệm nhiên liệu. Mẫu xe này được thiết kế để đáp ứng nhu cầu vận chuyển hàng hóa trong đô thị một cách linh hoạt.',
    features: [
      'Động cơ Kappa 1.5L tiết kiệm nhiên liệu',
      'Hệ thống phanh ABS/EBD',
      'Cabin rộng rãi, tiện nghi',
      'Khả năng chở hàng linh hoạt trong đô thị',
      'Tiêu chuẩn khí thải Euro 4'
    ]
  },
  {
    id: "2", 
    name: 'Suzuki Super Carry Pro 940kg',
    slug: 'suzuki-super-carry-pro-940kg',
    brand: 'Suzuki',
    price: 334000000,
    priceText: '334.000.000 đ',
    weightText: '940kg',
    weight: 0.94,
    length: 3.2,
    width: 1.6,
    height: 1.8,
    dimensions: '3.2 x 1.6 x 1.8 m',
    type: 'xe-tai',
    isNew: false,
    isHot: false,
    origin: 'Nhật Bản',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Suzuki/super-carry-pro.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Suzuki/super-carry-pro.jpg',
      'https://tongkhoxetai.vn/upload/images/Suzuki/super-carry-pro-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Suzuki/super-carry-pro-3.jpg',
    ],
    specifications: {
      engineType: 'Xăng',
      engineCapacity: '1.6L',
      horsePower: '92 HP',
      torque: '133 Nm',
      transmission: 'Số sàn 5 cấp',
      fuelConsumption: '7L/100km',
      emission: 'Euro 4',
      warranty: '3 năm hoặc 100.000 km',
      seats: 2,
      year: 2023
    },
    description: 'Suzuki Super Carry Pro là dòng xe tải nhẹ được ưa chuộng tại Việt Nam với khả năng chở hàng linh hoạt trong đô thị. Xe có thiết kế nhỏ gọn, dễ dàng di chuyển trong các ngõ hẹp và khu vực đông đúc.',
    features: [
      'Thiết kế nhỏ gọn, dễ dàng di chuyển',
      'Tiết kiệm nhiên liệu',
      'Chi phí bảo dưỡng thấp',
      'Khả năng vận hành bền bỉ',
      'Khả năng chở hàng linh hoạt'
    ]
  },
  {
    id: "3",
    name: 'Hyundai Mighty EX8 GTL 8 Tấn',
    slug: 'hyundai-mighty-ex8-gtl-8-tan',
    brand: 'Hyundai',
    price: 750000000,
    priceText: '750.000.000 đ',
    weightText: '8 Tấn',
    weight: 8,
    length: 6.6,
    width: 2.2,
    height: 2.3,
    dimensions: '6.6 x 2.2 x 2.3 m',
    type: 'xe-tai',
    isNew: true,
    isHot: true,
    origin: 'Hàn Quốc',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Hyundai/mighty-ex8.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Hyundai/mighty-ex8.jpg',
      'https://tongkhoxetai.vn/upload/images/Hyundai/mighty-ex8-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Hyundai/mighty-ex8-3.jpg',
    ],
    specifications: {
      engineType: 'Diesel',
      engineCapacity: '3.9L',
      horsePower: '170 HP',
      torque: '608 Nm',
      transmission: 'Số sàn 5 cấp',
      fuelConsumption: '13L/100km',
      emission: 'Euro 4',
      warranty: '3 năm hoặc 100.000 km',
      seats: 3,
      year: 2023
    },
    description: 'Hyundai Mighty EX8 GTL 8 tấn là dòng xe tải trung được ưa chuộng tại Việt Nam với thiết kế hiện đại và khả năng vận hành mạnh mẽ. Xe được trang bị động cơ Diesel 3.9L, mang lại hiệu suất cao và tiết kiệm nhiên liệu.',
    features: [
      'Động cơ mạnh mẽ, tiết kiệm nhiên liệu',
      'Cabin rộng rãi, tiện nghi',
      'Hệ thống phanh ABS/EBD',
      'Khung gầm chắc chắn',
      'Tải trọng lớn, phù hợp vận chuyển đường dài'
    ]
  },
  {
    id: "4",
    name: 'Isuzu QKR 2.9 Tấn',
    slug: 'isuzu-qkr-2-9-tan',
    brand: 'Isuzu',
    price: 465000000,
    priceText: '465.000.000 đ',
    weightText: '2.9 Tấn',
    weight: 2.9,
    length: 4.5,
    width: 1.7,
    height: 2.0,
    dimensions: '4.5 x 1.7 x 2.0 m',
    type: 'xe-tai',
    isNew: false,
    isHot: false,
    origin: 'Nhật Bản',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Isuzu/qkr.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Isuzu/qkr.jpg',
      'https://tongkhoxetai.vn/upload/images/Isuzu/qkr-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Isuzu/qkr-3.jpg',
    ],
    specifications: {
      engineType: 'Diesel',
      engineCapacity: '2.8L',
      horsePower: '106 HP',
      torque: '280 Nm',
      transmission: 'Số sàn 5 cấp',
      fuelConsumption: '9L/100km',
      emission: 'Euro 4',
      warranty: '3 năm hoặc 100.000 km',
      seats: 3,
      year: 2023
    },
    description: 'Isuzu QKR 2.9 tấn là dòng xe tải nhẹ được nhiều khách hàng tin dùng với ưu điểm về độ bền, tiết kiệm nhiên liệu và chi phí bảo dưỡng thấp. Xe được thiết kế phù hợp với điều kiện vận chuyển hàng hóa tại Việt Nam.',
    features: [
      'Động cơ bền bỉ, tiết kiệm nhiên liệu',
      'Chi phí bảo dưỡng thấp',
      'Khả năng chở hàng linh hoạt',
      'Cabin thoải mái, thiết kế hiện đại',
      'Hệ thống treo chắc chắn'
    ]
  },
  {
    id: "5",
    name: 'Thaco Kia K200 1.9 Tấn',
    slug: 'thaco-kia-k200-1-9-tan',
    brand: 'Kia',
    price: 335000000,
    priceText: '335.000.000 đ',
    weightText: '1.9 Tấn',
    weight: 1.9,
    length: 3.5,
    width: 1.6,
    height: 1.9,
    dimensions: '3.5 x 1.6 x 1.9 m',
    type: 'xe-tai',
    isNew: false,
    isHot: true,
    origin: 'Hàn Quốc/Việt Nam',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Kia/k200.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Kia/k200.jpg',
      'https://tongkhoxetai.vn/upload/images/Kia/k200-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Kia/k200-3.jpg',
    ],
    specifications: {
      engineType: 'Diesel',
      engineCapacity: '2.0L',
      horsePower: '139 HP',
      torque: '340 Nm',
      transmission: 'Số sàn 6 cấp',
      fuelConsumption: '8L/100km',
      emission: 'Euro 4',
      warranty: '3 năm hoặc 100.000 km',
      seats: 3,
      year: 2023
    },
    description: 'Thaco Kia K200 1.9 tấn là dòng xe tải nhẹ được sản xuất và lắp ráp tại Việt Nam với sự kết hợp công nghệ của Hàn Quốc. Xe có thiết kế hiện đại, khả năng vận hành bền bỉ và tiết kiệm nhiên liệu.',
    features: [
      'Thiết kế cabin hiện đại, rộng rãi',
      'Động cơ mạnh mẽ, tiết kiệm nhiên liệu',
      'Khả năng di chuyển linh hoạt trong đô thị',
      'Chi phí bảo dưỡng thấp',
      'Giá thành cạnh tranh'
    ]
  },
  {
    id: "6",
    name: 'Dongfeng Hoàng Huy 7 Tấn',
    slug: 'dongfeng-hoang-huy-7-tan',
    brand: 'Dongfeng',
    price: 600000000,
    priceText: '600.000.000 đ',
    weightText: '7 Tấn',
    weight: 7,
    length: 6.2,
    width: 2.2,
    height: 2.3,
    dimensions: '6.2 x 2.2 x 2.3 m',
    type: 'xe-tai',
    isNew: false,
    isHot: false,
    origin: 'Trung Quốc',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Dongfeng/hoang-huy.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Dongfeng/hoang-huy.jpg',
      'https://tongkhoxetai.vn/upload/images/Dongfeng/hoang-huy-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Dongfeng/hoang-huy-3.jpg',
    ],
    specifications: {
      engineType: 'Diesel',
      engineCapacity: '3.8L',
      horsePower: '160 HP',
      torque: '580 Nm',
      transmission: 'Số sàn 6 cấp',
      fuelConsumption: '12L/100km',
      emission: 'Euro 4',
      warranty: '2 năm hoặc 100.000 km',
      seats: 3,
      year: 2023
    },
    description: 'Dongfeng Hoàng Huy 7 tấn là dòng xe tải trung được nhập khẩu và phân phối bởi công ty Hoàng Huy. Xe có thiết kế bền bỉ, cabin rộng rãi và khả năng chở hàng linh hoạt với tải trọng lớn.',
    features: [
      'Tải trọng lớn, phù hợp vận chuyển đường dài',
      'Động cơ mạnh mẽ, bền bỉ',
      'Cabin rộng rãi, thoải mái',
      'Hệ thống phanh ABS/EBD',
      'Giá thành cạnh tranh'
    ]
  },
  {
    id: "7",
    name: 'Hino 500 Series 16 Tấn',
    slug: 'hino-500-series-16-tan',
    brand: 'Hino',
    price: 1250000000,
    priceText: '1.250.000.000 đ',
    weightText: '16 Tấn',
    weight: 16,
    length: 9.2,
    width: 2.5,
    height: 3.0,
    dimensions: '9.2 x 2.5 x 3.0 m',
    type: 'xe-tai',
    isNew: true,
    isHot: false,
    origin: 'Nhật Bản',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Hino/500-series.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Hino/500-series.jpg',
      'https://tongkhoxetai.vn/upload/images/Hino/500-series-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Hino/500-series-3.jpg',
    ],
    specifications: {
      engineType: 'Diesel',
      engineCapacity: '7.6L',
      horsePower: '280 HP',
      torque: '900 Nm',
      transmission: 'Số sàn 8 cấp',
      fuelConsumption: '18L/100km',
      emission: 'Euro 4',
      warranty: '3 năm hoặc 150.000 km',
      seats: 3,
      year: 2023
    },
    description: 'Hino 500 Series 16 tấn là dòng xe tải nặng đến từ Nhật Bản với ưu điểm về độ bền, công nghệ tiên tiến và hiệu suất cao. Xe được thiết kế để vận chuyển hàng hóa trọng tải lớn trên các cung đường dài.',
    features: [
      'Động cơ công suất lớn, bền bỉ',
      'Hệ thống phanh hiện đại ABS/EBD/BA',
      'Cabin rộng rãi, tiện nghi cao cấp',
      'Khung gầm cứng cáp, chịu tải tốt',
      'Hệ thống treo chắc chắn'
    ]
  },
  {
    id: "8",
    name: 'Hyundai Xcient 25 Tấn',
    slug: 'hyundai-xcient-25-tan',
    brand: 'Hyundai',
    price: 1850000000,
    priceText: '1.850.000.000 đ',
    weightText: '25 Tấn',
    weight: 25,
    length: 12.0,
    width: 2.5,
    height: 3.2,
    dimensions: '12.0 x 2.5 x 3.2 m',
    type: 'xe-tai',
    isNew: false,
    isHot: true,
    origin: 'Hàn Quốc',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Hyundai/xcient.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Hyundai/xcient.jpg',
      'https://tongkhoxetai.vn/upload/images/Hyundai/xcient-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Hyundai/xcient-3.jpg',
    ],
    specifications: {
      engineType: 'Diesel',
      engineCapacity: '12.7L',
      horsePower: '520 HP',
      torque: '2500 Nm',
      transmission: 'Số tự động 12 cấp',
      fuelConsumption: '26L/100km',
      emission: 'Euro 5',
      warranty: '3 năm hoặc 200.000 km',
      seats: 2,
      year: 2023
    },
    description: 'Hyundai Xcient 25 tấn là dòng xe tải hạng nặng cao cấp của Hyundai với thiết kế hiện đại, công nghệ tiên tiến và khả năng vận chuyển hàng hóa trọng tải lớn. Xe được trang bị động cơ mạnh mẽ và các tính năng an toàn hiện đại.',
    features: [
      'Động cơ công suất lớn, mạnh mẽ',
      'Cabin thiết kế hiện đại, tiện nghi cao cấp',
      'Hệ thống an toàn tiên tiến',
      'Hệ thống phanh hiện đại ABS/EBD/ESP',
      'Khả năng chịu tải cao, bền bỉ'
    ]
  },
  {
    id: "9",
    name: 'TADANO 5 Tấn',
    slug: 'tadano-5-tan',
    brand: 'Tadano',
    price: 1800000000,
    priceText: '1.800.000.000 đ',
    weightText: '5 Tấn',
    weight: 5,
    length: 8.2,
    width: 2.3,
    height: 3.1,
    dimensions: '8.2 x 2.3 x 3.1 m',
    type: 'xe-cau',
    isNew: true,
    isHot: true,
    origin: 'Nhật Bản',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Cau/tadano-5t.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Cau/tadano-5t.jpg',
      'https://tongkhoxetai.vn/upload/images/Cau/tadano-5t-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Cau/tadano-5t-3.jpg',
    ],
    specifications: {
      engineType: 'Diesel',
      engineCapacity: '5.2L',
      horsePower: '180 HP',
      torque: '750 Nm',
      transmission: 'Số sàn 6 cấp',
      fuelConsumption: '15L/100km',
      emission: 'Euro 4',
      warranty: '2 năm hoặc 100.000 km',
      seats: 2,
      year: 2023
    },
    description: 'TADANO 5 tấn là dòng xe cẩu chuyên dụng đến từ Nhật Bản, được thiết kế để nâng và di chuyển các hàng hóa nặng. Xe được trang bị cần cẩu có thể nâng tải trọng lên đến 5 tấn và với tầm với xa.',
    features: [
      'Cần cẩu chắc chắn, nâng tải trọng lớn',
      'Hệ thống thủy lực mạnh mẽ',
      'Điều khiển chính xác, an toàn',
      'Cabin rộng rãi, tầm nhìn tốt',
      'Khả năng vận hành linh hoạt'
    ]
  },
  {
    id: "10",
    name: 'UNIC 3 Tấn',
    slug: 'unic-3-tan',
    brand: 'UNIC',
    price: 1200000000,
    priceText: '1.200.000.000 đ',
    weightText: '3 Tấn',
    weight: 3,
    length: 6.8,
    width: 2.2,
    height: 2.8,
    dimensions: '6.8 x 2.2 x 2.8 m',
    type: 'xe-cau',
    isNew: false,
    isHot: false,
    origin: 'Nhật Bản',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Cau/unic-3t.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Cau/unic-3t.jpg',
      'https://tongkhoxetai.vn/upload/images/Cau/unic-3t-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Cau/unic-3t-3.jpg',
    ],
    specifications: {
      engineType: 'Diesel',
      engineCapacity: '4.0L',
      horsePower: '150 HP',
      torque: '580 Nm',
      transmission: 'Số sàn 5 cấp',
      fuelConsumption: '12L/100km',
      emission: 'Euro 4',
      warranty: '2 năm hoặc 100.000 km',
      seats: 2,
      year: 2023
    },
    description: 'UNIC 3 tấn là dòng xe cẩu nhỏ gọn, linh hoạt và dễ dàng di chuyển trong các không gian hẹp. Xe được trang bị cần cẩu có thể nâng tải trọng lên đến 3 tấn, phù hợp với các công trình xây dựng vừa và nhỏ.',
    features: [
      'Kích thước nhỏ gọn, linh hoạt',
      'Hệ thống thủy lực mạnh mẽ',
      'Dễ dàng vận hành',
      'Chi phí bảo dưỡng thấp',
      'Độ bền cao'
    ]
  },
  {
    id: "11", // Giả sử đây là ID của Xe Tải Gắn Cẩu Soosan 10 Tấn
    name: 'Xe Tải Gắn Cẩu Soosan 10 Tấn',
    slug: 'xe-tai-gan-cau-soosan-10-tan',
    brand: 'Hyundai', // Thương hiệu xe nền
    price: 2500000000,
    priceText: '2.500.000.000 đ',
    weightText: '10 Tấn (Cẩu)', // Tải trọng cẩu
    weight: 10, // Tải trọng cẩu (số)
    length: 9.5, // Kích thước xe nền
    width: 2.5,
    height: 3.5,
    dimensions: '9.5 x 2.5 x 3.5 m',
    type: 'xe-cau',
    craneType: 'cẩu-gắn-xe', // Hoặc 'cẩu-rời' nếu là cẩu rời
    isNew: true,
    isHot: true,
    origin: 'Hàn Quốc (Cẩu Soosan)',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Cau/soosan-10t.jpg', // Cần hình ảnh chính xác
    images: [
      'https://tongkhoxetai.vn/upload/images/Cau/soosan-10t.jpg',
      'https://tongkhoxetai.vn/upload/images/Cau/soosan-10t-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Cau/soosan-10t-3.jpg',
    ],
    specifications: { // Thông số xe nền (ví dụ Hyundai)
      engineType: 'Diesel D6CC', // Ví dụ
      engineCapacity: '12.7L',
      horsePower: '380 HP', // Ví dụ
      // ... (thêm các thông số khác của xe nền)
      warranty: '2 năm hoặc 100.000 km (xe nền)',
      seats: 2,
      year: 2024
    },
    craneSpec: {
      craneModelName: 'SOOSAN SCS1015LS', // Thông tin từ link
      liftingCapacityText: '10,000 kg / 2.5 m', // Sức nâng lớn nhất / tại tầm với
      maxLiftingMoment: '25.0 tấn.m',
      maxLiftingHeight: '24.5 m', // Chiều cao nâng lớn nhất (bao gồm cả cần phụ nếu có)
      maxWorkingRadius: '20.7 m', // Bán kính làm việc lớn nhất (cần chính)
      
      boomType: 'Cần lục giác, 5 đoạn',
      boomSections: 5, // Số đoạn cần chính
      boomLength: '6.0 m ~ 20.7 m', // Chiều dài cần chính
      boomExtensionSpeed: '14.75 m / 50 giây',
      boomLuffingAngle: '-17° ~ 80°',
      boomLuffingSpeed: '1° ~ 80° / 20 giây',

      winchRatedSpeed: '16 m/phút (ở lớp cáp thứ 4)',
      winchHookSpeed: '16 m/phút', // (Cần làm rõ thêm nếu có tốc độ khác)
      winchRopeType: 'Ø 10 mm x 120 m (IWRC)',
      
      swingAngle: '360° liên tục',
      swingSpeed: '2.0 vòng/phút',
      swingReductionType: 'Bánh răng trục vít, mô tơ thủy lực',

      outriggersFrontExtension: '5.7 m (Mở rộng tối đa)',
      outriggersRearExtension: '4.4 m (Mở rộng tối đa, tùy chọn)', // Cần xem kỹ tài liệu của từng model cẩu
      outriggersType: 'Thủy lực, chân chống hạ xuống đất',

      hydraulicOilFlow: '60 L/phút (ở 1000 vòng/phút)',
      hydraulicOperatingPressure: '210 kgf/cm²',
      hydraulicTankCapacity: '120 L',
      
      // Thông tin chi tiết sức nâng (lấy từ bảng)
      detailedLiftingCapacity: [
        "10,000 kg / 2.5 m",
        "6,100 kg / 4.4 m",
        "3,600 kg / 7.5 m",
        "2,350 kg / 10.6 m",
        "1,700 kg / 13.7 m",
        "1,200 kg / 16.8 m",
        "1,030 kg / 20.7 m"
      ],
      // Các thông số cũ có thể bỏ nếu đã được bao gồm trong các trường mới chi tiết hơn
      // liftingCapacity: 10000, // Sức nâng (kg)
      // reachLength: 20.7, // Tầm với (m)
      // rotationAngle: '360° liên tục', // Đã có swingAngle
      // stabilizers: 'Chân chống thủy lực trước và sau', // Mô tả chung, đã có outriggers... chi tiết
      // controlSystem: 'Hệ thống điều khiển thủy lực với van điều khiển tỷ lệ', // Mô tả chung
      // hydraulicSystem: 'Bơm thủy lực piston', // Mô tả chung, đã có hydraulicPumpType
      // operatingPressure: '210 kgf/cm2', // Đã có hydraulicOperatingPressure
      safetySystem: 'Van an toàn, còi báo quá tải, chỉ báo góc cần, khóa xoay',
    },
    description: 'Xe tải Hyundai gắn cẩu Soosan SCS1015LS 10 tấn là giải pháp nâng hạ và vận chuyển hàng hóa nặng hiệu quả. Cẩu Soosan với sức nâng vượt trội và tầm với xa, kết hợp với xe nền Hyundai mạnh mẽ, bền bỉ.',
    features: [
      'Cẩu Soosan SCS1015LS sức nâng 10 tấn',
      'Bán kính làm việc tối đa 20.7m',
      'Chiều cao nâng tối đa 24.5m',
      'Hệ thống chân chống thủy lực vững chắc',
      'Vận hành êm ái, chính xác',
      'Tích hợp các tính năng an toàn tiên tiến'
    ]
  },
  {
    id: "12",
    name: 'DOOSUNG 3 Trục',
    slug: 'doosung-3-truc',
    brand: 'DOOSUNG',
    price: 550000000,
    priceText: '550.000.000 đ',
    weightText: '32 Tấn',
    weight: 32,
    length: 12.4,
    width: 2.5,
    height: 3.8,
    dimensions: '12.4 x 2.5 x 3.8 m',
    type: 'mooc',
    isNew: false,
    isHot: true,
    origin: 'Hàn Quốc',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Mooc/doosung-3-truc.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Mooc/doosung-3-truc.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/doosung-3-truc-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/doosung-3-truc-3.jpg',
    ],
    specifications: {
      engineType: 'Không có',
      transmission: 'Không có',
      payload: '32 tấn',
      warranty: '1 năm',
      year: 2023
    },
    description: 'DOOSUNG 3 trục là loại sơ mi rơ mooc chất lượng cao đến từ Hàn Quốc, được thiết kế để vận chuyển hàng hóa nặng với tải trọng lên đến 32 tấn. Sản phẩm có cấu trúc chắc chắn, bền bỉ và khả năng chịu tải cao.',
    features: [
      'Cấu trúc khung gầm chắc chắn',
      'Hệ thống 3 trục tăng khả năng chịu tải',
      'Sàn thép cường lực dày',
      'Hệ thống phanh ABS an toàn',
      'Tuổi thọ cao, bảo dưỡng đơn giản'
    ]
  },
  {
    id: "13",
    name: 'CIMC Xitec Chở Xăng Dầu',
    slug: 'cimc-xitec-cho-xang-dau',
    brand: 'CIMC',
    price: 680000000,
    priceText: '680.000.000 đ',
    weightText: '30 Tấn',
    weight: 30,
    length: 13.5,
    width: 2.5,
    height: 3.9,
    dimensions: '13.5 x 2.5 x 3.9 m',
    type: 'mooc',
    isNew: true,
    isHot: false,
    origin: 'Trung Quốc',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Mooc/cimc-xitec.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Mooc/cimc-xitec.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/cimc-xitec-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/cimc-xitec-3.jpg',
    ],
    specifications: {
      engineType: 'Không có',
      transmission: 'Không có',
      capacity: '40.000 lít',
      payload: '30 tấn',
      warranty: '2 năm',
      year: 2023
    },
    description: 'CIMC Xitec là loại sơ mi rơ mooc chuyên dụng để chở xăng dầu, được thiết kế với bồn chứa dung tích lớn và các hệ thống an toàn chuyên biệt cho việc vận chuyển nhiên liệu.',
    features: [
      'Bồn chứa dung tích lớn bằng thép chống ăn mòn',
      'Hệ thống van an toàn chuyên dụng',
      'Trang bị hệ thống chống tràn',
      'Thiết kế tuân thủ tiêu chuẩn an toàn quốc tế',
      'Hệ thống 3 trục chắc chắn'
    ]
  },
  {
    id: "14",
    name: 'KOKSAN Ben 3 Trục',
    slug: 'koksan-ben-3-truc',
    brand: 'KOKSAN',
    price: 600000000,
    priceText: '600.000.000 đ',
    weightText: '28 Tấn',
    weight: 28,
    length: 11.8,
    width: 2.5,
    height: 3.6,
    dimensions: '11.8 x 2.5 x 3.6 m',
    type: 'mooc',
    isNew: false,
    isHot: false,
    origin: 'Hàn Quốc',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Mooc/koksan-ben.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Mooc/koksan-ben.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/koksan-ben-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Mooc/koksan-ben-3.jpg',
    ],
    specifications: {
      engineType: 'Không có',
      transmission: 'Không có',
      payload: '28 tấn',
      warranty: '1 năm',
      year: 2023
    },
    description: 'KOKSAN Ben 3 trục là loại sơ mi rơ mooc ben cao cấp từ Hàn Quốc, được thiết kế để vận chuyển và đổ các vật liệu rời như cát, đá, xi măng. Sản phẩm có cấu trúc chắc chắn với hệ thống ben thủy lực mạnh mẽ.',
    features: [
      'Hệ thống ben thủy lực mạnh mẽ',
      'Thùng hàng có độ bền cao',
      'Khung gầm cứng cáp',
      'Hệ thống 3 trục chắc chắn',
      'Tuổi thọ cao, chi phí bảo dưỡng thấp'
    ]
  },
  {
    id: "15",
    name: 'Hyundai HD1000 Đầu Kéo',
    slug: 'hyundai-hd1000-dau-keo',
    brand: 'Hyundai',
    price: 1950000000,
    priceText: '1.950.000.000 đ',
    weightText: '40 Tấn',
    weight: 40,
    length: 6.8,
    width: 2.5,
    height: 3.6,
    dimensions: '6.8 x 2.5 x 3.6 m',
    type: 'dau-keo',
    isNew: true,
    isHot: true,
    origin: 'Hàn Quốc',
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/Dau-Keo/hd1000.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/Dau-Keo/hd1000.jpg',
      'https://tongkhoxetai.vn/upload/images/Dau-Keo/hd1000-2.jpg',
      'https://tongkhoxetai.vn/upload/images/Dau-Keo/hd1000-3.jpg',
    ],
    specifications: {
      engineType: 'Diesel',
      engineCapacity: '12.7L',
      horsePower: '520 HP',
      torque: '2500 Nm',
      transmission: 'Số tự động 12 cấp',
      fuelConsumption: '30L/100km',
      emission: 'Euro 5',
      warranty: '3 năm hoặc 200.000 km',
      seats: 2,
      year: 2023
    },
    description: 'Hyundai HD1000 là dòng xe đầu kéo cao cấp của Hyundai, được thiết kế để kéo các loại sơ mi rơ mooc nặng với hiệu suất cao và độ bền vượt trội. Xe được trang bị động cơ mạnh mẽ cùng hệ thống an toàn tiên tiến.',
    features: [
      'Động cơ công suất lớn, mạnh mẽ',
      'Cabin thiết kế sang trọng, tiện nghi cao cấp',
      'Hệ thống an toàn tiên tiến',
      'Hệ thống phanh hiện đại ABS/EBD/ESP',
      'Tiêu chuẩn khí thải Euro 5'
    ]
  }
];

// Phân loại xe theo từng danh mục
// Xe tải nổi bật
export const featuredTrucks: Truck[] = trucks.filter(truck => 
  truck.type === 'xe-tai' && (truck.isHot || truck.isNew)
).slice(0, 8);

// Xe cẩu chuyên dụng
export const specializedCranes: Truck[] = trucks.filter(truck => 
  truck.type === 'xe-cau'
);

// Sơ mi rơ mooc
export const semiTrailers: Truck[] = trucks.filter(truck => 
  truck.type === 'mooc'
);

// Xe đầu kéo
export const tractors: Truck[] = trucks.filter(truck => 
  truck.type === 'dau-keo'
);
