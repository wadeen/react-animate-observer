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

export interface ScrollAnimatorProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  start?: Omit<StyleProps, keyof TransitionProps>;
  end?: Omit<StyleProps, keyof TransitionProps>;
  transition?: TransitionProps;
  as?: keyof JSX.IntrinsicElements;
  customStyle?: boolean;
}

const ScrollAnimator: React.FC<ScrollAnimatorProps> = ({
  children,
  start = { opacity: 0, translateY: 30 },
  end = { opacity: 1, translateY: 0 },
  transition = {
    transitionDelay: 0.2,
    transitionDuration: 0.6,
    transitionTimingFunction: 'ease-in-out',
  },
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
        <Tag ref={ref} style={inlineStyle} {...props} data-is-active={inView}>
          {children}
        </Tag>
      )}
    </>
  );
};

export default ScrollAnimator;
