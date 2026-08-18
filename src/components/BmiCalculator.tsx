import React, { useState } from 'react';
import { Calculator, Sparkles, Flame, Activity, Dumbbell, ArrowRight } from 'lucide-react';
import { PROGRAMS } from '../data/gymData';

interface BmiCalculatorProps {
  onSelectProgramForTrial: (programTitle: string) => void;
}

export const BmiCalculator: React.FC<BmiCalculatorProps> = ({ onSelectProgramForTrial }) => {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('imperial');
  const [weight, setWeight] = useState<number>(170); // lbs or kg
  const [heightCm, setHeightCm] = useState<number>(175); // cm
  const [heightFt, setHeightFt] = useState<number>(5);
  const [heightIn, setHeightIn] = useState<number>(10);
  const [age, setAge] = useState<number>(30);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [goal, setGoal] = useState<'fat_loss' | 'muscle_gain' | 'recomp' | 'stamina'>('fat_loss');

  // Calculation Logic
  const calcHeightMeters = unit === 'metric' 
    ? heightCm / 100 
    : ((heightFt * 12) + heightIn) * 0.0254;

  const calcWeightKg = unit === 'metric' ? weight : weight * 0.453592;

  const bmi = calcHeightMeters > 0 ? (calcWeightKg / (calcHeightMeters * calcHeightMeters)) : 0;

  // BMR & TDEE (Mifflin-St Jeor)
  const bmr = gender === 'male'
    ? (10 * calcWeightKg) + (6.25 * (calcHeightMeters * 100)) - (5 * age) + 5
    : (10 * calcWeightKg) + (6.25 * (calcHeightMeters * 100)) - (5 * age) - 161;

  const tdee = Math.round(bmr * 1.55); // Moderate activity multiplier

  let targetCalories = tdee;
  if (goal === 'fat_loss') targetCalories = Math.round(tdee * 0.8);
  if (goal === 'muscle_gain') targetCalories = Math.round(tdee * 1.15);

  const targetProteinGrams = Math.round(calcWeightKg * 2.2); // ~1g per lb

  const getBmiCategory = (bmiValue: number) => {
    if (bmiValue < 18.5) return { name: 'Underweight', color: 'text-amber-400' };
    if (bmiValue < 25) return { name: 'Optimal Healthy Weight', color: 'text-emerald-400' };
    if (bmiValue < 30) return { name: 'Overweight', color: 'text-amber-400' };
    return { name: 'High Fat Mass Index', color: 'text-red-400' };
  };

  const getRecommendedProgram = () => {
    if (goal === 'muscle_gain') return PROGRAMS.find(p => p.id === 'heavy-strength') || PROGRAMS[0];
    if (goal === 'fat_loss') return PROGRAMS.find(p => p.id === 'hiit-metcon') || PROGRAMS[1];
    if (goal === 'stamina') return PROGRAMS.find(p => p.id === 'athletic-turf') || PROGRAMS[3];
    return PROGRAMS.find(p => p.id === 'elite-1on1') || PROGRAMS[2];
  };

  const recommendedProgram = getRecommendedProgram();

  return (
    <section id="calculator" className="py-20 bg-zinc-950 text-white border-t border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-red-600/10 text-red-500 border border-red-600/20">
            <Calculator className="w-3.5 h-3.5" /> Interactive Fitness & Macro Engine
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
            CALCULATE YOUR <span className="text-red-500">TARGET METRICS</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Input your details below to calculate your BMI, daily calorie target, protein intake, and match with an Apex training program.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Column */}
          <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6 shadow-xl">
            
            {/* Unit Toggle */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <span className="text-xs font-extrabold uppercase text-zinc-400 tracking-wider">Unit System</span>
              <div className="flex bg-zinc-950 p-1 rounded-xl border border-zinc-800">
                <button
                  type="button"
                  onClick={() => setUnit('imperial')}
                  className={`py-1.5 px-4 rounded-lg text-xs font-extrabold uppercase transition-all cursor-pointer ${
                    unit === 'imperial' ? 'bg-red-600 text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Imperial (Lbs / Ft)
                </button>
                <button
                  type="button"
                  onClick={() => setUnit('metric')}
                  className={`py-1.5 px-4 rounded-lg text-xs font-extrabold uppercase transition-all cursor-pointer ${
                    unit === 'metric' ? 'bg-red-600 text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Metric (Kg / Cm)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Gender */}
              <div>
                <label className="block text-xs font-extrabold uppercase text-zinc-300 mb-1">Biological Gender</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`py-2.5 rounded-xl text-xs font-extrabold uppercase border transition-all cursor-pointer ${
                      gender === 'male' ? 'bg-zinc-800 border-red-500 text-white' : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                    }`}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={`py-2.5 rounded-xl text-xs font-extrabold uppercase border transition-all cursor-pointer ${
                      gender === 'female' ? 'bg-zinc-800 border-red-500 text-white' : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>

              {/* Age */}
              <div>
                <label className="block text-xs font-extrabold uppercase text-zinc-300 mb-1">Age (Years)</label>
                <input
                  type="number"
                  min="16"
                  max="80"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white font-bold text-sm focus:border-red-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Height & Weight Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-extrabold uppercase text-zinc-300 mb-1">
                  Weight ({unit === 'imperial' ? 'Lbs' : 'Kg'})
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white font-bold text-sm focus:border-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-zinc-300 mb-1">Height</label>
                {unit === 'metric' ? (
                  <input
                    type="number"
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white font-bold text-sm focus:border-red-500 focus:outline-none"
                    placeholder="Cm"
                  />
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      value={heightFt}
                      onChange={(e) => setHeightFt(Number(e.target.value))}
                      className="w-full px-3 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white font-bold text-sm focus:border-red-500 focus:outline-none"
                      placeholder="Ft"
                    />
                    <input
                      type="number"
                      value={heightIn}
                      onChange={(e) => setHeightIn(Number(e.target.value))}
                      className="w-full px-3 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-white font-bold text-sm focus:border-red-500 focus:outline-none"
                      placeholder="In"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Goal Selector */}
            <div>
              <label className="block text-xs font-extrabold uppercase text-zinc-300 mb-2">Primary Fitness Goal</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'fat_loss', label: 'Fat Loss' },
                  { id: 'muscle_gain', label: 'Muscle Mass' },
                  { id: 'recomp', label: 'Body Recomp' },
                  { id: 'stamina', label: 'Stamina & Speed' },
                ].map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setGoal(g.id as any)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-extrabold uppercase border text-center transition-all cursor-pointer ${
                      goal === g.id
                        ? 'bg-red-600 border-red-500 text-white shadow-md'
                        : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="border-b border-zinc-800 pb-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-red-500">YOUR CUSTOM BODY METRICS</span>
              <h3 className="text-xl font-black uppercase text-white">Target Results Summary</h3>
            </div>

            {/* Metric Displays */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-center space-y-1">
                <div className="text-xs uppercase font-extrabold text-zinc-400">BMI Score</div>
                <div className="text-3xl font-black text-white">{bmi.toFixed(1)}</div>
                <div className={`text-[11px] font-bold ${getBmiCategory(bmi).color}`}>
                  {getBmiCategory(bmi).name}
                </div>
              </div>

              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-center space-y-1">
                <div className="text-xs uppercase font-extrabold text-zinc-400">Daily Calories</div>
                <div className="text-3xl font-black text-red-500">{targetCalories}</div>
                <div className="text-[11px] text-zinc-400 font-medium">kcal/day target</div>
              </div>
            </div>

            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="text-xs font-bold uppercase text-zinc-400">Daily Protein Target</div>
                <div className="text-xs text-zinc-300">Optimal lean muscle recovery</div>
              </div>
              <div className="text-2xl font-black text-amber-400">{targetProteinGrams} g/day</div>
            </div>

            {/* Recommended Apex Program Match */}
            <div className="bg-zinc-950 border border-red-600/40 rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase text-red-500">
                <Sparkles className="w-4 h-4" /> Recommended Apex Program Match
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                  <img src={recommendedProgram.image} alt={recommendedProgram.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-white uppercase">{recommendedProgram.title}</h4>
                  <p className="text-[11px] text-zinc-400">{recommendedProgram.tagline}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectProgramForTrial(recommendedProgram.title)}
                className="w-full py-3 px-4 bg-red-600 hover:bg-red-500 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Book Free Trial For {recommendedProgram.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
