import { useState, useEffect, useRef } from 'react';

type IntersectionObserverProps = Partial<{
  mediaQueryWidth?: number;
  largeScreenRootMargin?: string;
  smallScreenRootMargin?: string;
  once?: boolean;
}>;

const useIntersectionObserver = ({
  mediaQueryWidth,
  largeScreenRootMargin: _largeScreenRootMargin,
  smallScreenRootMargin: _smallScreenRootMargin,
  once,
}: IntersectionObserverProps = {}) => {
  // State
  const [inView, setInView] = useState(false); // Check if DOM is in view
  const [node, setNode] = useState<HTMLElement | null>(null); // Check and get if DOM exists
  // const [alreadyAnimated, setAlreadyAnimated] = useState(false); // For tracking if the animation has already been played

  // Ref: observer
  const observer = useRef<IntersectionObserver | null>(null);

  // Initial values
  const mediaQueryString = `(min-width: ${mediaQueryWidth ?? 768}px)`;
  const largeScreenRootMargin = _largeScreenRootMargin ?? '-25% 0px';
  const smallScreenRootMargin = _smallScreenRootMargin ?? '-5% 0px';
  const onceAnimation = once ?? true;

  // Instantiate observer and set initial value
  const createObserver = () => {
    return new IntersectionObserver(
      ([entry]) => {
        if (onceAnimation) {
          entry.isIntersecting && setInView(entry.isIntersecting);
        } else {
          setInView(entry.isIntersecting);
        }
      },
      {
        rootMargin: window.matchMedia(mediaQueryString).matches
          ? largeScreenRootMargin
          : smallScreenRootMargin,
        threshold: 0,
      },
    );
  };

  // Set observer
  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    observer.current = createObserver(); // add IntersectionObserver
    if (node) observer.current.observe(node);
    return () => observer?.current?.disconnect();
    // }, [node, alreadyAnimated]);
  }, [node]);

  // Update root margin on screen resize
  useEffect(() => {
    const updateRootMargin = () => {
      if (observer.current) {
        observer.current.disconnect();
        observer.current = createObserver(); // add IntersectionObserver
        if (node) observer.current.observe(node);
      }
    };

    updateRootMargin(); // Initialization

    // Relative to device width specified in `mediaQueryString`
    const mediaQueryList = window.matchMedia(mediaQueryString);
    mediaQueryList.addEventListener('change', updateRootMargin);

    return () => mediaQueryList.removeEventListener('change', updateRootMargin);
  }, []);

  return [setNode, inView];
};

export default useIntersectionObserver;
