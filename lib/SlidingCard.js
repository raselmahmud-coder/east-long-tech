import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const SlidingCard = ({
  children,
  animationA = "translateY(0)", // Example: Slide in from bottom
  animationB = "translateY(100%)", // Starts off-screen below
  threshold = 0.03,
}) => {
  const { inView, ref } = useInView({
    threshold: threshold,
    // triggerOnce: true // Uncomment if you want the animation to only trigger once
  });

  const slideAnimation = useSpring({
    to: {
      transform: inView ? animationA : animationB,
      opacity: inView ? 1 : 0,
    },
    from: {
      transform: animationB,
      opacity: 0,
    },
    // Remove delay entirely after the first render or set it conditionally
    delay: inView ? 0 : 300, // Adjust this as needed
  });

  return (
    <animated.div style={slideAnimation} ref={ref}>
      {children}
    </animated.div>
  );
};

export default SlidingCard;
