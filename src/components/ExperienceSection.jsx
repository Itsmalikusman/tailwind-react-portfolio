import { Building2, CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    company: "PriceOye.pk",
    role: "Frontend Developer",
    period: "November 2025 – Present",
    location: "Islamabad, Pakistan",
    companyType: "Product-based e-commerce company",
    responsibilities: [
      "Develop and maintain large-scale customer-facing e-commerce features using Vue.js, Laravel, Blade, SQL, AWS, and Docker.",
      "Migrate Laravel Blade modules to reusable Vue.js components, improving maintainability, scalability, and frontend architecture.",
      "Integrate REST APIs and collaborate across frontend and backend workflows.",
      "Diagnose production issues, fix defects, refactor existing code, and maintain release-ready features.",
      "Optimize Google PageSpeed, Core Web Vitals, mobile responsiveness, rendering, and overall user experience.",
      "Use GitLab, SourceTree, Docker, and Webpack Mix in the development workflow.",
    ],
  },
  {
    company: "Alright Tech Private Limited",
    role: "Frontend Developer | Team Lead",
    period: "January 2024 – October 2025",
    location: "Rawalpindi, Pakistan",
    companyType: "Service-based software company",
    responsibilities: [
      "Built responsive web applications using React.js, Next.js, JavaScript, Laravel, Tailwind CSS, Bootstrap, and MySQL.",
      "Converted client requirements and design files into maintainable, production-ready interfaces.",
      "Integrated REST APIs, payment gateways, real-time services, and third-party tools, including Stripe and Pusher.",
      "Led frontend delivery through task planning, code reviews, debugging, maintenance, and deadline management.",
      "Collaborated directly with clients, designers, and backend developers.",
      "Guided junior developers and interns and supported technical problem-solving.",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-shell border-y border-border/60 bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Career journey</span>
          <h2 id="experience-heading" className="section-heading">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="section-copy mt-5">
            Experience delivering production-ready frontend work across a
            product-led e-commerce platform and client-focused software teams.
          </p>
        </div>

        <div className="relative mt-12 space-y-7 before:absolute before:bottom-6 before:left-[1.15rem] before:top-6 before:w-px before:bg-linear-to-b before:from-primary before:via-primary/50 before:to-transparent md:before:left-1/2">
          {experiences.map((experience, index) => (
            <article
              key={experience.company}
              className={`relative pl-14 md:w-[calc(50%-2.25rem)] md:pl-0 ${
                index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute left-2 top-7 z-10 h-6 w-6 rounded-full border-4 border-background bg-primary shadow-[0_0_20px_rgba(167,139,250,0.7)] md:left-auto ${
                  index % 2 === 0 ? "md:-right-[3rem]" : "md:-left-[3rem]"
                }`}
              />
              <div className="gradient-border card-hover p-6 text-left sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                      {experience.companyType}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold">
                      {experience.company}
                    </h3>
                    <p className="mt-1 font-semibold text-foreground/85">
                      {experience.role}
                    </p>
                  </div>
                  <div className="shrink-0 space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <CalendarDays
                        aria-hidden="true"
                        size={16}
                        className="text-primary"
                      />
                      <span>{experience.period}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin
                        aria-hidden="true"
                        size={16}
                        className="text-primary"
                      />
                      <span>{experience.location}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Building2
                    aria-hidden="true"
                    size={19}
                    className="mt-1 shrink-0 text-primary"
                  />
                  <ul className="space-y-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                    {experience.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-primary"
                      >
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
