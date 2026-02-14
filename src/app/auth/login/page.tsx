"use client";

import { useState } from "react";
import { login } from "@/actions/admin";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader2, Lock, Mail, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const result = await login(formData);
            if (result.success) {
                toast.success("Welcome back!");
                router.push("/admin");
                router.refresh();
            } else {
                toast.error(result.error || "Invalid credentials");
            }
        } catch (error) {
            toast.error("An error occurred during login");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 p-6">
            <div className="w-full max-w-[450px]">
                {/* Logo area */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center size-16 rounded-2xl bg-brand mb-6 shadow-xl shadow-brand/20">
                        <Lock className="text-white size-8" />
                    </div>
                    <h1 className="text-3xl font-black tracking-tighter text-gray-950 dark:text-white">
                        Symbosys<span className="text-brand">Admin</span>
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 font-medium mt-2">
                        Enter your credentials to access the console.
                    </p>
                </div>

                {/* Login card */}
                <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[2rem] p-8 shadow-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="font-bold text-xs uppercase tracking-widest text-gray-400 ml-1">Email Address</Label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 group-focus-within:text-brand transition-colors" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="admin@symbosys.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="h-12 pl-11 rounded-xl bg-gray-50 dark:bg-gray-800/50 border-transparent focus:border-brand/30 transition-all font-medium"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password" className="font-bold text-xs uppercase tracking-widest text-gray-400 ml-1">Password</Label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 group-focus-within:text-brand transition-colors" />
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="h-12 pl-11 pr-11 rounded-xl bg-gray-50 dark:bg-gray-800/50 border-transparent focus:border-brand/30 transition-all font-medium"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand transition-colors"
                                >
                                    {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="remember" className="rounded-md border-gray-300 text-brand focus:ring-brand" />
                                <Label htmlFor="remember" className="text-xs font-semibold text-gray-500 cursor-pointer">Remember me</Label>
                            </div>
                            <button type="button" className="text-xs font-bold text-brand hover:underline">Forgot Password?</button>
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-12 bg-brand hover:bg-brand-dark text-white font-black rounded-xl shadow-lg shadow-brand/20 transition-all"
                        >
                            {isLoading ? (
                                <Loader2 className="size-5 animate-spin" />
                            ) : (
                                "Sign In to Dashboard"
                            )}
                        </Button>
                    </form>
                </div>

                {/* Footer info */}
                <div className="mt-10 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                        Symbosys Internal Management v0.1.0
                    </p>
                </div>
            </div>
        </div>
    );
}
