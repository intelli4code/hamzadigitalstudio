import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Lock, User, ArrowLeft } from "lucide-react";
import authIllustration from "@/assets/auth-illustration.png";
import { BackgroundBlobs } from "@/components/ui/BackgroundBlobs";
import { MagneticCursor } from "@/components/ui/magnetic-cursor";

type AuthView = 'login' | 'signup' | 'forgot';

export default function Auth() {
    const [view, setView] = useState<AuthView>('login');

    const titles = {
        login: { title: "Welcome back", subtitle: "Enter your details to access your workspace." },
        signup: { title: "Create an account", subtitle: "Start your journey with Hamza Digital Studio." },
        forgot: { title: "Reset Password", subtitle: "Enter your email to receive reset instructions." }
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
            <BackgroundBlobs />
            <MagneticCursor />
            <motion.div
                layout
                className="w-full max-w-6xl min-h-[500px] md:min-h-[600px] lg:h-[700px] rounded-2xl md:rounded-[2.5rem] shadow-2xl overflow-hidden relative p-[2px] md:p-[3px] animate-rainbow bg-[length:200%_auto] z-10"
                style={{ backgroundImage: 'linear-gradient(to right, #ec4899, #8b5cf6, #06b6d4, #ec4899)' }}
            >
                <div className="w-full h-full bg-card rounded-xl md:rounded-[2.3rem] flex flex-col md:flex-row overflow-hidden relative">

                    {/* Left Side - Form */}
                    <div className="w-full md:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col justify-center relative z-10 bg-card">
                        <motion.div layout className="mb-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={view}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                                        {titles[view].title}
                                    </h2>
                                    <p className="text-muted-foreground">
                                        {titles[view].subtitle}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>

                        <div className="space-y-4">
                            {/* Social Login - Hide on Forgot Password */}
                            <AnimatePresence>
                                {view !== 'forgot' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <Button variant="outline" className="w-full h-12 gap-3 text-foreground font-medium rounded-full border-border/60 hover:bg-secondary/30 hover:text-foreground hover:border-primary/50 transition-colors">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                            </svg>
                                            <span className="flex-1 text-left">Sign up with Google</span>
                                        </Button>

                                        <div className="relative my-6">
                                            <div className="absolute inset-0 flex items-center">
                                                <div className="w-full border-t border-border/50"></div>
                                            </div>
                                            <div className="relative flex justify-center text-xs uppercase">
                                                <span className="bg-card px-2 text-muted-foreground">Or continue with email</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <form className="space-y-4">
                                <AnimatePresence mode="popLayout" initial={false}>
                                    {view === 'signup' && (
                                        <motion.div
                                            key="fullname"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="space-y-4 overflow-hidden"
                                        >
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-foreground ml-1">Full Name</label>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                    <Input className="pl-10 h-11 rounded-xl bg-secondary/30 border-transparent focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 focus:bg-background transition-all" placeholder="John Doe" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground ml-1">Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                        <Input type="email" className="pl-10 h-11 rounded-xl bg-secondary/30 border-transparent focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 focus:bg-background transition-all" placeholder="name@example.com" />
                                    </div>
                                </div>

                                <AnimatePresence mode="popLayout">
                                    {view !== 'forgot' && (
                                        <motion.div
                                            key="password-field"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="space-y-2 overflow-hidden"
                                        >
                                            <label className="text-sm font-medium text-foreground ml-1">Password</label>
                                            <div className="relative">
                                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                <Input type="password" className="pl-10 h-11 rounded-xl bg-secondary/30 border-transparent focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 focus:bg-background transition-all" placeholder="••••••••" />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {view === 'login' && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-end">
                                        <button
                                            type="button"
                                            onClick={() => setView('forgot')}
                                            className="text-sm text-primary hover:underline font-medium"
                                        >
                                            Forgot password?
                                        </button>
                                    </motion.div>
                                )}

                                <Button className="w-full h-12 rounded-full text-base font-semibold shadow-lg shadow-primary/25 mt-4 group hover:bg-white hover:text-primary hover:border-2 hover:border-primary dark:hover:bg-secondary dark:hover:text-primary transition-all">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={view}
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            className="flex items-center justify-center w-full"
                                        >
                                            {view === 'login' ? "Sign In" : view === 'signup' ? "Create Account" : "Send Reset Link"}
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </motion.span>
                                    </AnimatePresence>
                                </Button>
                            </form>
                        </div>

                        <div className="mt-8 text-center text-sm text-muted-foreground">
                            <AnimatePresence mode="wait">
                                <motion.div key={view} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    {view === 'login' ? (
                                        <>
                                            Don't have an account?{' '}
                                            <button onClick={() => setView('signup')} className="text-primary font-bold hover:underline">
                                                Sign up
                                            </button>
                                        </>
                                    ) : view === 'signup' ? (
                                        <>
                                            Already have an account?{' '}
                                            <button onClick={() => setView('login')} className="text-primary font-bold hover:underline">
                                                Log in
                                            </button>
                                        </>
                                    ) : (
                                        <button onClick={() => setView('login')} className="text-primary font-bold hover:underline flex items-center justify-center w-full">
                                            <ArrowLeft className="w-4 h-4 mr-2" />
                                            Back to login
                                        </button>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right Side - Visual */}
                    <div className="hidden md:block w-1/2 bg-muted relative overflow-hidden">
                        <img
                            src={authIllustration}
                            alt="Auth Illustration"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Text overlay */}
                        <div className="absolute bottom-12 left-12 right-12 z-10">
                            <h3 className="text-3xl font-bold text-white mb-3">Designed for clarity</h3>
                            <p className="text-slate-200 text-lg leading-relaxed shadow-sm">Manage your projects, view timelines, and collaborate in real-time with our smooth interactions.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
