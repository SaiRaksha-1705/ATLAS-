// ==========================================
// ATLAS - HISTORICAL EXPLORATION PLATFORM
// ==========================================

// 1. HISTORICAL EVENTS DATABASE

const events = [
    {
        year: "3100 BCE",
        title: "Unification of Ancient Egypt",
        description: "The unification of Upper and Lower Egypt is traditionally associated with King Narmer, marking the beginning of dynastic Egyptian civilization.",
        era: "ancient",
        location: [26.8206, 30.8025],
        place: "Egypt"
    },
    {
        year: "2600 BCE",
        title: "The Great Pyramid of Giza",
        description: "The Great Pyramid was constructed during the reign of Pharaoh Khufu, becoming one of the most remarkable architectural achievements of the ancient world.",
        era: "ancient",
        location: [29.9792, 31.1342],
        place: "Giza, Egypt"
    },
    {
        year: "2500 BCE",
        title: "Indus Valley Civilization",
        description: "The Indus Valley Civilization flourished across parts of present-day Pakistan and northwestern India, known for its urban planning and sophisticated drainage systems.",
        era: "ancient",
        location: [27.3290, 68.1380],
        place: "Mohenjo-daro"
    },
    {
        year: "776 BCE",
        title: "First Recorded Olympic Games",
        description: "Traditional accounts date the first recorded Olympic Games to 776 BCE at Olympia in ancient Greece.",
        era: "ancient",
        location: [37.6386, 21.6300],
        place: "Olympia, Greece"
    },
    {
        year: "563 BCE",
        title: "Birth of Gautama Buddha",
        description: "Traditional Buddhist chronology places the birth of Gautama Buddha in the 6th century BCE. Historical dating remains debated.",
        era: "ancient",
        location: [27.4833, 83.2760],
        place: "Lumbini"
    },
    {
        year: "27 BCE",
        title: "Beginning of the Roman Empire",
        description: "Octavian became Augustus, establishing the Roman Principate and beginning the imperial period of Roman history.",
        era: "ancient",
        location: [41.9028, 12.4964],
        place: "Rome, Italy"
    },
    {
        year: "622 CE",
        title: "The Hijra",
        description: "Prophet Muhammad's migration from Mecca to Medina marks a foundational event in Islamic history and the beginning of the Islamic calendar.",
        era: "medieval",
        location: [24.4672, 39.6111],
        place: "Medina, Saudi Arabia"
    },
    {
        year: "1206 CE",
        title: "Delhi Sultanate Established",
        description: "Qutb al-Din Aibak established the Mamluk dynasty, marking the beginning of the Delhi Sultanate.",
        era: "medieval",
        location: [28.5245, 77.1855],
        place: "Delhi, India"
    },
    {
        year: "1347 CE",
        title: "The Black Death",
        description: "The plague spread across Europe, Asia and North Africa, causing enormous demographic and social changes.",
        era: "medieval",
        location: [43.7696, 11.2558],
        place: "Florence, Italy"
    },
    {
        year: "1492 CE",
        title: "Columbus Reaches the Americas",
        description: "Christopher Columbus reached the Caribbean in 1492, initiating sustained contact between Europe and the Americas, with devastating consequences for Indigenous populations.",
        era: "medieval",
        location: [24.0520, -74.5240],
        place: "Bahamas"
    },
    {
        year: "1757 CE",
        title: "Battle of Plassey",
        description: "The East India Company's victory over Siraj ud-Daulah marked a major turning point in the expansion of British political power in Bengal.",
        era: "modern",
        location: [23.7980, 88.2500],
        place: "Plassey, India"
    },
    {
        year: "1789 CE",
        title: "French Revolution",
        description: "A political and social revolution began in France, transforming its monarchy and influencing political movements across the world.",
        era: "modern",
        location: [48.8566, 2.3522],
        place: "Paris, France"
    },
    {
        year: "1947 CE",
        title: "Indian Independence",
        description: "India gained independence from British colonial rule on 15 August 1947. Partition accompanied independence and displaced millions.",
        era: "modern",
        location: [28.6139, 77.2090],
        place: "New Delhi, India"
    },
    {
        year: "1969 CE",
        title: "Apollo 11 Moon Landing",
        description: "Apollo 11 successfully landed humans on the Moon. Neil Armstrong and Buzz Aldrin became the first people to walk on its surface.",
        era: "modern",
        location: [28.5729, -80.6490],
        place: "Kennedy Space Center, USA"
    },
    {
    year: "c. 3500 BCE",
    title: "Rise of Sumerian Civilization",
    description: "Sumer emerged in Mesopotamia, developing some of the world's earliest cities, organized governments and complex societies.",
    era: "ancient",
    location: [31.3242, 45.6375],
    place: "Southern Mesopotamia, Iraq"
},
{
    year: "c. 3200 BCE",
    title: "Invention of Cuneiform Writing",
    description: "The Sumerians developed cuneiform, one of the earliest known writing systems, initially used for recording trade and administration.",
    era: "ancient",
    location: [31.3242, 45.6375],
    place: "Uruk, Mesopotamia"
},
{
    year: "c. 3100 BCE",
    title: "Early Dynastic Period of Sumer",
    description: "Sumerian city-states such as Ur, Uruk and Lagash developed into powerful political and economic centres.",
    era: "ancient",
    location: [31.0461, 46.2573],
    place: "Ur, Iraq"
},
{
    year: "c. 2334 BCE",
    title: "Rise of the Akkadian Empire",
    description: "Sargon of Akkad established an empire that united several Mesopotamian city-states under centralized rule.",
    era: "ancient",
    location: [33.1, 44.1],
    place: "Akkad, Mesopotamia"
},
{
    year: "c. 2250 BCE",
    title: "Construction of the Ziggurat of Ur",
    description: "A monumental stepped temple platform was constructed at Ur, demonstrating the architectural and religious achievements of Mesopotamia.",
    era: "ancient",
    location: [30.9628, 46.1031],
    place: "Ur, Iraq"
},
{
    year: "c. 1754 BCE",
    title: "Code of Hammurabi",
    description: "Babylonian king Hammurabi established a famous collection of laws addressing trade, property, family matters and justice.",
    era: "ancient",
    location: [32.5420, 44.4200],
    place: "Babylon, Iraq"
},
{
    year: "c. 1600 BCE",
    title: "Rise of the Shang Dynasty",
    description: "The Shang Dynasty emerged in China, becoming known for bronze craftsmanship, royal tombs and early Chinese writing.",
    era: "ancient",
    location: [36.1, 114.3],
    place: "Anyang, China"
},
{
    year: "c. 1500 BCE",
    title: "Beginning of the Vedic Period",
    description: "The Vedic period began in the Indian subcontinent, characterized by the composition and development of early Vedic literature.",
    era: "ancient",
    location: [29.9457, 78.1642],
    place: "Northwestern Indian Subcontinent"
},
{
    year: "c. 1046 BCE",
    title: "Beginning of the Zhou Dynasty",
    description: "The Zhou overthrew the Shang Dynasty and introduced the Mandate of Heaven as a justification for political authority.",
    era: "ancient",
    location: [34.27, 108.95],
    place: "Western Zhou, China"
},
{
    year: "776 BCE",
    title: "First Recorded Olympic Games",
    description: "Traditional records identify this year as the beginning of the ancient Olympic Games, held in honour of Zeus.",
    era: "ancient",
    location: [37.6386, 21.6300],
    place: "Olympia, Greece"
},
{
    year: "c. 753 BCE",
    title: "Traditional Founding of Rome",
    description: "According to Roman tradition, Romulus founded the city of Rome, which would eventually become the centre of a vast empire.",
    era: "ancient",
    location: [41.9028, 12.4964],
    place: "Rome, Italy"
},
{
    year: "c. 563 BCE",
    title: "Birth of Gautama Buddha",
    description: "Siddhartha Gautama, later known as Buddha, was traditionally believed to have been born in Lumbini. He became the founder of Buddhism.",
    era: "ancient",
    location: [27.4833, 83.2760],
    place: "Lumbini, Nepal"
},
{
    year: "c. 550 BCE",
    title: "Rise of the Persian Empire",
    description: "Cyrus the Great established the Achaemenid Persian Empire, which grew into one of the largest empires of the ancient world.",
    era: "ancient",
    location: [30.1930, 53.1700],
    place: "Persia, Iran"
},
{
    year: "509 BCE",
    title: "Establishment of the Roman Republic",
    description: "Roman tradition places the overthrow of the monarchy and establishment of the Roman Republic in this year.",
    era: "ancient",
    location: [41.9028, 12.4964],
    place: "Rome, Italy"
},
{
    year: "490 BCE",
    title: "Battle of Marathon",
    description: "Athenian forces defeated a Persian invasion force, becoming an important event in the Greco-Persian Wars.",
    era: "ancient",
    location: [38.1530, 23.9620],
    place: "Marathon, Greece"
},
{
    year: "480 BCE",
    title: "Battle of Thermopylae",
    description: "A Greek force led by Spartan King Leonidas resisted the Persian army at the narrow pass of Thermopylae.",
    era: "ancient",
    location: [38.7960, 22.5360],
    place: "Thermopylae, Greece"
},
{
    year: "480 BCE",
    title: "Battle of Salamis",
    description: "Greek naval forces defeated the Persian fleet in a decisive sea battle during the Greco-Persian Wars.",
    era: "ancient",
    location: [37.9650, 23.4900],
    place: "Salamis, Greece"
},
{
    year: "431 BCE",
    title: "Beginning of the Peloponnesian War",
    description: "Athens and Sparta entered a prolonged conflict that weakened the major Greek city-states.",
    era: "ancient",
    location: [37.9838, 23.7275],
    place: "Athens, Greece"
},
{
    year: "336 BCE",
    title: "Alexander the Great Becomes King",
    description: "Alexander III ascended the Macedonian throne and began the military campaigns that would create an enormous empire.",
    era: "ancient",
    location: [40.6320, 22.9400],
    place: "Pella, Macedonia"
},
{
    year: "331 BCE",
    title: "Battle of Gaugamela",
    description: "Alexander the Great defeated Persian King Darius III, marking a decisive turning point in the conquest of the Persian Empire.",
    era: "ancient",
    location: [36.56, 43.25],
    place: "Near Mosul, Iraq"
},
{
    year: "322 BCE",
    title: "Death of Alexander the Great",
    description: "Alexander died in Babylon at the age of 32. His death led to the fragmentation of his empire among competing generals.",
    era: "ancient",
    location: [32.5420, 44.4200],
    place: "Babylon, Iraq"
},
{
    year: "268 BCE",
    title: "Ashoka Becomes Mauryan Emperor",
    description: "Ashoka ascended the Mauryan throne and eventually became one of India's most influential rulers, promoting Buddhism and dhamma.",
    era: "ancient",
    location: [25.5941, 85.1376],
    place: "Pataliputra, India"
},
{
    year: "261 BCE",
    title: "Kalinga War",
    description: "The Mauryan Empire under Ashoka conquered Kalinga. The devastating conflict is traditionally associated with Ashoka's transformation and embrace of Buddhist principles.",
    era: "ancient",
    location: [20.4625, 85.8828],
    place: "Kalinga, India"
},
{
    year: "221 BCE",
    title: "Unification of China",
    description: "Qin Shi Huang unified several warring states and became the first emperor of a unified Chinese empire.",
    era: "ancient",
    location: [34.2658, 108.9541],
    place: "Xianyang, China"
},
{
    year: "27 BCE",
    title: "Beginning of the Roman Empire",
    description: "Octavian received the title Augustus, marking the transition from the Roman Republic to the Roman Empire.",
    era: "ancient",
    location: [41.9028, 12.4964],
    place: "Rome, Italy"
}
    
];


