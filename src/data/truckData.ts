
import { Truck, TruckBrand, TruckWeight } from '@/models/TruckTypes';

// Dữ liệu danh sách thương hiệu xe
export const truckBrands: TruckBrand[] = [
  { id: 'hyundai', name: 'Hyundai' },
  { id: 'isuzu', name: 'Isuzu' },
  { id: 'hino', name: 'Hino' },
  { id: 'dongfeng', name: 'Dongfeng' },
  { id: 'faw', name: 'FAW' },
  { id: 'thaco', name: 'Thaco' },
  { id: 'suzuki', name: 'Suzuki' },
  { id: 'jac', name: 'JAC' },
];

// Dữ liệu phân loại tải trọng xe
export const truckWeights: TruckWeight[] = [
  { id: '0-1', name: 'Dưới 1 tấn', value: '0-1', range: [0, 1] },
  { id: '1-2', name: '1 - 2 tấn', value: '1-2', range: [1, 2] },
  { id: '2-3.5', name: '2 - 3.5 tấn', value: '2-3.5', range: [2, 3.5] },
  { id: '3.5-5', name: '3.5 - 5 tấn', value: '3.5-5', range: [3.5, 5] },
  { id: '5-8', name: '5 - 8 tấn', value: '5-8', range: [5, 8] },
  { id: '8-15', name: '8 - 15 tấn', value: '8-15', range: [8, 15] },
  { id: '15-20', name: '15 - 20 tấn', value: '15-20', range: [15, 20] },
  { id: '20+', name: 'Trên 20 tấn', value: '20+', range: [20, 100] },
];

