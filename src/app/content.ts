export type Lang = "ka" | "en";
export type LocationId = "tbilisi" | "zestafoni";
export type Category = "pool" | "gym" | "hotel";

export interface Bi {
  en: string;
  ka: string;
}

export type IconKind = "wave" | "dumbbell" | "crossfit" | "aqua" | "aerobics" | "kids" | "hotel";

export interface ServiceItem {
  category: Category;
  icon: IconKind;
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

export interface GalleryTile {
  label: Bi;
  tint: "gold" | "blue" | "teal" | "coral";
}

export interface LocationContent {
  id: LocationId;
  brandName: string;
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
  pricing: PricePlan[];
  gallery: GalleryTile[];
  facebook: string;
  accent: "gold" | "blue";
  rating: number;
  reviewCount: number;
  poolCount: number;
  tickerItems: Bi[];
}

export const instagramUrl = "";

export const ui = {
  navCall: { en: "Call", ka: "დარეკვა" } as Bi,
  langEn: "EN",
  langKa: "KA",
  heroBadge: { en: "Two locations · Georgia", ka: "ორი ლოკაცია · საქართველო" } as Bi,
  heroTitle: { en: "Choose your Black Sea.", ka: "აირჩიეთ თქვენი Black Sea." } as Bi,
  heroSub: {
    en: "Two sport complexes, each built differently around what their city needs — pick a location to see what's inside, what it costs, and how to visit.",
    ka: "ორი სპორტული კომპლექსი, თითოეული საკუთარ ქალაქზეა მორგებული — აირჩიეთ ლოკაცია და ნახეთ, რა არის შიგნით, რა ღირს და როგორ ეწვიოთ.",
  } as Bi,
  statRating: { en: "Member rating", ka: "შეფასება" } as Bi,
  statReviews: { en: "Reviews", ka: "შეფასებები" } as Bi,
  statPools: { en: "Pools here", ka: "აუზი აქ" } as Bi,
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
  hoursLabel: { en: "Hours", ka: "სამუშაო საათები" } as Bi,
  directions: { en: "Directions", ka: "მიმართულება" } as Bi,
  footNote: {
    en: "Placeholder content, pricing and photography. To be replaced with final assets.",
    ka: "დროებითი კონტენტი, ფასები და ფოტოები. საბოლოო მასალებით შეიცვლება.",
  } as Bi,
};

export const locations: Record<LocationId, LocationContent> = {
  tbilisi: {
    id: "tbilisi",
    brandName: "Black Sea 2 — Tbilisi",
    accent: "gold",
    facebook: "https://www.facebook.com/bscomplex.ge",
    rating: 8.79,
    reviewCount: 1357,
    poolCount: 2,
    gateTag: { en: "Gym · Pool · CrossFit", ka: "დარბაზი · აუზი · CrossFit" },
    gateBlurb: {
      en: "Gldani's flagship complex — two pools, full gym floor, group classes.",
      ka: "გლდანის მთავარი კომპლექსი — ორი აუზი, სრული სავარჯიშო დარბაზი, ჯგუფური ვარჯიშები.",
    },
    areaLabel: { en: "Gldani, Tbilisi", ka: "გლდანი, თბილისი" },
    hoursShort: { en: "Mon–Sat 07:00–22:00", ka: "ორშ–შაბ 07:00–22:00" },
    tickerItems: [
      { en: "8.79★ Rating", ka: "8.79★ შეფასება" },
      { en: "2 Pools", ka: "2 აუზი" },
      { en: "CrossFit", ka: "CrossFit" },
      { en: "Group Classes", ka: "ჯგუფური მეცადინეობები" },
      { en: "Gldani, Tbilisi", ka: "გლდანი, თბილისი" },
    ],
    address: {
      en: "Gldani, A District, Khizabavra St, Tbilisi",
      ka: "გლდანის ა მ-რ, ხიზაბავრის ქუჩა I ჩიხი N5, თბილისი",
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
      { category: "pool", icon: "wave", title: { en: "25m Pool", ka: "25 მ აუზი" }, desc: { en: "5-lane pool for structured lane swimming and technique work.", ka: "5-ბილიკიანი აუზი სტრუქტურირებული ცურვისა და ტექნიკის ვარჯიშისთვის." } },
      { category: "pool", icon: "wave", title: { en: "12.5m Pool", ka: "12.5 მ აუზი" }, desc: { en: "A calmer water space for lighter sessions, kids and technical drills.", ka: "მშვიდი წყლის სივრცე მსუბუქი ვარჯიშების, ბავშვებისა და ტექნიკური სავარჯიშოებისთვის." } },
      { category: "gym", icon: "dumbbell", title: { en: "Fitness Floor", ka: "სავარჯიშო დარბაზი" }, desc: { en: "Modern equipment for strength, endurance and daily conditioning.", ka: "თანამედროვე აღჭურვილობა ძალის, გამძლეობისა და ყოველდღიური ფორმისთვის." } },
      { category: "gym", icon: "crossfit", title: { en: "CrossFit", ka: "CrossFit" }, desc: { en: "Functional training programmed around strength and pace.", ka: "ფუნქციური ვარჯიში, აგებული ძალასა და ტემპზე." } },
      { category: "pool", icon: "aqua", title: { en: "Aqua Aerobics", ka: "Aqua Aerobics" }, desc: { en: "Low-impact, high-energy group training in the water.", ka: "დაბალი დატვირთვის, მაღალი ენერგიის ჯგუფური ვარჯიში წყალში." } },
      { category: "gym", icon: "aerobics", title: { en: "Group Aerobics", ka: "ჯგუფური აერობიკა" }, desc: { en: "Studio sessions built around mobility and tempo.", ka: "სტუდიური მეცადინეობები მოძრაობასა და ტემპზე." } },
    ],
    pricing: [
      { label: { en: "Day pass", ka: "ერთჯერადი ვიზიტი" }, unit: { en: " ₾ / visit", ka: " ₾ / ვიზიტი" }, note: { en: "Placeholder — pending final pricing", ka: "დროებითი — ფასი დაზუსტდება" }, features: [ { en: "Full pool access", ka: "სრული წვდომა აუზზე" }, { en: "Gym floor access", ka: "წვდომა სავარჯიშო დარბაზზე" }, { en: "Locker included", ka: "კარადა შედის" } ] },
      { label: { en: "Monthly", ka: "თვიური" }, unit: { en: " ₾ / month", ka: " ₾ / თვე" }, note: { en: "Placeholder — pending final pricing", ka: "დროებითი — ფასი დაზუსტდება" }, features: [ { en: "Unlimited pool + gym", ka: "ულიმიტო აუზი + დარბაზი" }, { en: "All group classes", ka: "ყველა ჯგუფური მეცადინეობა" }, { en: "Guest passes", ka: "სტუმრის ბარათები" } ], accent: true },
      { label: { en: "Annual", ka: "წლიური" }, unit: { en: " ₾ / year", ka: " ₾ / წელი" }, note: { en: "Placeholder — pending final pricing", ka: "დროებითი — ფასი დაზუსტდება" }, features: [ { en: "Everything in Monthly", ka: "ყველაფერი თვიურიდან" }, { en: "Best value", ka: "საუკეთესო ღირებულება" }, { en: "Priority class booking", ka: "პრიორიტეტული ჯავშანი" } ] },
    ],
    gallery: [
      { label: { en: "Main pool", ka: "მთავარი აუზი" }, tint: "blue" },
      { label: { en: "Gym floor", ka: "სავარჯიშო დარბაზი" }, tint: "gold" },
      { label: { en: "Swim lanes", ka: "საცურაო ბილიკები" }, tint: "teal" },
      { label: { en: "Lockers", ka: "კარადები" }, tint: "coral" },
      { label: { en: "Group class", ka: "ჯგუფური მეცადინეობა" }, tint: "gold" },
    ],
  },
  zestafoni: {
    id: "zestafoni",
    brandName: "Black Sea — Zestafoni",
    accent: "blue",
    facebook: "https://www.facebook.com/profile.php?id=100063646506343",
    rating: 8.09,
    reviewCount: 21,
    poolCount: 3,
    gateTag: { en: "Pool · Gym · Hotel", ka: "აუზი · დარბაზი · სასტუმრო" },
    gateBlurb: {
      en: "Three pools, a fitness floor, and an on-site hotel for longer stays.",
      ka: "სამი აუზი, სავარჯიშო დარბაზი და ადგილზე სასტუმრო — ხანგრძლივი ვიზიტებისთვის.",
    },
    areaLabel: { en: "Zestafoni", ka: "ზესტაფონი" },
    hoursShort: { en: "Daily 09:00–20:00", ka: "ყოველდღე 09:00–20:00" },
    tickerItems: [
      { en: "8.09★ Rating", ka: "8.09★ შეფასება" },
      { en: "3 Pools", ka: "3 აუზი" },
      { en: "On-site Hotel", ka: "სასტუმრო ადგილზე" },
      { en: "Kids Lessons", ka: "ბავშვთა გაკვეთილები" },
      { en: "Zestafoni", ka: "ზესტაფონი" },
    ],
    address: { en: "Aghmashenebeli St 37, Zestafoni", ka: "აღმაშენებლის 37, ზესტაფონი" },
    phones: ["+995 596 204 090"],
    hoursDetailed: [{ day: { en: "Every day", ka: "ყოველდღე" }, time: "09:00 – 20:00" }],
    introHeading: { en: "Three pools, a gym, and a hotel.", ka: "სამი აუზი, დარბაზი და სასტუმრო." },
    introLede: {
      en: "The Zestafoni complex goes beyond a day visit — alongside the sport facilities, an on-site hotel under the same ownership makes it a place to stay, not just train.",
      ka: "ზესტაფონის კომპლექსი ერთდღიან ვიზიტს სცდება — სპორტულ ინფრასტრუქტურასთან ერთად, იმავე მფლობელობის სასტუმრო მას დასასვენებელ ადგილადაც აქცევს, არა მხოლოდ სავარჯიშოდ.",
    },
    services: [
      { category: "pool", icon: "wave", title: { en: "Small Pool", ka: "პატარა აუზი" }, desc: { en: "A gentle water space for light sessions and beginners.", ka: "მსუბუქი წყლის სივრცე დამწყებთათვის და მსუბუქი ვარჯიშისთვის." } },
      { category: "pool", icon: "wave", title: { en: "Medium Pool", ka: "საშუალო აუზი" }, desc: { en: "Everyday swimming and technique work.", ka: "ყოველდღიური ცურვა და ტექნიკის ვარჯიში." } },
      { category: "pool", icon: "wave", title: { en: "Large Pool", ka: "დიდი აუზი" }, desc: { en: "Full-length swimming for structured training.", ka: "სრული სიგრძის აუზი სტრუქტურირებული ვარჯიშისთვის." } },
      { category: "gym", icon: "dumbbell", title: { en: "Fitness Floor", ka: "სავარჯიშო დარბაზი" }, desc: { en: "Equipment for strength and everyday conditioning.", ka: "აღჭურვილობა ძალისა და ყოველდღიური ფორმისთვის." } },
      { category: "pool", icon: "kids", title: { en: "Kids Swim Lessons", ka: "ცურვის გაკვეთილები ბავშვებისთვის" }, desc: { en: "Guided lessons for children from age 5.", ka: "გაკვეთილები ბავშვებისთვის 5 წლის ასაკიდან." } },
    ],
    hotel: {
      title: { en: "Stay & play", ka: "დარჩი და ივარჯიშე" },
      desc: {
        en: "An on-site hotel under the same ownership — rooms, dining and event space, all steps from the pools and gym. Details pending confirmation from the owners.",
        ka: "იმავე მფლობელობის სასტუმრო ადგილზე — ნომრები, კვება და ღონისძიებების სივრცე, აუზებისა და დარბაზის გვერდით. დეტალები დაზუსტდება მფლობელებთან.",
      },
    },
    pricing: [
      { label: { en: "Day pass", ka: "ერთჯერადი ვიზიტი" }, unit: { en: " ₾ / visit", ka: " ₾ / ვიზიტი" }, note: { en: "Placeholder — pending final pricing", ka: "დროებითი — ფასი დაზუსტდება" }, features: [ { en: "Full pool access", ka: "სრული წვდომა აუზზე" }, { en: "Gym floor access", ka: "წვდომა სავარჯიშო დარბაზზე" } ] },
      { label: { en: "Monthly", ka: "თვიური" }, unit: { en: " ₾ / month", ka: " ₾ / თვე" }, note: { en: "Placeholder — pending final pricing", ka: "დროებითი — ფასი დაზუსტდება" }, features: [ { en: "Unlimited pool + gym", ka: "ულიმიტო აუზი + დარბაზი" }, { en: "Kids lessons discount", ka: "ფასდაკლება ბავშვთა გაკვეთილებზე" } ], accent: true },
      { label: { en: "Stay & play", ka: "დარჩი და ივარჯიშე" }, unit: { en: " ₾ / night", ka: " ₾ / ღამე" }, note: { en: "Hotel + facility access, placeholder", ka: "სასტუმრო + წვდომა კომპლექსზე, დროებითი" }, features: [ { en: "Hotel room", ka: "სასტუმროს ნომერი" }, { en: "Full complex access", ka: "სრული წვდომა კომპლექსზე" } ] },
    ],
    gallery: [
      { label: { en: "Large pool", ka: "დიდი აუზი" }, tint: "blue" },
      { label: { en: "Hotel room", ka: "სასტუმროს ნომერი" }, tint: "coral" },
      { label: { en: "Gym floor", ka: "სავარჯიშო დარბაზი" }, tint: "gold" },
      { label: { en: "Small pool", ka: "პატარა აუზი" }, tint: "teal" },
      { label: { en: "Kids lessons", ka: "ბავშვთა გაკვეთილები" }, tint: "blue" },
    ],
  },
};

export const locationOrder: LocationId[] = ["tbilisi", "zestafoni"];
