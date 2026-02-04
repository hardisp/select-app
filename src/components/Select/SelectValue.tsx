import { useSelectContext } from "./useSelectContext";

export function SelectValue({
  placeholder = "Select...",
  closeIcon
}: {
  placeholder?: string;
  closeIcon?: React.ReactNode;
}) {
  const { selected, remove } = useSelectContext();

  if (selected.length === 0) {
    return <span>{placeholder}</span>;
  }

  return (
    <>
      {selected.map(opt => (
        <span key={opt.value} className="hrdi-select-value-label">
          {opt.label}
          <button
            onClick={e => {
              e.stopPropagation();
              remove(opt);
            }}
            className="hrdi-select-value-btn-remove"
          >
            <span className="hrdi-select-value-btn-remove-icon">
              {closeIcon || "×"}
            </span>
          </button>
        </span>
      ))}
    </>
  );
}
