const artworks = {
    1: {
        title: "Silly Night",
        collection: "Retrouvaille",
        image: "images/ret 3.jpg",
        date: "December 2025",
        location: "Bangkok, Thailand",
        size: "1920 × 1080 px",
        medium: "Digital photograph",
        description: `
            A luxury advertisement glows above the evening traffic,
            turning an ordinary city crossing into a polished theatre
            of light, movement, and reflection.
        `,
        tags: ["night", "city", "light"]
    },

    2: {
        title: "Echoes of You, Echoes of Us",
        collection: "Retrouvaille",
        image: "images/F3.jpg",
        date: "December 2024",
        location: "BBCA, Bangkok",
        size: "Digital edition",
        medium: "Digital photograph",
        description: `
            Overlapping frames of light and architecture form a dreamlike
            gallery space. The image considers memory as something shared,
            repeated, and quietly reshaped over time.
        `,
        tags: ["memory", "emotion", "architecture"]
    },

    3: {
        title: "Who They Are Lives in Their Playlist",
        collection: "Retrouvaille",
        image: "photo/P24.jpg",
        date: "December 2025",
        location: "Bangkok, Thailand",
        size: "1920 × 1080 px",
        medium: "Digital photograph",
        description: `
            Music becomes an indirect portrait. The photograph explores
            how songs hold private memories, changing identities, and
            feelings that are often difficult to express directly.
        `,
        tags: ["identity", "music", "memory"]
    },

    4: {
        title: "The Quiet Things Flowers Tell You",
        collection: "Retrouvaille",
        image: "photo/P9.jpg",
        date: "2025",
        location: "Outdoor flower market",
        size: "Digital edition",
        medium: "Digital photograph",
        description: `
            Rows of flowers and gentle natural light transform an everyday
            market into a quiet landscape. Each bloom becomes a small voice
            inside the larger composition.
        `,
        tags: ["flowers", "nature", "quiet"]
    },

    5: {
        title: "Tangled Threads: Urban Intersection",
        collection: "Retrouvaille",
        image: "images/p3.jpg",
        date: "December 2025",
        location: "Historic Bangkok intersection",
        size: "1280 × 960 px",
        medium: "Digital photograph",
        description: `
            A dense web of power lines cuts across older architecture while
            vendors and traffic move beneath it. The photograph finds visual
            order within the practical complexity of the street.
        `,
        tags: ["street", "infrastructure", "movement"]
    },

    6: {
        title: "Royal Hall",
        collection: "Retrouvaille",
        image: "images/ret 1.jpg",
        date: "December 2025",
        location: "Grand Gallery interior",
        size: "960 × 1280 px",
        medium: "Digital photograph",
        description: `
            A monumental atrium rises around a luminous seasonal centrepiece.
            Symmetry, warm light, and classical details give the public
            interior a ceremonial stillness.
        `,
        tags: ["architecture", "symmetry", "light"]
    },

    7: {
        title: "Floral Elegance at Autumn House",
        collection: "Oneirataxia",
        image: "photo/P1.jpg",
        date: "December 2025",
        location: "Autumn House",
        size: "1280 × 960 px",
        medium: "Digital photograph",
        description: `
            Pink carnations and white chrysanthemums emerge from warm
            interior light. Close framing turns a familiar arrangement
            into a soft study of colour and texture.
        `,
        tags: ["flowers", "still life", "warmth"]
    },

    8: {
        title: "Moving Melody: Prismatic Echoes",
        collection: "Oneirataxia",
        image: "images/ret 4.jpg",
        date: "December 2025",
        location: "Moving Melody installation",
        size: "1920 × 1080 px",
        medium: "Digital photograph",
        description: `
            Iridescent discs and suspended translucent panels scatter
            colour throughout the exhibition space, dissolving its edges
            into a prismatic and dreamlike environment.
        `,
        tags: ["installation", "prismatic", "dream"]
    },

    9: {
        title: "Celestial Canopy: The Grand Atrium",
        collection: "Oneirataxia",
        image: "images/F2.jpg",
        date: "December 2025",
        location: "Grand Gallery interior",
        size: "960 × 1280 px",
        medium: "Digital photograph",
        description: `
            An illuminated centrepiece rises beneath a gold-tinted glass
            ceiling. The low viewpoint draws the eye upward through
            staircases, arches, and repeating architectural lines.
        `,
        tags: ["atrium", "architecture", "scale"]
    },

    10: {
        title: "Chinatown Pulse: Shanghai Mansion",
        collection: "Oneirataxia",
        image: "photo/P22.jpg",
        date: "December 2025",
        location: "Yaowarat Road, Bangkok",
        size: "1920 × 1080 px",
        medium: "Digital photograph",
        description: `
            Red lanterns, historic details, and the cool interior lights
            of tuk-tuks meet outside Shanghai Mansion. Contrasting colours
            hold the energy of Yaowarat after dark.
        `,
        tags: ["Yaowarat", "night", "cinematic"]
    },

    11: {
        title: "Sunlit Sanctuary: Morning Shadows",
        collection: "Oneirataxia",
        image: "photo/P23.jpg",
        date: "December 2025",
        location: "Private garden courtyard",
        size: "1280 × 960 px",
        medium: "Digital photograph",
        description: `
            Harsh morning light and deep shadows divide a small courtyard
            into calm geometric shapes. Plants and simple furniture suggest
            a private retreat inside the city.
        `,
        tags: ["morning", "shadows", "calm"]
    },

    12: {
        title: "Midnight Carousel: Circular Radiance",
        collection: "Retrouvaille",
        image: "photo/P20.jpg",
        date: "December 2025",
        location: "Night fairground",
        size: "960 × 1280 px",
        medium: "Digital photograph",
        description: `
            A carousel's ornate rim cuts across a nearly black sky.
            Repeating warm bulbs preserve the nostalgic energy of the ride
            while the surrounding fairground disappears.
        `,
        tags: ["carousel", "night", "nostalgia"]
    },

    13: {
        title: "Ethereal Drift: Cyan Nocturne",
        collection: "Oneirataxia",
        image: "photo/P10.jpg",
        date: "December 2025",
        location: "Nocturnal roadside landscape",
        size: "1280 × 960 px",
        medium: "Digital photograph",
        description: `
            Intentional camera movement stretches trees and streetlights
            into deep cyan gestures. The landscape is recorded less as a
            location than as a passing sensation.
        `,
        tags: ["abstract", "cyan", "movement"]
    },

    14: {
        title: "Monumental Motion: Spires in Transit",
        collection: "Retrouvaille",
        image: "photo/P8.jpg",
        date: "December 2025",
        location: "Bangkok historic district",
        size: "960 × 1280 px",
        medium: "Digital photograph",
        description: `
            Historic spires blur beneath an overcast sky as they are seen
            from a moving vehicle. Architecture becomes a fleeting silhouette
            suspended between recognition and memory.
        `,
        tags: ["spires", "transit", "motion"]
    }
};


