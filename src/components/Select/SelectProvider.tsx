import { SelectContext, type SelectContextValue } from "./SelectContext";

export function SelectProvider({
  value,
  children,
}: {
  value: SelectContextValue;
  children: React.ReactNode;
}) {
  return (
    <SelectContext.Provider value={value}>
      {children}
    </SelectContext.Provider>
  );
}
