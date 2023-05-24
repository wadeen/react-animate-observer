import { IntersectionObserverProps } from '../animation/types.js';
import { useState, useEffect, useRef } from 'react';

/**
 * @typedef {Object} IntersectionObserverProps
 * @property {number} [mediaQueryWidth] - The minimum viewport width in pixels.
 * @property {string} [largeScreenRootMargin] - The root margin to use when the viewport width is greater than or equal to mediaQueryWidth.
 * @property {string} [smallScreenRootMargin] - The root margin to use when the viewport width is less than mediaQueryWidth.
 * @property {boolean} [once] - Whether to only update the inView state once when the observed element enters the viewport.
 */

const useIntersectionObserver = ({
  mediaQueryWidth,
  largeScreenRootMargin: _largeScreenRootMargin,
  smallScreenRootMargin: _smallScreenRootMargin,
  once,
}: IntersectionObserverProps) => {
  // State
  const [inView, setInView] = useState(false); // Check if DOM is in view
  const [node, setNode] = useState<HTMLElement | null>(null); // Check and get if DOM exists

  // Ref: observer
  const observer = useRef<IntersectionObserver | null>(null);

  // Initial values
  const mediaQueryString = `(min-width: ${mediaQueryWidth ?? 768}px)`;
  const largeScreenRootMargin = _largeScreenRootMargin ?? '-35% 0px'; // PC
  const smallScreenRootMargin = _smallScreenRootMargin ?? '-25% 0px'; // Mobile
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
