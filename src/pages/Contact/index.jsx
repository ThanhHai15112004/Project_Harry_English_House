import React from 'react';
import { MainLayout } from '@/components/layout';
import { useDocumentTitle } from '@/core';
import {
  ContactHero,
  ContactMainSection,
  ContactMapSection,
  ContactFaq,
  MobileStickyContact,
} from './components';

export const ContactPage = () => {
  useDocumentTitle('contact');

  const scrollToMap = () => {
    const el = document.getElementById('contact-map');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById('contact-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <MainLayout>
      {/* 1. Hero Ngắn (300-380px Desktop) */}
      <ContactHero />

      {/* 2. Khối Chính: Thông Tin Liên Hệ (38% Navy) + Form Tư Vấn (62% White) */}
      <ContactMainSection onScrollToMap={scrollToMap} />

      {/* 3. Bản Đồ Google Maps & Thông Tin Cơ Sở (70/30) */}
      <ContactMapSection />

      {/* 4. FAQ Rút Gọn 4 Câu Then Chốt (Accordion Viền Mỏng) */}
      <ContactFaq />

      {/* 5. Sticky Bottom Bar Trên Mobile */}
      <MobileStickyContact onScrollToForm={scrollToForm} />
    </MainLayout>
  );
};

export default ContactPage;
