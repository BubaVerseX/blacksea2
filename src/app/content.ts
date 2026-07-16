export type Lang = "ka" | "en";
export type LocationId = "blacksea1" | "blackseakids" | "zestafoni";
export type Category = "pool" | "gym" | "hotel";

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
}

export interface PricingGroup {
  category: Bi;
  rows: PricingRow[];
}

export interface GalleryTile {
  label: Bi;
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
  gallery: GalleryTile[];
  facebook?: string;
  accent: "gold" | "blue";
}

// TODO: replace with real Instagram handle once available
export const instagramUrl = "";

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
  includedEyebrow: { en: "What's included", ka: "რას მოიცავს" } as Bi,
  includedHeading: { en: "Everything on one membership.", ka: "ყველაფერი ერთ საწევრო ბარათში." } as Bi,
  membershipEyebrow: { en: "Membership", ka: "საწევრო" } as Bi,
  pricingHeading: (loc: Bi) => ({
    en: `Pricing — ${loc.en}`,
    ka: `ფასები — ${loc.ka}`,
  }),
  pricingNote: {
    en: "Prices are placeholders — swap in real numbers once the owners confirm packages.",
    ka: "ფასები დროებითია — რეალურით შეიცვლება მფლობელების დადასტურების შემდეგ.",
  } as Bi,
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
  footNote: {
    en: "Placeholder content, pricing and photography. To be replaced with final assets.",
    ka: "დროებითი კონტენტი, ფასები და ფოტოები. საბოლოო მასალებით შეიცვლება.",
  } as Bi,
};

