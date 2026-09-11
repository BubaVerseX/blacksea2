export type Lang = "ka" | "en";
export type LocationId = "blacksea1" | "blackseakids" | "zestafoni";
export type Category = "pool" | "gym" | "hotel" | "ice";

export interface Bi {
  en: string;
  ka: string;
}

export interface ServiceItem {
  category: Category;
  title: Bi;
  desc: Bi;
}

export interface PricePlan {
  label: Bi;
  unit: Bi;
  note: Bi;
  features: Bi[];
  accent?: boolean;
}

export interface PricingRow {
  tier: Bi;
  price: string;
  image?: string;
}

export interface PricingGroup {
  category: Bi;
  rows: PricingRow[];
}

export interface GalleryTile {
  label: Bi;
  image?: string;
}

export interface LocationContent {
  id: LocationId;
  brandName: string;
  shortName: Bi;
  gateTag: Bi;
  gateBlurb: Bi;
  areaLabel: Bi;
  hoursShort: Bi;
  address: Bi;
  phones: string[];
  hoursDetailed: { day: Bi; time: string }[];
  introHeading: Bi;
  introLede: Bi;
  services: ServiceItem[];
  hotel?: { title: Bi; desc: Bi };
  // Generic 3-card pricing. Use pricingGroups instead when real pricing
  // doesn't fit this per-plan shape (e.g. Zestafoni's category/tier table).
  pricing?: PricePlan[];
  pricingGroups?: PricingGroup[];
  visitorNote?: Bi;
  rules?: Bi[];
  rulesLabel?: Bi;
  notes?: Bi[];
  poolRules?: Bi[];
  poolRulesNote?: Bi;
  gallery: GalleryTile[];
  facebook?: string;
  instagram?: string;
  // Real photos for the homepage gate card. First image shows immediately;
  // additional images crossfade in on a timer. Omit entirely if no real
  // photography exists yet for this location — never fill with a placeholder.
  homePhotos?: string[];
  priceListImage?: string;
}

// Route slugs for the multi-page structure — one dedicated page per location.
export const locationSlugs: Record<LocationId, string> = {
  blacksea1: "black-sea",
  blackseakids: "black-sea-kids",
  zestafoni: "zestafoni",
};

export const ui = {
  navCall: { en: "Call", ka: "დარეკვა" } as Bi,
  langEn: "EN",
  langKa: "KA",
  heroBadge: { en: "Three locations · Georgia", ka: "სამი ლოკაცია · საქართველო" } as Bi,
  heroTitle: { en: "Choose your Black Sea.", ka: "აირჩიეთ თქვენი Black Sea." } as Bi,
  heroSub: {
    en: "Three sport complexes across Georgia, each built around a different kind of visit — pick a location to see what's inside, what it costs, and how to visit.",
    ka: "სამი სპორტული კომპლექსი საქართველოში, თითოეული განსხვავებული ვიზიტისთვისაა აგებული — აირჩიეთ ლოკაცია და ნახეთ, რა არის შიგნით, რა ღირს და როგორ ეწვიოთ.",
  } as Bi,
  viewLocation: { en: "View location", ka: "ლოკაციის ნახვა" } as Bi,
  backToLocations: { en: "All locations", ka: "ყველა ლოკაცია" } as Bi,
  includedEyebrow: { en: "What's included", ka: "რას მოიცავს" } as Bi,
  includedHeading: { en: "Everything on one membership.", ka: "ყველაფერი ერთ საწევრო ბარათში." } as Bi,
  membershipEyebrow: { en: "Membership", ka: "საწევრო" } as Bi,
  pricingPreviewHeading: { en: "A quick look at membership.", ka: "საწევრო — მოკლედ." } as Bi,
  viewFullPricing: { en: "View full pricing", ka: "სრული ფასები" } as Bi,
  pricingHeading: (loc: Bi) => ({
    en: `Pricing — ${loc.en}`,
    ka: `ფასები — ${loc.ka}`,
  }),
  contactUs: { en: "Contact us", ka: "დაგვიკავშირდით" } as Bi,
  galleryEyebrow: { en: "Gallery", ka: "გალერეა" } as Bi,
  galleryHeading: (loc: Bi) => ({
    en: `${loc.en} in pictures.`,
    ka: `${loc.ka} სურათებში.`,
  }),
  hoursContactEyebrow: { en: "Hours & contact", ka: "საათები და კონტაქტი" } as Bi,
  planVisit: { en: "Plan your visit.", ka: "დაგეგმეთ ვიზიტი." } as Bi,
  addressLabel: { en: "Address", ka: "მისამართი" } as Bi,
  phoneLabel: { en: "Phone", ka: "ტელეფონი" } as Bi,
  phoneTbc: { en: "To be confirmed", ka: "დაზუსტდება" } as Bi,
  hoursLabel: { en: "Hours", ka: "სამუშაო საათები" } as Bi,
  directions: { en: "Directions", ka: "მიმართულება" } as Bi,
  rulesHeading: { en: "House rules", ka: "შიდა წესები" } as Bi,
  notesHeading: { en: "Good to know", ka: "მნიშვნელოვანი ინფორმაცია" } as Bi,
  fitnessRulesHeading: { en: "Fitness rules", ka: "ფიტნეს წესები" } as Bi,
  poolRulesHeading: { en: "Pool rules", ka: "აუზის წესები" } as Bi,
};

