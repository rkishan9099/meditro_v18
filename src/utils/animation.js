export const fadeInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
};
export const fadeInRight = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
};

export const fadeInFromTop = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { y: { duration: 1, ease: "easeOut" }, opacity: { duration: 1 } },
};

export const infiniteRotate = {
  animate: { rotate: 360 },
  transition: { repeat: Infinity, duration: 3, ease: "linear" },
};

export const hoverEffect = {
  whileHover: { scale: 1.1 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: 0.6 },
};


export const upDownAnimation = {
  animate: {
    y: [0, -10, 0], 
  },
  transition: {
    duration: 3, 
    repeat: Infinity,
    ease: "easeInOut", 
  },
};

export const leftRightAnimation = {
  animate: {
    x: [0, -10, 0], 
  },
  transition: {
    duration: 3, 
    repeat: Infinity,
    ease: "easeInOut", 
  },
};
