
import React from 'react';
import { Button } from '@/components/ui/button';
import { useCompare } from '@/contexts/CompareContext';
import { Truck } from '@/models/TruckTypes';
import { GitCompare } from 'lucide-react';

interface CompareButtonProps {
  truck: Truck;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

const CompareButton: React.FC<CompareButtonProps> = ({ 
  truck, 
  variant = "outline", 
  size = "sm",
  className = ""
}) => {
  const { addToCompare, removeFromCompare, isInCompare } = useCompare();
  const isAdded = isInCompare(truck.id);

  const handleClick = () => {
    if (isAdded) {
      removeFromCompare(truck.id);
    } else {
      addToCompare(truck);
    }
  };

  return (
    <Button
      variant={isAdded ? "default" : variant}
      size={size}
      onClick={handleClick}
      className={`flex items-center gap-2 ${isAdded ? 'bg-primary hover:bg-primary-600 text-white' : ''} ${className}`}
    >
      <GitCompare className="h-4 w-4" />
      <span>{isAdded ? 'Đã thêm vào so sánh' : 'Thêm vào so sánh'}</span>
    </Button>
  );
};

export default CompareButton;
