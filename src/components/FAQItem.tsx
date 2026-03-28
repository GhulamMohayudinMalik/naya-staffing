'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors rounded-2xl px-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className={`text-lg md:text-2xl font-black tracking-tight transition-colors ${isOpen ? 'text-gold' : 'text-white group-hover:text-gold'}`}>
          {question}
        </span>
        <div className={`shrink-0 ml-4 w-10 h-10 rounded-2xl border border-white/10 flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-gold border-gold rotate-180' : 'bg-white/5 group-hover:border-gold/30'}`}>
          {isOpen ? <Minus className="w-5 h-5 text-navy-dark" /> : <Plus className="w-5 h-5 text-white" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'max-h-[800px] pb-10 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-400 font-semibold leading-relaxed text-lg max-w-4xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