// 2. CIVILIZATIONS DATABASE

const civilizations = [
    {
        symbol: "𓂀",
        name: "Ancient Egypt",
        period: "c. 3100 BCE – 30 BCE",
        description: "A civilization along the Nile, renowned for monumental architecture, hieroglyphic writing and complex religious traditions."
    },
    {
        symbol: "𒀭",
        name: "Mesopotamia",
        period: "c. 3500 BCE onward",
        description: "The region between the Tigris and Euphrates rivers, associated with early cities, writing systems and complex states."
    },
    {
        symbol: "☸",
        name: "Indus Valley",
        period: "c. 2600 – 1900 BCE",
        description: "An urban civilization known for planned cities, standardized weights and sophisticated water management."
    },
    {
        symbol: "🏛",
        name: "Ancient Greece",
        period: "c. 800 – 146 BCE",
        description: "A world of city-states, philosophy, mathematics, theatre and influential political ideas."
    },
    {
        symbol: "⚔",
        name: "Roman Empire",
        period: "27 BCE – 476 CE (Western Empire)",
        description: "An expansive imperial civilization that shaped law, engineering, architecture and European history."
    },
    {
        symbol: "🪷",
        name: "Maurya Empire",
        period: "c. 322 – 185 BCE",
        description: "One of the largest empires in ancient India, associated with Chandragupta Maurya and Emperor Ashoka."
    }
];


