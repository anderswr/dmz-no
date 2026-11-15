export type Lang = "en" | "no";

export interface AppService {
  id: string; // used as anchor on /personvern
  name: string;
  platform: string;
  url?: string;
  privacyUrl?: string; // full external policy, if any
  description: Record<Lang, string>;
  account: Record<Lang, string>;
  privacy: Record<Lang, string[]>;
}

export const COMPANY = {
  name: "DMZ Data AS",
  orgNr: "983 904 068",
  address: "Farmannvegen 20B, 3925 Porsgrunn, Norway",
  email: "kontor@dmz.no",
};

export const PRIVACY_LAST_UPDATED = "2026-11-15";

export const apps: AppService[] = [
  {
    id: "toiletlearn-chat",
    name: "ToiletLearn Chat with AI",
    platform: "iOS",
    url: "https://apps.apple.com/no/app/toiletlearn-chat-with-ai/id6748926636",
    description: {
      en: "Nano-learning app with short lessons and a diploma when you finish.",
      no: "Nanolæringsapp med korte leksjoner og diplom når du er ferdig.",
    },
    account: { en: "No account needed.", no: "Ingen konto nødvendig." },
    privacy: {
      en: [
        "No account or login.",
        "No personal data is collected by or sent to DMZ Data AS.",
        "Progress, purchase status and some settings are stored only locally on the device (UserDefaults). They are deleted when the app is deleted.",
        "The name you enter on the diploma is used only to create a PDF on your device. It is not stored and not sent to us.",
        "No analytics, advertising, tracking or third-party SDKs.",
        "Network is used only for: Apple StoreKit (purchases and restore), Apple's iTunes Lookup API (checking for a new version), and external links you choose to open (e.g. chatgpt.com or social media). These services have their own privacy policies.",
        "The in-app purchase is a one-time purchase handled by Apple.",
      ],
      no: [
        "Ingen konto eller innlogging.",
        "Ingen persondata samles inn eller sendes til DMZ Data AS.",
        "Fremdrift, kjøpsstatus og enkelte innstillinger lagres bare lokalt på enheten (UserDefaults). De slettes når appen slettes.",
        "Navnet du skriver inn på diplomet brukes bare til å lage en PDF på enheten. Det lagres ikke og sendes ikke til oss.",
        "Ingen analyse-, reklame-, sporings- eller tredjeparts-SDK-er.",
        "Nettverk brukes bare til: Apple StoreKit (kjøp og gjenoppretting), Apples iTunes Lookup API (sjekk av ny versjon), og eksterne lenker du selv velger å åpne (f.eks. chatgpt.com eller sosiale medier). Disse tjenestene har egne personvernerklæringer.",
        "Kjøp i appen er et engangskjøp som Apple håndterer.",
      ],
    },
  },
  {
    id: "toiletlearn-web-search",
    name: "ToiletLearn Web Search (Google)",
    platform: "iOS",
    url: "https://apps.apple.com/no/app/toiletlearn-web-search/id6748481089",
    description: {
      en: "Short lessons that teach you to search Google smarter, from the basics to advanced research tips. Finish the course and get a PDF certificate.",
      no: "Korte leksjoner som lærer deg å søke smartere i Google, fra det grunnleggende til avanserte tips. Fullfør kurset og få et diplom som PDF.",
    },
    account: { en: "No account needed.", no: "Ingen konto nødvendig." },
    privacy: {
      en: [
        "No account or login.",
        "No personal data is collected by or sent to DMZ Data AS.",
        "Progress, badges, purchase status and settings are stored only locally on the device. They are deleted when the app is deleted.",
        "The name you enter on the certificate is used only to create a PDF on your device. It is not stored and not sent to us.",
        "No analytics, advertising, tracking or third-party SDKs.",
        "Network is used only for: Apple StoreKit (purchases and restore), Apple's iTunes Lookup API (checking for a new version), and external links you choose to open. These services have their own privacy policies.",
        "The in-app purchase is a one-time purchase handled by Apple.",
      ],
      no: [
        "Ingen konto eller innlogging.",
        "Ingen persondata samles inn eller sendes til DMZ Data AS.",
        "Fremdrift, merker, kjøpsstatus og innstillinger lagres bare lokalt på enheten. De slettes når appen slettes.",
        "Navnet du skriver inn på diplomet brukes bare til å lage en PDF på enheten. Det lagres ikke og sendes ikke til oss.",
        "Ingen analyse-, reklame-, sporings- eller tredjeparts-SDK-er.",
        "Nettverk brukes bare til: Apple StoreKit (kjøp og gjenoppretting), Apples iTunes Lookup API (sjekk av ny versjon), og eksterne lenker du selv velger å åpne. Disse tjenestene har egne personvernerklæringer.",
        "Kjøp i appen er et engangskjøp som Apple håndterer.",
      ],
    },
  },
  {
    id: "pac-run",
    name: "PAC-RUN",
    platform: "iOS",
    url: "https://apps.apple.com/no/app/pac-run/id6761645157",
    privacyUrl: "https://pac.run/personvern",
    description: {
      en: "A GPS running game: collect dots along real streets and stay ahead of the ghosts while you run, jog or do intervals.",
      no: "Et GPS-løpespill: samle prikker langs ekte gater og hold deg unna spøkelsene mens du løper, jogger eller tar intervaller.",
    },
    account: { en: "Optional – needed for leaderboards.", no: "Valgfritt – trengs for topplister." },
    privacy: {
      en: [
        "Account: Optional, but required for leaderboards. Sign in with e-mail, Sign in with Apple or Google Sign-In.",
        "Account data: user ID, nickname, e-mail, and optionally full name, phone number, birth year and gender. All of it is linked to your account and kept until you delete the account.",
        "Location: Precise GPS is used only during an active run (also with the screen locked) to draw the map and calculate distance, pace and score. The full GPS track stays on your device. Only the start position of each run is stored on our servers.",
        "Fitness data: runs, distance, duration, pace, score and difficulty are stored for your run history and the leaderboard.",
        "Leaderboard: shows only your nickname, score and an approximate area (about 1 km). Your full name is never shown. Public sharing is off by default for users under 18. Nicknames can be reported or blocked.",
        "Analytics: Google Analytics, only after you accept analytics cookies. Can be turned off at any time.",
        "No advertising, no cross-app tracking, no sale of data. Location and fitness data are never used for marketing or shared with data brokers.",
        "Service providers: Lovable Cloud (Supabase) for database and login, CARTO for map tiles, OpenStreetMap (Overpass and Nominatim) for roads and place names, Google Analytics (with consent), Apple and Google for sign-in. Some providers may process data outside the EU/EEA. Such transfers are based on the EU–US Data Privacy Framework and/or Standard Contractual Clauses.",
        "Your data: export or delete your account and all data in the app (Menu → My account). You can also e-mail kontor@dmz.no.",
        "Age limit: you must be 13 or older to create an account.",
      ],
      no: [
        "Konto: Valgfritt, men nødvendig for topplister. Logg inn med e-post, Sign in with Apple eller Google Sign-In.",
        "Kontodata: bruker-ID, kallenavn, e-post, og eventuelt fullt navn, telefonnummer, fødselsår og kjønn. Alt er knyttet til kontoen din og oppbevares til du sletter kontoen.",
        "Posisjon: Presis GPS brukes bare under en aktiv løpetur (også med låst skjerm) for å tegne kartet og beregne distanse, tempo og poeng. Hele GPS-sporet blir værende på enheten din. Bare startposisjonen for hver løpetur lagres på våre servere.",
        "Treningsdata: løpeturer, distanse, varighet, tempo, poeng og vanskelighetsgrad lagres for løpehistorikken din og topplisten.",
        "Toppliste: viser bare kallenavnet ditt, poengsummen og et omtrentlig område (ca. 1 km). Fullt navn vises aldri. Offentlig deling er av som standard for brukere under 18 år. Kallenavn kan rapporteres eller blokkeres.",
        "Analyse: Google Analytics, bare etter at du har akseptert analysekapsler. Kan slås av når som helst.",
        "Ingen reklame, ingen sporing på tvers av apper, intet salg av data. Posisjons- og treningsdata brukes aldri til markedsføring og deles ikke med datameglere.",
        "Tjenesteleverandører: Lovable Cloud (Supabase) for database og innlogging, CARTO for kartfliser, OpenStreetMap (Overpass og Nominatim) for veier og stedsnavn, Google Analytics (med samtykke), Apple og Google for innlogging. Noen leverandører kan behandle data utenfor EU/EØS. Slike overføringer skjer på grunnlag av EU–US Data Privacy Framework og/eller EUs standardkontraktsklausuler.",
        "Dine data: eksporter eller slett kontoen din og alle data i appen (Meny → Min konto). Du kan også sende e-post til kontor@dmz.no.",
        "Aldersgrense: du må være 13 år eller eldre for å opprette en konto.",
      ],
    },
  },
];
