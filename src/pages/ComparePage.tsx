
import React from 'react';
import Layout from '@/components/Layout';
import { useCompare } from '@/contexts/CompareContext';
import CompareTable from '@/components/compare/CompareTable';
import CompareEmptyState from '@/components/compare/CompareEmptyState';
import { Button } from '@/components/ui/button';
import { GitCompare } from 'lucide-react';

const ComparePage = () => {
  const { compareItems, clearCompare } = useCompare();
  
  return (
    <Layout>
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-2">
            <GitCompare className="h-6 w-6 mr-2" />
            <h1 className="text-3xl font-bold">So Sánh Xe</h1>
          </div>
          <p className="text-gray-300">
            So sánh thông số kỹ thuật, tính năng và giá bán các dòng xe tải, xe đầu kéo, xe cẩu và mooc
          </p>
        </div>
      </div>

      <div className="container mx-auto py-6 px-4">
        {compareItems.length > 0 ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">
                Đang so sánh {compareItems.length} xe
              </h2>
              <Button 
                variant="outline" 
                onClick={clearCompare}
                className="text-red-500 border-red-500 hover:bg-red-50"
              >
                Xóa tất cả
              </Button>
            </div>
            <CompareTable trucks={compareItems} />
          </>
        ) : (
          <CompareEmptyState />
        )}
      </div>
    </Layout>
  );
};

export default ComparePage;
