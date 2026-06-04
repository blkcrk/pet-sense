import { Star } from "lucide-react";
import Newsletter from "@/components/Newsletter";

export default function Reviews() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="font-heading text-4xl font-bold text-sage-900 mb-4">
                Product Reviews
            </h1>
            <p className="text-sage-600 text-lg mb-12 max-w-2xl">
                Honest reviews of gear for heat-sensitive, senior, and
                mobility-challenged pets — tested in real Phoenix conditions.
            </p>

            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-12 text-center">
                <Star className="w-16 h-16 text-brand-400 mx-auto mb-4" />
                <h2 className="font-heading text-2xl font-bold text-sage-900 mb-3">
                    Reviews Coming Soon
                </h2>
                <p className="text-sage-600 max-w-md mx-auto">
                    We&apos;re testing cooling vests, orthopedic beds, paw protectors,
                    mobility aids, and more. First reviews dropping soon.
                </p>
            </div>

            <div className="mt-16">
                <Newsletter variant="hero" />
            </div>
        </div>
    );
}
