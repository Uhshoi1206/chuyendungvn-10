// src/components/TruckDetail/RollingCostCalculator.tsx
import React, { useState, useEffect } from 'react';
import { Truck } from '@/models/TruckTypes';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BEFORE_REGISTRATION_FEE_RATE_TRUCK, REGISTRATION_PLATE_FEES, ROAD_MAINTENANCE_FEES_TRUCK, ROAD_MAINTENANCE_FEES_TRACTOR, INSPECTION_FEE, CIVIL_LIABILITY_INSURANCE_FEES_TRUCK, CIVIL_LIABILITY_INSURANCE_FEES_TRACTOR, PHYSICAL_INSURANCE_RATE, PROVINCES, VAT_RATE } from '@/data/feeData';
import { formatPrice } from '@/lib/utils'; // Giả sử bạn có hàm này

interface RollingCostCalculatorProps {
  truck: Truck;
}

const RollingCostCalculator: React.FC<RollingCostCalculatorProps> = ({ truck }) => {
  const [selectedProvince, setSelectedProvince] = useState<string>(PROVINCES[0].value);
  const [otherServiceFee, setOtherServiceFee] = useState<number>(500000); // Phí dịch vụ khác mặc định
  const [includePhysicalInsurance, setIncludePhysicalInsurance] = useState<boolean>(true);

  const [totalRollingCost, setTotalRollingCost] = useState<number>(0);
  const [costDetails, setCostDetails] = useState<Record<string, number>>({});

  useEffect(() => {
    const calculateCosts = () => {
      const truckPrice = truck.price;
      let details: Record<string, number> = {};

      // 1. Lệ phí trước bạ (2% giá xe)
      const beforeRegistrationFee = truckPrice * BEFORE_REGISTRATION_FEE_RATE_TRUCK;
      details['Lệ phí trước bạ'] = beforeRegistrationFee;

      // 2. Phí biển số
      let registrationPlateFee = REGISTRATION_PLATE_FEES.OTHERS;
      if (selectedProvince === 'hanoi' || selectedProvince === 'hcm') {
        registrationPlateFee = REGISTRATION_PLATE_FEES.HANOI_HCM;
      } else if (selectedProvince === 'other_cities') {
        registrationPlateFee = REGISTRATION_PLATE_FEES.CITIES_TOWNS;
      }
      details['Phí biển số'] = registrationPlateFee;

      // 3. Phí bảo trì đường bộ (1 năm)
      let roadMaintenanceFee = 0;
      if (truck.type === 'dau-keo') {
        if (truck.weight < 19) roadMaintenanceFee = ROAD_MAINTENANCE_FEES_TRACTOR.UNDER_19_TONS;
        else if (truck.weight < 27) roadMaintenanceFee = ROAD_MAINTENANCE_FEES_TRACTOR.FROM_19_TO_UNDER_27_TONS;
        else if (truck.weight < 40) roadMaintenanceFee = ROAD_MAINTENANCE_FEES_TRACTOR.FROM_27_TO_UNDER_40_TONS;
        else roadMaintenanceFee = ROAD_MAINTENANCE_FEES_TRACTOR.FROM_40_TONS_UP;
      } else if (truck.type === 'xe-tai' || truck.type === 'xe-cau') { // Xe cẩu tính như xe tải
        if (truck.weight < 4) roadMaintenanceFee = ROAD_MAINTENANCE_FEES_TRUCK.UNDER_4_TONS;
        else if (truck.weight < 8.5) roadMaintenanceFee = ROAD_MAINTENANCE_FEES_TRUCK.FROM_4_TO_UNDER_8_5_TONS;
        else if (truck.weight < 13) roadMaintenanceFee = ROAD_MAINTENANCE_FEES_TRUCK.FROM_8_5_TO_UNDER_13_TONS;
        else if (truck.weight < 19) roadMaintenanceFee = ROAD_MAINTENANCE_FEES_TRUCK.FROM_13_TO_UNDER_19_TONS;
        else if (truck.weight < 27) roadMaintenanceFee = ROAD_MAINTENANCE_FEES_TRUCK.FROM_19_TO_UNDER_27_TONS;
        else roadMaintenanceFee = ROAD_MAINTENANCE_FEES_TRUCK.FROM_27_TONS_UP;
      }
      // Mooc không tính phí này riêng lẻ
      details['Phí bảo trì đường bộ (1 năm)'] = roadMaintenanceFee;

      // 4. Phí đăng kiểm
      details['Phí đăng kiểm'] = INSPECTION_FEE;

      // 5. Bảo hiểm TNDS bắt buộc (1 năm, đã bao gồm VAT 10%)
      let civilLiabilityInsurance = 0;
      if (truck.type === 'dau-keo') {
        civilLiabilityInsurance = CIVIL_LIABILITY_INSURANCE_FEES_TRACTOR * (1 + VAT_RATE);
      } else if (truck.type === 'xe-tai' || truck.type === 'xe-cau') {
        if (truck.weight < 3) civilLiabilityInsurance = CIVIL_LIABILITY_INSURANCE_FEES_TRUCK.UNDER_3_TONS * (1 + VAT_RATE);
        else if (truck.weight < 8) civilLiabilityInsurance = CIVIL_LIABILITY_INSURANCE_FEES_TRUCK.FROM_3_TO_8_TONS * (1 + VAT_RATE);
        else if (truck.weight < 15) civilLiabilityInsurance = CIVIL_LIABILITY_INSURANCE_FEES_TRUCK.FROM_8_TO_15_TONS * (1 + VAT_RATE);
        else civilLiabilityInsurance = CIVIL_LIABILITY_INSURANCE_FEES_TRUCK.OVER_15_TONS * (1 + VAT_RATE);
      }
      details['Bảo hiểm TNDS (1 năm, đã VAT)'] = civilLiabilityInsurance;

      // 6. Bảo hiểm vật chất (tùy chọn)
      let physicalInsuranceFee = 0;
      if (includePhysicalInsurance) {
        physicalInsuranceFee = truckPrice * PHYSICAL_INSURANCE_RATE;
      }
      details['Bảo hiểm vật chất thân xe (ước tính)'] = physicalInsuranceFee;
      
      // 7. Phí dịch vụ khác
      details['Phí dịch vụ đăng ký (ước tính)'] = otherServiceFee;

      // Tổng chi phí
      let total = truckPrice + beforeRegistrationFee + registrationPlateFee + roadMaintenanceFee + INSPECTION_FEE + civilLiabilityInsurance + otherServiceFee;
      if (includePhysicalInsurance) {
        total += physicalInsuranceFee;
      }
      
      setCostDetails(details);
      setTotalRollingCost(total);
    };

    calculateCosts();
  }, [truck, selectedProvince, otherServiceFee, includePhysicalInsurance]);

  // Giả sử hàm formatPrice đã được định nghĩa trong utils
  // const formatPrice = (value: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);


  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Dự toán chi phí lăn bánh cho {truck.name}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="province">Chọn tỉnh/thành phố đăng ký</Label>
          <Select value={selectedProvince} onValueChange={setSelectedProvince}>
            <SelectTrigger id="province">
              <SelectValue placeholder="Chọn tỉnh/thành" />
            </SelectTrigger>
            <SelectContent>
              {PROVINCES.map(province => (
                <SelectItem key={province.value} value={province.value}>{province.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="otherServiceFee">Phí dịch vụ khác (VNĐ)</Label>
          <Input 
            id="otherServiceFee" 
            type="number" 
            value={otherServiceFee} 
            onChange={(e) => setOtherServiceFee(Number(e.target.value))} 
            placeholder="Ví dụ: 500.000"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="includePhysicalInsurance"
          checked={includePhysicalInsurance}
          onChange={(e) => setIncludePhysicalInsurance(e.target.checked)}
          className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
        />
        <Label htmlFor="includePhysicalInsurance" className="text-sm font-medium">
          Bao gồm Bảo hiểm vật chất thân xe (ước tính 1.5%)
        </Label>
      </div>

      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold mb-3">Chi tiết các khoản phí (ước tính):</h4>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Giá xe (đã bao gồm VAT):</span>
            <span className="font-medium">{formatPrice(truck.price)}</span>
          </li>
          {Object.entries(costDetails).map(([key, value]) => (
            <li key={key} className="flex justify-between">
              <span>{key}:</span>
              <span className="font-medium">{formatPrice(value)}</span>
            </li>
          ))}
          <li className="flex justify-between text-lg font-bold pt-2 border-t">
            <span>TỔNG CHI PHÍ LĂN BÁNH (ƯỚC TÍNH):</span>
            <span className="text-primary">{formatPrice(totalRollingCost)}</span>
          </li>
        </ul>
        <p className="text-xs text-gray-500 mt-4">*Lưu ý: Các chi phí trên chỉ là ước tính và có thể thay đổi tùy theo thời điểm và quy định của cơ quan nhà nước. Vui lòng liên hệ để có báo giá chính xác nhất.</p>
      </div>
    </div>
  );
};

export default RollingCostCalculator;
