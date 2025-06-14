import { BlogPost } from '@/models/BlogPost';
import { newIndustryNewsPosts } from './blogDataAddition';
import { newProductReviewPosts } from './productReviewPosts';
import { driverTipsPosts } from './driverTipsPosts';

// Gộp các bài viết mới vào danh sách bài viết hiện có
export const blogPosts: BlogPost[] = [
  ...driverTipsPosts, // Thêm 4 bài viết kinh nghiệm lái xe mới
  ...newProductReviewPosts, // Thêm 4 bài viết đánh giá xe mới
  ...newIndustryNewsPosts, // Thêm 4 bài viết tin tức ngành
  {
    id: 'xe-tai-ban-chay-2023',
    title: 'Top 5 xe tải bán chạy nhất năm 2023',
    slug: 'top-5-xe-tai-ban-chay-nhat-nam-2023',
    description: 'Điểm qua những dòng xe tải được khách hàng Việt Nam ưa chuộng nhất trong năm 2023 với các ưu điểm nổi bật.',
    content: `
      <div class="prose-content">
        <h2 id="gioi-thieu">Giới Thiệu</h2>
        <p>Năm 2023 đã chứng kiến sự phát triển mạnh mẽ của thị trường xe tải tại Việt Nam. Với nhu cầu vận chuyển hàng hóa ngày càng tăng cao, các dòng xe tải chất lượng cao đã chiếm được lòng tin của khách hàng.</p>
        
        <h2 id="top-5-xe-tai">Top 5 Xe Tải Bán Chạy Nhất</h2>
        
        <h3 id="hyundai-mighty-ex8">1. Hyundai Mighty EX8 GTL 8 Tấn</h3>
        <p>Dẫn đầu danh sách là <strong>Hyundai Mighty EX8 GTL</strong> với thiết kế hiện đại và công nghệ tiên tiến. Xe được trang bị động cơ D4GA 3.9L cho công suất 143 mã lực, đảm bảo hiệu suất vận hành tối ưu.</p>
        
        <h4 id="uu-diem-mighty">Ưu Điểm Nổi Bật:</h4>
        <ul>
          <li>Động cơ Euro 4 tiết kiệm nhiên liệu</li>
          <li>Cabin rộng rãi, thoải mái</li>
          <li>Hệ thống phanh ABS an toàn</li>
          <li>Bảo hành toàn diện 3 năm</li>
        </ul>
        
        <h3 id="isuzu-npr">2. Isuzu NPR 400 5.5 Tấn</h3>
        <p>Isuzu NPR 400 nổi tiếng với độ bền cao và khả năng vận hành ổn định trong mọi điều kiện. Đây là lựa chọn hàng đầu cho các doanh nghiệp vừa và nhỏ.</p>
        
        <h3 id="thaco-kia">3. Thaco Kia K200 1.9 Tấn</h3>
        <p>Trong phân khúc xe tải nhẹ, Thaco Kia K200 chiếm ưu thế với giá thành hợp lý và khả năng cơ động cao, phù hợp cho vận chuyển nội thành.</p>
        
        <h3 id="dongfeng-hoang-huy">4. Dongfeng Hoàng Huy 7 Tấn</h3>
        <p>Dongfeng Hoàng Huy mang đến sự cân bằng hoàn hảo giữa chất lượng và giá cả, được nhiều khách hàng tin tưởng lựa chọn.</p>
        
        <h3 id="hino-xzu">5. Hino XZU 7.5 Tấn Thùng Đông Lạnh</h3>
        <p>Hino XZU chuyên dụng cho vận chuyển hàng đông lạnh, với công nghệ làm lạnh hiện đại và khả năng bảo quản tối ưu.</p>
        
        <h2 id="xu-huong-thi-truong">Xu Hướng Thị Trường</h2>
        <p>Thị trường xe tải Việt Nam đang chuyển dịch theo hướng chú trọng chất lượng, tiết kiệm nhiên liệu và thân thiện với môi trường.</p>
        
        <h3 id="yeu-to-anh-huong">Yếu Tố Ảnh Hưởng Đến Lựa Chọn</h3>
        <ul>
          <li>Tiết kiệm nhiên liệu</li>
          <li>Độ bền và tin cậy</li>
          <li>Dịch vụ hậu mãi</li>
          <li>Giá thành hợp lý</li>
        </ul>
        
        <h2 id="ket-luan">Kết Luận</h2>
        <p>Việc lựa chọn xe tải phù hợp phụ thuộc vào nhiều yếu tố như nhu cầu sử dụng, ngân sách và mục đích kinh doanh. Các dòng xe trong top 5 đều có những ưu điểm riêng biệt.</p>
      </div>
    `,
    category: 'product-review',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    publishDate: Date.now() - 432000000, // 5 ngày trước
    readTime: 6,
    author: 'Nguyễn Văn An',
    tags: ['xe tải', 'bán chạy', '2023', 'hyundai', 'isuzu'],
    views: 245,
    comments: 18
  },
  {
    id: 'chon-xe-tai-phu-hop',
    title: 'Cách chọn xe tải phù hợp với nhu cầu kinh doanh của bạn',
    slug: 'cach-chon-xe-tai-phu-hop-voi-nhu-cau-kinh-doanh',
    description: 'Hướng dẫn chi tiết cách lựa chọn xe tải phù hợp với từng loại hình kinh doanh và nhu cầu vận chuyển cụ thể.',
    content: `
      <div class="prose-content">
        <h2 id="danh-gia-nhu-cau">Đánh Giá Nhu Cầu Kinh Doanh</h2>
        <p>Trước khi quyết định mua xe tải, bạn cần đánh giá kỹ lưỡng nhu cầu kinh doanh của mình. Điều này bao gồm việc xác định loại hàng hóa vận chuyển, tần suất sử dụng và ngân sách đầu tư.</p>
        
        <h3 id="phan-loai-hang-hoa">Phân Loại Hàng Hóa</h3>
        <p>Loại hàng hóa bạn vận chuyển sẽ quyết định loại xe tải phù hợp:</p>
        <ul>
          <li><strong>Hàng khô:</strong> Xe tải thùng kín hoặc thùng bạt</li>
          <li><strong>Hàng đông lạnh:</strong> Xe tải thùng đông lạnh</li>
          <li><strong>Hàng lỏng:</strong> Xe tải chở bồn</li>
          <li><strong>Hàng siêu trường siêu trọng:</strong> Xe đầu kéo với mooc chuyên dụng</li>
        </ul>
        
        <h2 id="chon-tai-trong">Chọn Tải Trọng Phù Hợp</h2>
        <p>Tải trọng là yếu tố quan trọng nhất khi chọn xe tải. Việc chọn đúng tải trọng giúp tối ưu hóa chi phí và hiệu quả vận hành.</p>
        
        <h3 id="xe-tai-nhe">Xe Tải Nhẹ (Dưới 3.5 Tấn)</h3>
        <p>Phù hợp cho vận chuyển nội thành, giao hàng last-mile và các doanh nghiệp nhỏ.</p>
        
        <h3 id="xe-tai-trung">Xe Tải Trung (3.5 - 15 Tấn)</h3>
        <p>Lý tưởng cho vận chuyển liên tỉnh và các doanh nghiệp vừa.</p>
        
        <h3 id="xe-tai-nang">Xe Tải Nặng (Trên 15 Tấn)</h3>
        <p>Chuyên dụng cho vận chuyển hàng hóa quy mô lớn và đường dài.</p>
        
        <h2 id="yeu-to-kinh-te">Yếu Tố Kinh Tế</h2>
        <p>Chi phí đầu tư ban đầu chỉ là một phần. Bạn cần tính toán tổng chi phí sở hữu bao gồm:</p>
        
        <h3 id="chi-phi-van-hanh">Chi Phí Vận Hành</h3>
        <ul>
          <li>Nhiên liệu</li>
          <li>Bảo dưỡng</li>
          <li>Bảo hiểm</li>
          <li>Khấu hao</li>
        </ul>
        
        <h2 id="thuong-hieu-uy-tin">Chọn Thương Hiệu Uy Tín</h2>
        <p>Thương hiệu xe tải ảnh hưởng trực tiếp đến chất lượng, độ bền và giá trị bán lại của xe.</p>
        
        <h3 id="thuong-hieu-hang-dau">Các Thương Hiệu Hàng Đầu</h3>
        <ul>
          <li><strong>Hyundai:</strong> Chất lượng cao, công nghệ tiên tiến</li>
          <li><strong>Isuzu:</strong> Độ bền nổi tiếng, tiết kiệm nhiên liệu</li>
          <li><strong>Thaco:</strong> Giá cả hợp lý, dịch vụ tốt</li>
          <li><strong>Hino:</strong> Chuyên về xe thương mại</li>
        </ul>
        
        <h2 id="dich-vu-hau-mai">Dịch Vụ Hậu Mãi</h2>
        <p>Dịch vụ hậu mãi là yếu tố quyết định đến hiệu quả sử dụng xe trong suốt vòng đời sản phẩm.</p>
        
        <h3 id="tieu-chi-danh-gia">Tiêu Chí Đánh Giá</h3>
        <ul>
          <li>Mạng lưới dịch vụ rộng khắp</li>
          <li>Thời gian bảo hành dài</li>
          <li>Giá phụ tùng hợp lý</li>
          <li>Hỗ trợ kỹ thuật 24/7</li>
        </ul>
        
        <h2 id="ket-luan-chon-xe">Kết Luận</h2>
        <p>Việc chọn xe tải phù hợp đòi hỏi sự cân nhắc kỹ lưỡng nhiều yếu tố. Hãy tư vấn với các chuyên gia để đưa ra quyết định tốt nhất cho doanh nghiệp của bạn.</p>
      </div>
    `,
    category: 'buying-guide',
    images: [
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    publishDate: Date.now() - 518400000, // 6 ngày trước
    readTime: 8,
    author: 'Lê Minh Hoàng',
    tags: ['chọn xe tải', 'kinh doanh', 'tư vấn', 'đầu tư'],
    views: 189,
    comments: 24
  },
  {
    id: 'danh-gia-hyundai-mighty-ex8',
    title: 'Đánh giá chi tiết Hyundai Mighty EX8 GTL - Xe tải 8 tấn đáng mua nhất 2023',
    slug: 'danh-gia-chi-tiet-hyundai-mighty-ex8-gtl-xe-tai-8-tan',
    description: 'Đánh giá toàn diện về Hyundai Mighty EX8 GTL từ thiết kế, động cơ, tính năng an toàn đến hiệu quả kinh tế.',
    content: `
      <div class="prose-content">
        <h2 id="gioi-thieu-mighty">Giới Thiệu Hyundai Mighty EX8 GTL</h2>
        <p>Hyundai Mighty EX8 GTL là một trong những dòng xe tải 8 tấn được đánh giá cao nhất tại thị trường Việt Nam. Với thiết kế hiện đại và công nghệ tiên tiến, mẫu xe này đã chiếm được lòng tin của nhiều khách hàng.</p>
        
        <h2 id="thiet-ke-ngoai-that">Thiết Kế Ngoại Thất</h2>
        <p>Mighty EX8 GTL sở hữu thiết kế hiện đại với các đường nét vuông vức, mạnh mẽ. Đèn pha LED tạo điểm nhấn ấn tượng, kết hợp với lưới tản nhiệt chrome sang trọng.</p>
        
        <h3 id="kich-thuoc-xe">Kích Thước và Trọng Lượng</h3>
        <ul>
          <li><strong>Dài x Rộng x Cao:</strong> 7.200 x 2.500 x 2.990 mm</li>
          <li><strong>Chiều dài cơ sở:</strong> 4.200 mm</li>
          <li><strong>Tải trọng:</strong> 8.000 kg</li>
          <li><strong>Trọng lượng bản thân:</strong> 5.500 kg</li>
        </ul>
        
        <h2 id="dong-co-hieu-suat">Động Cơ và Hiệu Suất</h2>
        <p>Xe được trang bị động cơ D4GA 3.9L Turbo Diesel cho công suất 143 mã lực tại 2.500 vòng/phút và mô-men xoắn 422 Nm tại 1.500-2.500 vòng/phút.</p>
        
        <h3 id="hop-so-truyen-dong">Hộp Số và Truyền Động</h3>
        <p>Hộp số sàn 6 cấp giúp tối ưu hóa hiệu suất và tiết kiệm nhiên liệu. Hệ thống truyền động cầu sau đảm bảo độ ổn định cao.</p>
        
        <h2 id="noi-that-cabin">Nội Thất Cabin</h2>
        <p>Cabin rộng rãi với thiết kế tiện nghi, bảng điều khiển hiện đại và ghế ngồi thoải mái cho tài xế.</p>
        
        <h3 id="tien-nghi-cabin">Tiện Nghi Nổi Bật</h3>
        <ul>
          <li>Hệ thống điều hòa không khí</li>
          <li>Radio AM/FM</li>
          <li>Cửa sổ điều khiển điện</li>
          <li>Gương chiếu hậu điện</li>
        </ul>
        
        <h2 id="an-toan">Tính Năng An Toàn</h2>
        <p>Mighty EX8 GTL được trang bị đầy đủ các tính năng an toàn hiện đại để bảo vệ tài xế và hàng hóa.</p>
        
        <h3 id="he-thong-an-toan">Hệ Thống An Toàn</h3>
        <ul>
          <li>Hệ thống phanh ABS</li>
          <li>Túi khí cho tài xế</li>
          <li>Hệ thống cảnh báo áp suất lốp</li>
          <li>Khóa cửa tự động</li>
        </ul>
        
        <h2 id="chi-phi-van-hanh">Chi Phí Vận Hành</h2>
        <p>Với công nghệ động cơ tiên tiến, Mighty EX8 GTL có mức tiêu thụ nhiên liệu khoảng 12-14 lít/100km tùy điều kiện vận hành.</p>
        
        <h3 id="bao-duong">Bảo Dưỡng và Phụ Tùng</h3>
        <p>Chi phí bảo dưỡng định kỳ khoảng 2-3 triệu đồng/lần. Hyundai có mạng lưới dịch vụ rộng khắp đảm bảo hỗ trợ tốt nhất.</p>
        
        <h2 id="gia-ban">Giá Bán và Chính Sách</h2>
        <p>Giá bán từ 750-850 triệu đồng tùy phiên bản. Hyundai hỗ trợ vay vốn lên đến 80% giá trị xe với lãi suất ưu đãi.</p>
        
        <h2 id="danh-gia-tong-quan">Đánh Giá Tổng Quan</h2>
        
        <h3 id="uu-diem">Ưu Điểm</h3>
        <ul>
          <li>Thiết kế hiện đại, chất lượng xây dựng tốt</li>
          <li>Động cơ mạnh mẽ, tiết kiệm nhiên liệu</li>
          <li>Cabin thoải mái, trang bị đầy đủ</li>
          <li>Dịch vụ hậu mãi tốt</li>
        </ul>
        
        <h3 id="nhuoc-diem">Nhược Điểm</h3>
        <ul>
          <li>Giá bán cao hơn so với đối thủ</li>
          <li>Phụ tùng có giá đắt</li>
          <li>Độ ồn cabin chưa thật sự tối ưu</li>
        </ul>
        
        <h2 id="ket-luan-mighty">Kết Luận</h2>
        <p>Hyundai Mighty EX8 GTL là lựa chọn đáng cân nhắc cho những ai cần một chiếc xe tải 8 tấn chất lượng cao với dịch vụ hậu mãi tốt, mặc dù giá thành cao hơn so với đối thủ.</p>
      </div>
    `,
    category: 'product-review',
    images: [
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    publishDate: Date.now() - 604800000, // 7 ngày trước
    readTime: 7,
    author: 'Nguyễn Minh Tuấn',
    tags: ['hyundai mighty', 'đánh giá xe', 'xe tải 8 tấn', 'mighty ex8'],
    views: 312,
    comments: 45
  },
  {
    id: 'xe-tai-dien-tuong-lai',
    title: 'Xe tải điện: Tương lai của vận tải thương mại tại Việt Nam',
    slug: 'xe-tai-dien-tuong-lai-van-tai-thuong-mai-viet-nam',
    description: 'Tìm hiểu về xu hướng phát triển xe tải điện và tác động của chúng đến ngành vận tải thương mại Việt Nam.',
    content: `
      <div class="prose-content">
        <h2 id="gioi-thieu-xe-dien">Giới Thiệu Xe Tải Điện</h2>
        <p>Xe tải điện đang trở thành xu hướng toàn cầu trong ngành vận tải thương mại. Với cam kết về môi trường và chi phí vận hành thấp, xe tải điện hứa hẹn sẽ thay đổi ngành vận tải tại Việt Nam.</p>
        
        <h2 id="uu-diem-xe-dien">Ưu Điểm Của Xe Tải Điện</h2>
        
        <h3 id="thien-moi-truong">Thân Thiện Với Môi Trường</h3>
        <p>Xe tải điện không phát thải khí CO2 trong quá trình vận hành, góp phần giảm ô nhiễm không khí đô thị.</p>
        
        <h3 id="tiet-kiem-chi-phi">Tiết Kiệm Chi Phí Vận Hành</h3>
        <p>Chi phí điện thấp hơn nhiều so với xăng dầu, bảo dưỡng ít hơn do ít bộ phận chuyển động.</p>
        
        <h2 id="thach-thuc">Thách Thức Hiện Tại</h2>
        
        <h3 id="ha-tang-sac">Hạ Tầng Sạc Điện</h3>
        <p>Việt Nam cần đầu tư mạnh vào hệ thống trạm sạc để hỗ trợ xe tải điện hoạt động hiệu quả.</p>
        
        <h3 id="gia-thanh-cao">Giá Thành Ban Đầu</h3>
        <p>Chi phí đầu tư ban đầu cho xe tải điện vẫn cao hơn xe truyền thống, cần chính sách hỗ trợ.</p>
        
        <h2 id="triển-vọng">Triển Vọng Tại Việt Nam</h2>
        <p>Chính phủ Việt Nam đang có những chính sách khuyến khích phát triển xe điện, tạo cơ hội lớn cho thị trường xe tải điện.</p>
        
        <h2 id="ket-luan-xe-dien">Kết Luận</h2>
        <p>Xe tải điện là tương lai không thể tránh khỏi của ngành vận tải. Việc chuẩn bị sớm sẽ giúp doanh nghiệp Việt Nam nắm bắt cơ hội này.</p>
      </div>
    `,
    category: 'technology',
    images: [
      'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    publishDate: Date.now() - 691200000, // 8 ngày trước
    readTime: 5,
    author: 'Trần Văn Đức',
    tags: ['xe tải điện', 'công nghệ', 'môi trường', 'tương lai'],
    views: 156,
    comments: 12
  }
];

// Danh mục blog
export const blogCategories: Record<string, string> = {
  'industry-news': 'Tin Tức Ngành Vận Tải',
  'product-review': 'Đánh Giá Xe',
  'driver-tips': 'Kinh Nghiệm Lái Xe',
  'maintenance': 'Bảo Dưỡng',
  'buying-guide': 'Tư Vấn Mua Xe',
  'technology': 'Công Nghệ & Đổi Mới'
};
