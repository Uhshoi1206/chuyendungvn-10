
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TruckItem from '@/components/TruckItem';
import { Truck, VehicleType } from '@/models/TruckTypes';

interface VehicleSectionProps {
  title: string;
  description: string;
  vehicles: Truck[];
  type: VehicleType;
  linkText: string;
  className?: string;
}

const VehicleSection = ({
  title,
  description,
  vehicles,
  type,
  linkText,
  className = ''
}: VehicleSectionProps) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vehicles.map(vehicle => (
            <TruckItem key={vehicle.id} truck={vehicle} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" className="px-6">
            <Link to={`/danh-muc?type=${type}`}>{linkText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VehicleSection;
