
import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Mail, FileText, X } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

const QuickContact = () => {
  const [activeIconIndex, setActiveIconIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const contactLinks = [
    {
      href: "https://m.me/",
      icon: <MessageCircle className="w-5 h-5" />,
      color: "bg-[#0099FF]",
      hoverColor: "hover:bg-[#0088FF]",
      label: "Messenger"
    },
    {
      href: "https://zalo.me/",
      imgSrc: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI0IDRDMTIuOTU0IDQgNCAxMi45NTQgNCAyNHM4Ljk1NCAyMCAyMCAyMCAyMC04Ljk1NCAyMC0yMFMzNS4wNDYgNCAyNCA0em0xMC42MDkgMjYuMjE0YTcuNTk2IDcuNTk2IDAgMCAxLTMuODc2LS4wMjRjLTIuMjY4LS42MTctMy45MDktMi4xODQtNC45OTItNC4xNDhhLjUwMy41MDMgMCAwIDAtLjQ0My0uMjg4aC0zLjU0MmMtLjIxNiAwLS40MDMuMTQtLjQ2OC4zNDNsLTEuMTQ3IDMuNTc2YS41MDMuNTAzIDAgMCAxLS40MjQuMzUzSDEyLjRhLjUwMy41MDMgMCAwIDEtLjQ2OC0uNjg3TDE2LjE5IDE0LjljLjA3NC0uMjI4LjI4OC0uMzgzLjUyOC0uMzgzaDYuNDM4YzcuODQ4IDAgOS44ODIgNC4zOTYgOS44ODIgOC42NTIgMCAyLjAyOS0uNTU3IDQuMzA3LTEuOTUyIDUuODQ4YTYuNjI1IDYuNjI1IDAgMCAxLTQuNDc3IDEuOTc3di0uNzh6TTI0LjE1IDE3LjgxNWgtNC4wMzRhLjUwMy41MDMgMCAwIDAtLjQ3OC4zNDhsLTIuODA1IDguNzM3YS41MDMuNTAzIDAgMCAwIC40NzguNjU4aDMuNTQyYy4yMTYgMCAuNDAzLS4xNC40NjgtLjM0M2wyLjgwNS04LjczN2EuNTAzLjUwMyAwIDAgMC0uNDc4LS42NTh2LS4wMDV6Ii8+PC9zdmc+", 
      color: "bg-[#0068FF]",
      hoverColor: "hover:bg-[#0054CC]",
      label: "Zalo"
    },
    {
      href: "https://www.tiktok.com/@xetaiviet",
      icon: <FaTiktok className="w-5 h-5" />,
      color: "bg-[#000000]",
      hoverColor: "hover:bg-[#333333]",
      label: "TikTok"
    },
    {
      href: "tel:0123456789",
      icon: <Phone className="w-5 h-5" />,
      color: "bg-[#E60019]",
      hoverColor: "hover:bg-[#CC0017]",
      label: "Điện thoại"
    },
    {
      href: "mailto:contact@xetaiviet.vn",
      icon: <Mail className="w-5 h-5" />,
      color: "bg-[#EA4335]",
      hoverColor: "hover:bg-[#D63A2D]",
      label: "Email"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIconIndex((prev) => (prev + 1) % contactLinks.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [contactLinks.length]);

  return (
    <div className="fixed right-4 bottom-20 z-50">
      {/* Nút chính hiển thị các icon xoay vòng */}
      {!isOpen && (
        <div 
          className="relative w-[66px] h-[66px] bg-[#00aeef] rounded-full shadow-lg cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          {/* Hiệu ứng pulse */}
          <div className="absolute inset-0 rounded-full border border-[#00aeef] animate-[widgetPulse_1.5s_infinite]" />
          
          {/* Container hiển thị icon xoay vòng */}
          <div className="relative w-full h-full overflow-hidden rounded-full">
            {contactLinks.map((contact, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500
                  ${index === activeIconIndex ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}
              >
                <div className="text-white">
                  {contact.imgSrc ? (
                    <img src={contact.imgSrc} alt={contact.label} className="w-5 h-5" />
                  ) : (
                    contact.icon
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Các liên kết liên hệ và nút đóng */}
      {isOpen && (
        <div className="flex flex-col items-end">
          <div className="flex flex-col gap-3 mb-3">
            {contactLinks.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative w-12 h-12 rounded-full ${contact.color} ${contact.hoverColor} 
                  flex items-center justify-center text-white shadow-lg
                  hover:-translate-y-1 hover:shadow-xl transition-all duration-300
                  group animate-fade-in`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Icon */}
                <div className="transform transition-transform duration-300 group-hover:rotate-[360deg]">
                  {contact.imgSrc ? (
                    <img src={contact.imgSrc} alt={contact.label} className="w-5 h-5" />
                  ) : (
                    contact.icon
                  )}
                </div>

                {/* Tooltip */}
                <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
                  {contact.label}
                </span>
              </a>
            ))}
          </div>
          
          {/* Nút đóng X */}
          <button 
            onClick={() => setIsOpen(false)}
            className="w-12 h-12 rounded-full bg-gray-600 hover:bg-gray-700 flex items-center justify-center text-white shadow-lg transition-all duration-300"
            aria-label="Đóng menu liên hệ"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default QuickContact;
