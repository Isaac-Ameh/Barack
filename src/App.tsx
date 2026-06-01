/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Mail, Linkedin, Twitter, Youtube, MessageCircle, MapPin
} from 'lucide-react';
import Chatbot from './components/Chatbot';
import { Logo } from './components/Logo';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { CaseStudiesPage, SocialIcon, useScrollToHash } from './pages/CaseStudies';
import { WorkHighlightPage } from './pages/Workhighlights';
import { CommunityPage, BackToTop } from './pages/Community';

/**
 * TODO: REPLACE THESE ASSETS BEFORE DEPLOYMENT
 * 
 * 1. LOGO: Replace "youremailbro" text with actual logo SVG/PNG
 * 2. HERO IMAGE: Replace placeholder with professional photo of Henry (500x600px)
 * 3. COMPANY LOGOS: Replace 8-10 placeholders in trust bar (150x60px each)
 * 4. ABOUT PHOTO: Replace with casual professional photo (450x500px)
 * 5. CASE STUDIES: Update with 3 real client stories + metrics
 * 6. TESTIMONIALS: Replace with 6 actual client quotes + names
 * 7. CONTACT INFO: Add real email, WhatsApp number
 * 8. MTJE PRICING: Confirm ₦15K/month and ₦150K/year pricing
 * 9. SOCIAL LINKS: Add actual Instagram, LinkedIn, Twitter handles
 * 10. FORMS: Connect Book Call button to Calendly or booking system
 * 11. FORMS: Connect MTJE signup to payment processor (Paystack/Flutterwave)
 */

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Work Highlight', href: '/work-highlight' },
  { label: 'Mentorship', href: '/community' },
];

export default function App() {
  return (
    <Router>
      <AppContent />
      <Chatbot />
    </Router>
  );
}

