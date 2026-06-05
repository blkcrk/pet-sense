import type { Metadata } from "next";
import Script from "next/script";
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
        <head>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-7LM7N5XKSE"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7LM7N5XKSE');
          `}
            </Script><title></title>
        </head>
        <body className="font-body bg-brand-50 text-sage-900 min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
