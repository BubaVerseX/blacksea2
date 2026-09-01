"use client";

import LocationPage from "../LocationPage";
import SiteFooter from "../SiteFooter";
import SiteNav from "../SiteNav";
import { useLang } from "../site-ui";

export default function BlackSeaIcePage() {
  const [lang, setLang] = useLang();

  return (
    <div>
      <SiteNav activeId="blackseaice" lang={lang} setLang={setLang} />
      <LocationPage id="blackseaice" lang={lang} />
      <SiteFooter lang={lang} />
    </div>
  );
}
