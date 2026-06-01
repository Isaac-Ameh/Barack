import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Award,
  BookOpen,
  FileCheck,
  MessageCircle,
  MessageSquare,
  Star,
  Users,
  Zap,
} from 'lucide-react';
import {
  TrustLogo,
  SkillProgress,
  ToolIcon,
  SkillCard,
  ServiceCard,
  StatCard,
  CaseStudyCard,
  TestimonialCard,
  ConversionCard,
  ServiceEvidenceCard,
} from '../components/Cards';
import { PageBackground } from '../components/PageBackground';
import { StatCounter, AccordionItem } from '../components/UIHelpers';
import { BenefitCard } from './CaseStudies';

export function CommunityPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToOptIn = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-cream">
      {/* SECTION 1: MASTER HERO */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-black text-cream">
        <PageBackground imageUrl="/assets/henry_profile.png" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-20 w-full pt-32 pb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[1000px]"
          >
            <span className="text-mocha font-bold tracking-[0.4em] uppercase text-[11px] mb-10 block">THE COMMUNITY HUB</span>
            <h1 className="text-cream mb-10 text-[clamp(2.5rem,8vw,8rem)] md:text-8xl xl:text-9xl font-bold leading-[0.85] tracking-tighter">
              The Email <br />
              <span className="text-mocha italic font-serif font-light">Mastery Hub.</span>
            </h1>
            <p className="text-xl md:text-3xl text-cream/50 mb-16 leading-tight max-w-4xl font-light tracking-tight">
              Join 1,000+ marketers and business owners in Africa's most elite email marketing community. Mentorship, resources, and real growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mb-20">
               <button 
                onClick={scrollToOptIn}
                className="bg-mocha text-cream px-12 py-6 rounded-full font-bold text-xl hover:bg-mocha-dark transition-all shadow-2xl shadow-mocha/30 text-center"
               >
                 Join the Hub
               </button>
               <a 
                 href="#benefits" 
                 className="bg-cream/5 backdrop-blur-xl border border-cream/20 text-cream px-12 py-6 rounded-full font-bold text-xl hover:bg-cream/10 transition-all text-center flex items-center justify-center"
               >
                 View Benefits
               </a>
            </div>
            
            <div className="flex items-center gap-10">
               <div className="flex -space-x-4">
                 {[1,2,3,4,5].map(i => (
                   <div key={i} className="w-14 h-14 rounded-full border-4 border-espresso bg-gray-200 overflow-hidden shadow-xl">
                     <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="Student" className="w-full h-full object-cover" />
                   </div>
                 ))}
               </div>
               <div>
                 <p className="text-sm font-bold text-cream tracking-[0.1em] uppercase">Joined by 1,000+ High-Performers</p>
                 <div className="flex gap-1 mt-1">
                   {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-mocha fill-current" />)}
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE HUB BENEFITS */}
      <section className="py-32 md:py-48 px-6 bg-cream" id="benefits">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-32">
            <span className="text-mocha font-bold tracking-[0.4em] uppercase text-[11px] mb-8 block">WHAT YOU GET</span>
            <h2 className="text-5xl md:text-7xl font-bold text-espresso mb-8 tracking-tighter">Your All-Access Pass to Growth</h2>
            <p className="text-xl text-stone font-light">
              We don't just share "tips." We build the systems, frameworks, and mindset required to lead the African email marketing scene.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <BenefitCard 
              icon={<Users size={32} />}
              title="1-on-1 Mentorship"
              description="Direct access to Henry for strategic guidance, portfolio reviews, and career roadmap planning."
            />
            <BenefitCard 
              icon={<BookOpen size={32} />}
              title="Premium Ebooks"
              description="Deep-dive playbooks on Psychology, Technical Implementation, and African Market nuances."
            />
            <BenefitCard 
              icon={<FileCheck size={32} />}
              title="Operational Checklists"
              description="Battle-tested checklists for campaign launches, flow audits, and list hygiene."
            />
            <BenefitCard 
              icon={<MessageSquare size={32} />}
              title="Private Community"
              description="A network of 1,000+ marketers sharing real-time wins, job alerts, and troubleshooting."
            />
            <BenefitCard 
              icon={<Zap size={32} />}
              title="Resource Library"
              description="Templates, Figma designs, and Klaviyo/Mailchimp architecture blueprints."
            />
            <BenefitCard 
              icon={<Award size={32} />}
              title="Certification"
              description="Earn the industry-recognized Email Bro certification upon completion of the masterclass."
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: THE 12-WEEK ROADMAP */}
      <section className="py-32 md:py-48 px-6 bg-[#fafaf9]" id="curriculum">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-16 mb-32">
            <div className="max-w-3xl">
              <span className="text-mocha font-bold text-xs tracking-[0.4em] uppercase mb-6 block">THE CURRICULUM</span>
              <h2 className="text-5xl md:text-7xl xl:text-8xl tracking-tighter mb-8 italic font-serif font-light">The 12-Week Intensive</h2>
              <p className="text-xl text-stone max-w-2xl leading-relaxed">
                A rigorous program designed to turn beginners into masters and masters into industry leaders.
              </p>
            </div>
          </div>

          <div className="grid gap-1 lg:gap-2">
            <RoadmapItem 
              week="Week 01-03"
              title="Identity & Deep Philosophy"
              description="Mastering the psychology of data. Learning how humans decide and making data-backed strategic choices."
            />
            <RoadmapItem 
              week="Week 04-06"
              title="Copywriting Architecture"
              description="Writing culturally resonant copy that speaks to the heart of the consumer. Turning words into revenue."
            />
            <RoadmapItem 
              week="Week 07-09"
              title="The Technical Engine"
              description="Klaviyo, Mailchimp, and custom automation loops. Implementing the systems that run revenue 24/7."
            />
            <RoadmapItem 
              week="Week 10-12"
              title="High-Ticket Market Entry"
              description="Positioning, pricing, and client acquisition. How to land and retain $2k+ monthly retainers."
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: COMMUNITY WINS */}
      <section className="py-32 px-6 bg-cream overflow-hidden" id="testimonials">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <span className="text-mocha font-bold text-xs tracking-[0.4em] uppercase mb-6 block">STUDENT SUCCESS</span>
             <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">From Zero to Industry Experts</h2>
             <p className="text-xl text-stone font-light max-w-2xl mx-auto">
               These aren't just success stories. They are blueprints for transformation in the African digital economy.
             </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <CommunityStoryCard 
              initial="CO"
              name="Chidi O."
              meta="Lagos, Nigeria · Joined Jan 2025"
              before="Unemployed fresh graduate with no digital skills."
              after="Junior Email Marketer at a Lagos-based e-commerce brand."
              result="Landed a ₦150,000/month full-time role."
              quote="MTJE didn't just teach me email marketing. It got me my first client within 30 days."
            />
            <CommunityStoryCard 
              initial="FA"
              name="Fatima A."
              meta="Abuja, Nigeria · Joined Mar 2025"
              before="Secondary school teacher looking for a side income."
              after="Freelance email copywriter with 3 active clients."
              result="First freelance client in under 3 weeks."
              quote="MTJE gave me the structure and the network I needed."
            />
            <CommunityStoryCard 
              initial="ET"
              name="Emeka T."
              meta="Port Harcourt, Nigeria · Joined Jun 2025"
              before="Mid-career professional in logistics looking to pivot."
              after="Email Marketing Specialist at a fintech startup."
              result="Career switch completed in 5 months."
              quote="Before MTJE, I had no idea email marketing was even a real career."
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: THE INTAKE FORM */}
      <MentorshipOptInSection />
    </div>
  );
}