// Danh sách xe tải với thông số kỹ thuật chi tiết
export const trucks: Truck[] = [
  {
    id: '1',
    name: 'Xe Tải Suzuki Carry Pro',
    slug: 'xe-tai-suzuki-carry-pro',
    type: 'xe-tai',
    brand: 'Suzuki',
    price: 319000000,
    priceText: '319.000.000 VNĐ',
    weight: 0.95,
    weightText: '950 kg',
    length: 4.2,
    thumbnailUrl: 'https://tongkhoxetai.vn/assets/images/products/suzuki-carry-pro-thung-kin.jpg',
    images: [
      'https://tongkhoxetai.vn/assets/images/products/suzuki-carry-pro-thung-kin.jpg',
      'https://tongkhoxetai.vn/assets/images/products/suzuki-carry-pro-750kg.jpg'
    ],
    isNew: true,
    isHot: true,
    isSoldOut: false,
    specifications: {
      engineType: 'K14B-A, 4 xy-lanh thẳng hàng',
      engineCapacity: '1373cc',
      horsePower: '97 mã lực tại 6000 vòng/phút',
      torque: '130 Nm tại 4000 vòng/phút',
      transmission: 'Số sàn 5 cấp',
      fuelConsumption: '7L/100km',
      emission: 'Euro 4',
      dimensions: '4.195 x 1.675 x 1.870 mm',
      wheelbase: '2.5 m',
      payload: '950 kg',
      origin: 'Indonesia, lắp ráp tại Việt Nam',
      seats: '2 chỗ',
      warranty: '3 năm hoặc 100.000 km',
      year: '2024'
    },
    description: 'Suzuki Carry Pro là dòng xe tải nhỏ được ưa chuộng tại thị trường Việt Nam, với thiết kế nhỏ gọn, linh hoạt, phù hợp để vận chuyển hàng hóa trong thành phố và khu vực đông dân cư. Xe có tải trọng cho phép 950kg, động cơ 1.4L mạnh mẽ và tiết kiệm nhiên liệu.',
    features: [
      'Khả năng vận hành ổn định',
      'Tiết kiệm nhiên liệu',
      'Đa dạng lựa chọn thùng xe',
      'Kích thước nhỏ gọn, dễ dàng di chuyển trong phố',
      'Cabin thoải mái, tiện nghi',
      'Khung gầm chắc chắn'
    ]
  },
  {
    id: '2',
    name: 'Hyundai New Porter H150',
    slug: 'hyundai-porter-h150',
    type: 'xe-tai',
    brand: 'Hyundai',
    price: 509000000,
    priceText: '509.000.000 VNĐ',
    weight: 1.5, 
    weightText: '1.5 tấn',
    length: 6.2,
    thumbnailUrl: 'https://tongkhoxetai.vn/assets/images/products/hyundai-h150.jpg',
    images: [
      'https://tongkhoxetai.vn/assets/images/products/hyundai-h150.jpg',
      'https://tongkhoxetai.vn/assets/images/products/hyundai-h150-2.jpg'
    ],
    isNew: true,
    isHot: true,
    isSoldOut: false,
    specifications: {
      engineType: 'D4CB, 4 xy-lanh thẳng hàng',
      engineCapacity: '2497cc',
      horsePower: '130 mã lực tại 3800 vòng/phút',
      torque: '255 Nm tại 1500-3500 vòng/phút',
      transmission: 'Số sàn 6 cấp',
      fuelConsumption: '9L/100km',
      emission: 'Euro 5',
      dimensions: '6.200 x 2.000 x 2.300 mm',
      wheelbase: '3.2 m',
      payload: '1.5 tấn',
      origin: 'Hàn Quốc, lắp ráp tại Việt Nam',
      seats: '3 chỗ',
      warranty: '5 năm hoặc 150.000 km',
      year: '2024'
    },
    description: 'Hyundai New Porter H150 là dòng xe tải nhẹ được thiết kế với những đường nét hiện đại, cabin thoải mái và rộng rãi. Xe được trang bị động cơ D4CB mạnh mẽ, tiết kiệm nhiên liệu và đáp ứng tiêu chuẩn khí thải Euro 5. Với tải trọng 1.5 tấn, xe là lựa chọn lý tưởng cho vận chuyển hàng hóa trong thành phố và khu đông dân cư.',
    features: [
      'Cabin rộng rãi, thoáng mát',
      'Động cơ mạnh mẽ, bền bỉ',
      'Tiêu chuẩn khí thải Euro 5',
      'Hệ thống phanh ABS, EBD',
      'Khung gầm vững chắc',
      'Đa dạng lựa chọn thùng xe'
    ]
  },
  {
    id: '3',
    name: 'Isuzu QKR 270',
    slug: 'isuzu-qkr-270',
    type: 'xe-tai',
    brand: 'Isuzu',
    price: 487000000,
    priceText: '487.000.000 VNĐ',
    weight: 2.7,
    weightText: '2.7 tấn',
    length: 6.2,
    thumbnailUrl: 'https://tongkhoxetai.vn/assets/images/products/isuzu-qkr.jpg',
    images: [
      'https://tongkhoxetai.vn/assets/images/products/isuzu-qkr.jpg',
      'https://tongkhoxetai.vn/assets/images/products/isuzu-qkr-2.jpg'
    ],
    isNew: true,
    isHot: false,
    isSoldOut: false,
    specifications: {
      engineType: 'JE493ZLQ4, 4 xy-lanh thẳng hàng',
      engineCapacity: '2771cc',
      horsePower: '106 mã lực tại 3400 vòng/phút',
      torque: '230 Nm tại 1600-2600 vòng/phút',
      transmission: 'Số sàn 5 cấp',
      fuelConsumption: '9L/100km',
      emission: 'Euro 4',
      dimensions: '6.190 x 1.985 x 2.280 mm',
      wheelbase: '3.3 m',
      payload: '2.7 tấn',
      origin: 'Nhật Bản, lắp ráp tại Việt Nam',
      seats: '3 chỗ',
      warranty: '3 năm không giới hạn km',
      year: '2024'
    },
    description: 'Isuzu QKR 270 là dòng xe tải nhẹ có tải trọng 2.7 tấn, được thiết kế với độ bền cao và khả năng vận hành ổn định. Xe được trang bị động cơ JE493ZLQ4 mạnh mẽ, tiết kiệm nhiên liệu và đáp ứng tiêu chuẩn khí thải Euro 4. Isuzu QKR 270 là lựa chọn lý tưởng cho các doanh nghiệp vận tải nhỏ và vừa.',
    features: [
      'Khả năng vận hành bền bỉ',
      'Tiết kiệm nhiên liệu',
      'Chi phí bảo dưỡng thấp',
      'Cabin thoải mái, tiện nghi',
      'Khung gầm chắc chắn',
      'Hệ thống phanh an toàn'
    ]
  },
  {
    id: '4',
    name: 'Hino 500 Series',
    slug: 'hino-500-series',
    type: 'xe-tai',
    brand: 'Hino',
    price: 1350000000,
    priceText: '1.350.000.000 VNĐ',
    weight: 8.8,
    weightText: '8.8 tấn',
    length: 9.1,
    thumbnailUrl: 'https://tongkhoxetai.vn/assets/images/products/hino-500.jpg',
    images: [
      'https://tongkhoxetai.vn/assets/images/products/hino-500.jpg',
      'https://tongkhoxetai.vn/assets/images/products/hino-500-2.jpg'
    ],
    isNew: false,
    isHot: true,
    isSoldOut: false,
    specifications: {
      engineType: 'J08E-UG, 6 xy-lanh thẳng hàng',
      engineCapacity: '7684cc',
      horsePower: '280 mã lực tại 2500 vòng/phút',
      torque: '824 Nm tại 1500 vòng/phút',
      transmission: 'Số sàn 6 cấp',
      fuelConsumption: '14L/100km',
      emission: 'Euro 5',
      dimensions: '9.120 x 2.490 x 3.340 mm',
      wheelbase: '5.3 m',
      payload: '8.8 tấn',
      origin: 'Nhật Bản, lắp ráp tại Việt Nam',
      seats: '3 chỗ',
      warranty: '3 năm hoặc 200.000 km',
      year: '2024'
    },
    description: 'Hino 500 Series là dòng xe tải hạng trung với tải trọng 8.8 tấn, được thiết kế với độ bền cao và khả năng vận hành ổn định. Xe được trang bị động cơ J08E-UG mạnh mẽ, tiết kiệm nhiên liệu và đáp ứng tiêu chuẩn khí thải Euro 5. Hino 500 Series là lựa chọn lý tưởng cho các doanh nghiệp vận tải cỡ vừa và lớn.',
    features: [
      'Động cơ mạnh mẽ, bền bỉ',
      'Tiết kiệm nhiên liệu',
      'Cabin thoải mái, tiện nghi',
      'Hệ thống phanh ABS, ASR',
      'Khung gầm vững chắc',
      'Đa dạng lựa chọn thùng xe'
    ]
  },
  {
    id: '5',
    name: 'Dongfeng Hoàng Huy B180',
    slug: 'dongfeng-hoang-huy-b180',
    type: 'xe-tai',
    brand: 'Dongfeng',
    price: 600000000,
    priceText: '600.000.000 VNĐ',
    weight: 7.6,
    weightText: '7.6 tấn',
    length: 9.5,
    thumbnailUrl: 'https://tongkhoxetai.vn/assets/images/products/dongfeng-b180.jpg',
    images: [
      'https://tongkhoxetai.vn/assets/images/products/dongfeng-b180.jpg',
      'https://tongkhoxetai.vn/assets/images/products/dongfeng-b180-2.jpg'
    ],
    isNew: false,
    isHot: false,
    isSoldOut: false,
    specifications: {
      engineType: 'Cummins ISF3.8, 4 xy-lanh thẳng hàng',
      engineCapacity: '3760cc',
      horsePower: '180 mã lực tại 2600 vòng/phút',
      torque: '600 Nm tại 1300-1700 vòng/phút',
      transmission: 'Số sàn 6 cấp',
      fuelConsumption: '13L/100km',
      emission: 'Euro 5',
      dimensions: '9.500 x 2.500 x 3.000 mm',
      wheelbase: '6.0 m',
      payload: '7.6 tấn',
      origin: 'Trung Quốc',
      seats: '3 chỗ',
      warranty: '3 năm hoặc 150.000 km',
      year: '2024'
    },
    description: 'Dongfeng Hoàng Huy B180 là dòng xe tải hạng trung với tải trọng 7.6 tấn, được thiết kế với độ bền cao và khả năng vận hành ổn định. Xe được trang bị động cơ Cummins ISF3.8 mạnh mẽ, tiết kiệm nhiên liệu và đáp ứng tiêu chuẩn khí thải Euro 5. Dongfeng Hoàng Huy B180 là lựa chọn lý tưởng cho các doanh nghiệp vận tải cỡ vừa.',
    features: [
      'Động cơ Cummins bền bỉ',
      'Tiết kiệm nhiên liệu',
      'Cabin thoải mái, tiện nghi',
      'Khung gầm chắc chắn',
      'Hệ thống phanh an toàn',
      'Chi phí bảo dưỡng thấp'
    ]
  },
  {
    id: '6',
    name: 'XCMG QY25K5-I Truck Crane',
    slug: 'xcmg-qy25k5-i-truck-crane',
    type: 'xe-cau',
    brand: 'XCMG',
    price: 3500000000,
    priceText: 'Liên hệ',
    weight: 25,
    weightText: '25 tấn',
    length: 12.1,
    thumbnailUrl: 'https://tongkhoxetai.vn/assets/images/products/xcmg-qy25.jpg',
    images: [
      'https://tongkhoxetai.vn/assets/images/products/xcmg-qy25.jpg',
      'https://tongkhoxetai.vn/assets/images/products/xcmg-qy25-2.jpg'
    ],
    isNew: true,
    isHot: true,
    isSoldOut: false,
    specifications: {
      engineType: 'Cummins ISLe340 30, 6 xy-lanh thẳng hàng',
      engineCapacity: '8900cc',
      horsePower: '340 mã lực tại 2100 vòng/phút',
      torque: '1425 Nm tại 1300-1400 vòng/phút',
      transmission: 'Số sàn 9 cấp',
      fuelConsumption: '28L/100km',
      emission: 'Euro 5',
      dimensions: '12.100 x 2.550 x 3.650 mm',
      wheelbase: '6.955 m',
      payload: 'Cẩu 25 tấn',
      origin: 'Trung Quốc',
      seats: '2 chỗ',
      warranty: '2 năm hoặc 100.000 km',
      year: '2024'
    },
    description: 'XCMG QY25K5-I là xe cẩu tự hành có sức nâng 25 tấn, được thiết kế với công nghệ tiên tiến và khả năng vận hành ổn định. Xe được trang bị động cơ Cummins ISLe340 30 mạnh mẽ, tiết kiệm nhiên liệu và đáp ứng tiêu chuẩn khí thải Euro 5. XCMG QY25K5-I là lựa chọn lý tưởng cho các công trình xây dựng, lắp đặt thiết bị và cứu hộ.',
    features: [
      'Sức nâng tối đa 25 tấn',
      'Chiều dài cần tối đa 39.5m',
      'Hệ thống điều khiển thông minh',
      'Hệ thống giám sát tải trọng',
      'Cabin cẩu thoải mái, tiện nghi',
      'Hệ thống ổn định tự động'
    ]
  },
  {
    id: '7',
    name: 'Tadano GT-750EL Truck Crane',
    slug: 'tadano-gt-750el-truck-crane',
    type: 'xe-cau',
    brand: 'Tadano',
    price: 4800000000,
    priceText: 'Liên hệ',
    weight: 75,
    weightText: '75 tấn',
    length: 14.5,
    thumbnailUrl: 'https://tongkhoxetai.vn/assets/images/products/tadano-gt-750.jpg',
    images: [
      'https://tongkhoxetai.vn/assets/images/products/tadano-gt-750.jpg',
      'https://tongkhoxetai.vn/assets/images/products/tadano-gt-750-2.jpg'
    ],
    isNew: false,
    isHot: true,
    isSoldOut: false,
    specifications: {
      engineType: 'Mitsubishi 6M60-TL, 6 xy-lanh thẳng hàng',
      engineCapacity: '12882cc',
      horsePower: '420 mã lực tại 1800 vòng/phút',
      torque: '1990 Nm tại 1100-1300 vòng/phút',
      transmission: 'Số tự động 6 cấp',
      fuelConsumption: '35L/100km',
      emission: 'Euro 5',
      dimensions: '14.500 x 3.315 x 3.795 mm',
      wheelbase: '8.405 m',
      payload: 'Cẩu 75 tấn',
      origin: 'Nhật Bản',
      seats: '2 chỗ',
      warranty: '3 năm hoặc 100.000 km',
      year: '2024'
    },
    description: 'Tadano GT-750EL là xe cẩu tự hành có sức nâng 75 tấn, được thiết kế với công nghệ tiên tiến và khả năng vận hành ổn định. Xe được trang bị động cơ Mitsubishi 6M60-TL mạnh mẽ, tiết kiệm nhiên liệu và đáp ứng tiêu chuẩn khí thải Euro 5. Tadano GT-750EL là lựa chọn lý tưởng cho các công trình xây dựng lớn, lắp đặt thiết bị nặng và cứu hộ.',
    features: [
      'Sức nâng tối đa 75 tấn',
      'Chiều dài cần tối đa 44m',
      'Hệ thống điều khiển thông minh',
      'Hệ thống giám sát tải trọng',
      'Cabin cẩu thoải mái, tiện nghi',
      'Hệ thống ổn định tự động'
    ]
  },
  {
    id: '8',
    name: 'CIMC 3 Axle Flatbed Trailer',
    slug: 'cimc-3-axle-flatbed-trailer',
    type: 'mooc',
    brand: 'CIMC',
    price: 420000000,
    priceText: '420.000.000 VNĐ',
    weight: 32,
    weightText: '32 tấn',
    length: 12.4,
    thumbnailUrl: 'https://tongkhoxetai.vn/assets/images/products/cimc-flatbed.jpg',
    images: [
      'https://tongkhoxetai.vn/assets/images/products/cimc-flatbed.jpg',
      'https://tongkhoxetai.vn/assets/images/products/cimc-flatbed-2.jpg'
    ],
    isNew: false,
    isHot: false,
    isSoldOut: false,
    specifications: {
      dimensions: '12.400 x 2.500 x 1.580 mm',
      wheelbase: '7.7 m',
      payload: '32 tấn',
      origin: 'Trung Quốc',
      warranty: '2 năm',
      year: '2024'
    },
    description: 'CIMC 3 Axle Flatbed Trailer là sơ mi rơ mooc sàn phẳng 3 trục có tải trọng 32 tấn, được thiết kế với độ bền cao và khả năng vận hành ổn định. Sơ mi rơ mooc này là lựa chọn lý tưởng cho việc vận chuyển hàng hóa cồng kềnh, container và vật liệu xây dựng.',
    features: [
      'Khung gầm chắc chắn',
      'Tải trọng lớn',
      'Dễ dàng bốc xếp hàng hóa',
      'Tuổi thọ cao',
      'Chi phí bảo dưỡng thấp',
      'Linh hoạt trong việc vận chuyển nhiều loại hàng hóa'
    ]
  },
  {
    id: '9',
    name: 'Doosung 45ft Container Trailer',
    slug: 'doosung-45ft-container-trailer',
    type: 'mooc',
    brand: 'Doosung',
    price: 450000000,
    priceText: '450.000.000 VNĐ',
    weight: 35,
    weightText: '35 tấn',
    length: 13.7,
    thumbnailUrl: 'https://tongkhoxetai.vn/assets/images/products/doosung-container.jpg',
    images: [
      'https://tongkhoxetai.vn/assets/images/products/doosung-container.jpg',
      'https://tongkhoxetai.vn/assets/images/products/doosung-container-2.jpg'
    ],
    isNew: true,
    isHot: false,
    isSoldOut: false,
    specifications: {
      dimensions: '13.700 x 2.500 x 1.650 mm',
      wheelbase: '8.12 m',
      payload: '35 tấn',
      origin: 'Hàn Quốc',
      warranty: '3 năm',
      year: '2024'
    },
    description: 'Doosung 45ft Container Trailer là sơ mi rơ mooc chở container 3 trục có tải trọng 35 tấn, được thiết kế với độ bền cao và khả năng vận hành ổn định. Sơ mi rơ mooc này là lựa chọn lý tưởng cho việc vận chuyển container 20ft, 40ft và 45ft.',
    features: [
      'Khung gầm chắc chắn',
      'Tải trọng lớn',
      'Thiết kế chuyên dụng cho container',
      'Tuổi thọ cao',
      'Chi phí bảo dưỡng thấp',
      'Dễ dàng kết nối với đầu kéo'
    ]
  },
  {
    id: '10',
    name: 'FAW J6P Tractor Truck',
    slug: 'faw-j6p-tractor-truck',
    type: 'dau-keo',
    brand: 'FAW',
    price: 1050000000,
    priceText: '1.050.000.000 VNĐ',
    weight: 40,
    weightText: '40 tấn',
    length: 6.8,
    thumbnailUrl: 'https://tongkhoxetai.vn/assets/images/products/faw-j6p.jpg',
    images: [
      'https://tongkhoxetai.vn/assets/images/products/faw-j6p.jpg',
      'https://tongkhoxetai.vn/assets/images/products/faw-j6p-2.jpg'
    ],
    isNew: false,
    isHot: true,
    isSoldOut: false,
    specifications: {
      engineType: 'Weichai WP12.430, 6 xy-lanh thẳng hàng',
      engineCapacity: '11596cc',
      horsePower: '430 mã lực tại 1900 vòng/phút',
      torque: '1750 Nm tại 1200-1400 vòng/phút',
      transmission: 'Số sàn 12 cấp',
      fuelConsumption: '30L/100km',
      emission: 'Euro 5',
      dimensions: '6.800 x 2.490 x 3.720 mm',
      wheelbase: '3.9 m',
      payload: '40 tấn',
      origin: 'Trung Quốc',
      seats: '2 chỗ',
      warranty: '3 năm hoặc 200.000 km',
      year: '2024'
    },
    description: 'FAW J6P là xe đầu kéo có tải trọng kéo 40 tấn, được thiết kế với độ bền cao và khả năng vận hành ổn định. Xe được trang bị động cơ Weichai WP12.430 mạnh mẽ, tiết kiệm nhiên liệu và đáp ứng tiêu chuẩn khí thải Euro 5. FAW J6P là lựa chọn lý tưởng cho các doanh nghiệp vận tải container và hàng hóa nặng.',
    features: [
      'Động cơ mạnh mẽ, bền bỉ',
      'Tiết kiệm nhiên liệu',
      'Cabin thoải mái, tiện nghi',
      'Hệ thống phanh ABS, ASR',
      'Khung gầm vững chắc',
      'Chi phí bảo dưỡng thấp'
    ]
  },
  {
    id: '11',
    name: 'Howo 2 Chân 4x2',
    slug: 'howo-2-chan-4x2',
    type: 'dau-keo',
    brand: 'Howo',
    price: 950000000,
    priceText: '950.000.000 VNĐ',
    weight: 35,
    weightText: '35 tấn',
    length: 6.2,
    thumbnailUrl: 'https://tongkhoxetai.vn/assets/images/products/howo-4x2.jpg',
    images: [
      'https://tongkhoxetai.vn/assets/images/products/howo-4x2.jpg',
      'https://tongkhoxetai.vn/assets/images/products/howo-4x2-2.jpg'
    ],
    isNew: true,
    isHot: false,
    isSoldOut: false,
    specifications: {
      engineType: 'Sinotruk WD615, 6 xy-lanh thẳng hàng',
      engineCapacity: '9726cc',
      horsePower: '380 mã lực tại 2200 vòng/phút',
      torque: '1460 Nm tại 1100-1600 vòng/phút',
      transmission: 'Số sàn 10 cấp',
      fuelConsumption: '28L/100km',
      emission: 'Euro 4',
      dimensions: '6.200 x 2.495 x 3.650 mm',
      wheelbase: '3.5 m',
      payload: '35 tấn',
      origin: 'Trung Quốc',
      seats: '2 chỗ',
      warranty: '2 năm hoặc 150.000 km',
      year: '2024'
    },
    description: 'Howo 2 Chân 4x2 là xe đầu kéo có tải trọng kéo 35 tấn, được thiết kế với độ bền cao và khả năng vận hành ổn định. Xe được trang bị động cơ Sinotruk WD615 mạnh mẽ, tiết kiệm nhiên liệu và đáp ứng tiêu chuẩn khí thải Euro 4. Howo 2 Chân 4x2 là lựa chọn lý tưởng cho các doanh nghiệp vận tải container và hàng hóa nặng.',
    features: [
      'Động cơ mạnh mẽ, bền bỉ',
      'Tiết kiệm nhiên liệu',
      'Cabin thoải mái, tiện nghi',
      'Hệ thống phanh ABS, ASR',
      'Khung gầm vững chắc',
      'Chi phí bảo dưỡng thấp'
    ]
  },
  {
    id: '12',
    name: 'Dongfeng 3 Chân 6x4',
    slug: 'dongfeng-3-chan-6x4',
    type: 'dau-keo',
    brand: 'Dongfeng',
    price: 1150000000,
    priceText: '1.150.000.000 VNĐ',
    weight: 45,
    weightText: '45 tấn',
    length: 7.0,
    thumbnailUrl: 'https://tongkhoxetai.vn/assets/images/products/dongfeng-6x4.jpg',
    images: [
      'https://tongkhoxetai.vn/assets/images/products/dongfeng-6x4.jpg',
      'https://tongkhoxetai.vn/assets/images/products/dongfeng-6x4-2.jpg'
    ],
    isNew: false,
    isHot: true,
    isSoldOut: false,
    specifications: {
      engineType: 'Cummins ISLe400 40, 6 xy-lanh thẳng hàng',
      engineCapacity: '10800cc',
      horsePower: '400 mã lực tại 1900 vòng/phút',
      torque: '1850 Nm tại 1100-1300 vòng/phút',
      transmission: 'Số sàn 12 cấp',
      fuelConsumption: '32L/100km',
      emission: 'Euro 5',
      dimensions: '7.000 x 2.500 x 3.750 mm',
      wheelbase: '4.1 m',
      payload: '45 tấn',
      origin: 'Trung Quốc',
      seats: '2 chỗ',
      warranty: '3 năm hoặc 200.000 km',
      year: '2024'
    },
    description: 'Dongfeng 3 Chân 6x4 là xe đầu kéo có tải trọng kéo 45 tấn, được thiết kế với độ bền cao và khả năng vận hành ổn định. Xe được trang bị động cơ Cummins ISLe400 40 mạnh mẽ, tiết kiệm nhiên liệu và đáp ứng tiêu chuẩn khí thải Euro 5. Dongfeng 3 Chân 6x4 là lựa chọn lý tưởng cho các doanh nghiệp vận tải container và hàng hóa siêu nặng.',
    features: [
      'Động cơ Cummins mạnh mẽ, bền bỉ',
      'Tiết kiệm nhiên liệu',
      'Cabin thoải mái, tiện nghi',
      'Hệ thống phanh ABS, ASR',
      'Khung gầm vững chắc',
      'Chi phí bảo dưỡng thấp'
    ]
  }
];

