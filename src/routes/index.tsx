import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight, ArrowLeft, ArrowUpRight, Check, Leaf, Sun, Battery, Plug, Wind,
  Cpu, Cog, Sparkles, ChevronDown, MapPin, Phone, Mail, Globe, ShieldCheck,
  Wrench, Layers, GraduationCap, Building2, FlaskConical, Award, Users,
  Briefcase, BookOpen, Target, TrendingUp, Calendar, Quote, Star, Menu, X,
} from "lucide-react";
import heroImg from "@/assets/polytechnic-hero.jpg";
import campusImg from "@/assets/campus-diu.jpg";
import logo from "@/assets/greenery-logo.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Greenery Institute of Science & Technology — Bangladesh's Green Energy Education Revolution" },
      { name: "description", content: "Vendor-certified Solar PV and EV Charger professional training at Daffodil Smart City Ashulia. 14-day flagship program with LESSO Solar and BYD certifications. Founded by Greenery Energy Solution Ltd." },
      { property: "og:title", content: "Greenery Institute of Science & Technology — Be Skilled. Get Hired. Build the Future." },
      { property: "og:description", content: "Bangladesh's first comprehensive Solar PV & EV Charger professional training program — launched 19 May 2026 at DIU Ashulia." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: PolytechnicPage,
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function Section({ id, children, className = "", dark = false }: { id?: string; children: ReactNode; className?: string; dark?: boolean }) {
  return (
    <section id={id} className={`relative w-full px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28 ${dark ? "bg-charcoal text-white" : ""} ${className}`}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase ${dark ? "border-white/15 bg-white/5 text-primary-glow" : "border-primary/20 bg-primary/5 text-primary"}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-primary-glow" : "bg-primary"}`} />
      {children}
    </div>
  );
}

function SectionHeader({ eyebrow, title, sub, accent, dark = false }: { eyebrow: string; title: ReactNode; sub?: string; accent?: ReactNode; dark?: boolean }) {
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="max-w-3xl">
      <motion.div variants={fadeUp}><Eyebrow dark={dark}>{eyebrow}</Eyebrow></motion.div>
      <motion.h2 variants={fadeUp} className={`mt-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl ${dark ? "text-white" : "text-charcoal"}`}>
        {title} {accent && <span className={dark ? "bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent" : "text-gradient-brand"}>{accent}</span>}
      </motion.h2>
      {sub && <motion.p variants={fadeUp} className={`mt-5 text-sm leading-relaxed sm:text-base md:text-lg ${dark ? "text-white/65" : "text-muted-foreground"}`}>{sub}</motion.p>}
    </motion.div>
  );
}