function CommunityStoryCard({ initial, image, name, meta, before, after, result, quote }: any) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-cream p-8 md:p-10 rounded-[2.5rem] border border-linen shadow-xl hover:shadow-2xl transition-all h-full flex flex-col"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-mocha text-cream rounded-2xl flex items-center justify-center font-bold text-xl shrink-0">
          {initial}
        </div>
        <div>
          <h4 className="text-xl font-bold text-espresso tracking-tight">{name}</h4>
          <p className="text-xs text-stone font-medium uppercase tracking-wider">{meta}</p>
        </div>
      </div>

      {image && (
        <div className="mb-8 rounded-2xl overflow-hidden border border-linen aspect-video bg-gray-50">
          <img src={image} alt="Proof of success" className="w-full h-full object-cover object-top" />
        </div>
      )}

      <div className="space-y-6 flex-grow mb-10">
        <div>
          <span className="text-[10px] font-bold text-red-500 uppercase tracking-[0.2em] block mb-2">Before</span>
          <p className="text-stone leading-relaxed italic text-lg decoration-red-100 decoration-2 underline-offset-4 line-through">"{before}"</p>
        </div>
        <div className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-mocha/20 rounded-full" />
          <span className="text-[10px] font-bold text-mocha uppercase tracking-[0.2em] block mb-2">After</span>
          <p className="text-espresso font-bold leading-relaxed text-lg">{after}</p>
        </div>
      </div>

      <div className="pt-8 border-t border-linen mt-auto">
         <p className="text-mocha font-bold text-xl mb-3 tracking-tight">{result}</p>
         <p className="text-stone text-sm leading-relaxed font-light italic">"{quote}"</p>
      </div>
    </motion.div>
  );
}


function MentorshipOptInSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    goals: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Community Page Form'
        })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to subscribe');
      }

      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', goals: '' });
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-40 px-6 bg-espresso text-cream relative overflow-hidden" id="signup-form">
      <div className="absolute inset-0 noise opacity-10" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Form Side */}
          <div className="order-1 lg:order-1">
            <span className="text-mocha font-bold text-xs tracking-widest uppercase mb-6 block">JOIN THE MOVEMENT</span>
            <h2 className="text-cream mb-8 text-4xl md:text-6xl leading-tight">Apply for the Next Mentorship Intake.</h2>
            <p className="text-xl text-cream/70 mb-12 leading-relaxed">
              Enter your details to join my private newsletter and receive notification when the next quarterly 12-week batch opens.
            </p>
            
            <div className="bg-cream p-8 md:p-12 rounded-3xl shadow-3xl text-espresso border border-cream/10 text-left">
              <h3 className="text-3xl font-bold mb-6 text-center">Ready to Step Up?</h3>
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-mocha/10 text-mocha rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-espresso mb-2">Application Received!</h4>
                  <p className="text-stone">Keep an eye on your inbox. We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-bold text-espresso mb-1">First Name *</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        required 
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-50 border border-linen rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-cream transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-bold text-espresso mb-1">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-50 border border-linen rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-cream transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-espresso mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50 border border-linen rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-cream transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="goals" className="block text-sm font-bold text-espresso mb-1">What should I know about you? / Goals *</label>
                    <textarea 
                      id="goals" 
                      required 
                      rows={3}
                      value={formData.goals}
                      onChange={(e) => setFormData({...formData, goals: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50 border border-linen rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-cream transition-all resize-none"
                    ></textarea>
                  </div>
                  {status === 'error' && (
                    <p className="text-red-500 text-sm">{errorMessage}</p>
                  )}
                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full bg-mocha text-cream py-4 rounded-xl font-bold text-lg shadow-xl shadow-mocha/20 hover:bg-mocha-dark transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                  >
                    {status === 'loading' ? 'Submitting...' : 'Join the Free Hub'}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Photo Side */}
          <div className="order-2 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-mocha/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden border-8 border-cream/5 relative z-10 shadow-2xl">
                <img src="/assets/henry_profile.png" className="w-full h-full object-cover object-center grayscale brightness-110 hover:grayscale-0 transition-all duration-1000" alt="Henry Mentorship" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-mocha rounded-full hidden md:flex items-center justify-center text-center p-6 shadow-2xl z-20 animate-float">
                <p className="text-cream font-bold text-sm tracking-tighter uppercase leading-tight">Mentoring the Next #1 Marketers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ num, title, description }: { num: string, title: string, description: string }) {
  return (
    <div className="p-10 border border-linen rounded-[2rem] bg-cream group hover:shadow-xl transition-all">
       <span className="block text-4xl font-bold text-gray-100 group-hover:text-secondary/20 mb-8 transition-colors">{num}</span>
       <h4 className="mb-4">{title}</h4>
       <p className="text-stone leading-relaxed">{description}</p>
    </div>
  );
}

function RoadmapItem({ week, title, description }: { week: string, title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="group grid md:grid-cols-4 items-center gap-6 md:gap-0 p-8 md:p-14 border-b border-linen bg-cream hover:bg-[#fafaf9] transition-all duration-500 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1.5 h-full bg-mocha transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
      
      <div className="md:col-span-1">
        <span className="text-[11px] font-bold text-gray-300 uppercase tracking-[0.4em] mb-2 block font-mono group-hover:text-mocha transition-colors">{week}</span>
      </div>
      
      <div className="md:col-span-1">
        <h3 className="text-2xl font-bold tracking-tighter text-espresso group-hover:translate-x-2 transition-transform duration-500">{title}</h3>
      </div>
      
      <div className="md:col-span-2 md:pl-16 md:border-l border-linen group-hover:border-mocha/20 transition-colors">
        <p className="text-stone text-lg leading-relaxed group-hover:text-espresso transition-colors">{description}</p>
      </div>
    </motion.div>
  );
}

interface TimelinePhase {
  weeks: string;
  title: string;
  icon: React.ReactNode;
  details: string[];
}

const TimelineStep: React.FC<{ phase: TimelinePhase, index: number }> = ({ phase, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex gap-8 md:gap-16 relative"
    >
      <div className="relative z-10">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-mocha text-cream flex items-center justify-center shadow-xl shadow-mocha/20 border-4 border-cream">
          {React.isValidElement(phase.icon) && React.cloneElement(phase.icon as any, { size: 28 })}
        </div>
      </div>
      <div className="flex-1 pb-20">
        <span className="text-mocha font-bold text-sm tracking-widest uppercase mb-3 block">{phase.weeks}</span>
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-espresso">{phase.title}</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {phase.details.map((detail: string, i: number) => (
            <div key={i} className="flex items-center gap-4 bg-gray-50/50 p-5 rounded-2xl border border-linen hover:bg-cream hover:shadow-md transition-all">
              <div className="w-2.5 h-2.5 rounded-full bg-mocha/40 shrink-0"></div>
              <span className="text-stone font-bold text-sm md:text-base">{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-50 p-4 bg-mocha text-cream rounded-full shadow-2xl hover:bg-mocha/90 transition-all focus:outline-none"
        >
          <ArrowRight className="w-6 h-6 rotate-[270deg]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}