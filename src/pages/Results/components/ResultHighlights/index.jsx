import React from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles, Trophy, Award, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ResultHighlights = ({ highlights = [] }) => {
  const { t } = useTranslation();

  const iconMap = {
    ielts: <Trophy size={20} className="text-cta" />,
    toeic: <Award size={20} className="text-achievement" />,
    highschool: <CheckCircle2 size={20} className="text-emerald-600" />,
    verified: <ShieldCheck size={20} className="text-primary" />,
  };

  if (!highlights || highlights.length === 0) return null;

  return (
    <section className="py-10 bg-white border-b border-academic-border">
      <div className="app-container">
        
        {/* Horizontal Bar with Vertical Dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-academic-border bg-academic-soft-white/60 rounded-3xl border border-academic-border shadow-xs overflow-hidden">
          {highlights.map((item, index) => (
            <div
              key={item.id || index}
              className="p-5 sm:p-6 flex flex-col justify-between space-y-3 hover:bg-white transition-colors duration-200"
            >
              {/* Top Tag & Icon */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold text-academic-muted uppercase tracking-wider">
                  {item.prefixKey ? t(item.prefixKey) : item.prefix}
                </span>
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                  {iconMap[item.id] || <Sparkles size={16} className="text-cta" />}
                </div>
              </div>

              {/* Number Metric */}
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary font-heading tracking-tight">
                    {item.value}
                  </span>
                  {(item.suffixKey || item.suffix) && (
                    <span className="text-lg font-bold text-academic-gold font-heading">
                      {item.suffixKey ? t(item.suffixKey) : item.suffix}
                    </span>
                  )}
                </div>
                <div className="text-xs sm:text-sm font-bold text-academic-heading font-heading mt-1">
                  {item.labelKey ? t(item.labelKey) : item.label}
                </div>
              </div>

              {/* Subtext info */}
              <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between gap-1 text-[11px] text-academic-muted">
                <span className="truncate">{item.subKey ? t(item.subKey) : item.sub}</span>
                {(item.badgeKey || item.badge) && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-academic-light-blue text-primary flex-shrink-0">
                    {item.badgeKey ? t(item.badgeKey) : item.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResultHighlights;
