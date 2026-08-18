import React, { useState } from 'react';
import { GYM_INFO, FAQS } from '../data/gymData';
import { Phone, MessageSquare, Mail, MapPin, Clock, ChevronDown, ChevronUp, Send, CheckCircle2, ShieldCheck, Car } from 'lucide-react';

interface ContactSectionProps {
  onOpenFreePass: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenFreePass }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    message: '',
    submitted: false
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ ...formState, submitted: true });
  };

  return (
    <section id="contact" className="py-20 bg-zinc-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-red-600/10 text-red-500 border border-red-600/20">
            <MapPin className="w-3.5 h-3.5" /> Visit Us & Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
            LOCATION, HOURS & <span className="text-red-500">DIRECT CONTACT</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            We are conveniently located in Metro City Center with free covered parking. Give us a call or send a quick WhatsApp message to speak with a staff member directly.
          </p>
        </div>

        {/* Contact Info & Map Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Column 1: Direct Contact & Hours */}
          <div className="lg:col-span-5 bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="border-b border-zinc-800 pb-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-red-500">INSTANT ACCESS</span>
              <h3 className="text-2xl font-black uppercase text-white">Reach Us Immediately</h3>
            </div>

            {/* Phone & WhatsApp Highlight Buttons */}
            <div className="space-y-3">
              <a
                href={`tel:${GYM_INFO.phoneClean}`}
                id="contact-call-btn"
                className="w-full p-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-red-500 rounded-xl flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-red-600/20 text-red-500 rounded-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase text-zinc-400">Direct Phone Line</div>
                    <div className="text-sm font-black text-white">{GYM_INFO.phone}</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-red-500 uppercase">Call Now</span>
              </a>

              <a
                href={`https://wa.me/${GYM_INFO.whatsappClean}?text=${encodeURIComponent(GYM_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-btn"
                className="w-full p-4 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-800/60 hover:border-emerald-500 rounded-xl flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-600/20 text-emerald-400 rounded-lg group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5 fill-emerald-400 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase text-emerald-400">WhatsApp Chat</div>
                    <div className="text-sm font-black text-white">Instant Response</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-400 uppercase">Open WhatsApp</span>
              </a>
            </div>

            {/* Operating Hours Table */}
            <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase text-amber-400">
                <Clock className="w-4 h-4" /> Operating Club Hours
              </div>

              <div className="space-y-2 text-xs text-zinc-300">
                <div className="flex justify-between border-b border-zinc-800 pb-1.5">
                  <span className="text-zinc-400">Monday – Friday:</span>
                  <span className="font-bold text-white">{GYM_INFO.hours.weekdays}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800 pb-1.5">
                  <span className="text-zinc-400">Saturday:</span>
                  <span className="font-bold text-white">{GYM_INFO.hours.saturday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Sunday:</span>
                  <span className="font-bold text-white">{GYM_INFO.hours.sunday}</span>
                </div>
              </div>
            </div>

            {/* Location & Parking */}
            <div className="space-y-2 text-xs text-zinc-300 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{GYM_INFO.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <Car className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Free 2-Hour Verified Parking Garage Attached</span>
              </div>
            </div>

          </div>

          {/* Column 2: Quick Message Form & Interactive Map Card */}
          <div className="lg:col-span-7 bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="border-b border-zinc-800 pb-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-red-500">QUICK INQUIRY FORM</span>
              <h3 className="text-2xl font-black uppercase text-white">Ask A Question or Request Details</h3>
            </div>

            {!formState.submitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase text-zinc-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase text-zinc-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase text-zinc-300 mb-1">How Can We Help You?</label>
                  <textarea
                    rows={3}
                    placeholder="Ask about membership pricing, personal training availability, or club amenities..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
                  />
                </div>

                <button
                  type="submit"
                  id="btn-submit-contact"
                  className="w-full py-4 px-6 bg-red-600 hover:bg-red-500 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Send Inquiry To Front Desk
                </button>
              </form>
            ) : (
              <div className="p-6 bg-zinc-900 border border-emerald-500/30 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-black text-white">Inquiry Received!</h4>
                <p className="text-xs text-zinc-300">
                  Thanks {formState.name}! One of our fitness coaches will text or call you at {formState.phone} within 15 minutes.
                </p>
              </div>
            )}

            {/* Map Preview Graphic Box */}
            <div className="relative h-48 rounded-xl overflow-hidden border border-zinc-800 group">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1200"
                alt="Gym location map"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div>
                  <div className="text-xs font-black uppercase text-white">📍 Gym/Fitness Location</div>
                  <div className="text-[11px] text-zinc-300">Hyderabad</div>
                </div>

                <a
                  href={GYM_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1.5 px-3 bg-red-600 hover:bg-red-500 text-white font-extrabold text-[10px] uppercase rounded-lg shadow"
                >
                  Get Directions
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* FAQs Accordion Block */}
        <div className="pt-12 border-t border-zinc-800 max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-black uppercase tracking-widest text-red-500">FREQUENTLY ASKED QUESTIONS</span>
            <h3 className="text-2xl font-black uppercase text-white">Got Questions? We Have Answers.</h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-bold text-sm text-white flex items-center justify-between hover:text-red-400 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-red-500" /> : <ChevronDown className="w-5 h-5 text-zinc-500" />}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
