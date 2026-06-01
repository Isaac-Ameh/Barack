import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  HeartHandshake,
  Mail,
  Sparkles,
  X,
  Inbox,
} from 'lucide-react';

type TabKey = 'All' | 'Welcome' | 'Strategy' | 'Newsletter' | 'Sequences' | 'Event';

type ContentBlock =
  | { type: 'intro'; title?: string; paragraphs: string[] }
  | { type: 'bullets'; title?: string; items: string[] }
  | { type: 'steps'; title?: string; items: { title: string; body: string }[] }
  | { type: 'timeline'; title?: string; items: { label: string; title: string; body: string }[] }
  | { type: 'quote'; text: string };

type WorkProject = {
  id: string;
  tab: Exclude<TabKey, 'All'>;
  kicker: string;
  title: string;
  subtitle: string;
  summary: string;
  excerpt: string;
  image: string;
  fallback: string;
  tags: string[];
  highlights: string[];
  metrics: { label: string; value: string }[];
  contentBlocks: ContentBlock[];
  imageFit?: 'cover' | 'contain';
};

const PROJECTS: WorkProject[] = [
  {
    id: 'templ8te',
    tab: 'Welcome',
    kicker: 'WELCOME / 01',
    title: 'TEMPL8TE Welcome Series',
    subtitle: 'Subject: Welcome to TEMPL8TE',
    summary: 'A bold welcome sequence for fearless fashionistas that builds community, trust, and anticipation from the first email.',
    excerpt:
      'The TEMPL8TE sequence feels like a brand magazine opening its doors. It leads with bold femininity, clearly states what new subscribers can expect, and turns a standard signup into a community-led relationship.',
    image: '/Work_Highlight_files/WorkTemplate.jpg',
    fallback: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=1200',
    tags: ['Fashion', 'Welcome', 'Community', 'E-commerce'],
    highlights: ['Bold onboarding', 'London pop-up recap', 'Style gists'],
    metrics: [
      { label: 'Onboarding Open Rate', value: '45%' },
      { label: 'Click-Through Rate', value: '8.4%' },
      { label: 'Audience Size', value: '15k+' },
    ],
    contentBlocks: [
      {
        type: 'intro',
        paragraphs: [
          'SUBJECT: Welcome to TEMPL8TE - Your Gateway to Bold Femininity',
          'Hey Gorgeous [Name],',
          "Welcome to TEMPL8TE!, where bold femininity meets empowerment! We're beyond thrilled to have you join our community of fearless fashionistas!",
          "As a part of our community of strong, stylish women, here's what you can expect;",
        ],
      },
      {
        type: 'bullets',
        title: 'What subscribers get',
        items: [
          'Early access to new collections and events',
          'Special highlights',
          'Exclusive promotions and offers',
          'Style gists and trend reports',
        ],
      },
      {
        type: 'intro',
        title: 'Brand promise',
        paragraphs: [
          'Stay Ahead of the Curve',
          'Be the first to know about new drops, events, and collaborations. Check out Our Collection of fearless outfits and follow us on Instagram to see our outfits in action',
          'What to Expect from Our Newsletter',
          'London Pop-Up Recap - We\'re still buzzing from the energy of our London pop-up event! Here\'s a sneak peek. It was an absolute blast, and we\'re thrilled to have shared it with all who joined us on August 3rd and 4th.',
          'Join the Movement - Just so you know [Name], TEMPL8TE is more than just a fashion brand - it\'s a community of women who embody bold femininity and empowerment. Stay empowered with inspiring stories, style gists, and more.',
          'Best, TEMPL8TE.',
        ],
      },
    ],
  },
  {
    id: 'malzfotoz',
    tab: 'Strategy',
    kicker: 'STRATEGY / 02',
    title: 'Malzfotoz Email Strategy',
    imageFit: 'contain',
    subtitle: 'Launching Malzfotoz Email Strategy',
    summary: 'A diaspora-aware segmentation and re-engagement plan that reframes December photography around memory, heritage, and family bonds.',
    excerpt:
      'The Malzfotoz strategy is built around list hygiene, emotional relevance, and the specific December shoot window. It speaks to Nigerian Canadians who want to preserve cultural identity, document milestones, and send meaningful photos back home.',
    image: '/proofs/malzfotoz/after/After_I_Stepped_in.png',
    fallback: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1200',
    tags: ['Strategy', 'Segmentation', 'Diaspora', 'Photography'],
    highlights: ['List audit', 'December demand', 'Re-engagement'],
    metrics: [
      { label: 'Peak Open Rate', value: '68%' },
      { label: 'Revenue Per Campaign', value: '$1,100+' },
      { label: 'Strategy Framework', value: '6Ps' },
    ],
    contentBlocks: [
      {
        type: 'steps',
        title: '1. Audit her email list',
        items: [
          {
            title: 'Check subscriber health',
            body: 'Are emails still valid? Are there bounces or inactive accounts? Segment the list by engagement level and interest (e.g., maternity, weddings) if any. Send a re-engagement email first.',
          },
          {
            title: 'Remove unengaged subscribers',
            body: 'Clear out the people who are no longer engaging so deliverability stays strong and future campaigns reach the right audience.',
          },
        ],
      },
      {
        type: 'bullets',
        title: '2. Why would her audience want the December shoot?',
        items: [
          'a. Preserving cultural identity, family bonds, and significant life moments in the diaspora.',
          'b. For Nigerian Canadians, photography is a way to maintain a connection to their heritage and document celebrations that blend Nigerian and Canadian cultures.',
          'c. It also serves as a form of cultural storytelling about identity in a new country.',
          'd. To mark milestones and document new beginnings.',
          'e. December holds strong cultural importance for Nigerian families in Canada, who often recreate traditional Nigerian Christmas celebrations, including church services, all-night parties on Christmas Eve, family gatherings, festive meals (jollof rice, pounded yam, stews), gift exchanges, and community events blending Nigerian and Canadian traditions. These occasions are crucial for memory preservation.',
          'f. Many Nigerian Canadians use photography to share moments with extended family in Nigeria. Photoshoots around December capture both individual and family memories to keep cultural pride and legacy alive.',
        ],
      },
      {
        type: 'intro',
        title: '3. Email frequency',
        paragraphs: [
          '2 emails per week, especially to engaged subscribers. This will keep subscribers engaged and improve deliverability.',
        ],
      },
    ],
  },
  {
    id: 'tlc-light-bearer',
    tab: 'Newsletter',
    kicker: 'NEWSLETTER / 03',
    title: 'TLC Light Bearer Newsletter',
    subtitle: 'All you need to spread the light in a click',
    summary: 'A 14-email stewardship campaign that turns conference publicity into a faith-led call to action and donor urgency.',
    excerpt:
      'The Light Bearer sequence is written like a sermon and structured like a launch campaign. It uses scripture, proof, urgency, and community language to move readers toward action without losing the spiritual tone of the event.',
    image: '/Work_Highlight_files/TLC.png',
    fallback: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&q=80&w=1200',
    tags: ['Newsletter', 'Faith', 'Fundraising', 'Sequence'],
    highlights: ['14-email arc', 'Donation funnel', 'Speaker spotlight'],
    metrics: [
      { label: 'Registrations', value: '1,500+' },
      { label: 'Sequence Length', value: '14 Days' },
      { label: 'Donation Growth', value: '2.4x' },
    ],
    contentBlocks: [
      {
        type: 'intro',
        paragraphs: [
          'Subject: All you Need To Spread The Light in a Click',
          'Preview: Now you have no excuse',
          'Dear Light Bearer,',
          'By the time you read this, over 1500 people and counting have already registered for The Light Conference 2025.',
          'The question is, “How many of them came through you?” and if your answer is none, here is something for you…Especially because the assignment of The Light Conference is one which is critical for God\'s end time agenda.',
          'Will God say this to you?',
          '“Well done, good and faithful servant! You have been faithful with a few things; I will put you in charge of many things.” Matthew 25:23',
          'This is your opportunity to be in charge of many things. Many souls are waiting for an activation and impartation.',
          'They want to be a room full of builders, reformers, and visionaries. They are hungry for prophetic insights in their sectors. They want an atmosphere of faith, fire, and focus. They want to become the top 1%.',
          'Sadly, they will never have the opportunity, because no one told them about The Light Conference.',
          'But that is about to change now because you said YES. Because you decided to make the Master known in every sector. Because you are the faithful steward.',
          'How can you make this happen? Very easy.',
          'All you need is the Publicity Packet. Inside, you will find all the tools you need to spread the word about The Light Conference. The best part is that you can choose whatever suits your style.',
          'Videos from the TLC 2024, countdown images, pictures of the volunteers, graphic designs, reasons why people should join TLC, how they can attend, and a lot more.',
          'Now that you have everything you need that you\'re equipped, will you obey the Master\'s Call? Yes, right?',
          'Exactly! Let\'s take the gospel to the ends of the earth.',
          'With Love, Your Fellow Light Bearer, Haoma.',
        ],
      },
      {
        type: 'timeline',
        title: 'Email sequence breakdown',
        items: [
          { label: 'Jul 15', title: 'Introduction email of the event', body: 'Introduce the foundation, founders, others. Share the foundation\'s mission and vision. Introduce the event and your intention. State the problem: lack of well-trained teachers = uneducated children filling the society. Offer the vision of the event: support a campaign that has trained thousands already. Do not ask for donations yet, but hint at it. Add contact details. CTA: stay tuned for the next email. P.S: add pictures as much as possible.' },
          { label: 'Jul 17', title: 'Follow-up on introduction', body: 'Foundation\'s success stories with proof. Foundation\'s challenges related to the event. Tell a real story, such as how one trained teacher transformed 20 lives. Paint the before-and-after. Show how the conference will 10X this impact and equip more teachers. CTA: donate $50 to sponsor one teacher for the August 2025 conference. P.S: add pictures as much as possible.' },
          { label: 'Jul 19', title: 'FAQs', body: 'Questions about donating. Questions about the event. Questions about means of payment. Questions about post payment. P.S: turn every objection into a question and answer it.' },
          { label: 'Jul 21', title: 'Conference spotlight', body: 'Reintroduce the event. Get into the details of the event: ideation to execution. Expectations of the event. Progress so far. Call-to-action.' },
          { label: 'Jul 23', title: 'Meet the voices changing classrooms across Africa', body: 'Highlight and profile global speakers, panelists, host, and attendees. Explain the meaning of this attendance. Show the impact across the country and the continent. P.S: include a beautiful visual or event flyer.' },
          { label: 'Jul 25', title: 'Testimonials', body: '“I almost didn\'t attend—until it changed my life.” Use words from teachers who attended previous events. Emphasize the reluctance > surprise > transformation arc. Remind donors that they helped create that experience. CTA: don\'t forget to donate.' },
          { label: 'Jul 27', title: 'The ROI of giving', body: 'Your $50 = Classrooms without walls. Translate donation into outcomes: one teacher → 20+ children. Benefit stacking: access to mental health tools, digital teaching skills, inclusive education. Include a one-click donation button.' },
          { label: 'Jul 28', title: 'Deadline urgency', body: '1 week left. Inject urgency: countdown to August 4th. Short message. Testimonials/images from previous sessions to reinforce success. Include a one-click donation button.' },
          { label: 'Jul 29', title: 'FAQs again', body: 'Questions about donating. Questions about the event. Questions about means of payment. Questions about post payment. P.S: turn every objection into a question and answer it.' },
          { label: 'Jul 30', title: 'Sneak peek into event prep', body: 'Updates about event. Increase number of attendees. Nudge them to be part of it. Personal note of gratitude for coming this far from Chisom. Include a one-click donation button.' },
          { label: 'Aug 1', title: 'Final reminder', body: '3 days to go. “Last chance to make a difference this August.” Emotional tone. Acknowledge it is their final opportunity to be part of this movement. Include quotes from Chisom, the founder. Include a one-click donation button.' },
          { label: 'Aug 3', title: 'Countdown urgency', body: '1 day to go. Countdown. Include a one-click donation button.' },
          { label: 'Aug 4', title: 'The event is live', body: 'The event is now happening.' },
          { label: 'Aug 5', title: 'Thank you', body: 'You did this. And it matters. Warm appreciation for donors. Report initial impact stats. Encourage staying connected: offer updates, newsletters, or even virtual attendance.' },
        ],
      },
      {
        type: 'bullets',
        title: 'Campaign goal',
        items: ['Raise $50 each from 1,000+ professionals to support the August 2025 Teachers International Conference organized by Lilysoya Childcare Foundation.'],
      },
    ],
  },
  {
    id: 'lilysoya',
    tab: 'Sequences',
    kicker: 'SEQUENCES / 04',
    title: 'Lilysoya Foundation Fundraising Flow',
    subtitle: 'Teachers International Conference',
    summary: 'A donor nurture system that turns a $50 contribution into classroom-level impact, proof, urgency, and sustained follow-up.',
    excerpt:
      'This fundraising flow maps the donor journey from cold outreach to thank you. Every email is tied back to the August 2025 Teachers International Conference and framed as a practical way to sponsor impact for children and teachers alike.',
    image: '/Work_Highlight_files/Lilysoya.png',
    fallback: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&q=80&w=1200',
    tags: ['Nonprofit', 'Fundraising', 'Teacher Training', 'Donor Flow'],
    highlights: ['$50 ask', '8-email flow', 'Impact story'],
    metrics: [
      { label: 'Donor Reach Target', value: '1,000+' },
      { label: 'Gift Size', value: '$50' },
      { label: 'Impact / Teacher', value: '20+ Kids' },
    ],
    contentBlocks: [
      {
        type: 'intro',
        paragraphs: [
          'Email Campaign Goal',
          'Raise $50 each from 1,000+ professionals to support the August 2025 Teachers International Conference organized by Lilysoya Childcare Foundation.',
          'Cold Outreach - This $50 could empower 20 children in Nigeria. Introduce the initiative and spark interest.',
          'Impact Story - How one trained teacher transformed 100 lives. Show a personal story to build connection.',
          'Conference Spotlight - Meet the voices changing classrooms across Africa. Showcase the event and speakers.',
          'Testimonial - “I almost didn\'t attend—until it changed my life.” Share testimonials from real past attendees.',
          'The ROI of Giving - Your $50 = Classrooms without walls. Appeal to logic: low cost, high impact.',
          'Scarcity / Deadline Urgency - 3 days left: Sponsor a teacher\'s journey. Create urgency as August nears.',
          'Final Reminder - Last chance to make a difference this August. Final call before the event.',
          'Thank You + Stay Involved - You did this. And it matters. Gratitude and invite to stay connected.',
        ],
      },
      {
        type: 'timeline',
        title: 'Email sequence',
        items: [
          { label: '1', title: 'Introduction of promo', body: 'SL 1: The Arabian Elixir Set that stays all day long. Preview: Wear immortality like a god 😉. SL 2: Have you tried this Arabian Elixir Set? Preview: It\'s on sale for 10% off.' },
          { label: '2', title: 'Impact Story', body: 'How one trained teacher transformed 100 lives. Show personal story to build connection.' },
          { label: '3', title: 'Conference Spotlight', body: 'Meet the voices changing classrooms across Africa. Showcase the event and speakers.' },
          { label: '4', title: 'Testimonial', body: '“I almost didn\'t attend—until it changed my life.” Share testimonials from real past attendees.' },
          { label: '5', title: 'The ROI of Giving', body: 'Your $50 = Classrooms without walls. Appeal to logic: low cost, high impact.' },
          { label: '6', title: 'Scarcity / Deadline Urgency', body: '3 days left: Sponsor a teacher\'s journey. Create urgency as August nears.' },
          { label: '7', title: 'Final Reminder', body: 'Last chance to make a difference this August. Final call before the event.' },
          { label: '8', title: 'Thank You + Stay Involved', body: 'You did this. And it matters. Gratitude and invite to stay connected.' },
        ],
      },
    ],
  },
  {
    id: 'ribs-hybrid-conference',
    tab: 'Event',
    kicker: 'EVENT / 05',
    title: 'Ribs Hybrid Conference',
    subtitle: 'Launch architecture / event funnel',
    summary: 'A conference launch sequence that blended urgency, proof, and follow-up to move people from awareness into paid attendance.',
    excerpt:
      'This event piece shows how strategic email marketing can turn a conference into a revenue system. The campaign delivered ₦2.8M in revenue and 157 paid attendees by keeping the offer clear, timely, and difficult to ignore.',
    image: '/assets/ribs_hybrid_conference.png',
    fallback: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&q=80&w=1200',
    tags: ['Event', 'Revenue', 'Launch', 'Conversion'],
    highlights: ['₦2.8M revenue', '157 paid attendees', 'Launch funnel'],
    metrics: [
      { label: 'Total Revenue', value: '₦2.8M' },
      { label: 'Paid Attendees', value: '157' },
      { label: 'Target Conversion', value: '75%' },
    ],
    contentBlocks: [
      {
        type: 'intro',
        paragraphs: [
          'Launch Architecture',
          'Conference and event revenue systems.',
          'Generated ₦2.8M in revenue with 157 paid attendees.',
          'The system leaned on event proof, clear positioning, and follow-up that kept the momentum alive long enough to convert interest into payment.',
        ],
      },
      {
        type: 'bullets',
        title: 'What made it work',
        items: [
          'A strong headline and clear offer framed the hybrid conference as a must-attend moment.',
          'Urgency and proof were used together so the audience could feel both the opportunity and the momentum.',
          'Follow-up emails kept the event top of mind until seats turned into paid attendance.',
        ],
      },
    ],
  },
  {
    id: 'bscent-villa',
    tab: 'Sequences',
    kicker: 'SEQUENCES / 06',
    title: 'B-Scent Villa Promo Sequence',
    subtitle: 'Identity-led fragrance launch',
    summary: 'A perfume launch that blends welcome emails, post-purchase nurture, and a multi-day urgency sequence into one identity-first campaign.',
    excerpt:
      'B-Scent Villa is written to make fragrance feel like identity. The suite starts with a generous welcome, follows through with confirmation and post-purchase messaging, and closes with a sharp 4-day promo sequence that pushes all the right emotional buttons.',
    image: '/Work_Highlight_files/BScent.jpg',
    fallback: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1200',
    tags: ['Promo', 'Welcome', 'Post-purchase', 'FOMO'],
    highlights: ['Welcome email', 'Promo sequence', 'Identity copy'],
    metrics: [
      { label: 'Conversion Lift', value: '38%' },
      { label: 'Promo Duration', value: '4-Day' },
      { label: 'Discount ROI', value: '4.2x' },
    ],
    contentBlocks: [
      {
        type: 'intro',
        paragraphs: [
          'Welcome Email 1',
          'Subject Line: Your NEW Identity Awaits—Enjoy 15% Off',
          'Hey Henry,',
          'I am Blessing, CEO of BScents Villa.',
          'Welcome to B-Scent Villa, your home of luxurious perfumes. You are officially our newest member.',
          'You\'re now part of a very close community that understands that perfumes are not an accessory but the identity you leave with people.',
          'To celebrate you, here\'s 15% off your first purchase. Use code NEW ID at checkout and start wearing the fragrance that lasts all day long.',
          '[IT\'S YOURS!]',
          'Leaving you with fragrance, Blessing.',
        ],
      },
      {
        type: 'intro',
        paragraphs: [
          'Subject Line: Your NEW Identity Begins!',
          'Your order is confirmed, and soon, you\'ll be holding a scent that speaks for you.',
          'Every fragrance at B-Scent Villa is made to give you a new identity that stays all day long.',
          'Your order details: [Order Summary]',
          'We can\'t wait for you to experience it. Let us know how it makes you feel! We reply to every message.',
          'What\'s going on today that brought you to BScents? (Attach short survey)',
          'Leaving you with fragrance, The B-Scent Villa Team',
        ],
      },
      {
        type: 'intro',
        paragraphs: [
          'Post-purchase Email',
          'Subject Line: This changes everything! Welcome to a new memory and identity.',
          'Hiiiiii Henry,',
          "It's Blessing here and guess whatttttt!",
          'We\'re not excited to have you here at Bscents Villa.',
          'WE ARE THRILLED!!!!!!',
          'How\'s your new identity? Tried it yet?',
          'As our newest member, let\'s show you around.',
          'B-Scent Villa was made just for you, an exclusive space for people who know their identity and value it.',
        ],
      },
      {
        type: 'timeline',
        title: 'Promo sequence',
        items: [
          { label: 'Day 1', title: 'Introduction of promo', body: 'SL 1: The Arabian Elixir Set that stays all day long. Preview: Wear immortality like a god. SL 2: Have you tried this Arabian Elixir Set? Preview: It\'s on sale for 10% off. Hero image: Wear immortality like a god. Subheader: Up to 10% on all set. The Arabian Elixir Set is a 3-in-1 combo of immortality and royalty that scents all day long.' },
          { label: 'Day 2', title: 'Objection handler', body: 'SL 1: Does this perfume last all day long? Preview: It does and it\'s going for 20% off. Text on hero image: Become irresistible. Subheader: It\'s all yours at 10%. The Arabian 3-in-1 combo set is luxury in a bottle and everything you need to smell like royalty all day long.' },
          { label: 'Day 3', title: '24 hrs left', body: 'SL 1: Did you forget your perfume on the shelf? Preview: It\'s going for 10% off. Text on hero image: Your wardrobe is incomplete without this. We saved one for you at 20% off, but it\'s gone forever in less than 24 hours. TAKE IT OFF THE SHELF!' },
          { label: 'Day 4', title: 'Social proof + FOMO', body: '12 hrs left. Countdown urgency, social proof, and one final push to close the sale before the offer disappears.' },
        ],
      },
    ],
  },
];

