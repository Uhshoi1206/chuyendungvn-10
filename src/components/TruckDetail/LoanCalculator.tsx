// src/components/TruckDetail/LoanCalculator.tsx
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { formatPrice } from '@/lib/utils'; // Giả sử bạn có hàm này


interface LoanCalculatorProps {
  truckPrice: number;
}

const LoanCalculator: React.FC<LoanCalculatorProps> = ({ truckPrice }) => {
  const [loanPercentage, setLoanPercentage] = useState<number>(70); // % vay
  const [loanTerm, setLoanTerm] = useState<number>(5); // Số năm vay
  const [interestRate, setInterestRate] = useState<number>(9.5); // Lãi suất %/năm

  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [downPayment, setDownPayment] = useState<number>(0);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  useEffect(() => {
    const calculateLoan = () => {
      const currentLoanAmount = truckPrice * (loanPercentage / 100);
      const currentDownPayment = truckPrice - currentLoanAmount;
      
      const monthlyInterestRate = (interestRate / 100) / 12;
      const numberOfPayments = loanTerm * 12;

      if (monthlyInterestRate > 0) {
        const principal = currentLoanAmount;
        // Công thức tính trả góp gốc + lãi hàng tháng (annuity)
        const monthlyPmt = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
        const currentTotalPayment = monthlyPmt * numberOfPayments;
        const currentTotalInterest = currentTotalPayment - principal;

        setMonthlyPayment(monthlyPmt);
        setTotalInterest(currentTotalInterest);
        setTotalPayment(currentTotalPayment);

      } else { // Trường hợp lãi suất = 0
        setMonthlyPayment(currentLoanAmount / numberOfPayments);
        setTotalInterest(0);
        setTotalPayment(currentLoanAmount);
      }
      
      setLoanAmount(currentLoanAmount);
      setDownPayment(currentDownPayment);
    };

    calculateLoan();
  }, [truckPrice, loanPercentage, loanTerm, interestRate]);
  
  // Giả sử hàm formatPrice đã được định nghĩa trong utils
  // const formatPrice = (value: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);


  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Dự toán vay mua xe (trả góp gốc & lãi hàng tháng cố định)</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="truckPriceLoan">Giá trị xe (VNĐ)</Label>
          <Input id="truckPriceLoan" type="text" value={formatPrice(truckPrice)} readOnly className="bg-gray-100" />
        </div>
        <div>
          <Label htmlFor="loanPercentage">Tỷ lệ vay (%) - Tối đa 85%</Label>
          <div className="flex items-center space-x-2">
            <Slider
              id="loanPercentage"
              min={10} max={85} step={5}
              value={[loanPercentage]}
              onValueChange={(value) => setLoanPercentage(value[0])}
            />
            <Input 
              type="number" 
              value={loanPercentage} 
              onChange={(e) => setLoanPercentage(Math.max(10, Math.min(85, Number(e.target.value))))} 
              className="w-20 text-center"
              min={10} max={85}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="loanTerm">Thời gian vay (năm) - Tối đa 7 năm</Label>
           <div className="flex items-center space-x-2">
            <Slider
              id="loanTerm"
              min={1} max={7} step={1}
              value={[loanTerm]}
              onValueChange={(value) => setLoanTerm(value[0])}
            />
            <Input 
              type="number" 
              value={loanTerm} 
              onChange={(e) => setLoanTerm(Math.max(1, Math.min(7, Number(e.target.value))))} 
              className="w-20 text-center"
              min={1} max={7}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="interestRate">Lãi suất (%/năm) - Ước tính</Label>
          <div className="flex items-center space-x-2">
            <Slider
              id="interestRate"
              min={5} max={15} step={0.1}
              value={[interestRate]}
              onValueChange={(value) => setInterestRate(value[0])}
            />
            <Input 
              type="number" 
              value={interestRate} 
              onChange={(e) => setInterestRate(Math.max(5, Math.min(15, Number(e.target.value))))} 
              className="w-20 text-center"
              min={5} max={15} step={0.1}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
        <h4 className="text-lg font-semibold mb-3">Kết quả dự toán vay (ước tính):</h4>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Số tiền vay:</span>
            <span className="font-medium">{formatPrice(loanAmount)}</span>
          </li>
          <li className="flex justify-between">
            <span>Số tiền trả trước:</span>
            <span className="font-medium">{formatPrice(downPayment)}</span>
          </li>
          <li className="flex justify-between">
            <span>Số tiền trả góp hàng tháng:</span>
            <span className="font-medium">{formatPrice(monthlyPayment)}</span>
          </li>
          <li className="flex justify-between">
            <span>Tổng số tiền lãi phải trả:</span>
            <span className="font-medium">{formatPrice(totalInterest)}</span>
          </li>
          <li className="flex justify-between text-lg font-bold pt-2 border-t">
            <span>TỔNG SỐ TIỀN PHẢI TRẢ (GỐC + LÃI):</span>
            <span className="text-primary">{formatPrice(totalPayment)}</span>
          </li>
        </ul>
        <p className="text-xs text-gray-500 mt-4">*Lưu ý: Kết quả trên chỉ là ước tính dựa trên lãi suất cố định bạn cung cấp. Lãi suất thực tế và các điều khoản vay có thể thay đổi tùy thuộc vào ngân hàng và thời điểm vay. Vui lòng liên hệ để được tư vấn chi tiết về các gói vay ưu đãi.</p>
      </div>
    </div>
  );
};

export default LoanCalculator;
