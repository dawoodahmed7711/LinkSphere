'use client'
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Eye,
  Globe,
  Zap,
  PenTool,
  ShieldCheck,
  Lock,
  Rocket,
  Users,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

/* ---------------- DATA ---------------- */
const stats = [
  { value: "500k+", icon: BarChart3, label: "Active Creators", text: "Crafting their identity daily" },
  { value: "12M+", icon: Eye, label: "Monthly Visitors", text: "Engaging across bio profiles" },
  { value: "190+", icon: Globe, label: "Global Reach", text: "Countries actively onboarded" },
  { value: "99.9%", icon: Zap, label: "Core Uptime", text: "Sub-100ms global edge delivery" },
];

const principles = [
  {
    icon: PenTool,
    title: "Design Simplicity",
    text: "Interfaces that get out of your way so your content shines. We obsess over every millimeter of whitespace and eliminate unnecessary chrome.",
    tag: "Zero visual clutter",
  },
  {
    icon: ShieldCheck,
    title: "Creator Sovereignty",
    text: "You own your audience, your links, your customer relationships, and your exportable analytics data. No platform lock-in.",
    tag: "100% data portability",
  },
  {
    icon: Lock,
    title: "Privacy by Default",
    text: "No invasive tracking cookies, third-party pixel injection, or monetization through behavioral data selling. Pure analytics without surveillance.",
    tag: "GDPR & CCPA compliant",
  },
  {
    icon: Rocket,
    title: "Speed & Accessibility",
    text: "Sub-second loading times regardless of bandwidth. Fully screen-reader compatible and engineered to WCAG 2.1 AAA contrast benchmarks.",
    tag: "Universal accessibility",
  },
];

/* ---------------- MOTION ---------------- */
const motionCss = `
@keyframes ls-fade-up { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
.ls-fade-up { opacity: 0; animation: ls-fade-up .75s cubic-bezier(.22,1,.36,1) forwards; }
.ls-reveal { opacity: 0; transform: translateY(26px);
  transition: opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1); }
.ls-reveal.is-visible { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  .ls-fade-up, .ls-reveal { opacity: 1; transform: none; animation: none; transition: none; }
}
`;

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

const stagger = (i, base = 0) => ({ animationDelay: `${base + i * 110}ms` });

/* ---------------- SECTIONS ---------------- */
function Hero() {
  const [name, setName] = useState("");

  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-10 pt-16 text-center sm:px-6 sm:pt-20">
      <span
        style={stagger(0)}
        className="ls-fade-up inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3.5 py-1.5 text-xs font-medium text-slate-600"
      >
        <span className="font-semibold text-blue-600">About LinkSphere</span>
        <span className="mx-1.5 text-slate-300">-</span>
        Our Story &amp; Mission
      </span>

      <h1
        style={stagger(1)}
        className="ls-fade-up mx-auto mt-6 max-w-[760px] text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl"
      >
        Empowering Creators to Connect Their Whole World
      </h1>

      <p
        style={stagger(2)}
        className="ls-fade-up mx-auto mt-6 max-w-[540px] text-base leading-relaxed text-slate-500"
      >
        We believe sharing your identity online shouldn't be fragmented across
        dozens of disconnected platforms. LinkSphere turns your digital
        footprint into one intentional, high-performance home.
      </p>

      {/* Claim link */}
      
    </section>
  );
}

function Stats() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-6 sm:px-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ value, icon: Icon, label, text }, i) => (
          <Reveal key={label} delay={i * 100} className="h-full">
            <div className="h-full rounded-lg bg-white p-5 shadow-sm shadow-slate-200/70 ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-200/50">
              <div className="flex items-start justify-between">
                <span className="text-3xl font-bold tracking-tight text-slate-900">
                  {value}
                </span>
                <Icon size={14} className="mt-2.5 text-slate-400" />
              </div>
              <p className="mt-1 text-[13px] font-semibold text-blue-700">
                {label}
              </p>
              <p className="mt-2 text-xs text-slate-500">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-24 sm:px-6">
      <Reveal className="text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
          Guiding Ethos
        </p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
          The Principles That Guide Us
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-500">
          Built with intention, crafted for every creator who values
          authenticity over noise.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map(({ icon: Icon, title, text, tag }, i) => (
          <Reveal key={title} delay={i * 120} className="h-full">
            <article className="group flex h-full flex-col rounded-lg bg-white p-6 shadow-sm shadow-slate-200/70 ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-200/50">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-indigo-50 text-blue-700 transition duration-300 group-hover:scale-110 group-hover:bg-blue-700 group-hover:text-white">
                <Icon size={16} />
              </span>
              <h3 className="mt-8 max-w-[150px] text-base font-semibold leading-tight text-slate-900">
                {title}
              </h3>
              <p className="mt-3 flex-1 text-[13px] leading-relaxed text-slate-500">
                {text}
              </p>
              <p className="mt-6 flex items-center gap-1 text-xs font-semibold text-blue-700">
                {tag}
                <ArrowUpRight
                  size={12}
                  className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#EEF1FD] via-[#F3F4FE] to-[#E9EDFC] px-6 py-16 text-center">
          {/* soft glow, right side */}
          <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-indigo-200/40 blur-3xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-slate-100">
              <Sparkles size={13} className="text-blue-700" />
              Join 500,000+ Creators
            </span>

            <h2 className="mx-auto mt-5 max-w-md text-4xl font-bold leading-tight tracking-tight text-slate-900">
              Ready to Claim Your LinkSphere?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-500">
              Join hundreds of thousands of artists, developers, and founders
              sharing their whole world in one clean, lightning-fast bio link.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/SignUp"
                className="inline-flex items-center gap-2 rounded-md bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-700/25 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-800"
              >
                Get Started — It's Free <ArrowRight size={12} />
              </a>
             
            </div>

            <ul className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-slate-500">
              {["Free forever tier", "No credit card needed", "Setup in 90 seconds"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-blue-700" />
                    {t}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- PAGE ---------------- */
export default function About() {
  return (
    <main className="overflow-x-hidden bg-[#F8F9FF] font-sans text-slate-900">
      <style>{motionCss}</style>
      <Hero />
      <Stats />
      <Principles />
      <Cta />
    </main>
  );
}