import * as React from "react";
import { animated, useSpring } from "react-spring";
import { useObserver } from '@alexvcasillas/use-observer';
import { bounceConfig } from "../types/config.type";

export function BounceInLeft({ threshold = 0, mass = 1, tension = 180, friction = 12, children }: bounceConfig) {
  const { inView, ref } = useObserver({ threshold });
  
  const { opacity } = useSpring({
    opacity: inView ? 1 : 0,
  });

  const { x } = useSpring({
    x: inView ? 0 : -10,
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
        transform: x.interpolate(x => `translate3d(${x}px, 0, 0)`)
      }}
      ref={ref}
    >
        {children}
    </animated.div>
  )
}

export function BounceInRight({ threshold = 0, mass = 1, tension = 180, friction = 12, children }: bounceConfig) {
  const { inView, ref } = useObserver({ threshold });

  const { opacity } = useSpring({
    opacity: inView ? 1 : 0,
  });

  const { x } = useSpring({
    x: inView ? 0 : 10,
    config: {
      mass,
      tension,
      friction
    }
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

export function BounceInTop({ threshold = 0, mass = 1, tension = 180, friction = 12, children }: bounceConfig) {
  const { inView, ref } = useObserver({ threshold });

  const { opacity } = useSpring({
    opacity: inView ? 1 : 0,
  });

  const { y } = useSpring({
    y: inView ? 0 : -10,
    config: {
      mass,
      tension,
      friction
    }
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

export function BounceInBottom({ threshold = 0, mass = 1, tension = 180, friction = 12, children }: bounceConfig) {
  const { inView, ref } = useObserver({ threshold });

  const { opacity } = useSpring({
    opacity: inView ? 1 : 0,
  });

  const { y } = useSpring({
    y: inView ? 0 : 10,
    config: {
      mass,
      tension,
      friction
    }
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