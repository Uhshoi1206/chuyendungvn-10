
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import QuickContact from "./components/QuickContact";
import Index from "./pages/Index";
import TruckCatalog from "./pages/TruckCatalog";
import TruckDetail from "./pages/TruckDetail";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import BlogCategoryPage from "./pages/BlogCategoryPage";
import SearchPage from "./pages/SearchPage";
import ComparePage from "./pages/ComparePage";
import OrderNotification from "./components/OrderNotification";
import { CompareProvider } from "./contexts/CompareContext";

const queryClient = new QueryClient();

const App = () => {
  const [isQuickContactOpen, setIsQuickContactOpen] = useState(false);

  const handleOpenQuickContact = () => {
    setIsQuickContactOpen(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <CompareProvider>
              <QuickContact isOpen={isQuickContactOpen} setIsOpen={setIsQuickContactOpen} />
              <OrderNotification onOpenQuickContact={handleOpenQuickContact} />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/danh-muc" element={<TruckCatalog />} />
                
                {/* Các route riêng cho từng loại phương tiện */}
                <Route path="/xe-tai/:slug" element={<TruckDetail />} />
                <Route path="/dau-keo/:slug" element={<TruckDetail />} />
                <Route path="/xe-cau/:slug" element={<TruckDetail />} />
                <Route path="/mooc/:slug" element={<TruckDetail />} />
                
                {/* Route cho trang so sánh xe */}
                <Route path="/so-sanh-xe" element={<ComparePage />} />
                {/* Thêm route cho so sánh xe với URL thân thiện với SEO */}
                <Route path="/so-sanh-xe/:trucks" element={<ComparePage />} />
                
                <Route path="/lien-he" element={<ContactPage />} />
                <Route path="/gioi-thieu" element={<AboutPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/category/:category" element={<BlogCategoryPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </CompareProvider>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
