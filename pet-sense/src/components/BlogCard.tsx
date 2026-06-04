import Link from "next/link";
import { BlogPost } from "@/lib/types";

const categoryColors = {
    "heat-safety": "bg-red-100 text-red-700",
    "senior-care": "bg-blue-100 text-blue-700",
    mobility: "bg-purple-100 text-purple-700",
    "product-review": "bg-amber-100 text-amber-700",
};

const categoryLabels = {
    "heat-safety": "🌡️ Heat Safety",
    "senior-care": "🐾 Senior Care",
    mobility: "♿ Mobility",
    "product-review": "⭐ Product Review",
};

export default function BlogCard({ post }: { post: BlogPost }) {
    return (
        <article className="bg-white rounded-xl shadow-sm border border-sage-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-48 bg-sage-200 flex items-center justify-center text-sage-400">
                {/* Replace with next/image when you have real photos */}
                <span className="text-4xl">🐕</span>
            </div>
            <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${categoryColors[post.category]}`}>
            {categoryLabels[post.category]}
          </span>
                    <span className="text-sage-400 text-xs">{post.date}</span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-heading text-lg font-bold text-sage-900 hover:text-brand-600 transition-colors mb-2">
                        {post.title}
                    </h3>
                </Link>
                <p className="text-sage-600 text-sm leading-relaxed">{post.excerpt}</p>
                <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block mt-4 text-brand-600 text-sm font-medium hover:text-brand-700 transition-colors"
                >
                    Read more →
                </Link>
            </div>
        </article>
    );
}
