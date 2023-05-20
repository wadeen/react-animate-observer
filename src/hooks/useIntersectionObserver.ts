import { useState, useEffect, useRef } from 'react';

/**
 * A custom hook for observing if a DOM element is in the viewport.
 * The hook uses the Intersection Observer API to check if the element is in view.
 * @param {number} [width] - The minimum screen width where rootMargin changes. Default is 768px.
 * @returns {[(node: HTMLElement | null) => void, boolean]} - A tuple where the first element is a function to set the node to be observed,
 * and the second element is a boolean indicating whether the node is in view or not.
 */
const useIntersectionObserver = (width?: number) => {
  const [inView, setInView] = useState(false);
  const [node, setNode] = useState<HTMLElement | null>(null);

  const mediaQueryString = `(min-width: ${width ?? 768}px)`;
  const LargeScreenRootMargin = '-25% 0px';
  const SmallScreenRootMargin = '-5% 0px';

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        rootMargin: window.matchMedia(mediaQueryString).matches
          ? LargeScreenRootMargin
          : SmallScreenRootMargin,
        threshold: 0.1,
      },
    );

    if (node) observer.current.observe(node);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [node]);

  useEffect(() => {
    const updateRootMargin = () => {
      if (observer.current) {
        observer.current.disconnect();
        observer.current = new IntersectionObserver(
          ([entry]) => {
            setInView(entry.isIntersecting);
          },
          {
            rootMargin: window.matchMedia(mediaQueryString).matches
              ? LargeScreenRootMargin
              : SmallScreenRootMargin,
            threshold: 0.1,
          },
        );
        if (node) observer.current.observe(node);
      }
    };

    updateRootMargin(); // initial
    const mediaQueryList = window.matchMedia(mediaQueryString);
    mediaQueryList.addEventListener('change', updateRootMargin);

    return () => {
      mediaQueryList.removeEventListener('change', updateRootMargin);
    };
  }, []);

  return [setNode, inView];
};

export default useIntersectionObserver;
