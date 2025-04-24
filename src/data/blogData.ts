
import { BlogPost } from "@/models/BlogPost";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "xe-tai-dong-lanh",
    title: "Xe Tải Đông Lạnh: Giải Pháp Vận Chuyển Thực Phẩm Hiệu Quả",
    description: "Tìm hiểu về các tính năng và lợi ích của xe tải đông lạnh trong việc vận chuyển thực phẩm tươi sống và hàng hóa đông lạnh.",
    content: `
      Xe tải đông lạnh là phương tiện vận tải chuyên dụng được trang bị hệ thống làm lạnh, đảm bảo nhiệt độ ổn định trong thùng xe. Loại xe này đặc biệt phù hợp cho việc vận chuyển:

      - Thực phẩm tươi sống
      - Sản phẩm đông lạnh
      - Dược phẩm yêu cầu bảo quản lạnh
      - Hoa tươi và các sản phẩm nhạy cảm với nhiệt độ`,
    image: "/placeholder.svg",
    publishDate: "2024-04-20",
    readTime: 5,
    category: "truck",
    author: "Nguyễn Văn An",
    tags: ["xe tải", "vận chuyển", "đông lạnh"],
    featured: true
  },
  {
    id: "2",
    slug: "tu-van-chon-mua-xe-tai",
    title: "Hướng Dẫn Chọn Mua Xe Tải Phù Hợp Với Nhu Cầu",
    description: "Các tiêu chí quan trọng cần cân nhắc khi chọn mua xe tải cho doanh nghiệp vận tải.",
    content: `
      Việc chọn mua xe tải phù hợp với nhu cầu kinh doanh là một quyết định quan trọng. Dưới đây là những yếu tố cần cân nhắc:

      - Tải trọng và kích thước thùng xe
      - Loại nhiên liệu và mức tiêu thụ
      - Chi phí bảo dưỡng và phụ tùng thay thế
      - Khả năng vận hành và độ bền`,
    image: "/placeholder.svg",
    publishDate: "2024-04-19",
    readTime: 7,
    category: "truck",
    author: "Trần Minh Tuấn",
    tags: ["xe tải", "tư vấn mua xe", "kinh doanh"]
  },
  {
    id: "3",
    slug: "bao-duong-xe-cau",
    title: "Cách Bảo Dưỡng Xe Cẩu Định Kỳ Hiệu Quả",
    description: "Hướng dẫn chi tiết về quy trình bảo dưỡng xe cẩu để đảm bảo hoạt động ổn định và an toàn.",
    content: `
      Bảo dưỡng xe cẩu định kỳ là yếu tố quan trọng để đảm bảo an toàn và hiệu quả hoạt động. Quy trình bảo dưỡng cần chú ý:

      - Kiểm tra hệ thống thủy lực
      - Bảo dưỡng cáp và ròng rọc
      - Kiểm tra hệ thống phanh
      - Bôi trơn các khớp nối`,
    image: "/placeholder.svg",
    publishDate: "2024-04-18",
    readTime: 6,
    category: "crane",
    author: "Lê Văn Hùng",
    tags: ["xe cẩu", "bảo dưỡng", "an toàn"]
  },
  // Adding new posts in lifestyle category
  {
    id: "4",
    slug: "cuoc-song-tai-xe-container",
    title: "Một Ngày Của Tài Xế Container: Những Điều Thú Vị",
    description: "Khám phá cuộc sống thường ngày và những trải nghiệm thú vị của người tài xế container.",
    content: `
      Cuộc sống của tài xế container luôn chứa đựng nhiều điều thú vị và thách thức:

      - Lịch trình làm việc linh hoạt
      - Khám phá nhiều địa điểm mới
      - Kỹ năng xử lý tình huống
      - Network với đồng nghiệp`,
    image: "/placeholder.svg",
    publishDate: "2024-04-17",
    readTime: 8,
    category: "lifestyle",
    author: "Phạm Thành Long",
    tags: ["lifestyle", "tài xế", "container"]
  },
  {
    id: "5",
    slug: "mua-sam-thiet-bi-van-tai",
    title: "Hướng Dẫn Mua Sắm Thiết Bị Vận Tải Thông Minh",
    description: "Cập nhật xu hướng và cách chọn mua thiết bị vận tải hiện đại cho doanh nghiệp.",
    content: `
      Việc đầu tư thiết bị vận tải hiện đại giúp tối ưu hóa hoạt động kinh doanh:

      - Hệ thống GPS theo dõi
      - Thiết bị giám sát nhiên liệu
      - Camera hành trình
      - Phần mềm quản lý đội xe`,
    image: "/placeholder.svg",
    publishDate: "2024-04-16",
    readTime: 5,
    category: "shopping",
    author: "Nguyễn Thị Mai",
    tags: ["thiết bị", "công nghệ", "vận tải"]
  }
];

export const blogCategories = {
  truck: "Xe Tải",
  trailer: "Sơ Mi Rơ Mooc",
  crane: "Xe Cẩu",
  lifestyle: "Lifestyle",
  shopping: "Mua Sắm",
  health: "Sức Khỏe"
} as const;

