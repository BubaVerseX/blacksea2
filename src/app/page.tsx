"use client";

import Image from "next/image";
import { type CSSProperties, useEffect, useMemo, useState } from "react";

type Lang = "ka" | "en";
type IconKind = "pool" | "gym" | "aqua" | "aerobics" | "crossfit";
type Tone = "water" | "energy";

const phoneNumbers = ["+995595981100", "+995591204050"];
const displayPhoneNumbers = ["+995 595 981 100", "+995 591 204 050"];
const fitPassUrl = "https://fitpass.ge/en/objects/black-sea-2-blek-si-2";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Black%20Sea%202%20Gldani%20Tbilisi";

const navTargets = [
  { id: "services", href: "#services" },
  { id: "why", href: "#why" },
  { id: "gallery", href: "#gallery" },
  { id: "swimming", href: "#swimming" },
  { id: "contact", href: "#contact" },
] as const;

const serviceMeta: Array<{ icon: IconKind; tone: Tone }> = [
  { icon: "pool", tone: "water" },
  { icon: "pool", tone: "water" },
  { icon: "gym", tone: "energy" },
  { icon: "aqua", tone: "water" },
  { icon: "aerobics", tone: "energy" },
  { icon: "crossfit", tone: "energy" },
];

const galleryMeta = [
  {
    src: "/black-sea-2-gallery-main-pool.jpg",
    alt: "Black Sea 2 main swimming pool",
    position: "object-[48%_center]",
    className: "sm:col-span-2 lg:row-span-2 lg:min-h-[590px]",
    tone: "water" as Tone,
  },
  {
    src: "/black-sea-2-gallery-lanes.jpg",
    alt: "Black Sea 2 swimming pool lanes",
    position: "object-[52%_center]",
    className: "min-h-[300px]",
    tone: "water" as Tone,
  },
  {
    src: "/black-sea-2-gallery-start.jpg",
    alt: "Black Sea 2 pool starting blocks",
    position: "object-[44%_center]",
    className: "min-h-[300px]",
    tone: "water" as Tone,
  },
  {
    src: "/black-sea-2-gallery-training.jpg",
    alt: "Black Sea 2 indoor training area",
    position: "object-center",
    className: "min-h-[340px]",
    tone: "energy" as Tone,
  },
  {
    src: "/black-sea-2-gallery-lockers.jpg",
    alt: "Black Sea 2 locker room",
    position: "object-[56%_center]",
    className: "min-h-[340px]",
    tone: "energy" as Tone,
  },
  {
    src: "/black-sea-2-gallery-arena.jpg",
    alt: "Black Sea 2 sports arena wall",
    position: "object-[44%_center]",
    className: "min-h-[300px]",
    tone: "energy" as Tone,
  },
  {
    src: "/black-sea-2-gallery-water.jpg",
    alt: "Black Sea 2 wide swimming pool",
    position: "object-center",
    className: "sm:col-span-2 min-h-[300px]",
    tone: "water" as Tone,
  },
];

