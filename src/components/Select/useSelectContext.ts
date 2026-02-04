import { useContext } from "react";
import { SelectContext, type SelectContextValue } from "./SelectContext";


export function useSelectContext() {
    const ctx = useContext(SelectContext);
    if (!ctx) {
        throw new Error("Select components must be inside <SelectRoot>");
    }
    return ctx as SelectContextValue;
}
 
