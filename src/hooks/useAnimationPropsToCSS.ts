import { StyleProps, TransitionProps } from '@/animation/types';
import { CSSProperties } from 'react';

/**
 * Converts transition and animation properties to CSS.
 *
 * This function takes two parameters, `transition` and `animation`, which are objects representing
 * transition and animation properties, respectively. It returns an object that maps these properties
 * to their CSS equivalents.
 *
 * @param {TransitionProps} transition An object representing the transition properties.
 * @param {Omit<StyleProps, keyof TransitionProps>} animation An object representing the animation properties, excluding those that are part of the transition properties.
 * @returns {CSSProperties} An object that represents the CSS properties for the transition and animation.
 */

// Convert transform props to CSS
const useTransformPropsToCSS = (
  transition: TransitionProps,
  animation: Omit<StyleProps, keyof TransitionProps>,
): CSSProperties => {
  let transitionPropsArray: CSSProperties[] = [];
  let transformPropsArray: CSSProperties[] = [];

  // Converting styles for transition
  (Object.keys(transition) as Array<keyof TransitionProps>).forEach((key) => {
    const value = transition[key];
    switch (key) {
      case 'transitionDelay':
        transitionPropsArray.push({
          transitionDelay: `${value}s`,
        });
        break;
      case 'transitionDuration':
        transitionPropsArray.push({
          transitionDuration: `${value}s`,
        });
        break;
      default:
        return '';
    }
  });

  // Converting styles for animation
  let animationProps = '';
  (
    Object.keys(animation) as Array<
      keyof Omit<StyleProps, keyof TransitionProps>
    >
  ).forEach((key) => {
    const value = animation[key];
    switch (key) {
      // Transform props: `Self-made` because it is not in CSSProperties
      case 'translateX':
        animationProps += `translateX(${value}px)`;
        break;
      case 'translateY':
        animationProps += `translateY(${value}px)`;
        break;
      case 'translateZ':
        animationProps += `translateZ(${value}px)`;
        break;
      case 'rotateX':
        animationProps += `rotateX(${value}deg)`;
        break;
      case 'rotateY':
        animationProps += `rotateY(${value}deg)`;
        break;
      case 'rotateZ':
        animationProps += `rotateZ(${value}deg)`;
        break;
      case 'skewX':
        animationProps += `skewX(${value}deg)`;
        break;
      case 'skewY':
        animationProps += `skewY(${value}deg)`;
        break;
      case 'scaleX':
        animationProps += `scaleX(${value})`;
        break;
      case 'scaleY':
        animationProps += `scaleY(${value})`;
        break;
      case 'scaleZ':
        animationProps += `scaleZ(${value})`;
        break;

      // Default style props
      default:
        transformPropsArray.push({ [key]: `${value}` });
        return '';
    }
  });

  transformPropsArray.push({
    transform: animationProps,
  });

  const transformPropsToCSS = Object.assign(
    {},
    ...transitionPropsArray,
    ...transformPropsArray,
  );

  return transformPropsToCSS;
};

export default useTransformPropsToCSS;
