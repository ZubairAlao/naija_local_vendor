import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";
import { convertFileToUrl } from "@/lib/utils";

interface ReviewComponentProps {
  goToStep: (step: number) => void;
}

const ReviewComponent = ({goToStep} : ReviewComponentProps) => {
  const { watch } = useFormContext();
  const allValues = watch();

  const firstStep = ["full_name", "email", "phone_number", "password", "confirm_password"];
  const secondStep = ["sex", "birth_date", "avatar_url"];
  const thirdStep = ["admin_password", "guarantor_name", "role", "guarantor_address", "website", "market_address", "address"];
  const fourthStep = ["business_name", "business_account_name", "bank_name","bank_account_number"];

  // Function to format labels (convert snake_case to Title Case)
  const formatLabel = (field: string) => {
    return field
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  // Function to format values dynamically
  const formatValue = (field: string, value: any) => {
    if (["password", "confirm_password", "admin_password"].includes(field)) {
      return "*******";
    }

    if (field === "birth_date" && value) {
      const date = new Date(value);
      return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    }

    if (field === "avatar_url" && Array.isArray(value) && value.length > 0) {
      const imageUrl = convertFileToUrl(value[0]);
      return (
        <img
          src={imageUrl}
          alt="User Avatar"
          className="max-h-[100px] w-fit rounded-lg object-cover"
        />
      );
    }

    return value || "N/A";
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("register-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  return (
    <div className="text-sm space-y-10">
      <h2 className="text-2xl font-bold text-primary">Review Your Selections</h2>

      {/* Personal Information */}
      <div className="space-y-2">
        <h1 className="font-bold text-xl">Personal Information</h1>
        {firstStep.map((item) => (
          <div key={item} className="flex justify-between items-start">
            <p className="font-semibold">{formatLabel(item)}:</p>
            <p>{formatValue(item, allValues[item])}</p>
          </div>
        ))}
        <div className="flex justify-center">
        <Button variant="secondary" type="button" onClick={() => goToStep(1)}>Edit</Button>
        </div>
      </div>

      {/* Step 2 - Additional Info */}
      <div className="space-y-2">
        <h1 className="font-bold text-xl">Additional Information</h1>
        {secondStep.map((item) => (
          <div key={item} className="flex justify-between items-start">
            <p className="font-semibold">{formatLabel(item)}:</p>
            <p>{formatValue(item, allValues[item])}</p>
          </div>
        ))}
        <div className="flex justify-center">
          <Button variant="secondary" type="button" onClick={() => goToStep(2)}>Edit</Button>
        </div>
      </div>

      {/* Step 3 - Business Info */}
      <div className="space-y-2">
        <h1 className="font-bold text-xl">Business Information</h1>
        {thirdStep.map((item) => (
          <div key={item} className="flex justify-between items-start">
            <p className="font-semibold">{formatLabel(item)}:</p>
            <p>{formatValue(item, allValues[item])}</p>
          </div>
        ))}
        <div className="flex justify-center">
          <Button variant="secondary" type="button" onClick={() => goToStep(3)}>Edit</Button>
        </div>
      </div>

      {/* Step 4 - Bank Details */}
      <div className="space-y-2">
        <h1 className="font-bold text-xl">Bank Details</h1>
        {fourthStep.map((item) => (
          <div key={item} className="flex justify-between items-start">
            <p className="font-semibold">{formatLabel(item)}:</p>
            <p>{formatValue(item, allValues[item])}</p>
          </div>
        ))}
        <div className="flex justify-center">
        <Button
          variant="secondary"
          type="button"
          onClick={() => {
            goToStep(4);
            scrollToForm();
          }}
        >
          Edit
        </Button>
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;
