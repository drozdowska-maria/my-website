export const itemAnimationVariants = {
  exit: { height: 0 },
  initial: { opacity: 0, height: "100%" },
  animate: { opacity: 1, height: "100%" },
};

export const itemAnimationTransition = (index: number) => ({
  delay: index * 0.2,
});
