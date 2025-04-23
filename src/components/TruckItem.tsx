
import React from 'react';
import { Truck } from '@/models/TruckTypes';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

interface TruckItemProps {
  truck: Truck;
}

const TruckItem: React.FC<TruckItemProps> = ({ truck }) => {
  return (
    <Link to={`/xe-tai/${truck.slug}`} className="block">
      <Card className="overflow-hidden h-full card-hover">
        <div className="relative">
          <img 
            src={truck.thumbnailUrl} 
            alt={truck.name}
            className="w-full aspect-[4/3] object-cover"
          />
          <div className="absolute top-2 left-2 flex space-x-2">
            {truck.isNew && (
              <Badge className="bg-blue-500 hover:bg-blue-600">Mới</Badge>
            )}
            {truck.isHot && (
              <Badge className="bg-primary hover:bg-red-700">Hot</Badge>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3">
            <div className="font-bold text-sm">{truck.brand}</div>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-lg mb-2 line-clamp-2">{truck.name}</h3>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Tải trọng:</span>
              <span className="font-medium">{truck.weightText}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Thùng dài:</span>
              <span className="font-medium">{truck.length} m</span>
            </div>
            <div className="text-primary font-bold text-lg mt-1">{truck.priceText}</div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TruckItem;
