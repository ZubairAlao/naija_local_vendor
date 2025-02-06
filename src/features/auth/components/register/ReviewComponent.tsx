import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";

const ReviewComponent = () => {
  const { watch } = useFormContext(); 
  const allValues = watch();
  const firstStep = ["full_name", "email", "phone_number", "password", "confirm_password"]
  const secondStep = ["sex", "birthDate", "avatar_url"]
  const thirdStep =  ["admin_password", "guarantor_name", "role", "guarantor_address", "website", "market_address", "address"]
  const fourthStep = ["bank_account_number", "bank_name", "bank_account_number","bank_name"]

  const formatLabel = (field: string) => {
    // Convert snake_case to Title Case with spaces
    return field
      .replace(/_/g, ' ')  // Replace underscores with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase());  // Capitalize first letter of each word
  };

  const formatValue = (field: string, value: string) => {
    // Dynamically hide password fields by replacing their value with asterisks
    if (field === "password" || field === "confirm_password" || field === "admin_password") {
      return "*******"; // Mask password fields
    }
    return value; // Show value for other fields
  };
  return (
    <div className="text-sm">
      <h2 className="text-2xl font-bold text-primary">Review Your Selections</h2>
      <div className="space-y-1">
        <h1>Personal Information</h1>
        {firstStep.map((item) => (
          <div key={item} className="flex justify-between items-center">
            <p>{formatLabel(item)}</p> 
            <p>{formatValue(item, allValues[item])}</p>
            <Button variant="secondary">
              Edit
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewComponent;