const translations = {
  ka: {
    language: "ქართული",
    nav: {
      services: "სერვისები",
      why: "რატომ ჩვენ",
      gallery: "გალერეა",
      swimming: "ცურვა",
      contact: "კონტაქტი",
    },
    common: {
      callShort: "დარეკვა",
      call: "დაგვიკავშირდი",
      directions: "რუკაზე ნახვა",
      fitpass: "FitPass",
      maps: "Google Maps",
      menu: "მენიუ",
      close: "დახურვა",
    },
    hero: {
      eyebrow: "სპორტულ-გამაჯანსაღებელი კომპლექსი გლდანში",
      subtitle: "ცურვა • ფიტნესი • Aqua Aerobics • CrossFit გლდანში",
      rating: "FitPass რეიტინგი",
      reviews: "შეფასება",
      services: "სერვისი",
    },
    services: {
      eyebrow: "სერვისები",
      title: "ფიტნესი, ცურვა და ენერგია ერთ სივრცეში",
      description:
        "Black Sea 2 აერთიანებს აუზს, დარბაზს და ჯგუფურ ვარჯიშებს ისე, რომ ყოველდღიური რუტინა მარტივი და მოქნილი იყოს.",
      items: [
        {
          title: "25 მეტრიანი აუზი",
          description:
            "სუფთა, ნათელი სივრცე ყოველდღიური ცურვისთვის და სტრუქტურირებული ვარჯიშისთვის.",
        },
        {
          title: "12.5 მეტრიანი აუზი",
          description:
            "კომფორტული წყლის ზონა მსუბუქი სესიებისთვის, ბავშვებისთვის და ტექნიკური ვარჯიშისთვის.",
        },
        {
          title: "Gym",
          description:
            "თანამედროვე ფიტნეს სივრცე ძალის, გამძლეობის და ყოველდღიური ფორმის შესანარჩუნებლად.",
        },
        {
          title: "Aqua Aerobics",
          description: "წყლის წინააღმდეგობაზე აგებული დაბალი დატვირთვის ჯგუფური ვარჯიში.",
        },
        {
          title: "აერობიკა",
          description: "ენერგიული სტუდიური სესიები მობილობის, გამძლეობის და ტონუსისთვის.",
        },
        {
          title: "CrossFit",
          description:
            "ფუნქციური ვარჯიში ძალაზე, ტემპზე და რეალურ პროგრესზე ორიენტირებული პროგრამით.",
        },
      ],
    },
    why: {
      eyebrow: "რატომ Black Sea 2",
      title: "სივრცე, რომელსაც ყოველდღიური მოძრაობისთვის ენდობი",
      description:
        "ყველა დეტალი აწყობილია მკაფიოდ: ძლიერი პირველი შთაბეჭდილება, სწრაფი მოქმედება და სერვისები, რომლებიც მარტივად იკითხება.",
      note: "მკაფიო, თანამედროვე და პროფესიონალური.",
      items: [
        "თანამედროვე ტრენაჟორები",
        "25 მეტრიანი აუზი",
        "პროფესიონალი მწვრთნელები",
        "CrossFit",
        "Aqua Aerobics",
        "დიდი პარკინგი",
        "FitPass პარტნიორი",
      ],
    },
    gallery: {
      eyebrow: "გალერეა",
      title: "რეალური ფოტოები Black Sea 2-ის სივრცეებიდან",
      description:
        "კადრები უფრო ცოცხალია: ზუმი, რბილი გრადიენტი და მოძრაობა, რომელიც გვერდს პრემიუმ სპორტულ ხასიათს აძლევს.",
      open: "ნახვა",
      items: [
        { title: "აუზი", subtitle: "დიდი წყლის სივრცე" },
        { title: "ბილიკები", subtitle: "ცურვის ზონა" },
        { title: "Aqua", subtitle: "წყლის ვარჯიშები" },
        { title: "ვარჯიში", subtitle: "სპორტული სივრცე" },
        { title: "კომფორტი", subtitle: "ლოკერები" },
        { title: "სპორტი", subtitle: "მრავალფუნქციური სივრცე" },
        { title: "წყალი", subtitle: "აუზის ატმოსფერო" },
      ],
    },
    swimming: {
      eyebrow: "ცურვა",
      title: "წყლის სივრცე, რომელიც ცალკე ხასიათს ქმნის.",
      label: "Pool Section",
      headline: "ცურვა, აღდგენა და Aqua Aerobics",
      description:
        "ლურჯი ატმოსფერო შეგნებულად გამოყოფს წყალს ფიტნესის ყვითელი ენერგიისგან. ეს ნაწილი იგრძნობა უფრო გრილად, მშვიდად და კონცენტრირებულად.",
      highlights: [
        "25 მეტრიანი აუზი lane swimming-ისთვის",
        "12.5 მეტრიანი აუზი მსუბუქი წყლის სესიებისთვის",
        "Aqua Aerobics დაბალი დატვირთვით და მაღალი ენერგიით",
      ],
    },
    hours: {
      eyebrow: "განრიგი",
      title: "ადრე იწყება. გვიან მთავრდება.",
      description:
        "განრიგი მორგებულია დილის ცურვაზე, საღამოს ვარჯიშზე და კვირის ბოლოს მოძრაობაზე.",
      items: [
        { days: "ორშაბათი - შაბათი", time: "07:00-22:00" },
        { days: "კვირა", time: "09:00-21:00" },
      ],
    },
    contact: {
      eyebrow: "ლოკაცია",
      title: "გლდანი, თბილისი",
      description:
        "გახსენი Google Maps, დარეკე პირდაპირ, ან ნახე ობიექტი FitPass-ზე. მთავარი მოქმედებები ყოველთვის ერთი შეხებით ჩანს.",
      cardEyebrow: "კონტაქტი",
      callTitle: "Black Sea 2",
      trust: "FitPass ნდობა",
      reviewLine: "1354+ შეფასება",
      mapPreview: "რუკის გადახედვა",
      mapHint: "Black Sea 2 • Gldani",
    },
    footer: {
      description: "ფიტნესი, ცურვა, Aqua Aerobics და CrossFit გლდანში.",
      hours: "სამუშაო საათები",
    },
  },
  en: {
    language: "English",
    nav: {
      services: "Services",
      why: "Why us",
      gallery: "Gallery",
      swimming: "Swimming",
      contact: "Contact",
    },
    common: {
      callShort: "Call",
      call: "Call now",
      directions: "Get directions",
      fitpass: "FitPass",
      maps: "Google Maps",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      eyebrow: "Sports and wellness complex in Gldani",
      subtitle: "Swimming • Fitness • Aqua Aerobics • CrossFit in Gldani",
      rating: "FitPass rating",
      reviews: "reviews",
      services: "services",
    },
    services: {
      eyebrow: "Services",
      title: "Fitness, swimming, and energy in one place",
      description:
        "Black Sea 2 brings pools, gym work, and group training together so a daily routine feels simple and flexible.",
      items: [
        {
          title: "25m Swimming Pool",
          description: "A clean, bright pool for daily laps and structured swim training.",
        },
        {
          title: "12.5m Pool",
          description: "A comfortable water zone for lighter sessions, children, and technique work.",
        },
        {
          title: "Gym",
          description: "A modern fitness space for strength, endurance, and everyday performance.",
        },
        {
          title: "Aqua Aerobics",
          description: "Low-impact group training powered by water resistance.",
        },
        {
          title: "Aerobics",
          description: "Energetic studio sessions for mobility, stamina, and tone.",
        },
        {
          title: "CrossFit",
          description: "Functional training focused on strength, pace, and real progress.",
        },
      ],
    },
    why: {
      eyebrow: "Why Black Sea 2",
      title: "A place people can trust for daily movement",
      description:
        "Every detail is made to feel clear: a strong first impression, fast actions, and services people can understand instantly.",
      note: "Clear, modern, and professional.",
      items: [
        "Modern equipment",
        "25m swimming pool",
        "Professional trainers",
        "CrossFit",
        "Aqua Aerobics",
        "Large parking",
        "FitPass partner",
      ],
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Real photos from Black Sea 2 spaces",
      description:
        "The gallery now feels more alive with image zoom, soft overlays, and motion that keeps the premium sport mood intact.",
      open: "View",
      items: [
        { title: "Pool", subtitle: "Large water space" },
        { title: "Lanes", subtitle: "Swimming zone" },
        { title: "Aqua", subtitle: "Water training" },
        { title: "Training", subtitle: "Athletic space" },
        { title: "Comfort", subtitle: "Locker area" },
        { title: "Sport", subtitle: "Multi-use space" },
        { title: "Water", subtitle: "Pool atmosphere" },
      ],
    },
    swimming: {
      eyebrow: "Swimming",
      title: "A water space with its own atmosphere.",
      label: "Pool Section",
      headline: "Swimming, recovery, and Aqua Aerobics",
      description:
        "The blue atmosphere separates water from the yellow energy of fitness. This section feels cooler, calmer, and more focused.",
      highlights: [
        "25m pool for lane swimming",
        "12.5m pool for lighter water sessions",
        "Aqua Aerobics with low impact and high energy",
      ],
    },
    hours: {
      eyebrow: "Working hours",
      title: "Starts early. Ends late.",
      description:
        "A schedule designed for morning swimming, after-work training, and weekend movement.",
      items: [
        { days: "Monday - Saturday", time: "07:00-22:00" },
        { days: "Sunday", time: "09:00-21:00" },
      ],
    },
    contact: {
      eyebrow: "Location",
      title: "Gldani, Tbilisi",
      description:
        "Open Google Maps, call directly, or view the object on FitPass. The key actions stay one tap away.",
      cardEyebrow: "Contact",
      callTitle: "Black Sea 2",
      trust: "FitPass trust",
      reviewLine: "1354+ reviews",
      mapPreview: "Map preview",
      mapHint: "Black Sea 2 • Gldani",
    },
    footer: {
      description: "Fitness, swimming, Aqua Aerobics, and CrossFit in Gldani.",
      hours: "Working hours",
    },
  },
} as const;

