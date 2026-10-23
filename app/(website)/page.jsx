'use client'
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  PenLine,
  PlayCircle,
  Briefcase,
  Mail,
  Eye,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Share2,
  Palette,
  Smartphone,
  QrCode,
  TrendingUp,
} from "lucide-react";

const AVATAR = "https://i.pravatar.cc/200?img=47"; // replace with your own image

/* ---------------- MOTION ---------------- */
const motionCss = `
@keyframes ls-fade-up { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
@keyframes ls-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
@keyframes ls-pop { from { opacity: 0; transform: scale(.85); } to { opacity: 1; transform: scale(1); } }

.ls-fade-up { opacity: 0; animation: ls-fade-up .75s cubic-bezier(.22,1,.36,1) forwards; }
.ls-pop { opacity: 0; animation: ls-pop .6s cubic-bezier(.22,1,.36,1) forwards; }
.ls-float { animation: ls-float 6s ease-in-out infinite; }
.ls-float-alt { animation: ls-float 5s ease-in-out infinite reverse; }

.ls-reveal { opacity: 0; transform: translateY(26px);
  transition: opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1); }
.ls-reveal.is-visible { opacity: 1; transform: none; }

@media (prefers-reduced-motion: reduce) {
  .ls-fade-up, .ls-pop, .ls-reveal { opacity: 1; transform: none; animation: none; transition: none; }
  .ls-float, .ls-float-alt { animation: none; }
}
`;

