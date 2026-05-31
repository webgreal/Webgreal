'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  ChevronDown, 
  CheckCircle2, 
  Mail, 
  Phone, 
  Star, 
  MessageSquare, 
  Globe, 
  Code, 
  TrendingUp, 
  Zap, 
  Target, 
  Laptop, 
  Menu, 
  X, 
  ArrowLeft, 
  Award, 
  Clock, 
  Shield, 
  Sparkles, 
  Building, 
  ShoppingBag, 
  Briefcase, 
  Users,
  Search,
  BookOpen,
  MapPin,
  Instagram
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

// Inline vector-precision Webgreal Logo Component
function WebgrealLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 512 512" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle to deliver exact logo design */}
      <circle cx="256" cy="256" r="256" fill="#1A7CFF" />
      {/* Top Dome Arc with rounded ends & triangular V cut out in white */}
      <path 
        d="M 60,250 C 60,140 148,50 256,50 C 364,50 452,140 452,250 C 452,284 440,312 420,328 C 400,344 374,342 358,324 L 274,232 C 264,220 248,220 238,232 L 154,324 C 138,342 112,344 92,328 C 72,312 60,284 60,250 Z" 
        fill="#FFFFFF" 
      />
      {/* Bottom Chevron Hook with folded rounded ends in white */}
      <path 
        d="M 256,268 L 372,396 C 388,414 384,440 364,454 C 344,468 318,460 304,440 L 256,388 L 208,440 C 194,460 168,468 148,454 C 128,440 124,414 140,396 Z" 
        fill="#FFFFFF" 
      />
    </svg>
  );
}

