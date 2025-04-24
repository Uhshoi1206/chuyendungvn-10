
import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import FilterSidebar from '@/components/FilterSidebar';
import { TruckFilters } from '@/models/TruckTypes';

interface MobileSearchProps {
  searchInput: string;
  setSearchInput: (value: string) => void;
  handleSearch: () => void;
  filters: TruckFilters;
  onFilterChange: (filters: TruckFilters) => void;
  onResetFilters: () => void;
  vehicleTypeLabel: string;
}

const MobileSearch: React.FC<MobileSearchProps> = ({
  searchInput,
  setSearchInput,
  handleSearch,
  filters,
  onFilterChange,
  onResetFilters,
  vehicleTypeLabel,
}) => {
  return (
    <div className="container mx-auto py-4 px-4 md:hidden">
      <div className="flex space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder={`Tìm ${vehicleTypeLabel.toLowerCase()}...`}
            className="pl-10"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>
        <Drawer>
          <DrawerTrigger asChild>
            <Button size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="p-4 max-h-[80vh] overflow-y-auto">
              <FilterSidebar
                filters={filters}
                onFilterChange={onFilterChange}
                onResetFilters={onResetFilters}
              />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default MobileSearch;
