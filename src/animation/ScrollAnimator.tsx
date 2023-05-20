import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import {
  HTMLAttributes,
  ElementType,
  ReactNode,
  useState,
  useEffect,
  CSSProperties,
} from 'react';

import { StyleProps, TransitionProps } from './types';
import transformPropsToCSS from '../hooks/useAnimationPropsToCSS';

/**
 * @typedef {Object} ScrollAnimatorProps
 * @property {ReactNode} children - The components to be displayed within the ScrollAnimator.
 * @property {Omit<StyleProps, keyof TransitionProps>} [start]  - The initial style properties before animation.
 * @property {Omit<StyleProps, keyof TransitionProps>} [end] - The final style properties after animation.
 * @property {Pick<StyleProps, keyof TransitionProps>} [transition] - The transition properties for the animation.
 * @property {keyof JSX.IntrinsicElements} [as] - The HTML tag to use for the outer element.
 * @property {boolean} [customStyle] - If true, the component does not apply inline styles, and you should apply your styles with CSS.
 * @extends {HTMLAttributes<HTMLElement>}
 */

export interface ScrollAnimatorProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  start?: Omit<StyleProps, keyof TransitionProps>;
  end?: Omit<StyleProps, keyof TransitionProps>;
  transition?: Pick<StyleProps, keyof TransitionProps>;
  as?: keyof JSX.IntrinsicElements;
  customStyle?: boolean;
}

const ScrollAnimator: React.FC<ScrollAnimatorProps> = ({
  children,
  start = { opacity: 0, y: 30 },
  end = { opacity: 1, y: 0 },
  transition = { duration: 0.7, delay: 0.3 },
  as = 'div',
  customStyle = false,
  ...props
}) => {
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
        <Tag
          ref={ref}
          style={inlineStyle}
          {...props}
          data-is-active={inView}
        >
          {children}
        </Tag>
      )}
    </>
  );
};

export default ScrollAnimator;
