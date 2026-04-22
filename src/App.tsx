/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  MessageSquare, 
  Send, 
  ChevronRight, 
  Star, 
  Trophy, 
  Gift, 
  UserPlus, 
  Zap,
  Menu,
  ShieldCheck,
  Clock
} from 'lucide-react';

const AnnouncementHeader = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gold h-10 flex items-center overflow-hidden">
      <div className="flex-1 overflow-hidden relative">
        <motion.div 
          animate={{ x: [1000, -2000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap flex items-center gap-8"
        >
          <span className="text-black font-bold text-sm uppercase flex items-center gap-2">
            <Zap className="w-4 h-4 fill-black" /> 🎉 LIMITED TIME OFFER — Join Now & Get 200% Welcome Bonus!
          </span>
          <span className="text-black font-bold text-sm uppercase flex items-center gap-2">
            <Clock className="w-4 h-4" /> 24/7 Live Support Available
          </span>
          <span className="text-black font-bold text-sm uppercase flex items-center gap-2">
            <Star className="w-4 h-4 fill-black" /> DAILY JACKPOTS EXCEEDING $100,000+
          </span>
          <span className="text-black font-bold text-sm uppercase flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" /> SECURE & INSTANT WITHDRAWALS
          </span>
        </motion.div>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="px-4 text-black hover:opacity-70 transition-opacity"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-10 left-0 w-full z-40 px-6 py-4 flex items-center justify-between premium-blur">
      <div className="flex items-center gap-3">
        <img 
          src="https://collection.cloudinary.com/dyhq6paug/83fc8bd85cc1d5d2e296cc34658a64cd" 
          alt="Home of Luck" 
          className="w-14 h-14 object-contain drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]"
          referrerPolicy="no-referrer"
        />
        <div className="flex flex-col">
          <span className="text-lg font-black tracking-tighter text-gold leading-none italic uppercase">HOME OF LUCK</span>
          <span className="text-[10px] font-bold text-white/50 tracking-[0.2em] leading-tight">ONLINE SLOTS</span>
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-300">
        <a href="#bonuses" className="hover:text-gold transition-colors">Bonuses</a>
        <a href="#" className="hover:text-gold transition-colors">VIP Lounge</a>
        <a href="#" className="hover:text-gold transition-colors">Games</a>
        <a href="#" className="hover:text-gold transition-colors">Promotions</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-sm font-bold text-white/80 hover:text-white transition-colors">Login</button>
        <button className="bg-emerald-gradient text-white px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform border border-gold/30">
          Sign Up
        </button>
        <div className="md:hidden">
          <Menu className="w-6 h-6 text-gold" />
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with abstract shapes */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gold/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-deep/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block border border-gold/30 text-gold text-xs font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6">
            EST. 2024 • THE PREMIUM CHOICE
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight select-none">
            UNLEASH YOUR <br />
            <span className="text-gold-gradient italic">WINNING STREAK</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-medium">
            Experience the world's most exclusive online destination for elite players. 
            Luxury meets opportunity at Home of Luck Online.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-emerald-gradient text-white px-10 py-5 rounded-full font-black text-lg shadow-[0_0_30px_rgba(0,104,69,0.4)] hover:shadow-[0_0_40px_rgba(0,104,69,0.6)] transition-all flex items-center gap-2 group border border-gold/30">
              CLAIM $1,000 WELCOME PACK
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/5 transition-all">
              EXPLORE GAMES
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 text-gray-500 text-xs font-bold tracking-widest uppercase opacity-50">
        <span>SLOTS</span>
        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
        <span>ROULETTE</span>
        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
        <span>BLACKJACK</span>
        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
        <span>LIVE CASINO</span>
      </div>
    </header>
  );
};

const BonusCard = ({ title, amount, description, icon: Icon }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-black/40 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center group cursor-pointer relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="bg-gold/10 p-4 rounded-2xl mb-6 group-hover:bg-gold/20 transition-colors">
        <Icon className="w-10 h-10 text-gold" />
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">{title}</h3>
      <div className="text-4xl font-black text-gold mb-4 tracking-tighter italic">
        {amount}
      </div>
      <p className="text-gray-400 text-sm mb-8 leading-relaxed">
        {description}
      </p>
      <button className="w-full py-4 rounded-xl border border-gold/30 text-gold font-bold text-sm group-hover:bg-gold group-hover:text-black transition-all">
        Claim Now
      </button>
    </motion.div>
  );
};

