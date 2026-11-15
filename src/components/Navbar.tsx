import { Sun, Moon, Menu, X, Monitor, Apple } from "lucide-react";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Hjem", href: "/#hjem" },
  { label: "Utvikling", href: "/#utvikling" },
  { label: "Kontakt", href: "/kontakt" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-normal">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-5">
        <a href="/#hjem" className="font-heading text-sm font-bold tracking-[0.2em] uppercase text-foreground">
          DMZ DATA
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-0.5">
            <a
              href="https://download.teamviewer.com/download/TeamViewerQS.exe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-muted-foreground hover:text-foreground transition-colors"
              title="Fjernhjelp Windows"
              aria-label="Last ned fjernhjelp for Windows"
            >
              <Monitor className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://download.teamviewer.com/download/TeamViewerQS.dmg"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 text-muted-foreground hover:text-foreground transition-colors"
              title="Fjernhjelp Mac"
              aria-label="Last ned fjernhjelp for Mac"
            >
              <Apple className="h-3.5 w-3.5" />
            </a>
          </div>
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Bytt tema"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleTheme} className="p-2 text-muted-foreground" aria-label="Bytt tema">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button onClick={() => setOpen(!open)} className="p-2 text-foreground" aria-label={open ? "Lukk meny" : "Åpne meny"} aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur border-b border-border px-6 pb-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm tracking-wide uppercase text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
