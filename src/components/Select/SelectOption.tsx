import type { SelectOptionProps } from "./typeSelect";
import { useSelectContext } from "./useSelectContext";

export function SelectOption({
  option,
  index,
  children,
}: {
  option: SelectOptionProps;
  index: number;
  children?: React.ReactNode;
}) {
  const { select, isSelected, highlightedIndex, setHighlightedIndex } =
    useSelectContext();

  const selected = isSelected(option);
  const highlighted = highlightedIndex === index;

  return (
    <div
      id={`select-option-${index}`}
      role="option"
      aria-selected={selected}
      data-highlighted={highlighted}
      onMouseEnter={() => setHighlightedIndex(index)}
      onClick={() => select(option)}
    >
      {children ?? option.label}
    </div>
  );
}
