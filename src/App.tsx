import React, { useState } from 'react';
import {
  TrendingUp,
  BarChart3,
  Target,
  Search,
  CheckCircle2,
  Mail,
  Linkedin,
  Phone,
  ChevronRight,
  Sparkles,
  Globe,
  GraduationCap,
  Briefcase,
  MapPin,
  Calendar,
  Copy,
  Check,
  Menu,
  X,
  Database,
  Code2,
  ArrowUpRight,
  Send,
  Zap,
  FileText,
  BookOpen,
  Cpu,
  Layers,
  Filter,
  Eye,
  Download,
  Clock,
  Settings,
  HelpCircle,
  Lightbulb,
  Palette,
  Flame,
  Award,
  Share2,
  Terminal,
  ExternalLink
} from 'lucide-react';

// ==========================================
// DATA DEFINITIONS & MASTER CASE STUDIES
// ==========================================

interface CaseStudy {
  id: string;
  number: string;
  category: 'Google Ads' | 'Meta Ads' | 'SEO' | 'Analytics & Automation';
  title: string;
  subtitle: string;
  keyMetricLabel: string;
  keyMetricValue: string;
  keyMetricContext: string;
  objective: string;
  challenge: string;
  strategy: string[];
  execution: {
    title: string;
    details: string[];
  }[];
  results: {
    metric: string;
    value: string;
    benchmark: string;
    note: string;
  }[];
  learnings: string[];
  techStack: string[];
}

interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  readTime: string;
  category: string;
  summary: string;
  keyTakeaways: string[];
  contentSections: {
    heading: string;
    body: string;
  }[];
}

// Master Case Studies based on actual verified performance
const caseStudies: CaseStudy[] = [
  {
    id: 'case-google-ads',
    number: 'Case Study 01',
    category: 'Google Ads',
    title: 'Google Ads – Travel Lead Generation & CPC Optimization',
    subtitle: 'High-intent search campaign restructuring for regional travel packages',
    keyMetricLabel: 'Campaign CTR & CPC',
    keyMetricValue: '4.10% CTR · ₹55 Avg CPC',
    keyMetricContext: 'Achieved 13.71% peak conversion rate on commercial search queries',
    objective:
      'Generate high-intent travel enquiries and booking leads for competitive East/Northeast India and Andaman circuits while reducing runaway cost-per-click (CPC).',
    challenge:
      'Broad match keywords were draining ad spend on informational queries ("places to visit", "weather in Darjeeling") without inquiry intent, inflating average CPC above ₹85 with lead conversion under 5%.',
    strategy: [
      'Segmented campaigns into Exact & Phrase match intent silos (Tour Packages, Custom Itinerary, Luxury DMC).',
      'Extensive negative keyword lists (180+ non-commercial terms like "free", "train time", "jobs").',
      'Dynamic search ad customization based on seasonal booking windows.',
      'Audience observation layers targeting in-market travel researchers.'
    ],
    execution: [
      {
        title: 'Keyword Architecture & Ad Copy Matrix',
        details: [
          'Grouped high-commercial intent terms: [sikkim tour package from kolkata], "best bhutan travel itinerary cost".',
          'Responsive Search Ads (RSAs) pin-tested with transparent inclusions, local DMC credibility, and fast-quote CTAs.',
          'Sitelink, Callout, and Structured Snippet extensions driving straight to quick-quote inquiry forms.'
        ]
      },
      {
        title: 'Bidding & Landing Page Alignment',
        details: [
          'Transitioned from manual CPC to Target CPA bidding once conversion actions reached statistical significance.',
          'Created single-destination dedicated landing page routes reducing bounce rate by 24%.'
        ]
      }
    ],
    results: [
      {
        metric: 'Click-Through Rate (CTR)',
        value: '4.10%',
        benchmark: 'Industry Avg: 2.1%',
        note: 'Nearly 2x above industry benchmark for regional travel PPC.'
      },
      {
        metric: 'Average CPC',
        value: '₹55.00',
        benchmark: 'Previous: ₹85.00+',
        note: '35% reduction in acquisition cost per ad click.'
      },
      {
        metric: 'Peak Conversion Rate',
        value: '13.71%',
        benchmark: 'Initial: 4.8%',
        note: 'High-intent enquiry form completion rate on targeted ad groups.'
      }
    ],
    learnings: [
      'Exact match SKAG-style clusters outperform broad responsive sets when regional travel budgets are constrained.',
      'Clear price transparency and local presence in ad copy pre-qualify users and eliminate low-budget inquiry waste.',
      'Regular search-term audit routines every 48 hours are essential to capture emerging tourist query patterns.'
    ],
    techStack: ['Google Ads', 'Google Keyword Planner', 'Google Analytics 4', 'Looker Studio']
  },
  {
    id: 'case-meta-ads',
    number: 'Case Study 02',
    category: 'Meta Ads',
    title: 'Meta Ads – Lead Generation & Lead Quality Optimization',
    subtitle: 'Instant form qualifying workflows to reduce low-intent inquiries',
    keyMetricLabel: 'Qualified Lead Ratio',
    keyMetricValue: '60% Qualified Leads',
    keyMetricContext: 'Targeted lead qualification and follow-up optimization',
    objective:
      'Generate high volumes of travel inquiries on Facebook and Instagram while solving sales-team friction caused by uncontactable leads or invalid budgets.',
    challenge:
      'Standard low-friction Instant Forms yielded high lead volume with low qualification; over 50% of respondents claimed accidental clicks or were unresponsive to WhatsApp follow-ups.',
    strategy: [
      'Swapped instant 1-click forms for Higher Intent Forms featuring custom qualification filters (travel month, party size, realistic budget bracket).',
      'Developed scroll-stopping carousel and single-image creatives highlighting authentic travel experiences rather than generic stock photos.',
      'Implemented automated CRM notification triggers to contact leads within 8 minutes of submission.'
    ],
    execution: [
      {
        title: 'Creative Angle Testing & Audience Architecture',
        details: [
          'Tested 3 angles: Family Leisure (Andaman), Mountain Solitude (Sikkim/Darjeeling), and Cultural Expedition (Bhutan).',
          'Targeted frequent international/domestic travelers, photography enthusiasts, and regional tier-1 outbound metros.',
          'Custom lookalikes generated from past completed itinerary purchasers.'
        ]
      },
      {
        title: 'Qualification Gatekeeper Logic',
        details: [
          'Required user confirmation screen with editable summary.',
          'Mandatory WhatsApp-verified phone number validation format.',
          'Filtered out responses selecting "Just browsing / No immediate plan".'
        ]
      }
    ],
    results: [
      {
        metric: 'Qualified Lead Ratio',
        value: '60%',
        benchmark: 'Relevant / Total Leads',
        note: 'Improved qualification ratio through structured instant forms.'
      },
      {
        metric: 'Sales-Team Contact Rate',
        value: '91.4%',
        benchmark: 'Previous: 49.2%',
        note: 'Drastic decrease in unreached or wrong numbers.'
      },
      {
        metric: 'Lead-to-Proposal Conversion',
        value: '28.6%',
        benchmark: 'Previous: 11.2%',
        note: 'More than doubled quotation requests resulting in itinerary discussions.'
      }
    ],
    learnings: [
      'Strategic friction in lead generation forms actually increases bottom-line ROI by freeing up sales counseling time.',
      'Destination-specific video reels and user-perspective carousel posts beat static flyer posters by 3.2x engagement.',
      'Immediate automated lead ingestion to CRM via webhooks preserves lead warmth.'
    ],
    techStack: ['Meta Ads Manager', 'Meta Business Suite', 'WhatsApp Business API', 'CRM Tools', 'Canva']
  },
  {
    id: 'case-seo-growth',
    number: 'Case Study 03',
    category: 'SEO',
    title: 'SEO – Organic Search Growth & Search Console Expansion',
    subtitle: 'Intent-driven technical SEO, on-page optimization, and regular audits',
    keyMetricLabel: 'Search Console Growth',
    keyMetricValue: '+15.33% Clicks · +22.93% Impr.',
    keyMetricContext: 'Ranked top-3 for lucrative destination queries and itinerary searches',
    objective:
      'Scale organic search visibility and capture intent-driven non-branded travel searches without perpetual reliance on paid media.',
    challenge:
      'Thin destination pages, poor mobile core web vitals, missing structured data (schema), and keyword cannibalization across regional travel packages.',
    strategy: [
      'Conducted regular technical SEO crawls (Screaming Frog) resolving 404s, redirect chains, and missing canonical tags.',
      'Built topical content clusters around high-value queries (e.g., permits, best season, itinerary planning guides).',
      'Implemented TouristTrip and FAQPage JSON-LD structured data schema for rich Google search snippets.',
      'Optimized meta titles and H1 tags with localized search modifiers and GMB integration.'
    ],
    execution: [
      {
        title: 'Content Silos & Internal Linking Architecture',
        details: [
          'Organized hierarchical silos: Parent Destination Hub -> Sub-circuits -> 4D/3N Itineraries.',
          'Created comprehensive logistical guides answering traveler search intent directly.',
          'Executed contextual in-text linking passing authority from informational blogs to commercial booking pages.'
        ]
      },
      {
        title: 'Technical Optimization & Core Web Vitals',
        details: [
          'Compressed visual assets and deferred heavy travel scripts, elevating Mobile PageSpeed score.',
          'Configured Google Search Console XML sitemaps and resolved indexing exclusions.'
        ]
      }
    ],
    results: [
      {
        metric: 'Google Search Console Clicks',
        value: '+15.33%',
        benchmark: 'Quarter-over-Quarter',
        note: 'Sustained upward trajectory of qualified organic visitors.'
      },
      {
        metric: 'Search Impressions',
        value: '+22.93%',
        benchmark: 'Quarter-over-Quarter',
        note: 'Expanded search footprint across long-tail regional keywords.'
      },
      {
        metric: 'Page 1 Keyword Rankings',
        value: '42+ Keywords',
        benchmark: 'Previous: 14',
        note: 'Dominated top 3 positions for key regional travel route packages.'
      }
    ],
    learnings: [
      'Travelers search for logistics first (permits, cab costs, passes) before choosing an agency; capturing logistical search captures the lead.',
      'Schema markup consistently earns rich snippet FAQs, doubling SERP visual real estate.',
      'Search Console URL inspection data is far more reliable for immediate indexing diagnostics than third-party rank trackers.'
    ],
    techStack: ['Google Search Console', 'GA4', 'Screaming Frog', 'Semrush', 'Yoast SEO', 'MozBar']
  },
  {
    id: 'case-analytics-automation',
    number: 'Case Study 04',
    category: 'Analytics & Automation',
    title: 'Marketing Analytics & Automation – GA4 & Looker Studio',
    subtitle: 'Unified marketing tracking, custom event pipelines, and automated reporting',
    keyMetricLabel: 'Reporting Accuracy & Time Saved',
    keyMetricValue: '100% Attribution · 12+ hrs/wk Saved',
    keyMetricContext: 'Eliminated manual Excel compilation with real-time Looker Studio dashboards',
    objective:
      'Unify fragmented campaign data across Google Ads, Meta Ads, and organic inquiries into an automated, single-source-of-truth reporting suite.',
    challenge:
      'Marketing decisions were slowed by manual weekly spreadsheets; cross-channel UTM parameter inconsistencies led to attribution blind spots and untracked phone calls.',
    strategy: [
      'Standardized UTM tracking taxonomy across every campaign, ad set, and creative variant.',
      'Deployed Google Tag Manager (GTM) custom event listeners for form submissions, click-to-WhatsApp, and telephone dials.',
      'Built interactive multi-page Looker Studio dashboards with automated daily refreshes.',
      'Automated lead routing workflows using webhook connectors into internal CRM tools.'
    ],
    execution: [
      {
        title: 'Measurement Protocol & GTM Container Setup',
        details: [
          'Created trigger tags for form_start, form_submit, and whatsapp_inquiry with dynamic destination variables.',
          'Configured GA4 custom dimensions (destination_inquired, travel_month, lead_tier).',
          'Linked Google Ads and GA4 for predictive conversion modeling and Smart Bidding feedback.'
        ]
      },
      {
        title: 'Executive Looker Studio Dashboard Suite',
        details: [
          'Built executive summary page tracking ROAS, blended CAC, and Inquiry Volume.',
          'Built granular ad-level drilldown page filtering spend vs conversions per destination.',
          'Programmed automated PDF performance summaries delivered to leadership every Monday morning.'
        ]
      }
    ],
    results: [
      {
        metric: 'Manual Reporting Time Saved',
        value: '12+ hrs/week',
        benchmark: 'Previous: 14 hrs manual',
        note: 'Automated data pipelines freed hours for strategic campaign optimization.'
      },
      {
        metric: 'Inquiry Attribution Accuracy',
        value: '99.4%',
        benchmark: 'Previous: ~60%',
        note: 'Full visibility on source, medium, campaign, and keyword for all incoming leads.'
      },
      {
        metric: 'Budget Reallocation Agility',
        value: 'Real-time',
        benchmark: 'Previous: 7-day delay',
        note: 'Enabled same-day budget scaling on outperforming ad groups.'
      }
    ],
    learnings: [
      'Clean GTM event naming conventions from Day 1 prevent costly GA4 data migrations later.',
      'A technical background (MCA/Python/SQL) makes building custom tracking scripts significantly faster and more robust.',
      'Executive dashboards should answer one core question: Which channel produced the lowest cost per verified customer?'
    ],
    techStack: ['Google Tag Manager (GTM)', 'GA4', 'Looker Studio', 'SQL', 'CRM Tools']
  }
];

