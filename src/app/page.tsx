import Image from "next/image";

const phoneNumbers = ["+995595981100", "+995591204050"];
const displayPhoneNumbers = ["+995 595 981 100", "+995 591 204 050"];
const fitPassUrl = "https://fitpass.ge/en/objects/black-sea-2-blek-si-2";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Black%20Sea%202%20Gldani%20Tbilisi";

const navItems = [
  { label: "სერვისები", href: "#services" },
  { label: "რატომ ჩვენ", href: "#why" },
  { label: "გალერეა", href: "#gallery" },
  { label: "ცურვა", href: "#swimming" },
  { label: "კონტაქტი", href: "#contact" },
];

const services = [
  {
    title: "25 მეტრიანი აუზი",
    description: "სუფთა, ნათელი სივრცე ყოველდღიური ცურვისთვის და სტრუქტურირებული ვარჯიშისთვის.",
    icon: "pool",
    tone: "water",
  },
  {
    title: "12.5 მეტრიანი აუზი",
    description: "კომფორტული წყლის ზონა მსუბუქი სესიებისთვის, ბავშვებისთვის და ტექნიკური ვარჯიშისთვის.",
    icon: "pool",
    tone: "water",
  },
  {
    title: "Gym",
    description: "თანამედროვე ფიტნეს სივრცე ძალის, გამძლეობის და ყოველდღიური ფორმის შესანარჩუნებლად.",
    icon: "gym",
    tone: "energy",
  },
  {
    title: "Aqua Aerobics",
    description: "წყლის წინააღმდეგობაზე აგებული დაბალი დატვირთვის ჯგუფური ვარჯიში.",
    icon: "aqua",
    tone: "water",
  },
  {
    title: "აერობიკა",
    description: "ენერგიული სტუდიური სესიები მობილობის, გამძლეობის და ტონუსისთვის.",
    icon: "aerobics",
    tone: "energy",
  },
  {
    title: "CrossFit",
    description: "ფუნქციური ვარჯიში ძალაზე, ტემპზე და რეალურ პროგრესზე ორიენტირებული პროგრამით.",
    icon: "crossfit",
    tone: "energy",
  },
];

const reasons = [
  "თანამედროვე ტრენაჟორები",
  "25 მეტრიანი აუზი",
  "პროფესიონალი მწვრთნელები",
  "CrossFit",
  "Aqua Aerobics",
  "დიდი პარკინგი",
  "FitPass პარტნიორი",
];

const swimmingHighlights = [
  "25 მეტრიანი აუზი lane swimming-ისთვის",
  "12.5 მეტრიანი აუზი მსუბუქი წყლის სესიებისთვის",
  "Aqua Aerobics დაბალი დატვირთვით და მაღალი ენერგიით",
];

const galleryItems = [
  {
    title: "Pool",
    subtitle: "დიდი აუზის სივრცე",
    src: "/black-sea-2-gallery-main-pool.jpg",
    alt: "Black Sea 2 main swimming pool",
    position: "object-[48%_center]",
    className: "sm:col-span-2 lg:row-span-2 lg:min-h-[590px]",
  },
  {
    title: "Lanes",
    subtitle: "საწყისი ბლოკები",
    src: "/black-sea-2-gallery-lanes.jpg",
    alt: "Black Sea 2 swimming pool lanes",
    position: "object-[52%_center]",
    className: "min-h-[300px]",
  },
  {
    title: "Aqua",
    subtitle: "წყლის ვარჯიშები",
    src: "/black-sea-2-gallery-start.jpg",
    alt: "Black Sea 2 pool starting blocks",
    position: "object-[44%_center]",
    className: "min-h-[300px]",
  },
  {
    title: "Training",
    subtitle: "სპორტული სივრცე",
    src: "/black-sea-2-gallery-training.jpg",
    alt: "Black Sea 2 indoor training area",
    position: "object-center",
    className: "min-h-[340px]",
  },
  {
    title: "Facility",
    subtitle: "ლოკერები და კომფორტი",
    src: "/black-sea-2-gallery-lockers.jpg",
    alt: "Black Sea 2 locker room",
    position: "object-[56%_center]",
    className: "min-h-[340px]",
  },
  {
    title: "Arena",
    subtitle: "მრავალფუნქციური სივრცე",
    src: "/black-sea-2-gallery-arena.jpg",
    alt: "Black Sea 2 sports arena wall",
    position: "object-[44%_center]",
    className: "min-h-[300px]",
  },
  {
    title: "Water",
    subtitle: "ცურვის ზონა",
    src: "/black-sea-2-gallery-water.jpg",
    alt: "Black Sea 2 wide swimming pool",
    position: "object-center",
    className: "sm:col-span-2 min-h-[300px]",
  },
];

