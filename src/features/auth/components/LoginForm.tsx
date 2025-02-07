import { loginSchema } from "@/types/schemaValidation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import {
  Form,
} from "@/components/ui/form"
import CustomFormField from "@/components/CustomFormField";
import { useForm } from "react-hook-form"
import { z } from "zod"
import SubmitButton from "@/components/SubmitButton"
import { useToast } from "@/hooks/use-toast"




const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast()

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
          email: "",
          password: ""
        },
      })

      function onSubmit(values: z.infer<typeof loginSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        setIsLoading(true)

        setTimeout(() => {
          console.log(values); // This will now execute after 3 seconds
          setIsLoading(false);
        }, 3000);
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        <div className="space-y-4">
          <CustomFormField control={form.control} name="email" label="Email" placeholder="Enter Email" />
          <CustomFormField control={form.control} name="password" label="Password" type="password" placeholder="*******" />
        </div>
        <SubmitButton
          isLoading={isLoading} 
          children={"submit"} 
          onClick={() => {
            toast({
              title: "Login Successful.",
              description: "Your login was successful.",
            })
          }}
          />
      </form>
    </Form>
  )
}

export default LoginForm