
import { Truck, TruckBrand, TruckWeight } from '../models/TruckTypes';

// Danh sách các thương hiệu xe tải
export const truckBrands: TruckBrand[] = [
  { id: 'hyundai', name: 'Hyundai' },
  { id: 'thaco', name: 'Thaco' },
  { id: 'isuzu', name: 'Isuzu' },
  { id: 'hino', name: 'Hino' },
  { id: 'dongfeng', name: 'Dongfeng' },
  { id: 'faw', name: 'FAW' },
  { id: 'jac', name: 'JAC' },
  { id: 'suzuki', name: 'Suzuki' },
];

// Danh sách các mức tải trọng
export const truckWeights: TruckWeight[] = [
  { 
    id: 'under-1', 
    name: 'Dưới 1 tấn',
    value: '0-1',
    minWeight: 0,
    maxWeight: 1
  },
  { 
    id: '1-2', 
    name: '1 - 2 tấn',
    value: '1-2',
    minWeight: 1,
    maxWeight: 2
  },
  { 
    id: '2-3.5', 
    name: '2 - 3.5 tấn',
    value: '2-3.5',
    minWeight: 2,
    maxWeight: 3.5
  },
  { 
    id: '3.5-5', 
    name: '3.5 - 5 tấn',
    value: '3.5-5',
    minWeight: 3.5,
    maxWeight: 5
  },
  { 
    id: '5-8', 
    name: '5 - 8 tấn',
    value: '5-8',
    minWeight: 5,
    maxWeight: 8
  },
  { 
    id: '8-15', 
    name: '8 - 15 tấn',
    value: '8-15',
    minWeight: 8,
    maxWeight: 15
  },
  { 
    id: '15-20', 
    name: '15 - 20 tấn',
    value: '15-20',
    minWeight: 15,
    maxWeight: 20
  },
  { 
    id: 'over-20', 
    name: 'Trên 20 tấn',
    value: '20-100', // Thay đổi từ '20-100' để tương thích với giá trị MAX_WEIGHT mới
    minWeight: 20,
    maxWeight: 100 // Thay đổi từ 100
  },
];

