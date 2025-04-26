
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileMenu from './MobileMenu';
import { Input } from './ui/input';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './ui/popover';

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="font-heading text-2xl md:text-3xl font-bold text-primary tracking-tight">XeTaiViet</div>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="font-medium hover:text-primary transition-colors">
                Trang chủ
              </Link>
              <Link to="/danh-muc" className="font-medium hover:text-primary transition-colors">
                Danh mục xe
              </Link>
              <Link to="/gioi-thieu" className="font-medium hover:text-primary transition-colors">
                Giới thiệu
              </Link>
              <Link to="/blog" className="font-medium hover:text-primary transition-colors">
                Tin tức
              </Link>
              <Link to="/lien-he" className="font-medium hover:text-primary transition-colors">
                Liên hệ
              </Link>
            </nav>
          )}

          {/* Contact & Search Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <a
                href="tel:0764678901"
                className="font-bold hover:underline text-black"
                aria-label="Gọi ngay: 0764678901"
              >
                0764678901
              </a>
            </div>
            {!isMobile ? (
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Search className="h-4 w-4 mr-2" />
                    Tìm kiếm
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-0" align="end">
                  <form onSubmit={handleSearch} className="flex p-2">
                    <Input 
                      placeholder="Nhập từ khóa tìm kiếm..." 
                      className="mr-2"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      autoFocus
                    />
                    <Button type="submit" size="sm">Tìm</Button>
                  </form>
                </PopoverContent>
              </Popover>
            ) : (
              <MobileMenu />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
