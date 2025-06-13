
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronDown, ChevronUp, List, BarChart3 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
  className?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content, className }) => {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Phát hiện thiết bị mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Trích xuất các heading từ content HTML
  useEffect(() => {
    const extractHeadings = () => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = content;
      
      const headings = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
      const items: TocItem[] = [];
      
      headings.forEach((heading) => {
        const id = heading.id || heading.textContent?.toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .trim() || '';
        
        if (id && heading.textContent) {
          // Đảm bảo heading có id
          if (!heading.id) {
            heading.id = id;
          }
          
          items.push({
            id,
            title: heading.textContent.trim(),
            level: parseInt(heading.tagName.charAt(1))
          });
        }
      });
      
      setTocItems(items);
      
      // Cập nhật lại content trong DOM
      const contentElement = document.querySelector('.prose-content');
      if (contentElement) {
        contentElement.innerHTML = tempDiv.innerHTML;
      }
    };

    if (content) {
      extractHeadings();
    }
  }, [content]);

  // Tính toán progress và active heading
  const updateScrollInfo = useCallback(() => {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min((scrollTop / documentHeight) * 100, 100);
    setScrollProgress(progress);

    // Tìm heading hiện tại
    const headingElements = tocItems.map(item => document.getElementById(item.id)).filter(Boolean);
    let currentActiveId = '';

    for (let i = headingElements.length - 1; i >= 0; i--) {
      const element = headingElements[i];
      if (element && element.getBoundingClientRect().top <= 100) {
        currentActiveId = element.id;
        break;
      }
    }

    if (currentActiveId !== activeId) {
      setActiveId(currentActiveId);
    }
  }, [tocItems, activeId]);

  // Lắng nghe scroll event
  useEffect(() => {
    window.addEventListener('scroll', updateScrollInfo, { passive: true });
    updateScrollInfo(); // Gọi ngay lập tức để tính toán ban đầu
    
    return () => window.removeEventListener('scroll', updateScrollInfo);
  }, [updateScrollInfo]);

  // Cuộn đến heading khi click
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveId(id);
    }
  };

  // Không hiển thị nếu không có TOC items
  if (tocItems.length === 0) {
    return null;
  }

  // Render mobile progress bar
  if (isMobile) {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="px-4 py-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center text-sm font-medium text-gray-700">
              <BarChart3 className="h-4 w-4 mr-2 text-primary" />
              Tiến độ đọc
            </div>
            <span className="text-xs text-gray-500">{Math.round(scrollProgress)}%</span>
          </div>
          <Progress value={scrollProgress} className="h-2" />
        </div>
      </div>
    );
  }

  // Render desktop TOC
  return (
    <div className={cn(
      "fixed right-6 top-1/2 transform -translate-y-1/2 z-40 w-80 max-h-[80vh] bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden",
      className
    )}>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/5 to-primary/10 border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <List className="h-5 w-5 text-primary mr-2" />
            <h3 className="font-semibold text-gray-800">Mục Lục</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="h-8 w-8 p-0"
          >
            {isCollapsed ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronUp className="h-4 w-4" />
            )}
          </Button>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-600">Tiến độ đọc</span>
            <span className="text-xs text-gray-500">{Math.round(scrollProgress)}%</span>
          </div>
          <Progress value={scrollProgress} className="h-2" />
        </div>
      </div>

      {/* Content */}
      {!isCollapsed && (
        <div className="max-h-96 overflow-y-auto p-2">
          <nav className="space-y-1">
            {tocItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToHeading(item.id)}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200 hover:bg-gray-100",
                  {
                    'pl-3': item.level === 2,
                    'pl-6': item.level === 3,
                    'pl-9': item.level === 4,
                    'pl-12': item.level === 5,
                    'pl-15': item.level === 6,
                  },
                  activeId === item.id
                    ? "bg-primary/10 text-primary font-medium border-r-2 border-primary"
                    : "text-gray-700 hover:text-gray-900"
                )}
              >
                <span className="line-clamp-2">{item.title}</span>
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Footer với thông tin thêm */}
      {!isCollapsed && (
        <div className="border-t border-gray-200 p-3 bg-gray-50">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{tocItems.length} mục</span>
            <span className="flex items-center">
              <BarChart3 className="h-3 w-3 mr-1" />
              {activeId ? `Đang đọc: ${tocItems.findIndex(item => item.id === activeId) + 1}/${tocItems.length}` : 'Bắt đầu đọc'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableOfContents;
