import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { StatCounter } from './UIHelpers';

export function TrustLogo({ name }: { name: string }) {
  return (
    <div className="h-12 flex items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer px-4">
      <span className="text-2xl font-extrabold text-espresso tracking-tighter uppercase italic opacity-80">{name}</span>
    </div>
  );
}

export function SkillProgress({ label, percentage }: { label: string, percentage: number }) {
  return (
    <div className="space-y-3 group">
      <div className="flex justify-between items-end">
        <span className="text-lg md:text-xl font-bold text-espresso tracking-tight group-hover:text-mocha transition-colors duration-300">{label}</span>
        <span className="text-xs font-mono text-gray-light font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">{percentage}%</span>
      </div>
      <div className="h-4 md:h-5 bg-[#1a1a1a]/5 rounded-full overflow-hidden flex items-center p-1 md:p-1.5 shadow-inner relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="h-full bg-espresso rounded-full relative z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
      </div>
    </div>
  );
}

export function ToolIcon({ name, iconUrl }: { name: string, iconUrl: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="aspect-square bg-mocha/5 rounded-lg border border-mocha/10 shadow-[0_10px_40px_rgba(20,184,166,0.05)] flex flex-col items-center justify-center p-6 md:p-8 group transition-all duration-500 cursor-pointer hover:bg-espresso hover:shadow-[0_30px_70px_rgba(0,0,0,0.2)] overflow-hidden relative"
    >
      <div className="w-full h-full flex items-center justify-center relative z-10">
        <img
          src={iconUrl}
          alt={name}
          className="w-[65%] h-[65%] object-contain group-hover:scale-110 transition-all duration-700 ease-out"
          referrerPolicy="no-referrer"
        />
      </div>
      <span className="text-[10px] font-bold text-mocha uppercase tracking-widest mt-4 group-hover:text-cream transition-all duration-300 relative z-10">
        {name}
      </span>
    </motion.div>
  );
}

export function SkillCard({ icon, title, level, tools }: { icon: React.ReactNode, title: string, level: string, tools: string }) {
  return (
    <div className="bg-cream p-8 rounded-lg border border-linen shadow-sm hover:shadow-md transition-all group">
      <div className="mb-6 text-mocha bg-mocha/5 w-14 h-14 flex items-center justify-center rounded-md group-hover:bg-mocha group-hover:text-cream transition-all duration-300">
        {icon}
      </div>
      <h4 className="text-lg font-bold text-espresso mb-1">{title}</h4>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[10px] font-bold text-mocha uppercase tracking-widest px-2 py-0.5 bg-mocha/5 rounded border border-mocha/10">
          {level}
        </span>
      </div>
      <p className="text-sm text-stone leading-relaxed">{tools}</p>
    </div>
  );
}

export function ServiceCard({ icon, title, description, list }: { icon: React.ReactNode, title: string, description: string, list: string[] }) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 40px 80px -15px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="bg-cream p-10 md:p-14 rounded-lg border border-linen hover:border-espresso/10 transition-all group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-mocha/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-espresso/5 transition-colors duration-700" />
      <div className="mb-12 w-16 h-16 bg-mocha text-cream rounded-md flex items-center justify-center group-hover:bg-espresso group-hover:scale-110 transition-all duration-500 shadow-xl shadow-mocha/20 group-hover:shadow-espresso/30">
        {icon}
      </div>
      <h4 className="text-3xl font-bold mb-6 tracking-tight text-espresso">{title}</h4>
      <p className="text-stone text-lg leading-relaxed mb-12">{description}</p>
      <div className="space-y-4 pt-10 border-t border-linen">
        <p className="text-[10px] font-bold text-gray-light uppercase tracking-[0.3em] mb-4">What's included:</p>
        <ul className="space-y-4">
          {list.map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-sm font-bold text-espresso/80">
              <div className="mt-1 w-2 h-2 rounded-full bg-mocha flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function StatCard({ count, suffix, label, sublabel }: { count: number, suffix: string, label: string, sublabel: string }) {
  return (
    <div className="bg-[#fafaf9] p-10 border border-linen rounded-lg group hover:border-mocha transition-all">
      <div className="text-6xl font-bold text-espresso mb-4 tracking-tighter group-hover:text-mocha transition-colors">
        <StatCounter end={count} suffix={suffix} />
      </div>
      <div>
        <p className="text-lg font-bold text-espresso leading-none mb-1">{label}</p>
        <p className="text-sm text-gray-400 uppercase tracking-widest">{sublabel}</p>
      </div>
    </div>
  );
}