const revealDelay = (delay: number) =>
  ({ "--reveal-delay": `${delay}ms` }) as CSSProperties;

const cardTilt = (delay: number) =>
  ({ "--reveal-delay": `${delay}ms`, "--glow-x": "50%", "--glow-y": "0%" }) as CSSProperties;

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("ka");
  const [activeSection, setActiveSection] = useState("top");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroShift, setHeroShift] = useState(0);
  const t = translations[lang];

  const services = useMemo(
    () =>
      t.services.items.map((item, index) => ({
        ...item,
        ...serviceMeta[index],
      })),
    [t.services.items],
  );

  const galleryItems = useMemo(
    () =>
      t.gallery.items.map((item, index) => ({
        ...item,
        ...galleryMeta[index],
      })),
    [t.gallery.items],
  );

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        const nextY = window.scrollY;
        setIsScrolled(nextY > 24);
        setHeroShift(Math.min(nextY * 0.08, 28));
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = ["top", ...navTargets.map((item) => item.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: [0, 0.2, 0.6] },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const setLanguage = (nextLang: Lang) => {
    setLang(nextLang);
    setMenuOpen(false);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0B0B0B] text-white">
      <AmbientBackground />
      <Navbar
        activeSection={activeSection}
        isScrolled={isScrolled || menuOpen}
        lang={lang}
        menuOpen={menuOpen}
        setLanguage={setLanguage}
        setMenuOpen={setMenuOpen}
        t={t}
      />
      <Hero heroShift={heroShift} t={t} />
      <ServicesSection services={services} t={t} />
      <WhySection t={t} />
      <GallerySection galleryItems={galleryItems} t={t} />
      <SwimmingSection t={t} />
      <HoursSection t={t} />
      <ContactSection t={t} />
      <Footer t={t} />
    </main>
  );
}

