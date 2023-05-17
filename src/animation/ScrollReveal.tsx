import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { HTMLAttributes, ElementType, ReactNode } from "react";
// import { transformPropsToCSS } from "./TransoformPropsToCss";
import { StyleProps } from "./types";

interface ScrollRevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  start?: StyleProps;
  end?: StyleProps;
  transition?: StyleProps;
  as?: keyof JSX.IntrinsicElements;
  customStyle?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, start = { opacity: 0, y: 30 }, end = { opacity: 1, y: 0 }, transition = { duration: 0.7, delay: 0.3 }, as = "div", customStyle = false, ...props }) => {
  const [ref, inView] = useIntersectionObserver();
  // const Tag: keyof JSX.IntrinsicElements = "div";
  // ToDo: refを許容した型に変更！それ以外にもstart,end.なども必要
  const Tag: any = "div";

  return (
    <>
      {customStyle ? (
        <Tag ref={ref} data-is-active={inView} {...props}>
          {children}
        </Tag>
      ) : (
        <Tag
          ref={ref}
          start={start}
          end={end}
          // initial={start}
          // animate={inView ? end : start}
          viewport={{ once: true }}
          transition={transition}
          data-is-active={inView}
          {...props}
        >
          {children}
        </Tag>
      )}
    </>
  );
};
