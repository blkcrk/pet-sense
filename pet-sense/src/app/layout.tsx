import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Sensitive Pet Care — Heat Safety, Mobility & Senior Pet Support",
    description:
        "Real-world advice for heat-sensitive, mobility-challenged, and senior pets. Based in Phoenix, AZ. Product reviews, care guides, and local resources.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className="font-body bg-brand-50 text-sage-900 min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
