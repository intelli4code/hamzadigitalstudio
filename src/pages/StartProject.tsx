import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon, ArrowRight, ArrowLeft, Check, UploadCloud } from "lucide-react";
import { Label } from "@/components/ui/label";
import { BackgroundBlobs } from "@/components/ui/BackgroundBlobs";
import { MagneticCursor } from "@/components/ui/magnetic-cursor";

const steps = [
    { id: 1, title: "Goal", description: "What are we building?" },
    { id: 2, title: "Who", description: "Tell us about you" },
    { id: 3, title: "Vibe", description: "Design preferences" },
    { id: 4, title: "Logistics", description: "Timeline & Budget" },
];

export default function StartProject() {
    const [currentStep, setCurrentStep] = useState(1);
    const [date, setDate] = useState<Date>();

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-8 pt-24 md:pt-32 relative overflow-hidden">
            {/* Background blobs for flair */}
            <BackgroundBlobs />
            <MagneticCursor />

            <motion.div
                layout
                className="w-full max-w-5xl min-h-[600px] lg:h-[650px] rounded-2xl md:rounded-[2.5rem] shadow-2xl overflow-hidden relative p-[2px] md:p-[3px] animate-rainbow bg-[length:200%_auto] z-10"
                style={{ backgroundImage: 'linear-gradient(to right, #ec4899, #8b5cf6, #06b6d4, #ec4899)' }}
            >
                <div className="w-full h-full bg-card rounded-xl md:rounded-[2.3rem] flex flex-col md:flex-row overflow-hidden relative">

                    {/* Left Sidebar - Steps */}
                    <div className="w-full md:w-1/3 bg-muted/30 p-6 md:p-8 lg:p-12 border-b md:border-b-0 md:border-r border-border flex flex-col justify-between">
                        <div>
                            <h2 className="font-display text-xl md:text-2xl font-bold mb-2">Start a Project</h2>
                            <p className="text-muted-foreground text-sm mb-8">Let's bring your vision to life. Fill out the details below.</p>

                            <div className="space-y-6">
                                {steps.map((step) => (
                                    <div key={step.id} className="flex items-center gap-4 relative">
                                        <div className={cn(
                                            "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all font-semibold z-10 bg-card",
                                            currentStep === step.id ? "border-primary text-primary" :
                                                currentStep > step.id ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground"
                                        )}>
                                            {currentStep > step.id ? <Check className="w-5 h-5" /> : step.id}
                                        </div>
                                        {step.id !== 4 && (
                                            <div className={cn("absolute left-5 top-10 w-0.5 h-6 -translate-x-1/2", currentStep > step.id ? "bg-primary" : "bg-border")} />
                                        )}
                                        <div>
                                            <h4 className="text-sm font-medium">{step.title}</h4>
                                            <p className="text-xs text-muted-foreground">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <p className="text-xs text-muted-foreground">Need help? <a href="mailto:hello@hamza.studio" className="text-primary hover:underline">Contact us</a></p>
                        </div>
                    </div>

                    {/* Right Content - Form */}
                    <div className="w-full md:w-2/3 p-6 md:p-8 lg:p-12 flex flex-col relative overflow-hidden">

                        <div className="flex-1 relative z-10 overflow-y-auto">
                            <AnimatePresence mode="wait">
                                {currentStep === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <h3 className="text-2xl font-semibold mb-6">What are we building?</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {['Website', 'Mobile App', 'Dashboard', 'Branding', 'E-commerce', 'Other'].map((option) => (
                                                <label key={option} className="flex items-center space-x-3 p-4 rounded-xl border border-border cursor-pointer hover:bg-secondary/20 has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all">
                                                    <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary" />
                                                    <span className="font-medium text-sm">{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Project Description</Label>
                                            <Textarea placeholder="Tell us about the project, goals, and target audience..." className="min-h-[120px] rounded-xl resize-none bg-secondary/30 border-transparent focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 focus:bg-background transition-all" />
                                        </div>
                                    </motion.div>
                                )}

                                {currentStep === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <h3 className="text-2xl font-semibold mb-6">Tell us about you</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label>Name</Label>
                                                <Input placeholder="John Doe" className="rounded-xl bg-secondary/30 border-transparent focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 transition-all" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Company Name</Label>
                                                <Input placeholder="Acme Inc." className="rounded-xl bg-secondary/30 border-transparent focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 transition-all" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Email</Label>
                                            <Input type="email" placeholder="john@acme.com" className="rounded-xl bg-secondary/30 border-transparent focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Website (if existing)</Label>
                                            <Input placeholder="https://..." className="rounded-xl bg-secondary/30 border-transparent focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 transition-all" />
                                        </div>
                                    </motion.div>
                                )}

                                {currentStep === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <h3 className="text-2xl font-semibold mb-6">Design preferences</h3>
                                        <div className="space-y-2">
                                            <Label>Inspiration / Competitors</Label>
                                            <Input placeholder="Paste links to websites you like..." className="rounded-xl bg-secondary/30 border-transparent focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 transition-all" />
                                        </div>

                                        <div className="space-y-4">
                                            <Label>Upload Assets (Logo, Brand Guide)</Label>
                                            <div className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-muted/50 transition-colors cursor-pointer">
                                                <UploadCloud className="w-8 h-8 text-muted-foreground mb-2" />
                                                <span className="text-sm font-medium">Click to upload or drag and drop</span>
                                                <span className="text-xs text-muted-foreground mt-1">SVG, PNG, JPG or PDF (max 10MB)</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {currentStep === 4 && (
                                    <motion.div
                                        key="step4"
                                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6"
                                    >
                                        <h3 className="text-2xl font-semibold mb-6">Timeline & Budget</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label>Budget Range</Label>
                                                <select className="flex h-10 w-full rounded-xl border border-input bg-card px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>option]:bg-card [&>option]:text-foreground">
                                                    <option>$1k - $5k</option>
                                                    <option>$5k - $10k</option>
                                                    <option>$10k - $25k</option>
                                                    <option>$25k+</option>
                                                </select>
                                            </div>
                                            <div className="space-y-2 flex flex-col">
                                                <Label className="mb-2">Target Launch Date</Label>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full justify-start text-left font-normal rounded-xl border-border bg-secondary/30",
                                                                !date && "text-muted-foreground"
                                                            )}
                                                        >
                                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0 border-border bg-card rounded-xl">
                                                        <Calendar
                                                            mode="single"
                                                            selected={date}
                                                            onSelect={setDate}
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Anything else?</Label>
                                            <Textarea placeholder="Any specific requirements or questions?" className="min-h-[100px] rounded-xl resize-none bg-secondary/30 border-transparent focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 focus:bg-background transition-all" />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
                            <Button
                                variant="ghost"
                                onClick={prevStep}
                                disabled={currentStep === 1}
                                className="rounded-full hover:bg-secondary"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back
                            </Button>

                            {currentStep < 4 ? (
                                <Button onClick={nextStep} className="rounded-full px-8 shadow-lg shadow-primary/20">
                                    Next Step
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            ) : (
                                <Button className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25">
                                    Submit Request
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
