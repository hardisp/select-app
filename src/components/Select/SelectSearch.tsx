import { useEffect, useRef } from "react";
import { useSelectContext } from "../../hooks/useSelectContext";
type SelectSearchProps = {
  clearIcon?: React.ReactNode;
  searchIcon?: React.ReactNode;
  clear?: boolean;
};
export function SelectSearch({
  clearIcon,
  searchIcon,
  clear,
}: SelectSearchProps) {
  const { search, setSearch, isOpen } = useSelectContext();
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      ref.current?.focus();
    }
  }, [isOpen]);

  return (
    <div>
      {searchIcon && <div>{searchIcon}</div>}
      <div>
        <input
          ref={ref}
          role="textbox"
          aria-autocomplete="list"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
      </div>
      {clear && (
        <button
          type="button"
          className="hrdi-search-btn-clear"
          onClick={() => setSearch("")}
        >
          {clearIcon ?? <div className="hrdi-search-clear-icon">x</div>}
        </button>
      )}
    </div>
  );
}
