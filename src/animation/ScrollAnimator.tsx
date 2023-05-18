import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import {
  HTMLAttributes,
  ElementType,
  ReactNode,
  useState,
  useEffect,
} from 'react';

import { StyleProps, TransitionProps } from './types';
import transformPropsToCSS from '../hooks/useTransformPropsToCSS';

export interface ScrollRevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  start?: Omit<StyleProps, keyof TransitionProps>;
  end?: Omit<StyleProps, keyof TransitionProps>;
  transition?: Pick<StyleProps, keyof TransitionProps>;
  as?: keyof JSX.IntrinsicElements;
  customStyle?: boolean;
}
export const ScrollAnimator: React.FC<ScrollRevealProps> = ({
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
  const [animation, setAnimation] =
    useState<Omit<StyleProps, keyof TransitionProps>>();
  const [inlineStyle, setInlineStyle] = useState<string | string[]>('');

  // Confirm the props start or end
  useEffect(() => {
    setAnimation(() => (inView ? end : start));
    const transformProps = transformPropsToCSS({ transition, animation });
    // setInlineStyle(transformProps);
    console.log('inlineStyle: ', inlineStyle);
  }, [inView]);

  return (
    <Tag ref={ref} style={{ inlineStyle }} {...props} data-is-active={inView}>
      {children}
    </Tag>
  );
};

// function isCSSProperty(key: string): key is keyof CSSProperties {
//   return key in ({} as CSSProperties);
// }

// if (transformProps.includes(key as keyof TransformProps)) {
//   css.transform = `${css.transform || ''} ${key}(${
//     props[key as keyof StyleProps]
//   })`;
// } else if (filterProps.includes(key as keyof FilterProps)) {
//   css[key as keyof CSSProperties] = props[key as keyof StyleProps];
// } else if (transitionProps.includes(key as keyof TransitionProps)) {
//   css.transition = `${css.transition || ''} ${key} ${
//     props[key as keyof StyleProps]
//   }s`;
// }

// console.log('transition: ', transition);
// console.log('animationStyles: ', animationStyles);
// console.log('All, props: ', props);

// for (const key in props) {
//   if (props.transition) {
//     console.log('Transition, props: ', props);
//     // transitionのこと(duration, delay, timing)
//     // setTransitionStyles(() => ["transformX"])
//   } else {
//     console.log('Animation, props: ', props);
//     // start/endを使ったアニメーションの数値(transition以外全て)
//   }
// }
