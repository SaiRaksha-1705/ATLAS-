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
},
{
    year: "476 CE",
    title: "Fall of the Western Roman Empire",
    description: "The last Western Roman Emperor, Romulus Augustulus, was deposed by the Germanic leader Odoacer. This event traditionally marks the end of the Western Roman Empire.",
    era: "medieval",
    location: [41.9028, 12.4964],
    place: "Rome, Italy"
},
{
    year: "527 CE",
    title: "Reign of Justinian I Begins",
    description: "Justinian I became Byzantine Emperor and initiated major legal reforms, architectural projects and military campaigns to restore former Roman territories.",
    era: "medieval",
    location: [41.0082, 28.9784],
    place: "Constantinople, Byzantine Empire"
},
{
    year: "c. 570 CE",
    title: "Birth of Prophet Muhammad",
    description: "Muhammad was born in Mecca and later became the central religious figure of Islam, founding a movement that transformed the history of Arabia and beyond.",
    era: "medieval",
    location: [21.4225, 39.8262],
    place: "Mecca, Arabia"
},
{
    year: "622 CE",
    title: "The Hijra",
    description: "Prophet Muhammad and his followers migrated from Mecca to Medina. This migration marks the beginning of the Islamic calendar.",
    era: "medieval",
    location: [24.4672, 39.6111],
    place: "Medina, Arabia"
},
{
    year: "632 CE",
    title: "Death of Prophet Muhammad",
    description: "The death of Muhammad led to the establishment of the Rashidun Caliphate and a new phase in the political and religious history of the Islamic world.",
    era: "medieval",
    location: [24.4672, 39.6111],
    place: "Medina, Arabia"
},
{
    year: "661 CE",
    title: "Beginning of the Umayyad Caliphate",
    description: "The Umayyad dynasty established its rule over the Islamic Caliphate, eventually expanding its territories across parts of Asia, Africa and Europe.",
    era: "medieval",
    location: [33.5138, 36.2765],
    place: "Damascus, Syria"
},
{
    year: "711 CE",
    title: "Umayyad Conquest of Iberia",
    description: "Muslim forces under Tariq ibn Ziyad crossed into the Iberian Peninsula, beginning a major transformation in the region's political and cultural history.",
    era: "medieval",
    location: [36.1408, -5.3536],
    place: "Gibraltar"
},
{
    year: "732 CE",
    title: "Battle of Tours",
    description: "Frankish forces led by Charles Martel defeated an Umayyad army near Tours, becoming an important event in the history of medieval Western Europe.",
    era: "medieval",
    location: [46.5860, 0.3400],
    place: "Near Poitiers, France"
},
{
    year: "750 CE",
    title: "Abbasid Revolution",
    description: "The Abbasids overthrew the Umayyad Caliphate in most of the Islamic world, establishing a new dynasty that would oversee a major period of intellectual and cultural development.",
    era: "medieval",
    location: [32.5420, 44.4200],
    place: "Mesopotamia"
},
{
    year: "793 CE",
    title: "Viking Raid on Lindisfarne",
    description: "A Viking raid on the monastery of Lindisfarne in England became one of the most famous early events associated with the Viking Age.",
    era: "medieval",
    location: [55.6700, -1.8000],
    place: "Lindisfarne, England"
},
{
    year: "800 CE",
    title: "Coronation of Charlemagne",
    description: "Pope Leo III crowned Charlemagne as Emperor in Rome, strengthening the relationship between political authority and the Catholic Church in medieval Europe.",
    era: "medieval",
    location: [41.9028, 12.4964],
    place: "Rome, Italy"
},
{
    year: "862 CE",
    title: "Traditional Founding of Novgorod",
    description: "According to the Primary Chronicle, Rurik established his rule at Novgorod, an important episode in traditional accounts of the formation of early Rus.",
    era: "medieval",
    location: [58.5256, 31.2755],
    place: "Novgorod, Russia"
},
{
    year: "960 CE",
    title: "Beginning of the Song Dynasty",
    description: "The Song Dynasty was established in China, ushering in significant developments in printing, technology, commerce, science and urban life.",
    era: "medieval",
    location: [34.7970, 114.3070],
    place: "Kaifeng, China"
},
{
    year: "c. 1000 CE",
    title: "Norse Settlement at L'Anse aux Meadows",
    description: "Norse explorers established a settlement in Newfoundland, Canada, providing archaeological evidence of European presence in North America centuries before Columbus.",
    era: "medieval",
    location: [51.5960, -55.5330],
    place: "Newfoundland, Canada"
},
{
    year: "1054 CE",
    title: "Great Schism",
    description: "A major division between the Western Catholic and Eastern Orthodox Churches developed, marking a turning point in the history of Christianity.",
    era: "medieval",
    location: [41.0082, 28.9784],
    place: "Constantinople"
},
{
    year: "1066 CE",
    title: "Battle of Hastings",
    description: "William the Conqueror defeated King Harold II, leading to the Norman conquest of England and major changes in English society and governance.",
    era: "medieval",
    location: [50.9110, 0.4870],
    place: "Hastings, England"
},
{
    year: "1096 CE",
    title: "Beginning of the First Crusade",
    description: "Western European armies began their expedition towards the eastern Mediterranean following calls for military intervention in the Holy Land.",
    era: "medieval",
    location: [36.2021, 37.1343],
    place: "Antioch Region"
},
{
    year: "1187 CE",
    title: "Battle of Hattin",
    description: "Saladin defeated the Crusader forces at the Battle of Hattin, paving the way for the Muslim reconquest of Jerusalem.",
    era: "medieval",
    location: [32.8000, 35.4450],
    place: "Horns of Hattin, Galilee"
},
{
    year: "1206 CE",
    title: "Rise of Genghis Khan",
    description: "Temujin was proclaimed Genghis Khan, uniting Mongol tribes and establishing the foundations of the Mongol Empire.",
    era: "medieval",
    location: [47.9210, 106.9180],
    place: "Mongolia"
},
{
    year: "1215 CE",
    title: "Signing of the Magna Carta",
    description: "King John of England agreed to the Magna Carta, a charter that placed certain limits on royal authority and influenced later constitutional traditions.",
    era: "medieval",
    location: [51.4550, -0.5670],
    place: "Runnymede, England"
},
{
    year: "1271 CE",
    title: "Marco Polo Begins His Journey to Asia",
    description: "Marco Polo travelled east with his family, beginning the journey that would later become famous through accounts of his experiences in Asia.",
    era: "medieval",
    location: [41.9028, 12.4964],
    place: "Venice, Italy"
},
{
    year: "1299 CE",
    title: "Foundation of the Ottoman Dynasty",
    description: "Osman I established the principality that developed into the Ottoman Empire, a major political power spanning parts of Europe, Asia and Africa.",
    era: "medieval",
    location: [40.1553, 29.9822],
    place: "Sogut, Anatolia"
},
{
    year: "1347 CE",
    title: "Black Death Reaches Europe",
    description: "The plague reached Mediterranean ports and spread across Europe, causing enormous population losses and transforming economic and social structures.",
    era: "medieval",
    location: [43.2965, 5.3698],
    place: "Marseille, France"
},
{
    year: "1453 CE",
    title: "Fall of Constantinople",
    description: "Ottoman forces under Sultan Mehmed II captured Constantinople, ending the Byzantine Empire and transforming the political landscape of southeastern Europe and the eastern Mediterranean.",
    era: "medieval",
    location: [41.0082, 28.9784],
    place: "Constantinople, present-day Istanbul"
},
{
    year: "c. 1455 CE",
    title: "Gutenberg Bible Printed",
    description: "Johannes Gutenberg's printing press helped produce the Gutenberg Bible, an important milestone in the development of printing and the spread of knowledge in Europe.",
    era: "medieval",
    location: [49.9929, 8.2473],
    place: "Mainz, Germany"
},
{
    year: "1492",
    title: "Christopher Columbus Reaches the Americas",
    description: "Christopher Columbus reached the Caribbean during a Spanish-sponsored voyage. His arrival began a period of sustained European colonization and profound changes for Indigenous societies.",
    era: "modern",
    location: [24.0, -74.0],
    place: "The Bahamas"
},
{
    year: "1517",
    title: "The Protestant Reformation Begins",
    description: "Martin Luther published his Ninety-Five Theses, challenging practices within the Catholic Church. The movement led to major religious and political transformations across Europe.",
    era: "modern",
    location: [51.8667, 12.65],
    place: "Wittenberg, Germany"
},
{
    year: "1588",
    title: "Defeat of the Spanish Armada",
    description: "England's naval forces and difficult weather conditions contributed to the defeat of the Spanish Armada. The event weakened Spain's plans to invade England.",
    era: "modern",
    location: [50.0, -5.0],
    place: "English Channel"
},
{
    year: "1642",
    title: "English Civil War Begins",
    description: "Conflict broke out between supporters of King Charles I and Parliament over political authority and governance. The war eventually led to the execution of the king.",
    era: "modern",
    location: [52.95, -1.15],
    place: "Nottingham, England"
},
{
    year: "1688",
    title: "Glorious Revolution",
    description: "James II was removed from the English throne and replaced by William III and Mary II. The revolution strengthened Parliament's authority and helped shape constitutional monarchy.",
    era: "modern",
    location: [51.5, -0.12],
    place: "London, England"
},
{
    year: "1776",
    title: "American Declaration of Independence",
    description: "Thirteen American colonies declared their independence from British rule. The declaration became an influential document in the history of democratic and republican ideas.",
    era: "modern",
    location: [39.9496, -75.1503],
    place: "Philadelphia, United States"
},
{
    year: "1789",
    title: "French Revolution Begins",
    description: "Political and social unrest led to the French Revolution, challenging the monarchy and the privileges of the aristocracy. It transformed France and influenced political movements worldwide.",
    era: "modern",
    location: [48.8566, 2.3522],
    place: "Paris, France"
},
{
    year: "1789",
    title: "Storming of the Bastille",
    description: "Revolutionaries stormed the Bastille fortress-prison in Paris. The event became a powerful symbol of resistance against royal authority.",
    era: "modern",
    location: [48.8534, 2.3690],
    place: "Paris, France"
},
{
    year: "1791",
    title: "Haitian Revolution Begins",
    description: "Enslaved people in the French colony of Saint-Domingue began a revolution against slavery and colonial rule. The struggle eventually established Haiti as an independent nation.",
    era: "modern",
    location: [18.5944, -72.3074],
    place: "Saint-Domingue, present-day Haiti"
},
{
    year: "1793",
    title: "Execution of Louis XVI",
    description: "King Louis XVI of France was executed during the French Revolution. The event marked a dramatic turning point in the abolition of the French monarchy.",
    era: "modern",
    location: [48.8610, 2.3210],
    place: "Place de la Révolution, Paris"
},
{
    year: "1804",
    title: "Haiti Declares Independence",
    description: "Haiti declared independence after defeating French colonial forces. It became the first independent Black republic and the first country established through a successful revolt by enslaved people.",
    era: "modern",
    location: [19.7592, -72.1982],
    place: "Gonaïves, Haiti"
},
{
    year: "1810",
    title: "Mexican War of Independence Begins",
    description: "Miguel Hidalgo's call for rebellion against Spanish colonial rule sparked Mexico's independence movement. The struggle continued for more than a decade.",
    era: "modern",
    location: [21.0180, -101.2580],
    place: "Dolores Hidalgo, Mexico"
},
{
    year: "1830",
    title: "July Revolution in France",
    description: "A revolution overthrew King Charles X and brought Louis-Philippe to power. It demonstrated the continuing influence of revolutionary movements in Europe.",
    era: "modern",
    location: [48.8566, 2.3522],
    place: "Paris, France"
},
{
    year: "1848",
    title: "Revolutions of 1848",
    description: "A wave of revolutions spread across Europe as people demanded political representation, civil liberties and social reforms. The uprisings challenged established monarchies and governments.",
    era: "modern",
    location: [48.2082, 16.3738],
    place: "Vienna, Austrian Empire"
},
{
    year: "1857",
    title: "Indian Rebellion of 1857",
    description: "A major uprising against the rule of the British East India Company began among Indian soldiers and spread to several regions. It led to the end of Company rule and direct British Crown administration.",
    era: "modern",
    location: [28.9845, 77.7064],
    place: "Meerut, India"
},
{
    year: "1861",
    title: "American Civil War Begins",
    description: "The American Civil War began after Confederate forces attacked Fort Sumter. The conflict centred on the preservation of the Union and the future of slavery in the United States.",
    era: "modern",
    location: [32.7520, -79.8740],
    place: "Fort Sumter, South Carolina"
},
{
    year: "1868",
    title: "Meiji Restoration",
    description: "Political power was restored to the Japanese emperor, beginning a period of rapid modernization and industrialization. Japan transformed its government, military and economy.",
    era: "modern",
    location: [35.6762, 139.6503],
    place: "Tokyo, Japan"
},
{
    year: "1871",
    title: "Unification of Germany",
    description: "German states were unified into the German Empire under Prussian leadership. King Wilhelm I was proclaimed German Emperor at the Palace of Versailles.",
    era: "modern",
    location: [48.8049, 2.1204],
    place: "Palace of Versailles, France"
},
{
    year: "1885",
    title: "Indian National Congress Founded",
    description: "The Indian National Congress was established, creating an important platform for political discussion and eventually becoming a leading organization in India's independence movement.",
    era: "modern",
    location: [18.9388, 72.8354],
    place: "Bombay, British India"
},
{
    year: "1914",
    title: "World War I Begins",
    description: "Following the assassination of Archduke Franz Ferdinand, a chain of alliances and declarations of war brought major powers into a global conflict. The war reshaped international politics.",
    era: "modern",
    location: [43.8563, 18.4131],
    place: "Sarajevo, Bosnia"
},
{
    year: "1917",
    title: "Russian Revolution",
    description: "Revolutionary movements overthrew the Russian monarchy and later brought the Bolsheviks to power. These events led to the establishment of a communist government.",
    era: "modern",
    location: [59.9343, 30.3351],
    place: "Petrograd, Russia"
},
{
    year: "1919",
    title: "Treaty of Versailles",
    description: "The treaty formally ended the state of war between Germany and the Allied Powers after World War I. Its terms reshaped European borders and imposed significant obligations on Germany.",
    era: "modern",
    location: [48.8049, 2.1204],
    place: "Palace of Versailles, France"
},
{
    year: "1939",
    title: "World War II Begins",
    description: "Germany invaded Poland, prompting Britain and France to declare war. The conflict expanded into a global war involving nations across multiple continents.",
    era: "modern",
    location: [52.2297, 21.0122],
    place: "Warsaw, Poland"
},
{
    year: "1945",
    title: "United Nations Established",
    description: "The United Nations was officially established after World War II to promote international cooperation, peace and security. Its founding charter was signed by 50 countries.",
    era: "modern",
    location: [37.7749, -122.4194],
    place: "San Francisco, United States"
},
{
    year: "1991",
    title: "Dissolution of the Soviet Union",
    description: "The Soviet Union formally dissolved, ending a major political entity of the twentieth century. Its breakup marked a defining moment in the end of the Cold War.",
    era: "modern",
    location: [55.7558, 37.6173],
    place: "Moscow, Russia"
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
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
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