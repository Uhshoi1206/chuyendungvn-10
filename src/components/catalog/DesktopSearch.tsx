
import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface DesktopSearchProps {
  searchInput: string;
  onSearchChange: (value: string) => void;
  onSearch: () => void;
  totalResults: number;
  vehicleTypeLabel: string;
}

const DesktopSearch: React.FC<DesktopSearchProps> = ({
  searchInput,
  onSearchChange,
  onSearch,
  totalResults,
  vehicleTypeLabel,
}) => {
  return (
    <div className="hidden md:flex justify-between items-center mb-6">
      <div className="relative w-1/2">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
        <Input
          type="search"
          placeholder={`Tìm ${vehicleTypeLabel.toLowerCase()}...`}
          className="pl-10"
          value={searchInput}
          onChange={(e) => onSearchChange(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSearch()}
        />
      </div>
      <div className="text-gray-600">
        Hiển thị {totalResults} kết quả
      </div>
    </div>
  );
};

export default DesktopSearch;
