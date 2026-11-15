import { Link } from "react-router-dom";
import LegalShell from "@/components/LegalShell";
import { apps, COMPANY, PRIVACY_LAST_UPDATED } from "@/data/apps";
import { useLang } from "@/hooks/use-lang";

const T = {
  en: {
    title: "Privacy Policy – DMZ Data AS",
    desc: "Privacy policy for all apps and services from DMZ Data AS.",
    updated: "Last updated",
    intro: "This privacy policy applies to all apps and services from DMZ Data AS. General terms are described first, followed by details for each app.",
    sections: [
      ["Data controller", `${COMPANY.name} (org. no. ${COMPANY.orgNr}), ${COMPANY.address}, is the data controller. Contact: ${COMPANY.email}.`],
      ["What data we may process, and why", "Most of our apps do not collect personal data at all. Where we do process data, it is limited to: (a) information you send us when contacting support (name, e-mail, message), processed to answer your request – legal basis: legitimate interest (GDPR art. 6(1)(f)); and (b) data needed to provide a service you have chosen to use – legal basis: contract (art. 6(1)(b)). The details for each app are listed below."],
      ["We do not sell personal data", "We never sell, rent or share personal data with third parties for marketing purposes."],
      ["In-app purchases", "In-app purchases are processed by Apple (App Store) or Google (Google Play). We do not receive or store any payment information."],
      ["Your rights", "Under the GDPR you have the right to access, rectification, erasure, restriction, objection and data portability. You also have the right to lodge a complaint with the Norwegian Data Protection Authority (Datatilsynet, datatilsynet.no)."],
      ["Children", "Our services are not designed to collect data from children."],
      ["Contact about privacy", `Send an e-mail to ${COMPANY.email}.`],
      ["Changes", "We may update this policy. The date at the top shows when it was last changed."],
    ],
    perApp: "Details per app",
  },
  no: {
    title: "Personvernerklæring – DMZ Data AS",
    desc: "Personvernerklæring for alle apper og tjenester fra DMZ Data AS.",
    updated: "Sist oppdatert",
    intro: "Denne personvernerklæringen gjelder alle apper og tjenester fra DMZ Data AS. Først beskrives de generelle vilkårene, deretter detaljer for hver app.",
    sections: [
      ["Behandlingsansvarlig", `${COMPANY.name} (org.nr. ${COMPANY.orgNr}), ${COMPANY.address}, er behandlingsansvarlig. Kontakt: ${COMPANY.email}.`],
      ["Hvilke data vi kan behandle, og hvorfor", "De fleste av appene våre samler ikke inn personopplysninger i det hele tatt. Der vi behandler data, er det begrenset til: (a) informasjon du sender oss når du kontakter support (navn, e-post, melding), for å besvare henvendelsen – rettslig grunnlag: berettiget interesse (GDPR art. 6 nr. 1 f); og (b) data som trengs for å levere en tjeneste du har valgt å bruke – rettslig grunnlag: avtale (art. 6 nr. 1 b). Detaljer for hver app står nedenfor."],
      ["Vi selger ikke personopplysninger", "Vi selger, leier eller deler aldri personopplysninger med tredjeparter for markedsføring."],
      ["Kjøp i appen", "Kjøp i appen gjennomføres av Apple (App Store) eller Google (Google Play). Vi mottar eller lagrer ingen betalingsinformasjon."],
      ["Dine rettigheter", "Etter GDPR har du rett til innsyn, retting, sletting, begrensning, protest og dataportabilitet. Du har også rett til å klage til Datatilsynet (datatilsynet.no)."],
      ["Barn", "Tjenestene våre er ikke laget for å samle inn data fra barn."],
      ["Kontakt om personvern", `Send e-post til ${COMPANY.email}.`],
      ["Endringer", "Vi kan oppdatere denne erklæringen. Datoen øverst viser når den sist ble endret."],
    ],
    perApp: "Detaljer per app",
  },
};

const Personvern = () => {
  const [lang, setLang] = useLang();
  const t = T[lang];
  return (
    <LegalShell lang={lang} setLang={setLang} title={t.title} description={t.desc} canonical="https://dmz.no/personvern">
      <h1 className="font-heading text-3xl md:text-5xl font-bold mb-3">{t.title}</h1>
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">{t.updated}: {PRIVACY_LAST_UPDATED}</p>
      <p className="text-muted-foreground leading-relaxed mb-12">{t.intro}</p>

      <div className="space-y-8 mb-16">
        {t.sections.map(([h, p]) => (
          <section key={h}>
            <h2 className="font-heading text-xl font-bold mb-2">{h}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{p}</p>
          </section>
        ))}
      </div>

      <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">{t.perApp}</h2>
      <div className="space-y-6 mb-14">
        {apps.map((a) => (
          <section key={a.id} id={a.id} className="scroll-mt-28 border border-border rounded-lg p-6 bg-background/50">
            <h3 className="font-heading text-xl font-bold">{a.name} <span className="text-xs font-body text-muted-foreground">· {a.platform}</span></h3>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-sm text-muted-foreground leading-relaxed">
              {a.privacy[lang].map((p, i) => <li key={i}>{p}</li>)}
            </ul>
            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              {a.url && <a href={a.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">App Store</a>}
              {a.privacyUrl && <a href={a.privacyUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{lang === "en" ? "Full privacy policy" : "Fullstendig personvernerklæring"}</a>}
            </div>
          </section>
        ))}
      </div>

      <Link to="/kontakt" className="underline underline-offset-4 text-sm">← {lang === "en" ? "Support & Contact" : "Support og kontakt"}</Link>
    </LegalShell>
  );
};

export default Personvern;
