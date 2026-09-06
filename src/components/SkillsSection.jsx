import {
  Code2,
  Database,
  Gauge,
  PlugZap,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend development",
    icon: Code2,
    skills: [
      "HTML5",
      "CSS3",
      "SCSS",
      "JavaScript ES6+",
      "Vue.js",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Web Design",
      "Laravel Blade",
    ],
  },
  {
    title: "Backend and integrations",
    icon: PlugZap,
    skills: [
      "Laravel",
      "PHP working knowledge",
      "Node.js",
      "REST APIs",
      "Third-party APIs",
      "Payment gateways",
      "Pusher",
      "Real-time integrations",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "SQL"],
  },
  {
    title: "Performance and maintenance",
    icon: Gauge,
    skills: [
      "Core Web Vitals",
      "Google PageSpeed Insights",
      "Frontend Performance Optimization",
      "Mobile Responsiveness",
      "Debugging",
      "Refactoring",
      "Code Optimization",
    ],
  },
  {
    title: "Development and deployment tools",
    icon: Wrench,
    skills: [
      "AWS",
      "Docker",
      "Vercel",
      "Netlify",
      "Git",
      "GitHub",
      "GitLab",
      "SourceTree",
      "Postman",
      "Webpack Mix",
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="section-shell">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Technical toolkit</span>
          <h2 id="skills-heading" className="section-heading">
            Skills Built for <span className="text-primary">Production</span>
          </h2>
          <p className="section-copy mt-5">
            A practical frontend-focused toolkit for building, integrating,
            optimizing, and maintaining modern web products.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2">
          {skillGroups.map(({ title, icon: Icon, skills }, index) => (
            <article
              key={title}
              className={`gradient-border card-hover h-full p-6 text-left sm:p-7 ${
                index === skillGroups.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex rounded-xl border border-primary/20 bg-primary/10 p-2.5 text-primary">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <h3 className="text-lg font-semibold sm:text-xl">{title}</h3>
              </div>

              <ul className="flex flex-wrap gap-2.5" aria-label={`${title} skills`}>
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-secondary/70 px-3.5 py-1.5 text-sm font-medium text-foreground/85"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
