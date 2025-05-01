
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Truck } from '@/models/TruckTypes';
import { toast } from '@/components/ui/use-toast';
import { useNavigate, useLocation } from 'react-router-dom';

interface CompareContextType {
  compareItems: Truck[];
  addToCompare: (truck: Truck) => void;
  removeFromCompare: (truckId: string) => void;
  clearCompare: () => void;
  isInCompare: (truckId: string) => boolean;
  generateCompareUrl: () => string;
  loadTrucksFromUrl: (trucksParam: string) => void;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

const MAX_COMPARE_ITEMS = 3;
const STORAGE_KEY = 'xetaiviet_compare_items';

export const CompareProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [compareItems, setCompareItems] = useState<Truck[]>([]);
  
  // Đảm bảo hooks này chỉ được gọi trong context của Router
  const navigate = useNavigate();
  const location = useLocation();
  
  // Load từ localStorage khi khởi tạo
  useEffect(() => {
    const storedItems = localStorage.getItem(STORAGE_KEY);
    if (storedItems) {
      try {
        setCompareItems(JSON.parse(storedItems));
      } catch (error) {
        console.error("Không thể đọc dữ liệu so sánh từ localStorage:", error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  // Lưu vào localStorage mỗi khi có thay đổi
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(compareItems));
  }, [compareItems]);
  
  // Cập nhật URL khi danh sách xe so sánh thay đổi và nếu đang ở trang so sánh
  useEffect(() => {
    if (location.pathname.startsWith('/so-sanh-xe') && compareItems.length > 0) {
      const compareUrl = generateCompareUrl();
      // Chỉ chuyển hướng nếu URL khác với URL hiện tại
      if (location.pathname !== compareUrl) {
        navigate(compareUrl, { replace: true });
      }
    }
  }, [compareItems, location.pathname]);

  const addToCompare = (truck: Truck) => {
    // Kiểm tra xe đã có trong danh sách chưa
    if (isInCompare(truck.id)) {
      toast({
        title: "Thông báo",
        description: `${truck.name} đã có trong danh sách so sánh`,
      });
      return;
    }

    // Kiểm tra đã đạt giới hạn chưa
    if (compareItems.length >= MAX_COMPARE_ITEMS) {
      toast({
        title: "Thông báo",
        description: `Bạn chỉ có thể so sánh tối đa ${MAX_COMPARE_ITEMS} xe cùng lúc`,
        variant: "destructive"
      });
      return;
    }

    // Thêm xe vào danh sách so sánh
    const newCompareItems = [...compareItems, truck];
    setCompareItems(newCompareItems);
    
    toast({
      title: "Thêm thành công",
      description: `Đã thêm ${truck.name} vào danh sách so sánh`,
    });
  };

  const removeFromCompare = (truckId: string) => {
    setCompareItems(prev => prev.filter(item => item.id !== truckId));
    toast({
      title: "Đã xóa",
      description: "Đã xóa xe khỏi danh sách so sánh",
    });
  };

  const clearCompare = () => {
    setCompareItems([]);
    toast({
      title: "Đã xóa tất cả",
      description: "Danh sách so sánh đã được làm trống",
    });
    // Nếu đang ở trang so sánh, điều hướng về trang so sánh trống
    if (location.pathname.startsWith('/so-sanh-xe')) {
      navigate('/so-sanh-xe', { replace: true });
    }
  };

  const isInCompare = (truckId: string) => {
    return compareItems.some(item => item.id === truckId);
  };
  
  // Tạo URL so sánh xe thân thiện với SEO
  const generateCompareUrl = () => {
    if (compareItems.length === 0) return '/so-sanh-xe';
    
    // Tạo đoạn URL từ slug của các xe
    const trucksSlug = compareItems
      .map(truck => truck.slug)
      .join('-vs-');
      
    return `/so-sanh-xe/${trucksSlug}`;
  };
  
  // Tải danh sách xe từ tham số URL
  const loadTrucksFromUrl = (trucksParam: string) => {
    // Hàm này sẽ được thực hiện trong trang ComparePage
    console.log("Đang tải xe từ URL param:", trucksParam);
  };

  return (
    <CompareContext.Provider value={{ 
      compareItems, 
      addToCompare, 
      removeFromCompare, 
      clearCompare, 
      isInCompare,
      generateCompareUrl,
      loadTrucksFromUrl
    }}>
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
};
