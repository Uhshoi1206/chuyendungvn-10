
import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, FileText, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const QuickContact = () => {
  const [isExpanded, setIsExpanded] = useState(true);

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
      imgSrc: "/zalo-icon.png",
      color: "bg-[#0068FF]",
      hoverColor: "hover:bg-[#0054CC]",
      label: "Zalo"
    },
    {
      href: "sms:0123456789",
      icon: <FileText className="w-5 h-5" />,
      color: "bg-[#00B900]",
      hoverColor: "hover:bg-[#009900]",
      label: "SMS"
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
    },
  ];

  return (
    <div className="fixed right-4 bottom-20 z-50 flex flex-col items-end">
      {/* Nút thu gọn/mở rộng */}
      <Button
        variant="outline"
        size="icon"
        className={`mb-2 bg-white shadow-lg transform transition-transform duration-300 hover:bg-gray-100 ${isExpanded ? 'rotate-180' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>

      {/* Danh sách liên hệ */}
      <div className={`flex flex-col gap-3 transition-all duration-300 origin-right transform 
        ${isExpanded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        {contactLinks.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative w-12 h-12 rounded-full ${contact.color} ${contact.hoverColor} 
              flex items-center justify-center text-white shadow-lg
              hover:-translate-y-1 hover:shadow-xl transition-all duration-300
              group overflow-hidden`}
          >
            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-[360deg]">
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
    </div>
  );
};

export default QuickContact;

