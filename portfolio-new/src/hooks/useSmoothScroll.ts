import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Apple-like smooth scroll with easing
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const smoothScrollTo = (targetPosition: number, duration: number = 1200) => {
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (!href) return;

        const targetElement = document.querySelector(href);
        if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
          smoothScrollTo(targetPosition);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
};