function Navbar({
  activeSection,
  isScrolled,
  lang,
  menuOpen,
  setLanguage,
  setMenuOpen,
  t,
}: {
  activeSection: string;
  isScrolled: boolean;
  lang: Lang;
  menuOpen: boolean;
  setLanguage: (nextLang: Lang) => void;
  setMenuOpen: (open: boolean) => void;
  t: (typeof translations)[Lang];
}) {
  const navLinks = navTargets.map((item) => ({
    ...item,
    label: t.nav[item.id],
  }));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        isScrolled
          ? "border-white/10 bg-[#0B0B0B]/88 shadow-[0_20px_70px_rgba(0,0,0,0.34)] backdrop-blur-2xl"
          : "border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8"
      >
        <a
          href="#top"
          className="group flex min-h-12 items-center gap-3"
          aria-label="Black Sea 2 home"
          onClick={() => setMenuOpen(false)}
        >
          <BrandLogo
            priority
            className="size-11 transition duration-500 group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:shadow-[0_0_34px_rgba(242,195,0,0.24)]"
          />
          <span className="hidden text-lg font-black uppercase sm:inline">Black Sea 2</span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-semibold text-white/72 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "group relative py-2 transition duration-300 hover:text-white",
                activeSection === item.id && "text-white",
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-[#F2C300] transition-transform duration-300 group-hover:scale-x-100",
                  activeSection === item.id && "scale-x-100",
                )}
              />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitch lang={lang} setLanguage={setLanguage} />
          <PrimaryLink compact href={`tel:${phoneNumbers[0]}`}>
            <PhoneIcon />
            {t.common.callShort}
          </PrimaryLink>
        </div>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? t.common.close : t.common.menu}
          className="group relative flex size-11 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] transition hover:border-[#F2C300]/50 hover:bg-white/[0.1] lg:hidden"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={cn(
              "absolute h-0.5 w-5 rounded-full bg-white transition duration-300",
              menuOpen ? "translate-y-0 rotate-45 bg-[#F2C300]" : "-translate-y-1.5",
            )}
          />
          <span
            className={cn(
              "absolute h-0.5 w-5 rounded-full bg-white transition duration-300",
              menuOpen ? "opacity-0" : "opacity-100",
            )}
          />
          <span
            className={cn(
              "absolute h-0.5 w-5 rounded-full bg-white transition duration-300",
              menuOpen ? "translate-y-0 -rotate-45 bg-[#F2C300]" : "translate-y-1.5",
            )}
          />
        </button>
      </nav>

      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-white/10 bg-[#0B0B0B]/96 backdrop-blur-2xl transition-all duration-500",
          menuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="mx-auto grid max-w-7xl gap-2 px-5 py-5 sm:px-6">
          {navLinks.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "flex min-h-12 items-center justify-between rounded-lg border px-4 text-base font-black transition",
                activeSection === item.id
                  ? "border-[#F2C300]/45 bg-[#F2C300]/10 text-[#F2C300]"
                  : "border-white/10 bg-white/[0.035] text-white",
              )}
              style={revealDelay(index * 45)}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
              <ArrowIcon />
            </a>
          ))}
          <div className="mt-3 flex items-center justify-between gap-3">
            <LanguageSwitch lang={lang} setLanguage={setLanguage} />
            <PrimaryLink compact href={`tel:${phoneNumbers[0]}`}>
              <PhoneIcon />
              {t.common.callShort}
            </PrimaryLink>
          </div>
        </div>
      </div>
    </header>
  );
}

function LanguageSwitch({
  lang,
  setLanguage,
}: {
  lang: Lang;
  setLanguage: (nextLang: Lang) => void;
}) {
  return (
    <div
      aria-label="Language switch"
      className="inline-flex min-h-11 items-center rounded-lg border border-white/10 bg-white/[0.04] p-1 text-sm font-black"
    >
      {(["ka", "en"] as const).map((item) => (
        <button
          key={item}
          type="button"
          className={cn(
            "min-h-9 rounded-md px-3 transition duration-300",
            lang === item
              ? "bg-[#F2C300] text-[#0B0B0B] shadow-[0_0_26px_rgba(242,195,0,0.24)]"
              : "text-white/62 hover:text-white",
          )}
          onClick={() => setLanguage(item)}
        >
          {item === "ka" ? "KA" : "EN"}
        </button>
      ))}
    </div>
  );
}

