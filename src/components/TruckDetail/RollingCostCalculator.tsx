
// src/components/TruckDetail/RollingCostCalculator.tsx
import React, { useState, useEffect, useMemo } from 'react';
import { Truck } from '@/models/TruckTypes';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from "@/components/ui/checkbox";
import { 
  BEFORE_REGISTRATION_FEE_RATE, 
  REGISTRATION_PLATE_FEES, 
  ROAD_MAINTENANCE_FEES_TRUCK, 
  ROAD_MAINTENANCE_FEES_TRACTOR, 
  INSPECTION_FEE_DATA, 
  CIVIL_LIABILITY_INSURANCE_FEES_PRE_VAT, 
  PHYSICAL_INSURANCE_RATE, 
  PROVINCES, 
  VAT_RATE 
} from '@/data/feeData';
import { formatPrice } from '@/lib/utils';

interface RollingCostCalculatorProps {
  truck: Truck;
}

interface CostDetailItem {
  label: string;
  value: number;
  note?: string;
}

const RollingCostCalculator: React.FC<RollingCostCalculatorProps> = ({ truck }) => {
  const [selectedProvinceKey, setSelectedProvinceKey] = useState<string>(PROVINCES[0].value);
  const [otherServiceFee, setOtherServiceFee] = useState<number>(500000);
  const [includePhysicalInsurance, setIncludePhysicalInsurance] = useState<boolean>(true);
  const [customTruckPrice, setCustomTruckPrice] = useState<number>(truck.price);

  // Cập nhật giá xe tùy chỉnh khi truck thay đổi
  useEffect(() => {
    setCustomTruckPrice(truck.price);
  }, [truck.price]);

  const costDetails = useMemo((): CostDetailItem[] => {
    const truckPrice = customTruckPrice;
    let details: CostDetailItem[] = [];

    // 1. Lệ phí trước bạ
    const beforeRegistrationFee = truckPrice * BEFORE_REGISTRATION_FEE_RATE;
    details.push({ label: 'Lệ phí trước bạ', value: beforeRegistrationFee, note: `(${BEFORE_REGISTRATION_FEE_RATE * 100}% giá trị xe)` });

    // 2. Phí biển số
    const selectedProvinceObject = PROVINCES.find(p => p.value === selectedProvinceKey);
    const areaKeyForPlateFee = selectedProvinceObject?.area_key || 'OTHERS';
    const registrationPlateFee = REGISTRATION_PLATE_FEES[areaKeyForPlateFee];
    details.push({ label: 'Phí cấp biển số', value: registrationPlateFee });

    // 3. Phí bảo trì đường bộ (1 năm)
    let roadMaintenanceFee = 0;
    const truckWeight = truck.weight; // Tấn
    if (truck.type === 'dau-keo') {
      if (truckWeight < 19) roadMaintenanceFee = ROAD_MAINTENANCE_FEES_TRACTOR.UNDER_19_TONS;
      else if (truckWeight < 27) roadMaintenanceFee = ROAD_MAINTENANCE_FEES_TRACTOR.FROM_19_TO_UNDER_27_TONS;
      else if (truckWeight < 40) roadMaintenanceFee = ROAD_MAINTENANCE_FEES_TRACTOR.FROM_27_TO_UNDER_40_TONS;
      else roadMaintenanceFee = ROAD_MAINTENANCE_FEES_TRACTOR.FROM_40_TONS_UP;
    } else if (truck.type === 'xe-tai' || truck.type === 'xe-cau') {
      if (truckWeight < 4) roadMaintenanceFee = ROAD_MAINTENANCE_FEES_TRUCK.UNDER_4_TONS;
      else if (truckWeight < 8.5) roadMaintenanceFee = ROAD_MAINTENANCE_FEES_TRUCK.FROM_4_TO_UNDER_8_5_TONS;
      else if (truckWeight < 13) roadMaintenanceFee = ROAD_MAINTENANCE_FEES_TRUCK.FROM_8_5_TO_UNDER_13_TONS;
      else if (truckWeight < 19) roadMaintenanceFee = ROAD_MAINTENANCE_FEES_TRUCK.FROM_13_TO_UNDER_19_TONS;
      else if (truckWeight < 27) roadMaintenanceFee = ROAD_MAINTENANCE_FEES_TRUCK.FROM_19_TO_UNDER_27_TONS;
      else roadMaintenanceFee = ROAD_MAINTENANCE_FEES_TRUCK.FROM_27_TONS_UP;
    }
    details.push({ label: 'Phí bảo trì đường bộ (1 năm)', value: roadMaintenanceFee });
    
    // 4. Phí đăng kiểm
    let inspectionFee = 0;
    if (truck.type === 'mooc') {
        inspectionFee = INSPECTION_FEE_DATA.TRAILER;
    } else if (truck.type === 'xe-tai' || truck.type === 'xe-cau' || truck.type === 'dau-keo') {
        if (truckWeight <= 2) inspectionFee = INSPECTION_FEE_DATA.TRUCK.TO_2_TONS;
        else if (truckWeight <= 7) inspectionFee = INSPECTION_FEE_DATA.TRUCK.FROM_2_TO_7_TONS;
        else if (truckWeight <= 20) inspectionFee = INSPECTION_FEE_DATA.TRUCK.FROM_7_TO_20_TONS;
        else inspectionFee = INSPECTION_FEE_DATA.TRUCK.OVER_20_TONS;
    }
    details.push({ label: 'Phí đăng kiểm (lần đầu)', value: inspectionFee });

    // 5. Bảo hiểm TNDS bắt buộc (1 năm, đã bao gồm VAT)
    let civilLiabilityInsurancePreVAT = 0;
    if (truck.type === 'dau-keo') {
      civilLiabilityInsurancePreVAT = CIVIL_LIABILITY_INSURANCE_FEES_PRE_VAT.TRACTOR;
    } else if (truck.type === 'xe-tai' || truck.type === 'xe-cau') {
      if (truckWeight < 3) civilLiabilityInsurancePreVAT = CIVIL_LIABILITY_INSURANCE_FEES_PRE_VAT.TRUCK.UNDER_3_TONS;
      else if (truckWeight < 8) civilLiabilityInsurancePreVAT = CIVIL_LIABILITY_INSURANCE_FEES_PRE_VAT.TRUCK.FROM_3_TO_8_TONS;
      else if (truckWeight < 15) civilLiabilityInsurancePreVAT = CIVIL_LIABILITY_INSURANCE_FEES_PRE_VAT.TRUCK.FROM_8_TO_15_TONS;
      else civilLiabilityInsurancePreVAT = CIVIL_LIABILITY_INSURANCE_FEES_PRE_VAT.TRUCK.OVER_15_TONS;
    }
    const civilLiabilityInsuranceWithVAT = civilLiabilityInsurancePreVAT * (1 + VAT_RATE);
    details.push({ label: 'Bảo hiểm TNDS (1 năm, đã VAT)', value: civilLiabilityInsuranceWithVAT });

    // 6. Bảo hiểm vật chất (tùy chọn)
    if (includePhysicalInsurance && truck.type !== 'mooc') { // Thường không mua BHVC cho moóc riêng lẻ
      const physicalInsuranceFee = truckPrice * PHYSICAL_INSURANCE_RATE;
      details.push({ label: `Bảo hiểm vật chất (${(PHYSICAL_INSURANCE_RATE * 100).toFixed(1)}% giá trị xe)`, value: physicalInsuranceFee });
    }
    
    // 7. Phí dịch vụ khác
    if (otherServiceFee > 0) {
        details.push({ label: 'Phí dịch vụ đăng ký (tạm tính)', value: otherServiceFee });
    }
    
    return details;
  }, [truck, selectedProvinceKey, otherServiceFee, includePhysicalInsurance, customTruckPrice]);

  const totalRollingCost = useMemo(() => {
    return customTruckPrice + costDetails.reduce((sum, item) => sum + item.value, 0);
  }, [customTruckPrice, costDetails]);

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-800">Dự toán chi phí lăn bánh {truck.name}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
        <div>
          <Label htmlFor="province" className="text-sm font-medium text-gray-700">Tỉnh/thành phố đăng ký</Label>
          <Select value={selectedProvinceKey} onValueChange={setSelectedProvinceKey}>
            <SelectTrigger id="province" className="mt-1 w-full">
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
          <Label htmlFor="otherServiceFee" className="text-sm font-medium text-gray-700">Phí dịch vụ khác (VNĐ)</Label>
          <Input 
            id="otherServiceFee" 
            type="number" 
            value={otherServiceFee} 
            onChange={(e) => setOtherServiceFee(Math.max(0, Number(e.target.value)))} 
            placeholder="VD: 500,000"
            className="mt-1"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2 mt-4">
        <Checkbox
          id="includePhysicalInsurance"
          checked={includePhysicalInsurance}
          onCheckedChange={(checked) => setIncludePhysicalInsurance(checked as boolean)}
          disabled={truck.type === 'mooc'} // Không cho chọn BHVC với mooc
        />
        <Label 
            htmlFor="includePhysicalInsurance" 
            className={`text-sm font-medium text-gray-700 cursor-pointer ${truck.type === 'mooc' ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Bao gồm Bảo hiểm vật chất thân xe (tạm tính {(PHYSICAL_INSURANCE_RATE * 100).toFixed(1)}% giá xe)
          {truck.type === 'mooc' && <span className="text-xs"> (Không áp dụng cho SMRM)</span>}
        </Label>
      </div>

      <div className="mt-6 bg-slate-50 p-4 sm:p-6 rounded-lg border border-slate-200">
        <h4 className="text-lg font-semibold mb-4 text-gray-700">Chi tiết các khoản phí (ước tính):</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between py-2 border-b border-slate-200">
            <span className="text-gray-600">Giá xe (đã bao gồm VAT):</span>
            <div className="flex items-center space-x-2">
              <Input 
                type="number" 
                value={customTruckPrice} 
                onChange={(e) => setCustomTruckPrice(Math.max(0, Number(e.target.value)))} 
                className="w-40 h-8 text-right font-semibold"
                min="0"
              />
              <span className="text-gray-500 text-xs">VNĐ</span>
            </div>
          </div>
          {costDetails.map((item) => (
            <div key={item.label} className="flex justify-between py-2 border-b border-slate-200">
              <span className="text-gray-600">{item.label} {item.note && <span className="text-xs italic text-gray-500">{item.note}</span>}</span>
              <span className="font-semibold text-gray-800">{formatPrice(item.value)}</span>
            </div>
          ))}
          <div className="flex justify-between text-xl font-bold pt-3 text-primary mt-2">
            <span>TỔNG CHI PHÍ LĂN BÁNH (TẠM TÍNH):</span>
            <span>{formatPrice(totalRollingCost)}</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-4 italic">*Lưu ý: Các chi phí trên chỉ mang tính chất tham khảo và có thể thay đổi tùy theo thời điểm và quy định của nhà nước. Vui lòng liên hệ trực tiếp để nhận báo giá chính xác và ưu đãi tốt nhất.</p>
      </div>
    </div>
  );
};

export default RollingCostCalculator;
