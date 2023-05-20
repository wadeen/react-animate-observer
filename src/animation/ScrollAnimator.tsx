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
  const [ref, inView] = useIntersectionObserver();
  const Tag = as as ElementType;
  const [inlineStyle, setInlineStyle] = useState<CSSProperties>();

  // Confirm the props start or end
  useEffect(() => {
    const animation = inView ? end : start;
    const transformProps = transformPropsToCSS(transition, animation);
    setInlineStyle(transformProps);
  }, [inView]);

  console.log('inlineStyle: ', inlineStyle);
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
