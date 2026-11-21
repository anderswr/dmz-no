import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "familiehytte.no",
    description: "Gratis app for dere som deler hytte. Kalenderen viser hvem som kommer når, del en handlelisten, og før et enkelt utleggsregnskap. Ingen krangling eller styr.",
    url: "https://familiehytte.no",
  },
  {
    title: "hjelpetjenesten.no",
    description: "Digital fremtidsfullmakt eller vedvarende fullmakt for 399 kr. Svar på noen spørsmål, få en ferdig PDF klar til signering, og unngå at Statsforvalteren bestemmer hvem som skal selge campingvogna di.",
    url: "https://hjelpetjenesten.no",
  },
  {
    title: "UTFORDRE.NO",
    description: "Utfordre deltagerne med flervalg, skalaspørsmål og ordskyer som oppdateres live, eller helt vanlige spørreundersøkelser. Sammenlign Utfordre med Questback, Mentimeter eller Kahoot. Utfordre kjapt venner og kjente, uten registrering.",
    url: "https://utfordre.no",
  },
  {
    title: "PAC-RUN",
    description: "Gjør løpeturen til et spill. Spis prikker langs veiene og bli jaget av spøkelser – enten i klassisk modus på et definert kart, eller fri intervalltrening der du rømmer ved å øke tempoet.",
    url: "https://pac.run",
  },
  {
    title: "Sleep Test",
    description: "En modulær, flerspråklig nettløsning som hjelper folk som sliter med søvn. Brukeren svarer på spørsmål og får en personlig rapport med forslag til tiltak.",
    url: "https://sleep-test.org",
  },
  {
    title: "Brain Test",
    description: "Kognitiv evnetest og IQ-estimat — utforsk dine kognitive evner gjennom spørsmål fordelt på 5 kategorier. Konkurrer med venner på 13 språk.",
    url: "https://brain-test.org",
  },
  {
    title: "Mindset Test",
    description: "Fastlåst eller er talent trenbart, svar på noen spørsmål og få en forskningsbasert tilbakemelding.",
    url: "https://mindset-test.org",
  },
  {
    title: "Vita Test",
    description: "En gammel ide om matching og problemløsning i livet, nå med litt AI-inspirert fokus",
    url: "https://vita-test.org",
  },
  {
    title: "CAx6.6",
    description: "Homey-app for styring av Russound CA-serie multirom-forsterkere via RS-232 over TCP.",
    url: "https://homey.app/no-no/app/com.dmz.russound/CAx6.6/test/",
  },
  {
    title: "DadJokes Plus for Homey",
    description: "Homey-app for henting av engelske dad-jokes, Chuck Norris (RIP) fakta, eller bare en dårlig vits. Lag en flow som henter ny joke og chromecaster en dad-joke hver gang du kommer hjem fra jobb.",
    url: "https://homey.app/no-no/app/com.dmz.dadjokesplus/DadJokes-Plus/",
  },
];

const Projects = () => {
  return (
    <section id="utvikling" className="py-32 relative z-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">Utvikling</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 max-w-lg">
          Noe av det vi har laget
        </h2>
        <p className="text-muted-foreground mb-16 max-w-md">
          Fra smarthjem-integrasjoner til helsefokuserte nettapper.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <h3 className="font-heading text-xl font-semibold mb-2 flex items-center gap-2 group-hover:underline decoration-1 underline-offset-4">
                {p.title}
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