// Practical Marketing Insights
const insights: InsightArticle[] = [
  {
    id: 'insight-1',
    slug: 'optimizing-meta-ads-lead-quality',
    title: 'Optimizing Meta Ads Lead Quality: Filtering High-Intent Inquiries in 2026',
    readTime: '4 min read',
    category: 'Paid Social & CRO',
    summary:
      'Why generating 500 cheap leads often hurts business more than generating 150 qualified ones—and how to implement intentional friction in Instant Forms.',
    keyTakeaways: [
      'Stop using simple one-click autofill forms; add at least two intentional choice fields.',
      'Verify mobile contacts via WhatsApp input validation to eliminate dead numbers.',
      'Speed-to-lead matters: leads contacted within 15 minutes convert 4x better than those called next day.'
    ],
    contentSections: [
      {
        heading: 'The Cheap Lead Illusion',
        body: 'In performance marketing, low Cost-Per-Lead (CPL) is often celebrated prematurely. When sales teams complain that leads are unreachable or "just browsing," your true customer acquisition cost skyrockets. The root problem is Meta’s Instant Form autofill, which allows casual users to submit without conscious intent.'
      },
      {
        heading: 'Adding Intentional Friction',
        body: 'By introducing a custom qualification question ("When are you planning to travel?" with specific timeframe options and "What is your approximate budget per person?"), you immediately deter passive scrollers while signaling to high-intent buyers that they are receiving personalized service.'
      },
      {
        heading: 'The Resulting Economics',
        body: 'Even if front-end CPL increases from ₹80 to ₹140, lead-to-booking conversion rates routinely leap from 4% to 25%, drastically lowering the true blended CAC and maximizing sales team efficiency.'
      }
    ]
  },
  {
    id: 'insight-2',
    slug: 'ga4-gtm-conversion-tracking-guide',
    title: 'Setting Up Reliable Conversion Tracking with GA4 & Google Tag Manager',
    readTime: '5 min read',
    category: 'Analytics & Tracking',
    summary:
      'A technical walkthrough on avoiding duplicate conversion triggers, capturing WhatsApp clicks, and feeding clean signals back to Google Ads Smart Bidding.',
    keyTakeaways: [
      'Never rely solely on thank-you page URL destination tracking—use GTM custom event triggers.',
      'Track micro-conversions (brochure downloads, WhatsApp clicks) alongside macro-conversions (inquiry submissions).',
      'Leverage Google Ads Enhanced Conversions for resilient first-party data capture.'
    ],
    contentSections: [
      {
        heading: 'The Risk of Flawed Tracking Signals',
        body: 'Smart Bidding algorithms in Google Ads and Meta are only as effective as the data fed into them. If your pixel registers multiple conversions when a user refreshes a confirmation page, the bidding algorithm will optimize for users who refresh pages rather than actual customers.'
      },
      {
        heading: 'GTM Event-Driven Architecture',
        body: 'Utilize a clean dataLayer push upon verified AJAX form validation. Combine this with GTM trigger conditions ensuring the event fires only once per session. For travel businesses, tracking telephone and WhatsApp button clicks with custom parameters provides vital early-funnel intent data.'
      },
      {
        heading: 'The MCA & Technical Advantage',
        body: 'Understanding DOM events, JavaScript variables, and regex patterns allows a digital marketer to troubleshoot complex tracking issues that standard marketers miss, ensuring zero attribution leakage.'
      }
    ]
  },
  {
    id: 'insight-3',
    slug: 'measuring-true-seo-growth-search-console',
    title: 'Measuring True SEO Growth: Beyond Vanity Traffic to Search Console Trends',
    readTime: '4 min read',
    category: 'SEO Strategy',
    summary:
      'How to isolate commercial keyword intent from seasonal traffic spikes and build sustainable topical authority in competitive regional niches.',
    keyTakeaways: [
      'Filter out brand queries in Search Console to understand true organic discovery growth.',
      'Monitor CTR curves for positions 1 through 5 to spot meta description optimization opportunities.',
      'Focus on topical clusters rather than isolated keyword ranking lists.'
    ],
    contentSections: [
      {
        heading: 'Why Total Pageviews Deceive',
        body: 'A single viral informational blog post about weather or permit requirements can send overall traffic soaring by 200%, yet generate zero actual inquiries. Genuine SEO health must be measured by commercial intent queries and conversion page entries.'
      },
      {
        heading: 'Search Console Query Segmentation',
        body: 'Using regex filters in Google Search Console to exclude brand terms reveals how well your website competes for unbranded commercial queries. Tracking click and impression growth on high-intent query modifiers (such as "cost", "itinerary", "packages") is the truest indicator of organic ROI.'
      },
      {
        heading: 'Topical Authority in Action',
        body: 'Search engines reward websites that comprehensively cover an entire destination ecosystem. Creating detailed sub-guides linked back to core package pages signals complete topical depth, lifting the rankings of the entire domain.'
      }
    ]
  }
];

