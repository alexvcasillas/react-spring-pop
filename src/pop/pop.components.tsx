import * as React from "react";
import { animated, useSpring } from "react-spring";
import { useInView } from 'react-intersection-observer'
import { bounceConfig } from "../types/config.type";

export function PopIn({ threshold = 0, mass = 1, tension = 180, friction = 12, children }: bounceConfig) {
  const [ref, inView] = useInView({
    threshold
  });
  
  const { opacity } = useSpring({
    opacity: inView ? 1 : 0,
  });

  const { scale } = useSpring({
    scale: inView ? 1 : 0.8,
    config: {
      mass,
      tension,
      friction,
    }
  });

  return (
    <animated.div
      style={{
        opacity: opacity,
        transform: scale.interpolate(scale => `scale(${scale})`)
      }}
      ref={ref}
    >
        {children}
    </animated.div>
  )
}

export function PopInLeft({ threshold = 0, mass = 1, tension = 180, friction = 12, children }: bounceConfig) {
  const [ref, inView] = useInView({
    threshold
  });
  
  const { opacity } = useSpring({
    opacity: inView ? 1 : 0,
  });

  const { transform } = useSpring({
    transform: inView ? `translate3d(0, 0, 0) scale(1)` : `translate3d(-50px, 0, 0) scale(0.8)`,
    config: {
      mass,
      tension,
      friction,
    }
  });

  return (
    <animated.div
      style={{
        opacity: opacity,
        transform,
      }}
      ref={ref}
    >
        {children}
    </animated.div>
  )
}

export function PopInRight({ threshold = 0, mass = 1, tension = 180, friction = 12, children }: bounceConfig) {
  const [ref, inView] = useInView({
    threshold
  });

  const { opacity } = useSpring({
    opacity: inView ? 1 : 0,
  });

  const { transform } = useSpring({
    transform: inView ? `translate3d(0, 0, 0) scale(1)` : `translate3d(50px, 0, 0) scale(0.8)`,
    config: {
      mass,
      tension,
      friction,
    }
  });

  return (
    <animated.div
      style={{
        opacity: opacity,
        transform
      }}
      ref={ref}
    >
      {children}
    </animated.div>
  )
}

export function PopInTop({ threshold = 0, mass = 1, tension = 180, friction = 12, children }: bounceConfig) {
  const [ref, inView] = useInView({
    threshold
  });

  const { opacity } = useSpring({
    opacity: inView ? 1 : 0,
  });

  const { transform } = useSpring({
    transform: inView ? `translate3d(0, 0, 0) scale(1)` : `translate3d(0, 50px, 0) scale(0.8)`,
    config: {
      mass,
      tension,
      friction,
    }
  });

  return (
    <animated.div
      style={{
        opacity: opacity,
        transform
      }}
      ref={ref}
    >
      {children}
    </animated.div>
  )
}

export function PopInBottom({ threshold = 0, mass = 1, tension = 180, friction = 12, children }: bounceConfig) {
  const [ref, inView] = useInView({
    threshold
  });

  const { opacity } = useSpring({
    opacity: inView ? 1 : 0,
  });

  const { transform } = useSpring({
    transform: inView ? `translate3d(0, 0, 0) scale(1)` : `translate3d(0, -50px, 0) scale(0.8)`,
    config: {
      mass,
      tension,
      friction,
    }
  });

  return (
    <animated.div
      style={{
        opacity: opacity,
        transform
      }}
      ref={ref}
    >
      {children}
    </animated.div>
  )
}