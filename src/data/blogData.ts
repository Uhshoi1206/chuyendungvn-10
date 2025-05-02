
import { BlogPost } from '../models/BlogPost';

// Categories
export const blogCategories: Record<string, string> = {
  'industry-news': 'Tin Ngành',
  'product-review': 'Đánh Giá Xe',
  'driver-tips': 'Lái Xe',
  'maintenance': 'Bảo Dưỡng'
};

// Blog posts
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 5 xe tải bán chạy nhất năm 2023',
    slug: 'top-5-xe-tai-ban-chay-nhat-nam-2023',
    description: 'Điểm qua những mẫu xe tải bán chạy nhất thị trường Việt Nam trong năm 2023, phân tích ưu nhược điểm và lý do được ưa chuộng.',
    content: `
      <h2>Những mẫu xe tải bán chạy nhất thị trường Việt Nam năm 2023</h2>
      <p>Thị trường xe tải Việt Nam năm 2023 chứng kiến sự cạnh tranh gay gắt giữa các thương hiệu lớn như Hyundai, Thaco, Isuzu, Hino và các hãng xe Trung Quốc. Trong đó, 5 mẫu xe tải sau đây đã dẫn đầu về doanh số bán hàng:</p>
      
      <h3>1. Hyundai Porter H150</h3>
      <p>Hyundai Porter H150 tiếp tục là mẫu xe tải nhẹ bán chạy nhất thị trường với doanh số hơn 5,000 xe được bán ra trong năm 2023. Ưu điểm nổi bật của H150 là thiết kế cabin rộng rãi, động cơ mạnh mẽ, tiết kiệm nhiên liệu, và chi phí bảo dưỡng hợp lý.</p>
      
      <h3>2. Thaco Kia K200</h3>
      <p>Với giá bán cạnh tranh và chất lượng ổn định, Thaco Kia K200 đã giành vị trí thứ 2 về doanh số. Xe được lắp ráp trong nước, dễ dàng tìm kiếm phụ tùng thay thế và có mạng lưới dịch vụ rộng khắp trên toàn quốc.</p>
      
      <h3>3. Isuzu QKR</h3>
      <p>Isuzu QKR với độ bền cao và chi phí vận hành thấp tiếp tục là lựa chọn hàng đầu của nhiều doanh nghiệp vận tải. Động cơ Isuzu nổi tiếng bền bỉ và khả năng vận hành ổn định trên mọi địa hình.</p>
      
      <h3>4. Dongfeng Hoang Huy B180</h3>
      <p>Đại diện đến từ Trung Quốc, Dongfeng Hoang Huy B180 gây ấn tượng với giá bán hợp lý cùng tải trọng lớn. Xe được trang bị động cơ Cummins mạnh mẽ và nhiều tính năng an toàn, tạo nên sức hút lớn trên thị trường.</p>
      
      <h3>5. Hino 300 Series</h3>
      <p>Đến từ Nhật Bản, Hino 300 Series khẳng định chất lượng với độ bền cao và hiệu suất ổn định. Mặc dù giá cao hơn so với các đối thủ, nhưng chất lượng đã được kiểm chứng khiến nhiều khách hàng sẵn sàng chi trả.</p>
      
      <h2>Xu hướng thị trường xe tải năm 2024</h2>
      <p>Dự báo trong năm 2024, thị trường xe tải sẽ tiếp tục phát triển với xu hướng tăng cường các tính năng an toàn, thân thiện với môi trường và tiết kiệm nhiên liệu. Các dòng xe hybrid và điện cũng đang dần xuất hiện, mở ra một kỷ nguyên mới cho ngành vận tải đường bộ tại Việt Nam.</p>
    `,
    category: 'industry-news',
    images: [
      'https://tongkhoxetai.vn/upload/images/blog/top-5-xe-tai.jpg',
      'https://tongkhoxetai.vn/upload/images/blog/hyundai-porter-h150-blog.jpg'
    ],
    publishDate: Date.now() - 5 * 24 * 60 * 60 * 1000, // 5 days ago
    readTime: 8,
    author: 'Nguyễn Văn A'
  },
  {
    id: '2',
    title: 'Đánh giá chi tiết Hyundai Mighty EX8 GTL - Xe tải 8 tấn đáng mua nhất 2023',
    slug: 'danh-gia-hyundai-mighty-ex8-gtl',
    description: 'Phân tích chi tiết ưu nhược điểm của dòng xe tải Hyundai Mighty EX8 GTL, từ thiết kế, động cơ đến khả năng vận hành thực tế.',
    content: `
      <h2>Tổng quan về xe tải Hyundai Mighty EX8 GTL</h2>
      <p>Hyundai Mighty EX8 GTL là dòng xe tải trung được Hyundai Thành Công lắp ráp và phân phối tại Việt Nam. Với tải trọng 8 tấn, đây là mẫu xe nằm ở phân khúc giữa dòng Mighty EX6 và HD700, đáp ứng nhu cầu vận chuyển hàng hóa trên nhiều cung đường.</p>
      
      <h3>Ngoại thất</h3>
      <p>EX8 GTL sở hữu thiết kế ngoại thất hiện đại, góc cạnh với cabin rộng rãi theo phong cách Euro. Đầu xe nổi bật với lưới tản nhiệt cỡ lớn mạ chrome sáng bóng, cụm đèn pha halogen thiết kế tinh tế kết hợp với đèn sương mù, mang đến khả năng chiếu sáng tối ưu trong mọi điều kiện thời tiết.</p>
      
      <h3>Nội thất</h3>
      <p>Không gian nội thất của EX8 GTL được thiết kế theo hướng tiện nghi như một mẫu SUV với bảng điều khiển ergonomic, vô lăng gật gù, điều hòa công suất lớn, hệ thống giải trí đa phương tiện tích hợp màn hình cảm ứng 7 inch, kết nối bluetooth, USB. Ghế lái có thể điều chỉnh nhiều hướng, tích hợp tựa đầu và tựa tay mang lại sự thoải mái cho tài xế trong những hành trình dài.</p>
      
      <h3>Động cơ và vận hành</h3>
      <p>EX8 GTL được trang bị động cơ diesel D4DD dung tích 4.0L, sản sinh công suất 160 mã lực tại 2,500 vòng/phút và mô-men xoắn 500 Nm tại 1,400 vòng/phút. Kết hợp với hộp số sàn 6 cấp, xe vận hành mạnh mẽ, linh hoạt trên nhiều địa hình. Đặc biệt, mức tiêu thụ nhiên liệu chỉ khoảng 12L/100km, khá tiết kiệm cho một mẫu xe tải 8 tấn.</p>
      
      <h3>Độ an toàn</h3>
      <p>Về an toàn, EX8 GTL được trang bị hệ thống phanh thủy lực, trợ lực chân không, phanh đĩa cho bánh trước và phanh tang trống cho bánh sau. Ngoài ra, xe còn có tính năng chống bó cứng phanh ABS, hỗ trợ phanh khẩn cấp BA, phân phối lực phanh điện tử EBD giúp tăng cường an toàn khi vận hành.</p>
      
      <h2>Ưu và nhược điểm</h2>
      <p><strong>Ưu điểm:</strong></p>
      <ul>
        <li>Thiết kế cabin hiện đại, tiện nghi như xe du lịch</li>
        <li>Động cơ mạnh mẽ, bền bỉ, tiết kiệm nhiên liệu</li>
        <li>Hệ thống an toàn đầy đủ</li>
        <li>Mạng lưới dịch vụ rộng khắp</li>
        <li>Giá trị bán lại cao</li>
      </ul>
      
      <p><strong>Nhược điểm:</strong></p>
      <ul>
        <li>Giá bán cao hơn so với các đối thủ cùng phân khúc</li>
        <li>Chi phí bảo dưỡng định kỳ khá tốn kém</li>
        <li>Một số phụ tùng thay thế đắt đỏ</li>
      </ul>
      
      <h2>Kết luận</h2>
      <p>Với những ưu điểm vượt trội về thiết kế, động cơ và độ an toàn, Hyundai Mighty EX8 GTL xứng đáng là lựa chọn hàng đầu trong phân khúc xe tải 8 tấn tại Việt Nam. Mặc dù có mức giá cao hơn đôi chút so với các đối thủ, nhưng những gì mà EX8 GTL mang lại hoàn toàn xứng đáng với số tiền bỏ ra, đặc biệt là về lâu dài khi tính đến chi phí vận hành tổng thể và giá trị bán lại.</p>
    `,
    category: 'product-review',
    images: [
      'https://tongkhoxetai.vn/upload/images/blog/hyundai-mighty-ex8.jpg',
      'https://tongkhoxetai.vn/upload/images/blog/hyundai-ex8-cabin.jpg'
    ],
    publishDate: Date.now() - 10 * 24 * 60 * 60 * 1000, // 10 days ago
    readTime: 12,
    author: 'Trần Văn B'
  },
  {
    id: '3',
    title: '7 kỹ năng vượt xe tải an toàn trên đường cao tốc',
    slug: '7-ky-nang-vuot-xe-tai-an-toan',
    description: 'Những kỹ năng vượt xe tải cần thiết giúp đảm bảo an toàn cho bạn và những người tham gia giao thông khác trên đường cao tốc.',
    content: `
      <h2>Tại sao vượt xe tải lại nguy hiểm?</h2>
      <p>Xe tải có kích thước lớn, tạo ra nhiều điểm mù và cần khoảng cách phanh dài hơn xe con. Khi vượt xe tải, bạn cần đặc biệt chú ý vì:</p>
      <ul>
        <li>Tài xế xe tải khó nhìn thấy xe nhỏ di chuyển gần họ</li>
        <li>Luồng gió từ xe tải có thể ảnh hưởng đến khả năng điều khiển xe của bạn</li>
        <li>Xe tải thường di chuyển chậm hơn khi lên dốc và nhanh hơn khi xuống dốc</li>
      </ul>
      
      <h3>Kỹ năng 1: Giữ khoảng cách an toàn</h3>
      <p>Trước khi vượt xe tải, hãy giữ khoảng cách tối thiểu 3-4 giây sau xe tải. Điều này giúp bạn có tầm nhìn tốt hơn về con đường phía trước và có thời gian phản ứng nếu xe tải phanh đột ngột.</p>
      
      <h3>Kỹ năng 2: Kiểm tra điều kiện đường</h3>
      <p>Chỉ vượt khi đảm bảo:</p>
      <ul>
        <li>Đường phía trước thông thoáng với tầm nhìn rõ ràng</li>
        <li>Không có biển cấm vượt và vạch liền trên đường</li>
        <li>Không đang ở đoạn đường cong, dốc cao hoặc gần giao lộ</li>
        <li>Thời tiết tốt, đủ ánh sáng</li>
      </ul>
      
      <h3>Kỹ năng 3: Báo hiệu rõ ràng</h3>
      <p>Trước khi vượt, luôn bật đèn xi-nhan để báo hiệu cho tài xế xe tải và những người tham gia giao thông khác biết ý định của bạn. Nếu cần, có thể nhấn còi nhẹ để thông báo.</p>
      
      <h3>Kỹ năng 4: Tăng tốc đúng cách</h3>
      <p>Khi quyết định vượt, hãy về số thích hợp và tăng tốc mạnh dứt khoát, không do dự. Điều này giúp rút ngắn thời gian bạn ở làn đối diện, giảm thiểu rủi ro va chạm.</p>
      
      <h3>Kỹ năng 5: Không vượt bên phải</h3>
      <p>Tuyệt đối không vượt xe tải từ bên phải (trừ trường hợp đường cao tốc nhiều làn và cho phép). Bên phải xe tải có điểm mù lớn, tài xế khó phát hiện bạn ở vị trí này.</p>
      
      <h3>Kỹ năng 6: Hoàn thành việc vượt an toàn</h3>
      <p>Chỉ trở lại làn đường của xe tải khi bạn đã nhìn thấy toàn bộ xe tải trong gương chiếu hậu. Đảm bảo giữ khoảng cách an toàn trước khi chuyển làn.</p>
      
      <h3>Kỹ năng 7: Xử lý tình huống đặc biệt</h3>
      <p>Khi gặp đoàn xe tải, chỉ vượt từng chiếc một và đảm bảo có đủ không gian giữa các xe tải để bạn có thể trở lại làn đường an toàn nếu cần thiết.</p>
      
      <h2>Lưu ý đặc biệt khi vượt xe tải</h2>
      <p>Ngoài những kỹ năng trên, bạn cần chú ý thêm:</p>
      <ul>
        <li>Không vượt khi thấy xe tải có dấu hiệu đổi làn đường</li>
        <li>Đề phòng gió mạnh khi vượt qua xe tải, đặc biệt là xe nhẹ như xe máy</li>
        <li>Không nấn ná ở vị trí điểm mù của xe tải</li>
        <li>Kiên nhẫn, không vội vàng vượt nếu chưa đảm bảo an toàn</li>
      </ul>
      
      <p>Áp dụng 7 kỹ năng này khi vượt xe tải sẽ giúp bạn di chuyển an toàn hơn trên đường. Hãy nhớ rằng, an toàn giao thông là trên hết, việc đến nơi sớm vài phút không quan trọng bằng việc đến nơi an toàn.</p>
    `,
    category: 'driver-tips',
    images: [
      'https://tongkhoxetai.vn/upload/images/blog/vuot-xe-an-toan.jpg',
      'https://tongkhoxetai.vn/upload/images/blog/ky-nang-lai-xe.jpg'
    ],
    publishDate: Date.now() - 15 * 24 * 60 * 60 * 1000, // 15 days ago
    readTime: 9,
    author: 'Lê Văn C'
  },
  {
    id: '4',
    title: 'Hướng dẫn bảo dưỡng xe tải đúng cách để kéo dài tuổi thọ',
    slug: 'huong-dan-bao-duong-xe-tai',
    description: 'Các bước bảo dưỡng xe tải cơ bản và chuyên sâu, giúp kéo dài tuổi thọ xe và giảm chi phí sửa chữa lớn.',
    content: `
      <h2>Tầm quan trọng của việc bảo dưỡng xe tải</h2>
      <p>Bảo dưỡng định kỳ xe tải không chỉ giúp đảm bảo an toàn khi vận hành mà còn kéo dài tuổi thọ của xe, giảm thiểu chi phí sửa chữa đột xuất. Theo thống kê, một chiếc xe tải được bảo dưỡng đúng cách có thể hoạt động hiệu quả trong khoảng 10-15 năm, trong khi những xe không được chăm sóc thường xuyên có thể gặp sự cố nghiêm trọng chỉ sau 5-7 năm.</p>
      
      <h3>1. Lịch bảo dưỡng định kỳ</h3>
      <p>Đây là yếu tố quan trọng nhất trong việc chăm sóc xe tải. Lịch bảo dưỡng điển hình bao gồm:</p>
      <ul>
        <li><strong>Bảo dưỡng 5,000km:</strong> Thay dầu nhớt, kiểm tra dầu phanh, nước làm mát</li>
        <li><strong>Bảo dưỡng 10,000km:</strong> Thay dầu nhớt, lọc nhớt, kiểm tra hệ thống phanh</li>
        <li><strong>Bảo dưỡng 20,000km:</strong> Thay tất cả các loại dầu, kiểm tra hệ thống truyền động, hệ thống phanh</li>
        <li><strong>Bảo dưỡng 40,000km:</strong> Thay dầu hộp số, dầu cầu, kiểm tra hệ thống treo</li>
        <li><strong>Bảo dưỡng 80,000-100,000km:</strong> Đại tu nhỏ, kiểm tra toàn diện</li>
      </ul>
      
      <h3>2. Kiểm tra hàng ngày trước khi vận hành</h3>
      <p>Trước mỗi chuyến đi, tài xế nên dành 10-15 phút để kiểm tra:</p>
      <ul>
        <li>Mức dầu động cơ</li>
        <li>Mức nước làm mát</li>
        <li>Áp suất lốp xe</li>
        <li>Hệ thống đèn chiếu sáng, đèn tín hiệu</li>
        <li>Hệ thống phanh</li>
        <li>Mức nhiên liệu</li>
      </ul>
      
      <h3>3. Chăm sóc động cơ xe tải</h3>
      <p>Động cơ là "trái tim" của xe tải, cần được chăm sóc đặc biệt:</p>
      <ul>
        <li>Thay dầu nhớt và lọc nhớt đúng định kỳ, sử dụng loại dầu phù hợp với khuyến cáo của nhà sản xuất</li>
        <li>Kiểm tra và thay thế lọc gió khi cần thiết</li>
        <li>Kiểm tra hệ thống làm mát, đảm bảo két nước không bị tắc nghẽn</li>
        <li>Duy trì hệ thống nhiên liệu sạch sẽ, thay lọc nhiên liệu định kỳ</li>
        <li>Kiểm tra và điều chỉnh căng đai cam, đai quạt gió</li>
      </ul>
      
      <h3>4. Chăm sóc hệ thống phanh</h3>
      <p>Hệ thống phanh là yếu tố quyết định đến an toàn:</p>
      <ul>
        <li>Kiểm tra mức dầu phanh và chất lượng dầu phanh</li>
        <li>Kiểm tra độ mòn của má phanh, đĩa phanh hoặc tang trống</li>
        <li>Điều chỉnh khoảng cách giữa má phanh và tang trống (với hệ thống phanh tang trống)</li>
        <li>Kiểm tra hệ thống ABS nếu xe có trang bị</li>
      </ul>
      
      <h3>5. Bảo dưỡng hệ thống treo</h3>
      <p>Hệ thống treo tốt giúp xe vận hành ổn định và bảo vệ hàng hóa:</p>
      <ul>
        <li>Kiểm tra tình trạng nhíp, lò xo treo</li>
        <li>Bôi trơn các khớp nối, bạc đạn bánh xe</li>
        <li>Kiểm tra giảm xóc, thay thế khi có dấu hiệu hỏng hóc</li>
      </ul>
      
      <h3>6. Chăm sóc lốp xe</h3>
      <p>Lốp xe là bộ phận tiếp xúc trực tiếp với mặt đường:</p>
      <ul>
        <li>Duy trì áp suất lốp theo khuyến cáo của nhà sản xuất</li>
        <li>Kiểm tra độ mòn gai lốp định kỳ</li>
        <li>Đảo lốp mỗi 10,000-15,000km</li>
        <li>Cân chỉnh góc đặt bánh xe khi cần thiết</li>
      </ul>
      
      <h3>7. Bảo dưỡng hệ thống điện</h3>
      <p>Hệ thống điện ổn định giúp xe khởi động và vận hành trơn tru:</p>
      <ul>
        <li>Kiểm tra và vệ sinh bình ắc quy</li>
        <li>Kiểm tra các cầu chì, công tắc điện</li>
        <li>Kiểm tra máy phát điện và bộ điều chỉnh điện áp</li>
        <li>Kiểm tra hệ thống đèn chiếu sáng, đèn tín hiệu</li>
      </ul>
      
      <h2>Lời khuyên từ chuyên gia</h2>
      <p>Ngoài việc tuân thủ lịch bảo dưỡng định kỳ, chủ xe tải nên:</p>
      <ul>
        <li>Đào tạo tài xế về cách vận hành xe đúng cách</li>
        <li>Không chở quá tải trọng cho phép</li>
        <li>Sử dụng phụ tùng chính hãng khi thay thế</li>
        <li>Lựa chọn gara, trung tâm bảo dưỡng uy tín</li>
        <li>Lưu giữ sổ bảo dưỡng đầy đủ</li>
      </ul>
      
      <p>Bảo dưỡng xe tải đúng cách không chỉ giúp tiết kiệm chi phí lâu dài mà còn đảm bảo an toàn cho người lái và những người tham gia giao thông khác. Hãy coi việc bảo dưỡng xe là một khoản đầu tư chứ không phải chi phí!</p>
    `,
    category: 'maintenance',
    images: [
      'https://tongkhoxetai.vn/upload/images/blog/bao-duong-xe-tai.jpg',
      'https://tongkhoxetai.vn/upload/images/blog/sua-chua-xe-tai.jpg'
    ],
    publishDate: Date.now() - 20 * 24 * 60 * 60 * 1000, // 20 days ago
    readTime: 11,
    author: 'Phạm Văn D'
  }
];
