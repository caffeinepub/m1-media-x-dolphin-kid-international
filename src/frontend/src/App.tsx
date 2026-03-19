import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const GOLD = "#D6B36A";
const NAVY = "#0B1F3A";

function GoldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{ color: GOLD }}
      className="text-xs font-bold uppercase tracking-widest mb-3"
    >
      {children}
    </p>
  );
}

function SectionHeading({
  children,
  light = false,
}: { children: React.ReactNode; light?: boolean }) {
  const colorClass = light ? "text-white" : "text-gray-900";
  return (
    <h2
      className={`text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-center mb-2 ${colorClass}`}
    >
      {children}
    </h2>
  );
}

function GoldSubline({
  children,
  center = true,
}: { children: React.ReactNode; center?: boolean }) {
  return (
    <p
      style={{ color: GOLD }}
      className={`text-sm font-semibold uppercase tracking-widest mb-8 ${center ? "text-center" : ""}`}
    >
      {children}
    </p>
  );
}

function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);
  return scrolled;
}

// ─── Slide Deck ────────────────────────────────────────────────────────────────

const TOTAL_SLIDES = 10;

type SlideInfo = { id: number; content: string };

const SLIDES: SlideInfo[] = [
  { id: 1, content: "title" },
  { id: 2, content: "intro" },
  { id: 3, content: "problem" },
  { id: 4, content: "insight" },
  { id: 5, content: "solution" },
  { id: 6, content: "benefits" },
  { id: 7, content: "applications" },
  { id: 8, content: "longterm" },
  { id: 9, content: "conclusion" },
  { id: 10, content: "cta" },
];

function SlideVisualHint({ text }: { text: string }) {
  return (
    <p className="text-xs italic mt-4 opacity-50" style={{ color: GOLD }}>
      📷 {text}
    </p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 mt-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-white/85 text-sm md:text-base leading-relaxed"
        >
          <span style={{ color: GOLD }} className="mt-1 text-xs shrink-0">
            ◆
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SlideTitle() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full gap-6 px-4">
      <p
        style={{ color: GOLD }}
        className="text-xs font-bold uppercase tracking-widest"
      >
        M1 MEDIA PRESENTS
      </p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-3xl">
        Enhancing School Branding Through Professional Video Production &amp;
        Digital Content Strategy
      </h1>
      <p
        style={{ color: GOLD }}
        className="text-sm font-semibold uppercase tracking-widest"
      >
        Presented to Dolphin Kid International
      </p>
      <p className="text-white/50 text-sm mt-6">
        Kunal Golechha, Founder — M1 Media
      </p>
      <SlideVisualHint text="Visual: School hallway with children, warm lighting" />
    </div>
  );
}

function SlideIntro() {
  return (
    <div className="h-full flex flex-col justify-center">
      <p
        style={{ color: GOLD }}
        className="text-xs font-bold uppercase tracking-widest mb-4"
      >
        SLIDE 2 / INTRODUCTION
      </p>
      <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8 leading-snug">
        Why Digital Presence Matters More Than Ever
      </h2>
      <BulletList
        items={[
          "93% of parents research schools online before making any decision",
          "Your digital content is your school's first impression — not the building",
          "Social media has replaced word-of-mouth as the primary trust signal",
          "Schools with strong visual content see 3x more engagement and inquiries",
        ]}
      />
      <div className="mt-auto pt-8">
        <SlideVisualHint text="Suggested: Split image — parent on phone / school entrance" />
      </div>
    </div>
  );
}

function SlideProblem() {
  return (
    <div className="h-full flex flex-col justify-center">
      <p
        style={{ color: GOLD }}
        className="text-xs font-bold uppercase tracking-widest mb-4"
      >
        SLIDE 3 / THE PROBLEM
      </p>
      <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 leading-snug">
        The Challenge Schools Face Today
      </h2>
      <p className="text-white/55 text-sm mb-6">
        Great content exists. It just isn't being presented professionally.
      </p>
      <BulletList
        items={[
          "Staff capture moments daily — but without the right tools or expertise",
          "Videos are shaky, poorly lit, and lack audio quality",
          "No consistent visual identity or branded style across platforms",
          "Content goes unnoticed — even when the underlying message is powerful",
          "The result: parents underestimate the school's true quality",
        ]}
      />
      <div className="mt-auto pt-8">
        <SlideVisualHint text="Suggested: Side-by-side — blurry phone video vs. cinematic school shot" />
      </div>
    </div>
  );
}

