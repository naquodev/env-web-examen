import type { FC } from "react";

export type SlideComponentProps = {
  index: number;
  total: number;
};

export type SlideComponent = FC<SlideComponentProps> & {
  slideId: string;
  bulletLabel: string;
  glow: string;
  glowAlt: string;
};
