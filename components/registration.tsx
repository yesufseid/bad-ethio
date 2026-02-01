"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { ArrowRight, Loader2, User, Mail, Phone, GraduationCap, Github, Linkedin, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
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
  fullName: z.string().regex(/^[A-Za-z\s\-']{3,100}$/, "Enter a valid name (3-100 characters)."),
  email: z.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter a valid university email."),
  phone: z.string().regex(/^\+[1-9]\d{6,14}$/, "Enter a valid international phone number."),
  university: z.string().min(1, "Select your university."),
  otherUniversity: z.string().optional(),
  department: z.string().regex(/^[A-Za-z\s\-]{5,50}$/, "Enter a valid department (5-50 characters)."),
  year: z.string().min(1, "Select study year."),
  participationType: z.enum(["solo", "team"]),
  teamName: z.string().optional(),
  teamMember1: z.string().email("Enter a valid email.").optional().or(z.literal("")),
  teamMember2: z.string().email("Enter a valid email.").optional().or(z.literal("")),
  teamMember3: z.string().email("Enter a valid email.").optional().or(z.literal("")),
  agreement: z.boolean().refine((val) => val === true, "Agree to terms."),
  github: z.string().url("Enter a valid URL.").optional().or(z.literal("")),
  linkedin: z.string().url("Enter a valid URL.").optional().or(z.literal("")),
}).superRefine((data, ctx) => {
  if (data.university === "Other" && (!data.otherUniversity || data.otherUniversity.length < 5)) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Enter university name.", path: ["otherUniversity"] })
  }
  if (data.participationType === "team" && (!data.teamName || data.teamName.length < 3)) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Enter team name.", path: ["teamName"] })
  }
})
const countries = [
  { name: "Ethiopia", code: "+251", flag: "🇪🇹" },
  { name: "Kenya", code: "+254", flag: "🇰🇪" },
  { name: "Rwanda", code: "+250", flag: "🇷🇼" },
  { name: "Ghana", code: "+233", flag: "🇬🇭" },
  { name: "Nigeria", code: "+234", flag: "🇳🇬" },
  { name: "South Africa", code: "+27", flag: "🇿🇦" },
  { name: "Uganda", code: "+256", flag: "🇺🇬" },
  { name: "Tanzania", code: "+255", flag: "🇹🇿" },
  { name: "Egypt", code: "+20", flag: "🇪🇬" },
  { name: "USA", code: "+1", flag: "🇺🇸" },
  { name: "UK", code: "+44", flag: "🇬🇧" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "UAE", code: "+971", flag: "🇦🇪" },
  { name: "India", code: "+91", flag: "🇮🇳" },
]