const hours = [
  { days: "ორშაბათი - შაბათი", time: "07:00-22:00" },
  { days: "კვირა", time: "09:00-21:00" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0B0B0B] text-white">
      <Navbar />
      <Hero />
      <ServicesSection />
      <WhySection />
      <GallerySection />
      <SwimmingSection />
      <HoursSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0B0B]/70 backdrop-blur-xl transition-colors supports-[backdrop-filter]:bg-[#0B0B0B]/50">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8"
      >
        <a href="#top" className="flex min-h-12 items-center gap-3" aria-label="Black Sea 2 home">
          <BrandLogo className="size-11" />
          <span className="hidden text-lg font-black uppercase sm:inline">Black Sea 2</span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-semibold text-white/70 lg:flex">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} className="group relative py-2 transition hover:text-white">
              {item.label}
              <span
                className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-[#F2C300] transition-transform group-hover:scale-x-100 ${
                  index === 0 ? "scale-x-100" : ""
                }`}
              />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div
            aria-label="Language switch"
            className="hidden min-h-11 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm font-semibold sm:flex"
          >
            <span className="text-[#F2C300]">ქართული</span>
            <span className="text-white/30">|</span>
            <a href="#top" className="text-white/60 transition hover:text-white">
              EN
            </a>
          </div>
          <a
            href={`tel:${phoneNumbers[0]}`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#F2C300] px-4 text-sm font-black text-[#0B0B0B] shadow-[0_14px_34px_rgba(242,195,0,0.18)] transition hover:-translate-y-0.5 hover:bg-white"
          >
            <PhoneIcon />
            დარეკვა
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[calc(100svh-80px)] items-center">
      <Image
        src="/black-sea-2-hero-real.jpg"
        alt="Black Sea 2 swimming pool interior"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94),rgba(11,11,11,0.78)_47%,rgba(11,11,11,0.42)),linear-gradient(180deg,rgba(0,0,0,0.18),rgba(11,11,11,0.96))]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_45%,rgba(14,93,158,0.24),transparent_46%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B0B0B] to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="motion-safe:animate-[fade-up_800ms_ease-out_both] max-w-4xl">
          <p className="mb-7 inline-flex rounded-lg border border-[#F2C300]/35 bg-[#F2C300]/10 px-4 py-2 text-sm font-bold text-[#F2C300] backdrop-blur">
            სპორტულ-გამაჯანსაღებელი კომპლექსი გლდანში
          </p>
          <h1 className="break-words text-[clamp(4.2rem,13vw,10.5rem)] font-black uppercase leading-[0.82]">
            Black Sea 2
          </h1>
          <div className="mt-5 h-1.5 w-40 origin-left rounded-full bg-[#F2C300] motion-safe:animate-[underline-grow_1100ms_ease-out_300ms_both] sm:w-60" />
          <p className="mt-8 max-w-3xl break-words text-2xl font-medium leading-9 text-white/90 sm:text-3xl">
            ცურვა • ფიტნესი • Aqua Aerobics • CrossFit გლდანში
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${phoneNumbers[0]}`}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-[#F2C300] px-7 text-base font-black text-[#0B0B0B] shadow-[0_18px_50px_rgba(242,195,0,0.22)] transition hover:-translate-y-1 hover:bg-white"
            >
              <PhoneIcon />
              დაგვიკავშირდი
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-7 text-base font-black text-white backdrop-blur transition hover:-translate-y-1 hover:border-[#F2C300]/70 hover:text-[#F2C300]"
            >
              <MapIcon />
              რუკაზე ნახვა
            </a>
            <a
              href={fitPassUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-[#F2C300]/35 bg-[#171717]/80 px-7 text-base font-black text-white backdrop-blur transition hover:-translate-y-1 hover:border-[#F2C300] hover:text-[#F2C300]"
            >
              <PassIcon />
              FitPass
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            <TrustMetric value="8.79" label="FitPass rating" />
            <TrustMetric value="1354+" label="review" />
            <TrustMetric value="6" label="სერვისი" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <SectionGlow />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Services"
          title="ფიტნესი, ცურვა და ენერგია ერთ სივრცეში"
          description="Black Sea 2 აერთიანებს აუზს, დარბაზს და ჯგუფურ ვარჯიშებს ისე, რომ ყოველდღიური რუტინა მარტივი და მოქნილი იყოს."
        />

        <div className="mt-12 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group min-w-0 motion-safe:animate-[fade-up_700ms_ease-out_both] rounded-lg border border-white/10 bg-[#171717]/75 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-[#F2C300]/50 hover:bg-[#1f1f1f]"
              style={{ animationDelay: `${index * 65}ms` }}
            >
              <div
                className={`mb-8 flex size-12 items-center justify-center rounded-lg border transition ${
                  service.tone === "water"
                    ? "border-[#1EA7FF]/40 bg-[#0E5D9E]/20 text-[#72c9ff] group-hover:border-[#1EA7FF]"
                    : "border-[#F2C300]/35 bg-[#F2C300]/10 text-[#F2C300] group-hover:border-[#F2C300]"
                }`}
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

function WhySection() {
  return (
    <section id="why" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid min-w-0 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionIntro
            eyebrow="Why Black Sea 2"
            title="სივრცე, რომელსაც ყოველდღიური მოძრაობისთვის ენდობი"
            description="ვებგვერდი ხაზს უსვამს იმას, რაც დემოსთვის ყველაზე მნიშვნელოვანია: პროფესიონალური შთაბეჭდილება, მკაფიო ინფორმაცია და სწრაფი მოქმედება."
          />

          <div className="grid min-w-0 gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <article
                key={reason}
                className="group min-w-0 motion-safe:animate-[fade-up_700ms_ease-out_both] rounded-lg border border-white/10 bg-[#171717]/75 p-5 transition hover:-translate-y-1 hover:border-[#F2C300]/60 hover:bg-[#202020]"
                style={{ animationDelay: `${index * 55}ms` }}
              >
                <div className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-[#F2C300]/35 bg-[#F2C300]/10 text-[#F2C300] transition group-hover:bg-[#F2C300] group-hover:text-[#0B0B0B]">
                    <CheckIcon />
                  </span>
                  <div>
                    <p className="break-words text-lg font-black">{reason}</p>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      Premium, clean and easy to understand.
                    </p>
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

function GallerySection() {
  return (
    <section id="gallery" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Gallery"
          title="რეალური ფოტოები Black Sea 2-ის სივრცეებიდან"
          description="გალერეა იყენებს ოფიციალურ ფოტოებს, არ იმეორებს კადრებს და ინარჩუნებს მუქ, პრემიუმ სპორტულ განწყობას."
        />

        <div className="mt-12 grid min-w-0 auto-rows-[minmax(260px,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <article
              key={item.src}
              className={`group relative min-w-0 overflow-hidden rounded-lg border border-white/10 bg-[#171717] transition duration-300 hover:-translate-y-1 hover:border-[#F2C300]/80 ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className={`object-cover transition duration-500 group-hover:scale-[1.04] ${item.position}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-[#0B0B0B]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-sm font-black text-[#F2C300]">{item.title}</p>
                <h3 className="mt-2 text-2xl font-black">{item.subtitle}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SwimmingSection() {
  return (
    <section id="swimming" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#041322,#0E5D9E_58%,#05233b)]" />
      <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_28px)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_22%,rgba(30,167,255,0.28),transparent_48%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="relative min-h-[430px] min-w-0 overflow-hidden rounded-lg border border-[#1EA7FF]/30 bg-[#061827] shadow-[0_32px_100px_rgba(0,0,0,0.38)]">
            <Image
              src="/black-sea-2-gallery-lanes.jpg"
              alt="Black Sea 2 swimming lanes"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[52%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041322]/90 via-[#041322]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-sm font-black text-[#9be0ff]">Swimming</p>
              <h2 className="mt-2 max-w-2xl text-4xl font-black sm:text-5xl">
                წყლის სივრცე, რომელიც ცალკე ხასიათს ქმნის.
              </h2>
            </div>
          </div>

          <div>
            <p className="text-sm font-black text-[#9be0ff]">Pool Section</p>
            <h2 className="mt-4 break-words text-5xl font-black leading-tight sm:text-6xl">
              ცურვა, აღდგენა და Aqua Aerobics
            </h2>
            <p className="mt-6 text-lg leading-9 text-white/76">
              ეს ნაწილი შეგნებულად ცისფერია: წყალი ვიზუალურად გამოყოფილია ფიტნესის
              ენერგიული ყვითელი აქცენტებისგან და გვერდს აძლევს მკაფიო რიტმს.
            </p>

            <div className="mt-9 grid gap-3">
              {swimmingHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-lg border border-[#1EA7FF]/25 bg-white/[0.07] p-4 backdrop-blur"
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

function HoursSection() {
  return (
    <section id="hours" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid min-w-0 gap-10 rounded-lg border border-white/10 bg-[#171717]/80 p-6 backdrop-blur sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-11">
          <div>
            <p className="text-sm font-black text-[#F2C300]">Working Hours</p>
            <h2 className="mt-4 break-words text-5xl font-black leading-tight sm:text-6xl">
              ადრე იწყება. გვიან მთავრდება.
            </h2>
            <p className="mt-6 text-lg leading-9 text-white/60">
              განრიგი მორგებულია დილის ცურვაზე, საღამოს ვარჯიშზე და კვირის ბოლოს მოძრაობაზე.
            </p>
          </div>

          <div className="grid min-w-0 gap-4">
            {hours.map((item) => (
              <div
                key={item.days}
                className="flex flex-col gap-3 rounded-lg border border-white/10 bg-[#0B0B0B]/70 p-5 transition hover:border-[#F2C300]/45 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-xl font-black">{item.days}</span>
                <span className="font-mono text-3xl text-[#F2C300]">{item.time}</span>
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
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[1.06fr_0.94fr]">
          <div className="rounded-lg border border-white/10 bg-[#171717]/80 p-6 backdrop-blur sm:p-8 lg:p-11">
            <p className="text-sm font-black text-[#F2C300]">Location</p>
            <h2 className="mt-4 break-words text-5xl font-black leading-tight sm:text-6xl">
              გლდანი, თბილისი
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-white/70">
              გახსენი Google Maps, დარეკე პირდაპირ, ან ნახე ობიექტი FitPass-ზე.
              მთავარი მოქმედებები ყოველთვის ერთი შეხებით ჩანს.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-[#F2C300] px-7 text-base font-black text-[#0B0B0B] transition hover:-translate-y-1 hover:bg-white"
              >
                <MapIcon />
                Google Maps
              </a>
              <a
                href={fitPassUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/[0.06] px-7 text-base font-black text-white transition hover:-translate-y-1 hover:border-[#F2C300] hover:text-[#F2C300]"
              >
                <PassIcon />
                FitPass
              </a>
            </div>
          </div>

          <aside className="min-w-0 rounded-lg border border-white/10 bg-[#171717]/80 p-6 backdrop-blur sm:p-8">
            <div className="flex items-center gap-4">
              <BrandLogo className="size-14 opacity-90" />
              <div>
                <p className="text-sm font-black text-[#F2C300]">Contact</p>
                <h3 className="text-3xl font-black">Black Sea 2</h3>
              </div>
            </div>

            <div className="mt-7 grid gap-3">
              {displayPhoneNumbers.map((phone, index) => (
                <a
                  key={phone}
                  href={`tel:${phoneNumbers[index]}`}
                  className="flex min-h-16 items-center justify-between gap-4 rounded-lg border border-white/10 bg-[#0B0B0B]/70 p-4 transition hover:border-[#F2C300]/50 hover:bg-[#101010]"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-lg bg-[#F2C300]/10 text-[#F2C300]">
                      <PhoneIcon />
                    </span>
                    <span className="font-black">{phone}</span>
                  </span>
                  <ArrowIcon />
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-[#F2C300]/25 bg-[#F2C300]/10 p-5">
              <p className="text-sm font-black text-[#F2C300]">FitPass trust</p>
              <div className="mt-3 flex items-end gap-3">
                <span className="text-6xl font-black">8.79</span>
                <span className="pb-2 text-white/60">1354+ review</span>
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
    <footer className="border-t border-white/10 bg-[#0B0B0B] py-10">
      <div className="mx-auto grid min-w-0 max-w-7xl gap-8 px-5 text-sm text-white/60 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_1fr] lg:px-8">
        <div className="flex items-start gap-4">
          <BrandLogo className="size-12 opacity-85" />
          <div>
            <p className="text-base font-black text-white">Black Sea 2</p>
            <p className="mt-2 leading-7">
              ფიტნესი, ცურვა, Aqua Aerobics და CrossFit გლდანში.
            </p>
          </div>
        </div>

        <div>
          <p className="font-black text-white">Working hours</p>
          <div className="mt-3 grid gap-2">
            {hours.map((item) => (
              <p key={item.days}>
                {item.days}: <span className="text-[#F2C300]">{item.time}</span>
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-start gap-3 lg:justify-end">
          <a
            href={fitPassUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#F2C300]/35 px-4 font-black text-white transition hover:border-[#F2C300] hover:text-[#F2C300]"
          >
            FitPass
          </a>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#F2C300] px-4 font-black text-[#0B0B0B] transition hover:bg-white"
          >
            Google Maps
          </a>
        </div>
      </div>
    </footer>
  );
}

function BrandLogo({ className }: { className: string }) {
  return (
    <span
      className={`relative flex shrink-0 overflow-hidden rounded-lg border border-white/15 bg-white shadow-[0_0_28px_rgba(242,195,0,0.12)] ${className}`}
    >
      <Image
        src="/black-sea-2-logo.png"
        alt=""
        fill
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
    <div className="min-w-0 max-w-3xl">
      <p className="text-sm font-black text-[#F2C300]">{eyebrow}</p>
      <h2 className="mt-5 break-words text-5xl font-black leading-tight sm:text-6xl">{title}</h2>
      <p className="mt-6 text-lg leading-9 text-white/60">{description}</p>
    </div>
  );
}

function TrustMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-white/15 bg-[#171717]/70 p-4 backdrop-blur">
      <div className="text-2xl font-black text-[#F2C300] sm:text-3xl">{value}</div>
      <div className="mt-1 text-xs font-semibold text-white/60 sm:text-sm">{label}</div>
    </div>
  );
}

function SectionGlow() {
  return (
    <div
      aria-hidden="true"
      className="absolute left-1/2 top-0 -z-10 h-96 w-[min(72vw,860px)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(242,195,0,0.10),transparent_64%)]"
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
