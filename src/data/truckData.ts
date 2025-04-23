
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
    isNew: false
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
    isNew: true
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
    isNew: true
  },
  {
    id: 't4',
    name: 'Hino 500 Series FG',
    slug: 'hino-500-series-fg',
    brand: 'Hino',
    price: 950000000,
    priceText: '950.000.000 VNĐ',
    weight: 8.5,
    weightText: '8.5 tấn',
    length: 6.8,
    engine: 'Hino J08E-UG, 7.7L, 260HP',
    fuelType: 'Dầu Diesel',
    features: ['Công suất lớn', 'Cabin hiện đại', 'Hệ thống phanh ABS/EBD'],
    description: 'Hino 500 Series FG là dòng xe tải hạng trung cao cấp với tải trọng 8.5 tấn, được trang bị nhiều tính năng hiện đại và động cơ mạnh mẽ, phù hợp cho vận tải hàng hóa đường dài.',
    images: [
      'https://tongkhoxetai.vn/upload/images/hino-500-series-fg.jpg',
      'https://tongkhoxetai.vn/upload/images/hino-500-fg-thung-mui-bat.jpg'
    ],
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/hino-500-series-fg.jpg',
    isHot: true,
    isNew: false
  },
  {
    id: 't5',
    name: 'Dongfeng Hoàng Huy B180',
    slug: 'dongfeng-hoang-huy-b180',
    brand: 'Dongfeng',
    price: 600000000,
    priceText: '600.000.000 VNĐ',
    weight: 7.8,
    weightText: '7.8 tấn',
    length: 6.2,
    engine: 'Cummins ISB 140, 5.9L, 140HP',
    fuelType: 'Dầu Diesel',
    features: ['Khả năng chịu tải cao', 'Tiêu thụ nhiên liệu thấp', 'Dễ dàng bảo trì'],
    description: 'Dongfeng Hoàng Huy B180 là dòng xe tải trung cao cấp với tải trọng 7.8 tấn, được trang bị động cơ Cummins mạnh mẽ với khả năng vận hành bền bỉ trên mọi địa hình.',
    images: [
      'https://tongkhoxetai.vn/upload/images/dongfeng-hoang-huy-b180.jpg',
      'https://tongkhoxetai.vn/upload/images/dongfeng-b180-thung-kin.jpg'
    ],
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/dongfeng-hoang-huy-b180.jpg',
    isHot: false,
    isNew: false
  },
  {
    id: 't6',
    name: 'JAC X5',
    slug: 'jac-x5',
    brand: 'JAC',
    price: 295000000,
    priceText: '295.000.000 VNĐ',
    weight: 1.25,
    weightText: '1.25 tấn',
    length: 3.1,
    engine: 'HFC4DA1-2C, 1.9L, 90HP',
    fuelType: 'Dầu Diesel',
    features: ['Nhỏ gọn', 'Vận hành linh hoạt', 'Tiết kiệm nhiên liệu'],
    description: 'JAC X5 là dòng xe tải nhẹ cỡ nhỏ với tải trọng 1.25 tấn, phù hợp với các tuyến đường nhỏ hẹp trong thành phố, chi phí đầu tư và vận hành thấp.',
    images: [
      'https://tongkhoxetai.vn/upload/images/jac-x5.jpg',
      'https://tongkhoxetai.vn/upload/images/xe-tai-jac-x5-125-tan.jpg'
    ],
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/jac-x5.jpg',
    isHot: false,
    isNew: true
  },
  {
    id: 't7',
    name: 'Mitsubishi Fuso Canter TF',
    slug: 'mitsubishi-fuso-canter-tf',
    brand: 'Mitsubishi',
    price: 677000000,
    priceText: '677.000.000 VNĐ',
    weight: 7.5,
    weightText: '7.5 tấn',
    length: 6.0,
    engine: 'FUSO 4D34i, 3.9L, 136HP',
    fuelType: 'Dầu Diesel',
    features: ['Công nghệ Nhật Bản', 'An toàn cao', 'Độ bền vượt trội'],
    description: 'Mitsubishi Fuso Canter TF là dòng xe tải trung với công nghệ Nhật Bản, tải trọng 7.5 tấn, độ bền cao và chi phí vận hành thấp, phù hợp cho vận tải đường dài.',
    images: [
      'https://tongkhoxetai.vn/upload/images/mitsubishi-fuso-canter-tf.jpg',
      'https://tongkhoxetai.vn/upload/images/fuso-canter-tf-thung-mui-bat.jpg'
    ],
    thumbnailUrl: 'https://tongkhoxetai.vn/upload/images/mitsubishi-fuso-canter-tf.jpg',
    isHot: true,
    isNew: false
  }
];
