
import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { VehicleType } from '@/models/TruckTypes';

interface VehicleTypeFilterProps {
  selectedType: VehicleType | null;
  onTypeChange: (value: VehicleType | null) => void;
}

const vehicleTypes: { value: VehicleType; label: string }[] = [
  { value: 'xe-tai', label: 'Xe Tải' },
  { value: 'xe-cau', label: 'Cẩu' },
  { value: 'mooc', label: 'Sơ Mi Rơ Mooc' },
  { value: 'dau-keo', label: 'Xe Đầu Kéo' },
];

export const VehicleTypeFilter: React.FC<VehicleTypeFilterProps> = ({
  selectedType,
  onTypeChange,
}) => {
  return (
    <div className="space-y-4">
      <Label className="text-base font-medium">Loại xe</Label>
      <RadioGroup
        value={selectedType || ''}
        onValueChange={(value) => {
          const newValue = value as VehicleType | '';
          onTypeChange(newValue || null);
        }}
      >
        {vehicleTypes.map((type) => (
          <div key={type.value} className="flex items-center space-x-2">
            <RadioGroupItem value={type.value} id={`type-${type.value}`} />
            <Label htmlFor={`type-${type.value}`}>{type.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
