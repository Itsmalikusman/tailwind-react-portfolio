import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    () => window.location.hash || "#hero"
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const currentSection = [...navItems]
        .reverse()
        .find(({ href }) => {
          const section = document.querySelector(href);
          return section && section.offsetTop <= window.scrollY + 180;
        });

      setActiveSection(currentSection?.href || "#hero");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        aria-label="Primary navigation"
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b border-transparent py-3 transition duration-300",
          isMenuOpen
            ? "border-transparent bg-background"
            : isScrolled
              ? "border-border/70 bg-background shadow-lg shadow-black/10"
              : "bg-background/35 backdrop-blur-md"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            className="flex items-center gap-2.5 rounded-md text-left font-bold text-foreground"
            href="#hero"
            aria-label="Muhammad Usman - back to home"
          >
            <img
              src="/projects/us-logo.png"
              alt=""
              className="h-14 w-20 shrink-0 object-contain"
            />
            <span className="hidden leading-tight sm:block">
              <span className="block text-sm text-foreground">Muhammad Usman</span>
              <span className="block text-xs font-medium text-primary">
                Frontend Developer
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={activeSection === item.href ? "location" : undefined}
                className={cn(
                  "rounded-sm py-2 text-sm font-medium transition-colors hover:text-primary",
                  activeSection === item.href
                    ? "text-primary"
                    : "text-foreground/80"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className={cn(
              "relative z-60 rounded-full border p-2.5 transition-colors lg:hidden",
              isMenuOpen
                ? "border-primary/60 bg-primary/10 text-primary"
                : "border-border bg-card text-foreground hover:border-primary/60 hover:text-primary"
            )}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" size={22} />
            ) : (
              <Menu aria-hidden="true" size={22} />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!isMenuOpen}
        className={cn(
          "fixed inset-0 z-40 isolate overflow-y-auto bg-[#070a16] transition duration-300 lg:hidden",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-4 opacity-0"
        )}
      >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_12%,rgba(139,92,246,0.18),transparent_38%)]"
          />
          <div className="container flex min-h-full flex-col items-center pb-8 pt-28 text-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Navigation
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Explore Muhammad Usman&apos;s portfolio
              </p>
            </div>

            <div className="mt-7 flex w-full max-w-md flex-col gap-2 rounded-3xl border border-border bg-card p-3 text-lg shadow-2xl shadow-black/35">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={activeSection === item.href ? "location" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-2xl border px-5 py-3.5 text-left font-semibold transition-colors",
                    activeSection === item.href
                      ? "border-primary/35 bg-primary/12 text-primary"
                      : "border-transparent text-foreground/85 hover:border-border hover:bg-secondary hover:text-primary"
                  )}
                  onClick={() => {
                    setActiveSection(item.href);
                    setIsMenuOpen(false);
                  }}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  <span>{item.name}</span>
                  <span
                    aria-hidden="true"
                    className="text-xs font-medium tracking-widest text-muted-foreground"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-auto pt-8 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Frontend Developer · Islamabad / Rawalpindi
            </p>
          </div>
      </div>
    </>
  );
};
