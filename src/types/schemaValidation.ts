import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6)
})


export const userSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters").max(30, "Username is too long").optional(),
  full_name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  phone_number: z.string().regex(/^\+?[1-9]\d{0,2}[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/, "Invalid phone number format"),
  password: z.string().min(6),
  confirm_password: z.string().min(6),
  
  
  birth_date: z.coerce.date().refine(date => date < new Date(), {
    message: "Birthdate must be in the past",
  }),
  avatar_url: z.custom<File[]>().optional(),
  sex: z.enum(["male", "female", "other"]),
  
  role: z.string().min(2, "Select at least one role"),
  admin_password: z.string().optional(),
  address: z.string().min(5, "Address must be more descriptive"),
  market_address: z.string().optional(),
  guarantor_name: z.string().optional(),
  guarantor_address:z.string().optional(),
  website: z.string().url("Invalid website URL").optional(),
  
  business_name: z.string().min(2, "Business name must be at least 2 characters").optional(),
  business_account_name: z.string().min(2, "Business account name must be at least 2 characters").optional(),
  bank_account_number: z.string().regex(/^\d{10}$/, "Invalid bank account number").optional(),
  bank_name: z.string().optional(),
}).refine((data) => data.password === data.confirm_password, {
  message: "Passwords do not match",
  path: ["confirm_password"],
}).refine((data) => {
  if (data.role === "vendor") {
    return data.market_address && data.guarantor_name && data.guarantor_address;
  }
  return true;
}, {
  message: "Market Address, Guarantor Name, and Guarantor Address are required for vendors",
  path: ["market_address"],
}).refine((data) => {
  if (data.role === "admin" && !data.admin_password) {
    return false;
  }
  return true;
}, {
  message: "Admin Password is required",
  path: ["admin_password"],
});
