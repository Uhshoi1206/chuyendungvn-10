
import React from 'react';
import { MessageCircle, Phone, Mail, FileText } from 'lucide-react';

const QuickContact = () => {
  return (
    <div className="fixed right-4 bottom-20 z-50 flex flex-col gap-3">
      {/* Messenger */}
      <a
        href="https://m.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#0099FF] hover:bg-[#0088FF] transition-colors flex items-center justify-center text-white shadow-lg hover:-translate-y-1 hover:shadow-xl duration-300"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Zalo */}
      <a
        href="https://zalo.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#0068FF] hover:bg-[#0054CC] transition-colors flex items-center justify-center text-white shadow-lg hover:-translate-y-1 hover:shadow-xl duration-300"
      >
        <img src="/zalo-icon.png" alt="Zalo" className="w-6 h-6" />
      </a>

      {/* SMS */}
      <a
        href="sms:0123456789"
        className="w-12 h-12 rounded-full bg-[#00B900] hover:bg-[#009900] transition-colors flex items-center justify-center text-white shadow-lg hover:-translate-y-1 hover:shadow-xl duration-300"
      >
        <FileText className="w-6 h-6" />
      </a>

      {/* Phone */}
      <a
        href="tel:0123456789"
        className="w-12 h-12 rounded-full bg-[#E60019] hover:bg-[#CC0017] transition-colors flex items-center justify-center text-white shadow-lg hover:-translate-y-1 hover:shadow-xl duration-300"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Email */}
      <a
        href="mailto:contact@xetaiviet.vn"
        className="w-12 h-12 rounded-full bg-[#EA4335] hover:bg-[#D63A2D] transition-colors flex items-center justify-center text-white shadow-lg hover:-translate-y-1 hover:shadow-xl duration-300"
      >
        <Mail className="w-6 h-6" />
      </a>
    </div>
  );
};

export default QuickContact;
