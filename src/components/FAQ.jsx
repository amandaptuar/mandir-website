import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: "How far is the Mahakaleshwar Temple from the Bhakta Niwas?",
    answer: "We are located conveniently near Sandipani Parisar, ensuring a peaceful stay while still being accessible to the main temple areas."
  },
  {
    question: "Is hot water available in the rooms?",
    answer: "Yes, 24/7 hot and cold water facilities are available in all our attached washrooms."
  },
  {
    question: "Do you have parking facilities?",
    answer: "Yes, we offer secure parking space for our guests' vehicles."
  },
  {
    question: "How can I make a booking?",
    answer: "You can easily make a booking by contacting us directly via WhatsApp or Phone call on +91 9001452087."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Find answers to common questions about your stay at Shree Mahakaleshwar Bhakta Niwas.
        </p>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                {openIndex === index ? <ChevronUp className="faq-icon" /> : <ChevronDown className="faq-icon" />}
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
