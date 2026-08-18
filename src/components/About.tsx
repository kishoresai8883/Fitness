import React, { useState } from 'react';
import { Award, ShieldCheck, Zap, Users, CheckCircle, ArrowRight, Dumbbell, Flame } from 'lucide-react';
import { GYM_INFO, TRAINERS } from '../data/gymData';

interface AboutProps {
  onOpenFreePass: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenFreePass }) => {
  const [activeTrainerTab, setActiveTrainerTab] = useState(TRAINERS[0].id);

  const selectedTrainer = TRAINERS.find(t => t.id === activeTrainerTab) || TRAINERS[0];

  return (
    <section id="about" className="py-20 bg-zinc-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-red-600/10 text-red-500 border border-red-600/20">
            <Dumbbell className="w-3.5 h-3.5" /> Welcome to The Gym
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
            MORE THAN A GYM. <br />
            <span className="text-red-500">A HIGH-PERFORMANCE COMMUNITY.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Founded on the belief that everyone deserves elite-level coaching, world-class equipment, and a supportive environment without corporate commercial gym nonsense.
          </p>
        </div>

        {/* 2-Column Story & Culture Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Vision & Culture */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-black uppercase tracking-tight text-white flex items-center gap-2">
                <Flame className="w-6 h-6 text-red-500" /> Built for Real Transformation
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                At Apex Performance, we eliminate guesswork. Whether you are lifting a barbell for the first time or training for your next athletic competition, our certified strength coaches walk with you every step of the way.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-zinc-950/80 border border-zinc-800 rounded-xl space-y-1">
                <div className="text-red-500 font-extrabold text-sm uppercase flex items-center gap-1.5">
                  <Award className="w-4 h-4" /> Master Coaches
                </div>
                <p className="text-xs text-zinc-400">CSCS & DPT certified trainers supervising form on every lift.</p>
              </div>

              <div className="p-4 bg-zinc-950/80 border border-zinc-800 rounded-xl space-y-1">
                <div className="text-red-500 font-extrabold text-sm uppercase flex items-center gap-1.5">
                  <Zap className="w-4 h-4" /> Eleiko & Hammer Equipment
                </div>
                <p className="text-xs text-zinc-400">Competition barbells, bumper plates, custom turf & power racks.</p>
              </div>

              <div className="p-4 bg-zinc-950/80 border border-zinc-800 rounded-xl space-y-1">
                <div className="text-emerald-400 font-extrabold text-sm uppercase flex items-center gap-1.5">
                  <Users className="w-4 h-4" /> Inclusive Community
                </div>
                <p className="text-xs text-zinc-400">Zero ego. High energy encouragement from members of all ages.</p>
              </div>

              <div className="p-4 bg-zinc-950/80 border border-zinc-800 rounded-xl space-y-1">
                <div className="text-amber-400 font-extrabold text-sm uppercase flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Infrared & Recovery
                </div>
                <p className="text-xs text-zinc-400">Cold plunge tubs, infrared sauna, and recovery room included.</p>
              </div>
            </div>

            {/* Amenities List 
            <div className="pt-2 space-y-2">
              <h4 className="text-xs font-black uppercase tracking-wider text-zinc-400">Club Amenities & Services:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                {GYM_INFO.amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="pt-2">
              <button
                onClick={onOpenFreePass}
                id="about-try-free-btn"
                className="py-3.5 px-6 bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/30 flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Book Your Free Tour & Trial Pass</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Coach Spotlight */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-red-500">COACHING SPOTLIGHT</span>
                <h3 className="text-xl font-black uppercase text-white">Meet Your Expert Coaches</h3>
              </div>
            </div>

            {/* Coach Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              {TRAINERS.map((trainer) => (
                <button
                  key={trainer.id}
                  onClick={() => setActiveTrainerTab(trainer.id)}
                  className={`py-2 px-3.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${activeTrainerTab === trainer.id
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
                    }`}
                >
                  {trainer.name}
                </button>
              ))}
            </div>

            {/* Active Coach Detail Card */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              <div className="sm:col-span-5 h-56 rounded-lg overflow-hidden relative">
                <img
                  src={selectedTrainer.image}
                  alt={selectedTrainer.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-2 left-2 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-bold text-amber-400">
                  {selectedTrainer.yearsExperience}+ Yrs Exp
                </div>
              </div>

              <div className="sm:col-span-7 space-y-3">
                <div>
                  <h4 className="text-lg font-black text-white">{selectedTrainer.name}</h4>
                  <p className="text-xs text-red-400 font-bold">{selectedTrainer.role}</p>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  "{selectedTrainer.bio}"
                </p>

                <div className="space-y-1.5 pt-1">
                  <div className="text-[10px] font-black uppercase tracking-wider text-zinc-400">Specialties:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedTrainer.specialties.map((spec, i) => (
                      <span key={i} className="px-2 py-0.5 bg-zinc-800 text-zinc-300 rounded text-[10px] font-semibold">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-800">
                  <div className="text-[10px] font-bold uppercase text-zinc-400">Certifications:</div>
                  <p className="text-[11px] text-zinc-300 font-medium">
                    {selectedTrainer.certifications.join(' • ')}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