function Counter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const target = parseFloat(value);
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(parseFloat((target * eased).toFixed(target < 10 && !Number.isInteger(target) ? 1 : 0)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return <span>{Number.isInteger(target) ? Math.floor(n) : n.toFixed(1)}{suffix}</span>;
}

/* ---------- NAV ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#origin", label: "Origin" },
    { href: "#program", label: "14-Day Program" },
    { href: "#curriculum", label: "Curriculum" },
    { href: "#future", label: "Future Courses" },
    { href: "#campuses", label: "Campuses" },
    { href: "#leadership", label: "Leadership" },
    { href: "#partners", label: "Partners" },
    { href: "#enroll", label: "Enroll" },
  ];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6">
        <div className={`flex items-center justify-between gap-3 rounded-2xl border px-3 py-2.5 transition-all duration-300 sm:px-4 sm:py-3 md:px-6 ${scrolled || open ? "glass border-white/50 shadow-soft" : "border-transparent bg-transparent"}`}>
          <Link to="/" className="flex min-w-0 shrink-0 items-center gap-2.5">
            <img src={logo.url} alt="Greenery Institute of Science & Technology" className="h-9 w-9 shrink-0 rounded-full object-contain sm:h-10 sm:w-10" width={40} height={40} />
            <span className="flex min-w-0 flex-col leading-none">
              <span className="whitespace-nowrap text-sm font-bold tracking-tight text-charcoal sm:text-base">GIST</span>
              <span className="hidden whitespace-nowrap text-[10px] font-medium tracking-[0.15em] uppercase text-muted-foreground xl:block">Institute of Science & Technology</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="whitespace-nowrap rounded-lg px-2.5 py-2 text-[13px] font-medium text-foreground/75 transition-colors hover:bg-secondary hover:text-foreground xl:px-3 xl:text-sm">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <a href="#enroll" className="hidden items-center gap-2 rounded-xl bg-charcoal px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-charcoal/90 hover:shadow-elegant sm:inline-flex">
              Enroll Now <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card text-charcoal lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="mt-2 rounded-2xl border border-border bg-card p-3 shadow-elegant lg:hidden">
            <nav className="grid gap-1">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary">
                  {l.label}
                </a>
              ))}
              <a href="#enroll" onClick={() => setOpen(false)} className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-charcoal px-4 py-3 text-sm font-semibold text-white sm:hidden">
                Enroll Now <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  return (
    <section id="top" className="relative isolate min-h-screen w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img src={heroImg} alt="" className="h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
      </motion.div>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20 md:px-10">
        <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-4xl">
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
              <Sparkles className="h-3 w-3" /> Estd. 2026 · A Greenery Energy Solution Initiative
            </div>
          </motion.div>
          <motion.h1 variants={fadeUp} className="mt-6 text-[2rem] font-bold leading-[1.05] text-white sm:text-5xl md:text-7xl lg:text-[5rem]">
            Greenery <span className="bg-gradient-to-r from-primary-glow via-white to-accent bg-clip-text text-transparent">Institute of Science</span>
            <span className="mt-2 block text-xl font-medium text-white/80 sm:text-3xl md:text-4xl">& Technology</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
            Bangladesh's first comprehensive Solar PV and EV Charger professional training program —
            vendor-certified by LESSO Solar and BYD, hosted at Daffodil Smart City, Ashulia.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-glow">
            Be Skilled · Get Hired · Build the Future
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a href="#enroll" className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-7 py-4 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] sm:w-auto">
              Enroll in 14-Day Program <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#program" className="inline-flex w-full items-center justify-center gap-2 rounded-xl glass-dark px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-white/15 sm:w-auto">
              See Curriculum
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-4">
            {[
              { v: "14", l: "Day Flagship Program" },
              { v: "3", l: "Global Vendor Partners" },
              { v: "10K+", l: "Employer Network" },
              { v: "5,000+", l: "Target Grads by 2030" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl glass-dark p-3 text-white sm:p-4">
                <div className="text-2xl font-bold sm:text-3xl md:text-4xl">{s.v}</div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/65">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60">
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

/* ---------- FOREWORD ---------- */
function Foreword() {
  return (
    <Section className="bg-gradient-subtle">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <Eyebrow>Foreword</Eyebrow>
          <h2 className="mt-5 text-4xl font-bold leading-tight text-charcoal md:text-5xl">
            A message from the <span className="text-gradient-brand">Founder</span>.
          </h2>
          <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-xl font-bold text-white">SS</div>
              <div>
                <div className="text-base font-bold text-charcoal">Sanjid Shahnoor</div>
                <div className="text-sm text-muted-foreground">Founder & Managing Director</div>
                <div className="text-xs text-muted-foreground">Greenery Energy Solution Ltd.</div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.blockquote initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative rounded-3xl border border-border bg-card p-8 md:p-12 shadow-soft">
          <Quote className="absolute -top-5 left-8 h-10 w-10 text-primary" />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>Bangladesh stands at a historic crossroads. As the world pivots toward renewable energy and electric mobility, our nation has the opportunity — and the responsibility — to develop the skilled workforce that will lead this transformation.</p>
            <p>The energy transition is not merely a technological challenge; it is a human capital challenge. Bangladesh, with its ambitious <strong className="text-charcoal">40% renewable energy target by 2041</strong> and rapidly expanding EV market, needs trained solar PV engineers, EV charging technicians, battery specialists and clean-energy project managers — far more than the market currently supplies.</p>
            <p>We invite students, working professionals, and industry partners to join us in building Bangladesh's green economy — one skilled professional at a time.</p>
            <p className="text-sm font-semibold text-charcoal">— Sanjid Shahnoor · Dhaka · May 2026</p>
          </div>
        </motion.blockquote>
      </div>
    </Section>
  );
}

/* ---------- ORIGIN ---------- */
function Origin() {
  const stats = [
    { v: "3", l: "Global Tech Giants as Partners" },
    { v: "2", l: "Companies Founded in Canada" },
    { v: "30,000+", l: "Technicians Needed by 2030" },
    { v: "2026", l: "Year of Greenery's Launch" },
  ];
  return (
    <Section id="origin">
      <SectionHeader
        eyebrow="Chapter 01 · Origin Story"
        title="How a vision became"
        accent="an institution."
        sub="Every institution that changes a nation begins with a single, restless question. For Sanjid Shahnoor, that question arrived during his university years: why is the world changing so fast in solar, EVs and green technology — and why is Bangladesh being left behind?"
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>It was not a question born of pessimism. It was born of possibility. Sanjid looked at the global energy revolution — solar panels blanketing rooftops in China, EV stations lining Canadian highways, green factories transforming European supply chains — and saw an opportunity waiting to be claimed.</p>
          <h3 className="pt-4 text-xl font-bold text-charcoal">A Journey Across Continents</h3>
          <p>Sanjid contacted <strong className="text-charcoal">LESSO Solar</strong> — the world's second-largest solar company. They said yes. Then <strong className="text-charcoal">Zero Electronics</strong>, the Hong Kong-and-China-based energy technology company. They said yes. Then <strong className="text-charcoal">BYD</strong>, the global EV titan, through its Canadian operations. They said yes too.</p>
          <p>He moved to Canada, established two companies there, and immersed himself in the world's most advanced green energy markets. Bangladesh was producing qualified engineers on paper, but almost none who could demonstrate hands-on competence in solar PV or EV technology in the field. <em className="text-charcoal">This was the skills gap Greenery Institute of Science & Technology was born to fill.</em></p>
          <h3 className="pt-4 text-xl font-bold text-charcoal">The GESL Foundation</h3>
          <p>Returning to Bangladesh, Sanjid built Greenery Energy Solution Ltd. into a complete clean-energy ecosystem — <strong className="text-charcoal">230+ successful installations</strong>, <strong className="text-charcoal">20+ engineering teams nationwide</strong>, and exclusive distribution agreements with LESSO Solar and Zero Technologies. The Livenza Group anchored this vision through Expo Accessories Ltd. and Expo Industrial Park in Kanchpur — giving the institute a real-world industrial laboratory.</p>
          <h3 className="pt-4 text-xl font-bold text-charcoal">Partnership with Skill.Jobs (Daffodil Group)</h3>
          <p>To educate at scale, Sanjid partnered with Daffodil Group — 8 polytechnics, 2 universities and 54+ institutional concerns. Greenery Institute of Science & Technology found its first home at Daffodil International University's Ashulia Smart City campus, with a planned Uttara campus and a flagship R&D laboratory at Expo Industrial Park.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4 self-start">
          {stats.map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-gradient-subtle p-6 shadow-soft">
              <div className="text-4xl font-bold text-gradient-brand">{s.v}</div>
              <div className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

/* ---------- ECOSYSTEM / 5 STAGES ---------- */
const STAGES = [
  { icon: BookOpen, n: "01", title: "Foundation Learning", desc: "Structured classroom instruction on the global energy framework, Bangladesh's RE policy, solar PV fundamentals and EV principles. Cohorts of 20–30 with expert industry instructors." },
  { icon: Wrench, n: "02", title: "Hands-On Laboratory", desc: "Real LESSO Solar modules, MC4 connectors, cable crimping, inverter configuration and complete PV wiring on the DIU Ashulia solar demo rooftop — a live installation students can touch." },
  { icon: Cpu, n: "03", title: "Digital Simulation", desc: "Professional-grade PVsyst 7.x simulations: design complete PV plants, model shading, calculate yield and produce economic reports — the exact outputs employers request." },
  { icon: Building2, n: "04", title: "Industrial Site Visit", desc: "Day 9 transformation: the cohort visits GESL's live Gazipur industrial facility. Senior engineers walk students through live audits, blueprint reviews and commissioning." },
  { icon: Award, n: "05", title: "EV Commissioning & Placement", desc: "BYD-certified trainers lead full EV charger commissioning. Capstone business pitch to industry evaluators. Internationally verifiable certifications + Skill.Jobs employer access." },
];

function Ecosystem() {
  return (
    <Section dark>
      <SectionHeader
        dark
        eyebrow="Chapter 02 · Engineering Ecosystem"
        title="Where learning becomes"
        accent="doing."
        sub="Greenery Institute of Science & Technology was never designed to be a classroom. It was designed to be an ecosystem — a complete, integrated environment where every student moves from curiosity to confidence through five deliberate stages."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {STAGES.map(({ icon: Icon, n, title, desc }, i) => (
          <motion.div key={n} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-primary-glow/50 hover:bg-white/10">
            <div className="mb-5 flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow"><Icon className="h-6 w-6" /></span>
              <span className="font-display text-xs font-bold tracking-widest text-white/30">{n}</span>
            </div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.blockquote initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-br from-primary/20 to-accent/10 p-8 md:p-12">
        <Quote className="h-8 w-8 text-primary-glow" />
        <p className="mt-4 text-xl font-medium leading-relaxed text-white/90 md:text-2xl">
          "The 14-day program was the most practical and industry-relevant training I have ever attended. I received a job offer before the program even ended."
        </p>
        <footer className="mt-5 text-sm font-semibold text-primary-glow">— Electrical Engineering Graduate · Inaugural Batch 2026</footer>
      </motion.blockquote>
    </Section>
  );
}

/* ---------- LAUNCH CEREMONY ---------- */
const LAUNCH_GUESTS = [
  { org: "Greenery Energy Solution Ltd.", role: "Sanjid Shahnoor, Founder & MD — Program Visionary & Lead Presenter" },
  { org: "Daffodil International University", role: "Academic Host — Campus, Infrastructure & Academic Credibility" },
  { org: "Skill.Jobs — Daffodil Group", role: "Dr. K. M. Hasan Ripon & Shahanur Alam Zibon — Program & Placement Leaders" },
  { org: "LESSO Solar", role: "Vendor Certification Partner — Solar PV Certification Representative" },
  { org: "BYD Bangladesh / Noort Autos", role: "Asrafuzzaman Russel, COO — EV Technology & Certification Partner" },
  { org: "Runner Group", role: "Strategic Mobility & Automotive Ecosystem Partner" },
  { org: "Livenza Group", role: "Ahmed Sharif Kabir — HR, Compliance & Mentorship Partner" },
  { org: "Daffodil Group Board", role: "Aqib Arafat Khan & Monwarul Islam Rebel — Governance & Industry Linkage" },
];
const MILESTONES = [
  { t: "Official Program Launch", d: "Bangladesh's first comprehensive Solar PV & EV Charger professional training — 19 May 2026" },
  { t: "Strategic Partnerships", d: "Formalized collaboration with DIU, LESSO Solar, BYD & Runner Group" },
  { t: "Inaugural Batch Enrolled", d: "First cohort of industry professionals and graduates enrolled and trained" },
  { t: "Advisory Board Formed", d: "High-level steering committee from leading corporations constituted" },
  { t: "Campus Facility Operational", d: "Solar rooftop, EV charging station & simulation labs — fully operational" },
  { t: "Vendor Certification Active", d: "LESSO Solar & BYD internationally recognized credentials activated for graduates" },
];

function Launch() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Chapter 03 · Launch Ceremony"
        title="19 May 2026 —"
        accent="a historic day for Bangladesh."
        sub="At Daffodil International University's Ashulia Smart City campus, beneath a sky bright with early summer light, Bangladesh's first comprehensive Solar PV and EV Charger professional training program — vendor-certified by two international giants — was formally launched before an assembly of industry leaders and academic visionaries."
      />
      <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h3 className="text-xl font-bold text-charcoal">Distinguished Guests & Dignitaries</h3>
          <ul className="mt-5 space-y-3">
            {LAUNCH_GUESTS.map((g) => (
              <li key={g.org} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-soft">
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary"><Check className="h-4 w-4" strokeWidth={3} /></span>
                <div>
                  <div className="text-sm font-bold text-charcoal">{g.org}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{g.role}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-charcoal">Key Milestones Achieved at Launch</h3>
          <div className="mt-5 space-y-3">
            {MILESTONES.map((m, i) => (
              <motion.div key={m.t} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-xl bg-gradient-subtle p-5 border border-border">
                <div className="flex items-center gap-2 text-sm font-bold text-primary"><Star className="h-4 w-4 fill-primary" /> {m.t}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{m.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- 14-DAY PROGRAM ---------- */
const DAYS = [
  { d: "Day 01", f: "Renewable Energy & Solar PV Introduction", k: "Global & local energy frameworks, Bangladesh metrics, SREDA policy, PV system layouts and terminology." },
  { d: "Day 02", f: "Solar PV Technologies & Typologies", k: "Grid-tied, hybrid, off-grid systems; mono vs. bifacial modules; cell technologies; module selection." },
  { d: "Day 03", f: "Equipment, Principles & Standards", k: "Module types, inverter variations, mounting, AC/DC cabling, breakers, wiring codes, BOS components." },
  { d: "Day 04", f: "Grid Connection & Electrical Safety", k: "Grid synchronization, frequency controls, safety procedures, arc flash, PPE requirements, BNBC standards." },
  { d: "Day 05", f: "Feasibility Analysis & System Design", k: "Site assessment, shading analysis, load tracking, ROI calculations, detailed system sizing and design." },
  { d: "Day 06", f: "Storage, Microgrids & Protection", k: "Li-ion vs. lead-acid batteries, BMS fundamentals, earthing, lightning protection, microgrid design." },
  { d: "Day 07", f: "Installation Practice & Hands-On Lab", k: "Cable stripping and crimping, MC4 connectors, inverter coupling, string wiring, full lab practicals." },
  { d: "Day 08", f: "Testing, Commissioning & O&M", k: "Insulation resistance testing, polarity checks, configuration, fault identification and debugging." },
  { d: "Day 09", f: "Industrial Site Visit — Gazipur", k: "Field excursion to GESL's live commercial solar facility; system audit, blueprint review, engineer Q&A." },
  { d: "Day 10", f: "Policy, Regulations & Net Metering", k: "Net metering rules, BPDB interconnection standards, Bangladesh RE policy framework." },
  { d: "Day 11", f: "PVsyst Software Fundamentals", k: "Interface, project file setup, array definition, climate data integration, horizon shading input." },
  { d: "Day 12", f: "PVsyst Simulations & Business Pitch", k: "Shading maps, yield optimization, economic reports, group business pitch to industry evaluators." },
  { d: "Day 13", f: "EV Charger Technology & Study", k: "AC vs. DC charging, CCS/CHAdeMO/GB-T standards, smart load management, BYD systems overview." },
  { d: "Day 14", f: "EV Charger Commissioning & Assessment", k: "Cable sizing, mounting, solar-storage-EV interface, commissioning tests, group delivery & assessment." },
];
const PROGRAM_SPECS = [
  { l: "Duration", v: "14 days — weekday intensive or weekend batches" },
  { l: "Batch Size", v: "20–30 participants for personalized training" },
  { l: "Eligibility", v: "SSC/HSC minimum; BSc/Diploma preferred; working pros welcome" },
  { l: "Language", v: "Bengali, with English technical terminology" },
  { l: "Certification", v: "Vendor-certified by LESSO Solar, BYD & GESL" },
  { l: "Career Support", v: "Placement via Skill.Jobs network (10K+ employers)" },
  { l: "Site Visit", v: "Day 9 industrial visit — transport arranged" },
  { l: "Equipment", v: "All tools, materials & PVsyst access — no cost to students" },
];

function Program() {
  return (
    <Section id="program" className="bg-gradient-subtle">
      <SectionHeader
        eyebrow="Chapter 04 · The Flagship Program"
        title="The 14-Day Solar PV & EV Charger"
        accent="professional training."
        sub="Bangladesh's most comprehensive short-course certification in renewable energy: eleven classroom and laboratory days, one transformative industrial site visit and two dedicated EV charger commissioning days."
      />
      <div className="mt-14 grid gap-3 md:grid-cols-2">
        {DAYS.map((d, i) => (
          <motion.div key={d.d} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="group flex gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-soft">
            <div className="grid h-12 w-14 shrink-0 place-items-center rounded-lg bg-gradient-brand text-white">
              <div className="text-center leading-tight">
                <div className="text-[10px] font-medium uppercase tracking-wider opacity-80">Day</div>
                <div className="text-base font-bold">{d.d.replace("Day ", "")}</div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-charcoal">{d.f}</h4>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{d.k}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10">
        <h3 className="text-2xl font-bold text-charcoal">Program Specifications</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAM_SPECS.map((s) => (
            <div key={s.l} className="rounded-xl bg-secondary p-4">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{s.l}</div>
              <div className="mt-2 text-sm font-medium text-charcoal">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- CURRICULUM ---------- */
const CURRICULUM = [
  { n: "01", t: "Solar PV System Design & Engineering", d: "PV principles, cell types, module selection, string sizing, array layout, shading analysis, PVsyst simulation, system optimization for residential, commercial and utility-scale projects." },
  { n: "02", t: "EV Charging Infrastructure Technology", d: "AC/DC charging systems, Level 1/2/3 chargers, CCS/CHAdeMO/GB-T standards, smart load management, V2G fundamentals, grid-connected EV deployment with BYD hardware commissioning." },
  { n: "03", t: "Battery Storage Systems & BMS", d: "Li-ion, LFP, lead-acid, and flow battery technologies; BMS; state-of-charge monitoring; cycle life analysis; thermal management; BESS integration with solar and EV charging." },
  { n: "04", t: "Electrical Installation & Safety", d: "LV/MV wiring, circuit protection, earthing, arc flash mitigation, BNBC/BPDB compliance, fire safety, electrical code standards for Bangladesh, PPE requirements." },
  { n: "05", t: "Grid Integration & Net Metering", d: "Synchronization, inverter requirements, BPDB interconnection standards, net metering policy, export tariffs, power purchase agreements, regulatory compliance, grid stability." },
  { n: "06", t: "Project Management, Costing & Procurement", d: "BOQ preparation, cost estimation, Gantt charts, scheduling, contractor management, tender documentation, EPC delivery frameworks, stakeholder communication." },
  { n: "07", t: "Entrepreneurship & Clean-Tech Business", d: "Business model canvas, startup finance, market analysis, investor pitch development, commercialization strategies, clean-tech venture building with advisory board mentorship." },
  { n: "08", t: "Operation, Maintenance & Commissioning", d: "Preventive maintenance schedules, fault diagnostics, IV curve tracing, thermographic inspection, inverter troubleshooting, long-term asset management." },
  { n: "09", t: "Environmental Studies & RE Policy", d: "Bangladesh RE policy framework, SREDA targets, environmental impact assessment, sustainability principles, climate alignment for green engineers." },
  { n: "10", t: "PVsyst & Digital Simulation Tools", d: "Professional-grade simulation: array definition, climate data integration, horizon shading input, yield optimization, economic reports — utility-scale workflow." },
];

function Curriculum() {
  return (
    <Section id="curriculum">
      <SectionHeader
        eyebrow="Chapter 05 · Curriculum"
        title="Ten core subject areas for"
        accent="a complete green energy engineer."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {CURRICULUM.slice(0, 5).map((c, i) => (
          <motion.div key={c.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant">
            <div className="text-xs font-bold tracking-widest text-primary">{c.n}</div>
            <h3 className="mt-3 text-base font-bold text-charcoal">{c.t}</h3>
            <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">{c.d}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {CURRICULUM.slice(5).map((c, i) => (
          <motion.div key={c.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant">
            <div className="text-xs font-bold tracking-widest text-primary">{c.n}</div>
            <h3 className="mt-3 text-base font-bold text-charcoal">{c.t}</h3>
            <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">{c.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- FUTURE COURSES ---------- */
const TIERS = [
  {
    tier: "Tier 1 — Short Certification Courses (14–30 Days)",
    desc: "Intensive, practical certifications in specialized green energy domains for working professionals and fresh graduates.",
    courses: [
      { t: "Battery Energy Storage Specialist", meta: "21 Days · Intermediate", d: "Li-ion/LFP technology, BMS, BESS installation, grid-scale storage design, solar-storage hybrid system integration with hands-on Gazipur lab sessions." },
      { t: "EV Charging Infrastructure Designer", meta: "21 Days · Intermediate", d: "EV charging network planning, grid integration, smart load management (CSMS), multi-standard charger deployment across AC and DC platforms." },
      { t: "Solar PV O&M Technician", meta: "14 Days · Entry-Intermediate", d: "Preventive maintenance, fault diagnostics, IV curve tracing, thermographic inspection, inverter troubleshooting, lifecycle asset management." },
      { t: "Solar Business & Entrepreneurship", meta: "14 Days · All Levels", d: "Business model development, client proposal writing, project costing, financial modeling, marketing for Bangladesh's solar installation market." },
    ],
  },
  {
    tier: "Tier 2 — Professional Diploma Programs (3–6 Months)",
    desc: "Diploma-level qualifications for engineers seeking comprehensive multi-domain expertise (subject to BTEB approval).",
    courses: [
      { t: "Diploma in Renewable Energy Engineering", meta: "6 Months · Approval Pending", d: "Full spectrum: solar PV, EV technology, BESS, grid integration, project management, entrepreneurship — multiple LESSO Solar & BYD certifications, capstone EPC project." },
      { t: "Diploma in EV Technology", meta: "4 Months · Approval Pending", d: "Electric vehicle technology, EV charging infrastructure, battery systems, EV fleet management in partnership with BYD Bangladesh and Noor Autos." },
      { t: "Diploma in Green Building Technology", meta: "4 Months · Approval Pending", d: "Solar PV, ZERO Technologies HVAC, energy-efficient building design, LEED fundamentals, smart building automation." },
    ],
  },
  {
    tier: "Tier 3 — Advanced & Specialized Programs",
    desc: "Cutting-edge expertise for experienced engineers, project managers and industry leaders.",
    courses: [
      { t: "SCADA & IoT for Energy Management", meta: "30 Days · Advanced", d: "Real-time monitoring, IoT sensor integration, SCADA configuration, predictive maintenance, remote fault detection, automation for solar farms, BESS and EV networks." },
      { t: "Advanced Solar PV Engineering", meta: "30 Days · Advanced", d: "Utility-scale design, large-array engineering, advanced PVsyst workflows, financial modeling and project management for grid-scale plants." },
    ],
  },
  {
    tier: "Tier 4 — Online & Blended Learning Platform",
    desc: "Recorded lectures, live virtual labs, simulation software access and online mentorship — extending Greenery certifications to learners anywhere in the world.",
    courses: [],
  },
];

function FutureCourses() {
  return (
    <Section id="future" className="bg-gradient-subtle">
      <SectionHeader
        eyebrow="Chapter 06 · Future Courses"
        title="The expanding academic portfolio"
        accent="2026 – 2030."
        sub="A comprehensive roadmap of short certifications, advanced technical programs, professional diplomas and specialized industry tracks — each designed in consultation with industry partners, regulators and international certification bodies."
      />
      <div className="mt-14 space-y-10">
        {TIERS.map((t, i) => (
          <motion.div key={t.tier} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10">
            <h3 className="text-xl font-bold text-charcoal md:text-2xl">{t.tier}</h3>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">{t.desc}</p>
            {t.courses.length > 0 && (
              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {t.courses.map((c) => (
                  <div key={c.t} className="rounded-xl border border-border bg-gradient-subtle p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-base font-bold text-charcoal">{c.t}</h4>
                      <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">{c.meta}</span>
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- CAMPUSES ---------- */
const CAMPUSES = [
  {
    name: "Campus 1 — DIU Ashulia Smart City",
    status: "Operational",
    location: "Daffodil Smart City, Ashulia, Savar, Dhaka",
    desc: "All classroom instruction, laboratory sessions, PVsyst training and EV charger commissioning. The campus itself partially runs on solar generation.",
    features: [
      { l: "Solar Rooftop", v: "Fully operational demo PV — mono & bifacial LESSO modules, hybrid inverters, live monitoring" },
      { l: "EV Station", v: "On-campus BYD-supplied AC/DC charger hardware for Days 13–14 commissioning" },
      { l: "Simulation Labs", v: "PVsyst-equipped computer labs, panel wiring stations, BMS test benches, safety rigs" },
      { l: "Lecture Facilities", v: "State-of-the-art smart classrooms with A/V systems and demonstration areas" },
      { l: "Safety Equipment", v: "Full PPE — arc flash suits, insulation gloves, safety goggles, lockout/tagout kits" },
    ],
  },
  {
    name: "Campus 2 — Uttara, Dhaka",
    status: "Planned",
    location: "Uttara, Dhaka",
    desc: "A second urban campus designed for working professionals, corporate training clients and government staff requiring metropolitan access. Weekend and evening programs.",
    features: [
      { l: "Programs", v: "Weekend & evening batches for working schedules" },
      { l: "Target Audience", v: "Corporate clients, government staff, mid-career professionals" },
    ],
  },
  {
    name: "Industrial Training Facility — Gazipur",
    status: "Operational",
    location: "GESL, 21 Biprabartha, Gazipur Sadar, Gazipur-1700",
    desc: "Where theory meets industry at full scale. GESL's operational plant — one of Bangladesh's most compliant and technologically advanced industrial operations.",
    features: [
      { l: "Industrial Plant", v: "Live commercial solar installation, operational PV arrays, full monitoring systems" },
      { l: "EV Charger Assembly", v: "Working assembly floor — hands-on hardware interaction and commissioning practice" },
      { l: "Battery Lab", v: "LFP and Li-ion systems, BMS test equipment, safety demonstration area" },
      { l: "Visit Protocol", v: "Guided by senior engineers — live audit, blueprint review, Q&A" },
    ],
  },
  {
    name: "Flagship R&D Laboratory — Expo Industrial Park",
    status: "Planned",
    location: "Expo Industrial Park, Kanchpur",
    desc: "The most transformative element in Greenery's roadmap, operated by Expo Accessories Ltd. — a Livenza Group concern. Will become the gold standard for polytechnic-level technical education in Bangladesh.",
    features: [
      { l: "Energy Source", v: "100% renewable energy by design" },
      { l: "Focus", v: "Advanced research, prototype testing, industry-academia collaboration" },
    ],
  },
];

function Campuses() {
  return (
    <Section id="campuses">
      <SectionHeader
        eyebrow="Chapter 07 · Infrastructure"
        title="World-class campuses, labs &"
        accent="industrial facilities."
        sub="Greenery Institute of Science & Technology has made a deliberate and significant investment in physical learning environments that match the ambition of its educational vision."
      />
      <div className="mt-12 overflow-hidden rounded-3xl border border-border shadow-elegant">
        <img src={campusImg} alt="DIU Ashulia Smart City campus" loading="lazy" width={1600} height={1024} className="aspect-[16/7] w-full object-cover" />
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {CAMPUSES.map((c, i) => (
          <motion.div key={c.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-xl font-bold text-charcoal">{c.name}</h3>
              <span className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${c.status === "Operational" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}>{c.status}</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" /> {c.location}</div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            <dl className="mt-6 space-y-2.5">
              {c.features.map((f) => (
                <div key={f.l} className="grid gap-1 border-t border-border pt-2.5 sm:grid-cols-[120px_1fr] sm:gap-3">
                  <dt className="text-xs font-bold uppercase tracking-wider text-primary">{f.l}</dt>
                  <dd className="text-sm text-charcoal">{f.v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- LEADERSHIP ---------- */
const LEADERS = [
  {
    name: "Sanjid Shahnoor", role: "Founder & Managing Director", org: "Greenery Energy Solution Ltd. | Greenery Institute of Science & Technology",
    quote: "The man who turned a skills gap into a polytechnic",
    bio: "Built partnerships with three global energy giants — LESSO Solar, Zero Electronics, BYD — while charting the course for Bangladesh's green future. Founded two green energy companies in Canada before returning to build GESL into a complete clean-energy ecosystem. Today leads an institution targeting 5,000+ certified green energy professionals by 2030.",
    tags: ["Solar Energy Systems", "Energy Storage", "EV Infrastructure", "Global Partnerships", "Clean-Tech Commercialization", "Sustainable Energy Transition"],
    initials: "SS",
  },
  {
    name: "Dr. K. M. Hasan Ripon", role: "Principal", org: "Greenery Institute of Science & Technology",
    quote: "The educator anchoring Bangladesh's green workforce mission",
    bio: "Leads academic vision, program delivery, faculty development and quality assurance across all Greenery GIST programs. Co-led the inaugural launch ceremony on 19 May 2026 alongside Skill.Jobs leadership.",
    tags: ["Academic Leadership", "TVET Quality Assurance", "Curriculum Design", "Industry-Academia Collaboration"],
    initials: "KR",
  },
  {
    name: "Shahanur Alam Zibon", role: "Vice Principal | Head of Operations", org: "Skill.Jobs — Daffodil Group",
    quote: "The bridge-builder between talent and opportunity",
    bio: "Connects Greenery graduates to 10,000+ employers across Bangladesh and ASEAN. Holds BSc ECE, MBA in MIS (3.81 CGPA, DIU) and MA in International Relations (3.79 CGPA, JU) — a uniquely multidisciplinary lens on technical and human dimensions of workforce development.",
    tags: ["Talent Acquisition", "Business Development", "Workforce Development", "Career Counseling", "Corporate Partnerships", "Operations Management"],
    initials: "SZ",
  },
  {
    name: "Asrafuzzaman Russel", role: "Advisory Board | Chief Operating Officer", org: "Noor Autos Limited — BYD Bangladesh | Runner Group",
    quote: "Driving Bangladesh's electric mobility revolution",
    bio: "Leads operational expansion of BYD in Bangladesh — sales strategy, dealer network development, customer experience and EV charging infrastructure build-out. Ensures Greenery's EV curriculum and commissioning protocols match the technologies graduates work with from day one.",
    tags: ["EV Operations", "Market Expansion", "Sustainable Transportation", "Dealer Network Development"],
    initials: "AR",
  },
  {
    name: "Ahmed Sharif Kabir", role: "Advisory Board | Head of HR & Compliance", org: "Livenza Group",
    quote: "Building the human architecture of green industry",
    bio: "Brings deep expertise in strategic HR, organizational development, labor law compliance and corporate governance across Bangladesh's most demanding industrial environments. Guides Greenery's human capital strategy and institutional integrity standards.",
    tags: ["Strategic HR", "Labor Law & Compliance", "Talent Acquisition", "Performance Management", "Organizational Development", "Corporate Governance"],
    initials: "AK",
  },
  {
    name: "Aqib Arafat Khan", role: "Advisory Board | Technology Strategy Associate", org: "Daffodil Group",
    quote: "Championing education for the future-ready generation",
    bio: "Contributes to long-term strategic direction, governance and innovation initiatives of one of Bangladesh's largest private universities. Ensures Greenery's academic governance is rigorous, forward-looking and anchored in DIU's educational standards.",
    tags: ["Higher Education Governance", "Innovation", "Youth Leadership", "Digital Transformation"],
    initials: "AQ",
  },
  {
    name: "Monwarul Islam Rebel", role: "Advisory Board | Head of Business Development & Industrial Linkage", org: "Daffodil Group",
    quote: "The ecosystem architect connecting academia to industry",
    bio: "Career spans CEO, COO, Director and Founder roles across multiple tech and business ventures in Bangladesh and abroad. Combines Linguistics at DU with BBA & MBA in Marketing — a uniquely broad perspective on how education and industry must collaborate.",
    tags: ["Business Development", "Corporate Relations", "Entrepreneurship Development", "Innovation Ecosystems", "Industry-Academia Collaboration", "Stakeholder Engagement"],
    initials: "MR",
  },
];

function Leadership() {
  return (
    <Section id="leadership" dark>
      <SectionHeader
        dark
        eyebrow="Chapter 08–09 · Leadership"
        title="The people behind"
        accent="the institution."
        sub="A founding team and advisory board drawn from Bangladesh's most accomplished industrial, academic and workforce-development organizations."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {LEADERS.map((l, i) => (
          <motion.div key={l.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="group rounded-3xl border border-white/10 bg-white/5 p-7 transition-all hover:border-primary-glow/40 hover:bg-white/10">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-brand text-base font-bold text-white shadow-glow">{l.initials}</div>
              <div className="min-w-0">
                <div className="truncate text-base font-bold">{l.name}</div>
                <div className="text-xs text-white/60">{l.role}</div>
              </div>
            </div>
            <div className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-primary-glow">{l.org}</div>
            <p className="mt-3 text-sm italic text-white/75">"{l.quote}"</p>
            <p className="mt-4 text-sm leading-relaxed text-white/65">{l.bio}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {l.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/70">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- PARTNERS ---------- */
const PARTNERS = [
  { n: "Livenza Group", role: "Parent Ecosystem", desc: "Diversified conglomerate focused on sustainable development, clean energy, electric mobility and industrial innovation. Institutional backbone of the institute via GESL, Noort Autos, BYD Bangladesh and ZERO Technologies.", meta: "Strategic Focus: Clean Energy, Electric Mobility, Industrial Tech" },
  { n: "LESSO Solar", role: "Solar Technology Partner — World's #2 Solar Company", desc: "Global powerhouse in high-efficiency solar PV modules, BESS and inverters spanning Asia, Europe, Africa, Middle East and the Americas. GESL's exclusive Bangladesh distributor.", meta: "Products: 405W–720W TOPCon Modules, BESS, Inverters · HQ: China" },
  { n: "BYD Bangladesh", role: "EV Technology Partner — Global Leader", desc: "One of the world's largest new-energy vehicle manufacturers and the global leader in battery technology. Distributed locally by CG Runner BD Limited. Blade Battery redefined global EV safety.", meta: "Key Models: Seal, Atto 3, Sealion 6 · Distributor: CG Runner BD Ltd." },
  { n: "ZERO Technologies", role: "Energy Efficiency Partner — HVAC", desc: "International HVAC company specializing in energy-efficient commercial and industrial climate-control. Entered Bangladesh in 2026 through GESL, enabling Greenery's Green Building program.", meta: "Products: VRF, Chillers, AHUs, Rooftop Units" },
  { n: "Daffodil International University", role: "Academic Partner — Premier Private University", desc: "Provides the Ashulia Smart City campus infrastructure — lecture theaters, simulation labs, solar demo rooftops and EV stations. 8 polytechnics, 2 universities, 54+ concerns in the group.", meta: "Group: Daffodil — Bangladesh's largest education group" },
  { n: "Skill.Jobs", role: "Employment Partner — 10,000+ Employers", desc: "Bangladesh's premier employability and recruitment platform. Manages learner enrollment, program administration and graduate career placement across Bangladesh and ASEAN.", meta: "Group: Daffodil — Career boot camps, job fairs, employability programs" },
  { n: "Runner Group", role: "Strategic Mobility & Automotive Ecosystem Partner", desc: "Pioneer EV importer in Bangladesh training the next generation of EV charging technicians. Operates the BYD Bangladesh ecosystem alongside Noort Autos.", meta: "Focus: EV Mobility, Automotive Distribution" },
  { n: "Noort Autos / Noor Autos Ltd.", role: "EV Sales & Service Arm of BYD Bangladesh", desc: "Official sales and service arm of BYD Bangladesh within the Runner Group ecosystem. Provides EV hardware and BYD-certified trainers for Days 13–14.", meta: "Role: EV Hardware & Commissioning Training" },
];

function Partners() {
  return (
    <Section id="partners">
      <SectionHeader
        eyebrow="Chapter 10 · Industry Partner Ecosystem"
        title="Global companies"
        accent="powering the institute."
        sub="A constellation of world-class organizations whose combined reach spans clean energy, electric mobility, advanced HVAC, workforce development and higher education — the most powerful institutional partnership network in Bangladesh's green energy education sector."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {PARTNERS.map((p, i) => (
          <motion.div key={p.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-brand text-xs font-bold text-white">{p.n.slice(0, 2).toUpperCase()}</div>
            <h3 className="mt-4 text-base font-bold text-charcoal">{p.n}</h3>
            <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary">{p.role}</div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
            <div className="mt-4 border-t border-border pt-3 text-[11px] text-muted-foreground">{p.meta}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- CAREER & SALARY ---------- */
const CAREER_TRACKS = [
  "Solar PV System Design Assistant", "Battery Storage Systems Technician", "Renewable Energy Project Coordinator",
  "Green Building Energy Auditor", "EV Service & Maintenance Technician", "BESS Integration Specialist",
  "EV Charging Station Fleet Manager", "Solar Site Survey Engineer", "Clean-Tech Entrepreneur",
  "Solar O&M Field Technician", "Renewable Energy Trainer / Instructor", "Smart Grid & IoT Energy Analyst",
];
const SALARIES = [
  { r: "Solar PV Design Engineer", s: "BDT 30,000 – 80,000 / month" },
  { r: "EV Charging Specialist", s: "20–40% premium over peers" },
  { r: "BESS Technician", s: "BDT 35,000 – 90,000 / month" },
  { r: "Solar Project Coordinator", s: "BDT 40,000 – 1,00,000 / month" },
  { r: "Green Building Auditor", s: "BDT 35,000 – 75,000 / month" },
  { r: "Clean-Tech Entrepreneur", s: "BDT 5,00,000+ / month potential" },
];

function Careers() {
  return (
    <Section className="bg-gradient-subtle">
      <SectionHeader
        eyebrow="Chapter 11 · Career Pathways"
        title="Where our graduates"
        accent="go."
        sub="Every module is mapped to real employment requirements drawn directly from our industry partner network — ensuring graduates enter the job market with exactly the skills employers need today."
      />
      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <h3 className="text-xl font-bold text-charcoal">Career Tracks</h3>
          <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {CAREER_TRACKS.map((t) => (
              <div key={t} className="flex items-center gap-2.5 rounded-xl border border-border bg-card p-3.5">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-primary/10 text-primary"><Briefcase className="h-3.5 w-3.5" /></span>
                <span className="text-sm font-medium text-charcoal">{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-charcoal">Salary & Compensation Landscape</h3>
          <div className="mt-5 space-y-3">
            {SALARIES.map((s) => (
              <div key={s.r} className="flex flex-col gap-1 rounded-xl border border-border bg-card p-5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="text-sm font-bold text-charcoal">{s.r}</div>
                <div className="text-sm font-semibold text-gradient-brand">{s.s}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-charcoal p-6 text-white">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary-glow"><Award className="h-4 w-4" /> Vendor-Certified Advantage</div>
            <p className="mt-3 text-sm leading-relaxed text-white/75">Every graduate of the 14-day program receives vendor-certified completion certificates from GESL, LESSO Solar, BYD and Skill.Jobs — Daffodil Group. Credentials are internationally verifiable across Bangladesh and ASEAN, with ILO-aligned recognition targeted by 2029.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- MARKET / LANDSCAPE ---------- */
const MARKET_STATS = [
  { v: "40%", l: "RE target by 2041" },
  { v: "6M+", l: "Solar Home Systems deployed" },
  { v: "100K+", l: "EVs projected in Dhaka by 2028" },
  { v: "<2,000", l: "Currently certified solar pros" },
];
const MARKET_BULLETS = {
  solar: [
    "6+ million Solar Home Systems deployed — largest off-grid program in the world",
    "Grid-connected solar capacity growing 30–40% annually with major utility-scale projects",
    "Net metering policy lets residential & commercial owners export surplus power to BPDB",
    "100+ private solar installation companies in Bangladesh, combined capacity 500+ MW",
    "World Bank, ADB & IFC committed USD 2 billion+ in renewable energy financing through 2030",
    "SREDA mandates renewable integration for new industrial facilities above defined threshold",
  ],
  ev: [
    "EV Policy 2023: import duties waived, EV lanes mandated, public fleets electric by 2030",
    "500,000+ three-wheeler EVs already on Bangladesh's roads",
    "BYD, Tata and Hyundai establishing official dealer and service networks",
    "BPDB pilot for 200 public EV charging stations across Dhaka, Chittagong, Sylhet",
    "Runner Group & Noort Autos training the next generation of EV charging technicians",
  ],
  gap: [
    { l: "Solar Technicians Needed by 2030", v: "30,000+ (SREDA estimate)" },
    { l: "EV Charging Specialists Needed", v: "5,000+ for Dhaka alone" },
    { l: "Current Certified Solar Pros", v: "Fewer than 2,000 in Bangladesh" },
    { l: "Annual Training Capacity (pre-2026)", v: "Under 500 across all institutions" },
    { l: "Greenery Target (2030)", v: "5,000+ certified professionals trained" },
  ],
};

function Market() {
  return (
    <Section dark>
      <SectionHeader
        dark
        eyebrow="Chapter 12 · Market Landscape"
        title="The market, the opportunity,"
        accent="the urgency."
        sub="Bangladesh is at an inflection point. The decisions made in the next five years will determine whether this nation leads or follows the global green energy revolution."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {MARKET_STATS.map((s) => (
          <div key={s.l} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-4xl font-bold text-white md:text-5xl"><span className="bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">{s.v}</span></div>
            <div className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-white/55">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="flex items-center gap-2 text-lg font-bold"><Sun className="h-5 w-5 text-primary-glow" /> Solar PV Market Highlights</h3>
          <ul className="mt-5 space-y-3">
            {MARKET_BULLETS.solar.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-white/75"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" strokeWidth={3} />{b}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="flex items-center gap-2 text-lg font-bold"><Plug className="h-5 w-5 text-primary-glow" /> The EV Revolution</h3>
          <ul className="mt-5 space-y-3">
            {MARKET_BULLETS.ev.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-white/75"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" strokeWidth={3} />{b}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-primary/15 to-accent/10 p-8 md:p-10">
        <h3 className="flex items-center gap-2 text-lg font-bold"><Target className="h-5 w-5 text-primary-glow" /> The Critical Skills Gap</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {MARKET_BULLETS.gap.map((g) => (
            <div key={g.l} className="rounded-xl bg-white/5 p-5 border border-white/10">
              <div className="text-xs font-bold uppercase tracking-wider text-primary-glow">{g.l}</div>
              <div className="mt-2 text-base font-bold text-white">{g.v}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-white/75 italic">This skills gap is not merely a market opportunity. It is a national emergency — one that every Greenery Institute of Science & Technology graduate helps solve.</p>
      </div>
    </Section>
  );
}

/* ---------- GOVERNANCE ---------- */
const BOARD_FUNCTIONS = [
  "Strategic direction setting for curriculum, partnerships and institutional growth",
  "Industry advisory on skills gaps, emerging technologies and employment trends",
  "Quality assurance oversight of training delivery and graduate outcomes",
  "Facilitation of industry internships, site visits and practical experience placements",
  "Review and recommendation of new program areas aligned with market evolution",
  "Liaison with government bodies, regulatory authorities and international organizations",
  "Financial oversight and institutional sustainability planning",
  "Alumni network development and graduate career tracking",
];
const COMMITMENTS = [
  { p: "Daffodil International University", c: "MoU — campus-based training at Ashulia; academic credentialing; facility access" },
  { p: "LESSO Solar", c: "Vendor certification program; certified solar modules; technical instructors for all PV modules" },
  { p: "BYD & Noort Autos", c: "EV charger hardware for Days 13–14; BYD-certified trainers; vendor certificates" },
  { p: "Skill.Jobs — Daffodil Group", c: "Program organization; learner enrollment; placement via 10,000+ employer network" },
  { p: "Livenza Group", c: "HR expertise; compliance advisory; industrial mentorship; Gazipur facility access" },
];

function Governance() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Chapter 13 · Governance"
        title="Steering committee &"
        accent="institutional oversight."
        sub="Greenery Institute of Science & Technology operates under a robust governance architecture anchored by a high-level Steering Committee and Advisory Board."
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
          <h3 className="text-xl font-bold text-charcoal">Board Functions</h3>
          <ul className="mt-5 space-y-3">
            {BOARD_FUNCTIONS.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />{b}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
          <h3 className="text-xl font-bold text-charcoal">Industry Collaboration Commitments</h3>
          <div className="mt-5 space-y-3">
            {COMMITMENTS.map((c) => (
              <div key={c.p} className="rounded-xl bg-secondary p-4">
                <div className="text-sm font-bold text-primary">{c.p}</div>
                <div className="mt-1 text-xs text-muted-foreground">{c.c}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 rounded-3xl border border-border bg-gradient-subtle p-8 md:p-10">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white"><ShieldCheck className="h-6 w-6" /></span>
          <div>
            <h3 className="text-lg font-bold text-charcoal">Regulatory Alignment</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">All proposed full-diploma programs are subject to approval by <strong>BTEB</strong> and relevant regulatory authorities. The institute actively aligns with <strong>NSDA</strong> guidelines, TVET sector development priorities, and Bangladesh's <strong>8th Five Year Plan</strong> targets for human capital development in green sectors.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- SDGs ---------- */
const SDGS = [
  { n: 4, t: "Quality Education" },
  { n: 7, t: "Affordable & Clean Energy" },
  { n: 8, t: "Decent Work & Economic Growth" },
  { n: 9, t: "Industry, Innovation & Infrastructure" },
  { n: 13, t: "Climate Action" },
  { n: 17, t: "Partnerships for the Goals" },
];

function SDG() {
  return (
    <Section className="bg-gradient-subtle">
      <SectionHeader
        eyebrow="Chapter 14 · Sustainability"
        title="Education aligned with"
        accent="the planet's future."
        sub="Sustainability is not a subject we teach — it is a principle we embody in every aspect of our institutional operations and educational philosophy."
      />
      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
          <h3 className="flex items-center gap-2 text-lg font-bold text-charcoal"><Leaf className="h-5 w-5 text-primary" /> Environmental Commitment</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />DIU Ashulia campus partially powered by on-site solar generation</li>
            <li className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />Zero-waste training practices — digital documentation over physical materials</li>
            <li className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />Industrial site visits coordinated to minimize transportation emissions</li>
            <li className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />Equipment selection prioritizes energy-efficient, long-lifecycle vendors</li>
            <li className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />Expo Industrial Park R&D lab will operate on 100% renewable energy by design</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
          <h3 className="flex items-center gap-2 text-lg font-bold text-charcoal"><Users className="h-5 w-5 text-primary" /> Social Responsibility</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />Active gender inclusion — encouraging women in all technical programs</li>
            <li className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />Scholarship and fee-waiver programs for meritorious low-income students</li>
            <li className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />NGO partnerships extending green skills training to underserved communities</li>
            <li className="flex gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />Graduate mentorship prioritizes socially impactful ventures in rural electrification</li>
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-lg font-bold text-charcoal">UN SDG Alignment</h3>
        <p className="mt-2 text-sm text-muted-foreground">Greenery Institute of Science & Technology's programs directly contribute to six of the seventeen United Nations Sustainable Development Goals.</p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {SDGS.map((s) => (
            <div key={s.n} className="rounded-2xl bg-gradient-brand p-5 text-white shadow-glow">
              <div className="text-xs font-bold uppercase tracking-[0.14em] opacity-80">SDG {s.n}</div>
              <div className="mt-2 text-sm font-bold leading-tight">{s.t}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const TESTIMONIALS = [
  { q: "The 14-day program was the most practical and industry-relevant training I have ever attended. Within the first week I had already installed and commissioned a complete solar PV system. The LESSO Solar and BYD certifications immediately enhanced my professional profile, and I received a job offer before the program even ended.", a: "Electrical Engineering Graduate · Inaugural Batch 2026" },
  { q: "The site visit to the Gazipur industrial facility was eye-opening — I saw real systems in full operation and learned from senior engineers. The PVsyst training alone was worth the entire program fee.", a: "Senior Electrical Technician · Energy Sector · Inaugural Batch 2026" },
  { q: "I enrolled to expand my solar installation business. The entrepreneurship and project management content gave me tools I could apply immediately — BOQ preparation, client proposal writing and financial modeling for solar projects. My business revenue grew by 35% in the three months following the course.", a: "Solar Business Owner · Inaugural Batch 2026" },
  { q: "I came from a government utility background with limited solar exposure. After 14 days, I could design, install and commission a complete rooftop system independently. The vendor certification from LESSO Solar has opened doors I did not know existed before this program.", a: "Technical Staff Member · Bangladesh Power Sector · Inaugural Batch 2026" },
];

function Testimonials() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Chapter 15 · Testimonials"
        title="Voices from"
        accent="the inaugural batch."
        sub="The most powerful measure of any training program is not its curriculum — it is the transformation it produces in real people."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {TESTIMONIALS.map((t, i) => (
          <motion.figure key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative rounded-3xl border border-border bg-card p-8 shadow-soft">
            <Quote className="h-8 w-8 text-primary" />
            <blockquote className="mt-4 text-base leading-relaxed text-charcoal md:text-lg">{t.q}</blockquote>
            <figcaption className="mt-5 text-sm font-semibold text-muted-foreground">— {t.a}</figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}

/* ---------- ROADMAP ---------- */
const ROADMAP = [
  { y: "2026", t: "Launch & Foundation", d: "19 May launch ceremony · DIU Ashulia campus operational · LESSO Solar & BYD certifications active · inaugural batch trained · advisory board formed." },
  { y: "2027", t: "Expansion", d: "Uttara urban campus opens · Tier 1 short certifications scale · 1,000+ graduates trained · Skill.Jobs placement network fully integrated." },
  { y: "2028", t: "Diploma Programs", d: "BTEB-approved Renewable Energy & EV Technology diplomas launch · Green Building Technology diploma · 2,500+ cumulative graduates." },
  { y: "2029", t: "International Recognition", d: "ILO-aligned credential recognition · ASEAN partnerships · advanced SCADA & IoT programs · 3,500+ cumulative graduates." },
  { y: "2030", t: "National Leadership", d: "Expo Industrial Park flagship R&D laboratory operational · 5,000+ certified green energy professionals trained · regional hub for ASEAN green education." },
];
const GOV_ALIGNMENT = [
  "Bangladesh National Solar Energy Roadmap and SREDA targets",
  "National Skills Development Policy framework and NSDA guidelines",
  "Bangladesh EV Policy 2023 and BRTA guidelines for EV infrastructure",
  "Technical and Vocational Education and Training (TVET) sector priorities",
  "SDG 4 (Quality Education) and SDG 7 (Affordable & Clean Energy)",
  "Bangladesh's 8th Five Year Plan targets for green human capital",
];

function Roadmap() {
  return (
    <Section className="bg-gradient-subtle">
      <SectionHeader
        eyebrow="Chapter 16 · Development Roadmap"
        title="From launch to"
        accent="national leadership · 2026 – 2030."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
        {ROADMAP.map((r, i) => (
          <motion.div key={r.y} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="absolute -top-3 left-6 rounded-full bg-gradient-brand px-3 py-1 text-xs font-bold text-white shadow-glow">{r.y}</div>
            <h3 className="mt-3 text-base font-bold text-charcoal">{r.t}</h3>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{r.d}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10">
        <h3 className="flex items-center gap-2 text-lg font-bold text-charcoal"><Landmark className="h-5 w-5 text-primary" /> Government & Policy Alignment</h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {GOV_ALIGNMENT.map((g) => (
            <li key={g} className="flex items-start gap-2.5 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />{g}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ---------- GLOSSARY ---------- */
const GLOSSARY = [
  { t: "PV (Photovoltaic)", d: "Technology converting sunlight directly into electricity using semiconductor materials — the foundation of all solar panel systems." },
  { t: "PVsyst", d: "Industry-standard software for design, simulation and analysis of PV systems from small rooftop to large utility-scale installations." },
  { t: "MPPT", d: "Maximum Power Point Tracking — algorithm extracting maximum possible power from solar panels under varying light conditions." },
  { t: "Net Metering", d: "Billing mechanism allowing solar owners to export surplus electricity to the grid and receive credit on electricity bills." },
  { t: "BOS (Balance of System)", d: "All components of a solar installation other than panels — inverters, mounting, wiring, breakers and monitoring." },
  { t: "Bifacial Module", d: "Solar panel generating electricity from both front and rear surfaces, capturing reflected light from the ground or roof." },
  { t: "TOPCon", d: "Tunnel Oxide Passivated Contact — advanced solar cell technology achieving higher efficiency (22%+) than standard PERC cells." },
  { t: "BESS", d: "Battery Energy Storage System — stores electrical energy in batteries for later use, commonly paired with solar PV." },
  { t: "BMS", d: "Battery Management System — electronic system monitoring and controlling a battery pack (cell balancing, SOC, temperature, safety)." },
  { t: "LFP", d: "Lithium Iron Phosphate — battery chemistry with excellent cycle life, thermal stability and safety, widely used in EVs and storage." },
  { t: "CCS", d: "Combined Charging System — the most widely adopted international standard for DC fast charging, used by BYD and most major automakers." },
  { t: "EV", d: "Electric Vehicle — a vehicle powered entirely or partially by electric motors drawing energy from rechargeable battery packs." },
  { t: "DC Fast Charging", d: "Direct current fast charging delivering power directly to the EV battery, bypassing the on-board charger — 50–350 kW." },
  { t: "SREDA", d: "Sustainable and Renewable Energy Development Authority — Bangladesh's government agency promoting and regulating renewable energy." },
  { t: "BPDB", d: "Bangladesh Power Development Board — state-owned utility responsible for electricity generation, transmission and distribution." },
  { t: "EPC", d: "Engineering, Procurement & Construction — project delivery model where a single contractor handles design, procurement and build." },
  { t: "BOQ", d: "Bill of Quantities — document itemizing all materials, quantities and costs for pricing and procurement in construction projects." },
  { t: "VRF System", d: "Variable Refrigerant Flow — advanced HVAC system using refrigerant to heat or cool multiple zones with high energy efficiency." },
  { t: "NSDA", d: "National Skills Development Authority — Bangladesh's statutory body overseeing skills development and vocational training quality." },
  { t: "BTEB", d: "Bangladesh Technical Education Board — regulatory authority for technical and vocational education qualifications in Bangladesh." },
];

function Glossary() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Chapter 17 · Technical Glossary"
        title="Key terms every"
        accent="green engineer should know."
      />
      <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {GLOSSARY.map((g) => (
          <div key={g.t} className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30">
            <div className="text-sm font-bold text-primary">{g.t}</div>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{g.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- FAQ ---------- */
const FAQS = [
  { q: "Who is this program designed for?", a: "The 14-Day Solar PV & EV Charger training is open to anyone with a minimum SSC/HSC qualification. A BSc or Diploma in Engineering is preferred but not required. Both fresh graduates and working professionals are welcome." },
  { q: "What language is training delivered in?", a: "Primarily in Bengali with English technical terms and materials. All handbooks, reference guides and software interfaces are in English." },
  { q: "Is prior experience required?", a: "No prior experience is necessary. The program takes participants from foundational knowledge to practical commissioning competency within 14 days." },
  { q: "What certifications do I receive?", a: "Vendor-certified completion certificates recognized by Greenery Energy Solution Ltd., LESSO Solar, and BYD — internationally verifiable credentials." },
  { q: "Are certifications recognized outside Bangladesh?", a: "Yes. LESSO Solar and BYD are international brands and their certifications carry recognition across South Asia and ASEAN markets. The institute is working toward ILO-aligned credential recognition by 2029." },
  { q: "Where does training take place?", a: "Primary classroom and lab training at DIU Ashulia. Day 9 industrial visit at GESL's Gazipur facility. The Uttara campus is planned for 2027." },
  { q: "Are weekend batches available?", a: "Yes. The institute offers both weekday intensive batches and weekend batches to accommodate working professionals." },
  { q: "What equipment do I need to bring?", a: "No equipment is required. All tools, lab materials, hardware and software access are provided at no additional cost." },
  { q: "Does the institute provide job placement?", a: "Yes. Graduates receive career placement assistance through the Skill.Jobs – Daffodil Group network, connecting them with 10,000+ employers." },
  { q: "What salary can I expect?", a: "Solar PV engineers currently earn BDT 30,000–80,000 per month. EV charging specialists command a 20–40% salary premium over peers." },
  { q: "Can I start my own business?", a: "Absolutely. The program includes entrepreneurship content designed to help participants launch solar installation ventures, EV charging businesses or clean-tech consulting services." },
  { q: "What is the batch size, and why is it limited?", a: "Batches are limited to 20–30 participants to ensure personalized instruction, individual mentorship and high-quality training that large-group programs cannot provide." },
  { q: "Will diploma programs be available?", a: "Yes. The roadmap includes full diploma programs in Renewable Energy Engineering and EV Technology, subject to BTEB regulatory approval." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section className="bg-gradient-subtle">
      <SectionHeader
        eyebrow="Chapter 18 · FAQ"
        title="Everything you need to know"
        accent="before enrolling."
      />
      <div className="mt-14 mx-auto max-w-4xl space-y-3">
        {FAQS.map((f, i) => (
          <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-6 text-left hover:bg-secondary/50">
              <span className="text-base font-bold text-charcoal">{f.q}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && (
              <div className="border-t border-border bg-secondary/30 p-6 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- ENROLL / CONTACT ---------- */
const ENROLL_PERSONAS = [
  { i: GraduationCap, t: "Fresh Engineering Graduates", d: "BSc/Diploma in EEE, ME, ICT or related fields" },
  { i: Briefcase, t: "Entrepreneurs & Business Owners", d: "Solar installers, energy consultants, contractors" },
  { i: Layers, t: "Career Changers", d: "Any technical background seeking a green-sector transition" },
  { i: Users, t: "Working Professionals", d: "Energy, construction, manufacturing, utilities" },
  { i: Building2, t: "Government & Utility Staff", d: "BPDB, DESCO, DPDC, PGCB, SREDA" },
  { i: BookOpen, t: "Industry Trainers & Educators", d: "Polytechnic instructors, vocational educators" },
];

function Enroll() {
  return (
    <Section id="enroll" dark>
      <SectionHeader
        dark
        eyebrow="Chapter 19 · Contact & Enrollment"
        title="Join Bangladesh's"
        accent="green energy revolution."
        sub="Every chapter in this profile tells part of the same story — a story about a nation that refused to miss its moment, a founder who saw a gap and chose to fill it, and students who are choosing to be part of something larger than themselves."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <h3 className="text-xl font-bold">Enrollment & Program Inquiries</h3>
          <div className="mt-6 space-y-5">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white"><Phone className="h-5 w-5" /></span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-primary-glow">Hotline</div>
                <a href="tel:+8801847334785" className="text-base font-semibold text-white hover:text-primary-glow">01847 334 785</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white"><Mail className="h-5 w-5" /></span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-primary-glow">Email</div>
                <a href="mailto:contact@skill.jobs" className="text-base font-semibold text-white hover:text-primary-glow">contact@skill.jobs</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white"><Globe className="h-5 w-5" /></span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-primary-glow">Website</div>
                <a href="https://www.skill.jobs" target="_blank" rel="noreferrer" className="text-base font-semibold text-white hover:text-primary-glow">www.skill.jobs</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white"><Users className="h-5 w-5" /></span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-primary-glow">Organized By</div>
                <div className="text-base font-semibold text-white">Skill.Jobs — Daffodil Group</div>
              </div>
            </div>
          </div>

          <h3 className="mt-10 text-xl font-bold">Campus Addresses</h3>
          <div className="mt-5 space-y-3">
            {[
              { l: "Training Campus", v: "Daffodil International University, Daffodil Smart City, Ashulia, Savar, Dhaka" },
              { l: "Urban Campus (Planned)", v: "Uttara, Dhaka, Bangladesh" },
              { l: "Industrial Facility", v: "GESL, 21 Biprabartha, Gazipur Sadar, Gazipur-1700" },
              { l: "R&D Lab (Planned)", v: "Expo Industrial Park, Kanchpur, Bangladesh" },
            ].map((a) => (
              <div key={a.l} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-primary-glow">{a.l}</div>
                <div className="mt-1 text-sm text-white/80">{a.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold">Who Should Enroll?</h3>
          <div className="mt-5 grid gap-3">
            {ENROLL_PERSONAS.map(({ i: Icon, t, d }) => (
              <div key={t} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-brand text-white"><Icon className="h-5 w-5" /></span>
                <div>
                  <div className="text-sm font-bold">{t}</div>
                  <div className="mt-0.5 text-xs text-white/60">{d}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-primary/20 to-accent/10 p-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary-glow"><TrendingUp className="h-4 w-4" /> Be Skilled · Get Hired · Build the Future</div>
            <h4 className="mt-3 text-2xl font-bold leading-tight">Ready to power Bangladesh's clean energy future?</h4>
            <p className="mt-3 text-sm text-white/75">Limited batches of 20–30 participants. Reserve your seat in the next intake.</p>
            <a href="tel:+8801847334785" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]">
              Call to Reserve a Seat <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-charcoal px-6 pt-16 pb-10 text-white/70 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand"><Leaf className="h-5 w-5 text-white" strokeWidth={2.5} /></span>
              <span className="text-base font-bold text-white">GIST</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">A Greenery Energy Solution & Livenza Group initiative, in partnership with Daffodil Group and Skill.Jobs.</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-glow">Estd. 2026</p>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-white">Programs</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#program" className="hover:text-white">14-Day Flagship</a></li>
              <li><a href="#future" className="hover:text-white">Short Certifications</a></li>
              <li><a href="#future" className="hover:text-white">Diploma Programs</a></li>
              <li><a href="#future" className="hover:text-white">Online Learning</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-white">Institute</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href="#origin" className="hover:text-white">Origin Story</a></li>
              <li><a href="#leadership" className="hover:text-white">Leadership</a></li>
              <li><a href="#partners" className="hover:text-white">Industry Partners</a></li>
              <li><a href="#campuses" className="hover:text-white">Campuses</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-white">Contact</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li>01847 334 785</li>
              <li>contact@skill.jobs</li>
              <li>www.skill.jobs</li>
              <li>DIU Ashulia · Gazipur · Uttara · Kanchpur</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Greenery Institute of Science & Technology</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- PAGE ---------- */
function Landmark({ className }: { className?: string }) {
  // Stand-in icon import to avoid name conflict if lucide doesn't have it under this scope
  return <Building2 className={className} />;
}

function PolytechnicPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Foreword />
      <Origin />
      <Ecosystem />
      <Launch />
      <Program />
      <Curriculum />
      <FutureCourses />
      <Campuses />
      <Leadership />
      <Partners />
      <Careers />
      <Market />
      <Governance />
      <SDG />
      <Testimonials />
      <Roadmap />
      <Glossary />
      <FAQ />
      <Enroll />
      <Footer />
    </main>
  );
}
