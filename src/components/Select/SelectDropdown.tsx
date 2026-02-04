import { useId } from "react";
import { useSelectContext } from "./useSelectContext";
import { Portal } from "./Portal";

export function SelectDropdown({
  children,
  portal = true,
}: {
  children: React.ReactNode;
  portal?: boolean;
}) {
  const {
    isOpen,
    floatingRef,
    floatingStyles,
  } = useSelectContext();

  const listboxId = useId();

  if (!isOpen) return null;

  const content = (
    <div
      ref={floatingRef}
      id={listboxId}
      role="listbox"
      style={floatingStyles}
    >
      {children}
    </div>
  );

  return portal ? <Portal>{content}</Portal> : content;
}
