import React from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventCard from './components/EventCard';
import About from './components/About';
import Tracks from './components/Tracks';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen w-full text-white bg-darkBg flex flex-col font-inter overflow-x-hidden selection:bg-accentCyan/30 selection:text-white">
      
      {/* 1. Global Futuristic Background Effects */}
      <BackgroundEffects />

      {/* 2. Top Header Logos */}
      <Header />

      {/* 3. Floating Pill Navigation */}
      <Navbar />

      {/* 4. Main Event Presentation Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Floating Event Details Card */}
        <EventCard />

        {/* About Section */}
        <About />

        {/* Tracks Section */}
        <Tracks />

        {/* Timeline Section */}
        <Timeline />

        {/* Prizes Section */}
        <Prizes />

        {/* Sponsors and Collaborators Section */}
        <Sponsors />

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* 5. Footer and Copyright */}
      <Footer />
    </div>
  );
}
