import { createContext } from "react";
import type { useSelect } from "./useSelect";

export type SelectContextValue = ReturnType<typeof useSelect> & {
  referenceRef: (node: HTMLElement | null) => void;
  floatingRef: (node: HTMLElement | null) => void;
  floatingStyles: React.CSSProperties;
};

export const SelectContext = createContext<SelectContextValue | null>(null);