import React from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import {
  ElementType,
  ReactNode,
  useState,
  useEffect,
  CSSProperties,
  ReactElement,
} from 'react';

import { StyleProps, TransitionProps } from './types';
import useTransformPropsToCSS from '../hooks/useAnimationPropsToCSS';

/**
 * The properties that the ScrollAnimator component expects.
 */
interface BaseScrollAnimatorProps {
  /** The children to render inside the ScrollAnimator. */
  children: ReactNode;
  /** The starting styles for the animation. */
  start?: Omit<StyleProps, keyof TransitionProps>;
  /** The ending styles for the animation. */
  end?: Omit<StyleProps, keyof TransitionProps>;
  /** The transition properties for the animation. */
  transition?: TransitionProps;
  /** Whether to use custom styling or not. */
  customStyle?: boolean;
}

type ScrollAnimatorProps<T extends keyof JSX.IntrinsicElements> =
  BaseScrollAnimatorProps & {
    /** The HTML element to render as. */
    as?: T;
  } & JSX.IntrinsicElements[T];

/**
 * ScrollAnimator component. This component is used to animate its children on scroll.
 * It observes whether its root element is in the viewport and applies the appropriate
 * CSS transformation based on its `start` and `end` properties.
 *
 * @param {ScrollAnimatorProps} props The properties of the ScrollAnimator.
 * @returns {React.ReactElement} The rendered ScrollAnimator component.
 */

const ScrollAnimator = <T extends keyof JSX.IntrinsicElements>({
  children,
  start = { opacity: 0, translateY: 30 },
  end = { opacity: 1, translateY: 0 },
  transition = {
    transitionDelay: 0.1,
    transitionDuration: 0.4,
    transitionTimingFunction: 'ease-in',
  },
  as = 'div' as T,
  customStyle = false,
  ...props
}: ScrollAnimatorProps<T>): ReactElement => {
  /**
   * Options passed to the `IntersectionObserver`
   */
  const [ref, inView] = useIntersectionObserver({
    mediaQueryWidth: 768,
    largeScreenRootMargin: '-35% 0px',
    smallScreenRootMargin: '-25% 0px',
    once: true,
  }); // ref = setNode

  const Tag = as as ElementType;
  const [inlineStyle, setInlineStyle] = useState<CSSProperties>(
    useTransformPropsToCSS(transition, start),
  );

  // Monitor `inView` and convert styles
  useEffect(() => {
    const animation = inView ? end : start;
    const transformProps = useTransformPropsToCSS(transition, animation);
    setInlineStyle(transformProps);
  }, [inView]);

  return (
    <>
      {customStyle ? (
        <Tag ref={ref} data-is-active={inView} {...props}>
          {children}
        </Tag>
      ) : (
        <Tag ref={ref} style={inlineStyle} data-is-active={inView} {...props}>
          {children}
        </Tag>
      )}
    </>
  );
};

export default ScrollAnimator;
