import React from 'react';
import { TRANSFORMATION_STORIES } from '../data/gymData';
import { Flame, Trophy, Zap, Heart, Shield, Dumbbell, Sparkles } from 'lucide-react';

interface ResultsBenefitsProps {
  onOpenFreePass: () => void;
}

export const ResultsBenefits: React.FC<ResultsBenefitsProps> = ({ onOpenFreePass }) => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: 'Boundless All-Day Energy',
      desc: 'Supercharge your daily energy levels, elevate mental clarity, and eliminate afternoon burnout.'
    },
    {
      icon: <Flame className="w-6 h-6 text-red-500" />,
      title: 'Sculpted Lean Muscle & Fat Loss',
      desc: 'Burn calories efficiently and build tight, athletic muscle that transforms your overall body shape.'
    },
    {
      icon: <Trophy className="w-6 h-6 text-emerald-400" />,
      title: 'Unshakeable Physical Confidence',
      desc: 'Feel strong, capable, and proud every time you look in the mirror or tackle physical tasks.'
    },
    {
      icon: <Heart className="w-6 h-6 text-red-400" />,
      title: 'Joint Resilience & Longevity',
      desc: 'Fortify your back, shoulders, and knees against daily wear and tear for long-term pain-free living.'
    }
  ];

  return (
    <section id="results" className="py-20 bg-zinc-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-red-600/10 text-red-500 border border-red-600/20">
            <Trophy className="w-3.5 h-3.5" /> Proven Member Transformations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
            REAL PEOPLE. <span className="text-red-500">REAL RESULTS.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            These aren't fitness models—they are everyday members who committed to the process and transformed their health with Apex coaching.
          </p>
        </div>

        {/* Transformation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TRANSFORMATION_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-xl space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div>
                    <h3 className="text-lg font-black text-white">{story.name}, {story.age}</h3>
                    <p className="text-xs text-zinc-400">Goal: {story.goal}</p>
                  </div>
                  <div className="bg-red-600/20 border border-red-500/30 text-red-400 px-3 py-1 rounded-full text-xs font-extrabold uppercase">
                    {story.timeframe}
                  </div>
                </div>

                {/* Before & After Visual Pair */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative h-48 rounded-xl overflow-hidden group">
                    <img src={story.beforeImg} alt="Before transformation" className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 bg-black/80 px-2.5 py-0.5 rounded text-[10px] font-bold text-zinc-300">
                      BEFORE
                    </div>
                  </div>

                  <div className="relative h-48 rounded-xl overflow-hidden group border-2 border-red-600/50">
                    <img src={story.afterImg} alt="After transformation" className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2 bg-red-600 px-2.5 py-0.5 rounded text-[10px] font-extrabold text-white">
                      AFTER ({story.timeframe})
                    </div>
                  </div>
                </div>

                {/* Result Highlight */}
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl space-y-1">
                  <div className="text-xs font-black uppercase text-amber-400">Achievement Highlight:</div>
                  <div className="text-sm font-extrabold text-white">{story.achievement}</div>
                  <div className="text-[11px] text-zinc-400">Guided by: {story.trainer}</div>
                </div>

                <p className="text-xs text-zinc-300 italic">
                  "{story.quote}"
                </p>
              </div>

              <button
                onClick={onOpenFreePass}
                className="w-full py-3 px-4 bg-zinc-900 hover:bg-red-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl border border-zinc-800 hover:border-red-500 transition-all cursor-pointer"
              >
                Start Your Transformation Story Today
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
