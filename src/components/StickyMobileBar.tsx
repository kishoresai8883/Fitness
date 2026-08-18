import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface StickyMobileBarProps {
  onOpenFreePass: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenFreePass }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 p-2.5 shadow-2xl">
      <div className="grid grid-cols-12 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${GYM_INFO.phoneClean}`}
          id="sticky-mobile-call"
          className="col-span-3 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 rounded-xl flex flex-col items-center justify-center gap-0.5 text-[10px] font-extrabold uppercase transition-colors"
        >
          <Phone className="w-4 h-4 text-red-500" />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${GYM_INFO.whatsappClean}?text=${encodeURIComponent(GYM_INFO.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          id="sticky-mobile-whatsapp"
          className="col-span-3 py-3 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-600/60 text-emerald-300 rounded-xl flex flex-col items-center justify-center gap-0.5 text-[10px] font-extrabold uppercase transition-colors"
        >
          <MessageSquare className="w-4 h-4 fill-emerald-400 text-emerald-400" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenFreePass}
          id="sticky-mobile-freepass"
          className="col-span-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl flex items-center justify-center gap-1.5 text-xs font-black uppercase tracking-wider shadow-lg shadow-red-600/30 cursor-pointer transition-all"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
          <span>3-Day Free Pass</span>
        </button>
      </div>
    </div>
  );
};
