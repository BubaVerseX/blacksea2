"use client";

import LocationPage from "../LocationPage";
import SiteFooter from "../SiteFooter";
import SiteNav from "../SiteNav";
import { useLang } from "../site-ui";

export default function ZestafoniPage() {
  const [lang, setLang] = useLang();

  return (
    <div>
      <SiteNav activeId="zestafoni" lang={lang} setLang={setLang} />
      <LocationPage id="zestafoni" lang={lang} />
      <SiteFooter lang={lang} />
    </div>
  );
}