function SlideInsight() {
  return (
    <div className="h-full flex flex-col justify-center">
      <p
        style={{ color: GOLD }}
        className="text-xs font-bold uppercase tracking-widest mb-6"
      >
        SLIDE 4 / THE KEY INSIGHT
      </p>
      <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8 text-center leading-snug">
        There Is a Gap Between Creating Content and Presenting It
      </h2>
      <blockquote
        className="text-white/80 text-base md:text-lg italic leading-relaxed max-w-3xl mx-auto mb-10 pl-5"
        style={{ borderLeft: `4px solid ${GOLD}` }}
      >
        "A moment captured on a phone is a memory. The same moment — shot with
        purpose, edited with skill, and branded with care — becomes a reason to
        choose you."
      </blockquote>
      <div className="grid grid-cols-2 gap-4">
        <div
          className="rounded-xl p-5"
          style={{
            backgroundColor: "rgba(200,60,60,0.12)",
            border: "1px solid rgba(200,60,60,0.25)",
          }}
        >
          <p className="text-red-300 text-sm font-bold mb-2">
            Without Professional Production
          </p>
          <p className="text-white/60 text-xs leading-relaxed">
            Raw / Unedited Content → Low Trust → Low Enrollment
          </p>
        </div>
        <div
          className="rounded-xl p-5"
          style={{
            backgroundColor: "rgba(214,179,106,0.12)",
            border: "1px solid rgba(214,179,106,0.35)",
          }}
        >
          <p style={{ color: GOLD }} className="text-sm font-bold mb-2">
            With M1 Media
          </p>
          <p className="text-white/60 text-xs leading-relaxed">
            Professionally Produced Content → High Trust → Strong Enrollment
          </p>
        </div>
      </div>
      <div className="mt-auto pt-6">
        <SlideVisualHint text="Suggested: Arrow diagram showing the transformation journey" />
      </div>
    </div>
  );
}

function SlideSolution() {
  const features = [
    {
      icon: "🎬",
      title: "Professional Video Production",
      desc: "Planned, lit, and directed shoots for every school occasion",
    },
    {
      icon: "✂️",
      title: "Classy, Clean Editing",
      desc: "Narratives crafted with music, pacing, and emotional resonance",
    },
    {
      icon: "🎨",
      title: "Motion Graphics & Branding",
      desc: "Animated school identity that makes every video instantly recognizable",
    },
  ];
  return (
    <div className="h-full flex flex-col justify-center">
      <p
        style={{ color: GOLD }}
        className="text-xs font-bold uppercase tracking-widest mb-4"
      >
        SLIDE 5 / THE SOLUTION
      </p>
      <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
        Introducing M1 Media — Your Visual Storytelling Partner
      </h2>
      <p className="text-white/55 text-sm mb-8">
        We don't just make videos. We build your school's brand.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl p-6"
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-bold text-sm mb-2">{f.title}</h3>
            <p className="text-white/60 text-xs leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-auto pt-8">
        <SlideVisualHint text="Suggested: Behind-the-scenes production shot — camera crew in school" />
      </div>
    </div>
  );
}