function Hero({
  heroShift,
  t,
}: {
  heroShift: number;
  t: (typeof translations)[Lang];
}) {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-20"
    >
      <Image
        src="/black-sea-2-hero-real.jpg"
        alt="Black Sea 2 swimming pool interior"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_center] scale-[1.04] transition-transform duration-300"
        style={{ transform: `translate3d(0, ${heroShift}px, 0) scale(1.04)` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.95),rgba(11,11,11,0.78)_48%,rgba(11,11,11,0.34)),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(11,11,11,0.98))]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_42%,rgba(14,93,158,0.23),transparent_45%),radial-gradient(ellipse_at_12%_68%,rgba(242,195,0,0.12),transparent_36%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
      <HeroParticles />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-4xl">
          <p
            data-reveal
            className="mb-7 inline-flex rounded-lg border border-[#F2C300]/35 bg-[#F2C300]/10 px-4 py-2 text-sm font-bold text-[#F2C300] backdrop-blur"
          >
            {t.hero.eyebrow}
          </p>
          <h1
            data-reveal
            className="break-words text-[clamp(4.3rem,13vw,11rem)] font-black uppercase leading-[0.82]"
            style={revealDelay(90)}
          >
            Black Sea 2
          </h1>
          <div className="title-underline mt-5 h-1.5 w-40 origin-left rounded-full bg-[#F2C300] sm:w-64" />
          <p
            data-reveal
            className="mt-8 max-w-3xl break-words text-2xl font-medium leading-9 text-white/90 sm:text-3xl"
            style={revealDelay(180)}
          >
            {t.hero.subtitle}
          </p>

          <div
            data-reveal
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            style={revealDelay(260)}
          >
            <PrimaryLink href={`tel:${phoneNumbers[0]}`}>
              <PhoneIcon />
              {t.common.call}
            </PrimaryLink>
            <SecondaryLink href={mapsUrl}>
              <MapIcon />
              {t.common.directions}
            </SecondaryLink>
            <SecondaryLink href={fitPassUrl}>
              <PassIcon />
              {t.common.fitpass}
            </SecondaryLink>
          </div>

          <div
            data-reveal
            className="mt-10 grid max-w-2xl grid-cols-3 gap-3"
            style={revealDelay(340)}
          >
            <TrustMetric decimals={2} label={t.hero.rating} value={8.79} />
            <TrustMetric label={t.hero.reviews} suffix="+" value={1354} />
            <TrustMetric label={t.hero.services} value={6} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection({
  services,
  t,
}: {
  services: Array<(typeof translations)[Lang]["services"]["items"][number] & { icon: IconKind; tone: Tone }>;
  t: (typeof translations)[Lang];
}) {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <SectionGlow tone="energy" />
      <SectionBand />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionIntro
          description={t.services.description}
          eyebrow={t.services.eyebrow}
          title={t.services.title}
        />

        <div className="mt-12 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              data-reveal
              className={cn(
                "premium-card group min-w-0 rounded-lg border border-white/10 bg-[#171717]/78 p-7 transition duration-500 hover:-translate-y-2 hover:bg-[#202020]",
                service.tone === "water"
                  ? "hover:border-[#1EA7FF]/55 hover:shadow-[0_28px_90px_rgba(14,93,158,0.22)]"
                  : "hover:border-[#F2C300]/55 hover:shadow-[0_28px_90px_rgba(242,195,0,0.14)]",
              )}
              style={cardTilt(index * 70)}
            >
              <div
                className={cn(
                  "mb-8 flex size-12 items-center justify-center rounded-lg border transition duration-500 group-hover:rotate-3 group-hover:scale-105",
                  service.tone === "water"
                    ? "border-[#1EA7FF]/40 bg-[#0E5D9E]/20 text-[#72c9ff] group-hover:border-[#1EA7FF]"
                    : "border-[#F2C300]/35 bg-[#F2C300]/10 text-[#F2C300] group-hover:border-[#F2C300]",
                )}
              >
                <ServiceIcon kind={service.icon} />
              </div>
              <h3 className="break-words text-2xl font-black">{service.title}</h3>
              <p className="mt-4 text-base leading-8 text-white/60">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection({ t }: { t: (typeof translations)[Lang] }) {
  return (
    <section id="why" className="relative py-20 sm:py-28">
      <SectionGlow tone="energy" align="right" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid min-w-0 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionIntro
            description={t.why.description}
            eyebrow={t.why.eyebrow}
            title={t.why.title}
          />

          <div className="grid min-w-0 gap-4 sm:grid-cols-2">
            {t.why.items.map((reason, index) => (
              <article
                key={reason}
                data-reveal
                className="premium-card group min-w-0 rounded-lg border border-white/10 bg-[#171717]/78 p-5 transition duration-500 hover:-translate-y-2 hover:border-[#F2C300]/60 hover:bg-[#202020] hover:shadow-[0_24px_80px_rgba(242,195,0,0.12)]"
                style={cardTilt(index * 55)}
              >
                <div className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-[#F2C300]/35 bg-[#F2C300]/10 text-[#F2C300] transition duration-500 group-hover:rotate-6 group-hover:bg-[#F2C300] group-hover:text-[#0B0B0B]">
                    <CheckIcon />
                  </span>
                  <div>
                    <p className="break-words text-lg font-black">{reason}</p>
                    <p className="mt-2 text-sm leading-6 text-white/60">{t.why.note}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection({
  galleryItems,
  t,
}: {
  galleryItems: Array<(typeof translations)[Lang]["gallery"]["items"][number] & (typeof galleryMeta)[number]>;
  t: (typeof translations)[Lang];
}) {
  return (
    <section id="gallery" className="relative py-20 sm:py-28">
      <SectionBand />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionIntro
          description={t.gallery.description}
          eyebrow={t.gallery.eyebrow}
          title={t.gallery.title}
        />

        <div className="mt-12 grid min-w-0 auto-rows-[minmax(260px,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <article
              key={item.src}
              data-reveal
              className={cn(
                "gallery-card group relative min-w-0 overflow-hidden rounded-lg border border-white/10 bg-[#171717] transition duration-500 hover:-translate-y-2 hover:border-[#F2C300]/80 hover:shadow-[0_28px_90px_rgba(0,0,0,0.38)]",
                item.className,
              )}
              style={cardTilt(index * 65)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className={`object-cover transition duration-700 group-hover:scale-[1.075] ${item.position}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/92 via-[#0B0B0B]/28 to-transparent transition duration-500 group-hover:from-[#0B0B0B]/82" />
              <div
                className={cn(
                  "absolute right-5 top-5 flex size-10 translate-y-2 items-center justify-center rounded-lg border opacity-0 backdrop-blur transition duration-500 group-hover:translate-y-0 group-hover:opacity-100",
                  item.tone === "water"
                    ? "border-[#1EA7FF]/40 bg-[#0E5D9E]/30 text-[#a8e5ff]"
                    : "border-[#F2C300]/45 bg-[#F2C300]/10 text-[#F2C300]",
                )}
                aria-hidden="true"
              >
                <ArrowIcon />
              </div>
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 transition duration-500 group-hover:translate-y-0 sm:p-6">
                <p
                  className={cn(
                    "text-sm font-black",
                    item.tone === "water" ? "text-[#9be0ff]" : "text-[#F2C300]",
                  )}
                >
                  {item.title}
                </p>
                <h3 className="mt-2 text-2xl font-black">{item.subtitle}</h3>
                <p className="mt-3 max-h-0 overflow-hidden text-sm font-semibold text-white/62 opacity-0 transition-all duration-500 group-hover:max-h-10 group-hover:opacity-100">
                  {t.gallery.open}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SwimmingSection({ t }: { t: (typeof translations)[Lang] }) {
  return (
    <section id="swimming" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#041322,#0E5D9E_58%,#05233b)]" />
      <div className="water-lines absolute inset-0 opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_22%,rgba(30,167,255,0.28),transparent_48%),radial-gradient(ellipse_at_15%_80%,rgba(30,167,255,0.16),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div
            data-reveal
            className="premium-card relative min-h-[430px] min-w-0 overflow-hidden rounded-lg border border-[#1EA7FF]/30 bg-[#061827] shadow-[0_32px_100px_rgba(0,0,0,0.38)]"
          >
            <Image
              src="/black-sea-2-gallery-lanes.jpg"
              alt="Black Sea 2 swimming lanes"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[52%_center] transition duration-700 hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041322]/90 via-[#041322]/10 to-transparent" />
            <div className="wave-sheen absolute inset-x-0 bottom-0 h-1/2" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-sm font-black text-[#9be0ff]">{t.swimming.eyebrow}</p>
              <h2 className="mt-2 max-w-2xl text-4xl font-black sm:text-5xl">
                {t.swimming.title}
              </h2>
            </div>
          </div>

          <div data-reveal style={revealDelay(120)}>
            <p className="text-sm font-black text-[#9be0ff]">{t.swimming.label}</p>
            <h2 className="mt-4 break-words text-5xl font-black leading-tight sm:text-6xl">
              {t.swimming.headline}
            </h2>
            <p className="mt-6 text-lg leading-9 text-white/76">{t.swimming.description}</p>

            <div className="mt-9 grid gap-3">
              {t.swimming.highlights.map((item, index) => (
                <div
                  key={item}
                  data-reveal
                  className="premium-card flex items-center gap-4 rounded-lg border border-[#1EA7FF]/25 bg-white/[0.07] p-4 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-[#1EA7FF]/60 hover:bg-white/[0.1]"
                  style={cardTilt(index * 70)}
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#1EA7FF]/20 text-[#a8e5ff]">
                    <WaveIcon />
                  </span>
                  <p className="text-base font-semibold leading-7 text-white/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HoursSection({ t }: { t: (typeof translations)[Lang] }) {
  return (
    <section id="hours" className="relative py-20 sm:py-28">
      <SectionGlow tone="energy" align="left" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div
          data-reveal
          className="premium-card grid min-w-0 gap-10 rounded-lg border border-white/10 bg-[#171717]/80 p-6 backdrop-blur sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-11"
        >
          <div>
            <p className="text-sm font-black text-[#F2C300]">{t.hours.eyebrow}</p>
            <h2 className="mt-4 break-words text-5xl font-black leading-tight sm:text-6xl">
              {t.hours.title}
            </h2>
            <p className="mt-6 text-lg leading-9 text-white/60">{t.hours.description}</p>
          </div>

          <div className="grid min-w-0 gap-4">
            {t.hours.items.map((item, index) => (
              <div
                key={item.days}
                data-reveal
                className="premium-card flex flex-col gap-4 rounded-lg border border-white/10 bg-[#0B0B0B]/70 p-5 transition duration-500 hover:-translate-y-1 hover:border-[#F2C300]/45 hover:bg-[#101010] sm:flex-row sm:items-center sm:justify-between"
                style={cardTilt(index * 90)}
              >
                <span className="flex items-center gap-3 text-xl font-black">
                  <span className="flex size-10 items-center justify-center rounded-lg border border-[#F2C300]/25 bg-[#F2C300]/10 text-[#F2C300]">
                    <ClockIcon />
                  </span>
                  {item.days}
                </span>
                <span className="font-mono text-3xl text-[#F2C300]">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ t }: { t: (typeof translations)[Lang] }) {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[1.06fr_0.94fr]">
          <div
            data-reveal
            className="premium-card rounded-lg border border-white/10 bg-[#171717]/80 p-6 backdrop-blur sm:p-8 lg:p-11"
          >
            <p className="text-sm font-black text-[#F2C300]">{t.contact.eyebrow}</p>
            <h2 className="mt-4 break-words text-5xl font-black leading-tight sm:text-6xl">
              {t.contact.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-white/70">
              {t.contact.description}
            </p>

            <div className="mt-8">
              <MapPreview t={t} />
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href={mapsUrl}>
                <MapIcon />
                {t.common.maps}
              </PrimaryLink>
              <SecondaryLink href={fitPassUrl}>
                <PassIcon />
                {t.common.fitpass}
              </SecondaryLink>
            </div>
          </div>

          <aside
            data-reveal
            className="premium-card min-w-0 rounded-lg border border-white/10 bg-[#171717]/80 p-6 backdrop-blur sm:p-8"
            style={revealDelay(120)}
          >
            <div className="flex items-center gap-4">
              <BrandLogo className="size-14 opacity-90" />
              <div>
                <p className="text-sm font-black text-[#F2C300]">{t.contact.cardEyebrow}</p>
                <h3 className="text-3xl font-black">{t.contact.callTitle}</h3>
              </div>
            </div>

            <div className="mt-7 grid gap-3">
              {displayPhoneNumbers.map((phone, index) => (
                <a
                  key={phone}
                  data-reveal
                  href={`tel:${phoneNumbers[index]}`}
                  className="premium-card group flex min-h-16 items-center justify-between gap-4 rounded-lg border border-white/10 bg-[#0B0B0B]/70 p-4 transition duration-500 hover:-translate-y-1 hover:border-[#F2C300]/50 hover:bg-[#101010]"
                  style={cardTilt(index * 70)}
                >
                  <span className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-lg bg-[#F2C300]/10 text-[#F2C300] transition duration-500 group-hover:rotate-6 group-hover:bg-[#F2C300] group-hover:text-[#0B0B0B]">
                      <PhoneIcon />
                    </span>
                    <span className="font-black">{phone}</span>
                  </span>
                  <ArrowIcon />
                </a>
              ))}
            </div>

            <div className="premium-card mt-6 rounded-lg border border-[#F2C300]/25 bg-[#F2C300]/10 p-5">
              <p className="text-sm font-black text-[#F2C300]">{t.contact.trust}</p>
              <div className="mt-3 flex items-end gap-3">
                <span className="text-6xl font-black">8.79</span>
                <span className="pb-2 text-white/60">{t.contact.reviewLine}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }: { t: (typeof translations)[Lang] }) {
  return (
    <footer className="border-t border-white/10 bg-[#0B0B0B] py-10">
      <div className="mx-auto grid min-w-0 max-w-7xl gap-8 px-5 text-sm text-white/60 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_1fr] lg:px-8">
        <div className="flex items-start gap-4">
          <BrandLogo className="size-12 opacity-85" />
          <div>
            <p className="text-base font-black text-white">Black Sea 2</p>
            <p className="mt-2 leading-7">{t.footer.description}</p>
          </div>
        </div>

        <div>
          <p className="font-black text-white">{t.footer.hours}</p>
          <div className="mt-3 grid gap-2">
            {t.hours.items.map((item) => (
              <p key={item.days}>
                {item.days}: <span className="text-[#F2C300]">{item.time}</span>
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-start gap-3 lg:justify-end">
          <SecondaryLink compact href={fitPassUrl}>
            {t.common.fitpass}
          </SecondaryLink>
          <PrimaryLink compact href={mapsUrl}>
            {t.common.maps}
          </PrimaryLink>
        </div>
      </div>
    </footer>
  );
}

function PrimaryLink({
  children,
  compact = false,
  href,
}: {
  children: React.ReactNode;
  compact?: boolean;
  href: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
      className={cn(
        "premium-button inline-flex items-center justify-center gap-2 rounded-lg bg-[#F2C300] font-black text-[#0B0B0B] shadow-[0_18px_50px_rgba(242,195,0,0.18)] transition duration-300 hover:-translate-y-1 hover:scale-[1.015] hover:bg-white hover:shadow-[0_20px_70px_rgba(242,195,0,0.28)]",
        compact ? "min-h-11 px-4 text-sm" : "min-h-14 px-7 text-base",
      )}
    >
      {children}
    </a>
  );
}

function SecondaryLink({
  children,
  compact = false,
  href,
}: {
  children: React.ReactNode;
  compact?: boolean;
  href: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
      className={cn(
        "premium-button inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/[0.06] font-black text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:scale-[1.015] hover:border-[#F2C300] hover:text-[#F2C300] hover:shadow-[0_18px_60px_rgba(242,195,0,0.12)]",
        compact ? "min-h-11 px-4 text-sm" : "min-h-14 px-7 text-base",
      )}
    >
      {children}
    </a>
  );
}

function BrandLogo({ className, priority = false }: { className: string; priority?: boolean }) {
  return (
    <span
      className={`relative flex shrink-0 overflow-hidden rounded-lg border border-white/15 bg-white shadow-[0_0_28px_rgba(242,195,0,0.12)] ${className}`}
    >
      <Image
        src="/black-sea-2-logo.png"
        alt=""
        fill
        priority={priority}
        sizes="56px"
        className="object-contain p-1"
      />
    </span>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div data-reveal className="min-w-0 max-w-3xl">
      <p className="text-sm font-black text-[#F2C300]">{eyebrow}</p>
      <h2 className="mt-5 break-words text-5xl font-black leading-tight sm:text-6xl">{title}</h2>
      <p className="mt-6 text-lg leading-9 text-white/60">{description}</p>
    </div>
  );
}

function TrustMetric({
  decimals = 0,
  label,
  suffix = "",
  value,
}: {
  decimals?: number;
  label: string;
  suffix?: string;
  value: number;
}) {
  const [displayValue, setDisplayValue] = useState(decimals > 0 ? "0.00" : "0");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = window.requestAnimationFrame(() => {
        setDisplayValue(value.toFixed(decimals));
      });

      return () => window.cancelAnimationFrame(frame);
    }

    let frame = 0;
    const start = performance.now();
    const duration = 1200;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue((value * eased).toFixed(decimals));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [decimals, value]);

  return (
    <div className="premium-card rounded-lg border border-white/15 bg-[#171717]/70 p-4 backdrop-blur">
      <div className="font-mono text-2xl font-black text-[#F2C300] sm:text-3xl">
        {displayValue}
        {suffix}
      </div>
      <div className="mt-1 text-xs font-semibold text-white/60 sm:text-sm">{label}</div>
    </div>
  );
}

function MapPreview({ t }: { t: (typeof translations)[Lang] }) {
  return (
    <div className="premium-card relative min-h-52 overflow-hidden rounded-lg border border-white/10 bg-[#0B0B0B]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:44px_44px] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_44%_48%,rgba(242,195,0,0.18),transparent_24%),radial-gradient(circle_at_72%_30%,rgba(14,93,158,0.18),transparent_30%)]" />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <span className="relative flex size-16 items-center justify-center rounded-full border border-[#F2C300]/35 bg-[#F2C300]/12 text-[#F2C300] shadow-[0_0_40px_rgba(242,195,0,0.18)]">
          <span className="map-pulse absolute inset-0 rounded-full border border-[#F2C300]/35" />
          <MapIcon />
        </span>
        <p className="mt-4 text-sm font-black text-white">{t.contact.mapPreview}</p>
        <p className="mt-1 text-xs font-semibold text-white/58">{t.contact.mapHint}</p>
      </div>
    </div>
  );
}

function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#0B0B0B]" />
      <div className="absolute left-[-12%] top-[12%] h-96 w-96 rounded-full bg-[#F2C300]/[0.055] blur-3xl" />
      <div className="absolute right-[-14%] top-[45%] h-[34rem] w-[34rem] rounded-full bg-[#0E5D9E]/[0.12] blur-3xl" />
      <div className="noise-layer absolute inset-0 opacity-[0.055]" />
    </div>
  );
}

function SectionGlow({
  align = "center",
  tone = "energy",
}: {
  align?: "left" | "center" | "right";
  tone?: Tone;
}) {
  const left = align === "left" ? "18%" : align === "right" ? "78%" : "50%";
  const color =
    tone === "water"
      ? "rgba(30,167,255,0.15),transparent_64%"
      : "rgba(242,195,0,0.11),transparent_64%";

  return (
    <div
      aria-hidden="true"
      className="absolute top-0 -z-10 h-96 w-[min(72vw,860px)] -translate-x-1/2"
      style={{
        background: `radial-gradient(ellipse at center, ${color})`,
        left,
      }}
    />
  );
}

function SectionBand() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-white/[0.035] to-transparent"
    />
  );
}

function HeroParticles() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {[10, 24, 42, 58, 74, 88].map((left, index) => (
        <span
          key={left}
          className="hero-particle absolute size-1 rounded-full bg-[#F2C300]/35 blur-[1px]"
          style={{
            left: `${left}%`,
            top: `${18 + (index % 3) * 18}%`,
            animationDelay: `${index * 0.55}s`,
            animationDuration: `${6 + index * 0.4}s`,
          }}
        />
      ))}
    </div>
  );
}

function ServiceIcon({ kind }: { kind: IconKind }) {
  if (kind === "gym") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none">
        <path
          d="M5 9v6M8 7v10M16 7v10M19 9v6M8 12h8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (kind === "crossfit") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none">
        <path
          d="M6 18 18 6M8 6h10v10M5 9l4-4M15 19l4-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (kind === "aqua" || kind === "aerobics") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none">
        <path
          d="M12 5.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM5 19c1.2-2.8 3.5-4.4 7-4.4s5.8 1.6 7 4.4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return <WaveIcon className="size-6" />;
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none">
      <path
        d="M8.2 5.4 9.4 8c.3.6.1 1.3-.4 1.8l-.9.8a11.5 11.5 0 0 0 5.3 5.3l.8-.9c.5-.5 1.2-.7 1.8-.4l2.6 1.2c.8.4 1.2 1.2 1 2.1l-.3 1.3c-.2.8-.9 1.3-1.7 1.3A14.1 14.1 0 0 1 3.5 6.4c0-.8.5-1.5 1.3-1.7l1.3-.3c.9-.2 1.7.2 2.1 1Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none">
      <path
        d="M12 21s7-5.4 7-12A7 7 0 0 0 5 9c0 6.6 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function PassIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none">
      <path
        d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 17.5v-11Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none">
      <path
        d="m5 12 4 4L19 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none">
      <path
        d="M12 7v5l3 2M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function WaveIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M4 14c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1M4 18c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1M7 9h10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
