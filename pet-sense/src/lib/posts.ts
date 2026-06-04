import { BlogPost } from "./types";

export const posts: BlogPost[] = [
    {
        slug: "frenchie-heat-safety-phoenix",
        title: "Why I Check Pavement Temperature Before Every Walk",
        excerpt:
            "Living in Phoenix with two French Bulldogs means heat isn't just uncomfortable — it's dangerous. Here's the routine that keeps my dogs safe.",
        date: "2025-06-01",
        category: "heat-safety",
        tags: ["french bulldog", "phoenix", "heat stroke", "brachycephalic"],
        coverImage: "/images/blog/pavement-check.jpg",
        author: "The Sensitive Pet Team",
        content: `
As a French Bulldog owner in Phoenix, I learned the hard way that "it's only 95 degrees" can still mean pavement temperatures over 150°F. My two Frenchies — with their flat faces and compromised airways — can't cool themselves the way other dogs can.

## The 7-Second Rule

Before every single walk, I place the back of my hand flat on the pavement for 7 seconds. If I can't hold it there comfortably, it's too hot for paws. Period.

Here in Phoenix, that means:
- **May through September**: walks only before 7 AM or after 8 PM
- **October through April**: midday walks are usually fine, but always test first
- **Year-round**: carry water, watch for heavy panting, and know the signs of heat distress

## Why Flat-Faced Dogs Are at Higher Risk

Brachycephalic breeds like French Bulldogs, English Bulldogs, Pugs, and Boston Terriers cool themselves primarily through panting. But their shortened airways make panting far less efficient. In extreme heat, they simply cannot move enough air to regulate their body temperature.

Add Phoenix's low humidity (which sounds helpful but actually accelerates dehydration) and reflective concrete, and you have a genuinely dangerous environment for these breeds.

## My Summer Gear Essentials

After years of trial and error, here's what I never leave the house without during Phoenix summers:
- **Cooling vest**: Soaked in cold water before the walk
- **Portable water bowl**: Collapsible, clips to the leash
- **Paw protection booties**: Yes, they look silly. No, I don't care.
- **Thermometer**: Infrared, for checking surfaces quickly

## The Bottom Line

If you have a heat-sensitive breed in a hot climate, your entire routine needs to revolve around temperature management. It's not optional — it's life or death.
    `,
    },
    {
        slug: "senior-dog-mobility-what-i-wish-i-knew",
        title: "What I Wish I'd Known Earlier About Senior Dog Mobility",
        excerpt:
            "Caring for a 16-year-old Lab mix with mobility issues taught me lessons I want every pet owner to learn sooner than I did.",
        date: "2025-06-03",
        category: "senior-care",
        tags: ["senior dog", "mobility", "labrador", "arthritis", "quality of life"],
        coverImage: "/images/blog/senior-lab.jpg",
        author: "The Sensitive Pet Team",
        content: `
When our 16-year-old Lab mix started struggling to stand up from her bed, I thought it was just "getting old." I wish someone had told me that early intervention could have given her months — maybe years — of better quality of life.

## The Signs I Missed

Looking back, the signs started much earlier than I realized:
- **Hesitation at stairs** she used to bound up
- **Slower to rise** after napping, especially in the morning
- **Shifting weight** off one hip when standing
- **Less interest in walks**, not from laziness but from pain

I chalked it all up to aging. But these were signs of arthritis and joint degeneration that could have been managed earlier.

## What Actually Helped

Once we got serious about her care, several things made a real difference:

### Veterinary Interventions
- **Joint supplements** (glucosamine + chondroitin) — started too late, but still helped
- **Anti-inflammatory medication** — carefully managed with blood work monitoring
- **Laser therapy** — surprisingly effective for pain management

### Home Modifications
- **Orthopedic bed** with memory foam — the single biggest quality-of-life improvement
- **Carpet runners** on hardwood floors — gave her traction and confidence
- **Ramp for the car** — preserved her independence on vet trips
- **Raised food and water bowls** — less strain on her neck and shoulders

### Daily Routine Changes
- **Shorter, more frequent walks** instead of one long one
- **Gentle stretching** recommended by our vet
- **Swimming** when possible — zero-impact exercise that she loved

## The Conversation Nobody Wants to Have

Part of senior pet care is being honest about quality of life. Our vet gave us a framework: track good days vs. bad days. When the bad consistently outnumber the good, it's time to have the hard conversation.

That framework gave us clarity during an incredibly emotional time, and I'm grateful for it.

## Start Earlier Than You Think

If your dog is over 7 (for large breeds) or over 10 (for small breeds), talk to your vet about joint health *now*. Don't wait for the limp.
    `,
    },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogPost["category"]): BlogPost[] {
    return posts.filter((p) => p.category === category);
}
