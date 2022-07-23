import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Icon } from '@iconify/react';

type CharProps = {
  children: React.ReactNode;
};

const Char: React.FC<CharProps> = ({ children }) => {
  return <span className="translate-y-full">{children}</span>;
};

export const Cover: React.FC = () => {
  const wrapper = useRef<HTMLDivElement>(null);
  const message = useRef<HTMLDivElement>(null);
  const scroll = useRef<HTMLDivElement>(null);
  const scrollArrow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loop = gsap.timeline({ repeat: -1 });
      loop
        .to(
          scrollArrow.current,
          {
            y: '30%',
            duration: 0.5,
          },
          0.1
        )
        .to(
          scrollArrow.current,
          {
            y: '0%',
            duration: 0.5,
          },
          '+=0.1'
        );

      const msgChars = message.current?.childNodes || null;
      const tl = gsap.timeline();
      tl.to(
        msgChars,
        {
          y: '-20%',
          duration: 0.2,
          stagger: 0.1,
        },
        0.3
      )
        .to(
          msgChars,
          {
            y: '0%',
            duration: 0.2,
            stagger: 0.1,
          },
          0.6
        )
        .to(
          scroll.current,
          {
            opacity: 1,
            duration: 0.5,
          },
          '+=0.1'
        );
    }
  }, []);

  return (
    <div
      className="absolute top-0 left-0 bottom-0 right-0 z-20 flex flex-col items-center justify-center bg-black text-white"
      ref={wrapper}
    >
      <div className="flex flex-row space-x-4 overflow-hidden text-8xl" ref={message}>
        {'Hi!'.split('').map((char, index) => (
          <Char key={index}>{char}</Char>
        ))}
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 mb-8 flex flex-col items-center opacity-0"
        ref={scroll}
      >
        <div className="text-2xl">Scroll</div>
        <div ref={scrollArrow}>
          <Icon icon="fa6-solid:angle-down" />
        </div>
      </div>
    </div>
  );
};
