import { Variant } from "framer-motion";

export const getTransition = (
  hidden: Variant | any,
  visible: any,
  transition: any = {},
  transitionExit: any = {}
): any => {
  return {
    hidden:
      typeof hidden === "object"
        ? {
            ...hidden,
            transition: {
              duration: 0.7,
              ease: [0.86, 0, 0.07, 1],
              ...transition,
              ...transitionExit,
            },
          }
        : hidden,
    visible:
      typeof visible === "object"
        ? {
            ...visible,
            transition: {
              duration: 0.7,
              ease: [0.86, 0, 0.07, 1],
              ...transition,
            },
          }
        : visible,
    exit: {
      ...hidden,
      transition: {
        duration: 0.7,
        ease: [0.86, 0, 0.07, 1],
        ...transition,
        ...transitionExit,
      },
    },
  };
};
