// Convert transform props to CSS
const useTransformPropsToCSS = ({ transition, animation }: any) => {
  let transitionPropsArray: string[] = [];
  Object.keys(transition).map((key) => {
    const value = transition[key];
    switch (key) {
      case 'duration':
        transitionPropsArray.push(`transition-duration: '${value}s';`);
      case 'delay':
        transitionPropsArray.push(`transition-delay: '${value}s';`);
      case 'timing':
        transitionPropsArray.push(`transition-timing-function: '${value};'`);
      default:
        return '';
    }
  });

  // console.log('transitionPropsArray: ', transitionPropsArray);
  const transformProps = {
    transitionPropsArray,
    // ...animationArray,
  };

  return transformProps;
};

export default useTransformPropsToCSS;

// rotate: '45deg',
// transform: 'translateY(200px) translateX(100px)',
// opacity: '0.8',