export const locations: Record<LocationId, LocationContent> = {
  blacksea1: {
    id: "blacksea1",
    brandName: "Black Sea 1",
    shortName: { en: "Black Sea 1", ka: "შავი ზღვა 1" },
    accent: "gold",
    facebook: "https://www.facebook.com/bscomplex.ge",
    gateTag: { en: "Gym · Pool · CrossFit", ka: "დარბაზი · აუზი · CrossFit" },
    gateBlurb: {
      en: "Gldani's flagship complex — two pools, full gym floor, group classes.",
      ka: "გლდანის მთავარი კომპლექსი — ორი აუზი, სრული სავარჯიშო დარბაზი, ჯგუფური ვარჯიშები.",
    },
    areaLabel: { en: "Gldani, Tbilisi", ka: "გლდანი, თბილისი" },
    hoursShort: { en: "Mon–Sat 07:00–22:00", ka: "ორშ–შაბ 07:00–22:00" },
    address: {
      en: "Gldani, A District, Teimuraz Bochorishvili St, 1st Lane, Tbilisi, 0141",
      ka: "გლდანის \"ა\" მ/რ, თეიმურაზ ბოჭორიშვილის 1 ჩიხი, თბილისი, 0141",
    },
    phones: ["+995 595 981 100", "+995 591 204 050"],
    hoursDetailed: [
      { day: { en: "Monday – Saturday", ka: "ორშაბათი – შაბათი" }, time: "07:00 – 22:00" },
      { day: { en: "Sunday", ka: "კვირა" }, time: "09:00 – 21:00" },
    ],
    introHeading: { en: "Gldani's flagship complex.", ka: "გლდანის მთავარი კომპლექსი." },
    introLede: {
      en: "A large pool floor paired with a modern gym — built for daily lane swimming, strength training and group classes in one place.",
      ka: "დიდი აუზის სივრცე თანამედროვე დარბაზთან ერთად — ყოველდღიური ცურვის, ძალის ვარჯიშისა და ჯგუფური მეცადინეობებისთვის ერთ სივრცეში.",
    },
    services: [
      { category: "pool", title: { en: "25m Pool", ka: "25 მ აუზი" }, desc: { en: "5-lane pool for structured lane swimming and technique work.", ka: "5-ბილიკიანი აუზი სტრუქტურირებული ცურვისა და ტექნიკის ვარჯიშისთვის." } },
      { category: "pool", title: { en: "12.5m Pool", ka: "12.5 მ აუზი" }, desc: { en: "A calmer water space for lighter sessions, kids and technical drills.", ka: "მშვიდი წყლის სივრცე მსუბუქი ვარჯიშების, ბავშვებისა და ტექნიკური სავარჯიშოებისთვის." } },
      { category: "gym", title: { en: "Fitness Floor", ka: "სავარჯიშო დარბაზი" }, desc: { en: "Modern equipment for strength, endurance and daily conditioning.", ka: "თანამედროვე აღჭურვილობა ძალის, გამძლეობისა და ყოველდღიური ფორმისთვის." } },
      { category: "gym", title: { en: "CrossFit", ka: "CrossFit" }, desc: { en: "Functional training programmed around strength and pace.", ka: "ფუნქციური ვარჯიში, აგებული ძალასა და ტემპზე." } },
      { category: "pool", title: { en: "Aqua Aerobics", ka: "Aqua Aerobics" }, desc: { en: "Low-impact, high-energy group training in the water.", ka: "დაბალი დატვირთვის, მაღალი ენერგიის ჯგუფური ვარჯიში წყალში." } },
      { category: "gym", title: { en: "Group Aerobics", ka: "ჯგუფური აერობიკა" }, desc: { en: "Studio sessions built around mobility and tempo.", ka: "სტუდიური მეცადინეობები მოძრაობასა და ტემპზე." } },
    ],
    pricing: [
      { label: { en: "Day pass", ka: "ერთჯერადი ვიზიტი" }, unit: { en: " ₾ / visit", ka: " ₾ / ვიზიტი" }, note: { en: "Placeholder — pending final pricing", ka: "დროებითი — ფასი დაზუსტდება" }, features: [ { en: "Full pool access", ka: "სრული წვდომა აუზზე" }, { en: "Gym floor access", ka: "წვდომა სავარჯიშო დარბაზზე" }, { en: "Locker included", ka: "კარადა შედის" } ] },
      { label: { en: "Monthly", ka: "თვიური" }, unit: { en: " ₾ / month", ka: " ₾ / თვე" }, note: { en: "Placeholder — pending final pricing", ka: "დროებითი — ფასი დაზუსტდება" }, features: [ { en: "Unlimited pool + gym", ka: "ულიმიტო აუზი + დარბაზი" }, { en: "All group classes", ka: "ყველა ჯგუფური მეცადინეობა" }, { en: "Guest passes", ka: "სტუმრის ბარათები" } ], accent: true },
      { label: { en: "Annual", ka: "წლიური" }, unit: { en: " ₾ / year", ka: " ₾ / წელი" }, note: { en: "Placeholder — pending final pricing", ka: "დროებითი — ფასი დაზუსტდება" }, features: [ { en: "Everything in Monthly", ka: "ყველაფერი თვიურიდან" }, { en: "Best value", ka: "საუკეთესო ღირებულება" }, { en: "Priority class booking", ka: "პრიორიტეტული ჯავშანი" } ] },
    ],
    gallery: [
      { label: { en: "Main pool", ka: "მთავარი აუზი" } },
      { label: { en: "Gym floor", ka: "სავარჯიშო დარბაზი" } },
      { label: { en: "Swim lanes", ka: "საცურაო ბილიკები" } },
      { label: { en: "Lockers", ka: "კარადები" } },
      { label: { en: "Group class", ka: "ჯგუფური მეცადინეობა" } },
    ],
  },
  blackseakids: {
    id: "blackseakids",
    brandName: "Black Sea Kids",
    shortName: { en: "Black Sea Kids", ka: "შავი ზღვა კიდსი" },
    accent: "gold",
    gateTag: { en: "Kids Swim · Kids Fitness", ka: "ცურვა ბავშვებისთვის · ფიტნესი ბავშვებისთვის" },
    gateBlurb: {
      en: "A brand-new kids-focused facility one lane over from Black Sea 1 in Gldani — programme details coming soon.",
      ka: "ახალი, ბავშვებზე ორიენტირებული კომპლექსი Black Sea 1-ის მეზობლად, გლდანში — პროგრამის დეტალები მალე დაზუსტდება.",
    },
    areaLabel: { en: "Gldani, Tbilisi", ka: "გლდანი, თბილისი" },
    hoursShort: { en: "Hours to be confirmed", ka: "საათები დაზუსტდება" },
    address: {
      en: "Gldani, A District, Teimuraz Bochorishvili St, 2nd Lane, Tbilisi, 0141",
      ka: "გლდანის \"ა\" მ/რ, თეიმურაზ ბოჭორიშვილის 2 ჩიხი, თბილისი, 0141",
    },
    phones: [],
    hoursDetailed: [{ day: { en: "To be confirmed", ka: "დასაზუსტებელია" }, time: "—" }],
    introHeading: { en: "A kids-first complex, coming together in Gldani.", ka: "ბავშვებზე ორიენტირებული კომპლექსი, რომელიც გლდანში იქმნება." },
    introLede: {
      en: "One lane over from Black Sea 1, this new location is being built specifically around kids' swimming and fitness programming. Full details are still being finalised with the owners.",
      ka: "Black Sea 1-ის მეზობლად, ეს ახალი ლოკაცია სპეციალურად ბავშვთა ცურვისა და ფიტნეს პროგრამებზეა ორიენტირებული. სრული დეტალები ჯერ კიდევ მუშავდება მფლობელებთან ერთად.",
    },
    services: [
      { category: "pool", title: { en: "Kids Swim Lessons", ka: "ცურვის გაკვეთილები ბავშვებისთვის" }, desc: { en: "Placeholder — programme details pending confirmation from the owners.", ka: "დროებითი — პროგრამის დეტალები დაზუსტდება მფლობელებთან." } },
      { category: "gym", title: { en: "Kids Fitness", ka: "ფიტნესი ბავშვებისთვის" }, desc: { en: "Placeholder — programme details pending confirmation from the owners.", ka: "დროებითი — პროგრამის დეტალები დაზუსტდება მფლობელებთან." } },
    ],
    pricing: [
      { label: { en: "Single visit", ka: "ერთჯერადი ვიზიტი" }, unit: { en: " ₾ / visit", ka: " ₾ / ვიზიტი" }, note: { en: "Placeholder — pending final pricing", ka: "დროებითი — ფასი დაზუსტდება" }, features: [ { en: "Kids swim lesson access", ka: "წვდომა ცურვის გაკვეთილზე" }, { en: "Kids fitness access", ka: "წვდომა ბავშვთა ფიტნესზე" } ] },
      { label: { en: "Monthly", ka: "თვიური" }, unit: { en: " ₾ / month", ka: " ₾ / თვე" }, note: { en: "Placeholder — pending final pricing", ka: "დროებითი — ფასი დაზუსტდება" }, features: [ { en: "Unlimited kids programming", ka: "ულიმიტო ბავშვთა პროგრამები" }, { en: "Locker included", ka: "კარადა შედის" } ], accent: true },
      { label: { en: "Term package", ka: "სასწავლო პერიოდი" }, unit: { en: " ₾ / term", ka: " ₾ / სასწავლო პერიოდი" }, note: { en: "Placeholder — pending final pricing", ka: "დროებითი — ფასი დაზუსტდება" }, features: [ { en: "Everything in Monthly", ka: "ყველაფერი თვიურიდან" }, { en: "Priority class booking", ka: "პრიორიტეტული ჯავშანი" } ] },
    ],
    gallery: [
      { label: { en: "Kids pool", ka: "საბავშვო აუზი" } },
      { label: { en: "Kids fitness area", ka: "საბავშვო ფიტნეს სივრცე" } },
      { label: { en: "Lockers", ka: "კარადები" } },
      { label: { en: "Group session", ka: "ჯგუფური მეცადინეობა" } },
    ],
  },
  zestafoni: {
    id: "zestafoni",
    brandName: "Black Sea — Zestafoni",
    shortName: { en: "Zestafoni", ka: "ზესტაფონი" },
    accent: "blue",
    facebook: "https://www.facebook.com/profile.php?id=100063646506343",
    gateTag: { en: "Pool · Gym · Hotel", ka: "აუზი · დარბაზი · სასტუმრო" },
    gateBlurb: {
      en: "Three pools, a fitness floor, and an on-site hotel for longer stays.",
      ka: "სამი აუზი, სავარჯიშო დარბაზი და ადგილზე სასტუმრო — ხანგრძლივი ვიზიტებისთვის.",
    },
    areaLabel: { en: "Zestafoni", ka: "ზესტაფონი" },
    hoursShort: { en: "Daily 09:00–20:00", ka: "ყოველდღე 09:00–20:00" },
    address: { en: "Aghmashenebeli St 37, Zestafoni, Georgia", ka: "აღმაშენებლის 37, ზესტაფონი, საქართველო" },
    phones: ["+995 596 20 40 90", "032 2 560276"],
    hoursDetailed: [{ day: { en: "Every day", ka: "ყოველდღე" }, time: "09:00 – 20:00" }],
    introHeading: { en: "Three pools, a gym, and a hotel.", ka: "სამი აუზი, დარბაზი და სასტუმრო." },
    introLede: {
      en: "The Zestafoni complex goes beyond a day visit — alongside the sport facilities, an on-site hotel under the same ownership makes it a place to stay, not just train.",
      ka: "ზესტაფონის კომპლექსი ერთდღიან ვიზიტს სცდება — სპორტულ ინფრასტრუქტურასთან ერთად, იმავე მფლობელობის სასტუმრო მას დასასვენებელ ადგილადაც აქცევს, არა მხოლოდ სავარჯიშოდ.",
    },
    services: [
      { category: "pool", title: { en: "Small Pool", ka: "პატარა აუზი" }, desc: { en: "A gentle water space for light sessions and beginners.", ka: "მსუბუქი წყლის სივრცე დამწყებთათვის და მსუბუქი ვარჯიშისთვის." } },
      { category: "pool", title: { en: "Medium Pool", ka: "საშუალო აუზი" }, desc: { en: "Everyday swimming and technique work.", ka: "ყოველდღიური ცურვა და ტექნიკის ვარჯიში." } },
      { category: "pool", title: { en: "Large Pool", ka: "დიდი აუზი" }, desc: { en: "Full-length swimming for structured training.", ka: "სრული სიგრძის აუზი სტრუქტურირებული ვარჯიშისთვის." } },
      { category: "gym", title: { en: "Fitness Floor", ka: "სავარჯიშო დარბაზი" }, desc: { en: "Equipment for strength and everyday conditioning.", ka: "აღჭურვილობა ძალისა და ყოველდღიური ფორმისთვის." } },
      { category: "pool", title: { en: "Kids Swim Lessons", ka: "ცურვის გაკვეთილები ბავშვებისთვის" }, desc: { en: "Guided lessons for children from age 5.", ka: "გაკვეთილები ბავშვებისთვის 5 წლის ასაკიდან." } },
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
          { tier: { en: "Unlimited until 15:00", ka: "უსასრულო 15:00 საათამდე" }, price: "120 ₾" },
          { tier: { en: "Unlimited", ka: "უსასრულო" }, price: "140 ₾" },
        ],
      },
      {
        category: { en: "Fitness & sauna", ka: "ფიტნესი და საუნა" },
        rows: [
          { tier: { en: "1 visit", ka: "1 ვიზიტი" }, price: "20 ₾" },
          { tier: { en: "12 visits", ka: "12 ვიზიტი" }, price: "70 ₾" },
          { tier: { en: "Unlimited until 15:00", ka: "უსასრულო 15:00 საათამდე" }, price: "70 ₾" },
          { tier: { en: "Unlimited", ka: "უსასრულო" }, price: "90 ₾" },
        ],
      },
      {
        category: { en: "Pool + fitness + sauna", ka: "აუზი, ფიტნესი და საუნა" },
        rows: [
          { tier: { en: "1 visit", ka: "1 ვიზიტი" }, price: "25 ₾" },
          { tier: { en: "12 visits", ka: "12 ვიზიტი" }, price: "130 ₾" },
          { tier: { en: "Unlimited until 15:00", ka: "უსასრულო 15:00 საათამდე" }, price: "150 ₾" },
          { tier: { en: "Unlimited", ka: "უსასრულო" }, price: "180 ₾" },
        ],
      },
      {
        category: { en: "Group classes", ka: "ჯგუფური ვარჯიშები" },
        rows: [
          { tier: { en: "Swimming — 1 visit", ka: "ცურვა — 1 ვიზიტი" }, price: "15 ₾" },
          { tier: { en: "Swimming — 12 visits", ka: "ცურვა — 12 ვიზიტი" }, price: "75 ₾" },
          { tier: { en: "Boxing", ka: "ბოქსი" }, price: "50 ₾" },
        ],
      },
      {
        category: { en: "Personal / individual training", ka: "პერსონალური ვარჯიშები" },
        rows: [
          { tier: { en: "Swimming — 1 visit", ka: "ცურვა — 1 ვიზიტი" }, price: "30 ₾" },
          { tier: { en: "Swimming — 12 visits", ka: "ცურვა — 12 ვიზიტი" }, price: "180 ₾" },
          { tier: { en: "Fitness — 12 visits", ka: "ფიტნესი — 12 ვიზიტი" }, price: "150 ₾" },
        ],
      },
    ],
    visitorNote: { en: "Visitor card: 5 GEL", ka: "ვიზიტორის ბარათი: 5 ლარი" },
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
    gallery: [
      { label: { en: "Large pool", ka: "დიდი აუზი" } },
      { label: { en: "Hotel room", ka: "სასტუმროს ნომერი" } },
      { label: { en: "Gym floor", ka: "სავარჯიშო დარბაზი" } },
      { label: { en: "Small pool", ka: "პატარა აუზი" } },
      { label: { en: "Kids lessons", ka: "ბავშვთა გაკვეთილები" } },
    ],
  },
};

export const locationOrder: LocationId[] = ["blacksea1", "blackseakids", "zestafoni"];