export const locations: Record<LocationId, LocationContent> = {
  blacksea1: {
    id: "blacksea1",
    brandName: "Black Sea",
    shortName: { en: "Black Sea", ka: "ბლექ სი" },
    priceListImage: "/black-sea/price-list.jpg",
    facebook: "https://www.facebook.com/bscomplex.ge",
    homePhotos: ["/black-sea/reception.jpg", "/black-sea/cardio.jpg", "/black-sea/weights.jpg"],
    gateTag: { en: "Gym · Pool · Ice Rink", ka: "დარბაზი · აუზი · სრიალის ბანი" },
    gateBlurb: {
      en: "Gldani's flagship complex — two pools, full gym floor, group classes, and an ice rink for figure skating.",
      ka: "გლდანის მთავარი კომპლექსი — ორი აუზი, სრული სავარჯიშო დარბაზი, ჯგუფური ვარჯიშები და ფიგურული სრიალის ბანი.",
    },
    areaLabel: { en: "Gldani, Tbilisi", ka: "გლდანი, თბილისი" },
    hoursShort: { en: "Mon–Sat 07:00–22:00, Sun 09:00–21:00", ka: "ორშ–შაბ 07:00–22:00, კვირა 09:00–21:00" },
    address: {
      en: "Gldani, A District, Teimuraz Bochorishvili St, 1st Lane #5, Tbilisi, 0141",
      ka: "გლდანის \"ა\" მ/რ, თეიმურაზ ბოჭორიშვილის 1 ჩიხი #5, თბილისი, 0141",
    },
    phones: ["+995 595 981 100"],
    hoursDetailed: [
      { day: { en: "Monday – Saturday", ka: "ორშაბათი – შაბათი" }, time: "07:00 – 22:00" },
      { day: { en: "Sunday", ka: "კვირა" }, time: "09:00 – 21:00" },
    ],
    introHeading: { en: "Gldani's flagship complex.", ka: "გლდანის მთავარი კომპლექსი." },
    introLede: {
      en: "A large pool floor paired with a modern gym — built for daily lane swimming, strength training and group classes in one place. The same building also houses an ice rink for figure skating lessons and open skating.",
      ka: "დიდი აუზის სივრცე თანამედროვე დარბაზთან ერთად — ყოველდღიური ცურვის, ძალის ვარჯიშისა და ჯგუფური მეცადინეობებისთვის ერთ სივრცეში. იმავე შენობაში ასევე მდებარეობს ფიგურული სრიალის ბანი, ჯგუფური და პერსონალური გაკვეთილებით.",
    },
    services: [
      { category: "pool", title: { en: "25m Pool", ka: "25 მ აუზი" }, desc: { en: "25m × 12m, 2m deep — the main pool for structured lane swimming and technique work.", ka: "25 მ × 12 მ, სიღრმე 2 მ — მთავარი აუზი სტრუქტურირებული ცურვისა და ტექნიკის ვარჯიშისთვის." } },
      { category: "pool", title: { en: "12.5m Pool", ka: "12.5 მ აუზი" }, desc: { en: "12m × 6m, 1.5m deep — a calmer water space for lighter sessions, kids and technical drills.", ka: "12 მ × 6 მ, სიღრმე 1.5 მ — მშვიდი წყლის სივრცე მსუბუქი ვარჯიშების, ბავშვებისა და ტექნიკური სავარჯიშოებისთვის." } },
      { category: "gym", title: { en: "Fitness Floor", ka: "სავარჯიშო დარბაზი" }, desc: { en: "Modern equipment for strength, endurance and daily conditioning.", ka: "თანამედროვე აღჭურვილობა ძალის, გამძლეობისა და ყოველდღიური ფორმისთვის." } },
      { category: "gym", title: { en: "CrossFit", ka: "CrossFit" }, desc: { en: "Functional training programmed around strength and pace.", ka: "ფუნქციური ვარჯიში, აგებული ძალასა და ტემპზე." } },
      { category: "pool", title: { en: "Aqua Aerobics", ka: "Aqua Aerobics" }, desc: { en: "Low-impact, high-energy group training in the water.", ka: "დაბალი დატვირთვის, მაღალი ენერგიის ჯგუფური ვარჯიში წყალში." } },
      { category: "gym", title: { en: "Group Aerobics", ka: "ჯგუფური აერობიკა" }, desc: { en: "Studio sessions built around mobility and tempo.", ka: "სტუდიური მეცადინეობები მოძრაობასა და ტემპზე." } },
      { category: "ice", title: { en: "Ice Rink — Group Lessons", ka: "სრიალის ბანი — ჯგუფური გაკვეთილები" }, desc: { en: "Figure skating lessons for kids from age 4, same building, entrance 2. 45 minutes, own skates or rental.", ka: "ფიგურული სრიალის გაკვეთილები ბავშვებისთვის 4 წლის ასაკიდან, იმავე შენობაში, შესასვლელი 2. 45 წუთი, საკუთარი ან ნაქირავები ციგურებით." } },
      { category: "ice", title: { en: "Ice Rink — Personal Lessons", ka: "სრიალის ბანი — პერსონალური გაკვეთილები" }, desc: { en: "One-on-one figure skating coaching.", ka: "ინდივიდუალური ფიგურული სრიალის მწვრთნელობა." } },
      { category: "ice", title: { en: "Ice Rink — Open Skating", ka: "სრიალის ბანი — თავისუფალი სრიალი" }, desc: { en: "Free skate time by the hour, own skates or rental available.", ka: "თავისუფალი სრიალი საათობრივად, საკუთარი ან ნაქირავები ციგურებით." } },
    ],
    pricingGroups: [
      {
        category: { en: "Pool", ka: "აუზი" },
        rows: [
          { tier: { en: "1 visit (07:00–15:00)", ka: "1 ვიზიტი (07:00–15:00)" }, price: "20 ₾" },
          { tier: { en: "1 visit (07:00–22:00)", ka: "1 ვიზიტი (07:00–22:00)" }, price: "20 ₾" },
          { tier: { en: "8 visits (07:00–15:00)", ka: "8 ვიზიტი (07:00–15:00)" }, price: "100 ₾" },
          { tier: { en: "8 visits (07:00–22:00)", ka: "8 ვიზიტი (07:00–22:00)" }, price: "120 ₾" },
          { tier: { en: "12 visits (07:00–15:00)", ka: "12 ვიზიტი (07:00–15:00)" }, price: "130 ₾" },
          { tier: { en: "12 visits (07:00–22:00)", ka: "12 ვიზიტი (07:00–22:00)" }, price: "150 ₾" },
          { tier: { en: "Unlimited (07:00–15:00)", ka: "ულიმიტო (07:00–15:00)" }, price: "200 ₾" },
          { tier: { en: "Unlimited (07:00–22:00)", ka: "ულიმიტო (07:00–22:00)" }, price: "220 ₾" },
        ],
      },
      {
        category: { en: "Fitness", ka: "ფიტნესი" },
        rows: [
          { tier: { en: "1 visit (07:00–15:00)", ka: "1 ვიზიტი (07:00–15:00)" }, price: "15 ₾" },
          { tier: { en: "1 visit (07:00–22:00)", ka: "1 ვიზიტი (07:00–22:00)" }, price: "15 ₾" },
          { tier: { en: "12 visits (07:00–15:00)", ka: "12 ვიზიტი (07:00–15:00)" }, price: "60 ₾" },
          { tier: { en: "12 visits (07:00–22:00)", ka: "12 ვიზიტი (07:00–22:00)" }, price: "80 ₾" },
          { tier: { en: "Unlimited (07:00–15:00)", ka: "ულიმიტო (07:00–15:00)" }, price: "80 ₾" },
          { tier: { en: "Unlimited (07:00–22:00)", ka: "ულიმიტო (07:00–22:00)" }, price: "100 ₾" },
        ],
      },
      {
        category: { en: "Pool + Fitness", ka: "აუზი და ფიტნესი" },
        rows: [
          { tier: { en: "1 visit", ka: "1 ვიზიტი" }, price: "30 ₾" },
          { tier: { en: "12 visits", ka: "12 ვიზიტი" }, price: "180 ₾" },
          { tier: { en: "Unlimited", ka: "ულიმიტო" }, price: "250 ₾" },
        ],
      },
      {
        category: { en: "Group classes", ka: "ჯგუფური ვარჯიშები" },
        rows: [
          { tier: { en: "Aqua aerobics — 1 visit", ka: "Aqua Aerobics — 1 ვიზიტი" }, price: "20 ₾" },
          { tier: { en: "Aqua aerobics — 8 visits", ka: "Aqua Aerobics — 8 ვიზიტი" }, price: "110 ₾" },
          { tier: { en: "Aqua aerobics — 12 visits", ka: "Aqua Aerobics — 12 ვიზიტი" }, price: "130 ₾" },
          { tier: { en: "Learn to swim — 1 visit", ka: "ცურვის სწავლება — 1 ვიზიტი" }, price: "20 ₾" },
          { tier: { en: "Learn to swim — 8 visits", ka: "ცურვის სწავლება — 8 ვიზიტი" }, price: "110 ₾" },
          { tier: { en: "Learn to swim — 12 visits", ka: "ცურვის სწავლება — 12 ვიზიტი" }, price: "130 ₾" },
          { tier: { en: "Aerobics mix — 1 visit", ka: "აერობიკა მიქსი — 1 ვიზიტი" }, price: "15 ₾" },
          { tier: { en: "Aerobics mix — 8 visits", ka: "აერობიკა მიქსი — 8 ვიზიტი" }, price: "75 ₾" },
          { tier: { en: "Aerobics mix — 12 visits", ka: "აერობიკა მიქსი — 12 ვიზიტი" }, price: "90 ₾" },
          { tier: { en: "Pilates — 1 visit", ka: "პილატესი — 1 ვიზიტი" }, price: "15 ₾" },
          { tier: { en: "Pilates — 8 visits", ka: "პილატესი — 8 ვიზიტი" }, price: "75 ₾" },
          { tier: { en: "Pilates — 12 visits", ka: "პილატესი — 12 ვიზიტი" }, price: "90 ₾" },
          { tier: { en: "CrossFit — 1 visit", ka: "CrossFit — 1 ვიზიტი" }, price: "15 ₾" },
          { tier: { en: "CrossFit — 8 visits", ka: "CrossFit — 8 ვიზიტი" }, price: "75 ₾" },
          { tier: { en: "CrossFit — 12 visits", ka: "CrossFit — 12 ვიზიტი" }, price: "90 ₾" },
        ],
      },
      {
        category: { en: "Personal training", ka: "პერსონალური ვარჯიშები" },
        rows: [
          { tier: { en: "1 visit", ka: "1 ვიზიტი" }, price: "35 ₾" },
          { tier: { en: "8 visits", ka: "8 ვიზიტი" }, price: "240 ₾" },
          { tier: { en: "12 visits", ka: "12 ვიზიტი" }, price: "320 ₾" },
        ],
      },
      {
        category: { en: "Sport groups", ka: "სპორტული ჯგუფები" },
        rows: [
          { tier: { en: "1 visit", ka: "1 ვიზიტი" }, price: "20 ₾" },
          { tier: { en: "12 visits", ka: "12 ვიზიტი" }, price: "140 ₾" },
          { tier: { en: "24 visits", ka: "24 ვიზიტი" }, price: "210 ₾" },
        ],
      },
      {
        category: { en: "Ice — Group lessons (ages 4+)", ka: "სრიალის ბანი — ჯგუფური გაკვეთილები (4 წლიდან)" },
        rows: [
          { tier: { en: "1 lesson", ka: "1 გაკვეთილი" }, price: "15 ₾" },
          { tier: { en: "8 lessons (weekends)", ka: "8 გაკვეთილი (შაბათი-კვირა)" }, price: "90 ₾" },
          { tier: { en: "12 lessons", ka: "12 გაკვეთილი" }, price: "110 ₾" },
        ],
      },
      {
        category: { en: "Ice — Skate rental (add-on)", ka: "სრიალის ბანი — ციგურების ქირა (დამატებით)" },
        rows: [
          { tier: { en: "1 lesson", ka: "1 გაკვეთილი" }, price: "5 ₾" },
          { tier: { en: "8 lessons", ka: "8 გაკვეთილი" }, price: "20 ₾" },
          { tier: { en: "12 lessons", ka: "12 გაკვეთილი" }, price: "30 ₾" },
        ],
      },
      {
        category: { en: "Ice — Personal lessons", ka: "სრიალის ბანი — პერსონალური გაკვეთილები" },
        rows: [
          { tier: { en: "1 lesson", ka: "1 გაკვეთილი" }, price: "35 ₾" },
          { tier: { en: "8 lessons", ka: "8 გაკვეთილი" }, price: "240 ₾" },
          { tier: { en: "12 lessons", ka: "12 გაკვეთილი" }, price: "320 ₾" },
        ],
      },
      {
        category: { en: "Ice — Open skating", ka: "სრიალის ბანი — თავისუფალი სრიალი" },
        rows: [
          { tier: { en: "1 hour", ka: "1 საათი" }, price: "15 ₾" },
          { tier: { en: "Skate rental (add-on)", ka: "ციგურების ქირა (დამატებით)" }, price: "5 ₾" },
        ],
      },
    ],
    visitorNote: { en: "Visitor card: 5 GEL", ka: "ვიზიტორის ბარათი: 5 ლარი" },
    notes: [
      { en: "The ice rink shares the building with the pool and gym — same address, entrance 2.", ka: "სრიალის ბანი იმავე შენობაშია, სადაც აუზი და დარბაზი — იგივე მისამართი, შესასვლელი 2." },
      { en: "Ice lesson duration: 45 minutes.", ka: "სრიალის გაკვეთილის ხანგრძლივობა 45 წუთი." },
      { en: "Subscription valid for 28 days.", ka: "აბონემენტის ვადა 28 დღე." },
      { en: "Sibling discount: 2+ children from the same family get 10% off.", ka: "შეღავათი: ოჯახიდან 2 და მეტი ბავშვი -10%." },
    ],
    gallery: [
      { image: "/black-sea/reception.jpg", label: { en: "Reception", ka: "მისაღები" } },
      { image: "/black-sea/cardio.jpg", label: { en: "Cardio Zone", ka: "კარდიო ზონა" } },
      { image: "/black-sea/weights.jpg", label: { en: "Free Weights & Machines", ka: "წონები და ტრენაჟორები" } },
      { image: "/black-sea/sauna.jpg", label: { en: "Sauna", ka: "საუნა" } },
      { image: "/black-sea/lockers.jpg", label: { en: "Locker Room", ka: "გასახდელი" } },
      { image: "/black-sea/group-fitness.jpg", label: { en: "Group Fitness Studio", ka: "ჯგუფური ფიტნესის დარბაზი" } },
      { image: "/black-sea/ice-rink.jpg", label: { en: "Ice Rink", ka: "საციგურაო რინკი" } },
      { image: "/black-sea/ice-rink-side.jpg", label: { en: "Rinkside Seating", ka: "რინკის ტრიბუნა" } },
      { image: "/black-sea/cardio-machines.jpg", label: { en: "Cardio Machines", ka: "კარდიო ტრენაჟორები" } },
    ],
  },
  blackseakids: {
    id: "blackseakids",
    brandName: "Black Sea Kids",
    shortName: { en: "Black Sea Kids", ka: "ბლექ სი კიდსი" },
    priceListImage: "/black-sea-kids/price-list.jpg",
    homePhotos: ["/black-sea-kids/lane-chairs.jpg", "/black-sea-kids/pool-wide.jpg", "/black-sea-kids/pool-ropes.jpg"],
    gateTag: { en: "Kids Swim · Kids Fitness", ka: "ცურვა ბავშვებისთვის · ფიტნესი ბავშვებისთვის" },
    gateBlurb: {
      en: "A kids-focused facility one lane over from Black Sea's main Gldani complex — group and personal swim lessons plus kids fitness.",
      ka: "ბავშვებზე ორიენტირებული კომპლექსი Black Sea-ს მთავარი გლდანური კომპლექსის მეზობლად — ჯგუფური და პერსონალური ცურვის გაკვეთილები და ბავშვთა ფიტნესი.",
    },
    areaLabel: { en: "Gldani, Tbilisi", ka: "გლდანი, თბილისი" },
    hoursShort: { en: "Mon–Sat 09:00–21:00, Sun 09:00–15:00", ka: "ორშ–შაბ 09:00–21:00, კვირა 09:00–15:00" },
    address: {
      en: "Gldani, A District, Teimuraz Bochorishvili St, 1st Lane #8, Tbilisi, 0141",
      ka: "გლდანის \"ა\" მ/რ, თეიმურაზ ბოჭორიშვილის 1 ჩიხი #8, თბილისი, 0141",
    },
    phones: ["+995 591 204 050"],
    hoursDetailed: [
      { day: { en: "Monday – Saturday", ka: "ორშაბათი – შაბათი" }, time: "09:00 – 21:00" },
      { day: { en: "Sunday", ka: "კვირა" }, time: "09:00 – 15:00" },
    ],
    introHeading: { en: "A kids-first complex, one lane over from Black Sea.", ka: "ბავშვებზე ორიენტირებული კომპლექსი, Black Sea-ს გვერდით." },
    introLede: {
      en: "One lane over from Black Sea's main complex, this location is built specifically around kids' swimming and fitness — group and personal lessons for children.",
      ka: "Black Sea-ს მთავარი კომპლექსის მეზობლად, ეს ლოკაცია სპეციალურად ბავშვთა ცურვისა და ფიტნეს პროგრამებზეა ორიენტირებული — ჯგუფური და პერსონალური გაკვეთილები ბავშვებისთვის.",
    },
    services: [
      { category: "pool", title: { en: "Kids Swim Lessons", ka: "ცურვის გაკვეთილები ბავშვებისთვის" }, desc: { en: "Contact us for details.", ka: "დეტალებისთვის დაგვიკავშირდით." } },
      { category: "gym", title: { en: "Kids Fitness", ka: "ფიტნესი ბავშვებისთვის" }, desc: { en: "Contact us for details.", ka: "დეტალებისთვის დაგვიკავშირდით." } },
      { category: "pool", title: { en: "Medium Pool", ka: "საშუალო აუზი" }, desc: { en: "15m × 6m, 1.35m deep — ideal for guided lessons and lighter sessions.", ka: "15 მ × 6 მ, სიღრმე 1.35 მ — შესაფერისი გაკვეთილებისა და მსუბუქი ვარჯიშისთვის." } },
      { category: "pool", title: { en: "Large Pool", ka: "დიდი აუზი" }, desc: { en: "22m × 6m, 1.80m deep — for more advanced swim practice.", ka: "22 მ × 6 მ, სიღრმე 1.80 მ — უფრო მოწინავე ცურვის ვარჯიშისთვის." } },
    ],
    pricingGroups: [
      {
        category: { en: "Group lessons — Learn to swim (ages 5+)", ka: "ჯგუფური გაკვეთილები — ცურვის სწავლება (5 წლიდან)" },
        rows: [
          { tier: { en: "Single lesson", ka: "ერთი გაკვეთილი" }, price: "20 ₾" },
          { tier: { en: "12 lessons", ka: "12 გაკვეთილი" }, price: "120 ₾" },
          { tier: { en: "8 lessons (weekends)", ka: "8 გაკვეთილი (შაბათი-კვირა)" }, price: "100 ₾" },
        ],
      },
      {
        category: { en: "Personal lessons — Learn to swim", ka: "პერსონალური გაკვეთილები — ცურვის სწავლება" },
        rows: [
          { tier: { en: "1 lesson", ka: "1 გაკვეთილი" }, price: "35 ₾" },
          { tier: { en: "8 lessons", ka: "8 გაკვეთილი" }, price: "240 ₾" },
          { tier: { en: "12 lessons", ka: "12 გაკვეთილი" }, price: "320 ₾" },
        ],
      },
      {
        category: { en: "Personal lessons — Therapy", ka: "პერსონალური გაკვეთილები — თერაპია" },
        rows: [{ tier: { en: "1 lesson", ka: "1 გაკვეთილი" }, price: "40 ₾" }],
      },
    ],
    visitorNote: { en: "Visitor card: 5 GEL", ka: "ვიზიტორის ბარათი: 5 ლარი" },
    notes: [
      { en: "Lesson duration: 45 minutes.", ka: "გაკვეთილის ხანგრძლივობა 45 წუთი." },
      { en: "Subscription valid for 28 days.", ka: "აბონემენტის ვადა 28 დღე." },
      { en: "Sibling discount: 2+ children from the same family get 10% off.", ka: "შეღავათი: ოჯახიდან 2 და მეტი ბავშვი -10%." },
    ],
    gallery: [
      { image: "/black-sea-kids/lane-chairs.jpg", label: { en: "Training Lanes", ka: "სავარჯიშო ბილიკები" } },
      { image: "/black-sea-kids/pool-wide.jpg", label: { en: "Kids Swimming Pool", ka: "საბავშვო საცურაო აუზი" } },
      { image: "/black-sea-kids/pool-entry.jpg", label: { en: "Pool Entry", ka: "აუზში შესასვლელი" } },
      { image: "/black-sea-kids/lockers.jpg", label: { en: "Locker Room", ka: "გასახდელი" } },
    ],
  },
  zestafoni: {
    id: "zestafoni",
    brandName: "Black Sea — Zestafoni",
    shortName: { en: "Zestafoni", ka: "ზესტაფონი" },
    priceListImage: "/zestafoni/price-list.jpg",
    facebook: "https://www.facebook.com/profile.php?id=100063646506343",
    instagram: "https://www.instagram.com/blacksea_zestafoni/?hl=en",
    homePhotos: ["/zestafoni/gallery-1.jpg", "/zestafoni/gallery-2.jpg", "/zestafoni/hero.jpg"],
    gateTag: { en: "Pool · Gym · Hotel", ka: "აუზი · დარბაზი · სასტუმრო" },
    gateBlurb: {
      en: "Three pools, a fitness floor, and an on-site hotel for longer stays.",
      ka: "სამი აუზი, სავარჯიშო დარბაზი და ადგილზე სასტუმრო — ხანგრძლივი ვიზიტებისთვის.",
    },
    areaLabel: { en: "Zestafoni", ka: "ზესტაფონი" },
    hoursShort: { en: "Daily 09:00–21:00", ka: "ყოველდღე 09:00–21:00" },
    address: { en: "Aghmashenebeli St 37, Zestafoni, Georgia", ka: "აღმაშენებლის 37, ზესტაფონი, საქართველო" },
    phones: ["+995 596 20 40 90", "032 2 560276"],
    hoursDetailed: [{ day: { en: "Every day", ka: "ყოველდღე" }, time: "09:00 – 21:00" }],
    introHeading: { en: "Three pools, a gym, and a hotel.", ka: "სამი აუზი, დარბაზი და სასტუმრო." },
    introLede: {
      en: "The Zestafoni complex goes beyond a day visit — alongside the sport facilities, an on-site hotel under the same ownership makes it a place to stay, not just train. A newly renovated environment and modern equipment make training here more comfortable and effective than ever.",
      ka: "ზესტაფონის კომპლექსი ერთდღიან ვიზიტს სცდება — სპორტულ ინფრასტრუქტურასთან ერთად, იმავე მფლობელობის სასტუმრო მას დასასვენებელ ადგილადაც აქცევს, არა მხოლოდ სავარჯიშოდ. განახლებული გარემო და თანამედროვე აღჭურვილობა ვარჯიშს კიდევ უფრო კომფორტულს და ეფექტურს ხდის.",
    },
    services: [
      { category: "pool", title: { en: "Small Pool", ka: "პატარა აუზი" }, desc: { en: "4.05m wide, 0.65–0.72m deep (shallow to deep end) — a gentle water space for light sessions and beginners.", ka: "სიგანე 4.05 მ, სიღრმე 0.65–0.72 მ (თანდათან ღრმავდება) — მსუბუქი წყლის სივრცე დამწყებთათვის და მსუბუქი ვარჯიშისთვის." } },
      { category: "pool", title: { en: "Medium Pool", ka: "საშუალო აუზი" }, desc: { en: "7.45m wide × 12m long, 1.38–1.58m deep (shallow to deep end) — everyday swimming and technique work.", ka: "სიგანე 7.45 მ, სიგრძე 12 მ, სიღრმე 1.38–1.58 მ (თანდათან ღრმავდება) — ყოველდღიური ცურვა და ტექნიკის ვარჯიში." } },
      { category: "pool", title: { en: "Large Pool", ka: "დიდი აუზი" }, desc: { en: "7.45m wide × 22m long, 1.58–1.78m deep (shallow to deep end) — full-length swimming for structured training.", ka: "სიგანე 7.45 მ, სიგრძე 22 მ, სიღრმე 1.58–1.78 მ (თანდათან ღრმავდება) — სრული სიგრძის აუზი სტრუქტურირებული ვარჯიშისთვის." } },
      { category: "gym", title: { en: "Fitness Floor", ka: "სავარჯიშო დარბაზი" }, desc: { en: "Equipment for strength and everyday conditioning.", ka: "აღჭურვილობა ძალისა და ყოველდღიური ფორმისთვის." } },
      { category: "pool", title: { en: "Kids Swim Lessons", ka: "ცურვის გაკვეთილები ბავშვებისთვის" }, desc: { en: "Guided lessons for children from age 5.", ka: "გაკვეთილები ბავშვებისთვის 5 წლის ასაკიდან." } },
      { category: "pool", title: { en: "Open-Air Pool", ka: "ღია აუზი" }, desc: { en: "An outdoor pool for warm-weather swimming.", ka: "ღია აუზი თბილი სეზონის ცურვისთვის." } },
      { category: "pool", title: { en: "Aqua Aerobics", ka: "აქუა აეორობიკა" }, desc: { en: "Low-impact, high-energy group training in the water.", ka: "დაბალი დატვირთვის, მაღალი ენერგიის ჯგუფური ვარჯიში წყალში." } },
      { category: "gym", title: { en: "Boxing", ka: "კრივი" }, desc: { en: "Boxing training sessions on the fitness floor.", ka: "კრივის ვარჯიშები სავარჯიშო დარბაზში." } },
    ],
    hotel: {
      title: { en: "Hotel, Wellness & Spa", ka: "სასტუმრო, უელნესი და სპა" },
      desc: {
        en: "An on-site hotel, wellness centre and spa under the same ownership — rooms, sauna, treatments and event space, all steps from the pools and gym. Details pending confirmation from the owners.",
        ka: "იმავე მფლობელობის სასტუმრო, უელნეს-ცენტრი და სპა ადგილზე — ნომრები, საუნა, პროცედურები და ღონისძიებების სივრცე, აუზებისა და დარბაზის გვერდით. დეტალები დაზუსტდება მფლობელებთან.",
      },
    },
    pricingGroups: [
      {
        category: { en: "Pool & sauna", ka: "აუზი და საუნა" },
        rows: [
          { tier: { en: "1 visit", ka: "1 ვიზიტი" }, price: "20 ₾" },
          { tier: { en: "12 visits", ka: "12 ვიზიტი" }, price: "100 ₾" },
          { tier: { en: "Unlimited until 15:00", ka: "ულიმიტო 15:00 საათამდე" }, price: "120 ₾" },
          { tier: { en: "Unlimited", ka: "ულიმიტო" }, price: "140 ₾" },
        ],
      },
      {
        category: { en: "Fitness & sauna", ka: "ფიტნესი და საუნა" },
        rows: [
          { tier: { en: "1 visit", ka: "1 ვიზიტი" }, price: "20 ₾" },
          { tier: { en: "12 visits", ka: "12 ვიზიტი" }, price: "70 ₾" },
          { tier: { en: "Unlimited until 15:00", ka: "ულიმიტო 15:00 საათამდე" }, price: "70 ₾" },
          { tier: { en: "Unlimited", ka: "ულიმიტო" }, price: "90 ₾" },
        ],
      },
      {
        category: { en: "Pool + fitness + sauna", ka: "აუზი, ფიტნესი და საუნა" },
        rows: [
          { tier: { en: "1 visit", ka: "1 ვიზიტი" }, price: "25 ₾" },
          { tier: { en: "12 visits", ka: "12 ვიზიტი" }, price: "130 ₾" },
          { tier: { en: "Unlimited until 15:00", ka: "ულიმიტო 15:00 საათამდე" }, price: "150 ₾" },
          { tier: { en: "Unlimited", ka: "ულიმიტო" }, price: "180 ₾" },
        ],
      },
      {
        category: { en: "Group classes", ka: "ჯგუფური ვარჯიშები" },
        rows: [
          { tier: { en: "Swimming — 1 visit", ka: "აუზი — 1 ვიზიტი" }, price: "15 ₾" },
          { tier: { en: "Swimming — 12 visits", ka: "აუზი — 12 ვიზიტი" }, price: "75 ₾" },
          { tier: { en: "Boxing", ka: "კრივი" }, price: "50 ₾" },
        ],
      },
      {
        category: { en: "Personal / individual training", ka: "პერსონალური ვარჯიშები" },
        rows: [
          { tier: { en: "Swimming — 1 visit", ka: "აუზი — 1 ვიზიტი" }, price: "30 ₾" },
          { tier: { en: "Swimming — 12 visits", ka: "აუზი — 12 ვიზიტი" }, price: "180 ₾" },
          { tier: { en: "Fitness — 12 visits", ka: "ფიტნესი — 12 ვიზიტი" }, price: "150 ₾" },
        ],
      },
      {
        category: { en: "Swim gear", ka: "საცურაო აქსესუარები" },
        rows: [
          { tier: { en: "Swimming cap", ka: "საცურაო ქუდი" }, price: "15 ₾", image: "/zestafoni/cap.jpg" },
          { tier: { en: "Swimming goggles", ka: "საცურაო სათვალე" }, price: "20 ₾", image: "/zestafoni/goggles.jpg" },
        ],
      },
    ],
    visitorNote: { en: "Visitor card: 5 GEL", ka: "ვიზიტორის ბარათი: 5 ლარი" },
    rulesLabel: { en: "Fitness rules", ka: "ფიტნეს წესები" },
    rules: [
      {
        en: "Membership cards are non-transferable to another person. 1st violation: 30 GEL fine. 2nd violation: account blacklisted.",
        ka: "საწევრო ბარათის სხვა პირზე გადაცემა დაუშვებელია. 1-ლი დარღვევა: ჯარიმა 30 ლარი. მე-2 დარღვევა: ანგარიშის დაბლოკვა.",
      },
      {
        en: "Using activities or facilities outside your package is not permitted. 1st violation: 30 GEL fine. 2nd violation: account blacklisted.",
        ka: "თქვენი პაკეტის ფარგლებს გარეთ აქტივობების ან ინფრასტრუქტურის გამოყენება დაუშვებელია. 1-ლი დარღვევა: ჯარიმა 30 ლარი. მე-2 დარღვევა: ანგარიშის დაბლოკვა.",
      },
      {
        en: "Indoor / changing shoes are required. 1st violation: warning. 2nd violation: entry refused.",
        ka: "შენობის/გამოსაცვლელი ფეხსაცმელი სავალდებულოა. 1-ლი დარღვევა: გაფრთხილება. მე-2 დარღვევა: შესვლაზე უარი.",
      },
    ],
    poolRules: [
      {
        en: "Entering the swimming pool without a swimming cap is not allowed.",
        ka: "საცურაო აუზზე ქუდის გარეშე შესვლა დაუშვებელია.",
      },
      {
        en: "Pausing your membership or refunding payment is not permitted.",
        ka: "აბონიმენტის დაპაუზება ან თანხის დაბრუნება დაუშვებელია.",
      },
      {
        en: "Group classes missed by the customer are not refunded or made up.",
        ka: "მომხმარებლის მიერ გაცდენილი ჯგუფური ვარჯიშები არ ანაზღაურდება.",
      },
    ],
    poolRulesNote: {
      en: "The indoor pool's water temperature is measured twice a day, monitored, and fully complies with sanitary and safety standards.",
      ka: "დახურული აუზის წყლის ტემპერატურა იზომება დღეში ორჯერ, კონტროლდება და სრულად შეესაბამება სანიტარულ და უსაფრთხოების ნორმებს.",
    },
    gallery: [
      { image: "/zestafoni/gallery-1.jpg", label: { en: "Large pool", ka: "დიდი აუზი" } },
      { image: "/zestafoni/gallery-2.jpg", label: { en: "Indoor pool", ka: "დახურული აუზი" } },
      { image: "/zestafoni/gallery-3.jpg", label: { en: "Treadmills", ka: "ტრედმილები" } },
      { image: "/zestafoni/gallery-4.jpg", label: { en: "Squat rack", ka: "სკვოთ რეკი" } },
      { image: "/zestafoni/gallery-5.jpg", label: { en: "Fitness floor", ka: "სავარჯიშო დარბაზი" } },
      { image: "/zestafoni/gallery-6.jpg", label: { en: "Stair climber", ka: "კიბის ტრენაჟორი" } },
      { image: "/zestafoni/gallery-7.jpg", label: { en: "Free weights", ka: "თავისუფალი წონები" } },
    ],
  },
};

export const locationOrder: LocationId[] = ["blacksea1", "blackseakids", "zestafoni"];