// Danh sách xe tải mẫu
export const trucks: Truck[] = [
  // Xe tải Hyundai
  {
    id: 'ht1',
    name: 'Hyundai Porter H150 1.5 Tấn',
    slug: 'hyundai-porter-h150',
    brand: 'Hyundai',
    type: 'xe-tai',
    price: 410000000,
    priceText: '410.000.000 ₫',
    weight: 1.5,
    weightText: '1.5 Tấn',
    length: 3.6,
    width: 1.65,
    height: 2.0,
    isNew: true,
    isHot: true,
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/hyundai/h150/exterior/hyundai-porter-h150.png',
    images: [
      'https://tongkhoxetai.vn/upload/images/hyundai/h150/exterior/hyundai-porter-h150.png',
      'https://tongkhoxetai.vn/upload/images/hyundai/h150/exterior/hyundai-porter-h150-than-xe.png',
      'https://tongkhoxetai.vn/upload/images/hyundai/h150/interior/hyundai-h150-noi-that.png'
    ],
    description: 'Xe tải Hyundai Porter H150 1.5 tấn là dòng xe tải nhẹ đô thị được nhập khẩu chính hãng bởi Hyundai Thành Công. Xe được trang bị động cơ Kappa 1.5L, mạnh mẽ và tiết kiệm nhiên liệu, đáp ứng tiêu chuẩn khí thải Euro 4.',
    specifications: {
      engineType: 'Kappa 1.5L',
      engineCapacity: '1.5L',
      horsePower: '130 hp',
      torque: '170 Nm',
      transmission: 'Số sàn 6 cấp',
      fuelConsumption: '7.5L/100km',
      emission: 'Euro 4',
      warranty: '3 năm hoặc 100.000 km',
      origin: 'Nhập khẩu CKD',
      seats: '3',
      year: '2023'
    }
  },
  // Xe tải Thaco
  {
    id: 'tt1',
    name: 'Thaco Kia K200 1.9 Tấn',
    slug: 'thaco-kia-k200',
    brand: 'Thaco',
    type: 'xe-tai',
    price: 335000000,
    priceText: '335.000.000 ₫',
    weight: 1.9,
    weightText: '1.9 Tấn',
    length: 3.8,
    isNew: false,
    isHot: true,
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/kia/k200/xe-tai-kia-k200.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/kia/k200/xe-tai-kia-k200.jpg',
      'https://tongkhoxetai.vn/upload/images/kia/k200/noi-that-xe-tai-kia-k200.jpg'
    ],
    description: 'Xe tải Thaco Kia K200 là dòng xe tải nhẹ được sản xuất và lắp ráp tại Việt Nam với thiết kế nhỏ gọn, thích hợp vận chuyển trong đô thị. Xe được trang bị động cơ JT4, tiết kiệm nhiên liệu và đạt tiêu chuẩn khí thải Euro 4.',
    specifications: {
      engineType: 'JT4',
      engineCapacity: '2.0L',
      horsePower: '139 hp',
      torque: '285 Nm',
      transmission: 'Số sàn 6 cấp',
      fuelConsumption: '8.0L/100km',
      emission: 'Euro 4',
      warranty: '3 năm hoặc 100.000 km',
      origin: 'Lắp ráp trong nước',
      seats: '3',
      year: '2023'
    }
  },
  // Xe tải Isuzu
  {
    id: 'iz1',
    name: 'Isuzu QKR 2.9 Tấn',
    slug: 'isuzu-qkr-2-9-tan',
    brand: 'Isuzu',
    type: 'xe-tai',
    price: 465000000,
    priceText: '465.000.000 ₫',
    weight: 2.9,
    weightText: '2.9 Tấn',
    length: 4.4,
    width: 1.8,
    height: 2.2,
    isNew: false,
    isHot: false,
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/isuzu/qkr-2-9-tan/xe-tai-isuzu-qkr-2-9-tan.png',
    images: [
      'https://tongkhoxetai.vn/upload/images/isuzu/qkr-2-9-tan/xe-tai-isuzu-qkr-2-9-tan.png',
      'https://tongkhoxetai.vn/upload/images/isuzu/qkr-2-9-tan/isuzu-qkr-cabin.png',
      'https://tongkhoxetai.vn/upload/images/isuzu/qkr-2-9-tan/isuzu-qkr-dongco.png'
    ],
    description: 'Xe tải Isuzu QKR 2.9 tấn là dòng xe tải nhỏ được nhập khẩu linh kiện và lắp ráp bởi Isuzu Việt Nam. Xe được trang bị động cơ 4JH1-E2N, mạnh mẽ, bền bỉ và tiết kiệm nhiên liệu, đáp ứng tiêu chuẩn khí thải Euro 4.',
    specifications: {
      engineType: '4JH1-E2N',
      engineCapacity: '2.8L',
      horsePower: '125 hp',
      torque: '320 Nm',
      transmission: 'Số sàn 5 cấp',
      fuelConsumption: '7.8L/100km',
      emission: 'Euro 4',
      warranty: '3 năm không giới hạn km',
      origin: 'Nhập khẩu linh kiện',
      seats: '3',
      year: '2023'
    }
  },
  // Xe cẩu Hino
  {
    id: 'hc1',
    name: 'Xe cẩu Hino 500 FC gắn cẩu Tadano 5 tấn',
    slug: 'hino-500-fc-gan-cau-tadano-5-tan',
    brand: 'Hino',
    type: 'xe-cau',
    price: 1850000000,
    priceText: '1.850.000.000 ₫',
    weight: 10,
    weightText: '10 Tấn',
    length: 6.5,
    isNew: true,
    isHot: true,
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/xe-cau-hino-fc-5-tan.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/xe-cau-hino-fc-5-tan.jpg',
      'https://tongkhoxetai.vn/upload/images/cau-tadano-5-tan.jpg'
    ],
    description: 'Xe cẩu Hino 500 FC gắn cẩu Tadano 5 tấn là sự kết hợp hoàn hảo giữa chassis Hino 500 FC và cẩu Tadano model TM-ZT504 nhập khẩu từ Nhật Bản. Cẩu có sức nâng tối đa 5 tấn ở độ vươn 2.5m và vươn xa đến 12m với sức nâng 0.5 tấn.',
    specifications: {
      engineType: 'J05E-TP',
      engineCapacity: '5.0L',
      horsePower: '210 hp',
      torque: '470 Nm',
      transmission: 'Số sàn 6 cấp',
      craneBrand: 'Tadano',
      craneModel: 'TM-ZT504',
      craneCapacity: '5 tấn',
      craneReach: '12 mét',
      warranty: '2 năm hoặc 100.000 km',
      origin: 'Nhật Bản',
      year: '2023'
    }
  },
  // Sơ mi rơ mooc
  {
    id: 'sm1',
    name: 'Sơ mi rơ mooc Doosung 40 feet',
    slug: 'so-mi-ro-mooc-doosung-40-feet',
    brand: 'Doosung',
    type: 'mooc',
    price: 525000000,
    priceText: '525.000.000 ₫',
    weight: 40,
    weightText: '40 Tấn',
    length: 12.4,
    isNew: true,
    isHot: false,
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/ro-mooc-doosung-40-feet.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/ro-mooc-doosung-40-feet.jpg',
      'https://tongkhoxetai.vn/upload/images/ro-mooc-doosung-chi-tiet.jpg'
    ],
    description: 'Sơ mi rơ mooc Doosung 40 feet là dòng sản phẩm sơ mi rơ mooc container cao cấp đến từ Hàn Quốc. Được thiết kế chắc chắn với khung gầm cứng cáp, sàn chịu lực tốt, phù hợp vận chuyển container 40 feet hoặc 2 container 20 feet.',
    specifications: {
      khungGam: 'Thép hợp kim cường độ cao',
      kichThuoc: '12.4m x 2.5m x 1.5m',
      taiTrong: '40 tấn',
      truc: '3 trục SAF/BPW nhập khẩu',
      lopXe: '12 lốp 12R22.5',
      banhXe: 'Đúc',
      heTruyen: 'Hệ thống hơi GiCOM',
      xuatXu: 'Hàn Quốc',
      baoHanh: '12 tháng',
      year: '2023'
    }
  },
  // Xe đầu kéo
  {
    id: 'dk1',
    name: 'Xe đầu kéo Dongfeng 2 cầu 420HP',
    slug: 'xe-dau-keo-dongfeng-2-cau-420hp',
    brand: 'Dongfeng',
    type: 'dau-keo',
    price: 1285000000,
    priceText: '1.285.000.000 ₫',
    weight: 42,
    weightText: '42 Tấn',
    length: 6.2,
    isNew: true,
    isHot: true,
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/xe-dau-keo-dongfeng-2-cau.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/xe-dau-keo-dongfeng-2-cau.jpg',
      'https://tongkhoxetai.vn/upload/images/xe-dau-keo-dongfeng-noi-that.jpg'
    ],
    description: 'Xe đầu kéo Dongfeng 2 cầu 420HP là dòng xe đầu kéo cao cấp với động cơ Cummins công suất 420HP, mạnh mẽ và tiết kiệm nhiên liệu. Xe được thiết kế với 2 cầu sau chắc chắn, phù hợp vận chuyển hàng siêu trường siêu trọng trên các địa hình khó.',
    specifications: {
      engineType: 'Cummins ISZ',
      engineCapacity: '13L',
      horsePower: '420 hp',
      torque: '1850 Nm',
      transmission: 'Fast 16 số',
      axles: '2 cầu sau',
      cabin: 'Cabin có giường nằm',
      maxWeight: '42 tấn',
      fuelConsumption: '34L/100km',
      warranty: '2 năm hoặc 100.000 km',
      origin: 'Trung Quốc',
      year: '2023'
    }
  },
  // Thêm các mẫu xe khác với các tải trọng đa dạng
  {
    id: 'ht2',
    name: 'Hyundai Mighty EX8 GTL 8 Tấn',
    slug: 'hyundai-mighty-ex8-gtl',
    brand: 'Hyundai',
    type: 'xe-tai',
    price: 750000000,
    priceText: '750.000.000 ₫',
    weight: 8,
    weightText: '8 Tấn',
    length: 6.8,
    isNew: false,
    isHot: true,
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/hyundai-ex8-gtl.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/hyundai-ex8-gtl.jpg',
      'https://tongkhoxetai.vn/upload/images/hyundai-ex8-gtl-noi-that.jpg'
    ],
    description: 'Hyundai Mighty EX8 GTL là dòng xe tải 8 tấn cao cấp đến từ Hyundai. Xe được trang bị động cơ D4DD mạnh mẽ, cabin rộng rãi, tiện nghi như xe du lịch, màn hình giải trí đa chức năng, camera lùi...',
    specifications: {
      engineType: 'D4DD',
      engineCapacity: '4.0L',
      horsePower: '160 hp',
      torque: '500 Nm',
      transmission: 'Số sàn 6 cấp',
      fuelConsumption: '12L/100km',
      emission: 'Euro 5',
      warranty: '3 năm không giới hạn km',
      origin: 'Lắp ráp trong nước',
      seats: '3',
      year: '2023'
    }
  },
  {
    id: 'hv1',
    name: 'Hino FG 15 Tấn 3 Chân',
    slug: 'hino-fg-15-tan-3-chan',
    brand: 'Hino',
    type: 'xe-tai',
    price: 1180000000,
    priceText: '1.180.000.000 ₫',
    weight: 15,
    weightText: '15 Tấn',
    length: 9.2,
    width: 2.5,
    height: 3.3,
    isNew: false,
    isHot: false,
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/hino-fg-15-tan.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/hino-fg-15-tan.jpg',
      'https://tongkhoxetai.vn/upload/images/hino-fg-cabin.jpg'
    ],
    description: 'Xe tải Hino FG 15 tấn 3 chân là dòng xe tải hạng trung được nhập khẩu linh kiện và lắp ráp bởi Hino Motors Việt Nam. Xe được trang bị động cơ J08E mạnh mẽ, bền bỉ và tiết kiệm nhiên liệu, đáp ứng tiêu chuẩn khí thải Euro 4.',
    specifications: {
      engineType: 'J08E',
      engineCapacity: '8.0L',
      horsePower: '280 hp',
      torque: '850 Nm',
      transmission: 'Số sàn 7 cấp',
      fuelConsumption: '15L/100km',
      emission: 'Euro 4',
      warranty: '2 năm hoặc 100.000 km',
      origin: 'Nhập khẩu linh kiện',
      seats: '3',
      year: '2023'
    }
  },
  {
    id: 'dfs1',
    name: 'Dongfeng Hoang Huy B180 9.15 Tấn',
    slug: 'dongfeng-hoang-huy-b180',
    brand: 'Dongfeng',
    type: 'xe-tai',
    price: 685000000,
    priceText: '685.000.000 ₫',
    weight: 9.15,
    weightText: '9.15 Tấn',
    length: 7.5,
    isNew: true,
    isHot: false,
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/dongfeng-b180.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/dongfeng-b180.jpg',
      'https://tongkhoxetai.vn/upload/images/dongfeng-b180-noi-that.jpg'
    ],
    description: 'Xe tải Dongfeng Hoang Huy B180 9.15 tấn là dòng xe tải trung được nhập khẩu từ Trung Quốc. Xe được trang bị động cơ Cummins ISF mạnh mẽ và tiết kiệm nhiên liệu, đáp ứng tiêu chuẩn khí thải Euro 5.',
    specifications: {
      engineType: 'Cummins ISF',
      engineCapacity: '3.8L',
      horsePower: '180 hp',
      torque: '600 Nm',
      transmission: 'Số sàn 6 cấp',
      fuelConsumption: '13L/100km',
      emission: 'Euro 5',
      warranty: '3 năm hoặc 100.000 km',
      origin: 'Trung Quốc',
      seats: '3',
      year: '2023'
    }
  },
  {
    id: 'sz1',
    name: 'Suzuki Super Carry Pro 940kg',
    slug: 'suzuki-super-carry-pro',
    brand: 'Suzuki',
    type: 'xe-tai',
    price: 334000000,
    priceText: '334.000.000 ₫',
    weight: 0.94,
    weightText: '940kg',
    length: 3.2,
    isNew: false,
    isHot: true,
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/suzuki-super-carry-pro.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/suzuki-super-carry-pro.jpg',
      'https://tongkhoxetai.vn/upload/images/suzuki-super-carry-pro-noi-that.jpg'
    ],
    description: 'Suzuki Super Carry Pro là dòng xe tải nhẹ được nhập khẩu từ Indonesia. Xe có kích thước nhỏ gọn, linh hoạt, phù hợp vận chuyển trong đô thị và khu vực hẹp. Xe được trang bị động cơ xăng 1.2L, tiết kiệm nhiên liệu.',
    specifications: {
      engineType: 'K12B',
      engineCapacity: '1.2L',
      horsePower: '82 hp',
      torque: '113 Nm',
      transmission: 'Số sàn 5 cấp',
      fuelConsumption: '6.5L/100km',
      emission: 'Euro 4',
      warranty: '3 năm hoặc 100.000 km',
      origin: 'Indonesia',
      seats: '2',
      year: '2023'
    }
  },
  {
    id: 'faw1',
    name: 'FAW Tiger V 7.25 Tấn',
    slug: 'faw-tiger-v-7-25-tan',
    brand: 'FAW',
    type: 'xe-tai',
    price: 635000000,
    priceText: '635.000.000 ₫',
    weight: 7.25,
    weightText: '7.25 Tấn',
    length: 6.8,
    isNew: true,
    isHot: false,
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/faw-tiger-v.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/faw-tiger-v.jpg',
      'https://tongkhoxetai.vn/upload/images/faw-tiger-v-noi-that.jpg'
    ],
    description: 'FAW Tiger V 7.25 tấn là dòng xe tải trung được nhập khẩu từ Trung Quốc. Xe được trang bị động cơ Weichai mạnh mẽ và tiết kiệm nhiên liệu, đáp ứng tiêu chuẩn khí thải Euro 5.',
    specifications: {
      engineType: 'Weichai WP5',
      engineCapacity: '5.0L',
      horsePower: '180 hp',
      torque: '650 Nm',
      transmission: 'Số sàn 6 cấp',
      fuelConsumption: '12L/100km',
      emission: 'Euro 5',
      warranty: '2 năm hoặc 100.000 km',
      origin: 'Trung Quốc',
      seats: '3',
      year: '2023'
    }
  },
  {
    id: 'jac1',
    name: 'JAC N700 6.9 Tấn',
    slug: 'jac-n700-6-9-tan',
    brand: 'JAC',
    type: 'xe-tai',
    price: 580000000,
    priceText: '580.000.000 ₫',
    weight: 6.9,
    weightText: '6.9 Tấn',
    length: 6.7,
    isNew: true,
    isHot: false,
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/jac-n700.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/jac-n700.jpg',
      'https://tongkhoxetai.vn/upload/images/jac-n700-noi-that.jpg'
    ],
    description: 'JAC N700 6.9 tấn là dòng xe tải trung được nhập khẩu từ Trung Quốc. Xe được trang bị động cơ Cummins mạnh mẽ và tiết kiệm nhiên liệu, đáp ứng tiêu chuẩn khí thải Euro 5.',
    specifications: {
      engineType: 'Cummins ISF3.8',
      engineCapacity: '3.8L',
      horsePower: '160 hp',
      torque: '600 Nm',
      transmission: 'Số sàn 6 cấp',
      fuelConsumption: '11.5L/100km',
      emission: 'Euro 5',
      warranty: '3 năm hoặc 100.000 km',
      origin: 'Trung Quốc',
      seats: '3',
      year: '2023'
    }
  },
  {
    id: 'iz2',
    name: 'Isuzu FVR 900 15 Tấn',
    slug: 'isuzu-fvr-900-15-tan',
    brand: 'Isuzu',
    type: 'xe-tai',
    price: 1250000000,
    priceText: '1.250.000.000 ₫',
    weight: 15,
    weightText: '15 Tấn',
    length: 9.5,
    isNew: false,
    isHot: false,
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/isuzu-fvr-900.jpg',
    images: [
      'https://tongkhoxetai.vn/upload/images/isuzu-fvr-900.jpg',
      'https://tongkhoxetai.vn/upload/images/isuzu-fvr-900-noi-that.jpg'
    ],
    description: 'Isuzu FVR 900 15 tấn là dòng xe tải hạng trung được nhập khẩu linh kiện và lắp ráp bởi Isuzu Việt Nam. Xe được trang bị động cơ 6HK1-TCC mạnh mẽ, bền bỉ và tiết kiệm nhiên liệu, đáp ứng tiêu chuẩn khí thải Euro 4.',
    specifications: {
      engineType: '6HK1-TCC',
      engineCapacity: '7.8L',
      horsePower: '280 hp',
      torque: '882 Nm',
      transmission: 'Số sàn 6 cấp',
      fuelConsumption: '16L/100km',
      emission: 'Euro 4',
      warranty: '3 năm không giới hạn km',
      origin: 'Nhập khẩu linh kiện',
      seats: '3',
      year: '2023'
    }
  }
];

// Hàm lấy thông tin thông báo mua hàng giả lập
export const notifications = [
  {
    customerName: "Nguyễn Văn A",
    phone: "098****123",
    productId: "ht1",
    timestamp: Date.now() - 5 * 60 * 1000 // 5 phút trước
  },
  {
    customerName: "Trần Văn B",
    phone: "091****456",
    productId: "tt1",
    timestamp: Date.now() - 15 * 60 * 1000 // 15 phút trước
  },
  {
    customerName: "Lê Thị C",
    phone: "097****789",
    productId: "dk1",
    timestamp: Date.now() - 30 * 60 * 1000 // 30 phút trước
  },
  {
    customerName: "Phạm Văn D",
    phone: "090****234",
    productId: "sm1",
    timestamp: Date.now() - 2 * 60 * 60 * 1000 // 2 giờ trước
  }
];

export const getProductNameById = (productId: string): string => {
  const product = trucks.find(truck => truck.id === productId);
  return product ? product.name : "Sản phẩm";
};
