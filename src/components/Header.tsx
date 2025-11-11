import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  let currentPath = "/";
  try {
    const location = useLocation();
    currentPath = location.pathname;
  } catch (e) {
    // Fallback if useLocation fails
    currentPath = window.location.pathname;
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Domov", onClick: () => scrollToSection("hero") },
    { label: "O Aplikácii", onClick: () => scrollToSection("o-aplikacii") },
    { label: "Programy", onClick: () => scrollToSection("programy") },
    { label: "Blog", to: "/blog" },
    { label: "O Nás", to: "/o-nas" },
    { label: "Kontakt", to: "/kontakt" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-2 md:px-4 pt-4">
        <div
          className={cn(
            "glass-card rounded-full shadow-lg transition-all duration-300 mx-auto max-w-7xl",
            "bg-white/80 backdrop-blur-md border border-border/20"
          )}
        >
          <div className="flex items-center justify-between h-16 px-6 lg:px-8">
            {/* Logo */}
            <Link to="/" className="text-2xl font-light tracking-tight text-foreground">
              Neo<span className="gradient-text font-medium">Me</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.to ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    className={cn(
                      "text-sm font-light text-foreground/70 hover:text-foreground transition-colors",
                      currentPath === link.to && "text-foreground font-normal"
                    )}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={link.onClick}
                    className="text-sm font-light text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                )
              )}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant="ghost"
                className="text-sm font-light"
                onClick={() => window.location.href = "#"}
              >
                Prihlásenie
              </Button>
              <Button
                className="neuro-button text-sm font-normal bg-primary text-primary-foreground"
                onClick={() => window.location.href = "#"}
              >
                STIAHNUŤ APP
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={28} weight="light" />
              ) : (
                <List size={28} weight="light" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-full bg-background z-40 lg:hidden transition-transform duration-300",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-8">
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className={cn(
                  "text-2xl font-light text-foreground/70 hover:text-foreground transition-colors",
                  currentPath === link.to && "text-foreground font-normal"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={link.onClick}
                className="text-2xl font-light text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            )
          )}
          <div className="flex flex-col gap-4 mt-8 w-full max-w-xs">
            <Button
              variant="outline"
              className="w-full text-base"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.location.href = "#";
              }}
            >
              Prihlásenie
            </Button>
            <Button
              className="w-full neuro-button text-base bg-primary text-primary-foreground"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.location.href = "#";
              }}
            >
              STIAHNUŤ APP
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};