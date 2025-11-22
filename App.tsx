import React, { useState } from 'react';
import Chatbot from './components/Chatbot';

type View = 'home' | 'heritage' | 'tech' | 'ai-matrix' | 'playground' | 'future';

const NAV_ITEMS: { id: View; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'heritage', label: 'Heritage' },
  { id: 'tech', label: 'Tech' },
  { id: 'ai-matrix', label: 'AI Matrix' },
  { id: 'playground', label: 'Playground' },
  { id: 'future', label: '2047' },
];

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<View>('home');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <button onClick={() => setActiveSection('home')} className="font-extrabold text-2xl tracking-tight font-mono">
            BRIDGES<span className="text-cyan-400">.</span>
          </button>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-bold uppercase tracking-wider transition-all duration-200 px-3 py-1 rounded-full ${
                  activeSection === item.id ? 'bg-orange-500 text-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <button onClick={() => setIsChatOpen(true)} className="md:hidden text-2xl">💬</button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-20 min-h-screen flex flex-col">
        
        {/* HERO VIEW */}
        {activeSection === 'home' && (
          <section className="flex-1 flex flex-col items-center justify-center text-center px-4 min-h-[90vh] relative">
             {/* Bg Gradient */}
             <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950 z-0"></div>
             
             <div className="relative z-10 max-w-4xl">
                 <div className="text-cyan-400 font-mono mb-4 text-sm">SYSTEM STATUS: OPTIMAL // 1.4 BILLION NODES</div>
                 <h1 className="text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500" style={{ letterSpacing: '-0.05em' }}>
                     HERITAGE<br/>AS CODE
                 </h1>
                 <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto">
                     India's inclusive future is being architected by 5,000 years of wisdom.
                 </p>
                 <div className="flex gap-4 justify-center">
                     <button onClick={() => setActiveSection('ai-matrix')} className="px-8 py-4 bg-orange-500 text-black font-bold rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-105 transition-transform">ENTER MATRIX</button>
                     <button onClick={() => setActiveSection('heritage')} className="px-8 py-4 border border-slate-700 rounded-full font-bold hover:bg-slate-800 transition-colors">VIEW TIMELINE</button>
                 </div>
             </div>

             {/* Live Ticker Mock */}
             <div className="absolute bottom-0 w-full bg-orange-500 text-black font-mono font-bold text-sm py-2 overflow-hidden whitespace-nowrap">
                 UPI TRANS: 50M/SEC /// SATELLITES: 124 ORBITING /// STARTUPS: 112,000+ /// BHASHINI DATA: 5M HOURS
             </div>
          </section>
        )}

        {/* AI MATRIX VIEW */}
        {activeSection === 'ai-matrix' && (
            <section className="flex-1 py-20 px-4 bg-slate-950">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-orange-500 font-mono">NEURAL BRIDGES</span>
                        <h2 className="text-5xl font-bold text-white mt-2">THE AI MATRIX</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: "🌾", title: "Kisan-Drones", desc: "Computer vision inspired by ancient crop logic detecting pests.", status: "DEPLOYED" },
                            { icon: "💊", title: "Ayur-Genomics", desc: "ML models analyzing Prakriti + DNA for personalized medicine.", status: "BETA" },
                            { icon: "🗣️", title: "Project Bhashini", desc: "Crowdsourcing voice data for 22 languages.", status: "SCALING" },
                            { icon: "⚖️", title: "Nyaya-Setu", desc: "NLP explaining legal rights in simple vernacular.", status: "PILOT" },
                            { icon: "🎨", title: "Heritage GANs", desc: "AI restoring damaged frescoes digitally.", status: "ACTIVE" }
                        ].map((card, i) => (
                            <div key={i} className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-orange-500/50 transition-all hover:-translate-y-2">
                                <div className="text-4xl mb-4">{card.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                                <p className="text-slate-400 mb-4 text-sm">{card.desc}</p>
                                <div className="text-xs font-mono text-cyan-400">{`> STATUS: ${card.status}`}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )}

        {/* PLAYGROUND VIEW */}
        {activeSection === 'playground' && (
            <section className="flex-1 py-20 px-4 bg-slate-950">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-5xl font-bold text-center mb-16">INTERACTIVE LAB</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
                            <h3 className="text-xl font-bold mb-4">Find Your Ayur-Tech Type</h3>
                            <p className="text-slate-400 mb-6">AI analysis of your elemental balance.</p>
                            <div className="space-y-3">
                                <button onClick={() => alert('Vata')} className="w-full text-left p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-orange-500 transition-colors">A. I get anxious/active</button>
                                <button onClick={() => alert('Pitta')} className="w-full text-left p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-orange-500 transition-colors">B. I get irritable/focused</button>
                            </div>
                        </div>
                        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
                            <h3 className="text-xl font-bold mb-4">Bhashini Live Demo</h3>
                            <div className="bg-black p-4 rounded-xl font-mono text-sm mb-4 text-slate-300">
                                {`> INPUT: "Bridges to Tomorrow"`}<br/>
                                {`> TARGET: Hindi`}<br/>
                                <span className="text-orange-500 animate-pulse">{`> PROCESSING...`}</span>
                            </div>
                            <button className="bg-cyan-500 text-black font-bold px-6 py-3 rounded-xl w-full">RUN TRANSLATION</button>
                        </div>
                    </div>
                </div>
            </section>
        )}

        {/* Placeholder views for other sections to keep app compilable */}
        {['heritage', 'tech', 'future'].includes(activeSection) && (
            <section className="flex-1 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4 capitalize">{activeSection} Section</h2>
                    <p className="text-slate-400">Refer to index.html for the full Vanilla JS implementation of this section.</p>
                </div>
            </section>
        )}

      </main>
      
      <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}