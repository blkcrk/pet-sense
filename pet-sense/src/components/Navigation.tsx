"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Articles" },
    { href: "/reviews", label: "Product Reviews" },
    { href: "/directory", label: "Phoenix Directory" },
    { href: "/about", label: "About" },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center gap-2">
                        <Heart className="w-8 h-8 text-brand-500" fill="currentColor" />
                        <span className="font-heading text-xl font-bold text-sage-800">
              Sensitive Pet Care
            </span>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sage-700 hover:text-brand-600 transition-colors font-medium text-sm"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/newsletter"
                            className="bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600 transition-colors text-sm font-medium"
                        >
                            Subscribe
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden text-sage-700"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile nav */}
                {isOpen && (
                    <div className="md:hidden pb-4 border-t border-sage-100">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block py-2 text-sage-700 hover:text-brand-600 font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/newsletter"
                            className="block mt-2 bg-brand-500 text-white px-4 py-2 rounded-lg text-center font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            Subscribe
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
