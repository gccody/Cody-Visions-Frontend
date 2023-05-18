import React, { useRef } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
}

export const FadeInSection = (props: FadeInSectionProps) => {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const current = domRef.current;
    if (!current) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);
  return (
    <div
      className={`p-content fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}