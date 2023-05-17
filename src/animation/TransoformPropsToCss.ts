// import { CSSProperties } from "react";
// import { StyleProps } from "./types";

// export const transformPropsToCSS = (props: StyleProps): CSSProperties => {
//   const cssProps: CSSProperties = {};

//   for (const key in props) {
//     if (Object.prototype.hasOwnProperty.call(props, key)) {
//       const value = props[key];

//       // convert to appropriate CSS property
//       switch (key) {
//         case "x":
//           cssProps.transform = `translateX(${value}px)`;
//           break;
//         case "y":
//           cssProps.transform = `translateY(${value}px)`;
//           break;
//         case "opacity":
//           cssProps.opacity = value;
//           break;
//         case "transitionDuration":
//           cssProps.transitionDuration = `${value}s`;
//           break;
//         case "transitionDelay":
//           cssProps.transitionDelay = `${value}s`;
//           break;
//         // TODO: Add more cases for other properties
//         default:
//           cssProps[key as any] = value;
//           break;
//       }
//     }
//   }

//   return cssProps;
// };
