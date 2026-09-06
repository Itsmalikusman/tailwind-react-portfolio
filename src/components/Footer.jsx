import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border/70 bg-background/80 py-6">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Muhammad Usman. All rights reserved.
        </p>
        <a
          href="#hero"
          aria-label="Back to the top of the page"
          className="rounded-full border border-primary/25 bg-primary/10 p-2.5 text-primary transition-colors hover:border-primary/60 hover:bg-primary/20"
        >
          <ArrowUp aria-hidden="true" size={19} />
        </a>
      </div>
    </footer>
  );
};
