
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { VehicleType } from '@/models/TruckTypes';
import { useIsMobile } from '@/hooks/use-mobile';

interface VehicleTypeTabsProps {
  selectedType: VehicleType;
  onTypeChange: (value: VehicleType) => void;
}

type TabInfo = {
  value: VehicleType;
  label: string;
  color: string;
  border: string;
  bg: string;
};

const vehicleTabs: TabInfo[] = [
  {
    value: 'truck',
    label: 'Xe Tải',
    color: 'text-blue-800',
    border: 'border-blue-400',
    bg: 'bg-blue-100',
  },
  {
    value: 'crane',
    label: 'Xe Cẩu',
    color: 'text-orange-700',
    border: 'border-orange-400',
    bg: 'bg-orange-100',
  },
  {
    value: 'trailer',
    label: 'Mooc',
    color: 'text-purple-700',
    border: 'border-purple-400',
    bg: 'bg-purple-100',
  },
  {
    value: 'tractor',
    label: 'Đầu Kéo',
    color: 'text-red-700',
    border: 'border-red-400',
    bg: 'bg-red-100',
  },
];

const VehicleTypeTabs: React.FC<VehicleTypeTabsProps> = ({ selectedType, onTypeChange }) => {
  const isMobile = useIsMobile();

  const handleTabChange = (value: string) => {
    onTypeChange(value as VehicleType);
  };

  // MOBILE: hiển thị dạng nút lưới dễ bấm
  if (isMobile) {
    return (
      <div className="w-full flex justify-center mb-3 px-1">
        <div className="grid grid-cols-2 gap-2 w-full max-w-xs mx-auto">
          {vehicleTabs.map(tab => {
            const isActive = selectedType === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => handleTabChange(tab.value)}
                className={`py-3 rounded-xl font-bold text-base transition-all border-2
                  ${isActive ? `shadow-lg ${tab.color} ${tab.bg} ${tab.border}` : 'bg-gray-50 text-gray-700 border-transparent'}
                `}
                style={{ minWidth: 0 }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // DESKTOP: giữ dạng tab bấm truyền thống
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
                flex items-center justify-center px-4 py-2 min-w-[96px] rounded-lg font-bold text-base 
                border-2 border-transparent transition-all duration-200 hover:scale-105
                ${selectedType === tab.value
                  ? `${tab.color} ${tab.bg} shadow-md scale-105 border ${tab.border}`
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

