import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ZoomIn } from 'lucide-react';
import { useMediaData, GALLERY_TABS, SECTION_IDS } from '@/core';
import { SectionTitle, Modal } from '@/components/common';

export const ActivitiesGallery = () => {
  const { t } = useTranslation();
  const media = useMediaData();
  const [tab, setTab] = useState(GALLERY_TABS.MINISTRY);
  const [activeImg, setActiveImg] = useState(null);

  if (!media) return null;

  const currentGallery =
    tab === GALLERY_TABS.MINISTRY
      ? media.ministry2025
      : tab === GALLERY_TABS.COLLAB
      ? media.collaborations
      : media.memories;

  return (
    <section id={SECTION_IDS.GALLERY} className="py-16 sm:py-24 bg-white border-y border-slate-100">
      <div className="app-container">
        <SectionTitle
          badge={t('gallery.badge')}
          title={t('gallery.title')}
          subtitle={t('gallery.subtitle')}
        />

        {/* Gallery Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border ${
              tab === GALLERY_TABS.MINISTRY
                ? 'bg-blue-700 text-white border-blue-700 shadow-md shadow-blue-700/20'
                : 'bg-white text-slate-600 border-slate-200/80 hover:border-blue-300 hover:text-blue-700'
            }`}
            onClick={() => setTab(GALLERY_TABS.MINISTRY)}
          >
            {t('gallery.tabMinistry')}
          </button>
          <button
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border ${
              tab === GALLERY_TABS.COLLAB
                ? 'bg-blue-700 text-white border-blue-700 shadow-md shadow-blue-700/20'
                : 'bg-white text-slate-600 border-slate-200/80 hover:border-blue-300 hover:text-blue-700'
            }`}
            onClick={() => setTab(GALLERY_TABS.COLLAB)}
          >
            {t('gallery.tabCollab')}
          </button>
          <button
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border ${
              tab === GALLERY_TABS.MEMORIES
                ? 'bg-blue-700 text-white border-blue-700 shadow-md shadow-blue-700/20'
                : 'bg-white text-slate-600 border-slate-200/80 hover:border-blue-300 hover:text-blue-700'
            }`}
            onClick={() => setTab(GALLERY_TABS.MEMORIES)}
          >
            {t('gallery.tabMemories')}
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {currentGallery.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-sm hover:shadow-card cursor-pointer transition-all duration-300"
              onClick={() => setActiveImg(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-1.5 text-white transition-opacity p-4 text-center">
                <ZoomIn size={22} />
                <span className="text-xs font-bold leading-tight line-clamp-2">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        <Modal
          isOpen={!!activeImg}
          onClose={() => setActiveImg(null)}
          title={activeImg?.title || t('gallery.badge')}
        >
          {activeImg && (
            <div className="flex items-center justify-center p-2">
              <img
                src={activeImg.image}
                alt={activeImg.title}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
              />
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default ActivitiesGallery;
