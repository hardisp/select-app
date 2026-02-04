import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
} from "@floating-ui/react";

export type FloatingPlacement = "bottom-start" | "bottom-end";

export function useSelectFloating({
  placement = "bottom-start",
  zIndex = 2000,
}: {
  placement?: FloatingPlacement;
  zIndex?: number;
}) {
  const floating = useFloating({
    placement,
    middleware: [
      offset(4),
      flip(),
      shift({ padding: 8 }),
    ],
    whileElementsMounted: autoUpdate,
    
  });

  const floatingStyles = {
    position: floating.strategy,
    top: floating.y ?? 0,
    left: floating.x ?? 0,
    zIndex,
  };

  return {
    ...floating,
    floatingStyles,
  };
}
