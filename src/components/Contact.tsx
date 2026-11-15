import { useState } from "react";
import { MapPin, ExternalLink, ChevronDown } from "lucide-react";

const Contact = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <section id="kontakt" className="py-32 relative z-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          {/* Left - Om oss */}
          <div className="md:w-1/2">
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Om oss</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Hvem er vi</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Vi er et lite rådgivende konsulentselskap med kontor i Porsgrunn. Erfaring og kjennskap til produkter, løsninger, konvensjonelle og utradisjonelle gjør oss i stand til å gi nøytrale råd og support til de fleste vanlige typer prosjekter. Vi har bestemt oss for å vente med å gå på BØRS, dog fremtiden er vanskelig å spå. <br />
              Du når oss på <a href="mailto:kontor@dmz.no" className="underline underline-offset-4 hover:text-foreground">kontor@dmz.no</a>
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-foreground font-medium w-20">Firma</span>
                DMZ DATA AS
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-foreground font-medium w-20">Stiftet</span>
                2. november 2001
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-foreground font-medium w-20">Org.nr</span>
                983 904 068 MVA
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <span className="text-foreground font-medium w-20 shrink-0">Adresse</span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 shrink-0" /> Farmannvegen 20B, 3925 Porsgrunn
                </span>
              </div>
              <a
                href="https://virksomhet.brreg.no/nb/oppslag/enheter/983904068"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-foreground hover:underline underline-offset-4 mt-4"
              >
                Se i Brønnøysundregistrene <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right - Personvern */}
          <div className="md:w-1/2">
            <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Juridisk</p>
            <button
              onClick={() => setShowPrivacy(!showPrivacy)}
              className="font-heading text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3 hover:opacity-80 transition-opacity text-left"
            >
              Personvern
              <ChevronDown className={`h-6 w-6 transition-transform ${showPrivacy ? "rotate-180" : ""}`} />
            </button>

            {showPrivacy && (
              <div className="text-sm text-muted-foreground leading-relaxed space-y-4 animate-fade-up">
                <p>Personvernerklæringen gjelder alle våre apper og tjenester, med egne avsnitt per app.</p>
                <div className="flex flex-col gap-2">
                  <a href="/personvern" className="text-foreground underline underline-offset-4">Les personvernerklæringen →</a>
                  <a href="/kontakt" className="text-foreground underline underline-offset-4">Support og kontakt for appene →</a>
                </div>
              </div>
            )}

            {!showPrivacy && (
              <p className="text-sm text-muted-foreground">Klikk for å lese vår personvernerklæring.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