export default function Registration() {
  const [submitted, setSubmitted] = useState(false)
  const [success, setSuccess] = useState(false)
  const [selectedCountryCode, setSelectedCountryCode] = useState("+251")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "", email: "", phone: "+251", university: "", otherUniversity: "",
      department: "", year: "", participationType: "solo", teamName: "",
      teamMember1: "", teamMember2: "", teamMember3: "", agreement: false,
      github: "", linkedin: ""
    },
  })

  const participationType = form.watch("participationType")
  const university = form.watch("university")

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitted(true)
    try {
      const result = await registerAction(values)
      if (!result.ok) throw new Error("message" in result ? result.message : "Submission failed")
      toast.success("Registration successful!")
      form.reset()
      setSuccess(true)
    } catch (e: any) {
      toast.error(e.message || "Submission failed");
    } finally {
      setSubmitted(false);
    }
  }

  return (
    <section id="register" className="py-32 px-4 sm:px-6 lg:px-8 bg-neutral-950 relative overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-none animate-slide-up">
            Start your <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent italic">Journey.</span>
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl font-light tracking-tight animate-fade-in">
            Join the largest Web3 community in Ethiopia.
          </p>
        </div>

        {success ? (
          <div className="bg-neutral-900 border border-white/5 rounded-[2.5rem] p-12 md:p-20 text-center space-y-6 animate-fade-in shadow-2xl">
            <div className="w-20 h-20 bg-linear-to-br from-green-500/20 to-cyan-500/20 border border-green-500/50 rounded-full flex-center mx-auto mb-6">
              <CheckCircle2 size={36} className="text-green-400" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter">You're on the list.</h3>
            <p className="text-neutral-400 text-lg font-light max-w-sm mx-auto leading-relaxed">
              Check your email for confirmation. We'll be in touch soon.
            </p>
            <Button
              type="button"
              variant="ghost"
              className="mt-8 text-neutral-500 hover:text-white transition-all font-bold"
              onClick={() => setSuccess(false)}
            >
              Register Another
            </Button>
          </div>
        ) : (
          <div className="bg-neutral-900/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:px-14 md:py-14 shadow-2xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">

                {/* Section: Identity */}
                <div className="space-y-10">
                  <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                    <span className="text-lg font-black text-purple-400/50">01</span>
                    <h3 className="text-xl font-black text-white tracking-tight uppercase">Identity</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <FormField control={form.control} name="fullName" render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-neutral-500 uppercase text-[10px] font-black tracking-widest flex items-center gap-2">Legal Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter full name" {...field} className="bg-white/5 border-white/5 rounded-xl h-14 text-lg px-4 focus-visible:ring-1 focus-visible:ring-purple-500/50 transition-all placeholder:text-white/10" />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500 font-bold" />
                      </FormItem>
                    )}
                    />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-neutral-500 uppercase text-[10px] font-black tracking-widest flex items-center gap-2">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="name@edu.et" {...field} className="bg-white/5 border-white/5 rounded-xl h-14 text-lg px-4 focus-visible:ring-1 focus-visible:ring-purple-500/50 transition-all placeholder:text-white/10" />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500 font-bold" />
                      </FormItem>
                    )}
                    />
                  </div>

                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-neutral-500 uppercase text-[10px] font-black tracking-widest flex items-center gap-2">Phone</FormLabel>
                      <div className="flex gap-2">
                        <Select
                          value={selectedCountryCode}
                          onValueChange={(val) => {
                            const prevCode = selectedCountryCode;
                            setSelectedCountryCode(val);
                            // Update phone field by replacing the prefix
                            const currentVal = field.value || "";
                            const phoneWithoutPrefix = currentVal.startsWith(prevCode)
                              ? currentVal.slice(prevCode.length)
                              : currentVal.replace(/^\+[0-9]+/, "");
                            field.onChange(val + phoneWithoutPrefix);
                          }}
                        >
                          <FormControl>
                            <SelectTrigger className="w-[110px] bg-white/5 border-white/5 rounded-xl h-14 text-sm focus:ring-1 focus:ring-purple-500/50 flex gap-2 items-center justify-center">
                              <div className="flex items-center gap-1.5 min-w-0 overflow-hidden">
                                <span className="text-xl shrink-0">{countries.find(c => c.code === selectedCountryCode)?.flag || "🌍"}</span>
                                <span className="font-bold shrink-0">{selectedCountryCode}</span>
                              </div>
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-neutral-900 border-white/10 text-white rounded-xl max-h-[300px] w-[240px]">
                            {countries.map((c, idx) => (
                              <SelectItem key={`${c.code}-${idx}`} value={c.code} className="hover:bg-white/5 focus:bg-white/5 transition-colors cursor-pointer py-3">
                                <span className="flex items-center gap-3 w-full">
                                  <span className="text-xl shrink-0">{c.flag}</span>
                                  <span className="flex-1 font-bold text-sm tracking-tight">{c.name}</span>
                                  <span className="text-neutral-500 text-[10px] font-black shrink-0">{c.code}</span>
                                </span>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormControl className="flex-1">
                          <Input
                            placeholder="912..."
                            value={field.value?.startsWith(selectedCountryCode) ? field.value.slice(selectedCountryCode.length) : field.value}
                            onChange={(e) => {
                              const val = e.target.value.replace(/[^0-9]/g, "");
                              field.onChange(selectedCountryCode + val);
                            }}
                            className="bg-white/5 border-white/5 rounded-xl h-14 text-lg px-4 focus-visible:ring-1 focus-visible:ring-purple-500/50 transition-all"
                          />
                        </FormControl>
                      </div>
                      <FormMessage className="text-xs text-red-500 font-bold" />
                    </FormItem>
                  )}
                  />
                </div>

                {/* Section: Academic */}
                <div className="space-y-10">
                  <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                    <span className="text-lg font-black text-purple-400/50">02</span>
                    <h3 className="text-xl font-black text-white tracking-tight uppercase">Academic</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <FormField control={form.control} name="university" render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-neutral-500 uppercase text-[10px] font-black tracking-widest">Campus</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/5 border-white/5 rounded-xl h-14 text-lg px-4 focus:ring-1 focus:ring-purple-500/50">
                              <SelectValue placeholder="University" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-neutral-900 border-white/10 text-white rounded-xl">
                            <SelectItem value="Addis Ababa University">AAU</SelectItem>
                            <SelectItem value="Addis Ababa Science and Technology University">AASTU</SelectItem>
                            <SelectItem value="Adama Science and Technology University">ASTU</SelectItem>
                            <SelectItem value="Jimma University">Jimma</SelectItem>
                            <SelectItem value="Bahir Dar University">Bahir Dar</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-xs text-red-500 font-bold" />
                      </FormItem>
                    )}
                    />
                    <FormField control={form.control} name="year" render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-neutral-500 uppercase text-[10px] font-black tracking-widest">Enrollment Year</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/5 border-white/5 rounded-xl h-14 text-lg px-4 focus:ring-1 focus:ring-purple-500/50">
                              <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-neutral-900 border-white/10 text-white rounded-xl">
                            <SelectItem value="1">1st Year</SelectItem>
                            <SelectItem value="2">2nd Year</SelectItem>
                            <SelectItem value="3">3rd Year</SelectItem>
                            <SelectItem value="4">4th Year</SelectItem>
                            <SelectItem value="5">5th Year</SelectItem>
                            <SelectItem value="masters">Masters</SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-xs text-red-500 font-bold" />
                      </FormItem>
                    )}
                    />
                  </div>
                  {university === "Other" && (
                    <FormField control={form.control} name="otherUniversity" render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-neutral-500 uppercase text-[10px] font-black tracking-widest">Enter Campus</FormLabel>
                        <FormControl>
                          <Input placeholder="University Name" {...field} className="bg-white/5 border-white/5 rounded-xl h-14 text-lg px-4 focus-visible:ring-1 focus-visible:ring-purple-500/50 transition-all" />
                        </FormControl>
                        <FormMessage className="text-xs text-red-500 font-bold" />
                      </FormItem>
                    )}
                    />
                  )}
                  <FormField control={form.control} name="department" render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-neutral-500 uppercase text-[10px] font-black tracking-widest">Major / Field</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Computer Science" {...field} className="bg-white/5 border-white/5 rounded-xl h-14 text-lg px-4 focus-visible:ring-1 focus-visible:ring-purple-500/50 transition-all" />
                      </FormControl>
                      <FormMessage className="text-xs text-red-500 font-bold" />
                    </FormItem>
                  )}
                  />
                </div>

                {/* Section: Presence */}
                <div className="space-y-10">
                  <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                    <span className="text-lg font-black text-purple-400/50">03</span>
                    <h3 className="text-xl font-black text-white tracking-tight uppercase">Foundations</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <FormField control={form.control} name="github" render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-neutral-500 uppercase text-[10px] font-black tracking-widest flex items-center gap-2">GitHub</FormLabel>
                        <FormControl>
                          <Input placeholder="github.com/username" {...field} className="bg-white/5 border-white/5 rounded-xl h-14 text-lg px-4 focus-visible:ring-1 focus-visible:ring-purple-500/50 transition-all" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                    />
                    <FormField control={form.control} name="linkedin" render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="text-neutral-500 uppercase text-[10px] font-black tracking-widest flex items-center gap-2">LinkedIn</FormLabel>
                        <FormControl>
                          <Input placeholder="linkedin.com/in/..." {...field} className="bg-white/5 border-white/5 rounded-xl h-14 text-lg px-4 focus-visible:ring-1 focus-visible:ring-purple-500/50 transition-all" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                    />
                  </div>
                </div>

                {/* Section: Mode */}
                <div className="space-y-10">
                  <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                    <span className="text-lg font-black text-purple-400/50">04</span>
                    <h3 className="text-xl font-black text-white tracking-tight uppercase">Protocol</h3>
                  </div>

                  <FormField control={form.control} name="participationType" render={({ field }) => (
                    <FormItem className="space-y-6">
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-2 gap-4 md:gap-8">
                          <FormItem className="relative">
                            <FormControl className="sr-only">
                              <RadioGroupItem value="solo" />
                            </FormControl>
                            <FormLabel className={`flex flex-col items-center justify-center p-8 rounded-[2.5rem] border transition-all cursor-pointer ${field.value === "solo" ? "border-purple-500 bg-purple-500/5 text-white" : "border-white/5 bg-white/5 text-neutral-500 hover:border-white/10 hover:text-neutral-300"}`}>
                              <User size={24} className="mb-2" />
                              <span className="text-sm font-black tracking-tight uppercase">Solo Builder</span>
                            </FormLabel>
                          </FormItem>
                          <FormItem className="relative">
                            <FormControl className="sr-only">
                              <RadioGroupItem value="team" />
                            </FormControl>
                            <FormLabel className={`flex flex-col items-center justify-center p-8 rounded-[2.5rem] border transition-all cursor-pointer ${field.value === "team" ? "border-cyan-500 bg-cyan-500/5 text-white" : "border-white/5 bg-white/5 text-neutral-500 hover:border-white/10 hover:text-neutral-300"}`}>
                              <User size={24} className="mb-2" />
                              <span className="text-sm font-black tracking-tight uppercase">Team Protocol</span>
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                  />

                  {participationType === "team" && (
                    <div className="space-y-8 animate-fade-in p-6 md:p-12 rounded-[2.5rem] bg-white/5 border border-white/5">
                      <FormField control={form.control} name="teamName" render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-neutral-500 uppercase text-[10px] font-black tracking-widest">Protocol Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter team name" {...field} className="bg-transparent border-0 border-b border-white/10 rounded-none h-12 text-xl px-0 focus-visible:ring-0 focus-visible:border-cyan-400 transition-all font-black" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                      />
                      <div className="space-y-8">
                        <FormLabel className="text-neutral-500 uppercase text-[10px] font-black tracking-widest block">Contributors</FormLabel>
                        <div className="grid gap-6">
                          {[1, 2, 3].map((num) => (
                            <FormField key={num} control={form.control} name={`teamMember${num}` as any} render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Input placeholder={`Member ${num} Email`} {...field} className="bg-transparent border-0 border-b border-white/10 rounded-none h-10 text-lg px-0 focus-visible:ring-0 focus-visible:border-cyan-400 transition-all font-light" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )} />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Section: Finalize */}
                <div className="space-y-10 pt-16 border-t border-white/5">
                  <FormField control={form.control} name="agreement" render={({ field }) => (
                    <FormItem className="flex items-center space-x-3 space-y-0 p-6 rounded-[2.5rem] bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} className="h-5 w-5 rounded border-white/20 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500" />
                      </FormControl>
                      <div className="space-y-1">
                        <FormLabel className="text-base font-bold text-neutral-300 cursor-pointer italic">I accept the high-stakes building environment.</FormLabel>
                      </div>
                    </FormItem>
                  )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-20 bg-white text-black hover:bg-neutral-200 font-black rounded-full shadow-2xl transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50 text-xl tracking-tighter"
                    disabled={submitted}
                  >
                    {submitted ? (
                      <div className="flex items-center gap-3">
                        <Loader2 className="h-6 w-6 animate-spin" />
                        <span className="uppercase text-sm tracking-widest">Processing</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <span>Initialize Protocol</span>
                        <ArrowRight size={24} />
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        )}
      </div>
    </section>
  )
}