// 3. TIMELINE RENDERING

const timelineContainer = document.getElementById("timeline-events");

function displayEvents(era = "all") {

    timelineContainer.innerHTML = "";

    const filteredEvents = events.filter(event =>
        era === "all" || event.era === era
    );

    filteredEvents.forEach(event => {

        const card = document.createElement("div");
        card.className = "event-card";

        card.innerHTML = `
            <span class="event-year">${event.year}</span>
            <h3>${event.title}</h3>
            <p>${event.description}</p>
            <span class="event-era">${event.era} · ${event.place}</span>
        `;

        timelineContainer.appendChild(card);

    });
}

displayEvents();


// 4. TIMELINE FILTER BUTTONS

document.querySelectorAll(".filter").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".filter").forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        displayEvents(button.dataset.era);

    });

});


// 5. CIVILIZATION EXPLORER

const civilizationGrid = document.getElementById("civilization-grid");

civilizations.forEach(civilization => {

    const card = document.createElement("div");

    card.className = "civilization-card";

    card.innerHTML = `
        <div class="symbol">${civilization.symbol}</div>
        <h3>${civilization.name}</h3>
        <span class="event-year">${civilization.period}</span>
        <p style="margin-top:15px">${civilization.description}</p>
    `;

    civilizationGrid.appendChild(card);

});


