import { MapPin } from "lucide-react";
import Newsletter from "@/components/Newsletter";

export default function Directory() {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="font-heading text-4xl font-bold text-sage-900 mb-4">
                Phoenix Pet Resource Directory
            </h1>
            <p className="text-sage-600 text-lg mb-12 max-w-2xl">
                Curated local resources for heat-sensitive, senior, and
                mobility-challenged pets in the Phoenix metro area.
            </p>

            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-12 text-center">
                <MapPin className="w-16 h-16 text-brand-400 mx-auto mb-4" />
                <h2 className="font-heading text-2xl font-bold text-sage-900 mb-3">
                    Coming Soon
                </h2>
                <p className="text-sage-600 max-w-md mx-auto mb-6">
                    We&apos;re building a comprehensive directory of Phoenix-area vets,
                    groomers, rehab specialists, and more who understand the unique
                    needs of sensitive pets.
                </p>
                <p className="text-sage-500 text-sm">
                    Know a great local resource? Email us at{" "}
                    <a href="mailto:hello@example.com" className="text-brand-600 underline">
                        hello@example.com
                    </a>
                </p>
            </div>

            <div className="mt-16">
                <Newsletter variant="hero" />
            </div>
        </div>
    );
}
