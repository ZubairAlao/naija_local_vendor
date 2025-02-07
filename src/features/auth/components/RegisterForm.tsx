import { userSchema } from "@/types/schemaValidation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import CustomFormField from "@/components/CustomFormField";
import { E164Number } from "libphonenumber-js/core"
import { useForm } from "react-hook-form"
import { z } from "zod"
import SubmitButton from "@/components/SubmitButton"
import { useToast } from "@/hooks/use-toast"
import PhoneInput from 'react-phone-number-input'
import "react-phone-number-input/style.css";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import FileUploader from "@/components/FileUploader";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReviewComponent from "./register/ReviewComponent";

const steps = ["1", "2", "3", "4", "5"];

const RegisterForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast()
    const [step, setStep] = useState(1);
    const form = useForm<z.infer<typeof userSchema>>({
        resolver: zodResolver(userSchema),
        defaultValues: {
          username: "",
          full_name: "",
          email: "",
          phone_number: "",
          password: "",
          confirm_password:"",
          
          sex: "other",
          birth_date: new Date(Date.now()),
          avatar_url: [],
          
          role: "",
          address: "",
          guarantor_name: "",
          guarantor_address: "",
          market_address: "",
          website: "https://example.com",
          admin_password: "",
          

          business_name: "",
          business_account_name: "",
          bank_account_number: "",
          bank_name: "",
        },
      })
      const { control, setValue } = form;
    const selectedRole = form.watch("role");
    console.log(selectedRole);

    const scrollToForm = () => {
      const element = document.getElementById("register-form");
      const offset = 150;
      if (element) {
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: "smooth", // Enables smooth scrolling
        });
      }
    };
    
    function onSubmit(values: z.infer<typeof userSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      setIsLoading(true);

      setTimeout(() => {
        console.log(values); 
        setIsLoading(false);
        toast({ title: "Login Successful.", description: "Your login was successful." });
      }, 3000);
    }

      const fieldsToValidate: Record<number, (keyof z.infer<typeof userSchema>)[]> = {
        1: ["full_name", "email", "phone_number", "password", "confirm_password"],
        2: ["sex", "birth_date", "avatar_url"],
        3: ["admin_password", "guarantor_name", "role", "guarantor_address", "website", "market_address", "address"],
        4: ["business_name", "business_account_name", "bank_name","bank_account_number"],
      };
      
      const nextStep = async () => {
        const fieldsToTrigger = fieldsToValidate[step] || [];
        const isValid = await form.trigger(fieldsToTrigger, { shouldFocus: true });
      
        if (isValid) {
          console.log("Current Form Values:", form.getValues());
          scrollToForm();
          setStep((prev) => prev + 1);
        } else {
          console.log("Errors:", form.formState.errors);
          console.log("Current Form Values:", form.getValues());
        }
      };
      const prevStep = () => {
        setStep((prev) => prev - 1);
        scrollToForm();
      } 

  return (
    <div className="max-w-3xl mx-auto space-y-6" id="register-form">

      {/* Step Numbers */}
      <div className="flex justify-center items-center my-4 text-sm">
        {steps.map((num, index) => (
          <div key={num} className="flex items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold
                ${step > index + 1 ? "bg-green-600" : step === index + 1 ? "bg-secondary" : "bg-gray-300"}`}
            >
              {num}
            </motion.div>

            {/* Connecting Line (not for the last step) */}
            {index !== steps.length - 1 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "40px" }}
                transition={{ duration: 0.3 }}
                className={`h-1 mx-2 ${step > index + 1 ? "bg-green-600" : "bg-gray-300"}`}
              />
            )}
          </div>
        ))}
      </div>


    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        
        <div className="space-y-4">
          {/* Step 1: Personal Details */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="flex ~gap-4/8 justify-between items-center">
                  <CustomFormField control={form.control} name="full_name" label="Full Name" placeholder="Code Smith" />
                  <CustomFormField control={form.control} name="email" label="Email" type="email" placeholder="CodeSmith@gmail.com" />
                  <FormField
                    control={form.control}
                    name="phone_number"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel className="block w-full">Phone Number</FormLabel>
                        <FormControl>
                          <PhoneInput
                            {...field}
                            defaultCountry="NG"
                            placeholder="+234 81300 30 894"
                            international
                            withCountryCallingCode
                            value={field.value as E164Number | undefined}
                            onChange={(value) => field.onChange(value || "")}
                            className="PhoneInput"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-between items-center gap-4">
                  <CustomFormField control={form.control} name="password" label="Password" type="password" placeholder="*******" />
                  <CustomFormField control={form.control} name="confirm_password" label="Password" type="password" placeholder="*******" />
                </div>
              </div>
            )}

            {/* Step 2: Other Details Setup */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="flex ~gap-4/8 justify-between items-center">
                  <FormField
                    control={form.control}
                    name="sex"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sex</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex space-x-4"
                          >
                            {["male", "female", "other"].map((sex) => (
                              <FormItem key={sex} className="flex items-center space-x-2">
                                <RadioGroupItem id={sex} value={sex} />
                                <FormLabel htmlFor={sex} className="font-normal pb-2 capitalize cursor-pointer">{sex}</FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="birth_date" 
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="block">Date of Birth</FormLabel>
                        <FormControl>
                          <DatePicker
                            selected={field.value} 
                            onChange={(date) => field.onChange(date)}
                            dateFormat="MM/dd/yyyy"
                            showTimeSelect={false}
                            timeInputLabel="Time:"
                            wrapperClassName="date-picker"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                  <FormField
                    control={control}
                    name="avatar_url"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Profile Picture</FormLabel>
                        <FormControl>
                          <FileUploader
                            files={field.value} onChange={field.onChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              </div>
            )}

            {/* Step 3: Business location and role */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="flex ~gap-4/8 justify-between items-center">
                  <CustomFormField control={form.control} name="website" label="Website" placeholder="https://example.com" />
                  <CustomFormField control={form.control} name="address" label="Address" placeholder="Your Address" />
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Role</FormLabel>
                        <Select
                          onValueChange={(value) => {
                            field.onChange(value);
                            if (value === "vendor") {
                              setValue("admin_password", "");
                            } else if (value === "admin") {
                              setValue("market_address", "");
                              setValue("guarantor_name", "");
                              setValue("guarantor_address", "");
                            } else if (value === "customer") {
                              setValue("market_address", "");
                              setValue("admin_password", "");
                              setValue("guarantor_name", "");
                              setValue("guarantor_address", "");
                            }
                          }}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-[60px] rounded-[4rem]">
                              <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="vendor">Vendor</SelectItem>
                            <SelectItem value="customer">Customer</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                  {selectedRole === "vendor" && (
                    <div className="flex ~gap-4/8 justify-between items-center">
                      <CustomFormField control={form.control} name="market_address" label="Market Address" placeholder="Your Store Address" />
                      <CustomFormField control={form.control} name="guarantor_name" label="Guarantor Name" placeholder="Guarantor Name" />
                      <CustomFormField control={form.control} name="guarantor_address" label="Guarantor Address" placeholder="Guarantor Address" />
                    </div>
                  )}
                  {selectedRole === "admin" && (
                    <CustomFormField control={form.control} name="admin_password" label="Admin Password" type="password" placeholder="Enter Admin Password" />
                  )}
              </div>
            )}

            {/* Step 4: Bank Details */}
            {step === 4 && (
              <div className="space-y-4">
                <div className="flex ~gap-4/8 justify-between items-center">
                  <CustomFormField control={form.control} name="business_name" label="Business Name" placeholder="Rusell Holdings" />
                  <CustomFormField control={form.control} name="business_account_name" label="Bank Account Name" placeholder="Code Smith" />
                </div>
                <div className="flex ~gap-4/8 justify-between items-center">
                  <CustomFormField control={form.control} name="bank_name" label="Bank Name" placeholder="Your Bank Name" />
                  <CustomFormField control={form.control} name="bank_account_number" type="number" label="Bank Account Number" placeholder="1234567890" />
                </div>
              </div>
            )}

            {step === 5 && <ReviewComponent goToStep={setStep} />}
        </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-8">
            {step > 1 && (
              <Button variant="greenButton" type="button" className="min-w-28" onClick={prevStep}>
                Previous
              </Button>
            )}
            {step < steps.length ? (
              <Button variant="greenButton" type="button" className="min-w-28" onClick={nextStep}>
                Next
              </Button>
            ) : (
              <SubmitButton isLoading={isLoading} onClick={() => {
                toast({
                  title: "Registration Successful.",
                  description: "Your registration was successful.",
                })
              }}>Submit</SubmitButton>
            )}
          </div>
      </form>
    </Form>
    </div>
  )
}

export default RegisterForm