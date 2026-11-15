import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import LegalShell from "@/components/LegalShell";
import { apps, COMPANY } from "@/data/apps";
import { useLang } from "@/hooks/use-lang";

const T = {
  en: {
    title: "Support & Contact – DMZ Data AS",
    intro: "This page covers support for all apps and services from DMZ Data AS, including our iOS apps and web services.",
    info: "Contact information", company: "Company", org: "Org. no.", address: "Address", email: "Support e-mail",
    response: "Response time", responseVal: "We aim to reply within 2 business days.",
    faq: "Frequently asked questions",
    q: [
      ["How do I restore my in-app purchase?", "Open the app, tap a locked section or the purchase screen, and choose \"Restore purchases\". Make sure you are signed in with the same Apple ID that was used for the purchase."],
      ["How do I request a refund?", "Refunds for App Store purchases are handled by Apple. Go to reportaproblem.apple.com and sign in with your Apple ID."],
      ["Do I need an account?", "It varies from app to app. See the list of apps below."],
      ["Where is my data stored?", "See our privacy policy for details for each app."],
    ],
    apps: "Our apps & services", account: "Account", privacyLink: "Privacy policy",
    footer: "Read our privacy policy",
    desc: "Support and contact for all apps and services from DMZ Data AS.",
  },
  no: {
    title: "Support og kontakt – DMZ Data AS",
    intro: "Denne siden gjelder support for alle apper og tjenester fra DMZ Data AS, inkludert iOS-apper og nettjenester.",
    info: "Kontaktinformasjon", company: "Firma", org: "Org.nr.", address: "Adresse", email: "E-post for support",
    response: "Svartid", responseVal: "Vi svarer normalt innen 2 virkedager.",
    faq: "Ofte stilte spørsmål",
    q: [
      ["Hvordan gjenoppretter jeg et kjøp i appen?", "Åpne appen, trykk på en låst del eller kjøpsskjermen, og velg «Restore purchases» / «Gjenopprett kjøp». Bruk samme Apple-ID som ved kjøpet."],
      ["Hvordan ber jeg om refusjon?", "Refusjon for kjøp i App Store håndteres av Apple. Gå til reportaproblem.apple.com og logg inn med Apple-ID-en din."],
      ["Trenger jeg en konto?", "Det varierer fra app til app. Se app-listen nedenfor."],
      ["Hvor lagres dataene mine?", "Se personvernerklæringen vår for detaljer om hver app."],
    ],
    apps: "Våre apper og tjenester", account: "Konto", privacyLink: "Personvern",
    footer: "Les personvernerklæringen",
    desc: "Support og kontakt for alle apper og tjenester fra DMZ Data AS.",
  },
};


const Kontakt = () => {
  const [lang, setLang] = useLang();
  const t = T[lang];
  const [open, setOpen] = useState<number | null>(null);

  const Row = ({ k, v }: { k: string; v: React.ReactNode }) => (
    <div className="flex flex-col sm:flex-row sm:gap-4 py-2 border-b border-border/60">
      <span className="text-foreground font-medium sm:w-40 shrink-0">{k}</span>
      <span className="text-muted-foreground">{v}</span>
    </div>
  );

  return (
    <LegalShell lang={lang} setLang={setLang} title={t.title} description={t.desc} canonical="https://dmz.no/kontakt">
      <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6">{t.title}</h1>
      <p className="text-muted-foreground leading-relaxed mb-14">{t.intro}</p>

      <section className="mb-14">
        <h2 className="font-heading text-2xl font-bold mb-4">{t.info}</h2>
        <div className="text-sm">
          <Row k={t.company} v={COMPANY.name} />
          <Row k={t.org} v={COMPANY.orgNr} />
          <Row k={t.address} v={COMPANY.address} />
          <Row k={t.email} v={<a href={`mailto:${COMPANY.email}`} className="underline underline-offset-4 hover:text-foreground">{COMPANY.email}</a>} />
          <Row k={t.response} v={t.responseVal} />
        </div>
      </section>

      <section className="mb-14">
        <h2 className="font-heading text-2xl font-bold mb-4">{t.faq}</h2>
        <div className="divide-y divide-border border-y border-border">
          {t.q.map(([q, a], i) => (
            <div key={i}>
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="w-full flex justify-between items-center gap-4 py-4 text-left font-medium">
                {q}<ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <p className="pb-4 text-sm text-muted-foreground leading-relaxed">
                  {a}{" "}
                  {i === 1 && <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">reportaproblem.apple.com</a>}
                  {i === 3 && <Link to="/personvern" className="underline underline-offset-4">/personvern</Link>}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="font-heading text-2xl font-bold mb-4">{t.apps}</h2>
        <ul className="space-y-4">
          {apps.map((a) => (
            <li key={a.id} className="border border-border rounded-lg p-5 bg-background/50">
              <p className="font-heading font-bold">{a.name} <span className="text-xs font-body text-muted-foreground">· {a.platform}</span></p>
              <p className="text-sm text-muted-foreground mt-1">{a.description[lang]}</p>
              <p className="text-sm mt-2"><span className="font-medium">{t.account}:</span> <span className="text-muted-foreground">{a.account[lang]}</span></p>
              <div className="flex gap-4 mt-3 text-sm">
                {a.url && <a href={a.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">App Store</a>}
                <Link to={`/personvern#${a.id}`} className="underline underline-offset-4">{t.privacyLink}</Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Link to="/personvern" className="underline underline-offset-4 text-sm">{t.footer} →</Link>
    </LegalShell>
  );
};

export default Kontakt;
