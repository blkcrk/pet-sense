"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Newsletter({ variant = "inline" }: { variant?: "inline" | "hero" }) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Connect to Beehiiv/ConvertKit API
        // For now, just show success
        setStatus("success");
        setEmail("");
    };

    if (variant === "hero") {
        return (
            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-8 text-center max-w-2xl mx-auto">
                <h3 className="font-heading text-2xl font-bold text-sage-900 mb-2">
                    🌡️ Phoenix Pet Owner&apos;s Summer Survival Guide
                </h3>
                <p className="text-sage-600 mb-6">
                    Free weekly tips on keeping heat-sensitive, senior, and mobility-challenged
                    pets safe and happy. Written by local Phoenix pet owners who get it.
                </p>
                {status === "success" ? (
                    <p className="text-sage-700 font-medium">✅ You&apos;re in! Check your inbox.</p>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                            className="px-4 py-3 rounded-lg border border-sage-300 focus:outline-none focus:ring-2 focus:ring-brand-400 flex-1 max-w-sm"
                        />
                        <button
                            type="submit"
                            className="bg-brand-500 text-white px-6 py-3 rounded-lg hover:bg-brand-600 transition-colors font-medium flex items-center justify-center gap-2"
                        >
                            <Send className="w-4 h-4" /> Subscribe Free
                        </button>
                    </form>
                )}
            </div>
        );
    }

    return (
        <div className="bg-sage-50 rounded-xl p-6 border border-sage-200">
            <h4 className="font-heading font-bold text-sage-900 mb-1">Stay in the loop</h4>
            <p className="text-sage-600 text-sm mb-3">Weekly tips for sensitive pet care.</p>
            {status === "success" ? (
                <p className="text-sage-700 text-sm font-medium">✅ Subscribed!</p>
            ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="px-3 py-2 rounded-lg border border-sage-300 focus:outline-none focus:ring-2 focus:ring-brand-400 flex-1 text-sm"
                    />
                    <button
                        type="submit"
                        className="bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600 transition-colors text-sm font-medium"
                    >
                        Join
                    </button>
                </form>
            )}
        </div>
    );
}