// Fades + slides children in when they scroll into view
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`ls-reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Staggered page-load animation helper
const stagger = (i, base = 0) => ({ animationDelay: `${base + i * 110}ms` });

/* ---------------- DATA ---------------- */
const phoneLinks = [
  { label: "Instagram", icon: Camera },
  { label: "My Portfolio", icon: PenLine },
  { label: "YouTube Channel", icon: PlayCircle },
  { label: "LinkedIn Profile", icon: Briefcase },
  { label: "Contact Me", icon: Mail },
];

const features = [
  {
    icon: Share2,
    title: "All Your Links",
    text: "Keep social media, portfolio, and website links together in one clean showcase.",
  },
  {
    icon: Palette,
    title: "Beautiful Themes",
    text: "Personalize your profile with attractive themes, distinct palettes, and unique typography.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Design",
    text: "Give visitors a smooth, responsive browsing experience on every screen and phone.",
  },
  {
    icon: QrCode,
    title: "Easy Sharing",
    text: "Share your profile through one simple link or custom QR codes across the web.",
  },
];

const themes = [
  {
    name: "Minimal White",
    badge: "Classic",
    badgeCls: "bg-indigo-50 text-indigo-500",
    card: "bg-[#F6F7FD]",
    nameCls: "text-slate-900",
    handleCls: "text-indigo-500",
    primary: "bg-blue-600 text-white",
    secondary: "bg-indigo-50 text-slate-700",
    wrap: "bg-white border-slate-100",
    titleCls: "text-slate-700",
  },
  {
    name: "Midnight Blue",
    badge: "Dark Mode",
    badgeCls: "bg-slate-600 text-slate-200",
    card: "bg-[#0B1224]",
    nameCls: "text-white",
    handleCls: "text-indigo-300",
    primary: "bg-blue-600 text-white",
    secondary: "bg-slate-700 text-slate-100",
    wrap: "bg-[#1E293B] border-slate-700",
    titleCls: "text-slate-200",
  },
  {
    name: "Soft Lavender",
    badge: "Pastel",
    badgeCls: "bg-violet-100 text-violet-600",
    card: "bg-[#F0EDFD]",
    nameCls: "text-slate-900",
    handleCls: "text-violet-500",
    primary: "bg-violet-600 text-white",
    secondary: "bg-white text-slate-700",
    wrap: "bg-white border-slate-100",
    titleCls: "text-slate-700",
  },
];

const faqs = [
  "What is LinkSphere?",
  "How do I create my personal link page?",
  "Can I customize my profile and themes?",
  "Is LinkSphere free to use?",
  "Can I add links to all my social media accounts?",
  "Can I share my LinkSphere page anywhere?",
];

/* ---------------- SECTIONS ---------------- */
function Hero() {
  return (
    <section className="mx-auto grid max-w-[1200px] items-center gap-12 px-4 pb-24 pt-16 sm:px-6 lg:grid-cols-2 lg:pt-20">
      {/* Left */}
      <div>
        <span
          style={stagger(0)}
          className="ls-fade-up inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3.5 py-1.5 text-xs font-medium text-blue-600"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
          Your links, all in one place
        </span>

        <h1
          style={stagger(1)}
          className="ls-fade-up mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl"
        >
          One Link. Your Entire
          <br />
          <span className="text-blue-600">Digital World.</span>
        </h1>

        <p
          style={stagger(2)}
          className="ls-fade-up mt-5 max-w-md text-base leading-relaxed text-slate-500"
        >
          Bring your social media, portfolio, website, and favorite links
          together in one beautiful, shareable profile.
        </p>

        <div
          style={stagger(3)}
          className="ls-fade-up mt-6 flex flex-wrap items-center gap-3"
        >
          <a
            href="/SignUp"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30"
          >
            Get Started — It's Free <ArrowRight size={15} />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-50"
          >
            <Eye size={15} className="text-blue-600" /> Explore Demo
          </a>
        </div>

        <p
          style={stagger(4)}
          className="ls-fade-up mt-4 flex items-center gap-1.5 text-[13px] text-slate-500"
        >
          <CheckCircle2 size={14} className="text-blue-600" />
          Create your personal link page in minutes.
        </p>
      </div>

      {/* Right: phone mockup */}
       <div className=' bg-sky-100 bg-[radial-gradient(circle_at_30%_30%,#f9a8d4,transparent_55%),radial-gradient(circle_at_70%_70%,#7dd3fc,transparent_55%)] border border-black/70 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)] ml-15 relative flex h-[430px] w-[230px] flex-col items-center rounded-[36px]  border-2 border-black pt-5 shadow-lg'>
      {/* notch */}
      <div className="absolute left-1/2 top-2 h-3.5 w-14 -translate-x-1/2 rounded-full bg-black" />
      
      <img
        src='/Profile.jpg'
        alt='Profile Image'
       
        className='mt-8 h-12 w-12 object-cover rounded-full'
      />
      

      <h4 className="mt-3 text-[11px] font-extrabold text-black">Dawood Ahmed</h4>
      <p className="mt-2 line-clamp-4 text-center text-[7px] leading-tight text-black px-2">
       Hi there ! I am a Software Engineer Working in Pakistan in Tech Field.
      </p>

      <div className="mt-4 flex w-full flex-col gap-3">
        {phoneLinks.map((link) => (
          <button
            key={link.id}
            href=''
            className=' py-1.5 w-[200px] bg-sky-500 ml-3 text-white rounded-3xl text-center text-[10px] text-black transition hover:scale-[1.03]'
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* home indicator */}
      <div className="absolute bottom-3 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-black" />
      <footer className="text-[6px] text-black mt-3 ">
        Created By LinkShpere
      </footer>
    </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6">
      <Reveal className="text-center">
        <h2 className="mx-auto max-w-[520px] text-4xl font-bold leading-tight tracking-tight text-slate-900">
          Everything You Need, All in One Link
        </h2>
        <p className="mt-3 text-sm text-slate-500">
          Simple tools to create, customize, and share your digital identity.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 120} className="h-full">
          <div className="group h-full rounded-xl bg-white p-6 shadow-sm shadow-slate-200/70 ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-200/50 hover:ring-indigo-100">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-blue-600 transition duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
              <Icon size={18} />
            </span>
            <h3 className="mt-4 text-base font-semibold text-slate-900">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              {text}
            </p>
          </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Themes() {
  return (
    <section className="mx-auto mt-12 max-w-[1200px] px-4 sm:px-6">
      <Reveal className="rounded-2xl bg-[#F3F4FE] px-6 py-12 sm:px-10">
        <div className="text-center">
          <h2 className="mx-auto max-w-[520px] text-4xl font-bold leading-tight tracking-tight text-slate-900">
            Make Your Profile Uniquely Yours
          </h2>
          <p className="mt-3 text-sm text-slate-500">
            Choose a look that matches your personal brand.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[900px] gap-6 md:grid-cols-3">
          {themes.map((t, i) => (
            <Reveal
              key={t.name}
              delay={200 + i * 150}
              className={t.name === "Midnight Blue" ? "md:-my-1" : ""}
            >
            <div
              className={`rounded-xl border p-3 shadow-md shadow-slate-200/70 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-300/40 ${t.wrap}`}
            >
              <div className="mb-3 flex items-center justify-between">
                <span
                  className={`text-xs font-medium ${
                    t.name === "Midnight Blue" ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  {t.name}
                </span>
                <span
                  className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${t.badgeCls}`}
                >
                  {t.badge}
                </span>
              </div>

              <div className={`rounded-lg px-4 py-5 text-center ${t.card}`}>
                <img
                  src={AVATAR}
                  alt=""
                  className="mx-auto h-10 w-10 rounded-full object-cover"
                />
                <p className={`mt-2 text-xs font-semibold ${t.nameCls}`}>
                  Alex Morgan
                </p>
                <p className={`text-[10px] ${t.handleCls}`}>@alexmorgan</p>
                <div className="mt-3 space-y-2">
                  <div
                    className={`rounded-md py-1.5 text-[10px] font-semibold ${t.primary}`}
                  >
                    Latest Design Project
                  </div>
                  <div
                    className={`rounded-md py-1.5 text-[10px] font-semibold ${t.secondary}`}
                  >
                    Design System Guide
                  </div>
                </div>
              </div>
            </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#themes"
            className="group inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
          >
            Explore All Themes{" "}
            <Sparkles size={14} className="transition duration-500 group-hover:rotate-90" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faqs" className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6">
      <Reveal className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-sm text-slate-500">
          Everything you need to know about setting up and sharing your
          LinkSphere page.
        </p>
      </Reveal>

      <div className="mx-auto mt-8 max-w-[600px] space-y-2.5">
        {faqs.map((q, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={q} delay={i * 80}>
            <div className="rounded-lg bg-white shadow-sm shadow-slate-200/70 ring-1 ring-slate-100 transition duration-300 hover:shadow-md hover:ring-indigo-100">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-slate-800"
                aria-expanded={isOpen}
              >
                {q}
                <ChevronDown
                  size={16}
                  className={`text-slate-500 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-500 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-slate-500">
                    LinkSphere lets you gather all your important links into one
                    clean, customizable page that you can share anywhere.
                  </p>
                </div>
              </div>
            </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- PAGE ---------------- */
export default function Home() {
  return (
    <main className="scroll-smooth overflow-x-hidden bg-[#F8F9FF] font-sans text-slate-900">
      <style>{motionCss}</style>
      <Hero />
      <Features />
      <Themes />
      <Faq />
    </main>
  );
}