import { useEffect, useState } from "react";
import type { Lang } from "@/data/apps";

export function useLang(): [Lang, (l: Lang) => void] {
  const initial = (): Lang => {
    const q = new URLSearchParams(window.location.search).get("lang");
    if (q === "no" || q === "en") return q;
    return (localStorage.getItem("lang") as Lang) === "no" ? "no" : "en";
  };
  const [lang, setLang] = useState<Lang>(initial);
  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang === "no" ? "nb" : "en";
    return () => { document.documentElement.lang = "nb"; };
  }, [lang]);
  return [lang, setLang];
}
