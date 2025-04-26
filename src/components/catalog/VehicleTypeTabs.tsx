
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { VehicleType } from '@/models/TruckTypes';
import { Truck, TrainFront, TramFront, Car } from 'lucide-react';

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
    icon: <Truck className="w-6 h-6 mb-1" />,
    color: 'bg-blue-100 text-blue-700',
  },
  {
    value: 'crane',
    label: 'Cẩu',
    icon: <TramFront className="w-6 h-6 mb-1" />,
    color: 'bg-yellow-100 text-yellow-700',
  },
  {
    value: 'trailer',
    label: 'Mooc',
    icon: <TrainFront className="w-6 h-6 mb-1" />,
    color: 'bg-orange-100 text-orange-700',
  },
  {
    value: 'tractor',
    label: 'Xe Đầu Kéo',
    icon: <Car className="w-6 h-6 mb-1" />,
    color: 'bg-purple-100 text-purple-700',
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
        <TabsList className="
          flex flex-nowrap overflow-auto sm:grid sm:grid-cols-4 w-full
          bg-gray-50 rounded-xl shadow-inner border mb-3
          px-1 py-2
          ">
          {vehicleTabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={`
                flex flex-col items-center justify-center px-3 py-2
                min-w-[88px] sm:min-w-0 rounded-lg
                font-semibold text-sm transition-all duration-200
                border-2 border-transparent
                hover:scale-105
                ${selectedType === tab.value
                  ? `${tab.color} shadow-md scale-105 border-primary animate-pulse`
                  : 'text-gray-600 bg-white hover:bg-gray-100'
                }
              `}
              style={{
                marginRight: 6,
              }}
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
