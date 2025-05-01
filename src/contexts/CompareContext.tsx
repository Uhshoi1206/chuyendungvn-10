
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Truck } from '@/models/TruckTypes';
import { toast } from '@/components/ui/use-toast';

interface CompareContextType {
  compareItems: Truck[];
  addToCompare: (truck: Truck) => void;
  removeFromCompare: (truckId: string) => void;
  clearCompare: () => void;
  isInCompare: (truckId: string) => boolean;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

const MAX_COMPARE_ITEMS = 3;
const STORAGE_KEY = 'xetaiviet_compare_items';

export const CompareProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [compareItems, setCompareItems] = useState<Truck[]>([]);

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
    setCompareItems(prev => [...prev, truck]);
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
  };

  const isInCompare = (truckId: string) => {
    return compareItems.some(item => item.id === truckId);
  };

  return (
    <CompareContext.Provider value={{ 
      compareItems, 
      addToCompare, 
      removeFromCompare, 
      clearCompare, 
      isInCompare 
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
