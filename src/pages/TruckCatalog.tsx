
import React, { useState, useEffect } from "react";
import { trucks } from "@/data/truckData";
import { useTruckFilters } from "@/hooks/useTruckFilters";
import { useVehicleFiltering } from "@/hooks/useVehicleFiltering";
import { VehicleType } from "@/models/TruckTypes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CatalogHeader from "@/components/catalog/CatalogHeader";
import VehicleTypeTabs from "@/components/catalog/VehicleTypeTabs";
import VehicleGrid from "@/components/catalog/VehicleGrid";
import FilterSidebar from "@/components/FilterSidebar";
import { useLocation } from "react-router-dom";

const TruckCatalog: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const weightParam = queryParams.get('weight');
  
  // Nếu có tham số weight, không đặt loại xe mặc định
  const defaultType: VehicleType | null = weightParam ? null : "truck";

  // Lưu loại xe đang chọn cho tab (trong filters cũng có vehicleType nhưng ta chủ động cho hiển thị rõ ràng)
  const [selectedType, setSelectedType] = useState<VehicleType | null>(defaultType);

  // Vẫn giữ filters query như hiện tại (brand, min/max price, weight, ...)
  const {
    filters,
    handleFilterChange,
    handleResetFilters,
    updateUrl
  } = useTruckFilters({
    brand: null,
    minPrice: null,
    maxPrice: null,
    minWeight: null,
    maxWeight: null,
    vehicleType: null,
    search: null,
  });

  // Khi chuyển tab thì update vehicleType trong URL filters luôn
  const onTabChange = (type: VehicleType) => {
    setSelectedType(type);
    handleFilterChange("vehicleType", type);
    window.scrollTo?.({ top: 0, behavior: "smooth" });
  };

  // Lọc danh sách xe theo loại tab và các filter khác
  const { filteredVehicles } = useVehicleFiltering(trucks, selectedType, filters);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <CatalogHeader />
      {/* Tabs danh mục xe */}
      <div className="sticky top-0 z-40 bg-gray-50 mb-2">
        <VehicleTypeTabs selectedType={selectedType} onTypeChange={onTabChange} />
      </div>
      <main className="container mx-auto flex flex-col lg:flex-row gap-6">
        {/* Filter sidebar - desktop */}
        <aside className="hidden lg:block w-80 flex-shrink-0">
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
          />
        </aside>
        {/* Kết quả grid danh sách xe */}
        <section className="flex-1 min-w-0">
          <VehicleGrid vehicles={filteredVehicles} onResetFilters={handleResetFilters} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TruckCatalog;
