"use client";

import { useState } from 'react';
import './Faq.css';

const faqData = [
  {
    question: "Who is Cybervol best suited for?",
    answer: "We work with organizations that treat security as a strategic capability—from growing teams that need structure, to mature programs looking to validate or extend what they already have."
  },
  {
    question: "Do you only offer long-term engagements?",
    answer: "We offer flexible engagements tailored to your needs, ranging from focused assessments to long-term strategic partnerships."
  },
  {
    question: "Can you integrate with our existing tools and vendors?",
    answer: "Yes, we pride ourselves on our ability to integrate seamlessly with a wide variety of security tools and existing vendor ecosystems."
  },
  {
    question: "Where can we contact you?",
    answer: "You can contact us through our contact form, email, or by scheduling a direct consultation with our expert team."
  }
];

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleAccordion = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <section className="faq-section">
        <div className="faq-container">
          <div className="faq-left">
            <div className="faq-header-group">
              <div className="faq-badge-wrapper">
                <span className="faq-badge">faq's</span>
              </div>
              <h2 className="faq-title">
                Frequently Asked <br />
                <span className="blue-text-faq">Questions</span>
              </h2>
            </div>
            <p className="faq-description">
              Quick answers to common questions about how we work with clients.
            </p>
            <button className="faq-view-all">View all FAQ's</button>
          </div>

          <div className="faq-right">
            <div className="faq-accordion">
              {/* FAQ 1 */}
              <div className={`faq-item ${openFaq === 0 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => setOpenFaq(openFaq === 0 ? -1 : 0)}>
                  <h4>Who is Cyberval best suited for?</h4>
                  <span className="faq-icon">
                    <img src="/Arrow 6.svg" alt="Toggle FAQ" />
                  </span>
                </div>
                {openFaq === 0 && (
                  <div className="faq-answer">
                    <p>
                      We work with organizations that treat security as a strategic capability—from 
                      growing teams that need structure, to mature programs looking to validate or 
                      extend what they already have.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className={`faq-item ${openFaq === 1 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => setOpenFaq(openFaq === 1 ? -1 : 1)}>
                  <h4>Do you only offer long-term engagements?</h4>
                  <span className="faq-icon">
                    <img src="/Arrow 6.svg" alt="Toggle FAQ" />
                  </span>
                </div>
                {openFaq === 1 && (
                  <div className="faq-answer">
                    <p>
                      We offer flexible engagement models ranging from short-term rapid assessments 
                      and incident response to long-term strategic partnerships and managed security services.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className={`faq-item ${openFaq === 2 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => setOpenFaq(openFaq === 2 ? -1 : 2)}>
                  <h4>Can you integrate with our existing tools and vendors?</h4>
                  <span className="faq-icon">
                    <img src="/Arrow 6.svg" alt="Toggle FAQ" />
                  </span>
                </div>
                {openFaq === 2 && (
                  <div className="faq-answer">
                    <p>
                      Yes, our solutions are designed to be vendor-agnostic and we specialize in 
                      optimizing and integrating with your existing security stack to maximize 
                      your current investments.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className={`faq-item ${openFaq === 3 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => setOpenFaq(openFaq === 3 ? -1 : 3)}>
                  <h4>Where can we contact you?</h4>
                  <span className="faq-icon">
                    <img src="/Arrow 6.svg" alt="Toggle FAQ" />
                  </span>
                </div>
                {openFaq === 3 && (
                  <div className="faq-answer">
                    <p>
                      You can reach out to us via our contact form on the website, or directly through 
                      our sales and support email addresses provided in the footer.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
