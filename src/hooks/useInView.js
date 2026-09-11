import { useEffect, useRef, useState } from 'react';

const useInView = (options = { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(node);
      }
    }, options);

    // Delay observing by a frame so the "hidden" state has painted before
    // it can flip to "visible" (otherwise an already-on-screen element
    // jumps straight to its end state with no visible transition).
    const raf = requestAnimationFrame(() => observer.observe(node));
    return () => {
      cancelAnimationFrame(raf);
      observer.unobserve(node);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, isInView];
};

export default useInView;
