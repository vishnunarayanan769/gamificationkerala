import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal, ease } from "./Reveal";

const faqs = [
  {
    question: "Do I need to download anything?",
    answer:
      "Nope. Every playable game runs in your browser. Just pick one, open it, and follow the in-game instructions.",
  },
  {
    question: "Are the games really free?",
    answer:
      "Yes. Road Rash Kerala and Veedu are both free to play right now, and so will everything else on the shelf. There is no checkout between you and the fun.",
  },
  {
    question: "Can I play on my phone?",
    answer:
      "Yes, you can open the games on mobile or desktop. Each game shows the controls for your device, so you're never guessing.",
  },
  {
    question: "Is Veedu in Malayalam?",
    answer:
      "It is. Veedu is a Kerala home story with Malayalam writing and quizzes, made to feel close to home.",
  },
  {
    question: "What does 'in the workshop' mean?",
    answer:
      "Those games are still being built. They're in the library so you can see what's coming, but the play buttons go live only when the games are ready.",
  },
  {
    question: "Will there be more games?",
    answer:
      "That's the plan. gamiFICATION is a growing little home for playful experiments, so come back and see what's new.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <section className="faq-section section-pad" id="faq" aria-labelledby="faq-title">
      <div className="section-shell faq-inner">
        <Reveal className="faq-heading">
          <span className="eyebrow">Good to know</span>
          <h2 id="faq-title">A few good questions.</h2>
          <p>Everything you need to know before you press play.</p>
        </Reveal>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={faq.question} delay={index * 0.04}>
                <div className={`faq-item ${isOpen ? "faq-item-open" : ""}`}>
                  <h3>
                    <button
                      type="button"
                      id={`faq-question-${index}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span>{faq.question}</span>
                      <Plus size={21} strokeWidth={1.7} className="faq-icon" aria-hidden="true" />
                    </button>
                  </h3>
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    aria-hidden={!isOpen}
                    className="faq-answer"
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.32, ease }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
