import { useEffect, useState } from "react";

const createStars = (width, height, reducedMotion) => {
  const starCount = Math.min(
    reducedMotion ? 28 : 70,
    Math.max(18, Math.floor((width * height) / 22000))
  );

  return Array.from({ length: starCount }, (_, id) => ({
    id,
    size: Math.random() * 2 + 0.75,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.25 + 0.12,
    animationDuration: Math.random() * 5 + 4,
  }));
};

const createMeteors = () =>
  Array.from({ length: 2 }, (_, id) => ({
    id,
    size: Math.random() * 1.25 + 0.75,
    x: Math.random() * 100,
    y: Math.random() * 18,
    delay: Math.random() * 18,
    animationDuration: Math.random() * 4 + 5,
  }));

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateScene = () => {
      setReducedMotion(motionQuery.matches);
      setStars(
        createStars(window.innerWidth, window.innerHeight, motionQuery.matches)
      );
      setMeteors(motionQuery.matches ? [] : createMeteors());
    };

    updateScene();
    window.addEventListener("resize", updateScene);
    motionQuery.addEventListener("change", updateScene);

    return () => {
      window.removeEventListener("resize", updateScene);
      motionQuery.removeEventListener("change", updateScene);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {stars.map((star) => (
        <span
          key={star.id}
          className={`star ${reducedMotion ? "" : "animate-pulse-subtle"}`}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 45}px`,
            height: `${meteor.size * 1.5}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
