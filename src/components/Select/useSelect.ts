import { useState, useMemo } from "react";
import type { SelectOptionProps } from "./typeSelect";

export type UseSelectProps = {
  options: SelectOptionProps[];
  value?: SelectOptionProps | SelectOptionProps[];
  multiple?: boolean;
  searchable?: boolean;
  filterFn?: (opt: SelectOptionProps, search: string) => boolean;
  onChange: (value: SelectOptionProps | SelectOptionProps[]) => void;
};

export function useSelect({
  options,
  value,
  multiple = false,
  searchable = true,
  filterFn,
  onChange,
}: UseSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null); 

  const selected = useMemo(() => {
    if (!value) return [];
    return Array.isArray(value) ? value : [value];
  }, [value]);

  const filteredOptions = useMemo(() => {
    if (!searchable || !search) return options;
    return filterFn
      ? options.filter(o => filterFn(o, search))
      : options.filter(o =>
          o.label.toLowerCase().includes(search.toLowerCase())
        );
  }, [options, search, searchable, filterFn]);

  const isSelected = (opt: SelectOptionProps) =>
    selected.some(s => s.value === opt.value);

  const select = (opt: SelectOptionProps) => {
    if (multiple) {
      const exists = isSelected(opt);
      const newValue = exists
        ? selected.filter(s => s.value !== opt.value)
        : [...selected, opt];
      onChange(newValue);
    } else {
      onChange(opt);
      setIsOpen(false);
    }
  };

  const remove = (opt: SelectOptionProps) => {
    if (!multiple) {
      onChange([]);
      return;
    }
    onChange(selected.filter(s => s.value !== opt.value));
  };

  return {
    // state
    isOpen,
    search,
    selected,
    options: filteredOptions,
    highlightedIndex,
    
    // actions
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen(v => !v),
    setSearch,
    select,
    remove,
    isSelected,
    setHighlightedIndex,

  };
}
