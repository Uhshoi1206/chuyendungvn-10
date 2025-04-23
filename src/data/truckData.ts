import { Truck, TruckWeight, TruckBrand } from '../models/TruckTypes';

export const truckWeights: TruckWeight[] = [
  { id: 'w1', name: 'Dưới 1 tấn', value: 1 },
  { id: 'w2', name: '1 - 2 tấn', value: 2 },
  { id: 'w3', name: '2 - 3.5 tấn', value: 3.5 },
  { id: 'w4', name: '3.5 - 5 tấn', value: 5 },
  { id: 'w5', name: '5 - 8 tấn', value: 8 },
  { id: 'w6', name: '8 - 15 tấn', value: 15 },
  { id: 'w7', name: 'Trên 15 tấn', value: 20 },
];

export const truckBrands: TruckBrand[] = [
  { id: 'b1', name: 'Thaco' },
  { id: 'b2', name: 'Hyundai' },
  { id: 'b3', name: 'Hino' },
  { id: 'b4', name: 'Isuzu' },
  { id: 'b5', name: 'Dongfeng' },
  { id: 'b6', name: 'JAC' },
  { id: 'b7', name: 'Mitsubishi' },
];

export const trucks: Truck[] = [
  {
    id: 't1',
    name: 'Hyundai New Porter H150',
    slug: 'hyundai-new-porter-h150',
    brand: 'Hyundai',
    price: 410000000,
    priceText: '410.000.000 VNĐ',
    weight: 1.5,
    weightText: '1.5 tấn',
    length: 3.2,
    engine: 'Hyundai D4CB, Diesel 2.5L, 130HP',
    fuelType: 'Dầu Diesel',
    features: ['Động cơ tiết kiệm nhiên liệu', 'Khung gầm chắc chắn', 'Hệ thống phanh ABS'],
    description: 'Hyundai New Porter H150 - dòng xe tải nhẹ phổ biến với khả năng vận hành linh hoạt trong đô thị, tải trọng 1.5 tấn, phù hợp giao hàng nội thành.',
    images: [
      'https://tongkhoxetai.vn/upload/images/hyundai-new-porter-h150.jpg',
      'https://tongkhoxetai.vn/upload/images/xe-tai-hyundai-new-porter-h150-gia-bao-nhieu.jpg'
    ],
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/hyundai-new-porter-h150.jpg',
    isHot: true,
    isNew: false,
    type: 'truck'
  },
  {
    id: 't2',
    name: 'Thaco Ollin 350.E4',
    slug: 'thaco-ollin-350-e4',
    brand: 'Thaco',
    price: 364000000,
    priceText: '364.000.000 VNĐ',
    weight: 3.5,
    weightText: '3.5 tấn',
    length: 4.7,
    engine: 'Diesel YN33CRD1, 3.0L, 125HP',
    fuelType: 'Dầu Diesel',
    features: ['Tiết kiệm nhiên liệu', 'Thùng dài linh hoạt', 'Cabin rộng rãi'],
    description: 'Thaco Ollin 350.E4 là dòng xe tải trung với tải trọng 3.5 tấn, được trang bị động cơ diesel mạnh mẽ, tiết kiệm nhiên liệu, phù hợp với các đường nội đô và liên tỉnh.',
    images: [
      'https://tongkhoxetai.vn/upload/images/thaco-ollin-350-e4.jpg',
      'https://tongkhoxetai.vn/upload/images/thaco-ollin-350-e4-moi.jpg'
    ],
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/thaco-ollin-350-e4.jpg',
    isHot: true,
    isNew: true,
    type: 'truck'
  },
  {
    id: 't3',
    name: 'Isuzu QKR 270',
    slug: 'isuzu-qkr-270',
    brand: 'Isuzu',
    price: 472000000,
    priceText: '472.000.000 VNĐ',
    weight: 2.7,
    weightText: '2.7 tấn',
    length: 4.4,
    engine: 'Isuzu 4JB1, 2.8L, 90HP',
    fuelType: 'Dầu Diesel',
    features: ['Độ bền cao', 'Vận hành ổn định', 'Chi phí bảo trì thấp'],
    description: 'Isuzu QKR 270 là dòng xe tải nhẹ với tải trọng 2.7 tấn, được đánh giá cao về độ bền và tiết kiệm nhiên liệu. Phù hợp với các doanh nghiệp vận tải nhỏ và vừa.',
    images: [
      'https://tongkhoxetai.vn/upload/images/isuzu-qkr-270.jpg',
      'https://tongkhoxetai.vn/upload/images/xe-tai-isuzu-qkr-270-thung-kin.jpg'
    ],
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/isuzu-qkr-270.jpg',
    isHot: false,
    isNew: true,
    type: 'truck'
  },
  {
    id: 'tr1',
    name: 'Sơ mi rơ mooc Doosung 3 trục',
    slug: 'so-mi-ro-mooc-doosung-3-truc',
    brand: 'Doosung',
    price: 350000000,
    priceText: '350.000.000 VNĐ',
    weight: 30,
    weightText: '30 tấn',
    length: 12.4,
    engine: 'N/A',
    fuelType: 'N/A',
    features: ['Thùng lửng', '3 trục', 'Tải trọng cao'],
    description: 'Sơ mi rơ mooc Doosung 3 trục với thiết kế chắc chắn, tải trọng lớn, phù hợp vận chuyển container và hàng hóa nặng.',
    images: [
      'https://tongkhoxetai.vn/upload/images/so-mi-ro-mooc-doosung.jpg'
    ],
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/so-mi-ro-mooc-doosung.jpg',
    isHot: true,
    isNew: false,
    type: 'trailer'
  },
  {
    id: 'tr2',
    name: 'Xe đầu kéo Hyundai HD1000',
    slug: 'xe-dau-keo-hyundai-hd1000',
    brand: 'Hyundai',
    price: 1850000000,
    priceText: '1.850.000.000 VNĐ',
    weight: 18,
    weightText: '18 tấn',
    length: 7.2,
    engine: 'Hyundai D6CC, Euro 4, 380HP',
    fuelType: 'Dầu Diesel',
    features: ['Động cơ mạnh mẽ', 'Cabin hiện đại', 'Tiết kiệm nhiên liệu'],
    description: 'Xe đầu kéo Hyundai HD1000 mạnh mẽ với động cơ 380HP, cabin hiện đại và nhiều tính năng an toàn.',
    images: [
      'https://tongkhoxetai.vn/upload/images/xe-dau-keo-hyundai.jpg'
    ],
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/xe-dau-keo-hyundai.jpg',
    isHot: true,
    isNew: true,
    type: 'tractor'
  }
];
