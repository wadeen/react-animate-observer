import { StyleProps, TransitionProps } from '../animation/types.js';
import { CSSProperties } from 'react';

const useTransformPropsToCSS = (
  transition: TransitionProps,
  animation: Omit<StyleProps, keyof TransitionProps>,
): CSSProperties => {
  let transitionProps: CSSProperties = {};
  let transformProps: CSSProperties = {};
  let animationProps = '';

  // Converting styles for transition
  (Object.keys(transition) as Array<keyof TransitionProps>).forEach((key) => {
    const value = transition[key];
    switch (key) {
      case 'transitionDelay':
        transitionProps = {
          ...transitionProps,
          transitionDelay: `${value}s`,
        };
        break;
      case 'transitionDuration':
        transitionProps = {
          ...transitionProps,
          transitionDuration: `${value}s`,
        };
        break;
      default:
        transitionProps = {
          ...transitionProps,
          [key]: `${value}`,
        };
        return;
    }
  });

  // Converting styles for animation
  (
    Object.keys(animation) as Array<
      keyof Omit<StyleProps, keyof TransitionProps>
    >
  ).forEach((key) => {
    const value = animation[key];
    switch (key) {
      // Transform props: `Self-made` because it is not in CSSProperties
      case 'translateX':
        animationProps += `translateX(${value}px) `;
        break;
      case 'translateY':
        animationProps += `translateY(${value}px) `;
        break;
      case 'translateZ':
        animationProps += `translateZ(${value}px) `;
        break;
      case 'rotateX':
        animationProps += `rotateX(${value}deg) `;
        break;
      case 'rotateY':
        animationProps += `rotateY(${value}deg) `;
        break;
      case 'rotateZ':
        animationProps += `rotateZ(${value}deg) `;
        break;
      case 'skewX':
        animationProps += `skewX(${value}deg) `;
        break;
      case 'skewY':
        animationProps += `skewY(${value}deg) `;
        break;
      case 'scaleX':
        animationProps += `scaleX(${value}) `;
        break;
      case 'scaleY':
        animationProps += `scaleY(${value}) `;
        break;
      case 'scaleZ':
        animationProps += `scaleZ(${value}) `;
        break;
      // Default style props
      default:
        transformProps = { ...transformProps, [key]: `${value}` };
        return;
    }
  });

  transformProps = { ...transformProps, transform: animationProps.trim() };

  return { ...transitionProps, ...transformProps };
};

export default useTransformPropsToCSS;
