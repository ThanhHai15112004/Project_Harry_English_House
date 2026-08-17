import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Analytics } from '@vercel/analytics/react';
import { useLenis, ROUTES, ThemeProvider } from '@/core';
import { ScrollToTop, FloatingContact } from '@/components/common';
import {
  HomePage,
  CoursesPage,
  CourseDetailPage,
  ResultsPage,
  AboutPage,
  ContactPage,
} from '@/pages';
import '@/styles/index.css';

export const App = () => {
  // Initialize smooth scrolling automatically
  useLenis();

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <FloatingContact />
        <Toaster richColors position="top-right" closeButton />
        <Analytics />
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.COURSES} element={<CoursesPage />} />
          <Route path={ROUTES.COURSE_DETAIL} element={<CourseDetailPage />} />
          <Route path={ROUTES.RESULTS} element={<ResultsPage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.CONTACT} element={<ContactPage />} />
          {/* Fallback to HomePage */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
