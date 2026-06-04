import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-sage-900 text-sage-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Heart className="w-6 h-6 text-brand-400" fill="currentColor" />
                            <span className="font-heading text-lg font-bold text-white">
                Sensitive Pet Care
              </span>
                        </div>
                        <p className="text-sage-300 text-sm leading-relaxed max-w-md">
                            Real advice from real pet owners navigating heat safety, mobility
                            challenges, and senior care — based in Phoenix, AZ.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold text-white mb-3">Explore</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/blog" className="hover:text-brand-300 transition-colors">Articles</Link></li>
                            <li><Link href="/reviews" className="hover:text-brand-300 transition-colors">Product Reviews</Link></li>
                            <li><Link href="/directory" className="hover:text-brand-300 transition-colors">Phoenix Directory</Link></li>
                            <li><Link href="/about" className="hover:text-brand-300 transition-colors">Our Story</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold text-white mb-3">Categories</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/blog?cat=heat-safety" className="hover:text-brand-300 transition-colors">Heat Safety</Link></li>
                            <li><Link href="/blog?cat=senior-care" className="hover:text-brand-300 transition-colors">Senior Pet Care</Link></li>
                            <li><Link href="/blog?cat=mobility" className="hover:text-brand-300 transition-colors">Mobility Support</Link></li>
                            <li><Link href="/blog?cat=product-review" className="hover:text-brand-300 transition-colors">Product Reviews</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-sage-700 mt-8 pt-8 text-sm text-sage-400 flex flex-col sm:flex-row justify-between gap-4">
                    <p>&copy; {new Date().getFullYear()} Sensitive Pet Care. All rights reserved.</p>
                    <p>
                        Affiliate Disclosure: Some links earn us a commission at no extra cost to you.
                    </p>
                </div>
            </div>
        </footer>
    );
}