const easing = [0.22, 1, 0.36, 1] as const;

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [newsletterError, setNewsletterError] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterStatus('loading');
    setNewsletterError('');

    try {
      const response = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: newsletterEmail,
          source: 'Footer Newsletter Form'
        })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to subscribe');
      }

      setNewsletterStatus('success');
      setNewsletterEmail('');
    } catch (err: any) {
      console.error(err);
      setNewsletterStatus('error');
      setNewsletterError(err.message || 'Something went wrong. Please try again.');
    }
  };

  useScrollToHash();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isHomePage = location.pathname === '/';
  const navBgClass = isScrolled 
    ? 'bg-espresso/95 backdrop-blur-md border-b border-espresso shadow-sm py-4' 
    : (isHomePage ? 'bg-transparent py-8' : 'bg-cream py-6 border-b border-linen');
    
  const textClass = (isScrolled || isHomePage) ? 'text-white/90 hover:text-white' : 'text-espresso hover:text-mocha';

  return (
    <div className="min-h-screen bg-bg-light">
      <motion.nav 
        initial="hidden" animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
        }}
        className={`fixed top-0 left-0 right-0 z-50 smooth-transition ${navBgClass}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Desktop Nav: Centered flex row with elegant spacing matching Shelby Sapp's reference layout */}
          <div className="hidden lg:flex items-center justify-center gap-12 xl:gap-16">
            <motion.div variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
              {/* Matches Shelby Hover Effect: transition-duration: 0.5s | transition-property: color */}
              <Link to="/about" className={`font-sans text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${textClass}`}>
                About
              </Link>
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
              {/* Matches Shelby Hover Effect: transition-duration: 0.5s | transition-property: color */}
              <Link to="/case-studies" className={`font-sans text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${textClass}`}>
                Case Studies
              </Link>
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }} className="shrink-0 mx-8">
              <Link to="/" className="flex items-center">
                <Logo className="h-8 md:h-10" variant={(isScrolled || isHomePage) ? 'white' : 'default'} />
              </Link>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
              {/* Matches Shelby Hover Effect: transition-duration: 0.5s | transition-property: color */}
              <Link to="/work-highlight" className={`font-sans text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${textClass}`}>
                Work Highlight
              </Link>
            </motion.div>
            
            <motion.div variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
              {/* Matches Shelby Hover Effect: transition-duration: 0.5s | transition-property: color */}
              <Link to="/community" className={`font-sans text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${textClass}`}>
                Community
              </Link>
            </motion.div>
          </div>

          {/* Mobile Nav */}
          <div className="flex lg:hidden items-center justify-between w-full">
            <Link to="/" className="flex items-center">
              <Logo className="h-8" variant={(isScrolled || isHomePage) ? 'white' : 'default'} />
            </Link>
            <button className={`p-2 focus:outline-none ${!isScrolled && !isHomePage ? 'text-espresso' : 'text-cream'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMenuOpen(false)} className="lg:hidden fixed inset-0 bg-espresso/60 backdrop-blur-sm z-40" />

              {/* Matches Shelby Mobile Menu slide-out: duration: 0.5s | transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1) */}
              <motion.div 
                initial={{ x: '100%' }} 
                animate={{ x: 0 }} 
                exit={{ x: '100%' }} 
                transition={{ duration: 0.5, ease: easing }} 
                className="lg:hidden fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-cream z-50 shadow-2xl p-8 flex flex-col"
              >
                <div className="flex justify-between items-center mb-12">
                  <span className="text-xl font-display font-bold text-espresso tracking-tight">
                    youremailbro<span className="text-mocha">.</span>
                  </span>
                  <button onClick={() => setIsMenuOpen(false)} className="p-2 text-espresso hover:bg-gray-100 rounded-full transition-colors">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex flex-col gap-6 flex-1">
                  <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-espresso hover:text-mocha transition-colors py-2">About</Link>
                  <Link to="/case-studies" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-espresso hover:text-mocha transition-colors py-2">Case Studies</Link>
                  <Link to="/work-highlight" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-espresso hover:text-mocha transition-colors py-2">Work Highlight</Link>
                  <Link to="/community" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-espresso hover:text-mocha transition-colors py-2">Community</Link>
                </div>

                <div className="mt-auto space-y-4 pt-8 border-t border-linen">
                  <a href="https://calendar.app.google/fe1MA1wgPoBre1SYA" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="w-full bg-mocha text-cream py-4 rounded-xl text-xl font-bold shadow-lg shadow-mocha/20 flex items-center justify-center text-center">
                    Book a Call
                  </a>
                  <div className="flex justify-center gap-6 pt-4 text-stone">
                    <SocialIcon size={24} icon={<Linkedin />} />
                    <SocialIcon size={24} icon={<Twitter />} />
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      <AnimatePresence mode="wait">
        {/* Matches Shelby Page Route Transition: Horizontal Slide & Fade Wipe | duration: 0.5s | ease: cubic-bezier(0.22, 1, 0.36, 1) */}
        <motion.div 
          key={location.pathname} 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          exit={{ opacity: 0, x: -50 }} 
          transition={{ duration: 0.5, ease: easing }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/work-highlight" element={<WorkHighlightPage />} />
            <Route path="/community" element={<CommunityPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <BackToTop />

      <footer className="bg-espresso text-cream pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-6">
            <Link to="/" className="block">
              <Logo variant="white" className="h-10" />
            </Link>
            <p className="font-sans text-[14px] text-cream/70 max-w-[280px] font-normal leading-[1.5]">
              Achieving 4,100% ROI through customer-centric email strategy and high-precision automation.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-cream/80">
                <MapPin className="w-4 h-4 text-mocha" />
                <span className="font-sans text-[13px] lg:text-[14px] font-normal tracking-[0.05em] uppercase">Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3 text-cream/80">
                <Mail className="w-4 h-4 text-mocha" />
                {/* Matches Shelby Hover Effect: transition-duration: 0.5s | transition-property: text-color */}
                <a href="mailto:henrychibunduokeke@gmail.com" className="font-sans text-[13px] lg:text-[14px] font-normal tracking-[0.05em] hover:text-mocha transition-colors smooth-transition">henrychibunduokeke@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-cream/80">
                <MessageCircle className="w-4 h-4 text-mocha" />
                {/* Matches Shelby Hover Effect: transition-duration: 0.5s | transition-property: text-color */}
                <a href="https://wa.me/2347067177910" className="font-sans text-[13px] lg:text-[14px] font-normal tracking-[0.05em] hover:text-mocha transition-colors smooth-transition">WhatsApp: +234 706 717 7910</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-[14px] uppercase tracking-[0.1em] font-normal text-cream mb-8 border-l-4 border-mocha pl-4">Services</h4>
            <ul className="space-y-4 text-cream/60 font-sans text-[13px] lg:text-[14px] font-normal tracking-[0.05em] uppercase">
              {/* Matches Shelby Hover Effect: transition-duration: 0.5s | transition-property: text-color */}
              <li><Link to="/#services" className="hover:text-mocha transition-colors smooth-transition">Campaign Copywriting</Link></li>
              {/* Matches Shelby Hover Effect: transition-duration: 0.5s | transition-property: text-color */}
              <li><Link to="/#services" className="hover:text-mocha transition-colors smooth-transition">Newsletters & Automation</Link></li>
              {/* Matches Shelby Hover Effect: transition-duration: 0.5s | transition-property: text-color */}
              <li><Link to="/work-highlight" className="hover:text-mocha transition-colors smooth-transition">Work Highlights</Link></li>
              {/* Matches Shelby Hover Effect: transition-duration: 0.5s | transition-property: text-color */}
              <li><Link to="/case-studies" className="hover:text-mocha transition-colors smooth-transition">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[14px] uppercase tracking-[0.1em] font-normal text-cream mb-8 border-l-4 border-mocha pl-4">Mentorship</h4>
            <ul className="space-y-4 text-cream/60 font-sans text-[13px] lg:text-[14px] font-normal tracking-[0.05em] uppercase">
              {/* Matches Shelby Hover Effect: transition-duration: 0.5s | transition-property: text-color */}
              <li><Link to="/community" className="hover:text-mocha transition-colors smooth-transition">The Mastery Hub</Link></li>
              {/* Matches Shelby Hover Effect: transition-duration: 0.5s | transition-property: text-color */}
              <li><Link to="/community#curriculum" className="hover:text-mocha transition-colors smooth-transition">Course Curriculum</Link></li>
              {/* Matches Shelby Hover Effect: transition-duration: 0.5s | transition-property: text-color */}
              <li><Link to="/community#testimonials" className="hover:text-mocha transition-colors smooth-transition">Student Success</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[14px] uppercase tracking-[0.1em] font-normal text-cream mb-8 border-l-4 border-mocha pl-4">Resources</h4>
            <ul className="space-y-4 text-cream/60 font-sans text-[13px] lg:text-[14px] font-normal tracking-[0.05em] uppercase">
              {/* Matches Shelby Hover Effect: transition-duration: 0.5s | transition-property: text-color */}
              <li><Link to="/community#signup-form" className="text-mocha font-normal hover:underline smooth-transition">Get Free Template Pack</Link></li>
              {/* Matches Shelby Hover Effect: transition-duration: 0.5s | transition-property: text-color */}
              <li><Link to="/about" className="hover:text-mocha transition-colors smooth-transition">About Henry</Link></li>
              {/* Matches Shelby Hover Effect: transition-duration: 0.5s | transition-property: text-color */}
              <li><a href="https://calendar.app.google/fe1MA1wgPoBre1SYA" target="_blank" rel="noopener noreferrer" className="hover:text-mocha transition-colors smooth-transition">Book a Call</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-left bg-cream/5 p-12 rounded-[10px] border border-cream/10 mb-20 shadow-none">
          <h3 className="text-[24px] lg:text-[32px] font-display font-normal text-cream mb-4">Get Weekly Email Marketing Insights</h3>
          <p className="font-sans text-[14px] lg:text-[16px] text-cream/60 mb-8 max-w-lg font-normal">Tips, strategies, and case studies for Nigerian brands—delivered every Friday.</p>
          
          {newsletterStatus === 'success' ? (
            <div className="bg-mocha/20 text-cream p-6 rounded-[10px] border border-mocha/30 flex items-center gap-4 max-w-md mx-auto sm:mx-0">
              <div className="w-10 h-10 rounded-full bg-mocha flex flex-shrink-0 items-center justify-center">
                <svg className="w-6 h-6 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-lg">You're on the list!</p>
                <p className="text-sm text-cream/80">Check your inbox every Friday.</p>
              </div>
            </div>
          ) : (
            <>
              <form 
                className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto sm:mx-0"
                onSubmit={handleNewsletterSubmit}
              >
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  disabled={newsletterStatus === 'loading'}
                  className="flex-1 bg-cream/10 border border-cream/20 text-cream px-6 py-4 rounded-[3px] focus:outline-none focus:ring-1 focus:ring-mocha placeholder:text-cream/40 transition-all font-sans text-[14px] font-normal"
                />
                {/* Matches Shelby Hover Effect: transition-duration: 0.5s | transition-property: background-color, text-color */}
                <button 
                  type="submit"
                  disabled={newsletterStatus === 'loading'}
                  className="bg-mocha hover:bg-cream hover:text-espresso text-cream px-8 py-4 rounded-[10px] font-sans text-[14px] font-normal uppercase tracking-[0.1em] transition-all duration-500 shadow-none whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {newsletterStatus === 'loading' ? 'Joining...' : 'Join the Weekly Newsletter'}
                </button>
              </form>
              {newsletterStatus === 'error' && (
                <p className="text-red-400 text-sm mt-3">{newsletterError}</p>
              )}
              <p className="font-sans text-[12px] text-cream/40 mt-4 sm:text-left text-center font-normal">No spam. Unsubscribe anytime.</p>
            </>
          )}
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-cream/10 pt-12">
          <p className="font-sans text-[13px] text-cream/40 font-normal">© 2026 youremailbro. All rights reserved.</p>
          <div className="flex gap-8 items-center">
            <SocialIcon icon={<Linkedin />} href="https://linkedin.com/in/henrychibunduokeke" />
            <SocialIcon icon={<Twitter />} href="https://twitter.com/youremailbro" />
            <SocialIcon icon={<Youtube />} href="https://youtube.com/@youremailbro" />
            <SocialIcon icon={<MessageCircle />} href="https://instagram.com/youremailbro" />
          </div>
        </div>
      </footer>
    </div>
  );
}








