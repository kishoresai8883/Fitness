import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BmiCalculator } from './components/BmiCalculator';
import { ResultsBenefits } from './components/ResultsBenefits';
import { Testimonials } from './components/Testimonials';
import { Schedule } from './components/Schedule';
import { MembershipPlans } from './components/MembershipPlans';
import { ContactSection } from './components/ContactSection';
import { FreePassModal } from './components/FreePassModal';
import { StickyMobileBar } from './components/StickyMobileBar';
import { Footer } from './components/Footer';

export default function App() {
  const [freePassModalOpen, setFreePassModalOpen] = useState(false);
  const [selectedTrialProgram, setSelectedTrialProgram] = useState('');

  const handleOpenFreePass = (programTitle = '') => {
    setSelectedTrialProgram(programTitle);
    setFreePassModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-red-600 selection:text-white">
      {/* Top Header */}
      <Header onOpenFreePass={() => handleOpenFreePass()} />

      {/* Hero Section */}
      <Hero onOpenFreePass={() => handleOpenFreePass()} />

      {/* About Section */}
      <About onOpenFreePass={() => handleOpenFreePass()} />

      {/* Programs Section */}
      <Programs onSelectProgramForTrial={(title) => handleOpenFreePass(title)} />

      {/* Why Choose Us Section */}
      <WhyChooseUs onOpenFreePass={() => handleOpenFreePass()} />

      {/* BMI & Macro Calculator Section 
      <BmiCalculator onSelectProgramForTrial={(title) => handleOpenFreePass(title)} /> */}

      {/* Results & Benefits Section */}
      <ResultsBenefits onOpenFreePass={() => handleOpenFreePass()} />

      {/* Testimonials Section */}
      <Testimonials onOpenFreePass={() => handleOpenFreePass()} />

      {/* Live Weekly Class Schedule 
      <Schedule onSelectProgramForTrial={(title) => handleOpenFreePass(title)} /> */}

      {/* Membership Plans Section */}
      <MembershipPlans onOpenFreePass={() => handleOpenFreePass()} />

      {/* Contact & Location Section */}
      <ContactSection onOpenFreePass={() => handleOpenFreePass()} />

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Action Bar */}
      <StickyMobileBar onOpenFreePass={() => handleOpenFreePass()} />

      {/* Interactive 3-Day Free Trial Modal */}
      <FreePassModal
        isOpen={freePassModalOpen}
        onClose={() => setFreePassModalOpen(false)}
        defaultProgram={selectedTrialProgram}
      />
    </div>
  );
}
