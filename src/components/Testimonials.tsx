import React from 'react';
import { TESTIMONIALS, GYM_INFO } from '../data/gymData';
import { Star, Quote, CheckCircle, Sparkles, MessageCircle } from 'lucide-react';

interface TestimonialsProps {
  onOpenFreePass: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenFreePass }) => {
  return (
    <section id="testimonials" className="py-20 bg-zinc-950 text-white border-t border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-1.5 rounded-full text-xs font-bold text-zinc-300">
            <span className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </span>
            <span className="text-white font-black">{GYM_INFO.googleRating} / 5.0</span>
            <span className="text-zinc-500">•</span>
            <span>{GYM_INFO.googleReviewCount}+ Verified Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
            WHAT OUR <span className="text-red-500">MEMBERS SAY</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Don't take our word for it. Read honest feedback from real Apex members who train with us every single week.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-xl flex flex-col justify-between space-y-6 hover:border-zinc-700 transition-colors relative"
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-zinc-800/80 stroke-[1]" />

              <div className="space-y-4 relative z-10">
                {/* Star rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  "{t.quote}"
                </p>

                {/* Result Metric Tag */}
                <div className="p-2.5 bg-zinc-950 rounded-xl border border-zinc-800/90 text-xs font-extrabold text-emerald-400 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.resultMetric}</span>
                </div>
              </div>

              {/* User Bio */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                <img
                  src={t.image}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-red-500/40 shrink-0"
                />
                <div>
                  <h4 className="text-sm font-black text-white">{t.name}</h4>
                  <p className="text-[11px] text-zinc-400 font-medium">{t.role}</p>
                  <p className="text-[10px] text-red-400 font-bold">{t.durationWithUs}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl font-black uppercase text-white">Ready to Become Our Next Success Story?</h3>
          <p className="text-xs text-zinc-400 max-w-lg mx-auto">
            Test the waters with 0 risk. Get 3 full days of free access to our gym, classes, and InBody body scan.
          </p>

          <button
            onClick={onOpenFreePass}
            id="btn-testimonial-free-pass"
            className="py-3.5 px-8 bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/30 inline-flex items-center gap-2 cursor-pointer transition-all"
          >
            <Sparkles className="w-4 h-4" /> Claim Your 3-Day Free VIP Pass Now
          </button>
        </div>

      </div>
    </section>
  );
};
