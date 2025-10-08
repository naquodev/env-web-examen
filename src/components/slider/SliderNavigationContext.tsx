import { createContext, useContext } from "react";
import type { ReactNode } from "react";

export type SliderNavigationContextValue = {
  activeSlideId: string;
  goToSlideId: (slideId: string) => void;
};

const SliderNavigationContext = createContext<SliderNavigationContextValue | null>(null);

export function SliderNavigationProvider({
  value,
  children,
}: {
  value: SliderNavigationContextValue;
  children: ReactNode;
}) {
  return (
    <SliderNavigationContext.Provider value={value}>
      {children}
    </SliderNavigationContext.Provider>
  );
}

export function useSliderNavigation() {
  const context = useContext(SliderNavigationContext);
  if (!context) {
    return {
      activeSlideId: "",
      goToSlideId: () => {
        /* no-op */
      },
    };
  }
  return context;
}
