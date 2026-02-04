import { useSelectContext } from "./useSelectContext";

export function SelectTrigger({ children }: { children: React.ReactNode }) {
  const { toggle, isOpen, referenceRef, highlightedIndex } = useSelectContext();

  return (
    <div
      ref={referenceRef}
      role="combobox"
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-activedescendant={
        highlightedIndex !== null
          ? `select-option-${highlightedIndex}`
          : undefined
      }
      tabIndex={0}
      onClick={toggle}
    >
      {children}
    </div>
  );
}
