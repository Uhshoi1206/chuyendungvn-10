
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { CreditCard } from 'lucide-react';

const LoanCalculatorPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Tính Lãi Suất Vay Mua Xe - ChuyenDungVN</title>
        <meta 
          name="description" 
          content="Công cụ tính lãi suất vay mua xe tải, xe cẩu, mooc và xe đầu kéo. Hỗ trợ tính toán gói vay phù hợp." 
        />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <CreditCard className="h-12 w-12 text-primary mr-3" />
              <h1 className="text-3xl font-bold text-gray-800">Tính Lãi Suất Vay Mua Xe</h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Công cụ hỗ trợ tính toán lãi suất và kế hoạch trả góp cho xe tải, xe cẩu, sơ mi rơ mooc và xe đầu kéo
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Thông Tin Lãi Suất Hiện Tại</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">Lãi Suất Ưu Đãi</h3>
                  <p className="text-2xl font-bold text-green-600">8.5% - 12%</p>
                  <p className="text-sm text-green-700">Áp dụng cho khách hàng có ưu đãi</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Thời Gian Vay</h3>
                  <p className="text-2xl font-bold text-blue-600">1 - 7 năm</p>
                  <p className="text-sm text-blue-700">Linh hoạt theo nhu cầu khách hàng</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-800 mb-2">Tỷ Lệ Vay Tối Đa</h3>
                  <p className="text-2xl font-bold text-purple-600">85%</p>
                  <p className="text-sm text-purple-700">Trả trước tối thiểu 15%</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h3 className="font-semibold text-orange-800 mb-2">Phương Thức Trả</h3>
                  <p className="text-lg font-bold text-orange-600">Gốc giảm dần</p>
                  <p className="text-sm text-orange-700">Hoặc gốc + lãi cố định</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Điều Kiện Vay</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Hồ Sơ Cần Thiết</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    CMND/CCCD, Hộ khẩu
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Giấy đăng ký kinh doanh (nếu có)
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Chứng minh thu nhập
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Bảng kê tài sản đảm bảo
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">Yêu Cầu Khách Hàng</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Tuổi từ 18 - 65 tuổi
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Có thu nhập ổn định
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Không nợ xấu tại CIC
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Có tài sản đảm bảo
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-yellow-800">Ưu Đãi Đặc Biệt</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">0%</div>
                <p className="text-yellow-700">Phí thẩm định</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">24h</div>
                <p className="text-yellow-700">Thời gian duyệt hồ sơ</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">100%</div>
                <p className="text-yellow-700">Hỗ trợ thủ tục</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">Cần Tư Vấn Gói Vay?</h3>
              <p className="text-gray-600 mb-4">Liên hệ ngay để được hỗ trợ tính toán và tư vấn gói vay phù hợp</p>
              <a 
                href="tel:0764678901"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <CreditCard className="mr-2 h-5 w-5" />
                Gọi ngay: 0764 678 901
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoanCalculatorPage;
