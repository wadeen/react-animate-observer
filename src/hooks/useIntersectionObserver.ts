import { useState, useEffect, useRef } from 'react';

/**
 * A custom hook for observing if a DOM element is in the viewport.
 * The hook uses the "Intersection Observer API" to check if the element is in view.
 * @param {number} [width] - The minimum screen width where rootMargin changes. Default is 768px.
 * @param {string} [largeScreenRootMargin] - Screen minimum width root margin. Default works with 25% top and bottom margins
 * @param {string} [smallScreenRootMargin] - root margin of maximum screen width. Default works with 5% top and bottom margins
 * @returns {[(node: HTMLElement | null) => void, boolean]} - A tuple where the first element is a function to set the node to be observed,
 * and the second element is a boolean indicating whether the node is in view or not.
 */

const useIntersectionObserver = (
  width?: number,
  largeScreenRootMargin?: string,
  smallScreenRootMargin?: string,
) => {
  // State
  const [inView, setInView] = useState(false); // Check if DOM is in view
  const [node, setNode] = useState<HTMLElement | null>(null); // Check and get if DOM exists

  // Ref: observer
  const observer = useRef<IntersectionObserver | null>(null);

  // Initial values
  const mediaQueryString = `(min-width: ${width ?? 768}px)`;
  const LargeScreenRootMargin = largeScreenRootMargin ?? '-25% 0px';
  const SmallScreenRootMargin = smallScreenRootMargin ?? '-5% 0px';

  // Instantiate observer and set initial value
  const createObserver = () => {
    return new IntersectionObserver(
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
  };

  // Set observer
  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    observer.current = createObserver(); // add IntersectionObserver
    if (node) observer.current.observe(node);
    return () => observer?.current?.disconnect();
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
    const mediaQueryList = window.matchMedia(mediaQueryString);
    mediaQueryList.addEventListener('change', updateRootMargin);

    return () => mediaQueryList.removeEventListener('change', updateRootMargin);
  }, []);

  return [setNode, inView];
};

export default useIntersectionObserver;
