import { Gauge, PanelsTopLeft, UsersRound } from "lucide-react";

const strengths = [
  {
    title: "Product Development",
    description:
      "Building and maintaining scalable customer-facing e-commerce features.",
    icon: PanelsTopLeft,
  },
  {
    title: "Performance Optimization",
    description:
      "Improving Core Web Vitals, Google PageSpeed, responsiveness, and rendering performance.",
    icon: Gauge,
  },
  {
    title: "Frontend Leadership",
    description:
      "Leading frontend delivery, reviewing code, debugging issues, and supporting team members.",
    icon: UsersRound,
  },
];

export const AboutSection = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-shell">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <span className="section-kicker">About me</span>
          <h2 id="about-heading" className="section-heading">
            Frontend Developer with Product and Service-Based Experience
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-5 text-left">
          <p className="section-copy">
            I&apos;m a Frontend Developer with approximately 3 years of
            professional experience building responsive, maintainable, and
            high-performance web applications. I have worked in both
            product-based and service-based environments using Vue.js,
            React.js, Next.js, JavaScript, Laravel, REST APIs, and modern
            frontend tools.
          </p>
          <p className="section-copy">
            At PriceOye.pk, I contribute to large-scale customer-facing
            e-commerce features, migrate Laravel Blade modules to reusable
            Vue.js components, integrate APIs, resolve production issues, and
            optimize Core Web Vitals, mobile responsiveness, and overall
            performance.
          </p>
          <p className="section-copy">
            Previously, I worked as a Frontend Developer and Team Lead at
            Alright Tech, where I developed client applications, led frontend
            delivery, reviewed code, supported team members, and collaborated
            with clients, designers, and backend developers.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {strengths.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="gradient-border card-hover p-6 text-left"
            >
              <div className="mb-5 inline-flex rounded-xl border border-primary/20 bg-primary/10 p-3 text-primary">
                <Icon aria-hidden="true" size={24} />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 leading-7 text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
