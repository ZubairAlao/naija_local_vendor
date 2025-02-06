import { Control } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface CustomFormFieldProps {
  control: Control<any>,
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}

const CustomFormField = ({ control, name, label, type = "text", placeholder } : CustomFormFieldProps) => {

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className="rounded-md flex-1">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input 
              type={type} 
              placeholder={placeholder} 
              {...field} 
              className="h-[60px] rounded-[4.375rem]  bg-gray-50" 
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
