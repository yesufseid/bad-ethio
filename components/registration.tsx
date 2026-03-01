"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { ArrowRight, Loader2, User, CheckCircle2, Crown, Zap } from "lucide-react"

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
import { cn } from "@/lib/utils"

const formSchema = z.object({
  fullName: z.string().regex(/^[A-Za-z\s\-']{3,100}$/, "Enter a valid name (3-100 characters)."),
  email: z.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter a valid email."),
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
  ticketType: z.enum(["standard", "vip"]).default("standard"),
  txHash: z.string().optional(),
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

interface RegistrationProps {
  ticketType?: "standard" | "vip"
  txHash?: string
  isModal?: boolean
  onSuccess?: () => void
}

export default function Registration({
  ticketType = "standard",
  txHash = "",
  isModal = false,
  onSuccess
}: RegistrationProps) {
  const [submitted, setSubmitted] = useState(false)
  const [success, setSuccess] = useState(false)
  const [selectedCountryCode, setSelectedCountryCode] = useState("+251")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "", email: "", phone: "+251", university: "", otherUniversity: "",
      department: "", year: "", participationType: "solo", teamName: "",
      teamMember1: "", teamMember2: "", teamMember3: "", agreement: false,
      github: "", linkedin: "",
      ticketType,
      txHash,
    },
  })

  const participationType = form.watch("participationType")
  const university = form.watch("university")

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitted(true)
    try {
      const result = await registerAction({ ...values, ticketType, txHash })
      if (!result.ok) throw new Error("message" in result ? result.message : "Submission failed")
      toast.success("Registration successful!")
      form.reset()
      setSuccess(true)
      if (onSuccess) onSuccess()
    } catch (e: any) {
      toast.error(e.message || "Submission failed");
    } finally {
      setSubmitted(false);
    }
  }

  const registrationContent = (
    <div className={cn("relative mx-auto w-full", isModal ? "max-w-xl" : "max-w-4xl")}>
      <div className={cn("text-center", isModal ? "mb-6" : "mb-20")}>
        {/* Ticket badge */}
        {ticketType === "vip" ? (
          <div className={cn("inline-flex items-center gap-2 border border-amber-500/40 bg-amber-500/10 rounded-full w-fit", isModal ? "px-2.5 py-0.5 mb-3" : "px-4 py-2 mb-8")}>
            <Crown size={isModal ? 10 : 14} className="text-amber-400" />
            <span className={cn("font-black text-amber-400 uppercase tracking-widest", isModal ? "text-[8px]" : "text-sm")}>VIP Pass Selected</span>
          </div>
        ) : (
          <div className={cn("inline-flex items-center gap-2 border border-purple-500/30 bg-purple-500/10 rounded-full w-fit", isModal ? "px-2.5 py-0.5 mb-3" : "px-4 py-2 mb-8")}>
            <Zap size={isModal ? 10 : 14} className="text-purple-400" />
            <span className={cn("font-black text-purple-400 uppercase tracking-widest", isModal ? "text-[8px]" : "text-sm")}>Standard Pass Selected</span>
          </div>
        )}
        <h2 className={cn("font-black text-white tracking-tighter leading-none animate-slide-up", isModal ? "text-xl md:text-2xl mb-2" : "text-4xl md:text-6xl mb-6")}>
          Start your <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent italic">Journey.</span>
        </h2>
        <p className={cn("text-neutral-400 font-light tracking-tight animate-fade-in", isModal ? "text-xs" : "text-lg md:text-xl")}>
          Join the largest Web3 community in Ethiopia.
        </p>
      </div>

      {success ? (
        <div className={cn("bg-neutral-900 border border-white/5 rounded-[2.5rem] text-center animate-fade-in shadow-2xl", isModal ? "p-6 md:p-10 space-y-3" : "p-12 md:p-20 space-y-6")}>
          <div className={cn("bg-linear-to-br from-green-500/20 to-cyan-500/20 border border-green-500/50 rounded-full flex items-center justify-center mx-auto mb-4", isModal ? "w-12 h-12" : "w-20 h-20")}>
            <CheckCircle2 size={isModal ? 24 : 36} className="text-green-400" />
          </div>
          <h3 className={cn("font-black text-white tracking-tighter", isModal ? "text-lg md:text-xl" : "text-3xl md:text-4xl")}>You're on the list.</h3>
          <p className={cn("text-neutral-400 font-light mx-auto leading-relaxed", isModal ? "text-xs max-w-xs" : "text-lg max-w-sm")}>
            Check your email for confirmation. We'll be in touch soon.
          </p>
          <Button
            type="button"
            variant="ghost"
            className={cn("text-neutral-500 hover:text-white transition-all font-bold", isModal ? "mt-4 text-xs" : "mt-8")}
            onClick={() => setSuccess(false)}
          >
            Register Another
          </Button>
        </div>
      ) : (
        <div className={cn("bg-neutral-900/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-2xl transition-all", isModal ? "p-4 md:p-6" : "p-8 md:px-14 md:py-14")}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={isModal ? "space-y-4" : "space-y-12"}>

              {/* Section: Identity */}
              <div className={isModal ? "space-y-4" : "space-y-10"}>
                <div className="flex items-center gap-3 border-b border-white/5 pb-2">
                  <span className={cn("font-black text-purple-400/50", isModal ? "text-xs" : "text-lg")}>01</span>
                  <h3 className={cn("font-black text-white tracking-tight uppercase", isModal ? "text-xs" : "text-xl")}>Identity</h3>
                </div>

                <div className={cn("grid gap-4", isModal ? "grid-cols-1 md:grid-cols-2" : "md:grid-cols-2 gap-8")}>
                  <FormField control={form.control} name="fullName" render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="text-neutral-500 uppercase text-[8px] font-black tracking-widest flex items-center gap-2">Legal Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter full name" {...field} className={cn("bg-white/5 border-white/5 rounded-lg px-3 focus-visible:ring-1 focus-visible:ring-purple-500/50 transition-all placeholder:text-white/10", isModal ? "h-9 text-sm" : "h-14 text-lg")} />
                      </FormControl>
                      <FormMessage className="text-[9px] text-red-500 font-bold" />
                    </FormItem>
                  )}
                  />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="text-neutral-500 uppercase text-[8px] font-black tracking-widest flex items-center gap-2">Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="name@edu.et" {...field} className={cn("bg-white/5 border-white/5 rounded-lg px-3 focus-visible:ring-1 focus-visible:ring-purple-500/50 transition-all placeholder:text-white/10", isModal ? "h-9 text-sm" : "h-14 text-lg")} />
                      </FormControl>
                      <FormMessage className="text-[9px] text-red-500 font-bold" />
                    </FormItem>
                  )}
                  />
                </div>

                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-neutral-500 uppercase text-[8px] font-black tracking-widest flex items-center gap-2">Phone</FormLabel>
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
                          <SelectTrigger className={cn("bg-white/5 border-white/5 rounded-lg focus:ring-1 focus:ring-purple-500/50 flex gap-2 items-center justify-center", isModal ? "w-[80px] h-9 text-[10px]" : "w-[110px] h-14 text-sm")}>
                            <div className="flex items-center gap-1 min-w-0 overflow-hidden">
                              <span className={cn("shrink-0", isModal ? "text-base" : "text-xl")}>{countries.find(c => c.code === selectedCountryCode)?.flag || "🌍"}</span>
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
                          className={cn("bg-white/5 border-white/5 rounded-lg px-3 focus-visible:ring-1 focus-visible:ring-purple-500/50 transition-all", isModal ? "h-9 text-sm" : "h-14 text-lg")}
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="text-[9px] text-red-500 font-bold" />
                  </FormItem>
                )}
                />
              </div>

              {/* Section: Academic */}
              <div className={isModal ? "space-y-4" : "space-y-10"}>
                <div className="flex items-center gap-3 border-b border-white/5 pb-2">
                  <span className={cn("font-black text-purple-400/50", isModal ? "text-xs" : "text-lg")}>02</span>
                  <h3 className={cn("font-black text-white tracking-tight uppercase", isModal ? "text-xs" : "text-xl")}>Academic</h3>
                </div>

                <div className={cn("grid gap-4", isModal ? "grid-cols-1 md:grid-cols-2" : "md:grid-cols-2 gap-8")}>
                  <FormField control={form.control} name="university" render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="text-neutral-500 uppercase text-[8px] font-black tracking-widest">Campus</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className={cn("bg-white/5 border-white/5 rounded-lg px-3 focus:ring-1 focus:ring-purple-500/50", isModal ? "h-9 text-sm" : "h-14 text-lg")}>
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
                      <FormMessage className="text-[9px] text-red-500 font-bold" />
                    </FormItem>
                  )}
                  />
                  <FormField control={form.control} name="year" render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="text-neutral-500 uppercase text-[8px] font-black tracking-widest">Enrollment Year</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className={cn("bg-white/5 border-white/5 rounded-lg px-3 focus:ring-1 focus:ring-purple-500/50", isModal ? "h-9 text-sm" : "h-14 text-lg")}>
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
                      <FormMessage className="text-[9px] text-red-500 font-bold" />
                    </FormItem>
                  )}
                  />
                </div>
                {university === "Other" && (
                  <FormField control={form.control} name="otherUniversity" render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="text-neutral-500 uppercase text-[8px] font-black tracking-widest">Enter Campus</FormLabel>
                      <FormControl>
                        <Input placeholder="University Name" {...field} className={cn("bg-white/5 border-white/5 rounded-lg px-3 focus-visible:ring-1 focus-visible:ring-purple-500/50 transition-all", isModal ? "h-9 text-sm" : "h-14 text-lg")} />
                      </FormControl>
                      <FormMessage className="text-[9px] text-red-500 font-bold" />
                    </FormItem>
                  )}
                  />
                )}
                <FormField control={form.control} name="department" render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel className="text-neutral-500 uppercase text-[8px] font-black tracking-widest">Major / Field</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Computer Science" {...field} className={cn("bg-white/5 border-white/5 rounded-lg px-3 focus-visible:ring-1 focus-visible:ring-purple-500/50 transition-all", isModal ? "h-9 text-sm" : "h-14 text-lg")} />
                    </FormControl>
                    <FormMessage className="text-[9px] text-red-500 font-bold" />
                  </FormItem>
                )}
                />
              </div>

              {/* Section: Presence */}
              <div className={isModal ? "space-y-4" : "space-y-10"}>
                <div className="flex items-center gap-3 border-b border-white/5 pb-2">
                  <span className={cn("font-black text-purple-400/50", isModal ? "text-xs" : "text-lg")}>03</span>
                  <h3 className={cn("font-black text-white tracking-tight uppercase", isModal ? "text-xs" : "text-xl")}>Foundations</h3>
                </div>

                <div className={cn("grid gap-4", isModal ? "grid-cols-1 md:grid-cols-2" : "md:grid-cols-2 gap-8")}>
                  <FormField control={form.control} name="github" render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="text-neutral-500 uppercase text-[8px] font-black tracking-widest flex items-center gap-2">GitHub</FormLabel>
                      <FormControl>
                        <Input placeholder="github.com/username" {...field} className={cn("bg-white/5 border-white/5 rounded-lg px-3 focus-visible:ring-1 focus-visible:ring-purple-500/50 transition-all", isModal ? "h-9 text-sm" : "h-14 text-lg")} />
                      </FormControl>
                      <FormMessage className="text-[9px]" />
                    </FormItem>
                  )}
                  />
                  <FormField control={form.control} name="linkedin" render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="text-neutral-500 uppercase text-[8px] font-black tracking-widest flex items-center gap-2">LinkedIn</FormLabel>
                      <FormControl>
                        <Input placeholder="linkedin.com/in/..." {...field} className={cn("bg-white/5 border-white/5 rounded-lg px-3 focus-visible:ring-1 focus-visible:ring-purple-500/50 transition-all", isModal ? "h-9 text-sm" : "h-14 text-lg")} />
                      </FormControl>
                      <FormMessage className="text-[9px]" />
                    </FormItem>
                  )}
                  />
                </div>
              </div>

              {/* Section: Mode */}
              <div className={isModal ? "space-y-4" : "space-y-10"}>
                <div className="flex items-center gap-3 border-b border-white/5 pb-2">
                  <span className={cn("font-black text-purple-400/50", isModal ? "text-xs" : "text-lg")}>04</span>
                  <h3 className={cn("font-black text-white tracking-tight uppercase", isModal ? "text-xs" : "text-xl")}>Protocol</h3>
                </div>

                <FormField control={form.control} name="participationType" render={({ field }) => (
                  <FormItem className={isModal ? "space-y-3" : "space-y-6"}>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className={cn("grid gap-4 md:gap-8", isModal ? "grid-cols-1 md:grid-cols-2" : "grid-cols-2")}>
                        <FormItem className="relative">
                          <FormControl className="sr-only">
                            <RadioGroupItem value="solo" />
                          </FormControl>
                          <FormLabel className={cn("flex flex-col items-center justify-center rounded-[2.5rem] border transition-all cursor-pointer", isModal ? "p-4" : "p-8", field.value === "solo" ? "border-purple-500 bg-purple-500/5 text-white" : "border-white/5 bg-white/5 text-neutral-500 hover:border-white/10 hover:text-neutral-300")}>
                            <User size={isModal ? 18 : 24} className="mb-1.5" />
                            <span className={cn("font-black tracking-tight uppercase", isModal ? "text-[10px]" : "text-sm")}>Solo Builder</span>
                          </FormLabel>
                        </FormItem>
                        <FormItem className="relative">
                          <FormControl className="sr-only">
                            <RadioGroupItem value="team" />
                          </FormControl>
                          <FormLabel className={cn("flex flex-col items-center justify-center rounded-[2.5rem] border transition-all cursor-pointer", isModal ? "p-4" : "p-8", field.value === "team" ? "border-cyan-500 bg-cyan-500/5 text-white" : "border-white/5 bg-white/5 text-neutral-500 hover:border-white/10 hover:text-neutral-300")}>
                            <User size={isModal ? 18 : 24} className="mb-1.5" />
                            <span className={cn("font-black tracking-tight uppercase", isModal ? "text-[10px]" : "text-sm")}>Team Protocol</span>
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />

                {participationType === "team" && (
                  <div className={cn("animate-fade-in rounded-[2.5rem] bg-white/5 border border-white/5", isModal ? "p-4 md:p-6 space-y-4" : "p-6 md:p-12 space-y-8")}>
                    <FormField control={form.control} name="teamName" render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel className="text-neutral-500 uppercase text-[8px] font-black tracking-widest">Protocol Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter team name" {...field} className={cn("bg-transparent border-0 border-b border-white/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-cyan-400 transition-all font-black", isModal ? "h-8 text-base" : "h-12 text-xl")} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                    />
                    <div className={isModal ? "space-y-4" : "space-y-8"}>
                      <FormLabel className="text-neutral-500 uppercase text-[8px] font-black tracking-widest block">Contributors</FormLabel>
                      <div className="grid gap-3">
                        {[1, 2, 3].map((num) => (
                          <FormField key={num} control={form.control} name={`teamMember${num}` as any} render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder={`Member ${num} Email`} {...field} className={cn("bg-transparent border-0 border-b border-white/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-cyan-400 transition-all font-light", isModal ? "h-7 text-sm" : "h-10 text-lg")} />
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
              <div className={cn("pt-6 border-t border-white/5", isModal ? "space-y-4" : "space-y-10")}>
                <FormField control={form.control} name="agreement" render={({ field }) => (
                  <FormItem className={cn("flex items-center space-x-2 space-y-0 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer", isModal ? "p-3" : "p-6")}>
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} className={cn("rounded border-white/20 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500", isModal ? "h-4 w-4" : "h-5 w-5")} />
                    </FormControl>
                    <div className="space-y-1">
                      <FormLabel className={cn("font-bold text-neutral-300 cursor-pointer italic", isModal ? "text-xs" : "text-base")}>I accept the high-stakes building environment.</FormLabel>
                    </div>
                  </FormItem>
                )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className={cn("w-full bg-white text-black hover:bg-neutral-200 font-black rounded-full shadow-2xl transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50 tracking-tighter", isModal ? "h-12 text-base" : "h-20 text-xl")}
                  disabled={submitted}
                >
                  {submitted ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className={isModal ? "h-4 w-4 animate-spin" : "h-6 w-6 animate-spin"} />
                      <span className={cn("uppercase tracking-widest", isModal ? "text-[8px]" : "text-sm")}>Processing</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span>Initialize Protocol</span>
                      <ArrowRight size={isModal ? 16 : 24} />
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      )}
    </div>
  );

  const content = (
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
  );

  if (isModal) {
    return (
      <div className="bg-neutral-950 relative overflow-y-auto overflow-x-hidden max-h-[90vh] custom-scrollbar rounded-[2.5rem] p-4 md:p-8">
        {content}
        {registrationContent}
      </div>
    );
  }

  return (
    <section id="register" className="py-32 px-4 sm:px-6 lg:px-8 bg-neutral-950 relative overflow-hidden">
      {content}
      {registrationContent}
    </section>
  );
}
