import Link from "next/link";
import { Shield, Thermometer, Heart, MapPin } from "lucide-react";
import Newsletter from "@/components/Newsletter";
import BlogCard from "@/components/BlogCard";
import { posts } from "@/lib/posts";

const pillars = [
    {
        icon: Thermometer,
        title: "Heat Safety",
        description: "Keeping flat-faced and heat-sensitive breeds safe in extreme temperatures.",
        href: "/blog?cat=heat-safety",
        color: "text-red-500",
    },
    {
        icon: Shield,
        title: "Mobility Support",
        description: "Practical solutions for pets with joint issues, injuries, or physical challenges.",
        href: "/blog?cat=mobility",
        color: "text-purple-500",
    },
    {
        icon: Heart,
        title: "Senior Care",
        description: "Helping aging pets live their best life with dignity and comfort.",
        href: "/blog?cat=senior-care",
        color: "text-blue-500",
    },
    {
        icon: MapPin,
        title: "Phoenix Directory",
        description: "Local vets, groomers, and rehab specialists who understand sensitive pets.",
        href: "/directory",
        color: "text-brand-500",
    },
];

export default function Home() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-b from-white to-brand-50 py-16 sm:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-heading text-4xl sm:text-5xl font-bold text-sage-900 mb-6 leading-tight">
                        Because Every Pet Deserves
                        <br />
                        <span className="text-brand-500">Thoughtful Care</span>
                    </h1>
                    <p className="text-sage-600 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Real advice from real pet owners navigating heat safety, mobility
                        challenges, and senior care in Phoenix, AZ — and beyond.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/blog"
                            className="bg-brand-500 text-white px-8 py-3 rounded-lg hover:bg-brand-600 transition-colors font-medium text-lg"
                        >
                            Read Our Guides
                        </Link>
                        <Link
                            href="/about"
                            className="bg-white text-sage-700 px-8 py-3 rounded-lg border border-sage-300 hover:border-brand-400 transition-colors font-medium text-lg"
                        >
                            Our Story
                        </Link>
                    </div>
                </div>
            </section>

            {/* Pillars */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl font-bold text-sage-900 text-center mb-12">
                        How We Help
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pillars.map((pillar) => (
                            <Link
                                key={pillar.title}
                                href={pillar.href}
                                className="bg-brand-50 rounded-xl p-6 hover:shadow-md transition-shadow border border-transparent hover:border-brand-200"
                            >
                                <pillar.icon className={`w-10 h-10 ${pillar.color} mb-4`} />
                                <h3 className="font-heading font-bold text-sage-900 mb-2">
                                    {pillar.title}
                                </h3>
                                <p className="text-sage-600 text-sm leading-relaxed">
                                    {pillar.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest articles */}
            <section className="py-16 bg-brand-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-heading text-3xl font-bold text-sage-900 text-center mb-12">
                        Latest Articles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {posts.slice(0, 4).map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Newsletter variant="hero" />
                </div>
            </section>
        </>
    );
}
