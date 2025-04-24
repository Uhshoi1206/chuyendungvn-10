
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { VehicleType } from '@/models/TruckTypes';

interface VehicleTypeTabsProps {
  selectedType: VehicleType;
  onTypeChange: (value: VehicleType) => void;
}

const VehicleTypeTabs: React.FC<VehicleTypeTabsProps> = ({ selectedType, onTypeChange }) => {
  const handleTabChange = (value: string) => {
    onTypeChange(value as VehicleType);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <Tabs
        defaultValue={selectedType}
        value={selectedType}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="truck">Xe Tải</TabsTrigger>
          <TabsTrigger value="trailer">Sơ Mi Rơ Mooc</TabsTrigger>
          <TabsTrigger value="tractor">Xe Đầu Kéo</TabsTrigger>
          <TabsTrigger value="crane">Cẩu</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default VehicleTypeTabs;
