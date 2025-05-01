
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import CompareTable from '@/components/compare/CompareTable';
import CompareEmptyState from '@/components/compare/CompareEmptyState';
import { useCompare } from '@/contexts/CompareContext';
import { trucks } from '@/data/truckData';
import { Truck } from '@/models/TruckTypes';

const ComparePage = () => {
  const { trucks: trucksParam } = useParams<{ trucks?: string }>();
  const { compareItems, loadTrucksFromUrl } = useCompare();
  
  useEffect(() => {
    document.title = "So Sánh Xe | XeTaiViet - Chuyên Xe Tải, Cẩu, Mooc & Đầu Kéo";
  }, []);
  
  // Khi URL có tham số trucks, tải xe từ URL
  useEffect(() => {
    if (trucksParam) {
      loadTrucksFromUrlParam(trucksParam);
    }
  }, [trucksParam]);
  
  // Hàm tải xe từ URL param
  const loadTrucksFromUrlParam = (param: string) => {
    // Tách các slug xe từ URL
    const truckSlugs = param.split('-vs-');
    
    // Nếu không có slug nào, không cần xử lý
    if (truckSlugs.length === 0) return;
    
    // Nếu số lượng xe trong danh sách so sánh đã bằng với số lượng slug, kiểm tra xem có cùng slug không
    if (compareItems.length === truckSlugs.length) {
      const allSlugsMatch = truckSlugs.every(slug => 
        compareItems.some(item => item.slug === slug)
      );
      
      // Nếu tất cả slug đều khớp, không cần tải lại
      if (allSlugsMatch) return;
    }
    
    // Tìm các xe từ dữ liệu có slug khớp với URL
    const trucksFromUrl: Truck[] = [];
    truckSlugs.forEach(slug => {
      const truck = trucks.find(t => t.slug === slug);
      if (truck) {
        trucksFromUrl.push(truck);
      }
    });
    
    // Nếu tìm thấy ít nhất một xe, cập nhật danh sách so sánh
    if (trucksFromUrl.length > 0) {
      // Sử dụng localStorage trực tiếp để tránh vòng lặp vô hạn với useEffect
      localStorage.setItem('xetaiviet_compare_items', JSON.stringify(trucksFromUrl));
      // Tải lại trang để cập nhật state từ localStorage
      window.location.reload();
    }
  };

  return (
    <Layout>
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">So Sánh Xe</h1>
          <p className="text-gray-300">
            So sánh chi tiết các thông số kỹ thuật, giá cả và tính năng của các phương tiện thương mại
          </p>
        </div>
      </div>

      <div className="container mx-auto my-12 px-4">
        {compareItems.length > 0 ? (
          <CompareTable trucks={compareItems} />
        ) : (
          <CompareEmptyState />
        )}
      </div>
    </Layout>
  );
};

export default ComparePage;