const TABS: { key: TabKey; label: string }[] = [
  { key: 'All', label: 'All' },
  { key: 'Welcome', label: 'Welcome' },
  { key: 'Strategy', label: 'Strategy' },
  { key: 'Newsletter', label: 'Newsletter' },
  { key: 'Sequences', label: 'Sequences' },
  { key: 'Event', label: 'Event' },
];

export function WorkHighlightPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('All');
  const [activeProject, setActiveProject] = useState<WorkProject | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const visibleProjects = activeTab === 'All' ? PROJECTS : PROJECTS.filter((project) => project.tab === activeTab);

  return (
    <div className="bg-cream text-espresso pb-24">
      {/* Header / Hero */}
      <section className="section-shell relative overflow-hidden bg-[#0B1210] px-6 pb-16 pt-28 text-cream md:pb-24 md:pt-40 border-b border-cream/5">
        
        {/* Profile Image Background with Gradient Fade */}
        <div 
          className="absolute inset-0 opacity-[0.35] mix-blend-luminosity bg-no-repeat bg-top"
          style={{ 
            backgroundImage: "url('/assets/henry_profile.png')",
            backgroundSize: "800px",
            backgroundPosition: "top right 15%"
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1210] via-[#0B1210]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1210] via-transparent to-transparent" />
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-mocha/20 bg-mocha/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.32em] text-mocha backdrop-blur shadow-[0_0_20px_rgba(20,184,166,0.1)]">
                <Sparkles className="h-4 w-4" />
                Premium Portfolio Showcase
              </span>

              <h1 className="text-[clamp(3.5rem,8vw,7.6rem)] font-display font-medium leading-[0.9] tracking-tight text-cream drop-shadow-lg">
                Email campaigns,
                <span className="block italic font-light text-mocha tracking-normal">launch systems,</span>
                and proven strategic templates.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/70 md:text-[1.35rem] font-light drop-shadow-md">
                This page breaks down the actual frameworks behind my best work. Explore my welcome email templates, diaspora strategies, and high-converting sequences, and see how magically they can work for your brand.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#work-gallery" className="inline-flex items-center gap-3 rounded-full bg-mocha px-7 py-4 text-sm font-bold text-cream shadow-[0_0_40px_rgba(20,184,166,0.3)] transition-all hover:bg-mocha-dark">
                  View my templates
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="https://calendar.app.google/fe1MA1wgPoBre1SYA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full border border-cream/12 bg-[#1A2522]/80 px-7 py-4 text-sm font-bold text-cream/90 backdrop-blur transition-all hover:border-cream/25 hover:bg-[#1A2522]">
                  Book a strategy call
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 border-t border-cream/10 pt-10 max-w-4xl">
                <div className="border-l border-mocha/30 pl-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cream/40 mb-1">Showcase Projects</p>
                  <p className="text-3xl font-display font-light text-cream">6</p>
                </div>
                <div className="border-l border-mocha/30 pl-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cream/40 mb-1">Email TLC Sequence</p>
                  <p className="text-3xl font-display font-light text-cream">14</p>
                </div>
                <div className="border-l border-mocha/30 pl-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cream/40 mb-1">Event Revenue</p>
                  <p className="text-3xl font-display font-light text-cream">₦2.8M</p>
                </div>
                <div className="border-l border-mocha/30 pl-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cream/40 mb-1">Donor Reach Target</p>
                  <p className="text-3xl font-display font-light text-cream">1,000+</p>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating Glassmorphic Tab Bar Capsule */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 max-w-[95vw] sm:max-w-max">
        <div className="glass rounded-full p-1.5 flex items-center gap-1 shadow-2xl border border-cream/60 overflow-x-auto no-scrollbar">
          {TABS.map((tab) => {
            const count = tab.key === 'All' ? PROJECTS.length : PROJECTS.filter((project) => project.tab === tab.key).length;
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-4 py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 whitespace-nowrap ${
                  isActive ? 'text-cream' : 'text-stone hover:text-espresso'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabMarker"
                    className="absolute inset-0 bg-espresso rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {tab.label}
                  <span className={`text-[9px] rounded-full px-1.5 py-0.5 font-mono ${isActive ? 'bg-cream/20 text-cream' : 'bg-espresso/5 text-gray-400'}`}>
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Rebuilt Work Gallery Section */}
      <section id="work-gallery" className="bg-cream px-6 py-24 md:py-32 relative">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-linen pb-10">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-mocha">SELECT WORKS</span>
              <h2 className="mt-4 text-4xl font-semibold tracking-tighter text-espresso md:text-5xl">Featured Email Architectures</h2>
            </div>
            <p className="max-w-md text-sm text-stone leading-relaxed">
              Every system is designed to build trust first, drive immediate revenue second, and create long-term enterprise value.
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {visibleProjects.map((project) => (
              <WorkHighlightCard key={project.id} project={project} onOpen={() => setActiveProject(project)} />
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="relative overflow-hidden bg-espresso px-6 py-32 text-cream md:py-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.14)_0%,transparent_68%)]" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <h2 className="text-[clamp(2.8rem,6vw,6.6rem)] font-semibold leading-[0.92] tracking-tighter text-cream">
            Need templates that sell the work as hard as the work sells?
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-cream/65 md:text-2xl font-light">
            My best campaigns are already here. The next step is packaging them into your own brand presentation that feels premium, credible, and impossible to scroll past.
          </p>
          <a
            href="https://calendar.app.google/fe1MA1wgPoBre1SYA"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-14 inline-flex items-center gap-3 rounded-full bg-mocha px-10 py-5 text-lg font-bold text-cream shadow-2xl shadow-mocha/30 transition-all hover:bg-mocha-dark"
          >
            Book a Strategy Call
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      <AnimatePresence>
        {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
      </AnimatePresence>
    </div>
  );
}

// Retained for backward-compatibility re-exports, but not used in the core layout loop
export function WorkSection({
  kicker,
  title,
  description,
  children,
  reverse = false,
}: {
  kicker: string;
  title: string;
  description: string;
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <section className={`grid items-start gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12 ${reverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>
      <div className="max-w-xl">
        <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.34em] text-mocha">{kicker}</span>
        <h2 className="text-3xl font-semibold tracking-tighter text-espresso md:text-5xl md:leading-[0.95]">{title}</h2>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-stone md:text-base">{description}</p>
        <div className="mt-8 flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-gray-400">
          <span className="rounded-full border border-linen bg-cream px-4 py-2">Editorial</span>
          <span className="rounded-full border border-linen bg-cream px-4 py-2">Premium mockup</span>
          <span className="rounded-full border border-linen bg-cream px-4 py-2">Full copy inside</span>
        </div>
      </div>
      <div>{children}</div>
    </section>
  );
}

type WorkHighlightCardProps = {
  project?: WorkProject;
  onOpen?: () => void;
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  fallback?: string;
  tags?: string[];
  content?: string;
  navigateId?: string;
  imageFit?: 'cover' | 'contain';
};

// Rebuilt visual 3D Card Mockup Stack sub-component
function Mockup3DStack({ project, isParentHovered, imageFit = 'cover' }: { project: any; isParentHovered: boolean; imageFit?: 'cover' | 'contain' }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative w-full h-[320px] md:h-[400px] perspective-1000 preserve-3d flex items-center justify-center p-4">
      {/* Bottom Sheet - Analytics preview */}
      <motion.div
        animate={{
          rotateX: isMobile ? 0 : (isParentHovered ? 8 : 4),
          rotateY: isMobile ? 0 : (isParentHovered ? -12 : -6),
          rotateZ: isMobile ? 0 : (isParentHovered ? -8 : -4),
          x: isMobile ? 0 : (isParentHovered ? 30 : 10),
          y: isMobile ? 0 : (isParentHovered ? 20 : 10),
          z: isMobile ? 0 : (isParentHovered ? -40 : -20),
          scale: isMobile ? 0 : 0.95,
          opacity: isMobile ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className="absolute w-[80%] h-[90%] bg-espresso border border-cream/10 rounded-[1.5rem] shadow-xl p-5 text-cream/40 flex flex-col justify-between preserve-3d backface-hidden"
      >
        <div className="flex items-center justify-between border-b border-cream/10 pb-3">
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cream/20" />
            <span className="w-1.5 h-1.5 rounded-full bg-cream/20" />
            <span className="w-1.5 h-1.5 rounded-full bg-cream/20" />
          </div>
          <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-cream/50">Campaign Stats</span>
        </div>
        <div className="flex-1 flex flex-col justify-end gap-3 py-4">
          <div className="space-y-2">
            <div className="h-1 bg-cream/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: isParentHovered ? '88%' : '60%' }}
                className="h-full bg-mocha"
              />
            </div>
            <div className="h-1 bg-cream/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: isParentHovered ? '95%' : '75%' }}
                className="h-full bg-mocha-dark"
              />
            </div>
            <div className="h-1 bg-cream/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: isParentHovered ? '65%' : '40%' }}
                className="h-full bg-cream/20"
              />
            </div>
          </div>
          <div className="flex justify-between items-end border-t border-cream/5 pt-3">
            <div>
              <p className="text-[8px] font-mono uppercase text-cream/30">Conversion</p>
              <p className="text-xs font-bold text-cream mt-0.5">+48.2%</p>
            </div>
            <div className="text-right">
              <p className="text-[8px] font-mono uppercase text-cream/30">Peak Open</p>
              <p className="text-xs font-bold text-mocha mt-0.5">68%</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Middle Sheet - Simulated Email Inbox List */}
      <motion.div
        animate={{
          rotateX: isMobile ? 0 : (isParentHovered ? 6 : 3),
          rotateY: isMobile ? 0 : (isParentHovered ? -8 : -4),
          rotateZ: isMobile ? 0 : (isParentHovered ? 4 : 2),
          x: isMobile ? 0 : (isParentHovered ? -25 : -8),
          y: isMobile ? 0 : (isParentHovered ? -15 : -5),
          z: isMobile ? 0 : (isParentHovered ? -20 : -10),
          scale: isMobile ? 0 : 0.98,
          opacity: isMobile ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className="absolute w-[85%] h-[90%] bg-cream border border-linen/80 rounded-[1.5rem] shadow-lg p-5 text-espresso/80 flex flex-col justify-between preserve-3d backface-hidden"
      >
        <div className="flex items-center justify-between border-b border-linen pb-2.5">
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-400">Sequence Map</span>
          <span className="text-[8px] font-mono text-mocha font-bold">100% SENT</span>
        </div>
        <div className="flex-1 space-y-2 py-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-2 border border-linen rounded-xl bg-cream space-y-1 shadow-sm">
              <div className="flex justify-between text-[7px] font-mono text-gray-400">
                <span>Email #{i}</span>
                <span>Active</span>
              </div>
              <div className="w-[85%] h-1 bg-gray-200 rounded" />
              <div className="w-[50%] h-0.5 bg-gray-100 rounded" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Top Sheet - Screenshot frame */}
      <motion.div
        animate={{
          rotateX: isMobile ? 0 : (isParentHovered ? 10 : 5),
          rotateY: isMobile ? 0 : (isParentHovered ? -10 : -5),
          rotateZ: isMobile ? 0 : 0,
          x: 0,
          y: 0,
          z: isMobile ? 0 : (isParentHovered ? 20 : 0),
          scale: isMobile ? 1.05 : 1,
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className="absolute w-[90%] h-[95%] bg-cream border border-linen rounded-[1.5rem] shadow-[0_30px_90px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col preserve-3d backface-hidden"
      >
        {/* Mac Window chrome */}
        <div className="h-7 border-b border-linen bg-cream flex items-center px-3 justify-between">
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-[8px] font-mono text-gray-400 lowercase truncate max-w-[120px]">
          </span>
          <div className="w-6" />
        </div>
        <div className={`flex-1 overflow-hidden relative flex rounded-b-[1.2rem] ${imageFit === 'contain' ? 'bg-cream items-start justify-center p-2' : 'bg-cream items-center justify-center'}`}>
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
              imageFit === 'contain'
                ? 'object-contain object-top'
                : 'object-cover object-top'
            }`}
            onError={(e) => {
              (e.target as HTMLImageElement).src = project.fallback;
            }}
          />
          <div className={`absolute inset-0 bg-gradient-to-t pointer-events-none ${imageFit === 'contain' ? 'from-black/5' : 'from-black/10'} to-transparent`} />
        </div>
      </motion.div>
    </div>
  );
}

export function WorkHighlightCard({
  project,
  onOpen,
  title,
  subtitle,
  description,
  image,
  fallback,
  tags,
  content,
  navigateId,
  imageFit,
}: WorkHighlightCardProps) {
  const legacyMode = !project;
  const resolvedProject = project ?? {
    id: title ?? subtitle ?? 'legacy-work',
    tab: 'Promo' as Exclude<TabKey, 'All'>,
    kicker: subtitle ?? 'FEATURED WORK',
    title: title ?? 'Work Highlight',
    subtitle: subtitle ?? title ?? 'Portfolio Piece',
    summary: description ?? content?.slice(0, 180) ?? 'Featured portfolio work.',
    excerpt: description ?? content?.slice(0, 320) ?? 'Featured portfolio work.',
    image: image ?? '/Work_Highlight_files/WorkTemplate.jpg',
    fallback: fallback ?? 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=1200',
    tags: tags ?? ['Portfolio'],
    highlights: tags?.slice(0, 3) ?? ['Portfolio'],
    metrics: [],
    contentBlocks: content ? [{ type: 'intro', paragraphs: content.split('\n\n').filter(Boolean) }] : [],
  };

  const handleOpen = () => {
    if (onOpen) {
      onOpen();
      return;
    }

    if (navigateId) {
      window.location.hash = navigateId;
    }
  };

  // Cursor Spotlight coordinates state
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const metrics = resolvedProject.metrics.length > 0
    ? resolvedProject.metrics
    : [{ label: 'Status', value: legacyMode ? 'Legacy card' : 'Live project' }];

  const heroMetric = metrics[0];
  const otherMetrics = metrics.slice(1);

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="premium-panel overflow-hidden group relative transition-all duration-500 border border-linen/80 bg-cream"
    >
      {/* Spotlight gradient layer */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition duration-300 opacity-100 z-0"
          style={{
            background: `radial-gradient(550px circle at ${coords.x}px ${coords.y}px, rgba(158, 132, 114, 0.08), transparent 80%)`,
          }}
        />
      )}

      <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 p-8 md:p-12 items-center">
        {/* Left pane: editorial text hierarchy */}
        <div className="space-y-6">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-mocha uppercase block">
            {resolvedProject.kicker}
          </span>

          <h3 className="font-display font-light text-3xl md:text-4xl text-espresso leading-[1.08] tracking-tight group-hover:text-mocha transition-colors duration-300">
            {resolvedProject.title}
          </h3>

          {/* Editorial strategy insight snippet */}
          <div className="border-l border-mocha pl-5 py-1 my-6 relative">
            <Sparkles className="absolute -left-[9px] -top-3 h-4 w-4 text-mocha bg-cream" />
            <p className="font-display italic text-[1.35rem] leading-snug text-espresso/80 tracking-tight">
              "{resolvedProject.summary}"
            </p>
          </div>

          <p className="text-stone text-base md:text-lg leading-relaxed font-light">
            {resolvedProject.excerpt}
          </p>

          {/* Navigation action block */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            {!onOpen && navigateId ? (
              <Link
                to={`/case-studies#${navigateId}`}
                className="inline-flex items-center gap-3 rounded-full bg-espresso px-7 py-4 text-sm font-bold text-cream transition-all hover:bg-mocha duration-300 shadow-xl shadow-espresso/10"
              >
                View Case Study
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <button
                type="button"
                onClick={handleOpen}
                className="inline-flex items-center gap-3 rounded-full bg-espresso px-7 py-4 text-sm font-bold text-cream transition-all hover:bg-mocha duration-300 shadow-xl shadow-espresso/10"
              >
                View Case Study
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
            <div className="flex flex-wrap gap-1.5">
              {resolvedProject.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-linen bg-linen px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-stone"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right pane: Interactive 3D layered stacks */}
        <div className="relative h-[320px] md:h-[380px] lg:h-[400px] w-full flex items-center justify-center overflow-visible select-none">
          <Mockup3DStack project={resolvedProject} isParentHovered={isHovered} imageFit={imageFit ?? resolvedProject.imageFit ?? 'cover'} />
        </div>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }: { project: WorkProject; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-espresso/60 px-4 py-6 backdrop-blur-md md:px-6 md:py-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 32, scale: 0.985 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[90vh] max-w-7xl overflow-hidden rounded-[2rem] bg-cream shadow-[0_40px_120px_rgba(0,0,0,0.4)] flex flex-col border border-cream/10"
      >
        {/* Modal Toolbar Chrome */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-linen/80 bg-cream px-6 py-4 md:px-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-mocha">{project.kicker}</p>
            <h3 className="mt-1 text-xl font-semibold text-espresso md:text-2xl">{project.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-linen bg-cream text-espresso transition-all hover:bg-espresso hover:text-cream"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Core Layout */}
        <div className="flex-1 overflow-hidden grid lg:grid-cols-[0.8fr_1.2fr] min-h-0">
          
          {/* Left panel: metrics & specs */}
          <aside className="hidden lg:flex flex-col border-r border-linen bg-cream p-8 overflow-y-auto h-full space-y-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-linen bg-cream">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover object-top" 
                onError={(e) => { (e.target as HTMLImageElement).src = project.fallback; }} 
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-3xl border border-linen bg-cream p-4 shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
                  <p className="text-[9px] font-bold uppercase tracking-[0.34em] text-gray-400 leading-none mb-1.5">{metric.label}</p>
                  <p className="text-lg font-semibold text-espresso">{metric.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[1.75rem] bg-espresso p-6 text-cream shadow-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-cream/45">Briefing Overview</p>
              <p className="mt-3 text-base leading-relaxed text-cream/90 font-light">{project.summary}</p>
            </div>
          </aside>

          {/* Right panel: Pure Editorial Case Study View */}
          <div className="flex-1 bg-cream overflow-y-auto overflow-x-hidden p-6 md:p-12 lg:p-16 scroll-smooth">
            <div className="max-w-3xl mx-auto">
              
              {/* Editorial Header */}
              <div className="mb-12 border-b border-linen pb-10">
                <span className="inline-block rounded-full bg-mocha/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-mocha mb-4">
                  {project.tags[0]} Showcase
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-medium text-espresso leading-tight tracking-tight mb-6">
                  {project.subtitle}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-sm font-sans">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-espresso text-cream flex items-center justify-center font-bold text-xs">
                      HO
                    </div>
                    <div>
                      <p className="font-semibold text-espresso">Henry Okeke</p>
                      <p className="text-gray-400 text-xs">Email Architect</p>
                    </div>
                  </div>
                  <div className="h-4 w-px bg-gray-200 hidden sm:block"></div>
                  <div className="text-stone font-medium">
                    Strategy & Copywriting
                  </div>
                </div>
              </div>

              {/* The Craft - Main Body */}
              <div className="space-y-12">
                
                {/* Introduction Paragraph */}
                <p className="text-xl md:text-2xl font-display font-light text-espresso/80 leading-relaxed italic border-l-2 border-mocha pl-6">
                  {project.excerpt}
                </p>

                {/* Content Blocks mapping */}
                <div className="space-y-10 prose prose-lg prose-headings:font-display prose-headings:font-medium max-w-none prose-p:font-serif prose-p:leading-relaxed prose-p:text-[1.1rem] prose-p:text-gray-800">
                  {project.contentBlocks.map((block, index) => (
                    <ContentBlockView key={`${project.id}-${index}`} block={block} />
                  ))}
                </div>
                
                {/* Conclusion Callout */}
                <div className="rounded-2xl bg-beige-light p-8 md:p-10 border border-linen mt-16">
                  <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.34em] text-mocha mb-4">
                    <Sparkles className="h-4 w-4" />
                    The Takeaway
                  </div>
                  <p className="text-lg md:text-xl font-display font-light text-espresso leading-relaxed">
                    Every piece in this portfolio demonstrates strategy, layout composition, and persuasive copywriting working in harmony to drive the primary goal—trust first, immediate revenue second.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}

// Rebuilt visual timelines and step sequences that light up on viewport entry
function ContentBlockView({ block }: { block: ContentBlock }) {
  if (block.type === 'intro') {
    return (
      <section className="font-serif">
        {block.title && <p className="text-[10px] font-sans font-bold uppercase tracking-[0.34em] text-mocha mb-5">{block.title}</p>}
        <div className="space-y-5 text-[1.15rem] leading-[1.8] text-gray-800 font-normal">
          {block.paragraphs.map((paragraph) => (
            <p key={paragraph} className="whitespace-pre-wrap">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === 'bullets') {
    return (
      <section className="font-serif">
        {block.title && <p className="text-[10px] font-sans font-bold uppercase tracking-[0.34em] text-mocha mb-5">{block.title}</p>}
        <ul className="space-y-4">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-4 text-[1.15rem] leading-[1.7] text-gray-800">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mocha" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (block.type === 'steps') {
    return (
      <section className="font-serif">
        {block.title && <p className="text-[10px] font-sans font-bold uppercase tracking-[0.34em] text-mocha mb-6 ml-1">{block.title}</p>}
        <div className="space-y-8 pl-4 border-l-2 border-mocha/20">
          {block.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative"
            >
              <div className="absolute -left-[23px] top-2 h-2.5 w-2.5 rounded-full border border-mocha bg-cream z-10"></div>
              <div>
                <p className="text-xl font-display font-medium text-espresso">{item.title}</p>
                <p className="mt-3 text-[1.15rem] leading-[1.7] text-gray-800 font-normal">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === 'timeline') {
    return (
      <section className="font-serif">
        {block.title && <p className="text-[10px] font-sans font-bold uppercase tracking-[0.34em] text-mocha mb-6 ml-1">{block.title}</p>}
        <div className="space-y-12 pl-4 border-l-2 border-mocha/20">
          {block.items.map((item, index) => (
            <motion.div
              key={`${item.label}-${item.title}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative"
            >
              <div className="absolute -left-[23px] top-2 h-2.5 w-2.5 rounded-full border border-mocha bg-cream z-10"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                <div className="inline-flex shrink-0 px-2.5 py-1 rounded bg-espresso text-[9px] font-sans font-bold uppercase tracking-wider text-cream w-max h-min mt-1">
                  {item.label}
                </div>
                <div className="space-y-3">
                  <h4 className="text-[1.3rem] font-display font-medium text-espresso leading-tight">{item.title}</h4>
                  <p className="text-[1.15rem] leading-[1.7] text-gray-800 font-normal">{item.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="my-8">
      <p className="text-[10px] font-sans font-bold uppercase tracking-[0.34em] text-mocha mb-3">Highlight</p>
      <blockquote className="border-l-2 border-mocha pl-6 text-[1.4rem] md:text-[1.6rem] leading-[1.6] italic text-espresso font-display font-light">
        "{block.text}"
      </blockquote>
    </section>
  );
}

function MockupFrame({
  image,
  fallback,
  label,
  title,
  className = '',
}: {
  image: string;
  fallback: string;
  label: string;
  title: string;
  className?: string;
}) {
  return (
    <figure className={`relative overflow-hidden rounded-[2rem] border border-cream/10 bg-[#111] shadow-[0_30px_90px_rgba(0,0,0,0.26)] ${className}`}>
      <div className="aspect-[4/5] md:aspect-[5/6]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-top"
          onError={(event) => {
            (event.target as HTMLImageElement).src = fallback;
          }}
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.08)_40%,rgba(0,0,0,0.68)_100%)]" />
      <div className="absolute left-5 top-5 rounded-full border border-cream/18 bg-black/30 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.32em] text-cream/90 backdrop-blur-md">
        {label}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5 text-cream">
        <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-cream/45">Premium preview</p>
        <p className="mt-2 max-w-[18rem] text-xl font-semibold leading-tight tracking-tighter md:text-2xl">{title}</p>
      </div>
    </figure>
  );
}

function HeroMetric({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="rounded-[1.6rem] border border-cream/10 bg-cream/6 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur">
      <div className="flex items-center gap-3 text-cream/80">
        <span className="rounded-full bg-cream/10 p-2 text-mocha">{icon}</span>
        <div>
          <p className="text-2xl font-semibold tracking-tighter text-cream">{value}</p>
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-cream/45">{label}</p>
        </div>
      </div>
    </div>
  );
}