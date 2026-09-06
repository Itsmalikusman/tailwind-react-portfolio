import { ArrowDown, BriefcaseBusiness, Download, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28"
    >
      <div className="cosmic-grid absolute inset-0 -z-10 opacity-80" />
      <div className="absolute left-1/2 top-1/3 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/18 blur-[120px] sm:h-120 sm:w-120" />

      <div className="container mx-auto max-w-5xl text-center">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary opacity-0 animate-fade-in">
            <BriefcaseBusiness aria-hidden="true" size={17} />
            Product experience at PriceOye.pk
          </div>

          <h1
            id="hero-heading"
            className="text-4xl font-bold leading-tight tracking-tight text-balance opacity-0 animate-fade-in-delay-1 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="text-primary">Muhammad Usman</span>
          </h1>

          <p className="mt-5 text-lg font-semibold text-foreground/90 opacity-0 animate-fade-in-delay-2 sm:text-xl md:text-2xl">
            Frontend Developer | Vue.js, React.js &amp; Next.js
          </p>

          <p className="section-copy mx-auto mt-6 max-w-3xl opacity-0 animate-fade-in-delay-3">
            Frontend Developer with approximately 3 years of experience
            building responsive, scalable, and performance-focused web
            applications. Currently contributing to large-scale e-commerce
            features at PriceOye.pk using Vue.js, Laravel, APIs, AWS, and Docker.
          </p>

          <div className="mt-9 flex w-full flex-col justify-center gap-3 opacity-0 animate-fade-in-delay-4 sm:w-auto sm:flex-row sm:flex-wrap">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="/Muhammad_Usman_Resume.pdf"
              download="Muhammad_Usman_Resume.pdf"
              className="cosmic-button-secondary"
            >
              <Download aria-hidden="true" size={17} />
              Download Resume
            </a>
            <a href="#contact" className="cosmic-button-secondary">
              <Mail aria-hidden="true" size={17} />
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to the About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 rounded-full px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary sm:flex"
      >
        Scroll
        <ArrowDown
          aria-hidden="true"
          className="h-5 w-5 animate-bounce text-primary"
        />
      </a>
    </section>
  );
};
