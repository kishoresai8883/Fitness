import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, Send, Phone, MessageSquare, ShieldCheck, Clock, Calendar } from 'lucide-react';
import { GYM_INFO, PROGRAMS } from '../data/gymData';
import { FreePassFormData } from '../types';

interface FreePassModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgram?: string;
}

export const FreePassModal: React.FC<FreePassModalProps> = ({ isOpen, onClose, defaultProgram = '' }) => {
  const [formData, setFormData] = useState<FreePassFormData>({
    fullName: '',
    phone: '',
    email: '',
    fitnessGoal: 'Weight Loss & Toning',
    preferredTime: 'Morning (6:00 AM - 10:00 AM)',
    preferredProgram: defaultProgram || 'MetCon Burn & Conditioning'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hi Apex Performance Gym! I just claimed my 3-Day Free Pass.\nName: ${formData.fullName}\nGoal: ${formData.fitnessGoal}\nPreferred Time: ${formData.preferredTime}\nProgram: ${formData.preferredProgram}`
    );
    window.open(`https://wa.me/${GYM_INFO.whatsappClean}?text=${text}`, '_blank');
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity">
      <div 
        id="free-pass-modal"
        className="relative w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden text-zinc-100"
      >
        {/* Header accent */}
        <div className="h-2 bg-gradient-to-r from-red-600 via-amber-500 to-red-600" />
        
        {/* Close Button */}
        <button 
          onClick={resetAndClose}
          id="btn-close-modal"
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white bg-zinc-800/80 hover:bg-zinc-700 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8">
          {!submitted ? (
            <>
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-500 border border-red-500/20 mb-3">
                  <Sparkles className="w-3.5 h-3.5" /> 100% Free • No Credit Card Required
                </span>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
                  Claim Your 3-Day VIP Free Pass
                </h3>
                <p className="mt-1 text-sm text-zinc-400">
                  Experience our full gym floor, group classes, InBody scan, and coach consultation free for 3 days.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    id="input-modal-fullname"
                    placeholder="e.g. Marcus Miller"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800/90 border border-zinc-700/80 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                      Phone Number (For Entry Code) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      id="input-modal-phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-800/90 border border-zinc-700/80 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="input-modal-email"
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-800/90 border border-zinc-700/80 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                      Main Fitness Goal
                    </label>
                    <select
                      id="select-modal-goal"
                      value={formData.fitnessGoal}
                      onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-800/90 border border-zinc-700/80 rounded-xl text-white focus:outline-none focus:border-red-500 transition-colors"
                    >
                      <option value="Weight Loss & Toning">Weight Loss & Toning</option>
                      <option value="Muscle Building & Strength">Muscle Building & Strength</option>
                      <option value="Athletic Conditioning & Endurance">Athletic Conditioning & Endurance</option>
                      <option value="Injury Rehab & Mobility">Injury Rehab & Mobility</option>
                      <option value="General Health & Energy">General Health & Energy</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                      Preferred Program
                    </label>
                    <select
                      id="select-modal-program"
                      value={formData.preferredProgram}
                      onChange={(e) => setFormData({ ...formData, preferredProgram: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-800/90 border border-zinc-700/80 rounded-xl text-white focus:outline-none focus:border-red-500 transition-colors"
                    >
                      {PROGRAMS.map((p) => (
                        <option key={p.id} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                      <option value="General Gym Access">General Gym Access Only</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                    Best Time to Visit
                  </label>
                  <select
                    id="select-modal-time"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800/90 border border-zinc-700/80 rounded-xl text-white focus:outline-none focus:border-red-500 transition-colors"
                  >
                    <option value="Morning (6:00 AM - 10:00 AM)">Morning (6:00 AM - 10:00 AM)</option>
                    <option value="Midday (11:00 AM - 2:00 PM)">Midday (11:00 AM - 2:00 PM)</option>
                    <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM - 9:00 PM)</option>
                    <option value="Weekend (Saturday/Sunday)">Weekend (Saturday/Sunday)</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="btn-submit-free-pass"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-red-600 hover:bg-red-500 active:scale-[0.99] text-white font-extrabold uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Generating Free Pass Code...
                      </span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" /> Activate My 3-Day Free Pass Now
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-4 text-xs text-zinc-400 pt-2 border-t border-zinc-800/80">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> No commitments
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-amber-400" /> Instant SMS Confirmation
                  </span>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">Pass Activated!</span>
                <h3 className="text-2xl md:text-3xl font-black text-white mt-1">
                  Welcome to Apex, {formData.fullName.split(' ')[0]}!
                </h3>
                <p className="mt-2 text-sm text-zinc-300 max-w-md mx-auto">
                  Your <strong className="text-white">3-Day VIP Access Pass</strong> has been created. Show this confirmation screen or your phone number at our front desk upon arrival.
                </p>
              </div>

              <div className="bg-zinc-800/80 border border-zinc-700/80 rounded-xl p-4 text-left text-xs text-zinc-300 space-y-2 max-w-md mx-auto">
                <div className="flex justify-between items-center border-b border-zinc-700 pb-2">
                  <span className="text-zinc-400">Pass Holder:</span>
                  <span className="font-bold text-white">{formData.fullName}</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-700 pb-2">
                  <span className="text-zinc-400">Program Selected:</span>
                  <span className="font-bold text-red-400">{formData.preferredProgram}</span>
                </div>
                <div className="flex justify-between items-center border-b border-zinc-700 pb-2">
                  <span className="text-zinc-400">Preferred Visit Time:</span>
                  <span className="font-bold text-amber-400">{formData.preferredTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Location:</span>
                  <span className="font-bold text-white">{GYM_INFO.address}</span>
                </div>
              </div>

              <div className="space-y-3 pt-2 max-w-md mx-auto">
                <button
                  onClick={handleWhatsAppRedirect}
                  id="btn-modal-whatsapp-confirm"
                  className="w-full py-3.5 px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 fill-white" /> Text Us on WhatsApp for Fast Check-In
                </button>

                <button
                  onClick={resetAndClose}
                  id="btn-modal-done"
                  className="w-full py-3 px-5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold rounded-xl text-xs transition-colors cursor-pointer"
                >
                  Done & Return to Site
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
