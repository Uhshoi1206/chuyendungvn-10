
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { Calculator } from 'lucide-react';

const CostEstimationPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Dự Toán Chi Phí Lăn Bánh - ChuyenDungVN</title>
        <meta 
          name="description" 
          content="Công cụ dự toán chi phí lăn bánh xe tải, xe cẩu, mooc và xe đầu kéo. Tính toán chính xác các khoản phí cần thiết." 
        />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Calculator className="h-12 w-12 text-primary mr-3" />
              <h1 className="text-3xl font-bold text-gray-800">Dự Toán Chi Phí Lăn Bánh</h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Công cụ hỗ trợ tính toán chi phí lăn bánh cho xe tải, xe cẩu, sơ mi rơ mooc và xe đầu kéo
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Các Khoản Chi Phí Lăn Bánh</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-gray-700">Phí Trước Bạ</h3>
                  <p className="text-sm text-gray-600">10-12% giá trị xe tùy loại xe</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-gray-700">Bảo Hiểm Bắt Buộc</h3>
                  <p className="text-sm text-gray-600">Từ 600.000 - 1.500.000 VND</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-gray-700">Phí Đăng Ký</h3>
                  <p className="text-sm text-gray-600">20.000 - 50.000 VND</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-gray-700">Phí Đăng Kiểm</h3>
                  <p className="text-sm text-gray-600">340.000 - 540.000 VND</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-gray-700">Phí Biển Số</h3>
                  <p className="text-sm text-gray-600">2.000.000 - 5.000.000 VND</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-gray-700">Chi Phí Khác</h3>
                  <p className="text-sm text-gray-600">500.000 - 1.000.000 VND</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">Lưu Ý Quan Trọng</h2>
            <ul className="space-y-2 text-blue-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Chi phí có thể thay đổi theo địa phương và thời điểm
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Phí trước bạ áp dụng khác nhau cho từng loại xe
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Một số xe được miễn giảm phí trước bạ theo chính sách
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Liên hệ với chúng tôi để được tư vấn chi tiết
              </li>
            </ul>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">Cần Tư Vấn Chi Tiết?</h3>
              <p className="text-gray-600 mb-4">Liên hệ ngay với chúng tôi để được báo giá chính xác</p>
              <a 
                href="tel:0764678901"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Gọi ngay: 0764 678 901
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CostEstimationPage;
