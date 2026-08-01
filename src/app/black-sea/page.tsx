"use client";

import LocationPage from "../LocationPage";
import SiteFooter from "../SiteFooter";
import SiteNav from "../SiteNav";
import { useLang } from "../site-ui";

export default function BlackSeaPage() {
  const [lang, setLang] = useLang();

  return (
    <div>
      <SiteNav activeId="blacksea1" lang={lang} setLang={setLang} />
      <LocationPage id="blacksea1" lang={lang} />
      <SiteFooter lang={lang} />
    </div>
  );
}