function SlideBenefits() {
  const benefits = [
    {
      icon: "🔒",
      title: "Increased Parent Trust",
      desc: "Professional content signals safety, quality, and reliability",
    },
    {
      icon: "📈",
      title: "Higher Enrollment Inquiries",
      desc: "Parents who engage with your content are more likely to visit and enroll",
    },
    {
      icon: "🌟",
      title: "Stronger Brand Recognition",
      desc: "A consistent visual identity makes your school memorable across all platforms",
    },
    {
      icon: "💰",
      title: "Higher Perceived Value",
      desc: "Your fees feel justified when your presentation matches your excellence",
    },
  ];
  return (
    <div className="h-full flex flex-col justify-center">
      <p
        style={{ color: GOLD }}
        className="text-xs font-bold uppercase tracking-widest mb-4"
      >
        SLIDE 6 / CORE BENEFITS
      </p>
      <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8">
        What Your School Gains
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="rounded-xl p-5"
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <span className="text-2xl">{b.icon}</span>
            <h3 style={{ color: GOLD }} className="font-bold text-sm mt-2 mb-1">
              {b.title}
            </h3>
            <p className="text-white/55 text-xs leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-auto pt-6">
        <SlideVisualHint text="Suggested: Upward arrow chart / parent reviewing school on tablet" />
      </div>
    </div>
  );
}

