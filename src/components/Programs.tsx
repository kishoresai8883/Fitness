import React, { useState } from 'react';
import { PROGRAMS } from '../data/gymData';
import { Program } from '../types';
import { Flame, Clock, Zap, CheckCircle, ArrowRight, Sparkles, X, ChevronRight, Dumbbell } from 'lucide-react';

interface ProgramsProps {
  onSelectProgramForTrial: (programTitle: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgramForTrial }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);

  const filteredPrograms = selectedCategory === 'all'
    ? PROGRAMS
    : PROGRAMS.filter(p => p.category === selectedCategory);

  const getIntensityBadge = (intensity: Program['intensity']) => {
    switch (intensity) {
      case 'Extreme':
        return <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-red-600 text-white flex items-center gap-1"><Flame className="w-3 h-3" /> Extreme Intensity</span>;
      case 'High':
        return <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center gap-1"><Zap className="w-3 h-3" /> High Energy</span>;
      default:
        return <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Moderate Flow</span>;
    }
  };

  return (
    <section id="programs" className="py-20 bg-zinc-950 text-white border-t border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-red-600/10 text-red-500 border border-red-600/20">
              <Dumbbell className="w-3.5 h-3.5" /> High-Performance Programs
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
              ENGINEERED FOR <span className="text-red-500">MAXIMUM RESULTS</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Every program at Apex is scientifically structured by master coaches. Select any program to view full details and book a free trial class.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Programs' },
              { id: 'strength', label: 'Power & Muscle' },
              { id: 'hiit', label: 'HIIT & Burn' },
              { id: 'coaching', label: '1-on-1 Coaching' },
              { id: 'boxing', label: 'Turf & Agility' },
              { id: 'mobility', label: 'Mobility & Recovery' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`py-2 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-zinc-900 border border-zinc-800 hover:border-red-600/50 rounded-2xl overflow-hidden shadow-xl flex flex-col group transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                
                <div className="absolute top-3 left-3">
                  {getIntensityBadge(program.intensity)}
                </div>

                <div className="absolute bottom-3 right-3 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-zinc-300 border border-zinc-800 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-red-500" />
                  <span>{program.duration}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-white uppercase group-hover:text-red-500 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-xs font-semibold text-red-400">
                    {program.tagline}
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                    {program.description}
                  </p>
                </div>

                {/* Key Benefits List */}
                <div className="space-y-1.5 pt-2 border-t border-zinc-800">
                  <div className="text-[10px] font-extrabold uppercase text-zinc-500 tracking-wider">Target Benefits:</div>
                  <ul className="space-y-1 text-xs text-zinc-300">
                    {program.keyBenefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="pt-3 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setActiveModalProgram(program)}
                    className="py-2.5 px-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => onSelectProgramForTrial(program.title)}
                    className="py-2.5 px-3 bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Free Trial</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Program Detail Modal Drawer */}
      {activeModalProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden text-zinc-100 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setActiveModalProgram(null)}
              className="absolute top-4 right-4 z-10 p-2 text-zinc-400 hover:text-white bg-zinc-950/80 hover:bg-zinc-800 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 sm:h-72">
              <img
                src={activeModalProgram.image}
                alt={activeModalProgram.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
              
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  {getIntensityBadge(activeModalProgram.intensity)}
                  <span className="px-2.5 py-1 bg-zinc-950/80 text-zinc-300 text-xs font-bold rounded-md">
                    🔥 {activeModalProgram.caloriesBurned}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white">
                  {activeModalProgram.title}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-xs font-extrabold uppercase text-red-500 tracking-wider mb-1">Overview</h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {activeModalProgram.fullDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-2">
                  <h4 className="text-xs font-extrabold uppercase text-amber-400 tracking-wider">Who This Is For</h4>
                  <ul className="space-y-1 text-xs text-zinc-300">
                    {activeModalProgram.suitableFor.map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-2">
                  <h4 className="text-xs font-extrabold uppercase text-emerald-400 tracking-wider">Schedule Highlights</h4>
                  <p className="text-xs text-zinc-300 font-medium">
                    {activeModalProgram.scheduleHighlights}
                  </p>
                  <p className="text-[11px] text-zinc-500 pt-1">
                    * Full weekly class times available in our Schedule section.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase text-red-500 tracking-wider mb-2">Key Program Outcomes</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                  {activeModalProgram.keyBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 bg-zinc-950/60 p-2.5 rounded-lg border border-zinc-800/80">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const title = activeModalProgram.title;
                    setActiveModalProgram(null);
                    onSelectProgramForTrial(title);
                  }}
                  className="flex-1 py-3.5 px-6 bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" /> Book Free Trial For This Program
                </button>

                <button
                  onClick={() => setActiveModalProgram(null)}
                  className="py-3.5 px-6 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs uppercase rounded-xl cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
