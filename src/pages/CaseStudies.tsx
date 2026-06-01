import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Camera,
  Check,
  MapPin,
  ShoppingBag,
  Target,
  Users,
  X,
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

export function CaseStudiesPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        // Precise scroll with offset for sticky headers
        setTimeout(() => {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 300);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="bg-cream">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-black text-cream">
        <PageBackground imageUrl="/assets/henry_profile.png" />
        
        <div className="max-w-7xl mx-auto relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="text-mocha font-bold tracking-[0.4em] uppercase text-[11px] mb-8 block">CASE STUDIES</span>
            <h1 className="text-cream mb-10 text-[clamp(2.5rem,8vw,8rem)] md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tighter">
              Real Transformations.<br />
              Real Revenue.<br />
              <span className="text-mocha italic font-serif font-light">Real Proof.</span>
            </h1>
            <p className="text-xl md:text-2xl text-cream/50 max-w-2xl mb-20 leading-relaxed font-light">
              See how Nigerian and international brands transformed their email programs from underperforming (or non-existent) to revenue-generating systems.
            </p>

            <div className="grid md:grid-cols-3 gap-12 pt-20 border-t border-cream/10 max-w-5xl">
              <div className="text-left">
                <span className="block text-5xl md:text-6xl font-bold text-mocha mb-4 tracking-tighter">₦<StatCounter end={2.77} suffix="M" /></span>
                <span className="block text-xs font-bold text-cream/40 uppercase tracking-[0.3em]">Hingees Revenue (30 days)</span>
              </div>
              <div className="text-left">
                <span className="block text-5xl md:text-6xl font-bold text-mocha mb-4 tracking-tighter"><StatCounter end={68} suffix="%" /></span>
                <span className="block text-xs font-bold text-cream/40 uppercase tracking-[0.3em]">Open Rate Improvement</span>
              </div>
              <div className="text-left">
                <span className="block text-5xl md:text-6xl font-bold text-mocha mb-4 tracking-tighter"><StatCounter end={186} suffix="%" /></span>
                <span className="block text-xs font-bold text-cream/40 uppercase tracking-[0.3em]">New Customer Growth</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

       {/* SECTION 2: THE CASE STUDIES */}
      <div className="space-y-0">
        {/* CASE STUDY 1: MALZFOTOZ */}
        <CaseStudyDetail 
          id="malzfotoz"
          client="MalzFotoz"
          industry="Photography Studio"
          location="Ontario, Canada"
          logo={<Camera size={32} />}
          problemHeadline="Nearly Dead Email Program"
          problemDescription="A photography studio with a sizable list generating zero session bookings through email. Open rates hovering near single digits, click-throughs at 0%, and no revenue attribution whatsoever."
          problemMetrics={[
            { value: "9%", label: "Open Rate" },
            { value: "0%", label: "Click Rate" },
            { value: "$0", label: "Revenue per Campaign" }
          ]}
          beforeImage="/proofs/malzfotoz/before/Before_I_Stepped_In.png"
          solutionPoints={[
            "Rebuilt segmentation around 30-day engaged subscribers",
            "Created 2-email welcome sequence grounded in audience research",
            "Introduced A/B testing on every campaign",
            "Implemented smart send throttling to protect deliverability"
          ]}
          successMetrics={[
            { value: 68, suffix: "%", label: "Open Rate", change: "↑ 656% lift" },
            { value: 8.3, suffix: "%", label: "Click Rate", change: "↑ From 0%" },
            { value: 1100, prefix: "$", suffix: "+", label: "Revenue per Campaign", change: "↑ From $0" }
          ]}
          afterImage="/proofs/malzfotoz/after/After_I_Stepped_in.png"
          finalResults={[
            { stat: "68%", desc: "Overall open rate jump (from 9%)" },
            { stat: "52%", desc: "Welcome sequence open rate" },
            { stat: "$1,100+", desc: "Direct session revenue generated" }
          ]}
        />

        {/* CASE STUDY 2: HINGEES */}
        <CaseStudyDetail 
          id="hingees"
          client="Hingees"
          industry="E-commerce Fashion"
          location="Lagos, Nigeria"
          logo={<ShoppingBag size={32} />}
          problemHeadline="Broken Infrastructure, Lost Revenue"
          problemDescription="Hingees had email running—but barely. Broken cart abandonment flows that didn't show products. No distinction between loyal customers and first-time buyers."
          problemMetrics={[
            { value: "4", label: "Automation Flows" },
            { value: "7", label: "Audience Segments" },
            { value: "0", label: "VIP/Winback Systems" }
          ]}
          beforeImage="/proofs/hingees/before/Before_I_Stepped_in.png"
          solutionPoints={[
            "Fixed broken flows with dynamic product grids",
            "Rebuilt segmentation from 7 to 30 behavior-based groups",
            "Launched 12 automation flows including Winback and VIP",
            "Created high-intent flows for engaged non-converters"
          ]}
          successMetrics={[
            { value: 12, suffix: "", label: "Automation Flows", change: "↑ 3x increase" },
            { value: 186, suffix: "%", label: "Customer Growth", change: "↑ Retention lift" },
            { value: 2.77, prefix: "₦", suffix: "M", label: "Revenue (30 days)", change: "↑ 46% increase" }
          ]}
          afterImage="/proofs/hingees/after/After_I_Stepped_in.png"
          finalResults={[
            { stat: "₦2.77M", desc: "First 30 days revenue (46% lift)" },
            { stat: "68%", desc: "Increase in total order volume" },
            { stat: "186%", desc: "Growth in new customer acquisition" }
          ]}
        />

        {/* CASE STUDY 3: RIBS FELLOWSHIP (Launch Architecture) */}
        <CaseStudyDetail 
          id="ribs"
          client="Ribs Fellowship"
          industry="Event/Hybrid Conference"
          location="Nigeria"
          logo={<Users size={32} />}
          problemHeadline="How Ribs Fellowship 3.0 Generated ₦2.8M in One Month with Strategic Email Marketing and Social Media Marketing."
          problemDescription={`This case study outlines the successful launch of the Ribs Hybrid Conference 3.0 in Lagos titled "Opportunity Meets Preparedness". The Conference was to attract 200 attendees paying ₦15,000 each to participate. Through strategic email marketing and social media marketing within a one-month timeframe, the campaign resulted in 157 attendees and a total of ₦2.8M in revenue.

**The Parameters:**
• Service: Ribs Fellowship Conference
• Launch Date: 22nd June 2024
• Price Point: ₦15,000 (Virtual) / ₦25,000 (Physical)
• Objective: Fill 200 slots in 30 days.`}
          problemMetrics={[
            { value: "₦2.8M", label: "Total Revenue" },
            { value: "157", label: "Paid Attendees" },
            { value: "75%", label: "Goal Reached" }
          ]}
          beforeImage="" // Bypasses traditional Before/After grid
          solutionPoints={[
            "Target Audience Analysis: Focused on Lagos professionals seeking personal growth and singles preparing for marriage.",
            "Messaging Strategy: Balanced high-value networking propositions with emotional triggers for 'Better Ribs'.",
            "Follow-Up Architecture: Persistent multi-channel sequence designed to convert high-intent interest into paid commitment.",
            "Visual Asset: [Welcome Emails](https://docs.google.com/document/d/1sXMY5cgxBFKfY39BvFcfpDXrGnSBI43coJKIYq_ay8I/edit?usp=drivesdk)",
            "Visual Asset: [Teaser Email 1](https://docs.google.com/document/d/1bAGUAWLAY3_wu6BWuFwJ0CKdcWgZKzTxa9CPBrE8Jfc/edit?usp=drivesdk)",
            "Visual Asset: [Teaser Email 2](https://docs.google.com/document/d/1V0PpSe7tF_FQCKd8kVPCXBASewTxeQFjt2jkRMn3IoE/edit?usp=drivesdk)",
            "Visual Asset: [Follow-Up Email 1](https://docs.google.com/document/d/1_9SziojEMmoyoUqhzjIn2vVNNQhh5vIbOqSM4FqFv-Q/edit?usp=drivesdk)",
            "Visual Asset: [Follow-Up Email 2](https://docs.google.com/document/d/1lqrGhaV5ZgeSgHAUtFS1eivMZ_mGyiC2iKID87hadSE/edit?usp=drivesdk)",
            "Visual Asset: [Final Call Email 1](https://docs.google.com/document/d/1QP_uXgiY1j5nGcJiUcUNs7t6fOELM4Pdl2sE-i11bDg/edit?usp=drivesdk)",
            "Visual Asset: [Final Call Email 2](https://docs.google.com/document/d/1cBPBHpO8TBUqAlIuErkldNiLfowtdwkWKhZluUJq1ak/edit?usp=drivesdk)"
          ]}
          successMetrics={[
            { value: 2.8, prefix: "₦", suffix: "M", label: "Revenue", change: "↑ 30-Day Launch" },
            { value: 157, suffix: "", label: "Participants", change: "↑ Paid Registration" },
            { value: 45, suffix: "%", label: "Open Rate", change: "↑ High Engagement" }
          ]}
          afterImage="/assets/ribs_hybrid_conference.png"
          finalResults={[
            { stat: "Power of Urgency", desc: "Successfully converted 157 leads through high-tension timing." },
            { stat: "₦2.8M Earned", desc: "Demonstrated direct attribution from email channel to revenue." },
            { stat: "75% Success", desc: "Proof of concept for the 14-step mobilization architecture." }
          ]}
        />

      </div>

      {/* SECTION 3: SERVICES SHOWCASE */}
      <section className="py-32 md:py-48 px-6 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-32">
            <span className="text-mocha font-bold tracking-[0.4em] uppercase text-[11px] mb-8 block">HOW HENRY WORKS</span>
            <h2 className="text-5xl md:text-7xl font-bold text-espresso mb-8 tracking-tighter">The Services Behind Every Transformation</h2>
            <p className="text-xl text-stone font-light">
              Every case study above was built on these core capabilities. Here's what it looks like in practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceEvidenceCard 
              label="AUTOMATIONS"
              title="Automation Workflows"
              description="Welcome sequences, cart abandonment, winback flows—built to run 24/7."
              image="/assets/Automations.jpg"
            />
            <ServiceEvidenceCard 
              label="SEGMENTATION"
              title="Advanced Segmentation"
              description="Behavior-based groups that let you send the right message to the right person."
              image="/assets/Segmentations.png"
            />
            <ServiceEvidenceCard 
              label="SIGN-UP FORMS"
              title="High-Converting Forms"
              description="Popups designed to grow your list without annoying visitors."
              image="/proofs/hingees/after/Resubscribe_page.png"
            />
            <ServiceEvidenceCard 
              label="EMAIL DESIGNS"
              title="Mobile-Optimized"
              description="Brand-consistent templates that look perfect on every device."
              image="/assets/malzfotoz_email_missed.png"
            />
            <ServiceEvidenceCard 
              label="OPEN RATES"
              title="Psychological Copy"
              description="Culturally-grounded copy that hits 40-70% open rates consistently."
              image="/assets/Open_Rates.png"
            />
            <ServiceEvidenceCard 
              label="STRATEGY"
              title="Campaign Execution"
              description="Full-service management from planning to high-precision execution."
              image="/assets/malzfotoz_email_Campaign.png"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: EMAIL DESIGN GALLERY */}
      <section className="py-32 md:py-48 px-6 bg-cream overflow-hidden" id="design-gallery">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-32">
            <span className="text-mocha font-bold tracking-[0.4em] uppercase text-[11px] mb-8 block">SHOWCASE</span>
            <h2 className="text-5xl md:text-7xl font-bold text-espresso mb-8 tracking-tighter">The Email Design Gallery</h2>
            <p className="text-xl text-stone font-light">
              High-converting email structures that balance brand aesthetics with raw performance data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Design Slot 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col bg-cream rounded-[2.5rem] border border-linen overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                <img 
                  src="/assets/malzfotoz_email_plan.png" 
                  alt="Malzfotoz Strategic Email" 
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>
              <div className="p-10">
                 <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold text-mocha uppercase tracking-[0.2em]">Strategy Slot 01</span>
                    <div className="w-8 h-px bg-gray-100" />
                 </div>
                 <h4 className="text-2xl font-bold text-espresso mb-2">Planning Mastery</h4>
                 <p className="text-sm text-stone font-light">Custom architecture designed for the 6Ps psychological framework.</p>
              </div>
            </motion.div>

            {/* Design Slot 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col bg-cream rounded-[2.5rem] border border-linen overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                <img 
                  src="/assets/malzfotoz_email_faq.png" 
                  alt="Malzfotoz FAQ Email" 
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>
              <div className="p-10">
                 <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold text-mocha uppercase tracking-[0.2em]">Strategy Slot 02</span>
                    <div className="w-8 h-px bg-gray-100" />
                 </div>
                 <h4 className="text-2xl font-bold text-espresso mb-2">Objection Handling</h4>
                 <p className="text-sm text-stone font-light">FAQ-based conversion structure for seasonal photography campaigns.</p>
              </div>
            </motion.div>

            {/* Design Slot 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col bg-cream rounded-[2.5rem] border border-linen overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                <img 
                  src="/assets/malzfotoz_email_missed.png" 
                  alt="Malzfotoz Welcome Email" 
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>
              <div className="p-10">
                 <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold text-mocha uppercase tracking-[0.2em]">Strategy Slot 03</span>
                    <div className="w-8 h-px bg-gray-100" />
                 </div>
                 <h4 className="text-2xl font-bold text-espresso mb-2">The Welcome Loop</h4>
                 <p className="text-sm text-stone font-light">A visual map of the conversion journey for premium photography services.</p>
              </div>
            </motion.div>

            {/* Design Slot 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col bg-cream rounded-[2.5rem] border border-linen overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                <img 
                  src="/assets/malzfotoz_strategy_main.jpg" 
                  alt="Email Design Slot 4" 
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>
              <div className="p-10">
                 <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold text-mocha uppercase tracking-[0.2em]">Design Slot 04</span>
                    <div className="w-8 h-px bg-gray-100" />
                 </div>
                 <h4 className="text-2xl font-bold text-espresso mb-2">Strategy Architecture</h4>
                 <p className="text-sm text-stone font-light">The foundational design structure used for high-precision photography campaigns.</p>
              </div>
            </motion.div>

            {/* Design Slot 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col bg-cream rounded-[2.5rem] border border-linen overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                <img 
                  src="/assets/malzfotoz_email_faq.png" 
                  alt="Email Design Slot 5" 
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>
              <div className="p-10">
                 <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold text-mocha uppercase tracking-[0.2em]">Design Slot 05</span>
                    <div className="w-8 h-px bg-gray-100" />
                 </div>
                 <h4 className="text-2xl font-bold text-espresso mb-2">Campaign Flow</h4>
                 <p className="text-sm text-stone font-light">A visual map of the conversion journey for premium services.</p>
              </div>
            </motion.div>

            {/* Design Slot 6 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col bg-cream rounded-[2.5rem] border border-linen overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                <img 
                  src="/assets/malzfotoz_email_missed.png" 
                  alt="Email Design Slot 6" 
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>
              <div className="p-10">
                 <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold text-mocha uppercase tracking-[0.2em]">Design Slot 06</span>
                    <div className="w-8 h-px bg-gray-100" />
                 </div>
                 <h4 className="text-2xl font-bold text-espresso mb-2">Master Portfolio</h4>
                 <p className="text-sm text-stone font-light">The complete evidence of 4,100% ROI across multiple industries.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="py-32 md:py-48 px-6 bg-espresso text-cream overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.15)_0%,transparent_70%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-cream">Ready for Your Own Transformation?</h2>
          <p className="text-xl md:text-2xl text-cream/60 mb-16 font-light">
            Whether you need email strategy, execution, or training—Henry can help you achieve results like these.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
            <a 
              href="https://calendar.app.google/fe1MA1wgPoBre1SYA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-mocha text-cream px-12 py-6 rounded-full text-xl font-bold hover:bg-mocha-dark transition-all shadow-2xl shadow-mocha/30"
            >
              Book a Strategy Call
            </a>
            <Link 
              to="/community"
              className="bg-cream/5 backdrop-blur-xl border border-cream/20 text-cream px-12 py-6 rounded-full text-xl font-bold hover:bg-cream/10 transition-all"
            >
              Join the Community
            </Link>
          </div>
          <p className="text-sm text-cream/40 tracking-widest uppercase">Free consultation · No obligation · Just honest advice</p>
        </div>
      </section>
    </div>
  );
}
function CaseStudyDetail({ 
  id, client, industry, location, logo, 
  problemHeadline, problemDescription, problemMetrics, beforeImage,
  solutionPoints, successMetrics, afterImage, finalResults 
}: any) {
  const isLaunchCaseStudy = id === 'ribs';

  const renderPointContent = (text: string) => {
    const parts = text.split(/(\[.*?\]\(.*?\))/g);
    return parts.map((part, i) => {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        return (
          <a 
            key={i} 
            href={match[2]} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-mocha hover:text-cream hover:bg-mocha px-2 py-0.5 rounded transition-all items-center gap-1 inline-flex underline decoration-primary font-bold group/link"
          >
            {match[1]} <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
          </a>
        );
      }
      return <span key={i} className="break-words">{part}</span>;
    });
  };

  return (
    <section className="py-24 md:py-40 px-6 last:pb-32 odd:bg-cream even:bg-[#fafaf9]" id={id}>
      <div className="max-w-7xl mx-auto">
        {/* LOGO & CONTEXT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 md:mb-24 text-center md:text-left"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-3xl bg-espresso text-cream flex items-center justify-center shadow-2xl relative group overflow-hidden shrink-0">
               <div className="relative z-10">{logo}</div>
               <div className="absolute inset-0 bg-mocha opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-espresso tracking-tighter mb-2">{client}</h2>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-stone text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                <span className="text-mocha">{industry}</span>
                <span className="w-1 h-1 rounded-full bg-gray-200" />
                <div className="flex items-center gap-2">
                  <MapPin size={12} className="text-mocha" /> {location}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {isLaunchCaseStudy ? (
          /* UNIFIED FULL-WIDTH LAUNCH LAYOUT (RIBS) */
          <div className="space-y-16 md:space-y-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 sm:p-12 md:p-20 rounded-[3rem] md:rounded-[4rem] border border-mocha/20 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 md:p-12">
                 <span className="bg-mocha/10 text-mocha text-[10px] md:text-xs font-bold px-4 md:px-6 py-2 md:py-3 rounded-full tracking-[0.2em] uppercase flex items-center gap-2 whitespace-nowrap">
                   <Target size={14} strokeWidth={4} /> Launch Architecture
                 </span>
              </div>

              <div className="max-w-4xl mt-12 md:mt-8">
                <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-espresso mb-8 leading-[1.1] md:leading-[1.05] tracking-tight">{problemHeadline}</h3>
                <p className="text-lg sm:text-xl md:text-2xl text-stone leading-relaxed mb-12 font-light whitespace-pre-line">
                  {problemDescription}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
                  {problemMetrics.map((m: any, i: number) => (
                    <div key={i} className="bg-espresso/5 p-6 md:p-8 rounded-[2rem] border border-linen group-hover:border-mocha/20 transition-all text-center md:text-left">
                      <span className="block text-3xl md:text-4xl font-bold text-espresso mb-1 tracking-tighter">{m.value}</span>
                      <span className="block text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] leading-tight">{m.label}</span>
                    </div>
                  ))}
                  <div className="col-span-2 md:col-span-1 bg-mocha text-cream p-6 md:p-8 rounded-[2rem] shadow-xl shadow-mocha/20 flex flex-col justify-center text-center md:text-left">
                    <span className="block text-[9px] font-bold uppercase tracking-[0.2em] opacity-60 mb-1">Status</span>
                    <span className="text-lg md:text-xl font-bold italic">Launch Active</span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                  <div className="space-y-8">
                    <h4 className="text-lg font-bold text-espresso flex items-center gap-3">
                      <div className="w-8 h-1 bg-mocha rounded-full transition-all group-hover:w-12" /> Implementation Deep-Dive
                    </h4>
                    <div className="grid gap-6">
                      {solutionPoints.filter((p: string) => !p.includes('[')).map((point: string, i: number) => (
                         <div key={i} className="flex gap-4 group/item">
                            <div className="w-6 h-6 rounded-full bg-mocha/10 text-mocha flex items-center justify-center shrink-0 mt-1">
                               <Check size={12} strokeWidth={3} />
                            </div>
                            <p className="text-gray-700 leading-relaxed font-light text-base md:text-lg">{point}</p>
                         </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8">
                    <h4 className="text-lg font-bold text-espresso flex items-center gap-3">
                      <div className="w-8 h-1 bg-mocha rounded-full transition-all group-hover:w-12" /> Campaign Assets
                    </h4>
                    <div className="grid gap-3 sm:gap-4">
                      {solutionPoints.filter((p: string) => p.includes('[')).map((point: string, i: number) => (
                        <div key={i} className="bg-cream p-4 sm:p-5 rounded-2xl border border-linen flex items-center justify-between group/asset hover:shadow-lg hover:border-mocha/20 transition-all active:scale-[0.98]">
                          <div className="flex items-center gap-4 min-w-0">
                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-mocha shrink-0">
                              <BookOpen size={20} />
                            </div>
                            <div className="font-bold text-sm tracking-tight text-espresso truncate">
                              {renderPointContent(point)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
               <div className="lg:col-span-2 relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-linen shadow-2xl group">
                  <img src={afterImage} className="w-full h-full object-cover object-top aspect-[4/3] md:aspect-auto" alt="Project Result" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
               </div>
               <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8">
                  {successMetrics.map((m: any, i: number) => (
                    <div key={i} className="bg-cream p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-linen shadow-xl relative overflow-hidden group/m">
                      <span className="block text-4xl md:text-5xl font-bold text-mocha mb-2 tracking-tighter">
                        {m.prefix}<StatCounter end={m.value} suffix={m.suffix} />
                      </span>
                      <span className="block text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">{m.label}</span>
                      <span className="inline-block px-4 py-2 bg-mocha/10 rounded-full text-[9px] md:text-[10px] font-bold text-mocha uppercase tracking-widest">{m.change}</span>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-mocha/5 rounded-full blur-3xl -mr-12 -mt-12 group-hover/m:scale-150 transition-transform duration-1000" />
                    </div>
                  ))}
               </div>
            </div>

            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="bg-espresso p-10 md:p-20 rounded-[3rem] md:rounded-[4rem] text-cream text-center relative overflow-hidden"
            >
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.1)_0%,transparent_50%)]" />
               <p className="text-xl sm:text-2xl md:text-3xl font-serif italic font-light mb-12 relative z-10 text-cream/90 leading-snug px-4">
                 "This successful launch shows the power of strategic email marketing and persuasive copywriting. By focusing on audience needs and creating urgency, Ribs Fellowship exceeded their expectations."
               </p>
               <div className="flex flex-wrap justify-center gap-8 md:gap-12 relative z-10 border-t border-cream/10 pt-12 px-4">
                 {finalResults.map((res: any, i: number) => (
                    <div key={i} className="text-center md:text-left min-w-[140px] flex-1 md:flex-none">
                      <span className="block text-lg font-bold text-mocha mb-2 tracking-tighter">{res.stat}</span>
                      <p className="text-[10px] text-cream/50 leading-relaxed uppercase tracking-widest">{res.desc}</p>
                    </div>
                 ))}
               </div>
            </motion.div>
          </div>
        ) : (
          /* COMPARISON LAYOUT (MALZFOTOZ/HINGEES) */
          <div className="space-y-24 md:space-y-40">
            {/* TOP SECTION: SYMMETRICAL COMPARISON GRID */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
              {/* COMPONENT: BEFORE / BASELINE */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col h-full glass p-8 sm:p-10 md:p-14 rounded-[3rem] border border-linen shadow-xl relative overflow-hidden group order-1 lg:order-1"
              >
                <div className="absolute top-0 right-0 p-6 md:p-8">
                  <span className="bg-red-50 text-red-500 text-[10px] font-bold px-4 py-2 rounded-full tracking-widest uppercase flex items-center gap-2">
                    <X size={12} strokeWidth={4} /> Before Henry
                  </span>
                </div>
                
                <div className="mt-10 md:mt-8 flex-1 flex flex-col">
                  <h3 className="text-2xl sm:text-3xl font-bold text-espresso mb-6 leading-tight text-balance">{problemHeadline}</h3>
                  <p className="text-base md:text-lg text-stone leading-relaxed mb-10 font-light whitespace-pre-line">{problemDescription}</p>
                  
                  <div className="grid grid-cols-2 gap-4 md:gap-6 mb-10 mt-auto">
                    {problemMetrics.map((m: any, i: number) => (
                      <div key={i} className="bg-gray-50/50 p-5 md:p-6 rounded-2xl border border-linen text-center md:text-left">
                        <span className="block text-2xl md:text-4xl font-bold text-espresso mb-1 tracking-tight">{m.value}</span>
                        <span className="block text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="relative rounded-[2rem] overflow-hidden border border-linen bg-gray-50 aspect-video group-hover:shadow-2xl transition-all duration-500">
                    <img src={beforeImage} className="w-full h-full object-cover object-top grayscale opacity-60" alt="Before performance" />
                  </div>
                </div>
              </motion.div>

              {/* COMPONENT: AFTER / TRANSFORMATION */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col h-full glass p-8 sm:p-10 md:p-14 rounded-[3rem] border border-mocha/20 shadow-2xl shadow-mocha/5 relative overflow-hidden group order-2 lg:order-2"
              >
                <div className="absolute top-0 right-0 p-6 md:p-8">
                  <span className="bg-mocha/10 text-mocha text-[10px] font-bold px-4 py-2 rounded-full tracking-widest uppercase flex items-center gap-2">
                    <Check size={12} strokeWidth={4} /> Impact Results
                  </span>
                </div>
                
                <div className="mt-10 md:mt-8 flex-1 flex flex-col">
                  <h3 className="text-2xl sm:text-3xl font-bold text-espresso mb-6 leading-tight">Transformation Achieved</h3>
                  
                  <div className="grid grid-cols-2 gap-4 md:gap-6 mb-10 mt-auto">
                    {successMetrics.map((m: any, i: number) => (
                      <div key={i} className="bg-mocha/5 p-5 md:p-6 rounded-2xl border border-mocha/10 group-hover:bg-mocha/10 transition-colors duration-500 text-center md:text-left">
                        <span className="block text-2xl md:text-4xl font-bold text-mocha mb-1 tracking-tight">
                          {m.prefix}<StatCounter end={m.value} suffix={m.suffix} />
                        </span>
                        <span className="block text-[9px] md:text-[10px] font-bold text-stone uppercase tracking-widest mb-1">{m.label}</span>
                        <span className="text-[9px] font-bold text-mocha/70 uppercase tracking-tighter">{m.change}</span>
                      </div>
                    ))}
                  </div>

                  <div className="relative rounded-[2rem] overflow-hidden border border-mocha/20 bg-gray-50 aspect-video shadow-2xl shadow-mocha/10 group-hover:scale-[1.01] transition-all duration-500">
                    <img src={afterImage} className="w-full h-full object-cover object-top" alt="After transformation" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* BOTTOM SECTION: PROCESS BREAKDOWN */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full bg-espresso text-cream rounded-[3rem] md:rounded-[4rem] p-8 sm:p-12 md:p-24 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-mocha/10 rounded-full blur-[100px] -mr-48 -mt-48 group-hover:bg-mocha/20 transition-all duration-1000" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-mocha/5 rounded-full blur-[80px] -ml-32 -mb-32" />

              <div className="relative z-10 max-w-5xl">
                <div className="inline-flex items-center gap-3 px-6 py-2 bg-cream/10 rounded-full text-mocha text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-12 border border-cream/10">
                  <Zap size={14} className="fill-current" /> Technical Implementation
                </div>
                
                <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-12 tracking-tight leading-[1.1] text-balance">
                  How I Engineered This <br />
                  <span className="text-mocha italic">Transformation.</span>
                </h3>

                <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
                  <div className="space-y-8">
                    <h4 className="text-cream/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 md:mb-8">Strategic Workflow</h4>
                    <ul className="space-y-8">
                      {solutionPoints.slice(0, Math.ceil(solutionPoints.length / 2)).map((point: string, i: number) => (
                        <li key={i} className="flex gap-4 md:gap-6 group/item">
                          <span className="text-mocha font-mono text-base md:text-lg font-bold opacity-40 group-hover/item:opacity-100 transition-opacity">
                            {(i + 1).toString().padStart(2, '0')}
                          </span>
                          <div className="space-y-2 flex-1 min-w-0">
                            <div className="text-base sm:text-lg md:text-xl text-cream/90 leading-relaxed font-light break-words">
                              {renderPointContent(point)}
                            </div>
                            <div className="w-0 group-hover/item:w-full h-px bg-mocha/30 transition-all duration-700" />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-8">
                    <h4 className="text-cream/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 md:mb-8">Execution Architecture</h4>
                    <ul className="space-y-8">
                      {solutionPoints.slice(Math.ceil(solutionPoints.length / 2)).map((point: string, i: number) => (
                        <li key={i} className="flex gap-4 md:gap-6 group/item">
                          <span className="text-mocha font-mono text-base md:text-lg font-bold opacity-40 group-hover/item:opacity-100 transition-opacity">
                            {(i + Math.ceil(solutionPoints.length / 2) + 1).toString().padStart(2, '0')}
                          </span>
                          <div className="space-y-2 flex-1 min-w-0">
                            <div className="text-base sm:text-lg md:text-xl text-cream/90 leading-relaxed font-light break-words">
                              {renderPointContent(point)}
                            </div>
                            <div className="w-0 group-hover/item:w-full h-px bg-mocha/30 transition-all duration-700" />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FINAL RESULTS STRIP */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {finalResults.map((res: any, i: number) => (
                <div key={i} className="bg-cream p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-linen shadow-sm text-center md:text-left group hover:border-mocha/20 transition-all">
                  <span className="block text-3xl md:text-4xl font-bold text-espresso mb-3 tracking-tighter group-hover:text-mocha transition-colors">{res.stat}</span>
                  <p className="text-xs md:text-sm text-stone font-medium leading-relaxed">{res.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function BenefitCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-cream p-8 rounded-2xl shadow-md border border-linen h-full"
    >
      <div className="p-4 bg-mocha/5 rounded-xl inline-block mb-6 text-mocha">
        {React.cloneElement(icon as any, { className: 'w-8 h-8' })}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-stone text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

function StatBox({ label, count, suffix, color, icon }: { label: string, count: number, suffix: string, color: string, icon: React.ReactNode }) {
  return (
    <div className={`${color} p-6 rounded-2xl text-cream shadow-xl`}>
      <div className="flex items-center gap-3 mb-2 opacity-80">
        {icon}
        <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
      </div>
      <div className="text-4xl font-bold">
        <StatCounter end={count} suffix={suffix} />
      </div>
    </div>
  );
}

function SocialButton({ icon, href, color = "text-espresso" }: { icon: React.ReactNode, href: string, color?: string }) {
  return (
    <a 
      href={href} 
      className={`w-12 h-12 flex items-center justify-center rounded-full bg-cream border border-linen shadow-sm transition-all hover:translate-y-[-2px] hover:shadow-md ${color}`}
    >
      {React.cloneElement(icon as any, { className: 'w-5 h-5' })}
    </a>
  );
}

export function SocialIcon({ icon, size = 20, href = "#" }: { icon: React.ReactNode, size?: number, href?: string }) {
  return (
    <a href={href} className="w-10 h-10 flex items-center justify-center rounded-full bg-cream/5 text-gray-400 hover:text-mocha hover:bg-cream/10 transition-all">
      {React.cloneElement(icon as any, { size })}
    </a>
  );
}

export function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);
}