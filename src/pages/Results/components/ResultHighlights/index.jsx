import React from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles, Trophy, Award, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ResultHighlights = ({ highlights = [] }) => {
  const { t } = useTranslation();

  const iconMap = {
    ielts: {
      icon: <Trophy size={16} className="text-cta" />,
      bg: 'bg-blue-50 border-blue-200/80',
      badgeBg: 'bg-academic-light-blue text-primary',
    },
    toeic: {
      icon: <Award size={16} className="text-amber-600" />,
      bg: 'bg-amber-50 border-amber-200/80',
      badgeBg: 'bg-amber-100/80 text-amber-900',
    },
    highschool: {
      icon: <CheckCircle2 size={16} className="text-emerald-600" />,
      bg: 'bg-emerald-50 border-emerald-200/80',
      badgeBg: 'bg-emerald-100/80 text-emerald-900',
    },
    verified: {
      icon: <ShieldCheck size={16} className="text-primary" />,
      bg: 'bg-indigo-50 border-indigo-200/80',
      badgeBg: 'bg-indigo-100/80 text-indigo-900',
    },
  };

  if (!highlights || highlights.length === 0) return null;

  return (
    <section className="py-4 sm:py-5 bg-academic-soft-white/60 border-b border-academic-border">
      <div className="app-container">
        
        {/* Inline Prestige Badges Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:gap-4">
          {highlights.map((item, index) => {
            const meta = iconMap[item.id] || {
              icon: <Sparkles size={15} className="text-cta" />,
              bg: 'bg-slate-50 border-slate-200',
              badgeBg: 'bg-slate-100 text-slate-700',
            };

            return (
              <div
                key={item.id || index}
                className="inline-flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-cta/40 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                {/* Mini Circle Icon */}
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform ${meta.bg}`}
                >
                  {meta.icon}
                </div>

                {/* Score & Label Info */}
                <div className="flex items-baseline gap-1.5 text-left">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-sm sm:text-base font-black text-primary font-heading tracking-tight group-hover:text-cta transition-colors">
                      {item.value}
                    </span>
                    {(item.suffixKey || item.suffix) && (
                      <span className="text-xs font-extrabold text-academic-gold font-heading">
                        {item.suffixKey ? t(item.suffixKey) : item.suffix}
                      </span>
                    )}
                  </div>
                  
                  <span className="text-xs font-bold text-academic-heading font-heading">
                    {item.labelKey ? t(item.labelKey) : item.label}
                  </span>
                </div>

                {/* Optional Status Pill Tag */}
                {(item.badgeKey || item.badge) && (
                  <span
                    className={`hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-black uppercase font-heading tracking-wider flex-shrink-0 ${meta.badgeBg}`}
                  >
                    {item.badgeKey ? t(item.badgeKey) : item.badge}
                  </span>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ResultHighlights;


