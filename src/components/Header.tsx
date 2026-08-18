import React, { useState, useEffect } from 'react';
import { Dumbbell, Phone, MessageSquare, Menu, X, Sparkles, MapPin } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface HeaderProps {
  onOpenFreePass: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenFreePass }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Membership', href: '#pricing' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner with location & operating status */}
      <div className="bg-zinc-950 text-zinc-300 text-xs py-2 px-4 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-red-500 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
              NOW OPEN TODAY ({GYM_INFO.hours.weekdays})
            </span>
            <span className="hidden sm:inline-block text-zinc-600">•</span>
            <span className="hidden sm:flex items-center gap-1 text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-zinc-500" /> {GYM_INFO.address}
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a
              href={`tel:${GYM_INFO.phoneClean}`}
              id="topbar-phone"
              className="flex items-center gap-1 hover:text-white font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>{GYM_INFO.phone}</span>
            </a>
            <span className="text-zinc-700">|</span>
            <a
              href={`https://wa.me/${GYM_INFO.whatsappClean}?text=${encodeURIComponent(GYM_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              id="topbar-whatsapp"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled
          ? 'bg-zinc-950/95 backdrop-blur-md shadow-2xl border-b border-zinc-800/90 py-3'
          : 'bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-800/50 py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform">
              <Dumbbell className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black tracking-tight uppercase text-white flex items-center gap-1">
                GYM <span className="text-red-500">FITNESS</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 -mt-1">
                Fitness Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-extrabold uppercase tracking-wider text-zinc-300 hover:text-red-500 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenFreePass}
              id="header-free-pass-btn"
              className="py-2.5 px-5 bg-red-600 hover:bg-red-500 active:scale-95 text-white font-extrabold uppercase text-xs tracking-wider rounded-xl shadow-lg shadow-red-600/25 flex items-center gap-2 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" /> 3-Day Free Pass
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenFreePass}
              className="py-2 px-3 bg-red-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg flex items-center gap-1"
            >
              Free Pass
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2 text-zinc-300 hover:text-white bg-zinc-800 border border-zinc-700 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-zinc-950 border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-sm font-bold uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFreePass();
                }}
                className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-black uppercase text-xs tracking-wider rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Claim 3-Day Free Pass
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${GYM_INFO.phoneClean}`}
                  className="py-2.5 px-3 bg-zinc-800 text-zinc-200 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 border border-zinc-700"
                >
                  <Phone className="w-3.5 h-3.5 text-red-500" /> Call Gym
                </a>
                <a
                  href={`https://wa.me/${GYM_INFO.whatsappClean}?text=${encodeURIComponent(GYM_INFO.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-emerald-900/40 text-emerald-300 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 border border-emerald-700/50"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-emerald-400" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
