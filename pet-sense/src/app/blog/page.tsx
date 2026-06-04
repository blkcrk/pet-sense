import BlogCard from "@/components/BlogCard";
import Newsletter from "@/components/Newsletter";
import { posts } from "@/lib/posts";

export default function Blog() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="font-heading text-4xl font-bold text-sage-900 mb-4">
                Articles & Guides
            </h1>
            <p className="text-sage-600 text-lg mb-12 max-w-2xl">
                Practical advice for caring for heat-sensitive, senior, and
                mobility-challenged pets — from people who live it every day.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>

            <div className="mt-16">
                <Newsletter variant="hero" />
            </div>
        </div>
    );
}
