
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { useCompare } from '@/contexts/CompareContext';
import { GitCompare } from 'lucide-react';

interface CompareBadgeProps {
  className?: string;
}

const CompareBadge: React.FC<CompareBadgeProps> = ({ className = "" }) => {
  const { compareItems } = useCompare();
  const count = compareItems.length;

  if (count === 0) {
    return null;
  }

  return (
    <Link to="/so-sanh-xe" className={`relative inline-flex ${className}`}>
      <GitCompare className="h-6 w-6" />
      <Badge variant="destructive" className="absolute -top-2 -right-2 min-w-5 h-5 flex items-center justify-center p-0 text-xs">
        {count}
      </Badge>
    </Link>
  );
};

export default CompareBadge;