function SlideApplications() {
  const scenarios = [
    {
      icon: "🎓",
      title: "Admissions Season",
      desc: "A 90-second brand film replaces a brochure. Parents feel the school before they visit. Inquiry rates go up.",
    },
    {
      icon: "🎉",
      title: "Annual Day & Events",
      desc: "A professionally edited event highlight reel shared on Instagram generates hundreds of shares and new followers overnight.",
    },
    {
      icon: "📚",
      title: "Daily Classroom Content",
      desc: "Short, bright reels of children learning and creating — edited with energy and color — build an ongoing narrative of excellence.",
    },
  ];
  return (
    <div className="h-full flex flex-col justify-center">
      <p
        style={{ color: GOLD }}
        className="text-xs font-bold uppercase tracking-widest mb-4"
      >
        SLIDE 7 / PRACTICAL APPLICATIONS
      </p>
      <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-8">
        Where We Apply This — Real Scenarios
      </h2>
      <div className="space-y-4">
        {scenarios.map((s) => (
          <div
            key={s.title}
            className="rounded-xl p-5 flex gap-4 items-start"
            style={{
              borderLeft: `4px solid ${GOLD}`,
              backgroundColor: "rgba(255,255,255,0.04)",
            }}
          >
            <span className="text-2xl shrink-0">{s.icon}</span>
            <div>
              <h3 style={{ color: GOLD }} className="font-bold text-sm mb-1">
                {s.title}
              </h3>
              <p className="text-white/70 text-xs leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto pt-6">
        <SlideVisualHint text="Suggested: Three thumbnails — admission video / event highlight / classroom reel" />
      </div>
    </div>
  );
}

function SlideLongTerm() {
  return (
    <div className="h-full flex flex-col justify-center">
      <p
        style={{ color: GOLD }}
        className="text-xs font-bold uppercase tracking-widest mb-4"
      >
        SLIDE 8 / LONG-TERM VALUE
      </p>
      <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
        This Is a Brand Investment, Not a One-Time Cost
      </h2>
      <p className="text-white/55 text-sm mb-8">
        Schools that build strong visual identities compound their advantage
        every year.
      </p>
      <BulletList
        items={[
          "Consistent content builds a searchable, shareable archive of your school's story",
          "Each professional video adds to your school's reputation — permanently",
          "Brand equity grows with every post, reel, and campaign you produce",
          "Schools that start early gain a compounding lead over competitors who delay",
        ]}
      />
      <div className="mt-10 text-center">
        <p
          style={{ color: GOLD }}
          className="text-lg md:text-xl font-extrabold italic"
        >
          "Your content today shapes the enrolments of tomorrow."
        </p>
      </div>
      <div className="mt-auto pt-6">
        <SlideVisualHint text="Suggested: Growth chart / timeline illustration" />
      </div>
    </div>
  );
}

function SlideConclusion() {
  const points = [
    "Your school creates remarkable content every single day.",
    "Professional production transforms that content into trust, brand, and enrollment.",
    "M1 Media is built specifically to serve educational institutions like yours.",
  ];
  return (
    <div className="h-full flex flex-col justify-center text-center">
      <p
        style={{ color: GOLD }}
        className="text-xs font-bold uppercase tracking-widest mb-6"
      >
        SLIDE 9 / CONCLUSION
      </p>
      <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-10 max-w-2xl mx-auto leading-snug">
        Your School Has the Story. We Have the Craft.
      </h2>
      <div className="space-y-5 mb-10">
        {points.map((p, i) => (
          <div
            key={p}
            className="flex items-start gap-4 text-left max-w-xl mx-auto"
          >
            <span
              style={{ color: GOLD }}
              className="text-xl font-extrabold tabular-nums shrink-0"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-white text-sm md:text-base leading-relaxed">
              {p}
            </p>
          </div>
        ))}
      </div>
      <p style={{ color: GOLD }} className="italic text-sm max-w-lg mx-auto">
        The question is no longer whether your school needs professional
        content. It is how soon you are willing to start.
      </p>
      <div className="mt-auto pt-6">
        <SlideVisualHint text="Suggested: Montage of school life — children, teachers, events — cinematic color grade" />
      </div>
    </div>
  );
}

function SlideCTA() {
  return (
    <div className="h-full flex flex-col justify-center text-center">
      <p
        style={{ color: GOLD }}
        className="text-xs font-bold uppercase tracking-widest mb-4"
      >
        SLIDE 10 / LET'S BEGIN
      </p>
      <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 max-w-2xl mx-auto leading-snug">
        Ready to Transform How the World Sees Your School?
      </h2>
      <p className="text-white/55 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
        No obligation. No pressure. Just a genuine conversation about your
        school's vision and how we can help bring it to life.
      </p>
      <a
        href="tel:+917665297824"
        data-ocid="slides.primary_button"
        style={{ backgroundColor: GOLD, color: NAVY }}
        className="inline-block px-10 py-4 rounded-xl font-extrabold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity shadow-lg mx-auto"
      >
        Start the Conversation
      </a>
      <div
        className="my-8 h-px max-w-xs mx-auto"
        style={{ backgroundColor: "rgba(214,179,106,0.3)" }}
      />
      <div className="flex flex-wrap justify-center gap-8 mb-6">
        <div>
          <p style={{ color: GOLD }} className="font-bold text-sm">
            Kunal Golechha
          </p>
          <p className="text-white/50 text-xs">Founder, M1 Media</p>
        </div>
        <div>
          <p style={{ color: GOLD }} className="font-bold text-sm">
            Lakshay Sharma
          </p>
          <p className="text-white/50 text-xs">Design Head, M1 Media</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-5 text-xs">
        <a
          href="tel:+917665297824"
          className="text-white/70 hover:text-white flex items-center gap-1.5"
        >
          📞 +91 76652 97824
        </a>
        <a
          href="tel:+918949784285"
          className="text-white/70 hover:text-white flex items-center gap-1.5"
        >
          📞 +91 89497 84285
        </a>
        <a
          href="https://www.instagram.com/_m1.media/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: GOLD }}
          className="hover:opacity-80 flex items-center gap-1.5"
        >
          📸 @_m1.media
        </a>
      </div>
      <div className="mt-auto pt-6">
        <SlideVisualHint text="Suggested: Professional handshake / collaboration photo" />
      </div>
    </div>
  );
}

const SLIDE_CONTENT_MAP: Record<string, React.FC> = {
  title: SlideTitle,
  intro: SlideIntro,
  problem: SlideProblem,
  insight: SlideInsight,
  solution: SlideSolution,
  benefits: SlideBenefits,
  applications: SlideApplications,
  longterm: SlideLongTerm,
  conclusion: SlideConclusion,
  cta: SlideCTA,
};

function SlideDeck({ onClose }: { onClose: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (index: number, dir: number) => {
    setDirection(dir);
    setCurrentSlide(index);
  };

  const prev = () => {
    if (currentSlide > 0) goTo(currentSlide - 1, -1);
  };
  const next = () => {
    if (currentSlide < TOTAL_SLIDES - 1) goTo(currentSlide + 1, 1);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  const slide = SLIDES[currentSlide];
  const SlideContent = SLIDE_CONTENT_MAP[slide.content];
  const progressWidth = ((currentSlide + 1) / TOTAL_SLIDES) * 100;

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  return (
    <motion.div
      data-ocid="slides.modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[200] flex flex-col"
      style={{ backgroundColor: NAVY }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-6 py-3 shrink-0"
        style={{ borderBottom: "1px solid rgba(214,179,106,0.15)" }}
      >
        <span className="text-white/50 text-xs tabular-nums">
          {currentSlide + 1} / {TOTAL_SLIDES}
        </span>
        <span
          style={{ color: GOLD }}
          className="text-sm font-extrabold tracking-widest uppercase"
        >
          M1 MEDIA
        </span>
        <button
          type="button"
          onClick={onClose}
          data-ocid="slides.close_button"
          className="text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Close presentation"
        >
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M14.25 3.75L3.75 14.25M3.75 3.75L14.25 14.25" />
          </svg>
        </button>
      </div>

      {/* Slide content */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 px-6 sm:px-12 py-8 sm:py-10"
          >
            <SlideContent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation + progress */}
      <div className="shrink-0 pb-4">
        <div className="flex items-center justify-center gap-5 mb-4">
          <button
            type="button"
            onClick={prev}
            disabled={currentSlide === 0}
            data-ocid="slides.pagination_prev"
            style={{ borderColor: "rgba(214,179,106,0.4)" }}
            className="min-w-[48px] min-h-[48px] rounded-full border flex items-center justify-center text-white/70 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all"
            aria-label="Previous slide"
          >
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 4L6 9L11 14" />
            </svg>
          </button>

          <div className="flex items-center gap-1.5">
            {SLIDES.map((s, i) => (
              <button
                type="button"
                key={s.id}
                onClick={() => goTo(i, i > currentSlide ? 1 : -1)}
                data-ocid="slides.tab"
                className="rounded-full transition-all"
                style={{
                  width: i === currentSlide ? "20px" : "6px",
                  height: "6px",
                  backgroundColor:
                    i === currentSlide ? GOLD : "rgba(255,255,255,0.25)",
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            disabled={currentSlide === TOTAL_SLIDES - 1}
            data-ocid="slides.pagination_next"
            style={{ borderColor: "rgba(214,179,106,0.4)" }}
            className="min-w-[48px] min-h-[48px] rounded-full border flex items-center justify-center text-white/70 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all"
            aria-label="Next slide"
          >
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 4L12 9L7 14" />
            </svg>
          </button>
        </div>

        {/* Progress bar */}
        <div className="h-0.5 w-full bg-white/10">
          <motion.div
            className="h-full"
            style={{ backgroundColor: GOLD }}
            animate={{ width: `${progressWidth}%` }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// ─── NavBar ────────────────────────────────────────────────────────────────────

function NavBar({ onViewSlides }: { onViewSlides: () => void }) {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: "Overview", href: "#reality" },
    { label: "The Gap", href: "#gap" },
    { label: "Solution", href: "#solution" },
    { label: "Transformation", href: "#transformation" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header
      data-ocid="nav.panel"
      style={{ backgroundColor: NAVY }}
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-lg" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a
          href="/"
          data-ocid="nav.link"
          style={{ color: GOLD }}
          className="text-lg font-extrabold tracking-widest uppercase"
        >
          M1 MEDIA
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              data-ocid="nav.link"
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onViewSlides}
            data-ocid="nav.secondary_button"
            className="ml-2 px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide border-2 border-white/60 text-white hover:bg-white/10 transition-colors"
          >
            View Slides
          </button>
          <a
            href="#contact"
            data-ocid="nav.primary_button"
            style={{ backgroundColor: GOLD, color: NAVY }}
            className="ml-2 px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            Book a Consultation
          </a>
        </nav>
        <button
          type="button"
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ backgroundColor: NAVY }}
            className="md:hidden overflow-hidden border-t border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  data-ocid="nav.link"
                  className="text-white/80 hover:text-white text-sm font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  onViewSlides();
                }}
                data-ocid="nav.secondary_button"
                className="px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide border-2 border-white/60 text-white hover:bg-white/10 transition-colors text-center"
              >
                View Slides
              </button>
              {/* biome-ignore lint/a11y/useValidAnchor: hash navigation link */}
              <a
                href="#contact"
                data-ocid="nav.primary_button"
                style={{ backgroundColor: GOLD, color: NAVY }}
                className="px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wide text-center block"
                onClick={() => setMenuOpen(false)}
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-start overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-school.dim_1400x700.jpg')",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(11,31,58,0.65)" }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <GoldLabel>Presented to Dolphin Kid International</GoldLabel>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight mb-6">
            Your Story Deserves
            <br />
            to Be Seen. <span style={{ color: GOLD }}>Professionally.</span>
          </h1>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl">
            Every day, your school creates moments worth sharing. The question
            is — are they being shared in a way that builds trust, drives
            enrollment, and reflects the excellence you deliver?
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#gap"
              data-ocid="hero.primary_button"
              style={{ backgroundColor: GOLD, color: NAVY }}
              className="px-7 py-3 rounded-lg font-bold uppercase tracking-wide text-sm hover:opacity-90 transition-opacity"
            >
              See How We Help
            </a>
            <a
              href="https://www.instagram.com/_m1.media/"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.secondary_button"
              className="px-7 py-3 rounded-lg font-bold uppercase tracking-wide text-sm border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function RealitySection() {
  const cards = [
    {
      icon: "📱",
      title: "Content Is Created Daily",
      desc: "Activities, events, and achievements are captured regularly by staff — there is no shortage of meaningful moments.",
    },
    {
      icon: "📉",
      title: "Impact Stays Low",
      desc: "Shaky footage, poor lighting, and basic edits reduce how parents perceive your school — regardless of how great the moment was.",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Parents Judge Quickly",
      desc: "In 3–5 seconds, a parent decides if a school feels premium or average — based on visuals alone. First impressions are everything.",
    },
    {
      icon: "🏆",
      title: "Competition Is Growing",
      desc: "Neighboring schools with better visual content are winning the attention and admissions you deserve.",
    },
  ];
  return (
    <section id="reality" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionHeading>The Current Reality</SectionHeading>
          <GoldSubline>What most schools experience today</GoldSubline>
          <p className="text-[#4B5563] text-base leading-relaxed max-w-3xl mx-auto">
            Schools like Dolphin Kid International are filled with incredible
            moments — children learning, laughing, growing, and thriving.
            Teachers put heart into every activity. Events are planned with
            care. The energy in your classrooms is real and powerful. But when
            it is time to share that energy with the world — on social media, in
            admission campaigns, or on your website — the result often falls
            short of what it deserves.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              data-ocid={`reality.item.${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#F3F5F7] rounded-xl p-6 shadow-card"
            >
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="text-[#111827] font-bold text-lg mb-2">
                {c.title}
              </h3>
              <p className="text-[#4B5563] text-sm leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GapSection() {
  return (
    <section
      id="gap"
      style={{ backgroundColor: NAVY }}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${GOLD} 0, ${GOLD} 1px, transparent 0, transparent 50%)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionHeading light>The Gap No One Talks About</SectionHeading>
          <GoldSubline>
            The difference between capturing a moment and presenting it
            powerfully
          </GoldSubline>
        </motion.div>
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-white/90 text-xl md:text-2xl leading-relaxed font-medium max-w-3xl mx-auto mb-14 italic pl-6"
          style={{ borderLeft: `4px solid ${GOLD}` }}
        >
          "A child's laughter captured on a phone is a memory. The same moment —
          shot professionally, edited with care, and presented with music and
          motion — becomes a statement. A brand. A reason for parents to choose
          you."
        </motion.blockquote>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            data-ocid="gap.item.1"
            className="rounded-xl p-7"
            style={{
              backgroundColor: "rgba(200,60,60,0.12)",
              border: "1px solid rgba(200,60,60,0.25)",
            }}
          >
            <h3 className="text-red-300 font-bold text-lg uppercase tracking-wide mb-5">
              Without Professional Execution
            </h3>
            <ul className="space-y-3">
              {[
                "Shaky, unstabilised footage",
                "Distracting background noise",
                "Basic or absent text overlays",
                "Low watch time and poor retention",
                "Forgettable first impression",
              ].map((item) => (
                <li
                  key={item}
                  className="text-white/70 text-sm flex items-start gap-2"
                >
                  <span className="mt-0.5 text-red-400">✗</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            data-ocid="gap.item.2"
            className="rounded-xl p-7"
            style={{
              backgroundColor: "rgba(214,179,106,0.12)",
              border: "1px solid rgba(214,179,106,0.35)",
            }}
          >
            <h3
              style={{ color: GOLD }}
              className="font-bold text-lg uppercase tracking-wide mb-5"
            >
              With M1 Media
            </h3>
            <ul className="space-y-3">
              {[
                "Cinematic quality, every frame",
                "Clean audio and professional sound design",
                "Branded motion graphics and animations",
                "High engagement and watch-through rates",
                "Lasting brand impression on every parent",
              ].map((item) => (
                <li
                  key={item}
                  className="text-white/80 text-sm flex items-start gap-2"
                >
                  <span style={{ color: GOLD }} className="mt-0.5">
                    ✓
                  </span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const features = [
    {
      icon: "🎬",
      title: "Professional Video Production",
      desc: "From classroom shoots to annual day coverage — every frame is planned, lit, and captured with intent. No blurry shots. No wasted footage.",
    },
    {
      icon: "✂️",
      title: "Classy, Clean Editing",
      desc: "We craft narratives. Short-form reels, event highlights, brand films — edited to perfection with music, pacing, and emotional impact.",
    },
    {
      icon: "🎨",
      title: "Motion Graphics & Branding",
      desc: "Your school's name, colors, and identity — animated beautifully. Intros, lower thirds, branded transitions that make your content instantly recognizable.",
    },
    {
      icon: "📲",
      title: "Social Media Strategy",
      desc: "Platform-ready formats, optimal lengths, captions — we deliver content ready to post, with maximum engagement in mind.",
    },
    {
      icon: "🎓",
      title: "Admission Campaign Content",
      desc: "Content designed specifically to convert curious parents into enrolled families. Storytelling that sells without feeling salesy.",
    },
    {
      icon: "🤝",
      title: "Long-Term Brand Building",
      desc: "We don't just produce videos. We help you build a visual identity that compounds in value over time.",
    },
  ];
  return (
    <section id="solution" className="py-20 md:py-28 bg-[#F3F5F7]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionHeading>The Solution</SectionHeading>
          <GoldSubline>
            What M1 Media Brings to Dolphin Kid International
          </GoldSubline>
          <p className="text-[#4B5563] text-base leading-relaxed max-w-3xl mx-auto">
            M1 Media is not a videographer. We are a{" "}
            <strong className="text-[#111827]">
              visual storytelling partner
            </strong>
            . We work specifically with educational institutions to craft
            content that speaks to both worlds: the child who needs to feel
            excited, and the parent who needs to feel confident.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              data-ocid={`solution.item.${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-xl p-6 shadow-card hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-[#111827] text-base mb-2">
                {f.title}
              </h3>
              <p className="text-[#4B5563] text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TransformationSection() {
  const impacts = [
    {
      icon: "🔒",
      title: "Parent Trust Increases",
      desc: "Parents spend more time on your website and social media. They share your content. They refer friends. Trust is built before they even visit.",
    },
    {
      icon: "📈",
      title: "Enrollment Conversations Improve",
      desc: "When parents arrive for admissions meetings, they already feel confident about your school — because your digital presence showed them quality first.",
    },
    {
      icon: "🌟",
      title: "School Brand Gets Stronger",
      desc: "Over time, consistent professional content builds a brand that is recognized, respected, and remembered in your city.",
    },
    {
      icon: "💰",
      title: "Perceived Value Goes Up",
      desc: "The same fee structure feels justified — even premium — when the school's presentation matches the quality of its education.",
    },
  ];
  return (
    <section id="transformation" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <SectionHeading>The Transformation</SectionHeading>
          <GoldSubline>
            What changes when your content looks professional
          </GoldSubline>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {impacts.map((item, i) => (
            <motion.div
              key={item.title}
              data-ocid={`transformation.item.${i + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#F3F5F7] rounded-xl p-6 shadow-card"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-[#111827] font-bold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-[#4B5563] text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          data-ocid="transformation.panel"
          style={{ backgroundColor: NAVY }}
          className="rounded-2xl p-8 md:p-12"
        >
          <h3
            style={{ color: GOLD }}
            className="text-2xl font-extrabold uppercase tracking-wide mb-5"
          >
            🎬 Picture This
          </h3>
          <p className="text-white/85 text-base md:text-lg leading-relaxed">
            A parent in your city is searching for the right school for their
            child. They visit three school pages. Two have basic videos — shaky
            clips, no music, plain text. The third has a stunning 90-second
            brand film with happy children, proud teachers, and beautifully
            animated school values.{" "}
            <strong className="text-white">
              Which school do they call first?
            </strong>{" "}
            That third school can be{" "}
            <span style={{ color: GOLD }}>Dolphin Kid International.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      style={{ backgroundColor: NAVY }}
      className="py-20 md:py-28"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GoldLabel>Let's Build Something Great Together</GoldLabel>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-snug">
            Ready to Transform How the World Sees{" "}
            <span style={{ color: GOLD }}>Dolphin Kid International?</span>
          </h2>
          <p className="text-white/75 text-base leading-relaxed max-w-2xl mx-auto mb-10">
            We'd love to understand your vision and show you exactly how M1
            Media can help your school grow. No commitment. Just a conversation
            that could change how your school is seen forever.
          </p>
          <a
            href="tel:+917665297824"
            data-ocid="contact.primary_button"
            style={{ backgroundColor: GOLD, color: NAVY }}
            className="inline-block px-10 py-4 rounded-xl font-extrabold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity shadow-lg"
          >
            Start the Conversation
          </a>
        </motion.div>
        <div
          className="my-14 h-px"
          style={{ backgroundColor: "rgba(214,179,106,0.25)" }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <div
            data-ocid="contact.item.1"
            className="rounded-xl p-7"
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div className="text-4xl mb-3">👤</div>
            <h4 style={{ color: GOLD }} className="font-bold text-lg mb-1">
              Kunal Golechha
            </h4>
            <p className="text-white/60 text-sm">Founder, M1 Media</p>
          </div>
          <div
            data-ocid="contact.item.2"
            className="rounded-xl p-7"
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div className="text-4xl mb-3">🎨</div>
            <h4 style={{ color: GOLD }} className="font-bold text-lg mb-1">
              Lakshay Sharma
            </h4>
            <p className="text-white/60 text-sm">Design Head, M1 Media</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 text-sm"
        >
          <a
            href="tel:+917665297824"
            data-ocid="contact.link"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <span>📞</span>
            <span>+91 76652 97824</span>
          </a>
          <a
            href="tel:+918949784285"
            data-ocid="contact.link"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <span>📞</span>
            <span>+91 89497 84285</span>
          </a>
          <a
            href="https://www.instagram.com/_m1.media/"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="contact.link"
            style={{ color: GOLD }}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity font-semibold"
          >
            <span>📸</span>
            <span>@_m1.media</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{ backgroundColor: "#060f1e" }}
      className="py-6 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <span>M1 Media &copy; {year}</span>
        <span>Presented to Dolphin Kid International</span>
        <a
          href="https://www.instagram.com/_m1.media/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: GOLD }}
          className="hover:opacity-80 transition-opacity"
          data-ocid="footer.link"
        >
          📸 Instagram
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  const [slideMode, setSlideMode] = useState(false);

  return (
    <div className="font-sans">
      <NavBar onViewSlides={() => setSlideMode(true)} />
      <main>
        <HeroSection />
        <RealitySection />
        <GapSection />
        <SolutionSection />
        <TransformationSection />
        <ContactSection />
      </main>
      <Footer />
      <AnimatePresence>
        {slideMode && <SlideDeck onClose={() => setSlideMode(false)} />}
      </AnimatePresence>
    </div>
  );
}
