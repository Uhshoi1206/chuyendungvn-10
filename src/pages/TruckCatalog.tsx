
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TruckItem from '@/components/TruckItem';
import FilterSidebar from '@/components/FilterSidebar';
import { trucks, truckWeights } from '@/data/truckData';
import { Truck, TruckFilters, VehicleType } from '@/models/TruckTypes';
import { Button } from '@/components/ui/button';
import { Filter, Search } from 'lucide-react';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { useIsMobile } from '@/hooks/use-mobile';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLocation, useNavigate } from 'react-router-dom';

const TruckCatalog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  
  // Hàm để lấy phạm vi trọng lượng cho một danh mục
  const getWeightRange = (categoryWeight: number): { min: number, max: number } => {
    const weightCategory = truckWeights.find(w => w.value === categoryWeight);
    if (!weightCategory) return { min: 0, max: 0 };
    
    // Đối với danh mục "dưới 1 tấn"
    if (categoryWeight === 1) {
      return { min: 0, max: 1 };
    }
    
    // Đối với danh mục "trên 15 tấn"
    if (categoryWeight === 20) {
      return { min: 15, max: 100 };
    }
    
    // Đối với các danh mục khác, tìm phạm vi
    const categoryIndex = truckWeights.findIndex(w => w.value === categoryWeight);
    if (categoryIndex > 0) {
      // Lấy trọng lượng trước đó làm giá trị tối thiểu cho danh mục này
      const minWeight = truckWeights[categoryIndex - 1].value;
      return { min: minWeight, max: categoryWeight };
    }
    
    // Giá trị mặc định (không nên xảy ra với dữ liệu hợp lệ)
    return { min: 0, max: categoryWeight };
  };
  
  // Lấy tham số trọng lượng từ URL
  const weightParam = queryParams.get('weight') ? parseFloat(queryParams.get('weight') || '0') : null;
  const brandParam = queryParams.get('brand');
  const searchParam = queryParams.get('search');
  
  // Thiết lập bộ lọc ban đầu dựa trên phạm vi trọng lượng
  const weightRange = weightParam ? getWeightRange(weightParam) : { min: null, max: null };
  
  const initialFilters: TruckFilters = {
    brand: brandParam || null,
    minPrice: null,
    maxPrice: null,
    minWeight: weightParam ? weightRange.min : null,
    maxWeight: weightParam ? weightRange.max : null,
    search: searchParam || null,
  };
  
  const [filters, setFilters] = useState<TruckFilters>(initialFilters);
  const [searchInput, setSearchInput] = useState<string>(searchParam || '');
  const [selectedType, setSelectedType] = useState<VehicleType>('truck');
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Cập nhật bộ lọc khi URL thay đổi
    const brand = queryParams.get('brand');
    const weight = queryParams.get('weight') ? parseFloat(queryParams.get('weight') || '0') : null;
    const search = queryParams.get('search');
    
    let newFilters: TruckFilters = { ...filters };
    
    if (brand) {
      newFilters.brand = brand;
    }
    
    if (search) {
      newFilters.search = search;
      setSearchInput(search);
    }
    
    // Cập nhật bộ lọc phạm vi trọng lượng nếu tham số trọng lượng tồn tại
    if (weight) {
      const range = getWeightRange(weight);
      newFilters = {
        ...newFilters,
        minWeight: range.min,
        maxWeight: range.max
      };
    }
    
    setFilters(newFilters);
  }, [location.search]);
  
  // Lọc xe theo loại trước tiên
  const vehiclesByType = trucks.filter(truck => truck.type === selectedType);
  
  // Áp dụng các bộ lọc khác
  const filteredTrucks = vehiclesByType.filter(truck => {
    // Bộ lọc thương hiệu
    if (filters.brand && truck.brand !== filters.brand) {
      return false;
    }
    
    // Bộ lọc phạm vi giá
    if (filters.minPrice !== null && truck.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice !== null && truck.price > filters.maxPrice) {
      return false;
    }
    
    // Bộ lọc phạm vi trọng lượng
    if (filters.minWeight !== null && filters.maxWeight !== null) {
      // Trường hợp đặc biệt cho danh mục cao nhất "Trên 15 tấn"
      if (filters.maxWeight >= 20 && truck.weight >= filters.minWeight) {
        return true;
      }
      
      // Bao gồm xe tải trong phạm vi trọng lượng
      if (truck.weight < filters.minWeight || truck.weight > filters.maxWeight) {
        return false;
      }
    } else if (filters.minWeight !== null && truck.weight < filters.minWeight) {
      return false;
    } else if (filters.maxWeight !== null && truck.weight > filters.maxWeight) {
      return false;
    }
    
    // Bộ lọc tìm kiếm
    if (filters.search && !truck.name.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  const handleFilterChange = (newFilters: TruckFilters) => {
    setFilters(newFilters);
    
    // Cập nhật URL với bộ lọc mới
    const params = new URLSearchParams();
    
    if (newFilters.brand) {
      params.set('brand', newFilters.brand);
    }
    
    if (newFilters.minWeight !== null && newFilters.maxWeight !== null) {
      // Tìm danh mục trọng lượng phù hợp với phạm vi
      const weightCategory = truckWeights.find(w => 
        w.min === newFilters.minWeight && w.max === newFilters.maxWeight
      );
      
      if (weightCategory) {
        params.set('weight', weightCategory.value.toString());
      }
    }
    
    if (newFilters.search) {
      params.set('search', newFilters.search);
    }
    
    // Cập nhật URL mà không làm mới trang
    navigate(`/danh-muc?${params.toString()}`, { replace: true });
  };
  
  const handleResetFilters = () => {
    setFilters({
      brand: null,
      minPrice: null,
      maxPrice: null,
      minWeight: null,
      maxWeight: null,
      search: null,
    });
    setSearchInput('');
    
    // Xóa tất cả các tham số truy vấn
    navigate('/danh-muc', { replace: true });
  };
  
  const handleSearch = () => {
    const newFilters = {
      ...filters,
      search: searchInput,
    };
    setFilters(newFilters);
    
    // Cập nhật URL với bộ lọc mới
    const params = new URLSearchParams(location.search);
    
    if (searchInput) {
      params.set('search', searchInput);
    } else {
      params.delete('search');
    }
    
    navigate(`/danh-muc?${params.toString()}`, { replace: true });
  };
  
  const vehicleTypeLabels: Record<VehicleType, string> = {
    truck: 'Xe Tải',
    trailer: 'Sơ Mi Rơ Mooc',
    tractor: 'Xe Đầu Kéo'
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Danh Mục Xe</h1>
          <p className="text-gray-300">
            Tìm kiếm và lựa chọn phương tiện phù hợp với nhu cầu vận chuyển của bạn
          </p>
        </div>
      </div>
      
      {/* Vehicle Type Tabs */}
      <div className="container mx-auto px-4 py-6">
        <Tabs
          defaultValue="truck"
          value={selectedType}
          onValueChange={(value) => setSelectedType(value as VehicleType)}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="truck">Xe Tải</TabsTrigger>
            <TabsTrigger value="trailer">Sơ Mi Rơ Mooc</TabsTrigger>
            <TabsTrigger value="tractor">Xe Đầu Kéo</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      {/* Search Bar for Mobile */}
      <div className="container mx-auto py-4 px-4 md:hidden">
        <div className="flex space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder={`Tìm ${vehicleTypeLabels[selectedType].toLowerCase()}...`}
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
                  onFilterChange={handleFilterChange}
                  onResetFilters={handleResetFilters}
                />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Sidebar - Desktop Only */}
          <div className="hidden md:block w-full md:w-1/4 lg:w-1/5">
            <div className="sticky top-24">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onResetFilters={handleResetFilters}
              />
            </div>
          </div>
          
          {/* Vehicles Grid */}
          <div className="w-full md:w-3/4 lg:w-4/5">
            {/* Search and Sort - Desktop Only */}
            <div className="hidden md:flex justify-between items-center mb-6">
              <div className="relative w-1/2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder={`Tìm ${vehicleTypeLabels[selectedType].toLowerCase()}...`}
                  className="pl-10"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <div className="text-gray-600">
                Hiển thị {filteredTrucks.length} kết quả
              </div>
            </div>
            
            {/* Results count - Mobile only */}
            <div className="md:hidden mb-4 text-gray-600">
              Hiển thị {filteredTrucks.length} kết quả
            </div>
            
            {/* Vehicles Grid */}
            {filteredTrucks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTrucks.map(truck => (
                  <TruckItem key={truck.id} truck={truck} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">😢</div>
                <h3 className="text-2xl font-bold mb-2">Không tìm thấy kết quả</h3>
                <p className="text-gray-600 mb-4">Vui lòng thử lại với bộ lọc khác</p>
                <Button onClick={handleResetFilters}>Đặt lại bộ lọc</Button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TruckCatalog;
