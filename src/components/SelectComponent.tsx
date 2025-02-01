import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { SelectComponentProps } from "@/types";

const SelectComponent = ({ items, placeholder, className } : SelectComponentProps) => {
  return (
    <Select>
      <SelectTrigger className={className || "w-[180px] bg-lightGray"}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;