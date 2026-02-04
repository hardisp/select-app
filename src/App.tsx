import { useState } from "react";
import {
  SelectDropdown,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectSearch,
  SelectOption,
  type SelectOptionProps,
} from "./components";
const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option with icon" },
  { value: "3", label: "Long Option 3" },
];
function App() {
  const [value, setValue] = useState<
    SelectOptionProps | SelectOptionProps[] | undefined
  >(undefined);
  return (
    <>
      <div>
        <SelectRoot
          options={options}
          value={value}
          onChange={setValue}
          multiple
          searchable
          zIndex={3000}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>

          <SelectDropdown portal>
            <SelectSearch />
            {options.map((opt, i) => (
              <SelectOption index={i}  key={opt.value} option={opt} />
            ))}
          </SelectDropdown>
        </SelectRoot>
      </div>
    </>
  );
}
 
export default App;
