import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, MessageCircle, Tiktok } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">XeTaiViet</h3>
            <p className="mb-4 text-gray-300">
              Chuyên cung cấp các dòng xe tải chất lượng cao, đa dạng tải trọng, 
              giá cả cạnh tranh trên thị trường.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span>0123.456.789</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span>contact@xetaiviet.vn</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-primary mt-1" />
                <span>123 Đường Quốc Lộ 1A, Quận Bình Tân, TP. Hồ Chí Minh</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/danh-muc" className="text-gray-300 hover:text-primary transition-colors">
                  Danh mục xe tải
                </Link>
              </li>
              <li>
                <Link to="/gioi-thieu" className="text-gray-300 hover:text-primary transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/lien-he" className="text-gray-300 hover:text-primary transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Vehicle Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Danh mục xe</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/danh-muc?type=truck" className="text-gray-300 hover:text-primary transition-colors">
                  Xe Tải
                </Link>
              </li>
              <li>
                <Link to="/danh-muc?type=crane" className="text-gray-300 hover:text-primary transition-colors">
                  Cẩu
                </Link>
              </li>
              <li>
                <Link to="/danh-muc?type=trailer" className="text-gray-300 hover:text-primary transition-colors">
                  Sơ Mi Rơ Mooc
                </Link>
              </li>
              <li>
                <Link to="/danh-muc?type=tractor" className="text-gray-300 hover:text-primary transition-colors">
                  Xe Đầu Kéo
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social Media */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Đăng ký nhận tin</h3>
              <p className="mb-4 text-gray-300">
                Đăng ký để nhận thông tin mới nhất về sản phẩm và khuyến mãi.
              </p>
              <form className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Địa chỉ email của bạn"
                  className="px-4 py-2 rounded-md text-gray-900"
                />
                <button type="submit" className="btn-primary">
                  Đăng ký
                </button>
              </form>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Kết nối với chúng tôi</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1877F2] p-2 rounded-full hover:bg-[#1865D3] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://m.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0099FF] p-2 rounded-full hover:bg-[#0088EE] transition-colors"
                  aria-label="Messenger"
                >
                  <MessageCircle className="h-6 w-6" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#000000] p-2 rounded-full hover:bg-[#333333] transition-colors"
                  aria-label="TikTok"
                >
                  <Tiktok className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-gray-400">© 2024 XeTaiViet. Tất cả các quyền được bảo lưu.</p>
            <div className="flex space-x-4">
              <Link to="/chinh-sach-bao-mat" className="text-gray-400 hover:text-primary">
                Chính sách bảo mật
              </Link>
              <Link to="/dieu-khoan-su-dung" className="text-gray-400 hover:text-primary">
                Điều khoản sử dụng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
