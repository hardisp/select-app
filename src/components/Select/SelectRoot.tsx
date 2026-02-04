import { useOutsideClick } from "../../hooks/useOutsideClick";
import { SelectProvider } from "./SelectProvider";
import { useSelect, type UseSelectProps } from "../../hooks/useSelect";
import { useSelectFloating, type FloatingPlacement } from "../../hooks/useSelectFloating";

export function SelectRoot({
  children,
  placement,
  ...props
}: UseSelectProps & {
  children: React.ReactNode;
  placement?: FloatingPlacement;
  zIndex?: number;
}) {
  const select = useSelect(props);

  const floating = useSelectFloating({
    placement,
    zIndex: props.zIndex,
  });

  useOutsideClick(
    [
      { current: floating.refs.reference.current },
      { current: floating.refs.floating.current },
    ],
    () => select.close(),
    select.isOpen
  );

  return (
    <SelectProvider
      value={{
        ...select,
        referenceRef: floating.refs.setReference,
        floatingRef: floating.refs.setFloating,
        floatingStyles: floating.floatingStyles,
      }}
    >
      {" "}
      {children}
    </SelectProvider>
  );
}
