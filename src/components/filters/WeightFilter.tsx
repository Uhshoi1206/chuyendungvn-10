
import React from 'react';
import { Slider } from '@/components/ui/slider';

interface WeightFilterProps {
  weightRange: number[];
  onWeightChange: (value: number[]) => void;
}

export const WeightFilter: React.FC<WeightFilterProps> = ({
  weightRange,
  onWeightChange,
}) => {
  return (
    <div>
      <h3 className="text-base font-medium mb-2">Tải trọng</h3>
      <div className="px-2">
        <Slider
          defaultValue={[0, 25]}
          max={25}
          step={0.5}
          value={weightRange}
          onValueChange={onWeightChange}
          className="mb-6"
        />
        <div className="flex justify-between text-sm">
          <span>{weightRange[0]} tấn</span>
          <span>{weightRange[1] >= 25 ? "25+ tấn" : `${weightRange[1]} tấn`}</span>
        </div>
        
        {/* Hiển thị thông tin chi tiết về phạm vi tải trọng đang chọn */}
        <div className="text-xs text-muted-foreground mt-2 text-center">
          Đang chọn: {weightRange[0]} - {weightRange[1] >= 25 ? "trên 20" : weightRange[1]} tấn
        </div>
      </div>
    </div>
  );
};
