
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface SearchFilterProps {
  searchValue: string | null;
  onSearchChange: (value: string) => void;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({
  searchValue,
  onSearchChange,
}) => {
  return (
    <div>
      <Label htmlFor="search" className="text-base font-medium mb-1.5 block">
        Tìm kiếm
      </Label>
      <Input
        id="search"
        placeholder="Nhập tên xe tải..."
        value={searchValue || ''}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};
