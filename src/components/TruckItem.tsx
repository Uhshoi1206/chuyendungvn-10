
import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, getVehicleUrlPrefix } from '@/models/TruckTypes';
import { Badge } from '@/components/ui/badge';
import CompareButton from './CompareButton';

interface TruckItemProps {
  truck: Truck;
}

const TruckItem = ({ truck }: TruckItemProps) => {
  const vehicleUrlPrefix = getVehicleUrlPrefix(truck.type);
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col">
      <div className="relative">
        <Link to={`/${vehicleUrlPrefix}/${truck.slug}`}>
          <img 
            src={truck.thumbnailUrl} 
            alt={truck.name} 
            className="w-full h-48 object-cover"
          />
        </Link>
        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
          {truck.isNew && (
            <Badge className="bg-blue-500 hover:bg-blue-600">Mới</Badge>
          )}
          {truck.isHot && (
            <Badge className="bg-red-500 hover:bg-red-600">Hot</Badge>
          )}
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <div>
          <span className="text-gray-500 text-sm">{truck.brand}</span>
          <Link to={`/${vehicleUrlPrefix}/${truck.slug}`}>
            <h3 className="font-bold text-lg mb-2 hover:text-red-600 transition-colors line-clamp-2">
              {truck.name}
            </h3>
          </Link>
        </div>
        
        <div className="mt-auto pt-4">
          <div className="text-sm text-gray-600 mb-2">
            <div className="flex justify-between mb-1">
              <span>Tải trọng:</span>
              <span className="font-medium">{truck.weightText}</span>
            </div>
            <div className="flex justify-between">
              <span>Kích thước:</span>
              <span className="font-medium">{truck.length} m</span>
            </div>
          </div>
          
          <div className="text-red-600 font-bold text-lg mt-2 mb-3">
            {truck.priceText}
          </div>

          <div className="mt-2">
            <CompareButton truck={truck} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckItem;
