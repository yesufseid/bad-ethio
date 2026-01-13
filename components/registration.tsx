"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { ArrowRight, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner" 
import { registerAction } from "@/app/actions/register"

const formSchema = z.object({
  fullName: z.string().regex(/^[A-Za-z\s\-']{3,100}$/, "Enter a valid name (3-100 characters, letters, spaces, hyphens, or apostrophes)."),
  email: z.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter a valid university email."),
  phone: z.string().regex(/^\+251[1-9]\d{8}$/, "Enter a valid Ethiopian phone number (start with +251)."),
  university: z.string().min(1, "Select your university."),
  otherUniversity: z.string().optional(),
  department: z.string().regex(/^[A-Za-z\s\-]{5,50}$/, "Enter a valid department/major (5-50 characters)."),
  year: z.string().min(1, "Select your year of study."),
  participationType: z.enum(["solo", "team"], {
    required_error: "Select participation type.",
  }),
  teamName: z.string().optional(),
  teamMember1: z.string().email("Enter a valid email.").optional().or(z.literal("")),
  teamMember2: z.string().email("Enter a valid email.").optional().or(z.literal("")),
  teamMember3: z.string().email("Enter a valid email.").optional().or(z.literal("")),
  agreement: z.boolean().refine((val) => val === true, "Agree to terms to proceed."),
  github: z.string().url("Enter a valid GitHub URL.").optional().or(z.literal("")),
  linkedin: z.string().url("Enter a valid LinkedIn URL.").optional().or(z.literal("")),
}).superRefine((data, ctx) => {
  if (data.university === "Other") {
    if (!data.otherUniversity || !/^[A-Za-z\s]{5,50}$/.test(data.otherUniversity)) { 
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Enter a valid university name (5-50 characters, alphabetic).",
        path: ["otherUniversity"],
      })
    }
  }
  if (data.participationType === "team") {
    if (!data.teamName || !/^[A-Za-z0-9\s]{3,50}$/.test(data.teamName)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Enter a valid team name (3-50 characters).",
        path: ["teamName"],
      })
    }
  }
})

export default function Registration() {
  const [submitted, setSubmitted] = useState(false)
  const [success, setSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "+251",
      university: "",
      otherUniversity: "",
      department: "",
      year: "",
      participationType: "solo",
      teamName: "",
      teamMember1: "",
      teamMember2: "",
      teamMember3: "",
      agreement: false,
      github: "",
      linkedin: "",
    },
  })

  const participationType = form.watch("participationType")
  const university = form.watch("university")

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitted(true)
    try {
      const result = await registerAction(values)
      if (!result.ok) throw new Error("message" in result ? result.message : "Submission failed")

      toast.success("Registration submitted successfully!")
      form.reset()
      setSuccess(true)
    } catch (e: any) {
      toast.error(e.message || "Submission failed");
    } finally {
      setSubmitted(false);
    }
  }

  return (
    <section id="register" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 gradient-accent" />

      <div className="relative max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Join BlockFest Ethiopia 2026</h2>
          <p className="text-lg text-foreground/80 animate-fade-in">
            Register for our 7-day university blockchain week.
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 md:p-8 shadow-xl animate-slide-up">
          {success ? (
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-semibold text-white">You have registered successfully</h3>
              <p className="text-foreground/80">
                We’ll send you updates, schedule, and mentor information.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  type="button"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => setSuccess(false)}
                >
                  Register another
                </Button>
              </div>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Abebe Bikila" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="student@aau.edu.et" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+251..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="year"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Year of Study</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">1st Year</SelectItem>
                            <SelectItem value="2">2nd Year</SelectItem>
                            <SelectItem value="3">3rd Year</SelectItem>
                            <SelectItem value="4">4th Year</SelectItem>
                            <SelectItem value="5">5th Year</SelectItem>
                            <SelectItem value="masters">Masters</SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Academic Information */}
              <div className="space-y-4">
               <h3 className="text-xl font-semibold text-white">Academic Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                   <FormField
                    control={form.control}
                    name="university"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>University</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select university" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Addis Ababa University">Addis Ababa University</SelectItem>
                            <SelectItem value="Addis Ababa Science and Technology University">AASTU</SelectItem>
                            <SelectItem value="Adama Science and Technology University">ASTU</SelectItem>
                            <SelectItem value="Jimma University">Jimma University</SelectItem>
                            <SelectItem value="Bahir Dar University">Bahir Dar University</SelectItem>
                            <SelectItem value="Mekelle University">Mekelle University</SelectItem>
                            <SelectItem value="Hawassa University">Hawassa University</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {university === "Other" && (
                    <FormField
                      control={form.control}
                      name="otherUniversity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Specify University</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your university name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </div>
                
                 <FormField
                    control={form.control}
                    name="department"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Department/Major</FormLabel>
                        <FormControl>
                          <Input placeholder="Computer Science" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
              </div>

               {/* Socials */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Socials (Optional)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="github"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>GitHub Profile</FormLabel>
                        <FormControl>
                          <Input placeholder="https://github.com/..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="linkedin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>LinkedIn Profile</FormLabel>
                        <FormControl>
                          <Input placeholder="https://linkedin.com/in/..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Participation Type */}
               <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Participation</h3>
                <FormField
                  control={form.control}
                  name="participationType"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>How are you participating?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-4"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="solo" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Solo
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="team" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Team
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {participationType === "team" && (
                  <div className="space-y-4 p-4 border border-border rounded-lg bg-background/50">
                    <FormField
                      control={form.control}
                      name="teamName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Team Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Crypto Warriors" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="space-y-2">
                      <FormLabel>Team Members (Emails)</FormLabel>
                      <FormField
                        control={form.control}
                        name="teamMember1"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Member 1 Email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                        control={form.control}
                        name="teamMember2"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Member 2 Email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                        control={form.control}
                        name="teamMember3"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Member 3 Email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Agreement */}
              <FormField
                control={form.control}
                name="agreement"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I agree to the terms and conditions.
                      </FormLabel>
                      <FormDescription>
                        You agree to our Code of Conduct and Participation Rules.
                      </FormDescription>
                       <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                disabled={submitted}
              >
                {submitted ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Register Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  )
}