const BonusesSection = () => {
  const bonuses = [
    {
      title: "Welcome Bonus",
      amount: "200% BONUS",
      description: "Multiply your first deposit up to $500. New players only.",
      icon: Trophy
    },
    {
      title: "Free Spins",
      amount: "50 SPINS",
      description: "Enjoy 50 free rounds on our most popular elite slots machines.",
      icon: Zap
    },
    {
      title: "Reload Bonus",
      amount: "100% UP TO $500",
      description: "Keep the action going with a full match on your second deposit.",
      icon: Gift
    },
    {
      title: "VIP Loyalty",
      amount: "5% CASHBACK",
      description: "Exclusive weekly cashback and elite rewards for our VIP members.",
      icon: UserPlus
    }
  ];

  return (
    <section id="bonuses" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter"
          >
            Our Exclusive <span className="text-gold italic">Bonuses</span>
          </motion.h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Elite rewards designed for premium players. Boost your gameplay with Home of Luck's industry-leading promotions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bonuses.map((bonus, i) => (
            <BonusCard key={i} {...bonus} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SupportChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: '👋 Welcome to Home of Luck! How can we help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setMessages([...messages, { type: 'user', text: inputValue }]);
    setInputValue('');
    
    // Simple bot reply
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: "Thank you for your message! Our agent will be with you shortly." }]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    setMessages([...messages, { type: 'user', text: reply }]);
    setTimeout(() => {
      if (reply === 'Claim Bonus') {
        setMessages(prev => [...prev, { type: 'bot', text: "Excellent choice! You can find all current bonuses on our /bonuses section. Would you like me to take you there?" }]);
      } else {
        setMessages(prev => [...prev, { type: 'bot', text: "Sure! Let me provide more information on that for you." }]);
      }
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 md:w-96 bg-navy-dark border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="bg-emerald p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center border border-gold/50">
                  <Trophy className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-extrabold text-sm leading-none">LUCK BOT</h4>
                  <span className="text-[10px] text-white/60 font-bold uppercase">Online • Support Agent</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:opacity-50 transition-opacity">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-80 overflow-y-auto p-4 flex flex-col gap-4 bg-black/60 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm font-medium ${
                    msg.type === 'user' 
                      ? 'bg-gold text-black rounded-tr-none' 
                      : 'bg-white/10 text-white rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Claim Bonus', 'How to Register', 'Contact Support'].map(reply => (
                    <button 
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1.5 rounded-full border border-gold/30 text-gold text-xs font-bold hover:bg-gold hover:text-black transition-all"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 bg-white/5 border-t border-white/10 flex items-center gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-transparent text-sm focus:outline-none text-white placeholder:text-gray-500"
              />
              <button 
                onClick={handleSend}
                className="p-2 rounded-xl bg-gold text-black hover:scale-110 active:scale-95 transition-transform"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.5)] group relative"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-gold opacity-30 shadow-[0_0_20px_rgba(255,215,0,0.4)]"
        />
        <MessageSquare className="w-8 h-8 text-black relative z-10 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <img 
            src="https://collection.cloudinary.com/dyhq6paug/83fc8bd85cc1d5d2e296cc34658a64cd" 
            alt="Home of Luck" 
            className="w-32 h-32 object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black tracking-tighter text-gold italic uppercase">HOME OF LUCK</span>
            <span className="text-xs font-bold text-white/30 tracking-[0.3em]">ONLINE SLOTS</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
          <a href="#" className="hover:text-gold transition-colors">Responsible Gaming</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Affiliate Program</a>
        </div>

        <div className="text-center text-gray-600 text-[10px] max-w-2xl px-4 leading-loose">
          Copyright © 2024 Home of Luck Online. All rights reserved. Play responsiblity. 18+ only. 
          Home of Luck is licensed and regulated in various jurisdictions. Gambling can be addictive. 
          Please game responsibly and use the provided tools to limit your play.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <main className="bg-navy-dark min-h-screen">
      <AnnouncementHeader />
      <Navbar />
      <Hero />
      <BonusesSection />
      
      {/* Final CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-gradient opacity-5" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              JOIN THE <span className="text-gold italic">ELITE CIRCLE</span> <br />
              TODAY
            </h2>
            <button className="bg-gold text-black px-12 py-6 rounded-full font-black text-xl hover:shadow-[0_0_40px_rgba(255,215,0,0.6)] hover:scale-105 transition-all">
              REGISTER IN 30 SECONDS
            </button>
            <p className="mt-6 text-gray-500 font-bold text-sm tracking-wide">
              NO DEPOSIT REQUIRED TO BROWSE OUR GAMES
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <SupportChat />
    </main>
  );
}
