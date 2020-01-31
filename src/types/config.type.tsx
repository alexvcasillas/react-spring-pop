import { ElementType } from "react";

export type genericConfig = {
  element?: ElementType,
  once?: boolean,
  [x: string]: any,
};

export type fadeConfig = {
  threshold?: number,
  [x: string]: any,
};

export type bounceConfig = {
  threshold?: number,
  tension?: number,
  friction?: number,
  mass?: number,
  [x: string]: any,
};