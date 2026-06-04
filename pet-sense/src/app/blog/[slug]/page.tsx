import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Newsletter from "@/components/Newsletter";
import { posts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
    return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    return (
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sage-500 hover:text-brand-600 transition-colors text-sm mb-8"
            >
                <ArrowLeft className="w-4 h-4" /> Back to articles
            </Link>

            <header className="mb-8">
                <h1 className="font-heading text-3xl sm:text-4xl font-bold text-sage-900 mb-4 leading-tight">
                    {post.title}
                </h1>
                <div className="flex items-center gap-3 text-sage-500 text-sm">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                </div>
            </header>

            {/* Simple markdown-like rendering — replace with MDX later */}
            <div className="prose prose-sage max-w-none">
                {post.content.split("\n").map((line, i) => {
                    if (line.startsWith("## "))
                        return <h2 key={i} className="font-heading text-2xl font-bold text-sage-900 mt-8 mb-4">{line.slice(3)}</h2>;
                    if (line.startsWith("### "))
                        return <h3 key={i} className="font-heading text-xl font-bold text-sage-900 mt-6 mb-3">{line.slice(4)}</h3>;
                    if (line.startsWith("- **"))
                        return <li key={i} className="text-sage-700 leading-relaxed ml-4" dangerouslySetInnerHTML={{ __html: line.slice(2).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />;
                    if (line.trim() === "") return <br key={i} />;
                    return <p key={i} className="text-sage-700 leading-relaxed mb-4">{line}</p>;
                })}
            </div>

            <div className="mt-12 pt-8 border-t border-sage-200">
                <Newsletter variant="inline" />
            </div>
        </article>
    );
}
