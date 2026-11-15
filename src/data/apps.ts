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
        "GPS location is used only during an active run, to draw the game and calculate distance and pace.",
        "If you create an account, we store your user ID, name/e-mail and run results (points, distance, time) so that high scores and leaderboards work.",
        "Optional analytics and diagnostics run only with your consent, and use an approximate location based on your IP address.",
        "No advertising and no cross-app tracking.",
        "You can ask us to delete your account and data by e-mailing kontor@dmz.no.",
      ],
      no: [
        "GPS-posisjon brukes bare under en aktiv løpetur, for å tegne spillet og beregne distanse og tempo.",
        "Hvis du oppretter en konto, lagrer vi bruker-ID, navn/e-post og løpsresultater (poeng, distanse, tid) slik at rekorder og topplister fungerer.",
        "Valgfri analyse og feildiagnostikk kjøres bare med ditt samtykke, og bruker en omtrentlig posisjon basert på IP-adressen din.",
        "Ingen reklame og ingen sporing på tvers av apper.",
        "Du kan be oss slette kontoen og dataene dine ved å sende e-post til kontor@dmz.no.",
      ],
    },
  },
];
