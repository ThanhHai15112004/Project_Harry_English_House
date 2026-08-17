import React from 'react';
import { useTranslation } from 'react-i18next';

export const HarryStory = ({ storyData }) => {
  const { t } = useTranslation();

  if (!storyData) return null;

  return (
    <section id="harry-story" className="py-16 sm:py-24 lg:py-28 bg-white border-b border-academic-border">
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column (40% -> 5 Cols): Big Editorial Headline with generous whitespace */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-black uppercase tracking-widest text-cta font-heading">
              {t('pages.about.story.badge')}
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-academic-heading font-heading leading-tight tracking-tight">
              {t(storyData.titleKey || 'pages.about.story.title')}
            </h2>

            <div className="w-12 h-1 bg-primary rounded-full mt-4" />
          </div>

          {/* Right Column (60% -> 7 Cols): Narrative Paragraphs & Subtle In-line Classroom Photo */}
          <div className="lg:col-span-7 space-y-6 text-academic-body text-sm sm:text-base leading-relaxed font-normal">
            
            {(storyData.paragraphKeys || []).map((pKey) => (
              <p key={pKey} className="leading-relaxed">
                {t(pKey)}
              </p>
            ))}

            {/* Subtle In-line Classroom Photo breaking text */}
            {storyData.image && (
              <div className="pt-4">
                <div className="rounded-3xl overflow-hidden bg-slate-50 border border-slate-200/90 shadow-card group">
                  <div className="h-56 sm:h-72 w-full overflow-hidden relative">
                    <img
                      src={storyData.image}
                      alt={t('pages.about.story.title')}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-academic-heading/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-medium italic">
                      "{t('home.aboutQuote')}"
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default HarryStory;
