import Image from "next/image";

const phoneNumbers = ["+995595981100", "+995591204050"];
const displayPhoneNumbers = ["+995 595 981 100", "+995 591 204 050"];
const fitPassUrl = "https://fitpass.ge/en/objects/black-sea-2-blek-si-2";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Black%20Sea%202%20Gldani%20Tbilisi";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Showcase", href: "#showcase" },
  { label: "Hours", href: "#hours" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "25m Swimming Pool",
    description: "A full-length pool for focused laps, endurance work, and confident training.",
    icon: "pool",
  },
  {
    title: "12.5m Pool",
    description: "A compact water zone for lighter sessions, drills, and comfortable movement.",
    icon: "pool",
  },
  {
    title: "Gym",
    description: "Strength and conditioning space for everyday fitness and athletic goals.",
    icon: "gym",
  },
  {
    title: "Aqua Aerobics",
    description: "Low-impact group movement powered by water resistance and rhythm.",
    icon: "aqua",
  },
  {
    title: "Aerobics",
    description: "Energy-led studio sessions for mobility, stamina, and all-round fitness.",
    icon: "aerobics",
  },
  {
    title: "CrossFit",
    description: "Functional training sessions built around power, pace, and community.",
    icon: "crossfit",
  },
];

const reasons = [
  {
    title: "Built For Daily Momentum",
    description:
      "Early opening hours, late finishes, and a wide service mix make it easy to fit training into real life.",
  },
  {
    title: "Water And Strength Together",
    description:
      "Move between swimming, aqua classes, gym work, aerobics, and CrossFit without changing venues.",
  },
  {
    title: "Trusted By Members",
    description:
      "A FitPass rating of 8.79 and 1354+ reviews give the complex instant social proof.",
  },
];

const showcaseItems = [
  "25m pool for lane swimming and structured training",
  "12.5m pool for lighter water sessions",
  "Gym, aerobics, and CrossFit for full-body performance",
];

const galleryItems = [
  { title: "Lap Pool", position: "object-[42%_center]" },
  { title: "Fitness Floor", position: "object-[64%_center]" },
  { title: "Aqua Sessions", position: "object-[36%_center]" },
  { title: "Evening Training", position: "object-[70%_center]" },
];

