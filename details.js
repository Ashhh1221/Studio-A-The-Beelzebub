// All artwork data stored here
const artworks = {
    1: {
        title: "Urban Glow: Chanel at Night",
        artist: "Photographed by Kyaw Dd, December 2025",
        meta: "Digital Photograph, 1920 x 1080 px<br>Private Collection",
        image: "images/ret 3.jpg",
        description: `
            A striking outdoor "Coco Crush" advertisement illuminates a modern city thoroughfare. The scene captures the motion of evening traffic and the sleek architecture of a high-end shopping 
            district under the warm glow of decorative street lights.
        `,
        objectData: `
            • Medium: Digital photography<br>
            • Date: December 2025<br>
            • Location: Urban shopping district outdoor display (Bangkok, Thailand)
        `,
        exhibitions: "Shown at the Metropolitan Lights digital series and shared in contemporary urban photography galleries.",
        literature: "Related to themes of night photography, festive installations, and contemporary urban light compositions.",
        tags: ["2025", "photography", "night", "Christmas", "urban lights", "festive"]
    },

    2: {
        title: "Echoes of You, Echoes of Us",
        artist: "Photographed by Kyaw Dd, December 2025",
        meta: "Digital photograph<br>",
        image: "images/F3.jpg",
        description: `
            The scene unfolds through overlapping borders of light and architecture, forming a gallery-like space 
            that evokes nostalgia, calmness, and the quiet emotions we find in shared moments.
        `,
        objectData: `
            • Medium: Digital photography<br>
            • Date: December 2024<br>
            • Location: BBCA Bangkok, Thailand
        `,
        exhibitions: "Shown in displays highlighting photography, emotional composition, and layered visual framing.",
        literature: "Connected to themes of memory, atmosphere, and emotional resonance in contemporary night photography.",
        tags: ["2025", "photography", "night", "holiday", "memories", "urban lights"]
    },

    3: {
        title: "Who They Are Lives in Their Playlist",
        artist: "Photographed by Kyaw Dd, December 2025",
        meta: "Digital Photograph, 1920 x 1080 px<br>Private Collection",
        image: "photo/P24.jpg",
        description: `
            A person's playlist is a window to their soul. Every song holds a memory, a feeling, a moment they can't release. It's more than music—it's 
            a quiet confession of who they are and who they're becoming.
        `,
        objectData: `
            • Medium: Digital photography<br>
            • Date: December 2025<br>
            • Location: Riverside outdoor festive display
        `,
        exhibitions: "Moments and stories expressed through curated visual narratives.",
        literature: "Words that reveal emotions, memories, and the quiet truths we carry.",
        tags: ["2025", "photography", "identity", "introspection", "memory"]
    },

    4: {
        title: "The Quiet Things Flowers Tell You",
        artist: "Photographed by Kyaw Dd, 2025",
        meta: "Digital photograph<br>Captured at an outdoor flower-selling landscape",
        image: "photo/P9.jpg",
        description: `
         A peaceful landscape shaped by rows of flowers and soft natural light, 
         where each bloom feels like a quiet voice within the scene. 
         The arrangement of the flower stalls creates gentle visual frames, 
         adding emotional warmth to this everyday marketplace.
        `,
        objectData: `
            • Medium: Digital photography<br>
            • Date: 2025<br>
            • Location: Outdoor flower market / landscape
        `,
        exhibitions: "Featured in showcases exploring floral storytelling, quiet landscapes, and emotional visual framing.",
        literature: "Connected to studies on floral symbolism, landscape emotion, and the art of quiet observation in photography.",
        tags: ["2025", "landscape", "identity", "flowers", "nature"]
    },

    5: {
        title: "Tangled Threads: Urban Intersection",
        artist: "Photographed by Kyaw Dd, December 2025",
        meta: "Digital Photograph, 1280 x 960 px<br>Private Collection",
        image: "images/p3.jpg",
        description: `
            A stark, high-contrast daytime scene of a Bangkok street corner. 
            The composition is defined by a dense web of overhead power 
            lines cutting across classical colonial-style architecture.
            On the ground, the sun casts long, dramatic shadows over 
            street vendors with colorful "True 5G" umbrellas and a 
            passing motorcyclist, capturing the raw, functional 
            beauty of the city's infrastructure.        `,
        objectData: `
            • Medium: Digital photography<br>
            • Date: 2025<br>
            • Location: Historic urban intersection
        `,
        exhibitions: "Shown in displays highlighting photography, emotional composition, and layered visual framing.",
        literature: "Connected to themes of memory, atmosphere, and emotional resonance in contemporary night photography.",
        tags: ["2025", "photography", "night", "holiday", "memories", "urban lights"]
    },

    6: {
        title: "Golden Atrium: Festive Grandeur",
        artist: "Photographed by Kyaw Dd, December 2025",
        meta: "Digital Photograph, 960 x 1280 px<br>Private Collection",
        image: "images/ret 1.jpg",
        description: `
            A majestic, light-filled atrium features a towering white Christmas tree as its centerpiece. 
            The symmetrical architecture, crowned by a grand arched skylight and 
            a classic red clock, creates a timeless atmosphere of holiday elegance.
        `,
        objectData: `
            • Medium: Digital photography<br>
            • Date: 2025<br>
            • Location: Interior festive display, Grand Gallery
        `,
        exhibitions: "Shown in displays highlighting photography, emotional composition, and layered visual framing.",
        literature: "Discussed in modern art journals and history books.",
        tags: ["2025", "photography", "night", "holiday", "memories", "urban lights"]
    },

    7: {
        title: "Floral Elegance at Autumn House",
        artist: "Photographed by Kyaw Dd, December 2025",
        meta: "Digital Photograph, 1280 x 960 px<br>Private Collection",
        image: "photo/P1.jpg",
        description: `
            A delicate close-up of a floral arrangement featuring 
            soft pink carnations and white chrysanthemums. 
            The soft, warm lighting of the shop interior 
            highlights the dewy petals, creating a serene 
            and inviting atmosphere.
        `,
        objectData: `
            • Medium: Digital photography<br>
            • Date: December 2025<br>
            • Location: Interior floral display, Autumn House
        `,
        exhibitions: "Shown at the Seasonal Light Display event and shared in digital galleries.",
        literature: "Related to themes of night photography, festive installations, and contemporary urban light compositions.",
        tags: ["2025", "photography", "night", "Christmas", "urban lights", "festive"]
    },

    8: {
        title: "Moving Melody: Prismatic Echoes",
        artist: "Photographed by Kyaw Dd, December 2025",
        meta: "Digital Photograph, 1920 x 1080 px<br>Private Collection",
        image: "images/ret 4.jpg",
        description: `
            An immersive art installation titled "Moving Melody" 
            featuring a shimmering pillar of iridescent discs. 
            The exhibition space is filled with suspended translucent 
            panels and warm, pink-hued ambient lighting that reflects 
            off various surfaces, creating a dreamlike urban atmosphere.
        `,
        objectData: `
            • Medium: Digital photography<br>
            • Date: December 2025<br>
            • Location: Contemporary art installation, "Moving Melody" exhibit
        `,
        exhibitions: "Shown at the Seasonal Light Display event and shared in digital galleries.",
        literature: "Related to themes of night photography, festive installations, and contemporary urban light compositions.",
        tags: ["2025", "photography", "night", "Christmas", "urban lights", "festive"]
    },

    9: {
        title: "Celestial Canopy: The Grand Atrium",
        artist: "Photographed by Kyaw Dd, December 2025",
        meta: "Digital Photograph, 960 x 1280 px<br>Private Collection",
        image: "images/F2.jpg",
        description: `
            A breathtaking interior view of a grand hall featuring a massive, 
            illuminated Christmas tree centered beneath a gold-tinted arched 
            glass ceiling. The classical architecture, symmetrical staircases, 
            and prominent red clock evoke a sense of timeless elegance 
            during the festive season.
        `,
        objectData: `
            • Medium: Digital photography<br>
            • Date: December 2025<br>
            • Location: Interior festive display, Grand Gallery
        `,
        exhibitions: "Shown at the Seasonal Light Display event and shared in digital galleries.",
        literature: "Related to themes of night photography, festive installations, and contemporary urban light compositions.",
        tags: ["2025", "photography", "night", "Christmas", "urban lights", "festive"]
    },

    10: {
        title: "Chinatown Pulse: Shanghai Mansion",
        artist: "Photographed by Kyaw Dd, December 2025",
        meta: "Digital Photograph, 1920 x 1080 px<br>Private Collection",
        image: "photo/P22.jpg",
        description: `
            A cinematic night scene in the heart of Bangkok's Chinatown, 
            featuring the iconic "Shanghai Mansion" entrance. The 
            composition captures the vibrant street life with glowing 
            red lanterns and local tuk-tuks illuminated by cool blue 
            interior lights, contrasting with the warm, historic 
            architectural details.
        `,
        objectData: `
            • Medium: Digital photography<br>
            • Date: December 2025<br>
            • Location: Yaowarat Road, Bangkok, Thailand
        `,
        exhibitions: "Shown at the Seasonal Light Display event and shared in digital galleries.",
        literature: "Related to themes of night photography, festive installations, and contemporary urban light compositions.",
        tags: ["2025", "photography", "night", "Christmas", "urban lights", "festive"]
    },

    11: {
        title: "Sunlit Sanctuary: Morning Shadows",
        artist: "Photographed by Kyaw Dd, December 2025",
        meta: "Digital Photograph, 1280 x 960 px<br>Private Collection",
        image: "photo/P23.jpg",
        description: `
            A quiet, sun-drenched outdoor patio captures 
            the play of harsh morning light and deep shadows. 
            The composition features potted tropical greenery and simple 
            white garden furniture, offering a peaceful urban retreat 
            tucked away from the city's bustle.
        `,
        objectData: `
            • Medium: Digital photography<br>
            • Date: December 2025<br>
            • Location: Private garden courtyard
        `,
        exhibitions: "Shown at the Seasonal Light Display event and shared in digital galleries.",
        literature: "Related to themes of night photography, festive installations, and contemporary urban light compositions.",
        tags: ["2025", "photography", "night", "Christmas", "urban lights", "festive"]
    },

    12: {
        title: "Midnight Carousel: Circular Radiance",
        artist: "Photographed by Kyaw Dd, December 2025",
        meta: "Digital Photograph, 960 x 1280 px<br>Private Collection",
        image: "photo/P20.jpg",
        description: `
            A dramatic low-angle shot of a classic carousel at night, set against 
            a pitch-black sky. The composition emphasizes the ornate, light-studded rim 
            of the ride, where warm bulbs create a brilliant contrast with the dark 
            void, capturing the nostalgic magic of a midnight carnival.
        `,
        objectData: `
            • Medium: Digital photography<br>
            • Date: December 2025<br>
            • Location: Nocturnal fairground installation
        `,
        exhibitions: "Shown at the Seasonal Light Display event and shared in digital galleries.",
        literature: "Related to themes of night photography, festive installations, and contemporary urban light compositions.",
        tags: ["2025", "photography", "night", "Christmas", "urban lights", "festive"]
    },

    13: {
        title: "Ethereal Drift: Cyan Nocturne",
        artist: "Photographed by Kyaw Dd, December 2025",
        meta: "Digital Photograph, 1280 x 960 px<br>Private Collection",
        image: "photo/P10.jpg",
        description: `
            An evocative, abstract long-exposure capture of a nocturnal landscape. 
            The image is dominated by deep cyan and teal hues, featuring heavy 
            intentional camera movement that transforms trees and streetlights 
            into ghostly, fluid streaks. This piece explores the boundary 
            between reality and dream, emphasizing mood and color over sharp detail.
        `,
        objectData: `
            • Medium: Digital photography<br>
            • Date: December 2025<br>
            • Location: Nocturnal roadside landscape
        `,
        exhibitions: "Shown at the Seasonal Light Display event and shared in digital galleries.",
        literature: "Related to themes of night photography, festive installations, and contemporary urban light compositions.",
        tags: ["2025", "photography", "night", "Christmas", "urban lights", "festive"]
    },

    14: {
        title: "Monumental Motion: Spires in Transit",
        artist: "Photographed by Kyaw Dd, December 2025",
        meta: "Digital Photograph, 960 x 1280 px<br>Private Collection",
        image: "photo/P8.jpg",
        description: `
            A hazy, motion-blurred capture of grand architectural 
            spires under a muted, overcast sky. The photograph uses 
            a sweeping horizontal blur to convey the feeling of a 
            city seen from a moving vehicle, turning a historic 
            landmark into a fleeting, atmospheric silhouette.
        `,
        objectData: `
            • Medium: Digital photography<br>
            • Date: December 2025<br>
            • Location: Urban transit corridor / Historic district
        `,
        exhibitions: "Shown at the Seasonal Light Display event and shared in digital galleries.",
        literature: "Related to themes of night photography, festive installations, and contemporary urban light compositions.",
        tags: ["2025", "photography", "night", "Christmas", "urban lights", "festive"]
    },

};

// Get ID from URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const art = artworks[id];

// Insert data into page
document.getElementById("art-title").innerHTML = art.title;
document.getElementById("art-artist").innerHTML = art.artist;
document.getElementById("art-meta").innerHTML = art.meta;
document.getElementById("art-image").src = art.image;
document.getElementById("art-description").innerHTML = art.description;

document.getElementById("object-data").innerHTML = art.objectData;
document.getElementById("exhibitions").innerHTML = art.exhibitions;
document.getElementById("literature").innerHTML = art.literature;

// tags
const tagBox = document.getElementById("tags");
art.tags.forEach(tag => {
    tagBox.innerHTML += `<a href="#">${tag}</a>`;
});

// Accordion
const headers = document.querySelectorAll(".accordion-header");
headers.forEach(header => {
    header.addEventListener("click", () => {
        const body = header.nextElementSibling;
        body.style.display = body.style.display === "block" ? "none" : "block";
    });
});
