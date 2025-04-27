
import React, { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { trucks } from '@/data/truckData';

interface WeightFilterProps {
  weightRange: number[];
  onWeightChange: (value: number[]) => void;
}

// Tính toán giá trị tối đa của tải trọng từ dữ liệu xe
const calculateMaxWeight = (): number => {
  let maxWeight = 0;
  trucks.forEach(truck => {
    if (truck.weight > maxWeight) {
      maxWeight = truck.weight;
    }
  });
  
  // Làm tròn lên 5 tấn gần nhất để có khoảng giá trị đẹp hơn
  return Math.ceil(maxWeight / 5) * 5;
};

// Lưu trữ giá trị tải trọng tối đa để tránh tính toán lại
const MAX_WEIGHT = calculateMaxWeight();

export const WeightFilter: React.FC<WeightFilterProps> = ({
  weightRange,
  onWeightChange,
}) => {
  // Theo dõi xem đã có filter nào được áp dụng chưa
  const [isFiltered, setIsFiltered] = useState(false);
  
  useEffect(() => {
    // Kiểm tra nếu giá trị hiện tại khác với giá trị mặc định
    if (weightRange[0] > 0 || weightRange[1] < MAX_WEIGHT) {
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
    }
  }, [weightRange]);
  
  // Hiển thị tên phạm vi tải trọng dựa trên giá trị đã chọn
  const getWeightRangeLabel = () => {
    // Nếu chưa có filter nào được áp dụng, trả về trạng thái mặc định
    if (!isFiltered && weightRange[0] === 0 && weightRange[1] >= MAX_WEIGHT) {
      return "Tất cả tải trọng";
    }
    
    if (weightRange[0] === 0 && weightRange[1] <= 1) {
      return "Dưới 1 tấn";
    } else if (weightRange[0] >= 1 && weightRange[1] <= 2) {
      return "1 - 2 tấn";
    } else if (weightRange[0] >= 2 && weightRange[1] <= 3.5) {
      return "2 - 3.5 tấn";
    } else if (weightRange[0] >= 3.5 && weightRange[1] <= 5) {
      return "3.5 - 5 tấn";
    } else if (weightRange[0] >= 5 && weightRange[1] <= 8) {
      return "5 - 8 tấn";
    } else if (weightRange[0] >= 8 && weightRange[1] <= 15) {
      return "8 - 15 tấn";
    } else if (weightRange[0] >= 15 && weightRange[1] <= 20) {
      return "15 - 20 tấn";
    } else if (weightRange[0] >= 20) {
      return "Trên 20 tấn";
    } else {
      return `${weightRange[0]} - ${weightRange[1]} tấn`;
    }
  };

  return (
    <div>
      <h3 className="text-base font-medium mb-2">Tải trọng</h3>
      <div className="px-2">
        <Slider
          defaultValue={[0, MAX_WEIGHT]}
          max={MAX_WEIGHT}
          step={0.5}
          value={weightRange}
          onValueChange={onWeightChange}
          className="mb-6"
        />
        <div className="flex justify-between text-sm">
          <span>{weightRange[0]} tấn</span>
          <span>{weightRange[1] >= MAX_WEIGHT ? `Trên ${MAX_WEIGHT} tấn` : `${weightRange[1]} tấn`}</span>
        </div>
        
        {/* Hiển thị thông tin chi tiết về phạm vi tải trọng đang chọn */}
        <div className="text-xs text-muted-foreground mt-2 text-center font-medium">
          Đang chọn: <span className="text-primary">{getWeightRangeLabel()}</span>
        </div>
      </div>
    </div>
  );
};
