import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { H1 } from './header';

type Props = {
  children: React.ReactNode;
  id: string;
  title: string;
};

export const Section: React.FC<Props> = ({ children, id, title }) => {
  const header = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: header.current,
          start: 'top 50%',
          end: 'top 30%',
          scrub: true,
          pin: true,
        },
      });
      headerTl.fromTo(
        header.current,
        {
          opacity: 0,
          pointerEvents: 'none',
          x: '-10%',
        },
        {
          opacity: 1,
          pointerEvents: 'auto',
          x: '0%',
        }
      );

      Array.prototype.forEach.call(content.current?.children, (subSection) => {
        const subSectionTl = gsap.timeline({
          scrollTrigger: {
            trigger: subSection,
            start: 'top 50%',
            end: 'top 40%',
            scrub: 1,
          },
        });
        subSectionTl.fromTo(
          subSection,
          {
            opacity: 0,
            pointerEvents: 'none',
            y: '20%',
          },
          {
            opacity: 1,
            pointerEvents: 'auto',
            y: '0%',
          }
        );
      });
    }
  }, []);

  return (
    <section id={id} className="min-h-screen pb-24">
      <div ref={header}>
        <H1>{title}</H1>
      </div>
      <div className="flex flex-col space-y-16" ref={content}>
        {children}
      </div>
    </section>
  );
};