// Các tin tức, thông báo
export const notifications = [
  {
    id: 'n1',
    customerName: 'Nguyễn Văn A',
    phone: '09x.xxx.xxx',
    productId: '1',
    timestamp: Date.now() - 2 * 60 * 60 * 1000, // 2 giờ trước
  },
  {
    id: 'n2',
    customerName: 'Trần Thị B',
    phone: '08x.xxx.xxx',
    productId: '4',
    timestamp: Date.now() - 38 * 60 * 1000, // 38 phút trước
  },
  {
    id: 'n3',
    customerName: 'Lê Văn C',
    phone: '07x.xxx.xxx',
    productId: '6',
    timestamp: Date.now() - 12 * 60 * 1000, // 12 phút trước
  },
  {
    id: 'n4',
    customerName: 'Phạm Thị D',
    phone: '03x.xxx.xxx',
    productId: '10',
    timestamp: Date.now() - 4 * 60 * 1000, // 4 phút trước
  },
];

export const getProductNameById = (id: string): string => {
  const product = trucks.find(truck => truck.id === id);
  return product ? product.name : 'Sản phẩm không xác định';
};

// Lọc xe tải theo bộ lọc
export const filterTrucks = (filters: any) => {
  return trucks.filter(truck => {
    // Lọc theo loại xe
    if (filters.vehicleType && truck.type !== filters.vehicleType) {
      return false;
    }

    // Lọc theo thương hiệu
    if (filters.brand && truck.brand !== filters.brand) {
      return false;
    }

    // Lọc theo khoảng giá
    if (filters.minPrice !== null && filters.minPrice !== undefined && truck.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice !== null && filters.maxPrice !== undefined && truck.price > filters.maxPrice) {
      return false;
    }

    // Lọc theo khoảng tải trọng
    if (filters.minWeight !== null && filters.minWeight !== undefined && truck.weight < filters.minWeight) {
      return false;
    }
    if (filters.maxWeight !== null && filters.maxWeight !== undefined && truck.weight > filters.maxWeight) {
      return false;
    }

    // Lọc theo từ khóa tìm kiếm
    if (filters.search && !truck.name.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }

    // Lọc theo tham số weight từ URL
    if (filters.weight) {
      const weightRange = filters.weight.split('-');
      const minWeight = parseFloat(weightRange[0]);
      const maxWeight = weightRange.length > 1 ? parseFloat(weightRange[1]) : 100;

      // Nếu là "20+", xử lý đặc biệt
      if (filters.weight === '20+' && truck.weight < 20) {
        return false;
      }
      // Ngược lại, kiểm tra trong khoảng
      else if (filters.weight !== '20+' && (truck.weight < minWeight || truck.weight > maxWeight)) {
        return false;
      }
    }

    return true;
  });
};
