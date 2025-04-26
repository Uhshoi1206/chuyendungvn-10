
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

  // MOBILE: hiển thị dạng lưới dễ bấm
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
                className={`py-3 rounded-xl font-bold text-base transition-all border-2 w-full
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

  // DESKTOP: tab giãn đều 4 phần, phân cách rõ với nội dung phía dưới
  return (
    <div className="w-full mb-4 px-1">
      <div className="w-full rounded-2xl shadow-lg bg-white border border-gray-200">
        <Tabs
          value={selectedType}
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList
            className="
              flex w-full p-0 overflow-hidden rounded-2xl bg-transparent
              "
          >
            {vehicleTabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={`
                  flex-1 flex items-center justify-center py-4 rounded-none font-bold text-base
                  border-b-2 border-transparent transition-all duration-200
                  ${selectedType === tab.value
                    ? `${tab.color} ${tab.bg} shadow-md z-10 border-b-4 ${tab.border}`
                    : 'text-gray-700 bg-white hover:bg-gray-50'
                  }
                  whitespace-nowrap
                `}
                style={{
                  borderRadius: 0,
                  borderLeft: '1px solid #eee',
                }}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default VehicleTypeTabs;
