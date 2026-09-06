import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const contactDetails = [
  {
    label: "Email",
    value: "itsmalikusman49@gmail.com",
    href: "mailto:itsmalikusman49@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+92 330 9892624",
    href: "tel:+923309892624",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Islamabad/Rawalpindi, Pakistan",
    icon: MapPin,
  },
];

const contactActions = [
  {
    label: "Email Me",
    href: "mailto:itsmalikusman49@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/usman-fullstack/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/Itsmalikusman",
    icon: Github,
    external: true,
  },
  {
    label: "Download Resume",
    href: "/Muhammad_Usman_Resume.pdf",
    icon: Download,
    download: "Muhammad_Usman_Resume.pdf",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-shell">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Let&apos;s connect</span>
          <h2 id="contact-heading" className="section-heading">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="section-copy mt-5">
            Have a frontend opportunity, product challenge, or collaboration in
            mind? Reach out through any of the verified channels below.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="gradient-border p-6 text-left sm:p-8">
            <h3 className="text-2xl font-bold">Contact information</h3>
            <address className="mt-7 space-y-6 not-italic">
              {contactDetails.map(({ label, value, href, icon: Icon }) => (
                <div key={label} className="flex min-w-0 items-start gap-4">
                  <span className="shrink-0 rounded-xl border border-primary/20 bg-primary/10 p-3 text-primary">
                    <Icon aria-hidden="true" size={21} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-muted-foreground">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-0.5 block break-words font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-0.5 font-semibold text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </address>
          </div>

          <div className="gradient-border relative overflow-hidden p-6 text-left sm:p-8 lg:p-10">
            <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Open to opportunities
              </p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                Build something thoughtful, fast, and reliable.
              </h3>
              <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
                I&apos;m available to discuss frontend roles, product
                development, performance optimization, and collaborative
                engineering work.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {contactActions.map(
                  ({ label, href, icon: Icon, external, download }) => (
                    <a
                      key={label}
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      download={download}
                      className="cosmic-button-secondary justify-between"
                    >
                      <span className="flex items-center gap-2">
                        <Icon aria-hidden="true" size={18} />
                        {label}
                      </span>
                      {external && <ArrowUpRight aria-hidden="true" size={17} />}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
