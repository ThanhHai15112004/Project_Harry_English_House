import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { SectionTitle } from '@/components/common';

export const ContactFaq = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

  const faqItems = [
    {
      id: 'q1',
      question: t('pages.contact.q1'),
      answer: t('pages.contact.a1'),
    },
    {
      id: 'q2',
      question: t('pages.contact.q2'),
      answer: t('pages.contact.a2'),
    },
    {
      id: 'q3',
      question: t('pages.contact.q3'),
      answer: t('pages.contact.a3'),
    },
    {
      id: 'q4',
      question: t('pages.contact.q4'),
      answer: t('pages.contact.a4'),
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-academic-border">
      <div className="app-container max-w-4xl mx-auto">
        
        {/* Section Header */}
        <SectionTitle
          badge={t('pages.contact.faqBadge')}
          title={t('pages.contact.faqTitle')}
          subtitle={t('pages.contact.faqSubtitle')}
        />

        {/* Clean Divider Accordion (No heavy card wrappers) */}
        <div className="divide-y divide-slate-200 border-t border-b border-slate-200 pt-2">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.id} className="py-5 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left gap-4 group focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-academic-heading font-heading group-hover:text-cta transition-colors">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-academic-light-blue text-cta rotate-180'
                        : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-3 pr-8 animate-fadeIn">
                    <p className="text-xs sm:text-sm text-academic-body leading-relaxed font-normal">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ContactFaq;
