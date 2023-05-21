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
import transformPropsToCSS from '../hooks/useAnimationPropsToCSS';

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
    transitionDelay: 0.2,
    transitionDuration: 0.6,
    transitionTimingFunction: 'ease-in-out',
  },
  as = 'div' as T,
  customStyle = false,
  ...props
}: ScrollAnimatorProps<T>): ReactElement => {
  const [ref, inView] = useIntersectionObserver(); // ref = setNode
  const Tag = as as ElementType;
  const [inlineStyle, setInlineStyle] = useState<CSSProperties>();

  // Monitor "inView" and convert styles
  useEffect(() => {
    const animation = inView ? end : start;
    const transformProps = transformPropsToCSS(transition, animation);
    setInlineStyle(transformProps);
  }, [inView]);

  return (
    <>
      {customStyle ? (
        <Tag ref={ref} {...props} data-is-active={inView}>
          {children}
        </Tag>
      ) : (
        <Tag ref={ref} style={inlineStyle} {...props} data-is-active={inView}>
          {children}
        </Tag>
      )}
    </>
  );
};

export default ScrollAnimator;
