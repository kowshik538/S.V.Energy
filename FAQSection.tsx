import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqItems = [
  {
    question: "How much do solar panels cost?",
    answer: "The cost of solar panels varies based on the size of your property, energy needs, and the type of panels you choose. On average, residential installations range from $15,000 to $25,000 before tax incentives and rebates. We provide free consultations to give you an accurate quote based on your specific situation."
  },
  {
    question: "How long does a solar panel installation take?",
    answer: "A typical residential installation takes 1-3 days once all permits are approved. The entire process, including site assessment, design, permitting, and installation, usually takes 2-3 months. Commercial installations may take longer depending on the project scope."
  },
  {
    question: "Will solar panels work during a power outage?",
    answer: "Standard grid-tied solar systems will not operate during a power outage for safety reasons. However, if you add battery storage to your system, you can maintain power during outages. We offer various battery solutions that can be integrated with your solar system."
  },
  {
    question: "How long do solar panels last?",
    answer: "Most solar panels come with a 25-30 year warranty and will continue to produce electricity for many years beyond that. The production efficiency might decrease slightly over time (typically 0.5% per year), but modern panels are designed to be durable and long-lasting."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we offer several financing options including solar loans, leases, and power purchase agreements (PPAs). Each option has different benefits, and our team can help you determine which one is best for your financial situation."
  },
  {
    question: "What maintenance do solar panels require?",
    answer: "Solar panels require minimal maintenance. Generally, they only need occasional cleaning to remove dust and debris, which can often be done by rain. We recommend a professional inspection once a year to ensure optimal performance. We offer maintenance plans for all our installations."
  }
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about solar energy and our services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <button
                className={`flex justify-between items-center w-full p-5 text-left font-medium focus:outline-none ${
                  activeIndex === index ? 'bg-gray-50' : 'bg-white'
                }`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <span className="text-lg">{item.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              <div
                id={`faq-content-${index}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                aria-hidden={activeIndex !== index}
              >
                <div className="p-5 border-t border-gray-200 text-gray-600">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;