// Get all artwork IDs
const artworkIds = Object.keys(artworks)
    .map(Number)
    .sort((a, b) => a - b);


// Get artwork ID from the URL
const parameters = new URLSearchParams(window.location.search);

let currentId = Number(parameters.get("id")) || 1;


// Short selector helper
const select = selector => document.querySelector(selector);


// ========================================
// DISPLAY ARTWORK
// ========================================

function renderArtwork(id) {
    const artwork = artworks[id];

    // Invalid artwork ID
    if (!artwork) {
        select(".art-stage").hidden = true;
        select(".details-card").hidden = true;
        select("#error-message").hidden = false;

        return;
    }

    currentId = id;

    const position = artworkIds.indexOf(id);

    const currentNumber = String(position + 1)
        .padStart(2, "0");

    const totalNumber = String(artworkIds.length)
        .padStart(2, "0");

    const mainImage = select("#art-image");

    // Start image transition
    mainImage.classList.add("switching");

    window.setTimeout(() => {
        // Change browser title
        document.title = `${artwork.title} | Studio A`;

        // Main photograph
        mainImage.src = artwork.image;
        mainImage.alt = artwork.title;

        // Photograph inside text panel
        select("#detail-image").src = artwork.image;

        select("#detail-image").alt =
            `Detail view of ${artwork.title}`;

        // Main information
        select("#art-title").textContent =
            artwork.title;

        select("#art-collection").textContent =
            `${artwork.collection} · Artwork ${currentNumber}`;

        select("#art-artist").textContent =
            `Photographed by Kyaw Dd · ${artwork.date}`;

        select("#art-caption").textContent =
            `${artwork.title} — ${artwork.date}`;

        select("#art-description").textContent =
            artwork.description.trim();

        // Object information
        select("#art-medium").textContent =
            `${artwork.medium}, ${artwork.size}`;

        select("#art-date").textContent =
            artwork.date;

        select("#art-location").textContent =
            artwork.location;

        select("#art-ownership").textContent =
            "Studio A Collection";

        // Story section
        select("#story-heading").textContent =
            `A moment from ${artwork.location}`;

        select("#art-story").innerHTML =
            buildStory(artwork);

        // Page counter
        select("#current-number").textContent =
            currentNumber;

        select("#total-number").textContent =
            totalNumber;

        // Scroll the right panel back to the top
        select("#details-scroll").scrollTo({
            top: 0,
            behavior: "smooth"
        });

        // End image transition
        mainImage.classList.remove("switching");
    }, 200);
}


// ========================================
// CREATE THE MATCHING STORY
// ========================================

function buildStory(artwork) {
    const moods = artwork.tags.join(", ");

    return `
        <p>
            This frame was found in ${artwork.location} during
            ${artwork.date}. It began as an ordinary passing scene,
            but the arrangement of light, colour, and surrounding
            details gave the moment its own quiet character.
        </p>

        <p>
            ${artwork.description.trim()}
            Rather than documenting only what was there, the photograph
            preserves how the place felt for the brief instant before
            the scene changed.
        </p>

        <p>
            Within the ${artwork.collection} collection, the image
            connects ideas of ${moods}. It invites the viewer to slow
            down, remain with the details, and imagine what may have
            happened immediately before and after the shutter was released.
        </p>
    `;
}


// ========================================
// BROWSER BACK AND FORWARD SUPPORT
// ========================================

window.addEventListener("popstate", () => {
    const updatedParameters =
        new URLSearchParams(window.location.search);

    const updatedId =
        Number(updatedParameters.get("id")) || 1;

    renderArtwork(updatedId);
});


// ========================================
// INITIAL PAGE LOAD
// ========================================

renderArtwork(currentId);