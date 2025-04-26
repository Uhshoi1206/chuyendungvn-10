
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { VehicleType } from '@/models/TruckTypes';
import { Truck, Bus, CableCar } from 'lucide-react';

interface VehicleTypeTabsProps {
  selectedType: VehicleType;
  onTypeChange: (value: VehicleType) => void;
}

type TabInfo = {
  value: VehicleType;
  label: string;
  icon: React.ReactNode;
  color: string;
};

const vehicleTabs: TabInfo[] = [
  {
    value: 'truck',
    label: 'Xe Tải',
    icon: <Truck size={28} className="mb-1" color="#0EA5E9" />, // Xanh biển
    color: 'border-blue-500 text-blue-700 bg-blue-100',
  },
  {
    value: 'crane',
    label: 'Xe Cẩu',
    icon: <CableCar size={28} className="mb-1" color="#F97316" />, // Da cam - dùng CableCar đại diện
    color: 'border-orange-500 text-orange-700 bg-orange-100',
  },
  {
    value: 'trailer',
    label: 'Mooc',
    icon: <Bus size={28} className="mb-1" color="#9b87f5" />, // Tím - dùng Bus đại diện
    color: 'border-purple-500 text-purple-700 bg-purple-100',
  },
  {
    value: 'tractor',
    label: 'Đầu Kéo',
    icon: <Truck size={28} className="mb-1" color="#ea384c" />, // Đỏ, dùng lại Truck
    color: 'border-red-500 text-red-700 bg-red-100',
  },
];

const VehicleTypeTabs: React.FC<VehicleTypeTabsProps> = ({ selectedType, onTypeChange }) => {
  const handleTabChange = (value: string) => {
    onTypeChange(value as VehicleType);
  };

  return (
    <div className="w-full flex justify-center mb-4 px-2">
      <Tabs
        defaultValue={selectedType}
        value={selectedType}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <TabsList
          className="flex flex-nowrap overflow-x-auto gap-2 bg-white rounded-xl shadow-inner border px-1 py-2"
        >
          {vehicleTabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={`
                flex flex-col items-center justify-center px-3 py-2
                min-w-[92px] rounded-lg font-semibold text-sm
                border-2 border-transparent
                transition-all duration-200 hover:scale-105 hover:bg-gray-100
                ${selectedType === tab.value
                  ? `${tab.color} shadow-md scale-105`
                  : 'text-gray-700 bg-gray-50'
                }
              `}
              style={{ marginRight: 2 }}
            >
              {tab.icon}
              <span className="mt-0.5">{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default VehicleTypeTabs;

