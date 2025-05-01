
import React from 'react';
import Layout from '@/components/Layout';
import { useCompare } from '@/contexts/CompareContext';
import CompareEmptyState from '@/components/compare/CompareEmptyState';
import CompareTable from '@/components/compare/CompareTable';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { GitCompare, Plus, Trash2 } from 'lucide-react';

const ComparePage = () => {
  const { compareItems, clearCompare } = useCompare();
  const hasItems = compareItems.length > 0;

  return (
    <Layout>
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            <GitCompare className="h-6 w-6" />
            <h1 className="text-3xl font-bold">So Sánh Xe</h1>
          </div>
          <p className="text-gray-300">
            So sánh thông số kỹ thuật, tính năng và giá bán các dòng xe tải, xe đầu kéo, xe cẩu và mooc
          </p>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4">
        {hasItems ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <div className="text-lg font-semibold">
                Đang so sánh {compareItems.length} xe
              </div>
              <div className="flex gap-3">
                {compareItems.length < 3 && (
                  <Button asChild variant="outline">
                    <Link to="/danh-muc" className="flex items-center gap-1">
                      <Plus size={16} />
                      Thêm xe
                    </Link>
                  </Button>
                )}
                <Button 
                  variant="destructive" 
                  onClick={clearCompare}
                  className="flex items-center gap-1"
                >
                  <Trash2 size={16} />
                  Xóa tất cả
                </Button>
              </div>
            </div>
            
            <CompareTable trucks={compareItems} />
          </div>
        ) : (
          <CompareEmptyState />
        )}
      </div>
    </Layout>
  );
};

export default ComparePage;
