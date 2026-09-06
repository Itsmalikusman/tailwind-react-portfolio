import {
  ArrowUpRight,
  GraduationCap,
  MonitorCheck,
  ShoppingBag,
} from "lucide-react";

const projects = [
  {
    title: "PriceOye.pk E-commerce Platform",
    type: "Professional Product Experience",
    description:
      "Contributed to customer-facing modules for a major Pakistani e-commerce platform, including Laravel Blade-to-Vue migration, reusable Vue.js components, API integration, responsive development, performance optimization, and production maintenance.",
    technologies: [
      "Vue.js",
      "Laravel",
      "Blade",
      "MySQL",
      "AWS",
      "Docker",
      "GitLab",
      "Webpack Mix",
    ],
    visitUrl: "https://priceoye.pk/",
    visual: "priceoye",
  },
  {
    title: "Tabeer Technology",
    description:
      "Developed responsive interfaces, routing, dashboards, API integrations, and payment flows for a scholarships and mentorship platform.",
    technologies: ["React.js", "Node.js", "MongoDB", "Stripe", "BitPay"],
    visual: "tabeer",
  },
  {
    title: "SignNTrack",
    description:
      "Built and maintained digital-signature, real-time chat, admin reporting, PDF-signing, calendar, support, and profile modules.",
    technologies: [
      "Laravel",
      "Blade",
      "PHP",
      "MySQL",
      "Pusher",
      "Chart.js",
    ],
    image: "/projects/proj-3.jpg",
    imageAlt:
      "SignNTrack administration dashboard with user, subscription, and reporting panels",
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-shell border-y border-border/60 bg-secondary/30"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Selected work</span>
          <h2 id="projects-heading" className="section-heading">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="section-copy mt-5">
            Product and client work spanning e-commerce, education technology,
            real-time collaboration, and complex frontend workflows.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 md:auto-rows-fr md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="gradient-border card-hover group flex h-full flex-col overflow-hidden text-left"
            >
              <div className="aspect-[16/9] overflow-hidden border-b border-border bg-background">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                ) : (
                  <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(167,139,250,0.3),transparent_45%),linear-gradient(135deg,rgba(21,25,48,0.98),rgba(9,11,24,0.98))]">
                    <div className="cosmic-grid absolute inset-0 opacity-70" />
                    <div className="relative flex flex-col items-center gap-3 px-6 text-center">
                      <span className="rounded-2xl border border-primary/30 bg-primary/12 p-4 text-primary shadow-[0_0_35px_-12px_rgba(167,139,250,0.9)]">
                        {project.visual === "priceoye" ? (
                          <ShoppingBag aria-hidden="true" size={34} />
                        ) : (
                          <GraduationCap aria-hidden="true" size={34} />
                        )}
                      </span>
                      <p className="text-lg font-bold text-foreground">
                        {project.visual === "priceoye"
                          ? "PriceOye.pk"
                          : "Scholarships & Mentorship"}
                      </p>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        {project.visual === "priceoye"
                          ? "E-commerce product"
                          : "Tabeer Technology"}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                {project.type && (
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {project.type}
                  </p>
                )}
                <h3 className="text-xl font-bold sm:text-2xl">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  {project.description}
                </p>

                <ul
                  className="mt-5 flex flex-wrap gap-2"
                  aria-label={`Technologies used for ${project.title}`}
                >
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-border bg-secondary/80 px-3 py-1 text-xs font-medium text-foreground/80"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                {project.visitUrl && (
                  <div className="mt-auto pt-7">
                    <a
                      href={project.visitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cosmic-button-secondary"
                      aria-label={`Visit the ${project.title} website`}
                    >
                      Visit Website
                      <ArrowUpRight aria-hidden="true" size={17} />
                    </a>
                  </div>
                )}

                {!project.visitUrl && (
                  <div className="mt-auto flex items-center gap-2 pt-7 text-sm font-medium text-muted-foreground">
                    <MonitorCheck aria-hidden="true" size={17} className="text-primary" />
                    Professional project
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
