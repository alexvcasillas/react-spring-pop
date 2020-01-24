import * as React from "react";
import { animated, useSpring } from "react-spring";
import { useObserver } from '@alexvcasillas/use-observer';
import { genericConfig, bounceConfig } from "../types/config.type";

export function PopIn({ threshold = 0, mass = 1, tension = 180, friction = 12, element = 'div', children, ...rest }: genericConfig & bounceConfig) {
  const { inView, ref } = useObserver({ threshold });
  
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

  return React.createElement(animated(element), {
    ...rest,
    style: {
      ...rest.style,
      opacity: opacity,
      transform: scale.interpolate(scale => `scale(${scale})`)
    },
    ref,
  }, children);
}

export function PopInLeft({ threshold = 0, mass = 1, tension = 180, friction = 12, element = 'div', children, ...rest }: genericConfig & bounceConfig) {
  const { inView, ref } = useObserver({ threshold });
  
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

  return React.createElement(animated(element), {
    ...rest,
    style: {
      ...rest.style,
      opacity,
      transform,
    },
    ref,
  }, children);
}

export function PopInRight({ threshold = 0, mass = 1, tension = 180, friction = 12, element = 'div', children, ...rest }: genericConfig & bounceConfig) {
  const { inView, ref } = useObserver({ threshold });

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

  return React.createElement(animated(element), {
    ...rest,
    style: {
      ...rest.style,
      opacity,
      transform,
    },
    ref,
  }, children);
}

export function PopInTop({ threshold = 0, mass = 1, tension = 180, friction = 12, element = 'div', children, ...rest }: genericConfig & bounceConfig) {
  const { inView, ref } = useObserver({ threshold });

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

  return React.createElement(animated(element), {
    ...rest,
    style: {
      ...rest.style,
      opacity,
      transform,
    },
    ref,
  }, children);
}

export function PopInBottom({ threshold = 0, mass = 1, tension = 180, friction = 12, element = 'div', children, ...rest }: genericConfig & bounceConfig) {
  const { inView, ref } = useObserver({ threshold });

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

  return React.createElement(animated(element), {
    ...rest,
    style: {
      opacity,
      transform,
    },
    ref,
  }, children);
}