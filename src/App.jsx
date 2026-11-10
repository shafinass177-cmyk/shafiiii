import React, { useState } from 'react';
import { useLenis } from './hooks/useLenis';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Timeline from './sections/Timeline';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis smooth inertial scrolling
  useLenis();

  return (
    <div className="relative min-h-screen selection:bg-brand-orange selection:text-white">
      {/* Cinematic Initial Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Top Gradient Scroll Progress Bar */}
      <ScrollProgress />

      {/* Modern Agency Custom Mouse Follower */}
      <CustomCursor />

      {/* Fixed Smart Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full">
        {/* Section 1 & 2: Split Screen Creative Hero */}
        <Hero />

        {/* Section 3: About Bio, Engineering Highlights & Marquee */}
        <About />

        {/* Section 4: Projects Grid Showcase with 3D Tilt */}
        <Projects />

        {/* Section 5: Services & Capabilities Accordion */}
        <Services />

        {/* Section 6: Education & Career Milestones Timeline */}
        <Timeline />

        {/* Section 7: Smooth Sliding Testimonials */}
        <Testimonials />

        {/* Section 8: Interactive Contact Form & Resume Download */}
        <Contact />
      </main>

      {/* Section 9: Minimal Footer & Back-to-Top */}
      <Footer />
    </div>
  );
}