// Define layout & sections
export default function WebgrealLandingPage() {
  // Mobile navigation drawer state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Header scroll detection for active layout
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Industries Section - Tabs State
  const [activeTab, setActiveTab] = useState<'carRental' | 'hotels' | 'realestate' | 'services' | 'ecommerce'>('carRental');

  // Testimonials - Premium Carousel Settings
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Process Interactive Step State
  const [activeStep, setActiveStep] = useState(0);
  const [checkedStepItems, setCheckedStepItems] = useState<Record<string, boolean>>({});

  // Interactive ROI Strategy Calculator State
  const [monthlySpend, setMonthlySpend] = useState(2500);
  const [conversionRate, setConversionRate] = useState(1.8);
  const [avgDealValue, setAvgDealValue] = useState(150);

  // Calculate simulated projections
  const simulatedVisitors = Math.round(monthlySpend * 0.85); // average $0.85 per search/social click
  const estimatedLeads = Math.round(simulatedVisitors * (conversionRate / 100));
  const expectedCPA = estimatedLeads > 0 ? Math.round(monthlySpend / estimatedLeads) : 0;
  const projectedRevenue = Math.round(estimatedLeads * avgDealValue * 1.6); // Webgreal optimization factor
  const estimatedROAS = Math.round((projectedRevenue / (monthlySpend || 1)) * 10) / 10;

  // Contact form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Web Design & Development',
    budget: '$5,000 - $10,000',
    message: '',
  });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactData.name || !contactData.email || !contactData.message) {
      setFormError('Please fill in all required fields (Name, Email, Message)');
      return;
    }
    setFormLoading(true);
    setFormError('');
    
    try {
      const subject = encodeURIComponent(`Project Scale Discussion - ${contactData.company || contactData.name}`);
      const body = encodeURIComponent(
        `Hello Webgreal Team,\n\n` +
        `I would like to discuss a digital project with you. Here are my submission details:\n\n` +
        `• Full Name: ${contactData.name}\n` +
        `• Email Address: ${contactData.email}\n` +
        `• Phone Number: ${contactData.phone || 'N/A'}\n` +
        `• Company: ${contactData.company || 'N/A'}\n` +
        `• Required Service: ${contactData.service}\n` +
        `• Project Target Ad Budget: ${contactData.budget}\n\n` +
        `Project Overview:\n` +
        `${contactData.message}\n\n` +
        `Best regards,\n` +
        `${contactData.name}`
      );
      
      const mailtoUrl = `mailto:webgreal@gmail.com?subject=${subject}&body=${body}`;
      
      // Automatically prompt default email systems
      if (typeof window !== 'undefined') {
        window.location.href = mailtoUrl;
      }
      
      setFormSubmitted(true);
    } catch (err: any) {
      setFormSubmitted(true);
    } finally {
      setFormLoading(false);
    }
  };

  // FAQ Expanded index state
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Trust Logo Array
  const clientLogos = [
    { 
      name: 'Hani i Pazarit', 
      industry: 'Boutique Hotel',
      logo: (
        <svg className="w-5 h-5 text-slate-400 group-hover:text-amber-600 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          <circle cx="12" cy="12" r="5" strokeDasharray="1.5,1.5" />
        </svg>
      )
    },
    { 
      name: 'Lost Seaside', 
      industry: 'Beach Resort',
      logo: (
        <svg className="w-5 h-5 text-slate-400 group-hover:text-sky-500 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" strokeDasharray="2,2" />
          <path d="M2 18c4-1.5 6 1.5 10 0s6-1.5 10 0" strokeWidth="2" />
        </svg>
      )
    },
    { 
      name: 'MeiaRENT', 
      industry: 'Car Rental',
      logo: (
        <svg className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.8C2.1 10.9 2 11.1 2 11.3V16c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="1.5" />
          <circle cx="17" cy="17" r="1.5" />
        </svg>
      )
    },
    { 
      name: 'Urban Auto Labs', 
      industry: 'Automotive Innovation',
      logo: (
        <svg className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      )
    },
    { 
      name: 'TOVOPRO', 
      industry: 'Digital Production',
      logo: (
        <svg className="w-5 h-5 text-slate-400 group-hover:text-indigo-500 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="23 7 16 12 23 17 23 7" />
          <polygon points="13 7 6 12 13 17 13 7" />
          <line x1="2" y1="5" x2="2" y2="19" />
        </svg>
      )
    },
    { 
      name: 'Bruno Coffee', 
      industry: 'Coffee Stores',
      logo: (
        <svg className="w-5 h-5 text-slate-400 group-hover:text-amber-800 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="7" strokeDasharray="2,2" />
          <path d="M12 8c-1 1-1.5 2-1 3.5s2 1.5 2 3-1 2-2 2.5" />
        </svg>
      )
    },
    { 
      name: 'LifeGate Edu', 
      industry: 'E-Learning',
      logo: (
        <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 10v6M2 10l10-5 10 5-10 5L2 10z" />
          <path d="M6 12v5c0 2 2.5 3 6 3s6-1 6-3v-5" />
        </svg>
      )
    },
    { 
      name: 'Gmotion', 
      industry: 'Mobility & Tech',
      logo: (
        <svg className="w-5 h-5 text-slate-400 group-hover:text-cyan-500 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8" />
          <path d="M12 8l4 4-4 4" />
        </svg>
      )
    },
    { 
      name: 'La Casa In Ordine', 
      industry: 'Interior & Living',
      logo: (
        <svg className="w-5 h-5 text-slate-400 group-hover:text-rose-500 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 12h18M3 6h18M3 18h18" />
          <path d="M8 6h8M8 18h8" />
        </svg>
      )
    }
  ];

  // Industry Tab Metadata
  const industriesInfo = {
    carRental: {
      title: 'Car Rental & Automotive',
      tagline: 'Get more direct bookings and vehicle reservations',
      description: 'We construct fast, modern websites for car rental companies, local agencies, and dealerships. Our systems integrate with booking calendars and map APIs to capture customers directly without platform fees.',
      metrics: [
        { label: 'Booking Increase', val: '+140%' },
        { label: 'Cost-Per-Lead Drop', val: '38%' },
        { label: 'Direct Traffic rise', val: '3.2x' }
      ],
      checklist: [
        'Interactive vehicle booking calendars',
        'Google Maps and local pin optimization',
        'Mobile-friendly speedy reservation flow',
        'Automated review requests on WhatsApp/Email'
      ]
    },
    hotels: {
      title: 'Hotels & Hospitality',
      tagline: 'Fill your rooms and tables directly on your terms',
      description: 'For boutique hotels, guesthouses, restaurants, cafés, and local venues. We design stunning visual websites that display your rooms, experiences, and menus, built to convert visitors into direct guests.',
      metrics: [
        { label: 'Direct Boarding Rate', val: '+85%' },
        { label: 'OTA Commission Saved', val: '24%' },
        { label: 'Mobile Booking Speed', val: '1.2s' }
      ],
      checklist: [
        'Zero-commission direct booking widgets',
        'High-resolution optimized room galleries',
        'Local SEO rankings for tourists and travellers',
        'Digital menu integrations and reservation forms'
      ]
    },
    realestate: {
      title: 'Real Estate & Roofing',
      tagline: 'Capture buyer leads and commercial project inquiries',
      description: 'For agencies, developers, brokers, roofers, and contractors. We design elegant, reliable website layouts that showcase active properties or contracting services, tailored to generate high-intent inquiries.',
      metrics: [
        { label: 'Valued Lead Growth', val: '+115%' },
        { label: 'Average Trust Score', val: '4.9/5' },
        { label: 'Cost per Inquiry', val: '-45%' }
      ],
      checklist: [
        'Elegant visual property listings search',
        'Lead estimate forms for contractors',
        'Local trust reviews and portfolio galleries',
        'Direct CRM syncing for instant call-backs'
      ]
    },
    services: {
      title: 'Dental, Medical & Professional',
      tagline: 'The default premium choice for patients and clients',
      description: 'For dentists, private clinics, law firms, gyms, and professional practitioners. We establish absolute authority using clean layouts paired with high-performance local Google Search ads and easy booking setups.',
      metrics: [
        { label: 'Monthly Patient/Client Intake', val: '+65%' },
        { label: 'Appointment No-shows', val: '-40%' },
        { label: 'Search Ad Conversion', val: '12.4%' }
      ],
      checklist: [
        'Clean booking schedule appointment integration',
        'Trustworthy doctor/lawyer team profile layouts',
        'Frequently asked patient/client questions blocks',
        'HIPAA/GDPR secure contact message collection'
      ]
    },
    ecommerce: {
      title: 'E-commerce & Retail',
      tagline: 'Turn visitors into physical and digital buyers',
      description: 'For local retail stores, DTC brands, and regional merchants. We construct high-impact online stores that load instantly, coupled with retargeting ads that follow up with cart abandoners beautifully.',
      metrics: [
        { label: 'Checkout Success Lift', val: '+42%' },
        { label: 'Average ROAS Boost', val: '4.5x' },
        { label: 'Cart Abandon Drop', val: '-30%' }
      ],
      checklist: [
        'Fast one-page checkout experiences',
        'Google Merchant Center automated integration',
        'Dynamic Facebook/Instagram catalog retargeting',
        'Simplified order processing notifications'
      ]
    }
  };

  // Testimonial Data
  const testimonials = [
    {
      text: "Great experience so far. We have a complex setup and they have way outperformed the previous two solutions we had tried out. Strongly recommend.",
      name: "Stephen G.",
      role: "CEO & Founder, Obsidian Software",
      image: "https://picsum.photos/seed/stephen/150/150"
    },
    {
      text: "Webgreal is extremely fluent in design and working with their development team is an absolute breeze. Our new platform handles thousands of direct bookings effortlessly.",
      name: "Arjun Tanthi",
      role: "Co-Founder, Teradox",
      image: "https://picsum.photos/seed/arjun/150/150"
    },
    {
      text: "Webgreal didn't just design a website; they restructured our online retail approach. Our Meta Ads return on ad spend jumped from 2.1x to 5.4x in under 90 days. Their communication is lightning fast.",
      name: "Elena Petrova",
      role: "E-Commerce VP, Luxe Couture",
      image: "https://picsum.photos/seed/elena/150/150"
    },
    {
      text: "I was skeptical about finding an agency that could handle both world-class development and clear ad execution. Webgreal proved us wrong. Our client intake increased by 65%.",
      name: "Marcus Thorne",
      role: "Managing Director, Apex Legal Partners",
      image: "https://picsum.photos/seed/marcus/150/150"
    }
  ];

  // Process Milestones (Simple Workflow Till Project Delivery)
  const processSteps = [
    {
      title: "Concept",
      fullName: "Research & Goal Planning",
      description: "We discuss your exact business needs, study your competitors, and outline a simple conversion blueprint.",
      deliverables: ["Define target goals", "Outline layout blueprints", "Analyze competitor websites"],
      icon: <Search className="w-5 h-5 text-brand" />
    },
    {
      title: "Design",
      fullName: "Bespoke Visual Layouts",
      description: "We craft custom layout designs specifically matching your brand style. No generic templates allowed.",
      deliverables: ["Draw custom mockups", "Style elegant color schemes", "Select clean typography"],
      icon: <Sparkles className="w-5 h-5 text-brand" />
    },
    {
      title: "Code",
      fullName: "High-Performance Building",
      description: "We turn the approved designs into extremely fast, lightweight Next.js code optimized for mobile screens.",
      deliverables: ["Write clean Next.js code", "Build interactive widgets", "Optimize Google speed scores"],
      icon: <Code className="w-5 h-5 text-brand" />
    },
    {
      title: "Delivery",
      fullName: "Flawless Project Launch",
      description: "We deploy your new website to high-speed cloud networks, connect tracking, and completely hand over the project.",
      deliverables: ["Publish files to servers", "Link custom domain networks", "Perform quality-test checks"],
      icon: <CheckCircle2 className="w-5 h-5 text-brand" />
    }
  ];

  // Services Data
  const servicesData = [
    {
      title: "Web Design",
      description: "Aesthetic mastery geared strictly for conversion. We pair elite editorial typography and immersive layouts to command trust and drive users to your primary call-to-action.",
      icon: <Laptop className="w-6 h-6 text-brand" />,
      features: ["Custom conversion UX layouts", "Intuitive interactive flows", "Branded visual identities"]
    },
    {
      title: "Website Development",
      description: "Blazing fast production-grade engineering using Next.js and Tailwind. Clean structural code resulting in flawless mobile styling, outstanding load times, and superior organic search positioning.",
      icon: <Code className="w-6 h-6 text-brand" />,
      features: ["Flawless Next.js App Router", "95+ Lighthouse speed metrics", "Flexible content management"]
    },
    {
      title: "Google Ads Management",
      description: "Stop wasting budgets on unqualified, generic search phrases. We architect highly commercial search campaign structures designed to intercept prospects at peak buying intent.",
      icon: <TrendingUp className="w-6 h-6 text-brand" />,
      features: ["Precision intent matching", "Continuous quality-score scaling", "Hyper-accurate offline tracking"]
    },
    {
      title: "Meta Ads Management",
      description: "Captivate prospects on Instagram & Facebook. We outline creative strategies and execute direct-response copy that targets your exact demographics and drives predictable customer generation.",
      icon: <Users className="w-6 h-6 text-brand" />,
      features: ["High-impact visual strategy", "Lookalike audience tuning", "Performance dynamic retargeting"]
    },
    {
      title: "Content Creation",
      description: "High-conformance copy, static banners, and visual assets built to scale your messaging. We create materials that engage prospects and establish clear, valuable positioning.",
      icon: <Sparkles className="w-6 h-6 text-brand" />,
      features: ["High-converting landing page copy", "Premium visual styling assets", "SEO resource materials"]
    },
    {
      title: "Conversion Optimization",
      description: "Convert existing web visitors into high-paying invoices. We execute qualitative heatmaps auditing, user-session replays analysis, and continuous A/B testing variations.",
      icon: <Zap className="w-6 h-6 text-brand" />,
      features: ["Comprehensive friction analysis", "Headline & form split-testing", "Immediate bounce-rate reduction"]
    }
  ];

  // Projects Showcases (Portfolio)
  const portfolioProjects = [
    {
      title: "ALB Rentacar Acquisition System",
      client: "albrentacar.com",
      industry: "Car Rental Web & SEO",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop",
      services: ["UX/UI Design", "High-Speed Next.JS Boilerplate", "Direct Reservation API", "Local SEO Optimization"],
      metrics: { primary: "+14,500+ Direct Bookings", secondary: "Direct reservation growth of 140% bypassing third-party fees" },
      accent: "from-red-600 to-slate-900",
      mockupType: "carRental"
    },
    {
      title: "Auden Boutique Villa & Suites",
      client: "audenhotel.com",
      industry: "Hotel & Luxury Lodging",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
      services: ["Zero-Commission Direct Booking", "High-Def Editorial Galleries", "Bespoke Multi-Language UX", "Local Tourism SEO"],
      metrics: { primary: "+82% Direct Bookings", secondary: "Saved over €25,000 in third-party OTA commissions within 90 days of launch" },
      accent: "from-amber-800 to-stone-900",
      mockupType: "hotel"
    },
    {
      title: "Sora Fine Dining & Omakase",
      client: "soradining.com",
      industry: "Restaurant & Gastronomy",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
      services: ["Direct Reservation Engine", "Interactive Live Digital Menu", "Local Pin Visibility", "High-Intent Retargeting"],
      metrics: { primary: "+125% Weekend Table Bookings", secondary: "Cover bookings converted digitally grew over 85%, reducing dry phone times" },
      accent: "from-stone-800 to-rose-950",
      mockupType: "restaurant"
    },
    {
      title: "Google Ads Growth Strategy",
      client: "Teresa & Select Rental Cars",
      industry: "High-Performance Paid Search",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
      services: ["Ad Copy Testing", "Local Google Pin Optimization", "Dynamic Keyword Bidding", "Retargeting Setup"],
      metrics: { primary: "4.8x Measured ROAS", secondary: "Cost per booking acquisition reduced by 42% on target keywords" },
      accent: "from-amber-600 to-slate-800",
      mockupType: "googleAds"
    },
    {
      title: "WhiteSmile Dental Care Facility",
      client: "DentaCare Clinic Group",
      industry: "Dental & Healthcare Web",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
      services: ["Modern Patient Portal", "Appointment Reminder Engine", "Local Search Authority", "HIPAA Policy Compliance"],
      metrics: { primary: "+65% New Patient Intake", secondary: "Appointment auto-scheduling workflow trimmed patient no-shows by 40%" },
      accent: "from-teal-500 to-cyan-700",
      mockupType: "dental"
    }
  ];

  // FAQ List
  const faqs = [
    {
      q: "How much does a website cost?",
      a: "Every project is different. Pricing depends on the number of pages, features, integrations, and overall complexity. We provide a custom quote tailored to your business goals and requirements."
    },
    {
      q: "How long will it take to complete my website?",
      a: "Most websites are completed within 2–6 weeks, depending on the scope of the project, content availability, and revision rounds."
    },
    {
      q: "Do you offer ongoing support after the website is live?",
      a: "Yes. We provide ongoing maintenance, security updates, performance optimization, hosting support, and content updates to keep your website running smoothly."
    },
    {
      q: "Can you redesign my existing website?",
      a: "Absolutely. We can modernize your current website, improve user experience, increase loading speed, and optimize it for conversions and search engines."
    },
    {
      q: "Will my website be mobile-friendly?",
      a: "Yes. Every website we build is fully responsive and optimized for desktop, tablet, and mobile devices."
    },
    {
      q: "Do you build websites for international businesses?",
      a: "Yes. Webgreal works with businesses worldwide, creating websites and marketing campaigns tailored to local and international audiences."
    },
    {
      q: "Do you provide SEO services?",
      a: "Yes. We implement on-page SEO best practices during development and can provide ongoing SEO services to improve your search visibility."
    },
    {
      q: "Do you manage Google Ads campaigns?",
      a: "Yes. We create, optimize, and manage Google Ads campaigns focused on generating qualified leads, sales, and measurable ROI."
    },
    {
      q: "Do you manage Meta (Facebook & Instagram) Ads?",
      a: "Yes. We develop targeted Meta advertising campaigns designed to increase brand awareness, leads, and conversions."
    },
    {
      q: "How much should I budget for advertising?",
      a: "Advertising budgets vary based on your industry, competition, and goals. We'll recommend a budget that aligns with your objectives and expected results."
    },
    {
      q: "Do you create content for social media?",
      a: "Yes. We create professional content including graphics, videos, ad creatives, copywriting, and social media content tailored to your brand."
    },
    {
      q: "Can you handle both my website and marketing?",
      a: "Yes. We offer complete digital growth solutions including website design, paid advertising, content creation, conversion optimization, and ongoing support."
    },
    {
      q: "How do we get started?",
      a: "Simply contact us for a free consultation. We'll discuss your goals, recommend the best strategy, and provide a customized proposal for your business."
    },
    {
      q: "What industries do you work with?",
      a: "We work with startups, local businesses, e-commerce brands, professional services, and companies across a wide range of industries."
    },
    {
      q: "What makes Webgreal different?",
      a: "We combine premium web design, performance-focused advertising, and engaging content creation into one streamlined service, helping businesses grow faster with a consistent digital presence."
    }
  ];

  return (
    <div className="relative min-h-screen selection:bg-brand/15 selection:text-brand bg-white" id="home">
      
      {/* Background Gradient Orbs */}
      <div className="absolute top-[5%] left-[-15%] w-[50%] h-[500px] bg-brand-light/35 glow-orb animate-pulse-slow rounded-full" />
      <div className="absolute top-[25%] right-[-10%] w-[45%] h-[600px] bg-blue-100/30 glow-orb animate-pulse-slow rounded-full" />
      <div className="absolute top-[60%] left-[-20%] w-[60%] h-[700px] bg-brand-light/25 glow-orb animate-pulse-slow rounded-full" />
      <div className="absolute top-[85%] right-[-15%] w-[45%] h-[500px] bg-blue-50/40 glow-orb animate-pulse-slow rounded-full" />

      {/* Transparent Sticky Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-xs py-4' : 'bg-transparent py-6'}`} id="navbar">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <div className="flex flex-col">
              <span className="text-xl font-extrabold font-display tracking-tight text-brand hover:text-brand-dark transition-colors duration-200">
                Webgreal
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-9">
            <a href="#services" className="text-sm font-medium text-gray-600 hover:text-brand transition-colors duration-150 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand after:transition-all after:duration-300 hover:after:w-full">Services</a>
            <a href="#industries" className="text-sm font-medium text-gray-600 hover:text-brand transition-colors duration-150 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand after:transition-all after:duration-300 hover:after:w-full">Industries</a>
            <a href="#work" className="text-sm font-medium text-gray-600 hover:text-brand transition-colors duration-150 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand after:transition-all after:duration-300 hover:after:w-full">Work</a>
            <a href="#process" className="text-sm font-medium text-gray-600 hover:text-brand transition-colors duration-150 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand after:transition-all after:duration-300 hover:after:w-full">Process</a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-brand transition-colors duration-150 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand after:transition-all after:duration-300 hover:after:w-full">FAQ</a>
          </div>

          {/* Call CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#contact" 
              className="px-5 py-2.5 rounded-xl bg-brand text-sm font-semibold text-white hover:bg-brand-dark shadow-sm hover:shadow-md transition-all duration-250 hover:-translate-y-0.5 active:translate-y-0"
              id="nav-primary-cta"
            >
              Start a project
            </a>
          </div>

          {/* Toggle Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-gray-200/80 bg-white/70 hover:bg-gray-50 text-gray-700"
            aria-label="Toggle menu"
            id="mobile-nav-toggle"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </nav>

      {/* Mobile Menu Slideover */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed top-[74px] left-0 w-full bg-white border-b border-gray-100 shadow-xl z-40 md:hidden overflow-hidden"
            id="mobile-nav-menu"
          >
            <div className="p-6 flex flex-col gap-4">
              <a href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-4 rounded-xl text-base font-semibold text-gray-800 hover:bg-brand-light/10 hover:text-brand transition-all flex items-center justify-between"
              >
                Services <ArrowRight className="w-4 h-4 opacity-50" />
              </a>
              <a href="#industries" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-4 rounded-xl text-base font-semibold text-gray-800 hover:bg-brand-light/10 hover:text-brand transition-all flex items-center justify-between"
              >
                Industries <ArrowRight className="w-4 h-4 opacity-50" />
              </a>
              <a href="#work" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-4 rounded-xl text-base font-semibold text-gray-800 hover:bg-brand-light/10 hover:text-brand transition-all flex items-center justify-between"
              >
                Work / Portfolio <ArrowRight className="w-4 h-4 opacity-50" />
              </a>
              <a href="#process" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-4 rounded-xl text-base font-semibold text-gray-800 hover:bg-brand-light/10 hover:text-brand transition-all flex items-center justify-between"
              >
                Our Process <ArrowRight className="w-4 h-4 opacity-50" />
              </a>
              <a href="#faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-4 rounded-xl text-base font-semibold text-gray-800 hover:bg-brand-light/10 hover:text-brand transition-all flex items-center justify-between"
              >
                FAQ <ArrowRight className="w-4 h-4 opacity-50" />
              </a>

              <hr className="border-gray-100 my-2" />
              
              <div className="flex flex-col gap-3">
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 rounded-xl bg-brand text-center font-bold text-white hover:bg-brand-dark shadow-md flex items-center justify-center gap-2"
                >
                  Start a project
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden" id="hero-section">
        {/* Floating background graphic orbs (pure CSS glass cards decor) */}
        <div className="absolute top-[20%] right-[10%] w-32 h-32 rounded-3xl bg-brand/5 border border-brand/10 backdrop-blur-xl animate-float-slow hidden lg:block rotate-12" />
        <div className="absolute top-[50%] left-[5%] w-24 h-24 rounded-full bg-blue-500/5 border border-blue-500/10 backdrop-blur-md animate-float-medium hidden lg:block -rotate-6" />

        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Moving Technological Background Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-visible z-0 select-none">
            {/* Drifting subtle coordinate labels */}
            <motion.div 
              animate={{ 
                x: [0, 25, -20, 0], 
                y: [0, -35, 15, 0],
                rotate: [0, 5, -5, 0] 
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute left-[-8%] top-[10%] text-[10px] font-mono text-slate-400/25 border border-slate-200/15 p-2 rounded-lg bg-slate-50/5 hidden lg:block"
            >
              LOC [47.28, -122.33] // DEV_STABLE_V4
            </motion.div>

            <motion.div 
              animate={{ 
                x: [0, -30, 15, 0], 
                y: [0, 25, -30, 0] 
              }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute right-[-5%] top-[55%] text-[10px] font-mono text-slate-400/20 border border-slate-200/10 p-2 rounded-lg bg-slate-50/5 hidden lg:block"
            >
              SYS_ACQ [99.28%] :: ROAS_ACTIVE
            </motion.div>

            {/* Glowing tech grid dot pattern overlay fading out */}
            <motion.div 
              animate={{ 
                opacity: [0.15, 0.25, 0.15] 
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[15%] left-[5%] w-60 h-40 bg-[radial-gradient(#1A7CFF_1px,transparent_1px)] [background-size:16px_16px] opacity-20 hidden md:block" 
            />

            <motion.div 
              animate={{ 
                opacity: [0.12, 0.22, 0.12] 
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[10%] right-[5%] w-52 h-32 bg-[radial-gradient(#1A7CFF_1px,transparent_1px)] [background-size:16px_16px] opacity-15 hidden md:block" 
            />

            {/* Floating subtle lines with plus icons representing wireframe grids */}
            <motion.div 
              animate={{ 
                y: [0, -20, 10, 0],
                rotate: [0, 360]
              }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute left-[8%] top-[45%] text-[#1A7CFF]/15 animate-pulse hidden xl:block"
            >
              <svg className="w-16 h-16 stroke-current stroke-[0.5] fill-none" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" strokeDasharray="3,3" />
                <path d="M50 0 L50 100 M0 50 L100 50" />
              </svg>
            </motion.div>

            <motion.div 
              animate={{ 
                y: [0, 30, -15, 0],
                rotate: [360, 0]
              }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute right-[12%] top-[8%] text-[#1A7CFF]/15 hidden xl:block"
            >
              <svg className="w-20 h-20 stroke-current stroke-[0.5] fill-none" viewBox="0 0 100 100">
                <rect x="15" y="15" width="70" height="70" strokeDasharray="4,4" />
                <path d="M0 0 L100 100 M100 0 L0 100" />
              </svg>
            </motion.div>
          </div>

          <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative z-10">
            
            {/* Tag / Category Indicator */}
            <div className="inline-flex items-center gap-2.5 py-2 px-4 mb-8 rounded-full border border-blue-100 bg-brand-light/35 shadow-xs hover:scale-103 transition-all duration-300 group cursor-default">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-brand tracking-tight font-display">
                Trusted by +120 Clients
              </span>
              <div className="w-5 h-5 rounded-full bg-brand flex items-center justify-center text-white text-[10px] transform group-hover:rotate-12 transition-transform shadow-2xs">
                ✦
              </div>
            </div>

            {/* Giant Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold font-display tracking-tight text-gray-950 leading-none md:leading-[1.05] mb-8">
              Web Design, Paid Advertising &amp; <span className="bg-gradient-to-r from-brand to-blue-500 bg-clip-text text-transparent">Content Creation</span> for Businesses Ready to Grow
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 font-normal leading-relaxed mb-10 max-w-2xl">
              We help brands worldwide generate more leads, sales, and visibility through high-converting websites, Google Ads, Meta Ads, and creative content.
            </p>

            {/* Dynamic Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-2">
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-brand hover:bg-brand-dark text-white font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-brand/25 hover:-translate-y-1 active:translate-y-0 text-base"
                id="hero-primary-cta"
              >
                <span>Start a project</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#work" 
                className="w-full sm:w-auto px-8 py-4.5 rounded-2xl border border-gray-200 hover:border-brand/40 hover:bg-brand-light/10 text-gray-800 font-semibold flex items-center justify-center gap-2.5 transition-all duration-300 hover:-translate-y-1"
                id="hero-secondary-cta"
              >
                <span>View Our Work</span>
              </a>
            </div>

          </div>
        </div>
      </header>

      {/* Trusted By Section (Infinite Marquee) */}
      <section className="py-14 border-y border-slate-100 bg-white overflow-hidden relative" id="trusted-by">
        <div className="max-w-7xl mx-auto px-6 mb-6 flex justify-center">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400 font-bold">Trusted by 100+ brands across Europe, the US and the Middle East</span>
        </div>
        <div className="relative w-full flex overflow-x-hidden">
          {/* Subtle gradient overlays on sides for a premium fading marquee effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Loop double for infinite scrolling marquee */}
          <div className="animate-[marquee_35s_linear_infinite] flex whitespace-nowrap gap-16 py-3 items-center min-w-full">
            {clientLogos.concat(clientLogos).map((logo, idx) => (
              <div key={idx} className="flex items-center gap-3.5 mx-2 flex-shrink-0 cursor-default group">
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100/80 flex items-center justify-center shadow-2xs group-hover:border-brand/25 group-hover:bg-brand/5 group-hover:shadow-xs transition-colors duration-300">
                  {logo.logo}
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-800 font-bold tracking-tight text-sm font-display group-hover:text-brand transition-colors duration-200">{logo.name}</span>
                  <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-semibold">{logo.industry}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Keyframe embedded styling securely */}
        <style jsx global>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-32 scroll-mt-24" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <span className="text-xs font-mono font-bold tracking-widest text-brand uppercase">Core Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-gray-950 mt-3 mb-6">
              Everything you need to grow online
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We deploy elite development coupled with ROI-authoritative paid traffic campaigns to execute exactly on revenue generating pathways.
            </p>
          </div>

          {/* 6 Grid of cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, idx) => (
              <div 
                key={idx} 
                className="glass-card glass-card-hover p-8 rounded-2xl hover:border-brand/30 flex flex-col justify-between group"
                id={`service-card-${idx}`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-xs border border-brand/5">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold font-display text-gray-950 mb-4 group-hover:text-brand transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-gray-100/80 pt-5 mt-auto">
                  <ul className="space-y-2.5">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                        <Check className="w-3.5 h-3.5 text-brand flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 md:py-32 bg-gray-50/60 border-y border-gray-100 scroll-mt-24 relative overflow-hidden" id="industries">
        {/* Technological background decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
          {/* Subtle slow drifting grid dots tracking with Framer motion */}
          <motion.div
            animate={{ 
              x: [-15, 15, -15],
              y: [-10, 10, -10]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] right-[15%] w-80 h-80 bg-[radial-gradient(#1A7CFF_1px,transparent_1px)] [background-size:24px_24px] opacity-10"
          />
          
          <motion.div
            animate={{ 
              x: [20, -20, 20],
              y: [15, -15, 15]
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] left-[10%] w-72 h-80 bg-[radial-gradient(#1A7CFF_1px,transparent_1px)] [background-size:24px_24px] opacity-10"
          />

          {/* Tech wireframe orbit wheels pulsing and rotating */}
          <motion.div
            animate={{ rotate: 360, opacity: [0.03, 0.08, 0.03] }}
            transition={{ rotate: { duration: 52, repeat: Infinity, ease: "linear" }, opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
            className="absolute -top-12 left-[15%] text-brand hidden lg:block"
          >
            <svg className="w-56 h-56 stroke-current stroke-[0.25] fill-none" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" strokeDasharray="2,6" />
              <circle cx="60" cy="60" r="40" strokeDasharray="3,3" />
              <circle cx="60" cy="60" r="30" />
              <path d="M0 60 L120 60 M60 0 L60 120" strokeWidth="0.1" />
            </svg>
          </motion.div>

          <motion.div
            animate={{ rotate: -360, opacity: [0.04, 0.09, 0.04] }}
            transition={{ rotate: { duration: 60, repeat: Infinity, ease: "linear" }, opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
            className="absolute bottom-5 right-[5%] text-brand hidden lg:block"
          >
            <svg className="w-64 h-64 stroke-current stroke-[0.25] fill-none" viewBox="0 0 120 120">
              <rect x="20" y="20" width="80" height="80" strokeDasharray="4,4" />
              <circle cx="60" cy="60" r="45" strokeDasharray="1,2" />
              <path d="M60 15 L60 105 M15 60 L105 60" />
            </svg>
          </motion.div>

          {/* Floating tech codes */}
          <motion.div 
            animate={{ 
              y: [0, -10, 5, 0],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[35%] left-[2%] text-[9px] font-mono text-slate-400 font-bold border-l border-brand/20 pl-2 py-0.5 hidden xl:block"
          >
            SEGMENT // ENTERPRISE_B2B<br />
            TARGET_ACQ = 100%<br />
            STATUSID::STABLE_EXEC
          </motion.div>

          <motion.div 
            animate={{ 
              y: [0, 8, -6, 0],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[60%] right-[3%] text-[9px] font-mono text-slate-400 font-bold border-r border-brand/20 pr-2 py-0.5 text-right hidden xl:block"
          >
            METRIC_ROAS = 4.2x (AVG)<br />
            DATA_REFRESH = 60S<br />
            LOCATOR::ACTIVE
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-brand uppercase">Tailored Verticals</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-gray-950 mt-3 mb-5">
              Built for ambitious businesses
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Every vertical demands unique strategy matrices. Select your industry segment to see how we accelerate your target performance indicators.
            </p>
          </div>

          {/* Glass Tabs Container */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto" id="industry-tabs">
            {(Object.keys(industriesInfo) as Array<keyof typeof industriesInfo>).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-3 rounded-2xl text-xs md:text-sm font-semibold tracking-tight transition-all duration-350 cursor-pointer ${activeTab === key ? 'bg-brand text-white shadow-md shadow-brand/15 border-brand' : 'glass-card text-gray-600 hover:text-brand hover:bg-white border-transparent'}`}
              >
                {industriesInfo[key].title}
              </button>
            ))}
          </div>

          {/* Glass Tab Interactive View Layout */}
          <div className="glass-card max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-sm border border-brand/5" id="industry-tabs-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 p-8 md:p-12 gap-8 items-center"
              >
                
                {/* Left Columns - Copy details */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider">{industriesInfo[activeTab].tagline}</span>
                  <h3 className="text-2xl md:text-3.5xl font-bold font-display text-gray-950 tracking-tight leading-tight">
                    Optimized for {industriesInfo[activeTab].title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {industriesInfo[activeTab].description}
                  </p>

                  <div className="h-[1px] bg-gray-200/60 my-2" />

                  {/* Checklist */}
                  <div className="space-y-3">
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold block mb-2">Technical Deliverables</span>
                    {industriesInfo[activeTab].checklist.map((item, id) => (
                      <div key={id} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-brand" />
                        </div>
                        <span className="text-xs md:text-sm font-medium text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Columns - Metrics highlight pane style elements */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="bg-gradient-to-br from-brand/5 via-transparent to-brand-light/5 rounded-2xl p-6 border border-brand/5 flex flex-col gap-6 relative overflow-hidden backdrop-blur-xs">
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                      <Sparkles className="w-24 h-24 text-brand" />
                    </div>

                    <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider block">Expected Benchmarks</span>
                    
                    <div className="space-y-5">
                      {industriesInfo[activeTab].metrics.map((metric, id) => (
                        <div key={id} className="flex items-center justify-between border-b border-gray-100/60 pb-3 last:border-0 last:pb-0 overflow-visible">
                          <span className="text-xs md:text-sm text-gray-500 font-medium select-none">{metric.label}</span>
                          <motion.span 
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            dragElastic={0.6}
                            whileDrag={{ scale: 1.25, zIndex: 50 }}
                            whileHover={{ scale: 1.1 }}
                            onTouchStart={(e) => e.stopPropagation()}
                            className="text-xl md:text-2xl font-bold font-display text-brand tracking-tight cursor-grab active:cursor-grabbing select-none inline-block origin-center"
                          >
                            {metric.val}
                          </motion.span>
                        </div>
                      ))}
                    </div>

                    <a 
                      href="#contact"
                      className="mt-4 w-full py-3.5 rounded-xl bg-white hover:bg-brand hover:text-white text-center text-xs font-bold font-display tracking-tight text-brand border border-brand/20 shadow-xs hover:shadow-sm flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <span>Tailor for my Brand</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 md:py-32 scroll-mt-24" id="work">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-brand uppercase">Featured Projects</span>
              <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-gray-950 mt-3">
                Results, not just deliverables
              </h2>
            </div>
            <p className="text-gray-600 max-w-md text-sm md:text-base mt-4 md:mt-0">
              We focus on building websites and setting advertising models that look elite and yield massive financial numbers. No compromise.
            </p>
          </div>

          {/* Cards Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-grid">
            {portfolioProjects.map((proj, idx) => (
              <div 
                key={idx} 
                className="glass-card rounded-2xl overflow-hidden group flex flex-col justify-between hover:border-brand/20 transition-all duration-400"
                id={`project-card-${idx}`}
              >
                {/* Visual Mockups */}
                <div className="relative h-64 md:h-72 w-full bg-gray-100 overflow-hidden border-b border-gray-100">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Glass statistics overlay on hover */}
                  <div className="absolute inset-0 bg-brand-dark/90 opacity-0 group-hover:opacity-100 transition-opacity duration-350 p-6 flex flex-col justify-between text-white backdrop-blur-xs">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-white/70 block mb-1">Target Achievement</span>
                      <h4 className="text-2xl font-bold font-display text-white">{proj.metrics.primary}</h4>
                      <p className="text-xs text-white/80 mt-1">{proj.metrics.secondary}</p>
                    </div>

                    <div className="border-t border-white/20 pt-4">
                      <span className="text-[9px] font-mono tracking-wider uppercase text-white/60 block mb-1.5">Services Utilized</span>
                      <div className="flex flex-wrap gap-1.5">
                        {proj.services.map((srv, sId) => (
                          <span key={sId} className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] uppercase font-mono tracking-tight font-medium text-white/95">{srv}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Top Floating Tags */}
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className="px-3 py-1 bg-white/90 text-gray-800 text-[10px] uppercase font-mono tracking-wider font-bold rounded-lg border border-gray-100 shadow-xs">
                      {proj.industry}
                    </span>
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-6 relative">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-brand uppercase block mb-1">{proj.client}</span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold font-display text-gray-950 group-hover:text-brand transition-colors duration-200">
                      {proj.title}
                    </h3>
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-brand group-hover:text-white transition-all duration-350 shadow-2xs">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>




      {/* Testimonials Slider */}
      <section className="py-24 md:py-32 bg-[#FAFBFC] border-y border-slate-100 scroll-mt-24" id="testimonials">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-gray-950 mt-3 mb-5">
              Trusted by <span className="text-[#1A7CFF]">Bold Brands</span>
            </h2>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal">
              Real feedback from brands we&apos;ve helped scale and launch — through strategic collaboration, creative impact, and results that speak for themselves.
            </p>
          </div>

          {/* Testimonials Slider Container */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mt-12 overflow-hidden py-4 px-2">
            {(() => {
              const len = testimonials.length;
              const leftIdx = (activeTestimonial - 1 + len) % len;
              const centerIdx = activeTestimonial;
              const rightIdx = (activeTestimonial + 1) % len;
              const visibleItems = [
                { item: testimonials[leftIdx], originalIdx: leftIdx, position: 'left' },
                { item: testimonials[centerIdx], originalIdx: centerIdx, position: 'center' },
                { item: testimonials[rightIdx], originalIdx: rightIdx, position: 'right' }
              ];

              return visibleItems.map(({ item, originalIdx, position }) => {
                const isCenter = position === 'center';
                return (
                  <div
                    key={originalIdx}
                    onClick={() => {
                      if (!isCenter) {
                        setActiveTestimonial(originalIdx);
                      }
                    }}
                    className={`w-full md:w-[380px] bg-white rounded-[2rem] p-8 md:p-10 border transition-all duration-500 relative flex flex-col justify-between cursor-pointer ${
                      isCenter
                        ? 'border-slate-100 shadow-[0_20px_50px_rgba(26,124,255,0.06)] scale-100 md:scale-[1.05] z-20 opacity-100'
                        : 'border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.01)] scale-90 z-10 opacity-40 hover:opacity-75 hidden md:flex'
                    }`}
                  >
                    <div className="flex flex-col relative w-full h-full">
                      {/* Avatar */}
                      <div className="relative w-14 h-14 rounded-full border border-slate-100 mb-5 overflow-hidden bg-slate-50 shadow-xs">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      
                      {/* Double quote badge */}
                      <div className={`absolute top-0 right-0 transition-colors duration-300 ${isCenter ? 'text-[#1A7CFF]/15' : 'text-slate-200'}`}>
                        <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      {/* Name */}
                      <h4 className="text-xl font-bold text-slate-900 tracking-tight font-display mb-1">
                        {item.name}
                      </h4>
                      
                      {/* Role */}
                      <p className="text-xs font-semibold text-[#1A7CFF] mb-5 tracking-wide">
                        {item.role}
                      </p>
                      
                      {/* Text */}
                      <p className="text-sm text-slate-500 leading-relaxed font-normal">
                        &ldquo;{item.text}&rdquo;
                      </p>
                    </div>
                  </div>
                );
              });
            })()}
          </div>

          {/* Indicators */}
          <div className="flex items-center justify-center gap-2 mt-10 md:mt-14">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeTestimonial === idx 
                    ? 'w-8 bg-[#1A7CFF]' 
                    : 'w-2 bg-slate-200 hover:bg-slate-350'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 md:py-32 scroll-mt-24" id="faq">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* FAQ Left Column Titles */}
            <div className="lg:col-span-4 flex flex-col gap-5">
              <span className="text-xs font-mono font-bold tracking-widest text-brand uppercase">Inquiries Resolved</span>
              <h2 className="text-3xl md:text-4.5xl font-bold font-display tracking-tight text-gray-950 leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500 text-sm md:text-base">
                Have specific concerns? We document our structural answers transparently so you know exactly how Webgreal operates.
              </p>
              
              <div className="bg-brand/5 border border-brand/10 rounded-2xl p-5 mt-4">
                <span className="text-xs font-mono font-bold text-gray-400 block mb-1">Direct Callback Center</span>
                <span className="text-base font-bold text-gray-950 block">+355 69 830 6975</span>
                <a href="#contact" className="text-xs text-brand font-bold mt-2 hover:underline inline-flex items-center gap-1.5">
                  Book Custom Session <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* FAQ Right Column Accordions */}
            <div className="lg:col-span-8 flex flex-col gap-4" id="faq-accordion-list">
              {faqs.map((faq, idx) => {
                const isExpanded = expandedFaq === idx;
                return (
                  <div 
                    key={idx} 
                    className="glass-card rounded-2xl overflow-hidden border border-brand/5 transition-all duration-300 shadow-2xs"
                  >
                    <button
                      onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50/50 transition-colors"
                      aria-expanded={isExpanded}
                      id={`faq-button-${idx}`}
                    >
                      <span className="text-base font-bold text-gray-950 font-display">
                        {faq.q}
                      </span>
                      <div className={`w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-brand text-white' : ''}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100/50" id={`faq-answer-${idx}`}>
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Final Call To Action Section (Contact Section) */}
      <section className="py-24 md:py-32 bg-gray-50/30 scroll-mt-24" id="contact">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card rounded-3xl overflow-hidden border border-brand/10 shadow-lg relative bg-white/85">
            
            {/* Graphic blobs decor */}
            <div className="absolute top-[10%] right-[5%] w-48 h-48 bg-brand-light/20 glow-orb" />
            <div className="absolute bottom-[10%] left-[5%] w-40 h-40 bg-blue-100/15 glow-orb" />

            {/* Contact Grid layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10" id="contact-container">
              
              {/* Left Side Info Area */}
              <div className="lg:col-span-5 p-8 md:p-12 lg:p-16 bg-gradient-to-br from-brand/5 via-transparent to-brand-light/10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-100">
                <div>
                  <div className="inline-flex items-center gap-2 py-1 px-3 mb-6 rounded-lg bg-brand-light border border-brand/5 text-[10px] font-mono tracking-wider uppercase text-brand font-bold">
                    ⚡ Instant Strategy Session
                  </div>

                  <h2 className="text-3xl md:text-4.5xl font-bold font-display tracking-tight text-gray-950 leading-tight mb-4">
                    Let&apos;s build something people remember.
                  </h2>
                  
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 font-normal">
                    Whether you need a website, advertising campaign, or content strategy, Webgreal can help you scale. Drop us a brief project overview to begin.
                  </p>

                  <div className="space-y-4">
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-brand">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-gray-400 block">EMAIL ENQUIRIES</span>
                        <a href="mailto:info@webgreal.com" className="text-sm font-semibold text-gray-800 hover:text-brand transition-all">info@webgreal.com</a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-brand">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-gray-400 block">ALBANIAN HQ CHANNELS</span>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <a href="tel:+355698306975" className="text-sm font-semibold text-gray-800 hover:text-brand transition-all">+355 69 830 6975</a>
                          <span className="text-gray-350 hidden sm:inline">|</span>
                          <a 
                            href="https://wa.me/355698306975" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-xs text-emerald-600 hover:text-emerald-700 font-extrabold flex items-center gap-0.5 hover:underline"
                          >
                            WhatsApp Business
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="border-t border-gray-100 pt-8 mt-12">
                  <span className="text-[10px] font-mono font-bold text-gray-400 block tracking-widest uppercase mb-1">Response Match Speed</span>
                  <p className="text-xs text-brand font-semibold flex items-center gap-1.5 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Active response guaranteed under 2 hours</span>
                  </p>
                </div>

              </div>

              {/* Right Side Form Panel Area */}
              <div className="lg:col-span-7 p-8 md:p-12 lg:p-16">
                
                {formSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center justify-center py-6"
                    id="contact-success-panel"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-brand/5 border border-brand/10 flex items-center justify-center mb-6 text-brand shadow-sm">
                      <Mail className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-gray-950 mb-2">Email Draft Standard Ready!</h3>
                    <p className="text-sm text-slate-600 max-w-md mb-6">
                      Your default mail application should open instantly with your details pre-filled for <strong className="text-brand">webgreal@gmail.com</strong>. If it did not open, click the button below to send manually:
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                      <a 
                        href={`mailto:webgreal@gmail.com?subject=${encodeURIComponent(`Project Scale Discussion - ${contactData.company || contactData.name}`)}&body=${encodeURIComponent(
                          `Hello Webgreal Team,\n\n` +
                          `I would like to discuss a digital project with you. Here are my submission details:\n\n` +
                          `• Full Name: ${contactData.name}\n` +
                          `• Email Address: ${contactData.email}\n` +
                          `• Phone Number: ${contactData.phone || 'N/A'}\n` +
                          `• Company: ${contactData.company || 'N/A'}\n` +
                          `• Required Service: ${contactData.service}\n` +
                          `• Project Target Ad Budget: ${contactData.budget}\n\n` +
                          `Project Overview:\n` +
                          `${contactData.message}\n\n` +
                          `Best regards,\n` +
                          `${contactData.name}`
                        )}`}
                        className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-brand hover:bg-brand-dark text-white font-bold text-sm tracking-tight transition-all duration-250 shadow-sm hover:shadow-md text-center"
                      >
                        Launch Email Client
                      </a>
                      <button 
                        onClick={() => setFormSubmitted(false)}
                        className="text-xs text-slate-500 font-bold hover:text-brand cursor-pointer font-mono"
                      >
                        Edit Form Details
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6" id="contact-form">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="text-[10px] font-mono font-bold text-gray-400 block uppercase tracking-wide mb-1.5">Full Name *</label>
                        <input 
                          type="text" 
                          required
                          value={contactData.name} 
                          onChange={(e) => setContactData({...contactData, name: e.target.value})}
                          placeholder="Jane Doe"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand"
                          id="form-name"
                        />
                      </div>
                      {/* Email */}
                      <div>
                        <label className="text-[10px] font-mono font-bold text-gray-400 block uppercase tracking-wide mb-1.5">Email *</label>
                        <input 
                          type="email" 
                          required
                          value={contactData.email} 
                          onChange={(e) => setContactData({...contactData, email: e.target.value})}
                          placeholder="jane@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand"
                          id="form-email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label className="text-[10px] font-mono font-bold text-gray-400 block uppercase tracking-wide mb-1.5">Phone Number</label>
                        <input 
                          type="tel" 
                          value={contactData.phone} 
                          onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                          placeholder="+355690000000"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand"
                          id="form-phone"
                        />
                      </div>
                      {/* Company */}
                      <div>
                        <label className="text-[10px] font-mono font-bold text-gray-400 block uppercase tracking-wide mb-1.5">Company Name</label>
                        <input 
                          type="text" 
                          value={contactData.company} 
                          onChange={(e) => setContactData({...contactData, company: e.target.value})}
                          placeholder="Acme Inc."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand"
                          id="form-company"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Service Choice */}
                      <div>
                        <label className="text-[10px] font-mono font-bold text-gray-400 block uppercase tracking-wide mb-1.5">Required Service</label>
                        <select 
                          value={contactData.service} 
                          onChange={(e) => setContactData({...contactData, service: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:border-brand cursor-pointer"
                          id="form-service"
                        >
                          <option>Web Design &amp; Development</option>
                          <option>Google Ads Management</option>
                          <option>Meta Ads Management</option>
                          <option>Content Creation</option>
                          <option>Conversion Optimization</option>
                          <option>All-Inclusive Digital Scaling</option>
                        </select>
                      </div>

                      {/* Budget Choice */}
                      <div>
                        <label className="text-[10px] font-mono font-bold text-gray-400 block uppercase tracking-wide mb-1.5">Project Ad Budget</label>
                        <select 
                          value={contactData.budget} 
                          onChange={(e) => setContactData({...contactData, budget: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:border-brand cursor-pointer"
                          id="form-budget"
                        >
                          <option>Under $5,000</option>
                          <option>$5,000 - $10,000</option>
                          <option>$10,000 - $25,000</option>
                          <option>$25,000+</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-[10px] font-mono font-bold text-gray-400 block uppercase tracking-wide mb-1.5">Project Overview *</label>
                      <textarea 
                        required
                        rows={4}
                        value={contactData.message} 
                        onChange={(e) => setContactData({...contactData, message: e.target.value})}
                        placeholder="Please tell us brief goals about your website leads, sales targets, or active ad budgets..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand resize-none"
                        id="form-message"
                      />
                    </div>

                    {formError && (
                      <p className="text-xs text-red-500 font-mono" id="form-error-text">
                        {formError}
                      </p>
                    )}

                    {/* Submit CTA */}
                    <button
                      type="submit"
                      disabled={formLoading}
                      className="w-full py-4 rounded-xl bg-brand text-white font-semibold flex items-center justify-center gap-2 hover:bg-brand-dark transition-all shadow-sm hover:shadow-md cursor-pointer disabled:opacity-50"
                      id="form-submit-button"
                    >
                      {formLoading ? 'Submitting...' : "Let's Talk"}
                      <ArrowRight className="w-4 h-4" />
                    </button>

                  </form>
                )}

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 pb-12 mt-12">
        <footer className="bg-slate-50 text-slate-700 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl relative overflow-hidden" id="footer">
          {/* Beautiful background glow orb inside the rounded footer card */}
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-brand/5 blur-[80px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-12 relative z-10">
            
            {/* Column 1: Brand & Logo */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <a href="#home" className="flex items-center group">
                <span className="text-xl font-extrabold text-brand font-display tracking-tight hover:text-brand-dark transition-colors">
                  Webgreal
                </span>
              </a>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
                International web design and performance acquisition marketing agency. We engineer clean high-speed digital conversions for ambitious corporate leaders worldwide.
              </p>
              
              {/* Modern Tag Pills like NextPlay */}
              <div className="flex flex-wrap gap-2 mt-2">
                <a href="#services" className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 bg-white hover:bg-brand-light/30 rounded-full border border-slate-200 hover:border-brand/20 transition-colors">Services</a>
                <a href="#industries" className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 bg-white hover:bg-brand-light/30 rounded-full border border-slate-200 hover:border-brand/20 transition-colors">Industries</a>
                <a href="#work" className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 bg-white hover:bg-brand-light/30 rounded-full border border-slate-200 hover:border-brand/20 transition-colors">Work</a>
                <a href="#process" className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 bg-white hover:bg-brand-light/30 rounded-full border border-slate-200 hover:border-brand/20 transition-colors">Process</a>
                <a href="#faq" className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 bg-white hover:bg-brand-light/30 rounded-full border border-slate-200 hover:border-brand/20 transition-colors">FAQ</a>
              </div>
            </div>

            {/* Column 2: Direct Operations details */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold block">Direct Operations</span>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-brand">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href="mailto:info@webgreal.com" className="text-sm font-semibold text-slate-800 hover:text-brand transition-colors">info@webgreal.com</a>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-brand">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <a href="tel:+355698306975" className="text-sm font-semibold text-slate-800 hover:text-brand transition-colors">+355 69 830 6975</a>
                    <a 
                      href="https://wa.me/355698306975" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-emerald-600 font-bold hover:underline"
                    >
                      WhatsApp Chat
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-brand flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <p className="text-xs text-slate-600 leading-normal">
                    Rr. Deshmoret e Kombit, <br />
                    Tirana, Albania, 1001
                  </p>
                </div>
              </div>

              {/* Blue Theme Social Icons row */}
              <div className="flex items-center gap-3 mt-2">
                <a 
                  href="https://instagram.com/webgreal" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-white hover:bg-[#1A7CFF] hover:border-[#1A7CFF] shadow-xs transition-all duration-250 hover:scale-103 cursor-pointer group" 
                  title="@webgreal on Instagram"
                >
                  <Instagram className="w-4 h-4 text-[#1A7CFF] group-hover:text-white flex-shrink-0 transition-colors" />
                  <span className="text-xs font-semibold tracking-tight">@webgreal</span>
                </a>
              </div>
            </div>

          </div>

          {/* Copyright & bottom items */}
          <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs font-medium text-slate-500 relative z-10">
            <span>&copy; {new Date().getFullYear()} Webgreal. All rights reserved worldwide.</span>
          </div>

        </footer>
      </div>
    </div>
  );
}
