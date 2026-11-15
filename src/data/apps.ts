export type Lang = "en" | "no";

export interface AppService {
  id: string; // used as anchor on /personvern
  name: string;
  platform: string;
  url?: string;
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

const FILL = { en: ["[fill in]"], no: ["[fyll inn]"] };

export const apps: AppService[] = [
  {
    id: "toiletlearn-chat",
    name: "ToiletLearn Chat with AI",
    platform: "iOS",
    url: "[fill in App Store link]",
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
    url: "[fill in App Store link]",
    description: { en: "[fill in]", no: "[fyll inn]" },
    account: { en: "[fill in]", no: "[fyll inn]" },
    privacy: FILL,
  },
];
