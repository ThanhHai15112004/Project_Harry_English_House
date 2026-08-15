import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { usePricingData, PRICING_TERMS, SECTION_IDS } from '@/core';
import { SectionTitle, Button } from '@/components/common';

export const PricingSection = () => {
  const { t } = useTranslation();
  const [term, setTerm] = useState(PRICING_TERMS.THREE_MONTHS);
  const pricing = usePricingData();

  if (!pricing) return null;

  const currentList =
    term === PRICING_TERMS.THREE_MONTHS
      ? pricing.packages3Months
      : pricing.packages6Months;

  return (
    <section id={SECTION_IDS.PRICING} className="py-16 sm:py-24 bg-slate-50">
      <div className="app-container">
        <SectionTitle
          badge={t('pricing.badge')}
          title={pricing.title}
          subtitle={pricing.note}
        />

        {/* Term Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-slate-200/90 shadow-inner">
            <button
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                term === PRICING_TERMS.THREE_MONTHS
                  ? 'bg-white text-blue-800 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              onClick={() => setTerm(PRICING_TERMS.THREE_MONTHS)}
            >
              {t('pricing.term3')}
            </button>
            <button
              className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                term === PRICING_TERMS.SIX_MONTHS
                  ? 'bg-white text-blue-800 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              onClick={() => setTerm(PRICING_TERMS.SIX_MONTHS)}
            >
              <span>{t('pricing.term6')}</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-100 text-amber-800">
                {t('pricing.discount10')}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {currentList.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="mb-4">
                  <h3 className="text-lg font-extrabold text-slate-900 font-heading mb-2">
                    {pkg.program}
                  </h3>
                  {(pkg.promotion || pkg.discount) && (
                    <span className="inline-block text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200/80 px-2.5 py-1 rounded-lg">
                      {pkg.promotion || pkg.discount}
                    </span>
                  )}
                </div>

                {/* Price Tiers */}
                <div className="space-y-3 py-4 border-y border-slate-100 text-xs sm:text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">{t('pricing.tier2_4')}</span>
                    <strong className="text-slate-900 font-bold">{pkg.class2_4}</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">{t('pricing.tier5_7')}</span>
                    <strong className="text-slate-900 font-bold">{pkg.class5_7}</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">{t('pricing.tier8_10')}</span>
                    <strong className="text-slate-900 font-bold">{pkg.class8_10}</strong>
                  </div>
                </div>

                {pkg.monthlyAvg && (
                  <p className="text-center text-xs font-semibold text-sky-600 my-4">
                    {pkg.monthlyAvg}
                  </p>
                )}
              </div>

              <div className="pt-4">
                <a href={`#${SECTION_IDS.CONTACT}`} className="block">
                  <Button fullWidth size="sm" variant={idx === 3 ? 'primary' : 'outline'}>
                    {t('pricing.enrollBtn')}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Special Classes Highlight */}
        <div className="bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
              <Sparkles size={24} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-white">
                {t('pricing.specialTitle')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">{t('pricing.specialSub')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricing.specialClasses.map((item, sIdx) => (
              <div
                key={sIdx}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-4"
              >
                <h4 className="text-base sm:text-lg font-bold text-white">{item.title}</h4>
                <div className="text-xl sm:text-2xl font-black text-sky-400 font-heading">
                  {item.price}
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {item.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <Check size={16} className="text-emerald-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
