
import { BlogPost } from '@/models/BlogPost';

export const blogCategories = {
  'xe-tai': 'Xe Tải',
  'cau': 'Cẩu',
  'mooc-ben': 'Mooc Ben',
  'mooc-san': 'Mooc Sàn',
  'mooc-xuong': 'Mooc Xương'
} as const;

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'xe-tai-dong-lanh',
    title: 'Xe Tải Đông Lạnh: Giải Pháp Vận Chuyển Thực Phẩm Hiệu Quả',
    description: 'Tìm hiểu về các ưu điểm và tính năng của xe tải đông lạnh trong việc vận chuyển thực phẩm.',
    content: `
      <p>Xe tải đông lạnh là phương tiện vận chuyển chuyên dụng được thiết kế đặc biệt để duy trì nhiệt độ thấp...</p>
      <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c" alt="Xe tải đông lạnh" className="w-full h-auto my-4 rounded-lg" />
      <p>Với công nghệ làm lạnh hiện đại, xe tải đông lạnh có thể duy trì nhiệt độ ổn định trong thời gian dài...</p>
      <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec" alt="Hệ thống làm lạnh" className="w-full h-auto my-4 rounded-lg" />
      <p>Việc lựa chọn xe tải đông lạnh phù hợp cần dựa trên nhiều yếu tố như khối lượng hàng hóa...</p>
      <p>Hãy liên hệ với chúng tôi để được tư vấn chi tiết về các dòng xe tải đông lạnh phù hợp với nhu cầu của bạn.</p>
    `,
    images: [
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c',
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec',
      'https://images.unsplash.com/photo-1580674285054-bed31e145f59',
      'https://images.unsplash.com/photo-1597733336794-12d05021d510'
    ],
    publishDate: '2024-04-15',
    readTime: 5,
    category: 'xe-tai',
    author: 'Nguyễn Văn A',
    tags: ['xe tải đông lạnh', 'vận chuyển thực phẩm', 'logistics'],
    featured: true
  },
  {
    id: '2',
    slug: 'cau-tu-hanh',
    title: 'Cẩu Tự Hành: Sự Lựa Chọn Tối Ưu Cho Công Trường Xây Dựng',
    description: 'Khám phá ưu điểm và ứng dụng của cẩu tự hành trong ngành xây dựng hiện đại.',
    content: `
      <p>Cẩu tự hành là thiết bị nâng hạ không thể thiếu trong các công trường xây dựng hiện đại...</p>
      <img src="https://images.unsplash.com/photo-1541625602330-2277a4c46182" alt="Cẩu tự hành" className="w-full h-auto my-4 rounded-lg" />
      <p>Với khả năng di chuyển linh hoạt và sức nâng lớn, cẩu tự hành là lựa chọn tối ưu cho nhiều dự án...</p>
      <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c" alt="Công trường xây dựng" className="w-full h-auto my-4 rounded-lg" />
      <p>Để đảm bảo an toàn và hiệu quả, việc vận hành cẩu tự hành đòi hỏi kỹ năng và kinh nghiệm...</p>
    `,
    images: [
      'https://images.unsplash.com/photo-1541625602330-2277a4c46182',
      'https://images.unsplash.com/photo-1565008447742-97f6f38c985c',
      'https://images.unsplash.com/photo-1574445431372-5930d4023514',
      'https://images.unsplash.com/photo-1581094488379-6edcaa80a5c8'
    ],
    publishDate: '2024-04-14',
    readTime: 6,
    category: 'cau',
    author: 'Trần Văn B',
    tags: ['cẩu tự hành', 'xây dựng', 'thiết bị nâng']
  },
  {
    id: '3',
    slug: 'mooc-ben-tu-do',
    title: 'Mooc Ben Tự Đổ: Công Nghệ Mới Trong Vận Chuyển Vật Liệu',
    description: 'Tìm hiểu về công nghệ mới trong lĩnh vực vận chuyển vật liệu với mooc ben tự đổ.',
    content: `
      <p>Mooc ben tự đổ là giải pháp vận chuyển hiện đại giúp tiết kiệm thời gian và nhân công...</p>
      <img src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55" alt="Mooc ben" className="w-full h-auto my-4 rounded-lg" />
      <p>Với hệ thống thủy lực mạnh mẽ, mooc ben có thể nâng và đổ tải trọng lớn một cách dễ dàng...</p>
      <img src="https://images.unsplash.com/photo-1573046706408-dd2ab8e73088" alt="Hệ thống thủy lực" className="w-full h-auto my-4 rounded-lg" />
      <p>Việc bảo dưỡng định kỳ là rất quan trọng để đảm bảo hoạt động ổn định và an toàn...</p>
    `,
    images: [
      'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55',
      'https://images.unsplash.com/photo-1573046706408-dd2ab8e73088',
      'https://images.unsplash.com/photo-1562280963-8a5475740a42',
      'https://images.unsplash.com/photo-1593016605825-8c2956c62167'
    ],
    publishDate: '2024-04-13',
    readTime: 4,
    category: 'mooc-ben',
    author: 'Lê Thị C',
    tags: ['mooc ben', 'vận chuyển', 'công nghệ mới']
  },
  {
    id: '4',
    slug: 'mooc-san-van-chuyen',
    title: 'Mooc Sàn: Giải Pháp Vận Chuyển Hàng Hóa Cồng Kềnh',
    description: 'Khám phá ưu điểm của mooc sàn trong vận chuyển hàng hóa cồng kềnh và container.',
    content: `
      <p>Mooc sàn là loại rơ mooc chuyên dụng được thiết kế để vận chuyển các loại hàng hóa cồng kềnh...</p>
      <img src="https://images.unsplash.com/photo-1586191582056-b7f0372a3bd6" alt="Mooc sàn" className="w-full h-auto my-4 rounded-lg" />
      <p>Với thiết kế phẳng và chắc chắn, mooc sàn có thể chở được nhiều loại hàng hóa khác nhau...</p>
      <img src="https://images.unsplash.com/photo-1505369430934-a0be1aa5bce3" alt="Vận chuyển container" className="w-full h-auto my-4 rounded-lg" />
      <p>Hệ thống treo và khung gầm được thiết kế đặc biệt để đảm bảo độ ổn định khi vận chuyển...</p>
    `,
    images: [
      'https://images.unsplash.com/photo-1586191582056-b7f0372a3bd6',
      'https://images.unsplash.com/photo-1505369430934-a0be1aa5bce3',
      'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3',
      'https://images.unsplash.com/photo-1616432043562-3671ea2e5242'
    ],
    publishDate: '2024-04-12',
    readTime: 5,
    category: 'mooc-san',
    author: 'Phạm Văn D',
    tags: ['mooc sàn', 'vận chuyển', 'container']
  },
  {
    id: '5',
    slug: 'mooc-xuong-chuyen-dung',
    title: 'Mooc Xương: Chuyên Dụng Cho Vận Chuyển Container',
    description: 'Tìm hiểu về đặc điểm và ứng dụng của mooc xương trong vận chuyển container.',
    content: `
      <p>Mooc xương là loại rơ mooc được thiết kế đặc biệt để vận chuyển container...</p>
      <img src="https://images.unsplash.com/photo-1577666609403-c5e0da048cd1" alt="Mooc xương" className="w-full h-auto my-4 rounded-lg" />
      <p>Với cấu trúc khung xương chắc chắn, loại mooc này có thể chở được các container 20 và 40 feet...</p>
      <img src="https://images.unsplash.com/photo-1494412651994-8c17a5f49499" alt="Container" className="w-full h-auto my-4 rounded-lg" />
      <p>Hệ thống khóa container được thiết kế an toàn và tiện lợi, giúp việc bốc xếp nhanh chóng...</p>
    `,
    images: [
      'https://images.unsplash.com/photo-1577666609403-c5e0da048cd1',
      'https://images.unsplash.com/photo-1494412651994-8c17a5f49499',
      'https://images.unsplash.com/photo-1586528116551-d523a953dcbc',
      'https://images.unsplash.com/photo-1580674285054-bed31e145f59'
    ],
    publishDate: '2024-04-11',
    readTime: 6,
    category: 'mooc-xuong',
    author: 'Hoàng Thị E',
    tags: ['mooc xương', 'container', 'vận chuyển']
  }
];
