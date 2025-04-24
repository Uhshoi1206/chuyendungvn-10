
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Search } from 'lucide-react';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[350px]">
        <div className="px-4 pt-8 pb-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xl font-bold text-primary">XeTaiViet</span>
          </div>
          
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                type="search"
                placeholder="Tìm kiếm xe tải..."
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="py-2 px-3 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Trang chủ
            </Link>
            <Link 
              to="/danh-muc" 
              className="py-2 px-3 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Danh mục xe
            </Link>
            <Link 
              to="/gioi-thieu" 
              className="py-2 px-3 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Giới thiệu
            </Link>
            <Link 
              to="/blog" 
              className="py-2 px-3 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/lien-he" 
              className="py-2 px-3 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Liên hệ
            </Link>
          </nav>

          <div className="mt-auto">
            <div className="flex items-center space-x-2 py-3 px-3 bg-gray-100 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-primary"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span className="font-bold">0123.456.789</span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