const hours = [
  { days: "Monday to Saturday", time: "07:00-22:00" },
  { days: "Sunday", time: "09:00-21:00" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#06152b] text-white">
      <Navbar />
      <Hero />
      <ServicesSection />
      <WhySection />
      <ShowcaseSection />
      <GallerySection />
      <HoursSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06152b]/82 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
      >
        <a href="#top" className="flex items-center gap-3" aria-label="Black Sea 2 home">
          <span className="flex size-10 items-center justify-center rounded-lg border border-cyan-300/35 bg-cyan-300/12 text-sm font-semibold text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.2)]">
            BS2
          </span>
          <span className="text-lg font-semibold">Black Sea 2</span>
        </a>

        <div className="hidden items-center gap-7 text-sm text-white/72 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={`tel:${phoneNumbers[0]}`}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white px-4 text-sm font-semibold text-[#071733] shadow-[0_14px_34px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5 hover:bg-cyan-100"
        >
          <PhoneIcon />
          Call Now
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[clamp(460px,calc(100svh-180px),680px)] items-center"
    >
      <Image
        src="/black-sea-2-hero.png"
        alt="Modern indoor swimming pool and fitness complex"
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-[58%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,25,0.92),rgba(4,24,56,0.76)_45%,rgba(8,38,84,0.38)),linear-gradient(180deg,rgba(6,21,43,0.26),rgba(6,21,43,0.94))]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#06152b] to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur">
            Sports and swimming complex in Gldani, Tbilisi
          </p>
          <h1 className="text-5xl font-semibold leading-none sm:text-7xl lg:text-8xl">
            Black Sea 2
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-cyan-50/90 sm:text-2xl">
            Swimming &bull; Fitness &bull; Aqua Aerobics &bull; CrossFit in Gldani
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <a
              href={`tel:${phoneNumbers[0]}`}
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-lg bg-cyan-300 px-6 text-base font-semibold text-[#031225] shadow-[0_18px_50px_rgba(34,211,238,0.28)] transition hover:-translate-y-1 hover:bg-white"
            >
              <PhoneIcon />
              Call Now
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 text-base font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200/60 hover:bg-white/16"
            >
              <MapIcon />
              Get Directions
            </a>
            <a
              href={fitPassUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-lg border border-white/20 bg-[#2458ff]/55 px-6 text-base font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:border-white/60 hover:bg-[#3268ff]"
            >
              <PassIcon />
              View on FitPass
            </a>
          </div>

          <div className="mt-7 grid max-w-xl grid-cols-3 gap-2 sm:mt-9 sm:gap-3">
            <TrustMetric value="8.79" label="FitPass rating" />
            <TrustMetric value="1354+" label="Reviews" />
            <TrustMetric value="6" label="Core services" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="relative py-12 sm:py-20">
      <BackgroundGlow />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Services"
          title="Everything for water, strength, and movement"
          description="A compact sports destination for swimming, fitness, and energetic group training in Gldani."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-lg border border-white/10 bg-white/[0.065] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-white/[0.095]"
            >
              <div className="mb-6 flex size-12 items-center justify-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-100 transition group-hover:border-cyan-200/60 group-hover:bg-cyan-300/16">
                <ServiceIcon kind={service.icon} />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-white/68">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionIntro
            eyebrow="Why Choose Black Sea 2"
            title="A premium demo site for a place people already trust"
            description="The website experience should feel as clear and energetic as the complex itself: fast to understand, polished on mobile, and easy to act on."
          />

          <div className="grid gap-4">
            {reasons.map((reason, index) => (
              <article
                key={reason.title}
                className="rounded-lg border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition hover:border-cyan-300/35 hover:bg-white/[0.09]"
              >
                <div className="flex gap-5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-sm font-semibold text-[#071733]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{reason.title}</h3>
                    <p className="mt-2 leading-7 text-white/68">{reason.description}</p>
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

function ShowcaseSection() {
  return (
    <section id="showcase" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] shadow-[0_28px_90px_rgba(0,0,0,0.32)]">
            <Image
              src="/black-sea-2-hero.png"
              alt="Blue lap pool with a fitness area in the background"
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover object-[56%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06152b]/92 via-[#06152b]/18 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-sm font-medium text-cyan-100">Pool and fitness showcase</p>
              <h2 className="mt-2 max-w-2xl text-3xl font-semibold sm:text-4xl">
                Water-first training with a complete fitness layer.
              </h2>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-cyan-200">The Experience</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              From morning laps to after-work intensity.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Black Sea 2 can present itself as a modern neighborhood performance hub:
              easy to find, easy to call, and easy to compare through FitPass.
            </p>

            <div className="mt-8 grid gap-3">
              {showcaseItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.055] p-4"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-cyan-300/16 text-cyan-100">
                    <CheckIcon />
                  </span>
                  <p className="leading-7 text-white/76">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Gallery"
          title="A visual direction built around blue water and athletic energy"
          description="The demo uses premium, high-contrast imagery and simple overlays to make the complex feel immediate and memorable."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <article
              key={item.title}
              className={`relative min-h-72 overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] ${
                index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <Image
                src="/black-sea-2-hero.png"
                alt={`${item.title} visual for Black Sea 2`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className={`object-cover ${item.position}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031225]/90 via-[#031225]/18 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HoursSection() {
  return (
    <section id="hours" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-lg border border-white/10 bg-white/[0.065] p-6 backdrop-blur sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold text-cyan-200">Working Hours</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Open early. Open late.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/68">
              A schedule designed for morning swimmers, after-work fitness, and weekend movement.
            </p>
          </div>

          <div className="grid gap-4">
            {hours.map((item) => (
              <div
                key={item.days}
                className="flex flex-col gap-3 rounded-lg border border-white/10 bg-[#031225]/42 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-lg font-semibold">{item.days}</span>
                <span className="font-mono text-2xl text-cyan-100">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(36,88,255,0.35),rgba(34,211,238,0.12)),rgba(255,255,255,0.055)] p-6 backdrop-blur sm:p-8 lg:p-10">
            <p className="text-sm font-semibold text-cyan-100">Location</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Gldani, Tbilisi
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              Search for Black Sea 2 Gldani Tbilisi on Google Maps, call the front desk,
              or open FitPass to compare details instantly.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-lg bg-white px-6 text-base font-semibold text-[#071733] transition hover:-translate-y-1 hover:bg-cyan-100"
              >
                <MapIcon />
                Get Directions
              </a>
              <a
                href={fitPassUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 text-base font-semibold text-white transition hover:-translate-y-1 hover:bg-white/16"
              >
                <PassIcon />
                View on FitPass
              </a>
            </div>
          </div>

          <aside className="rounded-lg border border-white/10 bg-white/[0.065] p-6 backdrop-blur sm:p-8">
            <p className="text-sm font-semibold text-cyan-200">Contact</p>
            <h3 className="mt-4 text-3xl font-semibold">Call Black Sea 2</h3>
            <div className="mt-6 grid gap-3">
              {displayPhoneNumbers.map((phone, index) => (
                <a
                  key={phone}
                  href={`tel:${phoneNumbers[index]}`}
                  className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-[#031225]/38 p-4 transition hover:border-cyan-300/40 hover:bg-[#031225]/60"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-cyan-300/15 text-cyan-100">
                      <PhoneIcon />
                    </span>
                    <span className="font-semibold">{phone}</span>
                  </span>
                  <ArrowIcon />
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-5">
              <p className="text-sm font-semibold text-cyan-100">FitPass trust</p>
              <div className="mt-3 flex items-end gap-3">
                <span className="text-5xl font-semibold">8.79</span>
                <span className="pb-2 text-white/68">from 1354+ reviews</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-white/58 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>Black Sea 2. Swimming, fitness, aqua aerobics, and CrossFit in Gldani.</p>
        <div className="flex gap-5">
          <a href={`tel:${phoneNumbers[0]}`} className="transition hover:text-white">
            Call
          </a>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            Directions
          </a>
          <a
            href={fitPassUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            FitPass
          </a>
        </div>
      </div>
    </footer>
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
    <div className="max-w-3xl">
      <p className="text-sm font-semibold text-cyan-200">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-white/68">{description}</p>
    </div>
  );
}

function TrustMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-white/15 bg-white/10 p-3 backdrop-blur sm:p-4">
      <div className="text-xl font-semibold text-white sm:text-2xl">{value}</div>
      <div className="mt-1 text-xs text-cyan-50/70 sm:text-sm">{label}</div>
    </div>
  );
}

function BackgroundGlow() {
  return (
    <div
      aria-hidden="true"
      className="absolute left-1/2 top-0 -z-10 h-96 w-[min(80vw,900px)] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_62%)]"
    />
  );
}

function ServiceIcon({ kind }: { kind: string }) {
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

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none">
      <path
        d="M4 14c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1M4 18c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1M7 9h10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
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
      <path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="1.7" />
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
