"use client"
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What do I get exactly?',
    answer: 'You get all the features listed on the pricing page, including future updates.',
  },
  {
    question: 'Can I get a refund?',
    answer: 'We offer a 30-day money-back guarantee if you are not satisfied with our product.',
  },
  {
    question: 'I have another question',
    answer: 'Cool, contact us by email.',
  },
  // ...add more FAQs as needed
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h5 className="text-sm uppercase font-bold text-gray-500">FAQ</h5>
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="w-full md:w-1/2">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 py-3">
                <button
                  className="w-full text-left flex items-center justify-between"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={`${activeIndex === index ? 'font-semibold' : 'font-normal'}`}>
                    {faq.question}
                  </span>
                  <span>{activeIndex === index ? '−' : '+'}</span>
                </button>
                <div
                  className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}
                >
                  <p className="pt-3">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
