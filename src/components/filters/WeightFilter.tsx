
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
          defaultValue={[0, 20]}
          max={20}
          step={0.5}
          value={weightRange}
          onValueChange={onWeightChange}
          className="mb-6"
        />
        <div className="flex justify-between text-sm">
          <span>{weightRange[0]} tấn</span>
          <span>{weightRange[1]} tấn</span>
        </div>
      </div>
    </div>
  );
};