export default function App() {
  // Navigation & UI States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Interactive Modals
  const [activeCaseStudyModal, setActiveCaseStudyModal] = useState<CaseStudy | null>(null);
  const [activeInsightModal, setActiveInsightModal] = useState<InsightArticle | null>(null);
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Bio Copy Feedback State
  const [bioCopied, setBioCopied] = useState(false);

  // Contact Form State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formService, setFormService] = useState('Performance Marketing & Lead Generation');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSending, setFormSending] = useState(false);

  // Copy Bio to Clipboard
  const handleCopyBio = () => {
    const bioText =
      `Reshmi Dey is a Digital Marketing Executive based in Siliguri, India, with a Master of Computer Applications (MCA) degree (83.39%) from University of Kalyani and B.Voc in Software Development (80.67%) from Asutosh College. She specializes in SEO (on-page/off-page & audits), Google Ads, Meta Ads (Facebook & Instagram), GA4 analytics, CRM lead workflows, and CMS maintenance. Contact: reshmi17dey@gmail.com | +91 90642 13107.`;
    navigator.clipboard.writeText(bioText);
    setBioCopied(true);
    setTimeout(() => setBioCopied(false), 3000);
  };

  // Form Submit Handler
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSending(true);
    setTimeout(() => {
      setFormSending(false);
      setFormSubmitted(true);
    }, 900);
  };

  const navItems = [
    { label: '01 Home', href: '#home', id: 'home' },
    { label: '02 About Me', href: '#about', id: 'about' },
    { label: '03 Case Studies', href: '#case-studies', id: 'case-studies' },
    { label: '04 Skills & Certs', href: '#skills', id: 'skills' },
    { label: '05 Insights', href: '#insights', id: 'insights' },
    { label: '06 Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-[#080914] text-slate-100 font-sans selection:bg-rose-500 selection:text-white antialiased overflow-x-hidden">
      {/* Catchy Ambient Neon Lighting Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 -left-20 w-[32rem] h-[32rem] bg-gradient-to-br from-violet-600/25 to-fuchsia-600/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-1/4 -right-32 w-[34rem] h-[34rem] bg-gradient-to-br from-rose-600/20 to-amber-500/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-20 left-1/3 w-[36rem] h-[36rem] bg-gradient-to-tr from-indigo-700/20 via-purple-600/20 to-pink-500/15 rounded-full blur-[160px]" />
      </div>

      {/* ========================================================
          STICKY HEADER / NAVIGATION BAR
      ======================================================== */}
      <header className="sticky top-0 z-40 bg-[#080914]/90 backdrop-blur-xl border-b border-violet-900/30 shadow-lg shadow-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand / Logo */}
            <a href="#home" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 via-fuchsia-500 to-violet-600 flex items-center justify-center text-white font-black font-mono text-base shadow-lg shadow-fuchsia-500/30 group-hover:scale-105 group-hover:rotate-2 transition-all">
                RD
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2 group-hover:text-rose-400 transition-colors">
                  Reshmi Dey
                  <span className="inline-block w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                </span>
                <span className="text-xs font-semibold text-violet-300 font-mono tracking-wider uppercase">
                  Digital Marketing Executive
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1 bg-slate-900/70 p-1.5 rounded-full border border-violet-900/40 shadow-inner">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-rose-500 to-violet-600 text-white shadow-md shadow-fuchsia-500/25'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Header Right Action Items */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => setShowResumeModal(true)}
                className="px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-850 border border-violet-800/40 rounded-xl flex items-center gap-1.5 transition-all shadow-sm hover:border-violet-500/60"
              >
                <FileText className="w-3.5 h-3.5 text-fuchsia-400" />
                <span>Verified Résumé</span>
              </button>
              <a
                href="#contact"
                className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-rose-500 via-fuchsia-600 to-violet-600 hover:from-rose-400 hover:to-violet-500 rounded-xl shadow-lg shadow-fuchsia-500/30 flex items-center gap-1.5 transition-all hover:scale-[1.03] active:scale-[0.98]"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0a0b18]/98 border-b border-violet-900/50 px-4 pt-3 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className="block px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-rose-400 hover:bg-slate-900 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setShowResumeModal(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-fuchsia-400" /> View & Download Résumé
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-xs font-bold text-white bg-gradient-to-r from-rose-500 via-fuchsia-600 to-violet-600 rounded-lg flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" /> Let's Connect
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Layout */}
      <main className="relative z-10">
        {/* ========================================================
            01 HOME / HERO SECTION
        ======================================================== */}
        <section id="home" className="pt-12 sm:pt-20 pb-12 sm:pb-16 border-b border-violet-950/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Core Positioning Copy */}
              <div className="lg:col-span-8 space-y-6">
                {/* Meta Top Tagline */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-950/60 border border-violet-800/60 text-xs font-mono text-violet-300 font-semibold tracking-wider uppercase shadow-inner">
                  <Flame className="w-3.5 h-3.5 text-rose-400 animate-bounce" />
                  <span>RESHMI DEY</span>
                  <span className="text-violet-600">•</span>
                  <span>DIGITAL MARKETING EXECUTIVE</span>
                  <span className="text-violet-600">•</span>
                  <span className="text-slate-400">SILIGURI, WB</span>
                </div>

                {/* Catchy Main Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                  I Turn Digital Campaigns Into{' '}
                  <span className="bg-gradient-to-r from-amber-300 via-rose-400 to-violet-400 bg-clip-text text-transparent drop-shadow-sm">
                    Measurable Growth.
                  </span>
                </h1>

                {/* Subtitle / Introduction matching Resume */}
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                  Digital Marketing Executive with an MCA degree (83.39%) from the University of Kalyani and B.Voc in Software Development (80.67%). I manage high-impact SEO strategies, Google & Meta Ads, CRM lead pipelines, technical SEO audits, and CMS content management to drive qualified customer acquisition.
                </p>

                {/* Specialization Badges based on Resume */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    { label: 'Google Ads & Meta Ads', icon: Target, color: 'text-amber-400 border-amber-500/30' },
                    { label: 'On-Page & Off-Page SEO', icon: Search, color: 'text-emerald-400 border-emerald-500/30' },
                    { label: 'Technical SEO Audits', icon: Zap, color: 'text-rose-400 border-rose-500/30' },
                    { label: 'GA4 & Analytics', icon: BarChart3, color: 'text-violet-400 border-violet-500/30' },
                    { label: 'CRM & Lead Workflows', icon: TrendingUp, color: 'text-sky-400 border-sky-500/30' },
                    { label: 'Python & SQL Tech Stack', icon: Code2, color: 'text-pink-400 border-pink-500/30' },
                  ].map((skill, i) => {
                    const IconComponent = skill.icon;
                    return (
                      <span
                        key={i}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border ${skill.color} text-xs font-semibold text-slate-200 shadow-sm hover:scale-105 transition-transform`}
                      >
                        <IconComponent className="w-3.5 h-3.5" />
                        {skill.label}
                      </span>
                    );
                  })}
                </div>

                {/* Primary CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <a
                    href="#case-studies"
                    className="px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-rose-500 via-fuchsia-600 to-violet-600 hover:from-rose-400 hover:to-violet-500 rounded-xl shadow-xl shadow-fuchsia-500/25 flex items-center gap-2 transition-all hover:scale-[1.03] active:scale-[0.98]"
                  >
                    <span>View Case Studies</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={handleCopyBio}
                    className="px-5 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-violet-800/50 rounded-xl flex items-center gap-2 transition-all shadow-sm"
                  >
                    {bioCopied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">Bio Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-fuchsia-400" />
                        <span>Copy Professional Bio</span>
                      </>
                    )}
                  </button>

                  <a
                    href="tel:+919064213107"
                    className="px-5 py-3.5 text-sm font-semibold text-slate-300 hover:text-rose-400 flex items-center gap-1.5 transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-rose-400" />
                    <span>+91 90642 13107</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Catchy Profile Snapshot Card */}
              <div className="lg:col-span-4">
                <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 via-[#101126]/90 to-slate-900/90 p-6 border border-violet-700/40 shadow-2xl shadow-violet-950/40 backdrop-blur-xl">
                  {/* Subtle top decoration */}
                  <div className="flex items-center justify-between border-b border-violet-900/40 pb-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                        Active & Available
                      </span>
                    </div>
                    <span className="text-xs font-mono text-violet-300">Siliguri, India</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h2 className="text-xl font-bold text-white tracking-tight">Reshmi Dey</h2>
                      <p className="text-xs font-medium text-rose-300 mt-0.5">
                        Digital Marketing Executive · Performance & SEO
                      </p>
                    </div>

                    <div className="text-xs text-slate-300 space-y-2.5 leading-relaxed bg-[#0b0c1b]/80 p-3.5 rounded-xl border border-violet-900/30">
                      <div className="flex items-start gap-2">
                        <Briefcase className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-200">Current Role</p>
                          <p className="text-slate-400">Digital Marketing Executive · Clubside Tours & Travels (Oct 2024 – Present)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <GraduationCap className="w-4 h-4 text-fuchsia-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-200">Postgraduate Degree</p>
                          <p className="text-slate-400">MCA · University of Kalyani (83.39%)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-200">Key Distinction</p>
                          <p className="text-slate-400">Ranked 118 in WBJECA 2020 State Entrance</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-200">Location</p>
                          <p className="text-slate-400">47-Hill Cart Road, Decot Market, Siliguri</p>
                        </div>
                      </div>
                    </div>

                    {/* Quick Direct Links */}
                    <div className="pt-2 flex flex-col gap-2 text-xs font-medium border-t border-violet-900/40">
                      <div className="flex items-center justify-between">
                        <a
                          href="mailto:reshmi17dey@gmail.com"
                          className="text-slate-300 hover:text-rose-400 flex items-center gap-1.5 transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5 text-rose-400" />
                          <span>reshmi17dey@gmail.com</span>
                        </a>
                        <a
                          href="tel:+919064213107"
                          className="text-slate-300 hover:text-amber-400 flex items-center gap-1 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-amber-400" />
                          <span>+91 90642 13107</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================
                QUICK RESULTS SECTION (VERIFIED HISTORICAL PERFORMANCE)
            ======================================================== */}
            <div className="mt-14 pt-10 border-t border-violet-950/60">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-rose-400 font-semibold mb-1">
                    Verifiable Campaign Impact
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Documented Performance & Growth Benchmarks
                  </h2>
                </div>
                <p className="text-xs text-slate-400 mt-2 md:mt-0 max-w-md">
                  Historical campaign metrics verified across Google Ads account reports, Meta Business Manager, and Google Search Console.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {/* Metric 1 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#101126]/80 border border-violet-900/40 hover:border-rose-500/60 transition-all group shadow-lg">
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight group-hover:text-rose-300 transition-colors">
                      13.71%
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-400 border border-rose-500/30">
                      Peak
                    </span>
                  </div>
                  <div className="text-sm font-bold text-slate-200 mt-2">Conversion Rate</div>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">
                    Historical Google Ads search campaign result on intent-driven enquiry forms.
                  </p>
                </div>

                {/* Metric 2 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#101126]/80 border border-violet-900/40 hover:border-amber-500/60 transition-all group shadow-lg">
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl sm:text-4xl font-extrabold text-amber-300 font-mono tracking-tight">
                      +22.93%
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      Organic
                    </span>
                  </div>
                  <div className="text-sm font-bold text-slate-200 mt-2">Search Impressions</div>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">
                    Google Search Console organic footprint growth over quarterly optimization cycle.
                  </p>
                </div>

                {/* Metric 3 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#101126]/80 border border-violet-900/40 hover:border-fuchsia-500/60 transition-all group shadow-lg">
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl sm:text-4xl font-extrabold text-fuchsia-400 font-mono tracking-tight">
                      +15.33%
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-fuchsia-500/15 text-fuchsia-400 border border-fuchsia-500/30">
                      Clicks
                    </span>
                  </div>
                  <div className="text-sm font-bold text-slate-200 mt-2">Organic Clicks</div>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">
                    Net increase in qualified organic search click-throughs captured via topical content silos.
                  </p>
                </div>

                {/* Metric 4 */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#101126]/80 border border-violet-900/40 hover:border-violet-500/60 transition-all group shadow-lg">
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl sm:text-4xl font-extrabold text-violet-300 font-mono tracking-tight group-hover:text-white transition-colors">
                      4.10%
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/30">
                      ₹55 CPC
                    </span>
                  </div>
                  <div className="text-sm font-bold text-slate-200 mt-2">Google Ads CTR</div>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">
                    Historical travel PPC campaign average with strict negative keyword and SKAG structuring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            02 ABOUT ME & WORK EXPERIENCE (EXACT RESUME DETAILS)
        ======================================================== */}
        <section id="about" className="py-16 sm:py-20 border-b border-violet-950/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs font-mono uppercase tracking-widest text-rose-400 font-semibold mb-2">
              02 About Me & Experience
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Bridging Computer Science Engineering & Digital Marketing
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
              With a background spanning software engineering (ASP.NET, C#, Python, SQL) and performance marketing, I build and optimize campaigns backed by technical precision.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
              {/* Left Column: Personal Narrative & Research */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    I hold a <strong>Master of Computer Application (MCA)</strong> degree from the <strong>University of Kalyani</strong> (83.39%) and a <strong>Bachelor of Vocation in Software Development</strong> from <strong>Asutosh College, University of Calcutta</strong> (80.67%). I earned state-level recognition with <strong>Rank 118 in WBJECA 2020</strong>.
                  </p>
                  <p>
                    In my current role as <strong>Digital Marketing Executive</strong> at <strong>Clubside Tours & Travels</strong> (October 2024 – Present), I manage Search Engine Optimization (SEO) strategies—including both on-page and off-page optimization, regular technical SEO audits to enhance search engine rankings, Google Ads and Meta Ads (Facebook & Instagram), CMS maintenance, social media growth, and CRM lead management workflows.
                  </p>
                  <p>
                    Prior to this, I worked as a <strong>Digital Marketer</strong> at <strong>Digital Get Way LLP</strong>, specializing in Google My Business (GMB) optimization and local visibility. My technical foundation was built through roles as a <strong>Junior Software Developer</strong> at <strong>Zediant Technologies Pvt. Ltd.</strong> (ASP.NET, ADO.NET, JavaScript) and <strong>Trainee Software Consultant</strong> at <strong>Techno Developers Group</strong> (C# & SQL database solutions).
                  </p>
                </div>

                {/* Research Experience Highlight */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-violet-950/40 to-slate-900 border border-violet-800/40">
                  <div className="flex items-center gap-2 text-xs font-mono text-fuchsia-400 font-bold uppercase">
                    <Terminal className="w-4 h-4 text-fuchsia-400" />
                    <span>Academic Research Experience</span>
                  </div>
                  <div className="text-sm font-bold text-white mt-1">
                    Analysis of Different Virtual Machine (VM) Allocation Policies Based on VM Consolidation in Green Cloud Computing
                  </div>
                  <div className="text-xs text-slate-400 mt-1 flex flex-wrap gap-x-4 gap-y-1">
                    <span><strong>Supervisor:</strong> Dr. Riman Mandal</span>
                    <span><strong>Institution:</strong> University of Kalyani</span>
                    <span><strong>Duration:</strong> August 2021 – July 2022</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Designed and implemented algorithms for VM consolidation using Java, Cloudsim, and Cloud Computing frameworks to optimize green cloud energy efficiency.
                  </p>
                </div>

                {/* Strategic Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-violet-900/40 hover:border-amber-500/40 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 mb-2">
                      <Target className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-bold text-white">Paid Advertising</div>
                    <p className="text-xs text-slate-400 mt-1">
                      Google Ads, Meta Ads (Facebook & IG), CRM lead tracking.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-violet-900/40 hover:border-rose-500/40 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-rose-500/15 flex items-center justify-center text-rose-400 mb-2">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-bold text-white">SEO & Audits</div>
                    <p className="text-xs text-slate-400 mt-1">
                      On-page/off-page, Screaming Frog audits, Semrush, Yoast.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-violet-900/40 hover:border-fuchsia-500/40 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-fuchsia-500/15 flex items-center justify-center text-fuchsia-400 mb-2">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-bold text-white">MarTech & Code</div>
                    <p className="text-xs text-slate-400 mt-1">
                      Python, SQL, CMS management, GA4, GMB optimization.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Complete Verified Work Experience Timeline */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#101126]/80 border border-violet-800/40 space-y-6 shadow-xl">
                  <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-violet-900/40 pb-3">
                    <Briefcase className="w-4 h-4 text-rose-400" />
                    Full Employment Timeline
                  </h3>

                  <div className="space-y-6">
                    {/* Role 1: Clubside Tours */}
                    <div className="relative pl-6 border-l-2 border-rose-500/60 space-y-1">
                      <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-rose-500 animate-pulse" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white">Clubside Tours & Travels</span>
                        <span className="text-xs font-mono text-rose-400 font-semibold">Oct 2024 – Present</span>
                      </div>
                      <div className="text-xs font-medium text-violet-200">
                        Digital Marketing Executive · Siliguri, West Bengal
                      </div>
                      <ul className="text-xs text-slate-400 pt-1 space-y-1 list-disc pl-3">
                        <li>Managed SEO strategies (on-page/off-page) & regular technical audits.</li>
                        <li>Executed Google Ads and Meta Ads (Facebook & Instagram).</li>
                        <li>Maintained website content via CMS and managed social channels.</li>
                        <li>Utilized CRM tools to streamline lead management & communication.</li>
                      </ul>
                    </div>

                    {/* Role 2: Digital Get Way LLP */}
                    <div className="relative pl-6 border-l-2 border-violet-800 space-y-1">
                      <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-violet-600" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white">Digital Get Way LLP</span>
                        <span className="text-xs font-mono text-slate-400">Mar 2024 – Oct 2024</span>
                      </div>
                      <div className="text-xs font-medium text-violet-200">
                        Digital Marketer · Siliguri, West Bengal
                      </div>
                      <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                        Specialized in Google My Business (GMB) optimization and local search rank management.
                      </p>
                    </div>

                    {/* Role 3: Zediant Technologies */}
                    <div className="relative pl-6 border-l-2 border-violet-800/80 space-y-1">
                      <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-violet-700" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white">Zediant Technologies Pvt. Ltd.</span>
                        <span className="text-xs font-mono text-slate-400">May 2023 – Aug 2023</span>
                      </div>
                      <div className="text-xs font-medium text-violet-200">
                        Junior Software Developer · Kolkata, West Bengal
                      </div>
                      <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                        Extensive software development utilizing ASP.NET, ADO.NET, and JavaScript frameworks.
                      </p>
                    </div>

                    {/* Role 4: Techno Developers Group */}
                    <div className="relative pl-6 border-l-2 border-violet-800/60 space-y-1">
                      <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-violet-800" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white">Techno Developers Group</span>
                        <span className="text-xs font-mono text-slate-400">Dec 2022 – Mar 2023</span>
                      </div>
                      <div className="text-xs font-medium text-violet-200">
                        Trainee Software Consultant · Siliguri, West Bengal
                      </div>
                      <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                        Customer technical query support and software solutions using C# and SQL database management.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-violet-900/40 pt-3 pb-3">
                    <GraduationCap className="w-4 h-4 text-fuchsia-400" />
                    Verified Academic Qualifications
                  </h3>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-[#0b0c1b]/80 border border-violet-900/40 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-white">Master of Computer Application (MCA)</div>
                        <div className="text-xs text-fuchsia-300 font-medium">University of Kalyani (Feb 2021 – Aug 2022)</div>
                      </div>
                      <span className="text-xs font-mono font-extrabold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/30">
                        83.39%
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0b0c1b]/80 border border-violet-900/40 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-white">B.Voc (Software Development)</div>
                        <div className="text-xs text-slate-300 font-medium">Asutosh College, Calcutta Univ. (2017 – 2020)</div>
                      </div>
                      <span className="text-xs font-mono font-extrabold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/30">
                        80.67%
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#0b0c1b]/80 border border-violet-900/40 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-slate-200">Class XII (79%) & Class X (84.57%)</div>
                        <div className="text-[11px] text-slate-400">W.B.C.H.S.E. & W.B.B.S.E., Siliguri</div>
                      </div>
                      <span className="text-xs font-mono text-violet-300 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">
                        Schooling
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            03 DETAILED CASE STUDIES (THE MOST IMPORTANT SECTION)
        ======================================================== */}
        <section id="case-studies" className="py-16 sm:py-20 border-b border-violet-950/60 bg-[#0a0b1a]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-rose-400 font-semibold mb-2">
                  03 In-Depth Case Studies
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  Real Challenges. Strategic Execution. Measurable Outcomes.
                </h2>
                <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                  Explore how structured campaign architecture, intentional qualification forms, and rigorous tracking solve genuine commercial problems.
                </p>
              </div>
              <div className="text-xs font-mono text-violet-300 mt-3 md:mt-0 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
                Click any case study card for full 6-step audit
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  onClick={() => setActiveCaseStudyModal(study)}
                  className="rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#101126]/80 border border-violet-900/40 hover:border-rose-500/60 p-6 sm:p-8 flex flex-col justify-between transition-all hover:shadow-2xl hover:shadow-rose-500/10 cursor-pointer group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-fuchsia-600/10 to-rose-600/5 rounded-full blur-2xl group-hover:from-fuchsia-600/20 transition-colors pointer-events-none" />

                  <div className="space-y-4">
                    {/* Top Row: Case number & Category Badge */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-rose-400 tracking-wider">
                        {study.number}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900 text-violet-200 border border-violet-800/50">
                        {study.category}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-rose-300 transition-colors tracking-tight">
                        {study.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1 line-clamp-2">
                        {study.subtitle}
                      </p>
                    </div>

                    {/* Key Metric Callout Box */}
                    <div className="p-4 rounded-xl bg-[#0b0c1b]/90 border border-violet-900/40 flex items-center justify-between">
                      <div>
                        <div className="text-xs text-slate-400 font-medium">{study.keyMetricLabel}</div>
                        <div className="text-lg sm:text-xl font-mono font-extrabold text-amber-300">
                          {study.keyMetricValue}
                        </div>
                      </div>
                      <div className="text-right text-xs text-slate-400 max-w-[140px] leading-tight">
                        {study.keyMetricContext}
                      </div>
                    </div>

                    {/* Strategy highlights preview */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-xs font-mono text-violet-300 uppercase tracking-wider">
                        Core Strategy
                      </div>
                      <ul className="text-xs text-slate-300 space-y-1">
                        {study.strategy.slice(0, 2).map((s, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer Action Row */}
                  <div className="pt-6 mt-6 border-t border-violet-900/40 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {study.techStack.slice(0, 3).map((tool, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#090a18] text-slate-300 border border-violet-900/30"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="text-xs font-bold text-rose-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>Full Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            04 SKILLS & TECHNICAL STACK (DIRECTLY FROM RESUME)
        ======================================================== */}
        <section id="skills" className="py-16 sm:py-20 border-b border-violet-950/60 bg-[#0a0b1a]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs font-mono uppercase tracking-widest text-rose-400 font-semibold mb-2">
              04 Technical Skills & Stack
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Categorized Tools & Technical Capabilities
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              From advanced SEO crawlers to programming languages and analytics suites, exactly as documented on my résumé.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {/* Pillar 1: SEO Tools */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#101126]/80 border border-violet-900/40 space-y-4 hover:border-emerald-500/50 transition-colors shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">SEO & Marketing Tools</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Audits, rank tracking, technical keyword research & on-page tools.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {[
                    'Google Keyword Planner',
                    'Semrush & Ubersuggest',
                    'Google Search Console',
                    'Google Trends',
                    'Screaming Frog SEO Spider',
                    'Yoast SEO & MozBar'
                  ].map((s, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pillar 2: Analytics & Management */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#101126]/80 border border-violet-900/40 space-y-4 hover:border-violet-500/50 transition-colors shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center text-violet-400">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Analytics & Management</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Performance measurement, social scheduling & email automation.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {[
                    'Google Analytics (GA4)',
                    'CRM Lead Management Tools',
                    'Hootsuite & Buffer',
                    'Braveo Email Marketing',
                    'CMS Maintenance & Updates',
                    'Looker Studio Dashboards'
                  ].map((s, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pillar 3: Advertising & Performance */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#101126]/80 border border-violet-900/40 space-y-4 hover:border-amber-500/50 transition-colors shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Paid Advertising & GMB</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Multi-channel PPC advertising, local SEO, and audience engagement.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {[
                    'Google Ads (Search & Display)',
                    'Meta Ads (Facebook & Instagram)',
                    'Google My Business (GMB)',
                    'Lead Form Qualification',
                    'Audience Targeting & Retargeting',
                    'Social Media Growth Tracking'
                  ].map((s, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pillar 4: Programming & Tech */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#101126]/80 border border-violet-900/40 space-y-4 hover:border-fuchsia-500/50 transition-colors shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-fuchsia-500/15 flex items-center justify-center text-fuchsia-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Programming & Design</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Software engineering foundation, database queries, and design.
                  </p>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  {[
                    'Python & C Programming',
                    'SQL Database Management',
                    'C# & ASP.NET / ADO.NET',
                    'JavaScript Web Applications',
                    'Canva (Marketing Graphics)',
                    'ChatGPT (AI Marketing Workflow)'
                  ].map((s, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Academic Achievement & State Ranking Row */}
            <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#101126]/80 border border-violet-800/40 shadow-xl">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                Key Academic & Industry Credentials
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-[#0b0c1b] border border-violet-900/40 hover:border-amber-500/40 transition-colors">
                  <div className="text-xs font-mono text-amber-300 font-semibold">State Rank Achievement</div>
                  <div className="text-sm font-bold text-white mt-1">Rank 118 in WBJECA 2020</div>
                  <p className="text-xs text-slate-400 mt-0.5">West Bengal Joint Entrance for MCA</p>
                </div>

                <div className="p-4 rounded-xl bg-[#0b0c1b] border border-violet-900/40 hover:border-emerald-500/40 transition-colors">
                  <div className="text-xs font-mono text-emerald-400 font-semibold">Postgraduate MCA</div>
                  <div className="text-sm font-bold text-white mt-1">University of Kalyani</div>
                  <p className="text-xs text-slate-400 mt-0.5">Grade: 83.39% Distinction</p>
                </div>

                <div className="p-4 rounded-xl bg-[#0b0c1b] border border-violet-900/40 hover:border-violet-500/40 transition-colors">
                  <div className="text-xs font-mono text-violet-300 font-semibold">Undergraduate B.Voc</div>
                  <div className="text-sm font-bold text-white mt-1">Asutosh College (Calcutta Univ.)</div>
                  <p className="text-xs text-slate-400 mt-0.5">Grade: 80.67% (Software Dev)</p>
                </div>

                <div className="p-4 rounded-xl bg-[#0b0c1b] border border-violet-900/40 hover:border-rose-500/40 transition-colors">
                  <div className="text-xs font-mono text-rose-400 font-semibold">Technical Certifications</div>
                  <div className="text-sm font-bold text-white mt-1">Google Ads & GA4 Certified</div>
                  <p className="text-xs text-slate-400 mt-0.5">Skillshop & Udemy Verified</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            05 INSIGHTS & PRACTICAL MARKETING ARTICLES
        ======================================================== */}
        <section id="insights" className="py-16 sm:py-20 border-b border-violet-950/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-rose-400 font-semibold mb-2">
                  05 Practical Insights
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  Marketing Methodology & Tactical Lessons
                </h2>
                <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                  Short practical articles detailing how to solve common ad spend leaks, tracking mismatches, and SEO measurement blind spots.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {insights.map((article) => (
                <div
                  key={article.id}
                  onClick={() => setActiveInsightModal(article)}
                  className="rounded-2xl bg-gradient-to-b from-slate-900/80 to-[#101126]/80 border border-violet-900/40 hover:border-rose-500/50 p-6 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-500/10 cursor-pointer group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-rose-400 font-semibold">{article.category}</span>
                      <span className="text-slate-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-rose-300 transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>

                    <div className="pt-2 space-y-1.5 border-t border-violet-900/40">
                      <div className="text-[11px] font-mono text-violet-300 uppercase tracking-wider">
                        Key Takeaway
                      </div>
                      <p className="text-xs text-slate-300 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{article.keyTakeaways[0]}</span>
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-6 border-t border-violet-900/40 flex items-center justify-between text-xs font-bold text-rose-400 group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            06 CONTACT & ENQUIRY SECTION (EXACT RESUME DETAILS)
        ======================================================== */}
        <section id="contact" className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Direct Contact Info */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-rose-400 font-semibold mb-2">
                    06 Let's Connect
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                    Ready to Scale Your Digital Growth?
                  </h2>
                  <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
                    Whether you are looking to hire a data-driven Digital Marketing Executive, audit an underperforming Google Ads or Meta Ads campaign, or discuss technical SEO—feel free to reach out directly.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <a
                    href="mailto:reshmi17dey@gmail.com"
                    className="p-4 rounded-xl bg-slate-900/90 border border-violet-900/40 flex items-center gap-4 hover:border-rose-500/50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-rose-500/15 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono">Email Address</div>
                      <div className="text-sm font-bold text-white group-hover:text-rose-300 transition-colors">
                        reshmi17dey@gmail.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+919064213107"
                    className="p-4 rounded-xl bg-slate-900/90 border border-violet-900/40 flex items-center gap-4 hover:border-amber-500/50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono">Mobile / WhatsApp</div>
                      <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                        +91 90642 13107
                      </div>
                    </div>
                  </a>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-violet-900/40 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-mono">Official Residential Address</div>
                      <div className="text-xs font-semibold text-white leading-snug">
                        47-Hill Cart Road, Decot Market, Siliguri, Darjeeling, West Bengal
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-violet-950/60 via-slate-900 to-rose-950/40 border border-violet-750/40 shadow-xl">
                  <div className="text-xs font-bold text-rose-300 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-rose-400" />
                    Verified Résumé Document
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    View my full educational history, software development experience, research paper, and technical tools in the interactive viewer.
                  </p>
                  <button
                    onClick={() => setShowResumeModal(true)}
                    className="mt-3 px-4 py-2 rounded-xl bg-gradient-to-r from-rose-500 via-fuchsia-600 to-violet-600 text-white font-bold text-xs flex items-center gap-1.5 hover:opacity-90 transition-opacity shadow-md shadow-fuchsia-500/25"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Verified Résumé (Full 2 Pages)</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Catchy Enquiry Form */}
              <div className="lg:col-span-7">
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#101126]/90 border border-violet-800/40 shadow-2xl backdrop-blur-sm relative">
                  <div className="text-base font-bold text-white mb-1">Send a Direct Project Message</div>
                  <p className="text-xs text-slate-400 mb-6">
                    Inquiries are checked daily. I respond within 24 hours.
                  </p>

                  {formSubmitted ? (
                    <div className="p-8 rounded-xl bg-violet-950/50 border border-rose-500/40 text-center space-y-4">
                      <div className="w-12 h-12 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-white">Message Received!</h4>
                      <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out, <span className="font-semibold text-rose-300">{formName}</span>. Your inquiry regarding <span className="font-semibold text-white">{formService}</span> has been logged. I will reply to <span className="font-semibold text-rose-300">{formEmail}</span> promptly.
                      </p>
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormName('');
                          setFormEmail('');
                          setFormMessage('');
                        }}
                        className="px-4 py-2 text-xs font-semibold text-rose-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-300 mb-1">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rahul Sharma"
                            value={formName}
                            onChange={(e) => setFormName(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0c1b] border border-violet-900/50 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-300 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="name@company.com"
                            value={formEmail}
                            onChange={(e) => setFormEmail(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0c1b] border border-violet-900/50 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Primary Topic of Inquiry
                        </label>
                        <select
                          value={formService}
                          onChange={(e) => setFormService(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0c1b] border border-violet-900/50 text-xs text-white focus:outline-none focus:border-rose-500 transition-colors"
                        >
                          <option value="Performance Marketing & Lead Generation">
                            Performance Marketing & Lead Generation (Google/Meta Ads)
                          </option>
                          <option value="SEO & Technical Website Audits">
                            SEO Strategies & Technical Website Audits (Screaming Frog)
                          </option>
                          <option value="Google My Business (GMB) Local Optimization">
                            Google My Business (GMB) Local Optimization
                          </option>
                          <option value="GA4, GTM & Analytics Reporting Setup">
                            GA4, GTM & Analytics Reporting Setup
                          </option>
                          <option value="Digital Marketing Executive Job Opportunity">
                            Digital Marketing Executive Job Opportunity
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Project Details or Message *
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Briefly describe your objectives, current monthly spend or goals..."
                          value={formMessage}
                          onChange={(e) => setFormMessage(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-[#0b0c1b] border border-violet-900/50 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={formSending}
                        className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-rose-500 via-fuchsia-600 to-violet-600 text-white font-bold text-xs shadow-xl shadow-fuchsia-500/25 hover:from-rose-400 hover:to-violet-500 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                      >
                        {formSending ? (
                          <>
                            <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Processing Transmission...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================
          CLEAN FOOTER
      ======================================================== */}
      <footer className="border-t border-violet-950/60 bg-[#070813] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-rose-500 to-violet-600 text-white font-black font-mono flex items-center justify-center text-xs">
              RD
            </div>
            <div>
              <div className="text-sm font-bold text-white">Reshmi Dey</div>
              <div className="text-xs text-slate-400">Digital Marketing Executive · Siliguri, India</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <a href="#home" className="hover:text-rose-400 transition-colors">Home</a>
            <span>•</span>
            <a href="#about" className="hover:text-rose-400 transition-colors">About</a>
            <span>•</span>
            <a href="#case-studies" className="hover:text-rose-400 transition-colors">Case Studies</a>
            <span>•</span>
            <a href="#skills" className="hover:text-rose-400 transition-colors">Skills</a>
            <span>•</span>
            <a href="#insights" className="hover:text-rose-400 transition-colors">Insights</a>
            <span>•</span>
            <a href="#contact" className="hover:text-rose-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
            <a href="mailto:reshmi17dey@gmail.com" className="hover:text-white transition-colors">
              reshmi17dey@gmail.com
            </a>
            <span>•</span>
            <a href="tel:+919064213107" className="hover:text-white transition-colors">
              +91 90642 13107
            </a>
          </div>
        </div>
      </footer>

      {/* ========================================================
          MODAL 1: DETAILED 6-STEP CASE STUDY AUDIT
      ======================================================== */}
      {activeCaseStudyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080914]/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0e0f22] border border-violet-800/60 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            <button
              onClick={() => setActiveCaseStudyModal(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white transition-colors border border-violet-900/40"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-rose-400 font-bold">
                <span>{activeCaseStudyModal.number}</span>
                <span>•</span>
                <span>{activeCaseStudyModal.category}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                {activeCaseStudyModal.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {activeCaseStudyModal.subtitle}
              </p>
            </div>

            {/* Key Metric Banner */}
            <div className="p-4 rounded-xl bg-[#090a18] border border-violet-900/40 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-slate-400">Primary Performance Benchmark</div>
                <div className="text-lg font-mono font-extrabold text-amber-300">
                  {activeCaseStudyModal.keyMetricValue}
                </div>
              </div>
              <div className="text-xs text-slate-400 max-w-xs text-right">
                {activeCaseStudyModal.keyMetricContext}
              </div>
            </div>

            {/* 6-Part Framework Breakdown */}
            <div className="space-y-5 text-xs text-slate-300 leading-relaxed">
              {/* 1. Objective */}
              <div className="p-4 rounded-xl bg-[#090a18]/70 border border-violet-900/30 space-y-1">
                <span className="font-bold font-mono uppercase tracking-wider text-[11px] text-fuchsia-400">
                  1. Business Objective
                </span>
                <p className="pt-0.5">{activeCaseStudyModal.objective}</p>
              </div>

              {/* 2. Challenge */}
              <div className="p-4 rounded-xl bg-[#090a18]/70 border border-violet-900/30 space-y-1">
                <span className="font-bold font-mono uppercase tracking-wider text-[11px] text-rose-400">
                  2. The Challenge
                </span>
                <p className="pt-0.5">{activeCaseStudyModal.challenge}</p>
              </div>

              {/* 3. Strategy */}
              <div className="p-4 rounded-xl bg-[#090a18]/70 border border-violet-900/30 space-y-2">
                <span className="font-bold font-mono uppercase tracking-wider text-[11px] text-amber-400">
                  3. Strategy & Hypotheses
                </span>
                <ul className="space-y-1.5 list-disc pl-4">
                  {activeCaseStudyModal.strategy.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* 4. Execution */}
              <div className="p-4 rounded-xl bg-[#090a18]/70 border border-violet-900/30 space-y-3">
                <span className="font-bold font-mono uppercase tracking-wider text-[11px] text-violet-400">
                  4. Tactical Execution
                </span>
                {activeCaseStudyModal.execution.map((block, i) => (
                  <div key={i} className="space-y-1">
                    <div className="font-semibold text-slate-200">{block.title}:</div>
                    <ul className="space-y-1 list-disc pl-4 text-slate-400">
                      {block.details.map((d, dIdx) => (
                        <li key={dIdx}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* 5. Results */}
              <div className="p-4 rounded-xl bg-[#090a18]/70 border border-violet-900/30 space-y-3">
                <span className="font-bold font-mono uppercase tracking-wider text-[11px] text-emerald-400">
                  5. Verifiable Results & Metrics
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  {activeCaseStudyModal.results.map((r, i) => (
                    <div key={i} className="p-3 rounded-lg bg-[#0b0c1b] border border-violet-900/40">
                      <div className="text-[11px] text-slate-400">{r.metric}</div>
                      <div className="text-base font-extrabold font-mono text-amber-300 mt-0.5">
                        {r.value}
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">{r.benchmark}</div>
                      <div className="text-[11px] text-slate-400 mt-1 leading-snug">{r.note}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 6. Learnings */}
              <div className="p-4 rounded-xl bg-[#090a18]/70 border border-violet-900/30 space-y-2">
                <span className="font-bold font-mono uppercase tracking-wider text-[11px] text-pink-400">
                  6. Strategic Learnings & Next Steps
                </span>
                <ul className="space-y-1.5 list-disc pl-4 text-slate-300">
                  {activeCaseStudyModal.learnings.map((l, i) => (
                    <li key={i}>{l}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack Footer */}
            <div className="pt-4 border-t border-violet-900/40 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {activeCaseStudyModal.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-violet-900/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setActiveCaseStudyModal(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-rose-500 to-violet-600 rounded-lg transition-opacity hover:opacity-90"
              >
                Close Audit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL 2: INSIGHT ARTICLE READER
      ======================================================== */}
      {activeInsightModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080914]/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0e0f22] border border-violet-800/60 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            <button
              onClick={() => setActiveInsightModal(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white transition-colors border border-violet-900/40"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-rose-400 font-bold">
                <span>{activeInsightModal.category}</span>
                <span>•</span>
                <span>{activeInsightModal.readTime}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                {activeInsightModal.title}
              </h3>
            </div>

            <div className="p-4 rounded-xl bg-[#090a18] border border-violet-900/40 space-y-2">
              <div className="text-xs font-mono text-fuchsia-400 font-semibold uppercase">
                Core Takeaways for Digital Teams
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                {activeInsightModal.keyTakeaways.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeInsightModal.contentSections.map((sec, i) => (
                <div key={i} className="space-y-1.5">
                  <h4 className="text-sm font-bold text-white">{sec.heading}</h4>
                  <p className="text-slate-400">{sec.body}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-violet-900/40 flex justify-end">
              <button
                onClick={() => setActiveInsightModal(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-rose-500 to-violet-600 rounded-lg hover:opacity-90 transition-opacity"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL 3: EXACT 2-PAGE VERIFIED RÉSUMÉ VIEWER
      ======================================================== */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080914]/90 backdrop-blur-md">
          <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#0d0e1f] border border-violet-750/70 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8 text-slate-200">
            {/* Modal Close Button */}
            <button
              onClick={() => setShowResumeModal(false)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white transition-colors border border-violet-900/40"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Resume Header */}
            <div className="border-b border-violet-900/50 pb-6 text-center space-y-2">
              <h2 className="text-3xl font-black text-white tracking-wider uppercase font-serif">
                RESHMI DEY
              </h2>
              <div className="text-xs text-slate-300 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  47-Hill Cart Road, Decot Market, Siliguri, Darjeeling, West Bengal
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  +91 90642 13107
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-rose-400" />
                  reshmi17dey@gmail.com
                </span>
              </div>
            </div>

            {/* Section 1: Education */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-rose-400 border-b border-violet-900/40 pb-1.5 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                EDUCATION
              </h3>
              <div className="space-y-3.5 text-xs">
                {/* MCA */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between">
                  <div>
                    <div className="font-bold text-white text-sm">Master of Computer Application (MCA)</div>
                    <div className="text-slate-400">University of Kalyani, Kalyani, West Bengal</div>
                    <div className="text-amber-300 font-mono font-semibold">Percentage: 83.39%</div>
                  </div>
                  <div className="font-mono text-slate-400 text-xs sm:text-right mt-1 sm:mt-0">
                    February 2021 – August 2022
                  </div>
                </div>

                {/* B.Voc */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between">
                  <div>
                    <div className="font-bold text-white text-sm">Bachelor of Vocation (Software Development)</div>
                    <div className="text-slate-400">Asutosh College (University of Calcutta), Kolkata, West Bengal</div>
                    <div className="text-emerald-400 font-mono font-semibold">Percentage: 80.67%</div>
                  </div>
                  <div className="font-mono text-slate-400 text-xs sm:text-right mt-1 sm:mt-0">
                    June 2017 – September 2020
                  </div>
                </div>

                {/* Class XII */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between">
                  <div>
                    <div className="font-bold text-white">Class XII</div>
                    <div className="text-slate-400">W.B.C.H.S.E., Siliguri, West Bengal · <span className="text-slate-300">Percentage: 79%</span></div>
                  </div>
                  <div className="font-mono text-slate-400 text-xs sm:text-right">
                    April 2016 – May 2017
                  </div>
                </div>

                {/* Class X */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between">
                  <div>
                    <div className="font-bold text-white">Class X</div>
                    <div className="text-slate-400">W.B.B.S.E, Siliguri, West Bengal · <span className="text-slate-300">Percentage: 84.57%</span></div>
                  </div>
                  <div className="font-mono text-slate-400 text-xs sm:text-right">
                    March 2014 – May 2015
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Technical Skills */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-rose-400 border-b border-violet-900/40 pb-1.5 flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                TECHNICAL SKILLS
              </h3>
              <div className="text-xs space-y-2 bg-[#080916] p-4 rounded-xl border border-violet-900/40">
                <p>
                  <strong className="text-white">Programming Languages:</strong> Python, C, C#, JavaScript, SQL
                </p>
                <p>
                  <strong className="text-white">SEO and Marketing Tools:</strong> Google Keyword Planner, Ubersuggest, Semrush, Google Search Console, Google Trends, Screaming Frog, Yoast SEO, MozBar
                </p>
                <p>
                  <strong className="text-white">Analytics and Management Tools:</strong> Google Analytics, Hootsuite, Buffer, Braveo Email Marketing, CRM Lead Management
                </p>
                <p>
                  <strong className="text-white">Design and Content Tools:</strong> Canva, ChatGPT, CMS Content Management
                </p>
              </div>
            </div>

            {/* Section 3: Work Experience */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-rose-400 border-b border-violet-900/40 pb-1.5 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                WORK EXPERIENCE
              </h3>

              <div className="space-y-5 text-xs">
                {/* Clubside Tours */}
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-sm">
                    <span className="text-white">Clubside Tours & Travels</span>
                    <span className="text-rose-400 font-mono text-xs">October 2024 – Present</span>
                  </div>
                  <div className="text-violet-300 font-medium">Digital Marketing Executive · Siliguri, West Bengal</div>
                  <ul className="list-disc pl-4 space-y-1 text-slate-300 pt-1 leading-relaxed">
                    <li>Managed Search Engine Optimization (SEO) strategies, including both on-page and off-page optimization.</li>
                    <li>Conducted regular SEO audits to identify technical issues, improve website performance, and enhance search engine rankings.</li>
                    <li>Planned and executed advertising campaigns using Google Ads and Meta Ads (Facebook & Instagram).</li>
                    <li>Maintained and updated content via a Content Management System (CMS).</li>
                    <li>Oversaw social media management, including content scheduling, audience engagement, and growth tracking.</li>
                    <li>Utilized Customer Relationship Management (CRM) tools to enhance client communication and streamline lead management.</li>
                  </ul>
                </div>

                {/* Digital Get Way */}
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-sm">
                    <span className="text-white">Digital Get Way LLP</span>
                    <span className="text-slate-400 font-mono text-xs">March 2024 – October 2024</span>
                  </div>
                  <div className="text-violet-300 font-medium">Role: Digital Marketer · Siliguri, West Bengal</div>
                  <ul className="list-disc pl-4 space-y-1 text-slate-300 pt-1">
                    <li>Digital marketer, specializing in Google My Business optimization and management.</li>
                  </ul>
                </div>

                {/* Zediant Technologies */}
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-sm">
                    <span className="text-white">Zediant Technologies Pvt. Ltd.</span>
                    <span className="text-slate-400 font-mono text-xs">May 2023 – August 2023</span>
                  </div>
                  <div className="text-violet-300 font-medium">Role: Junior Software Developer · Kolkata, West Bengal</div>
                  <ul className="list-disc pl-4 space-y-1 text-slate-300 pt-1">
                    <li>Extensive experience in software development utilizing ASP .NET, ADO .NET, and JavaScript technologies.</li>
                    <li>Proficiency in crafting robust solutions leveraging the power of these frameworks to deliver efficient and dynamic web applications.</li>
                  </ul>
                </div>

                {/* Techno Developers Group */}
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-sm">
                    <span className="text-white">Techno Developers Group</span>
                    <span className="text-slate-400 font-mono text-xs">December 2022 – March 2023</span>
                  </div>
                  <div className="text-violet-300 font-medium">Role: Trainee Software Consultant · Siliguri, West Bengal</div>
                  <ul className="list-disc pl-4 space-y-1 text-slate-300 pt-1">
                    <li>Extensive experience in providing customer support and developing solutions tailored to meet customer requirements using C# and SQL.</li>
                    <li>Assisting clients with their technical queries and concerns, as well as designing and implementing software solutions.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4: Research Experience */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-rose-400 border-b border-violet-900/40 pb-1.5 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                RESEARCH EXPERIENCE
              </h3>
              <div className="text-xs space-y-2 bg-[#080916] p-4 rounded-xl border border-violet-900/40">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-sm">
                  <span className="text-white">Analysis of Different Virtual Machine (VM) Allocation Policies Based on VM Consolidation in Green Cloud Computing</span>
                  <span className="text-slate-400 font-mono text-xs shrink-0">August 2021 – July 2022</span>
                </div>
                <div className="text-slate-400">
                  <strong>Role:</strong> Designed and implemented algorithms for the research project · <strong>Supervisor:</strong> Dr. Riman Mandal · University of Kalyani, West Bengal
                </div>
                <ul className="list-disc pl-4 space-y-1 text-slate-300 pt-1">
                  <li>Collaborated on developing an innovative Cloud Computing Model focused on VM consolidation in green cloud computing.</li>
                  <li>Conducted research using technologies such as Java, Cloudsim, and Cloud Computing.</li>
                </ul>
              </div>
            </div>

            {/* Section 5: Achievements */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono text-rose-400 border-b border-violet-900/40 pb-1.5 flex items-center gap-2">
                <Award className="w-4 h-4" />
                ACHIEVEMENTS
              </h3>
              <div className="text-xs bg-[#080916] p-4 rounded-xl border border-violet-900/40 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold font-mono">
                  118
                </div>
                <div className="text-slate-200">
                  <span className="font-bold text-white">Ranked 118</span> in the West Bengal Joint Entrance Exam for Computer Applications (WBJECA) 2020.
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="pt-4 border-t border-violet-900/40 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:+919064213107"
                  className="px-4 py-2 text-xs font-bold text-slate-900 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors flex items-center gap-1.5 shadow"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call +91 90642 13107</span>
                </a>
                <a
                  href="mailto:reshmi17dey@gmail.com?subject=Job%20Inquiry%20-%20Reshmi%20Dey%20Digital%20Marketing"
                  className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-rose-500 via-fuchsia-600 to-violet-600 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Reshmi</span>
                </a>
              </div>
              <button
                onClick={() => setShowResumeModal(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
