import { StyleProps, TransitionProps } from '@/animation/types';

// Convert transform props to CSS
const useTransformPropsToCSS = (
  transition: TransitionProps,
  animation: Omit<StyleProps, keyof TransitionProps>,
) => {
  let transitionPropsArray: any[] = [];
  // let animationPropsArray: string[] = [];

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
  // Object.keys(animation).map((key) => {
  //   // @ts-ignore
  //   const value = animation[key];
  //   switch (key) {
  //     case 'opacity':
  //       animationPropsArray.push(`opacity: '${value}';`);
  //       break;
  //     default:
  //       return '';
  //   }
  // });

  // const stylePropsArray: any = [
  //   ...transitionPropsArray,
  //   ...animationPropsArray,
  // ];

  // const transformProps = stylePropsArray.split(';');

  // const transformProps = {
  //   ...transitionPropsArray,
  // };

  const transformProps = Object.assign({}, ...transitionPropsArray);

  return transformProps;
};

export default useTransformPropsToCSS;
