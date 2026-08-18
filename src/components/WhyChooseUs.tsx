import React from 'react';
import { ShieldCheck, Award, Zap, Heart, Check, X, Sparkles, Dumbbell } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenFreePass: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenFreePass }) => {
  const pillars = [
    {
      icon: <Award className="w-8 h-8 text-red-500" />,
      title: 'Master-Level Certified Coaches',
      description: 'Never feel lost or unsafe. Every lifting floor is supervised by certified coaches who check your form, offer cues, and ensure progress without injuries.'
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-400" />,
      title: 'Competition-Grade Eleiko Equipment',
      description: 'Say goodbye to waiting for broken machines. We stock multiple Olympic platforms, bumper plates, power racks, kettlebells, and custom indoor turf tracks.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
      title: 'Zero Contract Lock-Ins & Fair Billing',
      description: 'We earn your business every month. Flexible month-to-month memberships with simple 30-day cancellation guarantees and zero hidden annual fees.'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: 'Unstoppable Supportive Community',
      description: 'High energy, zero gym intimidation. Lift alongside friendly members who celebrate every personal best, new PR, and body milestone with you.'
    }
  ];

  const comparisonRows = [
    { feature: 'Personalized Form Correction on Every Set', apex: true, commercial: false },
    { feature: 'Clinical InBody 3D Body Composition Scans', apex: true, commercial: false },
    { feature: 'Eleiko Barbells & Competition Lifting Racks', apex: true, commercial: false },
    { feature: 'Clean Infrared Sauna & Cold Plunge Included', apex: true, commercial: false },
    { feature: 'Transparent Month-to-Month (No Hidden Fees)', apex: true, commercial: false },
    { feature: 'Cap on Membership to Prevent Overcrowding', apex: true, commercial: false },
  ];

  return (
    <section id="why-us" className="py-20 bg-zinc-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-red-600/10 text-red-500 border border-red-600/20">
            <Dumbbell className="w-3.5 h-3.5" /> The Apex Difference
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
            WHY ATHLETES & BEGINNERS <br />
            <span className="text-red-500">CHOOSE APEX PERFORMANCE</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            We built Apex to fix everything people hate about standard commercial gyms. No overcrowding, no pushy salespeople, and no generic workout routines.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-zinc-950 border border-zinc-800 p-6 rounded-2xl space-y-4 hover:border-zinc-700 transition-colors"
            >
              <div className="p-3 bg-zinc-900 rounded-xl w-fit border border-zinc-800">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-black uppercase text-white">
                {pillar.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table vs Commercial Gyms 
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-black uppercase tracking-widest text-red-500">HEAD-TO-HEAD COMPARISON</span>
            <h3 className="text-2xl font-black uppercase text-white">Apex Performance vs. Standard Gyms</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="py-3 px-4 text-xs font-black uppercase text-zinc-400">Feature</th>
                  <th className="py-3 px-4 text-xs font-black uppercase text-red-500 text-center bg-red-600/10 rounded-t-xl">Apex Performance</th>
                  <th className="py-3 px-4 text-xs font-black uppercase text-zinc-500 text-center">Standard Gyms</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-xs">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-zinc-900/40 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-zinc-300">{row.feature}</td>
                    <td className="py-3.5 px-4 text-center bg-red-600/5">
                      <Check className="w-5 h-5 text-emerald-400 mx-auto stroke-[3]" />
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <X className="w-5 h-5 text-zinc-600 mx-auto stroke-[2]" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pt-4 text-center">
            <button
              onClick={onOpenFreePass}
              id="btn-comparison-trial"
              className="py-3.5 px-8 bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/30 inline-flex items-center gap-2 cursor-pointer transition-all"
            >
              <Sparkles className="w-4 h-4" /> Experience The Difference – Free 3-Day Pass
            </button>
          </div>
        </div>
          */}
      </div>
    </section>
  );
};