// 6. INTERACTIVE WORLD MAP

const map = L.map("map").setView([25, 30], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

events.forEach(event => {

    const marker = L.marker(event.location).addTo(map);

    marker.bindPopup(`
        <b>${event.title}</b><br>
        ${event.year}<br>
        ${event.place}
    `);

    marker.on("click", () => {

        document.getElementById("event-details").innerHTML = `
            <span class="event-year">${event.year} · ${event.place}</span>
            <h3>${event.title}</h3>
            <p>${event.description}</p>
        `;

    });

});


// 7. HISTORICAL DISCOVERY

const facts = [
    "The University of Oxford existed before the Aztec Empire was founded.",
    "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid of Giza.",
    "The ancient Romans used a form of concrete that could survive in seawater.",
    "The Indus Valley Civilization had sophisticated urban drainage systems.",
    "The Library of Alexandria was one of the most famous centres of scholarship in the ancient world.",
    "Mansa Musa's 1324 pilgrimage to Mecca became famous for the extraordinary wealth he displayed."
];

const factDisplay = document.getElementById("daily-fact");

function showRandomFact() {

    const randomIndex = Math.floor(Math.random() * facts.length);

    factDisplay.textContent = facts[randomIndex];

}

document.getElementById("new-fact").addEventListener("click", showRandomFact);

showRandomFact();


// ==========================================
// ATLAS INITIALIZATION COMPLETE
// ==========================================

console.log("ATLAS initialized successfully.");
console.log("Historical events:", events.length);
console.log("Civilizations:", civilizations.length);