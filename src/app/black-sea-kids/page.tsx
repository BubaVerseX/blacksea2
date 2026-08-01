"use client";

import LocationPage from "../LocationPage";
import SiteFooter from "../SiteFooter";
import SiteNav from "../SiteNav";
import { useLang } from "../site-ui";

export default function BlackSeaKidsPage() {
  const [lang, setLang] = useLang();

  return (
    <div>
      <SiteNav activeId="blackseakids" lang={lang} setLang={setLang} />
      <LocationPage id="blackseakids" lang={lang} />
      <SiteFooter lang={lang} />
    </div>
  );
}
