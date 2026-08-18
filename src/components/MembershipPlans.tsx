import React, { useState } from 'react';
import { MEMBERSHIP_PLANS } from '../data/gymData';
import { MembershipPlan } from '../types';
import { Check, Sparkles, ShieldCheck, Zap, ArrowRight, Flame } from 'lucide-react';

interface MembershipPlansProps {
  onOpenFreePass: () => void;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({ onOpenFreePass }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  return (
    <section id="pricing" className="py-20 bg-zinc-950 text-white border-t border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-red-600/10 text-red-500 border border-red-600/20">
            <Zap className="w-3.5 h-3.5" /> Transparent Membership Plans
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
            INVEST IN YOUR <span className="text-red-500">STRENGTH & HEALTH</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            No contract traps. No hidden annual fees. Cancel anytime with simple 30-day notice.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="flex items-center justify-center pt-2">
            <div className="bg-zinc-900 p-1.5 rounded-2xl border border-zinc-800 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`py-2 px-5 rounded-xl text-xs font-black uppercase transition-all cursor-pointer ${
                  billingCycle === 'monthly' ? 'bg-red-600 text-white shadow-md' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Month-to-Month
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('annual')}
                className={`py-2 px-5 rounded-xl text-xs font-black uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
                  billingCycle === 'annual' ? 'bg-red-600 text-white shadow-md' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span>Annual Commit</span>
                <span className="bg-amber-400 text-zinc-950 text-[10px] font-black px-1.5 py-0.5 rounded">
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const displayPrice = billingCycle === 'annual' ? plan.priceAnnualMonthly : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative bg-zinc-900 border rounded-2xl p-8 shadow-2xl flex flex-col justify-between space-y-6 transition-transform duration-300 ${
                  plan.popular 
                    ? 'border-red-500 ring-2 ring-red-500/30 md:-translate-y-2 bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950' 
                    : 'border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5" /> Most Popular Choice
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-black text-white uppercase">{plan.name}</h3>
                    <p className="text-xs text-zinc-400 mt-1">{plan.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="py-2 border-y border-zinc-800">
                    {displayPrice === 0 ? (
                      <div className="text-4xl font-black text-emerald-400">$0 FREE</div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-white">${displayPrice}</span>
                        <span className="text-xs font-bold text-zinc-400 uppercase">/ Month</span>
                      </div>
                    )}
                    {billingCycle === 'annual' && displayPrice > 0 && (
                      <span className="text-[11px] text-amber-400 font-bold block pt-1">
                        Billed annually (Save ${(plan.priceMonthly - plan.priceAnnualMonthly) * 12}/yr)
                      </span>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-[10px] font-black uppercase tracking-wider text-zinc-500">Plan Inclusions:</div>
                    <ul className="space-y-2 text-xs text-zinc-300">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 stroke-[3]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={onOpenFreePass}
                  id={`plan-btn-${plan.id}`}
                  className={`w-full py-4 px-6 font-black uppercase text-xs tracking-wider rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-red-600 hover:bg-red-500 text-white shadow-red-600/30'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{plan.ctaText}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-medium pt-4">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Satisfaction Guarantee
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-red-500" /> Free Parking & Locker Rooms
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-amber-400" /> Complimentary InBody 3D Scan
          </span>
        </div>

      </div>
    </section>
  );
};
