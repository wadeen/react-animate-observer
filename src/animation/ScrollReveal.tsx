import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import {
  HTMLAttributes,
  ElementType,
  ReactNode,
  CSSProperties,
  RefObject,
} from 'react';

import { StyleProps } from './types';

interface ScrollRevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  start?: StyleProps;
  end?: StyleProps;
  transition?: StyleProps;
  as?: keyof JSX.IntrinsicElements;
  customStyle?: boolean;
}

// Basic transform properties
const transformProps: Array<keyof StyleProps> = [
  'x',
  'y',
  'z',
  'rotate',
  'rotateX',
  'rotateY',
  'rotateZ',
  'skew',
  'skewX',
  'skewY',
  'originX',
  'originY',
  'originZ',
  'perspective',
  'scale',
  'scaleX',
  'scaleY',
  'scaleZ',
  'transform',
  'transformOrigin',
  'transformStyle',
];

function isCSSProperty(key: string): key is keyof CSSProperties {
  return key in ({} as CSSProperties);
}

// Convert transform props to CSS
function transformPropsToCSS(props: StyleProps): CSSProperties {
  const css: CSSProperties = {};
  let transform = '';

  for (const key in props) {
    if (transformProps.includes(key as keyof StyleProps)) {
      // console.log("key: ", key);
      // Add to transform string
      transform += `${key}(${props[key as keyof StyleProps]}) `;
      // } else if (key === "transitionDuration" || key === "transitionDelay") {
      //   // Convert to seconds
      //   css[key as keyof CSSProperties] = `${props[key as keyof StyleProps]}s`;
      // } else {
      //   // Directly assign other props
      //   css[key as keyof CSSProperties] = props[key as keyof StyleProps];
    }
  }

  if (transform) {
    css.transform = transform;
  }

  return css;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
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

  const style = transformPropsToCSS({
    ...start,
    ...(inView ? end : start),
    ...transition,
  });

  return (
    <Tag ref={ref} style={style} {...props}>
      {children}
    </Tag>
  );
};
