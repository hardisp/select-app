import type { ReferenceType } from "@floating-ui/react";
import { useEffect } from "react";

export function useOutsideClick(
    refs: React.RefObject<HTMLElement | ReferenceType | null>[],
    handler: () => void,
    enabled: boolean = true
) {
    useEffect(() => {
        if (!enabled) return;

        const listener = (event: MouseEvent | TouchEvent) => {
            const target = event.target as Node;

            const isInside = refs.some(ref => {
                const el = ref.current;
                return el && ('contains' in el ? el.contains(target) : false);
            });

            if (!isInside) {
                handler();
            }
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [refs, handler, enabled]);
}
