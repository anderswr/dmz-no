import { ReactNode, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffect from "@/components/BackgroundEffect";
import type { Lang } from "@/data/apps";

interface Props {
  lang: Lang;
  setLang: (l: Lang) => void;
  title: string;
  description: string;
  canonical: string;
  children: ReactNode;
}

const setMeta = (sel: string, attr: string, val: string) => {
  const el = document.querySelector(sel);
  const old = el?.getAttribute(attr) ?? null;
  el?.setAttribute(attr, val);
  return () => { if (el && old !== null) el.setAttribute(attr, old); };
};

const LegalShell = ({ lang, setLang, title, description, canonical, children }: Props) => {
  useEffect(() => {
    const prev = document.title;
    document.title = title;
    const r = [
      setMeta('meta[name="description"]', "content", description),
      setMeta('link[rel="canonical"]', "href", canonical),
      setMeta('meta[property="og:url"]', "content", canonical),
      setMeta('meta[property="og:title"]', "content", title),
      setMeta('meta[property="og:description"]', "content", description),
    ];
    window.scrollTo(0, 0);
    const hash = window.location.hash;
    if (hash) setTimeout(() => document.querySelector(hash)?.scrollIntoView(), 50);
    return () => { document.title = prev; r.forEach((f) => f()); };
  }, [title, description, canonical]);

  return (
    <div className="relative min-h-screen grain">
      <BackgroundEffect />
      <Navbar />
      <main className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 pt-32 pb-24">
        <div className="flex justify-end gap-1 mb-8 text-xs tracking-widest uppercase" role="group" aria-label="Language">
          {(["en", "no"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              className={`px-3 py-1.5 rounded-full border border-border transition-colors ${lang === l ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
            >
              {l === "en" ? "English" : "Norsk"}
            </button>
          ))}
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LegalShell;
