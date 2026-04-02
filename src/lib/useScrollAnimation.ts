import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    const classes = ['rv-up', 'rv-left', 'rv-right', 'rv-fade', 'rv-pop'];

    // Add hidden state to all animated elements initially
    const elements = document.querySelectorAll(
      classes.map(c => `.${c}`).join(',')
    );

    elements.forEach(el => {
      (el as HTMLElement).style.opacity = '0';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
