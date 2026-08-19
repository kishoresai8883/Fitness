import React from 'react';
import { Sparkles, Phone, MessageSquare, Star, ShieldCheck, MapPin, Trophy, Flame, ChevronRight, Users, Dumbbell } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface HeroProps {
  onOpenFreePass: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenFreePass }) => {
  return (
    <section className="relative bg-zinc-950 text-white overflow-hidden pt-6 pb-16 lg:py-24 border-b border-zinc-800">
      {/* Background Image with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920"
          alt="Apex Performance Gym Interior"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transform filter brightness-90 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main Hero Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Top Badge & Rating */}
            <div className="inline-flex flex-wrap items-center gap-3 bg-zinc-900/90 border border-zinc-700/80 rounded-full px-4 py-2 text-xs font-bold text-zinc-200 shadow-xl backdrop-blur-md">
              <span className="flex items-center gap-1 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="text-white font-extrabold">{GYM_INFO.googleRating}</span>
                <span className="text-zinc-400">({GYM_INFO.googleReviewCount}+ Reviews)</span>
              </span>
              <span className="text-zinc-600">•</span>
              <span className="flex items-center gap-1.5 text-red-400">
                <Flame className="w-4 h-4 text-red-500" /> #1 Rated Gym in Hyd
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white leading-none">
                UNLEASH YOUR <br />
                <span className="bg-gradient-to-r from-red-500 via-amber-400 to-red-600 bg-clip-text text-transparent">
                  PEAK POTENTIAL
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-bold uppercase tracking-wider text-zinc-300">
                Strength • Conditioning • Personal Coaching • Community
              </p>
            </div>

            {/* Persuasive Subheadline */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-normal">
              The Gym is Hyderabad premier fitness studio. Experience world-class Hammer Strength equipment, elite personal trainers, high-energy HIIT workouts, and an unstoppable community.
            </p>

            {/* Action CTA Buttons Block */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenFreePass}
                id="hero-primary-cta"
                className="py-4 px-8 bg-red-600 hover:bg-red-500 active:scale-[0.98] text-white font-black uppercase tracking-wider text-sm rounded-xl shadow-2xl shadow-red-600/40 flex items-center justify-center gap-3 transition-all cursor-pointer group"
              >
                <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
                <span>Claim 3-Day Free VIP Pass</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Location & Operating Hours Tag 
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-400 font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>{GYM_INFO.address}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Lock-In Contracts</span>
              </div>
            </div>*/}

            {/* Quick Proof Pills */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-zinc-800/80 max-w-lg">
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-3 text-center">
                <div className="text-xl font-black text-white">1,500+</div>
                <div className="text-[11px] font-bold uppercase text-zinc-400">Active Members</div>
              </div>
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-3 text-center">
                <div className="text-xl font-black text-red-500">15+</div>
                <div className="text-[11px] font-bold uppercase text-zinc-400">Master Coaches</div>
              </div>
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-3 text-center">
                <div className="text-xl font-black text-amber-400">100%</div>
                <div className="text-[11px] font-bold uppercase text-zinc-400">Free 3-Day Pass</div>
              </div>
            </div>

          </div>

          {/* Hero Feature Card Column (Right Visual Showcase) */}
          <div className="lg:col-span-5">
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl space-y-6">

              <div className="relative h-64 rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800"
                  alt="Strength Training Zone"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md">
                  FEATURED PROGRAM
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <h3 className="text-lg font-black text-white uppercase">Power & Hypertrophy Gym</h3>
                  <p className="text-xs text-zinc-300">Eleiko platforms, periodized strength blocks & expert coach correction.</p>
                </div>
              </div>

              {/* Quick Highlight Points */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-zinc-950/60 border border-zinc-800 rounded-xl">
                  <div className="p-2.5 bg-red-600/20 text-red-500 rounded-lg">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-white">Clinical InBody 770 Scan Included</h4>
                    <p className="text-[11px] text-zinc-400">Accurate 3D muscle, fat, and visceral analysis for all trial passes.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-zinc-950/60 border border-zinc-800 rounded-xl">
                  <div className="p-2.5 bg-emerald-600/20 text-emerald-400 rounded-lg">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-white">Welcoming & High Energy Vibe</h4>
                    <p className="text-[11px] text-zinc-400">Zero gym intimidation. Complete support for beginners and pro lifters.</p>
                  </div>
                </div>
              </div>

              {/* Direct Booking Trigger */}
              <button
                onClick={onOpenFreePass}
                id="hero-card-trial-btn"
                className="w-full py-3.5 px-4 bg-zinc-800 hover:bg-red-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl border border-zinc-700 hover:border-red-500 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Reserve Your Free Trial Spot</span>
                <ChevronRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
