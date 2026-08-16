import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '@/components/common';

export const TeachingTeam = ({ teamList = [] }) => {
  const { t } = useTranslation();

  if (!teamList || teamList.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-academic-border">
      <div className="app-container">
        
        {/* Section Header */}
        <SectionTitle
          badge={t('pages.about.team.badge')}
          title={t('pages.about.team.title')}
          subtitle={t('pages.about.team.subtitle')}
        />

        {/* Mentors Grid (3 cols desktop, 2 cols tablet, 1 col mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {teamList.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-academic-soft-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-card hover:shadow-xl hover:border-academic-cta/40 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Portrait Image Frame (75% Card Height) */}
              <div className="h-72 sm:h-80 w-full overflow-hidden bg-slate-100 relative">
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-academic-heading/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Minimalist Text Info */}
              <div className="p-5 bg-white border-t border-slate-100 space-y-1.5 text-left">
                <h3 className="text-base sm:text-lg font-bold text-academic-heading font-heading">
                  {mentor.name}
                </h3>
                <p className="text-xs font-semibold text-cta">
                  {mentor.role}
                </p>
                <p className="text-xs text-academic-muted font-normal">
                  {mentor.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeachingTeam;
