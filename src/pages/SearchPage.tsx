
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Truck } from '@/models/TruckTypes';
import { trucks } from '@/data/truckData';
import TruckItem from '@/components/TruckItem';

const SearchPage = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Truck[]>([]);
  
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q');
    
    if (query) {
      setSearchTerm(query);
      performSearch(query);
    }
  }, [location.search]);
  
  const performSearch = (query: string) => {
    const results = trucks.filter(truck => {
      // Search in name
      if (truck.name.toLowerCase().includes(query.toLowerCase())) return true;
      // Search in brand
      if (truck.brand.toLowerCase().includes(query.toLowerCase())) return true;
      // Search in description
      if (truck.description.toLowerCase().includes(query.toLowerCase())) return true;
      // Search in features
      if (truck.features.some(feature => feature.toLowerCase().includes(query.toLowerCase()))) return true;
      // Search in engine type
      if (truck.engine.toLowerCase().includes(query.toLowerCase())) return true;
      // Search in fuel type
      if (truck.fuelType.toLowerCase().includes(query.toLowerCase())) return true;
      
      return false;
    });
    
    // Apply default filters (can be expanded with URL params)
    const filters = {
      brand: query,
      minWeight: 0,
      maxWeight: 100,
      minPrice: null,
      maxPrice: null,
      search: query,
      vehicleType: null
    };
    
    setSearchResults(results);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const newSearchParams = new URLSearchParams();
    newSearchParams.set('q', searchTerm);
    window.history.pushState({}, '', `/search?${newSearchParams.toString()}`);
    performSearch(searchTerm);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl font-bold mb-6">Tìm kiếm</h1>
          
          <form onSubmit={handleSearch} className="flex gap-2 mb-8">
            <Input
              type="search"
              placeholder="Nhập từ khóa tìm kiếm..."
              className="flex-1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit">Tìm kiếm</Button>
          </form>
          
          {searchTerm && (
            <p className="text-lg mb-4">
              {searchResults.length} kết quả tìm kiếm cho <span className="font-medium">"{searchTerm}"</span>
            </p>
          )}
        </div>
        
        {searchResults.length === 0 && searchTerm ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-2">Không tìm thấy kết quả</h2>
            <p className="text-gray-600 mb-6">Không có kết quả phù hợp với từ khóa "{searchTerm}"</p>
            <p className="mb-6">Hãy thử:</p>
            <ul className="list-disc list-inside text-gray-600 mb-6 max-w-md mx-auto">
              <li>Kiểm tra lại chính tả</li>
              <li>Sử dụng các từ khóa ngắn hơn</li>
              <li>Sử dụng từ khóa khác</li>
            </ul>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setSearchResults([]);
                window.history.pushState({}, '', '/search');
              }}
            >
              Xóa tìm kiếm
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {searchResults.map(truck => (
              <TruckItem key={truck.id} truck={truck} />
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default SearchPage;
