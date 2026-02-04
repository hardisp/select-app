import { useEffect } from "react";

export function useOutsideClick(
  refs: React.RefObject<HTMLElement | null>[],
  handler: () => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const target = event.target as Node;

      const clickedInside = refs?.some(
        ref => ref.current && ref.current.contains(target)
      );
      
      if (!clickedInside) {
        handler();
      }
    };

    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [refs, handler]);
}
