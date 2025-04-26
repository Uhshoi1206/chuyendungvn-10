
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { VehicleType } from '@/models/TruckTypes';

interface VehicleTypeTabsProps {
  selectedType: VehicleType;
  onTypeChange: (value: VehicleType) => void;
}

type TabInfo = {
  value: VehicleType;
  label: string;
  color: string;
};

const vehicleTabs: TabInfo[] = [
  {
    value: 'truck',
    label: 'Xe Tải',
    color: 'border-blue-500 text-blue-700 bg-blue-100',
  },
  {
    value: 'crane',
    label: 'Xe Cẩu',
    color: 'border-orange-500 text-orange-700 bg-orange-100',
  },
  {
    value: 'trailer',
    label: 'Mooc',
    color: 'border-purple-500 text-purple-700 bg-purple-100',
  },
  {
    value: 'tractor',
    label: 'Đầu Kéo',
    color: 'border-red-500 text-red-700 bg-red-100',
  },
];

const VehicleTypeTabs: React.FC<VehicleTypeTabsProps> = ({ selectedType, onTypeChange }) => {
  const handleTabChange = (value: string) => {
    onTypeChange(value as VehicleType);
  };

  return (
    <div className="w-full flex justify-center mb-4 px-1">
      <Tabs
        value={selectedType}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <TabsList
          className="
            flex flex-nowrap overflow-x-auto gap-2 bg-white rounded-xl shadow-inner border px-1 py-2
            scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent
          "
        >
          {vehicleTabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={`
                flex items-center justify-center px-4 py-2
                min-w-[96px] rounded-lg font-bold text-base
                border-2 border-transparent
                transition-all duration-200 hover:scale-105
                ${selectedType === tab.value
                  ? `${tab.color} shadow-md scale-105 border`
                  : 'text-gray-700 bg-gray-50'
                }
                whitespace-nowrap
              `}
              style={{ marginRight: 2 }}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default VehicleTypeTabs;
