
import React from 'react';
import { Truck, getVehicleTypeName } from '@/models/TruckTypes';
import { Button } from '@/components/ui/button';
import { useCompare } from '@/contexts/CompareContext';
import { X, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CompareTableProps {
  trucks: Truck[];
}

// Định nghĩa các nhóm thông số kỹ thuật và thứ tự hiển thị
const specGroups = [
  {
    id: 'basic',
    title: 'Thông số cơ bản',
    specs: [
      { id: 'brand', label: 'Thương hiệu' },
      { id: 'weightText', label: 'Tải trọng' },
      { id: 'dimensions', label: 'Kích thước tổng thể' },
      { id: 'price', label: 'Giá bán', isPrice: true },
      { id: 'origin', label: 'Xuất xứ' },
    ]
  },
  {
    id: 'engine',
    title: 'Động cơ & Vận hành',
    specs: [
      { id: 'engineType', label: 'Loại động cơ' },
      { id: 'engineCapacity', label: 'Dung tích động cơ' },
      { id: 'horsePower', label: 'Công suất' },
      { id: 'torque', label: 'Mô-men xoắn' },
      { id: 'transmission', label: 'Hộp số' },
      { id: 'fuelConsumption', label: 'Mức tiêu thụ nhiên liệu' },
      { id: 'emission', label: 'Tiêu chuẩn khí thải' },
    ]
  },
  {
    id: 'dimensions',
    title: 'Kích thước & Trọng lượng',
    specs: [
      { id: 'length', label: 'Chiều dài', unit: 'm' },
      { id: 'width', label: 'Chiều rộng', unit: 'm' },
      { id: 'height', label: 'Chiều cao', unit: 'm' },
      { id: 'wheelbase', label: 'Chiều dài cơ sở', unit: 'm' },
      { id: 'payload', label: 'Tải trọng' },
    ]
  },
  {
    id: 'other',
    title: 'Thông tin khác',
    specs: [
      { id: 'seats', label: 'Số chỗ ngồi' },
      { id: 'warranty', label: 'Bảo hành' },
      { id: 'year', label: 'Năm sản xuất' },
    ]
  }
];

const CompareTable: React.FC<CompareTableProps> = ({ trucks }) => {
  const { removeFromCompare, clearCompare } = useCompare();

  // Hàm format giá tiền
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0
    }).format(price);
  };

  // Hàm lấy giá trị của thuộc tính
  const getPropertyValue = (truck: Truck, propId: string, isPrice?: boolean, unit?: string) => {
    if (!truck) return '-';

    if (propId === 'brand') return truck.brand || '-';
    if (propId === 'weightText') return truck.weightText || '-';
    if (propId === 'price' && isPrice) return truck.priceText || formatPrice(truck.price) || '-';
    
    // Nếu là kích thước có đơn vị
    if ((propId === 'length' || propId === 'width' || propId === 'height' || propId === 'wheelbase') && truck[propId]) {
      return `${truck[propId]} ${unit || 'm'}`;
    }
    
    // Các thuộc tính khác trong specifications
    if (truck.specifications && truck.specifications[propId]) {
      return truck.specifications[propId];
    }

    // Các thuộc tính khác
    return truck[propId as keyof Truck]?.toString() || '-';
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Đang so sánh {trucks.length} xe</h2>
        <Button 
          onClick={clearCompare}
          variant="destructive"
          size="sm"
          className="flex items-center gap-2"
        >
          <Trash2 className="h-4 w-4" />
          Xóa tất cả
        </Button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 w-1/4 border-r-2">Thông tin</th>
              {trucks.map((truck, index) => (
                <th key={truck.id} className="p-4 relative">
                  <Button 
                    className="absolute top-2 right-2 h-6 w-6 p-0 rounded-full"
                    size="sm"
                    variant="ghost"
                    onClick={() => removeFromCompare(truck.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  
                  <div className="pt-4">
                    <div className="mb-3 flex justify-center">
                      <img 
                        src={truck.thumbnailUrl} 
                        alt={truck.name}
                        className="w-40 h-28 object-contain"
                      />
                    </div>
                    <Link to={`/${truck.type}/${truck.slug}`} className="font-bold text-lg hover:text-primary transition-colors">
                      {truck.name}
                    </Link>
                    <div className="text-xs text-gray-500 mt-1">
                      {getVehicleTypeName(truck.type)}
                    </div>
                    <div className="text-lg font-bold text-primary mt-2">
                      {truck.priceText}
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {specGroups.map((group) => (
              <React.Fragment key={group.id}>
                <tr className="bg-gray-50">
                  <td colSpan={trucks.length + 1} className="p-3 font-semibold text-base">
                    {group.title}
                  </td>
                </tr>
                
                {group.specs.map((spec) => (
                  <tr key={spec.id} className="border-b">
                    <td className="p-3 font-medium border-r-2">{spec.label}</td>
                    
                    {trucks.map((truck) => (
                      <td key={`${truck.id}-${spec.id}`} className="p-3 text-center">
                        {getPropertyValue(truck, spec.id, spec.isPrice, spec.unit)}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompareTable;

