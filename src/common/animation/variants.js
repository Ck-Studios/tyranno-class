export const RTL_SLIDE_TRANSITION_VARIANTS = (skipInit, skipEnter, skipExit) => {
  return {
    initial: !skipInit && { x: 720, opacity: 0 },
    enter: !skipEnter && {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }
    },
    exit: !skipExit && {
      x: 720,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.48, 0.15, 0.25, 0.96],
        staggerChildren: 0.1
      }
    }
  };
};

export const FADE_TRANSITION_VARIANTS = {
  initial: { opacity: 0.5 },
  enter: {
    opacity: 1,
    transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};

export const LIST_ITEM_VARIANTS = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },

  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};