export function CaseStudyCard({ category, challenge, solution, results }: { category: string, challenge: string, solution: string, results: string[] }) {
  return (
    <div className="bg-cream border border-linen border-l-[6px] border-l-primary p-10 rounded-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full group">
      <div className="flex-1">
        <span className="text-xs font-bold text-mocha tracking-[0.2em] mb-4 block group-hover:tracking-[0.3em] transition-all">{category}</span>
        <div className="h-px w-full bg-gray-100 mb-8" />

        <div className="mb-8">
          <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">The Challenge</h4>
          <p className="text-espresso leading-relaxed">{challenge}</p>
        </div>

        <div className="mb-10">
          <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">The Solution</h4>
          <p className="text-espresso leading-relaxed">{solution}</p>
        </div>
      </div>

      <div className="bg-mocha/5 p-8 rounded-lg mt-auto">
        <h4 className="text-sm font-bold text-espresso mb-4">Core Outcomes:</h4>
        <ul className="space-y-3">
          {results.map((r, i) => (
            <li key={i} className="flex items-center gap-3 text-sm font-bold text-mocha italic">
              <span className="shrink-0">›</span>
              {r}
            </li>
          ))}
        </ul>
      </div>

      <Link to="/case-studies" className="mt-8 flex items-center gap-2 text-mocha font-bold group-hover:gap-4 transition-all">
        View Case Study
      </Link>
    </div>
  );
}

export function TestimonialCard({ quote, name, role }: { quote: string, name: string, role: string }) {
  return (
    <div className="bg-cream/5 border border-cream/10 p-12 rounded-lg relative group">
      <div className="absolute top-0 right-10 text-[120px] font-serif text-cream/5 pointer-events-none select-none italic leading-none translate-y-[-20px]">"</div>
      <p className="text-xl leading-relaxed text-cream/90 italic mb-10 relative z-10">"{quote}"</p>
      <div className="flex items-center gap-1 mb-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} size={14} className="text-yellow-500 fill-current" />
        ))}
      </div>
      <div>
        <p className="text-lg font-bold">{name}</p>
        <p className="text-sm text-cream/50 uppercase tracking-widest">{role}</p>
      </div>
    </div>
  );
}

export function ConversionCard({ icon, title, description, btnText, href, primary }: { icon: React.ReactNode, title: string, description: string, btnText: string, href: string, primary?: boolean }) {
  const isExternal = href.startsWith('http');
  const Component = isExternal ? 'a' : Link;
  const props = isExternal ? { href, target: '_blank', rel: 'noopener noreferrer' } : { to: href };

  return (
    <div className="bg-cream p-12 rounded-lg border border-linen hover:border-mocha/30 transition-all hover:shadow-2xl text-center group">
      <div className="mb-8 flex justify-center group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <p className="text-stone text-lg mb-10 leading-relaxed max-w-sm mx-auto">{description}</p>
      <Component
        {...props as any}
        className={`inline-block w-full py-5 rounded-md text-xl font-bold transition-all shadow-xl ${primary ? 'bg-mocha text-cream hover:bg-mocha/90 shadow-mocha/20' : 'bg-espresso text-cream hover:bg-black'}`}
      >
        {btnText}
      </Component>
    </div>
  );
}

export function ServiceEvidenceCard({ label, title, description, image }: { label: string, title: string, description: string, image: string }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-cream rounded-lg overflow-hidden shadow-xl border border-linen group cursor-pointer"
    >
      <div className="aspect-[16/9] relative bg-gray-50 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-6 left-6 z-10">
          <span className="bg-espresso/80 backdrop-blur-md text-cream text-[10px] font-bold px-4 py-2 rounded-full tracking-widest uppercase">
            {label}
          </span>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-espresso mb-3">{title}</h3>
        <p className="text-stone leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
