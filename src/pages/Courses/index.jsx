import React from 'react';
import { MainLayout } from '@/components/layout';

export const CoursesPage = () => {
  return (
    <MainLayout>
      <div className="app-container py-32 text-center">
        <h1 className="text-3xl font-extrabold text-academic-heading font-heading">
          Khóa Học Đào Tạo
        </h1>
        <p className="text-academic-body mt-2">Nội dung trang khóa học đang được phát triển.</p>
      </div>
    </MainLayout>
  );
};

export default CoursesPage;
