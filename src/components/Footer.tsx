import React from 'react';
import { Dumbbell, Phone, MessageSquare, Mail, MapPin, Heart } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 text-xs border-t border-zinc-800 pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white shadow-lg">
                <Dumbbell className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight uppercase text-white">
                  GYM <span className="text-red-500">FITNESS</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 -mt-1">
                  Fitness Studio
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Hyderabad's premier fitness studio. Combining world-class Hammer Strength & Eleiko equipment, certified coaches, and an unstoppable community.
            </p>

            <div className="flex items-center gap-3 text-white">
              <a href={`tel:${GYM_INFO.phoneClean}`} className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-red-500 hover:text-red-500 transition-colors">
                <Phone className="w-4 h-4" />
              </a>
              <a href={`https://wa.me/${GYM_INFO.whatsappClean}`} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-emerald-500 hover:text-emerald-400 transition-colors">
                <MessageSquare className="w-4 h-4 fill-emerald-400 text-emerald-400" />
              </a>
              <a href={`mailto:${GYM_INFO.email}`} className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-amber-500 hover:text-amber-400 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold uppercase text-xs tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-red-500 transition-colors">About Gym</a></li>
              <li><a href="#programs" className="hover:text-red-500 transition-colors">Fitness Programs</a></li>
              <li><a href="#why-us" className="hover:text-red-500 transition-colors">Why Choose Us</a></li>
              <li><a href="#results" className="hover:text-red-500 transition-colors">Transformations</a></li>
              <li><a href="#schedule" className="hover:text-red-500 transition-colors">Class Schedule</a></li>
              <li><a href="#pricing" className="hover:text-red-500 transition-colors">Memberships</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold uppercase text-xs tracking-wider">Training Programs</h4>
            <ul className="space-y-2">
              <li><a href="#programs" className="hover:text-red-500 transition-colors">Power & Hypertrophy</a></li>
              <li><a href="#programs" className="hover:text-red-500 transition-colors">MetCon Burn & HIIT</a></li>
              <li><a href="#programs" className="hover:text-red-500 transition-colors">1-on-1 Personal Coaching</a></li>
              <li><a href="#programs" className="hover:text-red-500 transition-colors">Functional Turf Agility</a></li>
              <li><a href="#programs" className="hover:text-red-500 transition-colors">Infrared Recovery & Flow</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold uppercase text-xs tracking-wider">Gym Hours & Location</h4>
            <div className="space-y-2 text-xs">
              <p className="text-zinc-300 font-bold">{GYM_INFO.address}</p>
              <p className="text-zinc-400">Mon – Fri: {GYM_INFO.hours.weekdays}</p>
              <p className="text-zinc-400">Sat: {GYM_INFO.hours.saturday}</p>
              <p className="text-zinc-400">Sun: {GYM_INFO.hours.sunday}</p>
              <p className="text-red-400 font-bold pt-1">Free 2-Hour Verified Garage Parking</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} {GYM_INFO.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-zinc-400">Terms of Membership</a>
            <span>•</span>
            <a href="#" className="hover:text-zinc-400">Free Trial Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
