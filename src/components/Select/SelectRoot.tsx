import { SelectProvider } from "./SelectProvider";
import { useSelect, type UseSelectProps } from "./useSelect";
import { useSelectFloating, type FloatingPlacement } from "./useSelectFloating";

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
