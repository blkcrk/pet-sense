import Newsletter from "@/components/Newsletter";

export default function About() {
    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="font-heading text-4xl font-bold text-sage-900 mb-8">
                Hey, I&apos;m Glad You&apos;re Here
            </h1>

            <div className="space-y-6 text-sage-700 leading-relaxed">
                <p className="text-lg">
                    I&apos;ve had bulldogs in my life for as long as I can remember. There&apos;s
                    something about that stubborn, snoring, impossibly lovable personality
                    that got me early and never let go. Right now I share my home in
                    Phoenix, Arizona with two French Bulldogs who run the place — and
                    honestly, I wouldn&apos;t have it any other way.
                </p>

                {/* Dog photos placeholder */}
                <div className="grid grid-cols-2 gap-4 my-8">
                    <div className="bg-sage-100 rounded-xl h-64 flex items-center justify-center text-sage-400 text-6xl">
                        🐕
                    </div>
                    <div className="bg-sage-100 rounded-xl h-64 flex items-center justify-center text-sage-400 text-6xl">
                        🐕
                    </div>
                </div>

                <p>
                    If you&apos;ve ever owned a Frenchie — or any flat-faced breed — in a place
                    where summer temps regularly crack 115°F, you know the kind of worry I&apos;m
                    talking about. The kind where you&apos;re up before dawn to squeeze in a walk
                    before the pavement turns into a griddle. The kind where you keep one eye
                    on your dog and the other on the thermometer, all summer long.
                </p>

                <p>
                    I&apos;ve watched my dogs overheat. I&apos;ve rushed to cool them down with wet
                    towels and cold tile floors, heart pounding, wondering if I waited too
                    long. That fear changes you. It makes you obsessive about checking
                    pavement temps, researching cooling gear, and rethinking every part of
                    your routine from May through September.
                </p>

                <div className="bg-brand-50 rounded-2xl p-8 my-8 border border-brand-100">
                    <p className="text-lg italic text-sage-800">
                        Most pet advice out there is written for people with Labs in Vermont.
                        It doesn&apos;t say much to someone standing in a Phoenix parking lot at
                        6:45 AM, already feeling the heat rise off the asphalt, wondering
                        if it&apos;s safe enough for a five-minute potty break.
                    </p>
                </div>

                <p>
                    And then there was our girl — a Lab mix who made it to 16. Sixteen
                    incredible, stubborn, sweet years. But those last couple of years were
                    hard. Watching her struggle to stand up from her bed in the morning.
                    Seeing her hesitate at stairs she used to fly up. The slow, careful way
                    she&apos;d lower herself down, trying not to let her back legs give out.
                </p>

                <p>
                    I spent months piecing together information from vet visits, forums,
                    late-night Google searches, and a whole lot of trial and error. Which
                    joint supplements actually work? Is laser therapy worth it? What kind of
                    bed will she actually be able to get out of? I bought ramps that were too
                    steep, harnesses that didn&apos;t fit, and supplements that did nothing — all
                    because there wasn&apos;t one trustworthy place that had figured this out
                    already.
                </p>

                <p>
                    She taught me more about patience, empathy, and paying attention than I
                    could ever put into words. And when it was time to let her go, I promised
                    myself I&apos;d do something with everything she taught me.
                </p>

                <h2 className="font-heading text-2xl font-bold text-sage-900 mt-12 mb-4">
                    That&apos;s What This Site Is
                </h2>

                <p>
                    This is the resource I wish I&apos;d had. Not a corporate pet blog churning
                    out generic listicles. Not an affiliate site slapping &ldquo;best dog bed&rdquo; on
                    whatever pays the highest commission. This is me sharing what I&apos;ve
                    actually learned — the hard way, the expensive way, the 3 AM way — about
                    caring for pets who need a little extra thought.
                </p>

                <p>
                    Specifically:
                </p>

                <ul className="space-y-3 ml-4">
                    <li>
                        🌡️ <strong>Heat-sensitive breeds</strong> — Frenchies, Bulldogs,
                        Pugs, and any pet struggling in extreme heat. I live this every day,
                        every summer, in one of the hottest cities in the country.
                    </li>
                    <li>
                        🐾 <strong>Senior pets</strong> — the nutrition, the medications, the
                        home modifications, and the quality-of-life conversations nobody
                        prepares you for.
                    </li>
                    <li>
                        ♿ <strong>Mobility-challenged pets</strong> — the gear that actually
                        works, the therapies worth trying, and the small changes at home that
                        make a big difference.
                    </li>
                </ul>

                <p className="mt-6">
                    Every product I recommend is something I&apos;ve used or thoroughly
                    researched. Every article starts from something real — a vet visit, a
                    scary moment, a product that surprised me, a conversation with another
                    pet owner in the same boat.
                </p>

                <h2 className="font-heading text-2xl font-bold text-sage-900 mt-12 mb-4">
                    Why Phoenix Matters
                </h2>

                <p>
                    I love this city. But it is actively trying to cook my dogs six months
                    out of the year. Phoenix pet ownership is a different game — and most
                    national pet sites don&apos;t understand that. The pavement burns, the dry
                    heat dehydrates fast, and there are about four months where outdoor time
                    is basically limited to before sunrise and after sunset.
                </p>

                <p>
                    That&apos;s why part of this site is dedicated to local Phoenix resources —
                    the vets, groomers, rehab specialists, and pet-friendly spaces that
                    understand what it means to care for a sensitive pet in the desert.
                </p>

                <h2 className="font-heading text-2xl font-bold text-sage-900 mt-12 mb-4">
                    Let&apos;s Figure This Out Together
                </h2>

                <p>
                    I&apos;m not a veterinarian. I&apos;m a pet owner who&apos;s been through it — the
                    heat scares, the mobility struggles, the impossible end-of-life
                    decisions. I&apos;m still learning, and I&apos;ll always be honest about what I
                    know and what I don&apos;t.
                </p>

                <p>
                    If you&apos;re here because you&apos;re worried about your dog in the heat, or
                    because your senior cat isn&apos;t jumping up on the bed anymore, or because
                    you just want to know you&apos;re not alone in this — you&apos;re in the right
                    place.
                </p>

                <p className="text-lg font-medium text-sage-900 mt-8">
                    — From our house to yours 🐾
                </p>
            </div>

            <div className="mt-16">
                <Newsletter variant="hero" />
            </div>
        </div>
    );
}
