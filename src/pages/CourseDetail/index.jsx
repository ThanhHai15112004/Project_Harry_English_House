import React from 'react';
import { MainLayout } from '@/components/layout';

export const CourseDetailPage = () => {
  return (
    <MainLayout>
      <div className="app-container py-32 text-center">
        <h1 className="text-3xl font-extrabold text-academic-heading font-heading">
          Chi Tiết Khóa Học
        </h1>
        <p className="text-academic-body mt-2">Nội dung chi tiết khóa học đang được phát triển.</p>
      </div>
    </MainLayout>
  );
};

export default CourseDetailPage;
