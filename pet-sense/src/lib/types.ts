export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: "heat-safety" | "senior-care" | "mobility" | "product-review";
    tags: string[];
    coverImage: string;
    content: string;
    author: string;
}

export interface Product {
    name: string;
    description: string;
    image: string;
    rating: number;
    affiliateUrl: string;
    source: "amazon" | "chewy";
    price: string;
    pros: string[];
    cons: string[];
}

export interface DirectoryEntry {
    name: string;
    type: "vet" | "groomer" | "rehab" | "boarding" | "supply";
    address: string;
    phone: string;
    website?: string;
    description: string;
    specialties: string[];
}
