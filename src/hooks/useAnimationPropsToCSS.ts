import { StyleProps, TransitionProps } from '@/animation/types';
import { CSSProperties } from 'react';

// Convert transform props to CSS
const useTransformPropsToCSS = (
  transition: TransitionProps,
  animation: Omit<StyleProps, keyof TransitionProps>,
) => {
  let transitionPropsArray: CSSProperties[] = [];
  let animationPropsArray: CSSProperties[] = [];

  // Converting styles for transition
  Object.keys(transition).map((key) => {
    // @ts-ignore
    const value = transition[key];
    switch (key) {
      case 'duration':
        transitionPropsArray.push({
          transitionDuration: `${value}s`,
        });
        break;
      case 'delay':
        transitionPropsArray.push({
          transitionDelay: `${value}s`,
        });
        break;
      case 'timing':
        transitionPropsArray.push({
          transitionTimingFunction: `${value}`,
        });
        break;
      default:
        return '';
    }
  });

  // Converting styles for animation
  Object.keys(animation).map((key) => {
    // @ts-ignore
    const value = animation[key];
    switch (key) {
      case 'opacity':
        animationPropsArray.push({
          opacity: `${value}`,
        });
        break;
      case 'x':
        animationPropsArray.push({
          transform: `translateX(${value}px)`,
        });
        break;
      case 'y':
        animationPropsArray.push({
          transform: `translateY(${value}px)`,
        });
        break;
      case 'z':
        animationPropsArray.push({
          transform: `translateZ(${value}px)`,
        });
        break;
      case 'rotateX':
        animationPropsArray.push({
          transform: `rotateX(${value}deg)`,
        });
        break;
      case 'rotateY':
        animationPropsArray.push({
          transform: `rotateY(${value}deg)`,
        });
        break;
      case 'rotateZ':
        animationPropsArray.push({
          transform: `rotateZ(${value}deg)`,
        });
        break;
      case 'skewX':
        animationPropsArray.push({
          transform: `skewX(${value}deg)`,
        });
        break;
      case 'skewY':
        animationPropsArray.push({
          transform: `skewY(${value}deg)`,
        });
        break;
      case 'scaleX':
        animationPropsArray.push({
          transform: `scaleX(${value})`,
        });
        break;
      case 'scaleY':
        animationPropsArray.push({
          transform: `scaleY(${value})`,
        });
        break;
      case 'scaleZ':
        animationPropsArray.push({
          transform: `scaleZ(${value})`,
        });
        break;
      case 'origin':
        animationPropsArray.push({
          transformOrigin: `${value}`,
        });
        break;
      default:
        return '';
    }
  });

  const transitionPropsToCSS = Object.assign(
    {},
    ...transitionPropsArray,
    ...animationPropsArray,
  );

  return transitionPropsToCSS;
};

export default useTransformPropsToCSS;
