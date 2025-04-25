
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FilterSidebar } from '@/components/FilterSidebar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Filter } from 'lucide-react';
import { TruckFilters } from '@/models/TruckTypes';

interface MobileSearchProps {
  searchInput: string;
  setSearchInput: (value: string) => void;
  handleSearch: () => void;
  filters: TruckFilters;
  onFilterChange: (key: keyof TruckFilters, value: any) => void;
  onResetFilters: () => void;
  vehicleTypeLabel: string;
}

export const MobileSearch: React.FC<MobileSearchProps> = ({
  searchInput,
  setSearchInput,
  handleSearch,
  filters,
  onFilterChange,
  onResetFilters,
  vehicleTypeLabel
}) => {
  return (
    <div className="block md:hidden px-4 py-3 bg-gray-50">
      <div className="flex items-center space-x-2">
        <div className="flex-1">
          <Input
            placeholder={`Tìm ${vehicleTypeLabel}...`}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full"
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[90%] p-0">
            <FilterSidebar
              filters={filters}
              onFilterChange={onFilterChange}
              onResetFilters={onResetFilters}
              className="h-full"
            />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
