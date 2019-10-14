import * as React from "react";
import { animated, useSpring } from "react-spring";
import { useInView } from 'react-intersection-observer'
import { fadeConfig } from "../types/config.type";

export function FadeIn({ threshold = 0, children }: fadeConfig) {
  const [ref, inView] = useInView({
    threshold
  });

  const { opacity } = useSpring({
    opacity: inView ? 1 : 0,
  });

  return (
    <animated.div
      style={{
        opacity: opacity,
      }}
      ref={ref}
    >
        {children}
    </animated.div>
  )
}

export function FadeInLeft({ threshold = 0, children }: fadeConfig) {
  const [ref, inView] = useInView({
    threshold
  });

  const { opacity, x } = useSpring({
    opacity: inView ? 1 : 0,
    x: inView ? 0 : -10,
  });

  return (
    <animated.div
      style={{
        opacity: opacity,
        transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`)
      }}
      ref={ref}
    >
        {children}
    </animated.div>
  )
}

export function FadeInRight({ threshold = 0, children }: fadeConfig) {
  const [ref, inView] = useInView({
    threshold
  });

  const { opacity, x } = useSpring({
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 10,
  });

  return (
    <animated.div
      style={{
        opacity: opacity,
        transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`)
      }}
      ref={ref}
    >
      {children}
    </animated.div>
  )
}

export function FadeInTop({ threshold = 0, children }: fadeConfig) {
  const [ref, inView] = useInView({
    threshold
  });

  const { opacity, y } = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : -10,
  });

  return (
    <animated.div
      style={{
        opacity: opacity,
        transform: y.interpolate(y => `translate3d(0, ${y}px, 0)`)
      }}
      ref={ref}
    >
      {children}
    </animated.div>
  )
}

export function FadeInBottom({ threshold = 0, children }: fadeConfig) {
  const [ref, inView] = useInView({
    threshold
  });

  const { opacity, y } = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 10,
  });

  return (
    <animated.div
      style={{
        opacity: opacity,
        transform: y.interpolate(y => `translate3d(0, ${y}px, 0)`)
      }}
      ref={ref}
    >
      {children}
    </animated.div>
  )
}