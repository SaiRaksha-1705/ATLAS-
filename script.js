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
    },
// ================= SCIENTIFIC BREAKTHROUGHS =================

    {
        year: 1543,
        title: "Copernicus Proposes Heliocentric Model",
        description: "Nicolaus Copernicus publishes De revolutionibus orbium coelestium, proposing that Earth and other planets revolve around the Sun. This challenged the long-standing Earth-centred model of the universe.",
        era: "modern",
        location: [53.0138, 18.5984],
        place: "Torun, Poland"
    },
    {
        year: 1687,
        title: "Newton Publishes Principia Mathematica",
        description: "Isaac Newton publishes Philosophiæ Naturalis Principia Mathematica, establishing his laws of motion and universal gravitation. The work becomes a foundation of classical physics.",
        era: "modern",
        location: [52.2053, 0.1218],
        place: "Cambridge, England"
    },
    {
        year: 1895,
        title: "Discovery of X-rays",
        description: "Wilhelm Conrad Röntgen discovers X-rays while experimenting with cathode rays. This discovery transforms medical diagnosis by allowing doctors to examine internal structures without surgery.",
        era: "modern",
        location: [49.7913, 9.9534],
        place: "Würzburg, Germany"
    },
    {
        year: 1896,
        title: "Discovery of Radioactivity",
        description: "Henri Becquerel discovers natural radioactivity while studying uranium salts. His discovery opens a new field of nuclear physics and leads to further research by Marie and Pierre Curie.",
        era: "modern",
        location: [48.8566, 2.3522],
        place: "Paris, France"
    },
    {
        year: 1897,
        title: "Discovery of the Electron",
        description: "J.J. Thomson identifies the electron through experiments with cathode rays at the Cavendish Laboratory. This establishes that atoms contain smaller subatomic particles.",
        era: "modern",
        location: [52.2053, 0.1218],
        place: "Cambridge, England"
    },
    {
        year: 1905,
        title: "Special Theory of Relativity",
        description: "Albert Einstein publishes his Special Theory of Relativity, transforming our understanding of space, time and motion. The famous mass-energy equivalence equation E = mc² emerges from this work.",
        era: "modern",
        location: [46.9480, 7.4474],
        place: "Bern, Switzerland"
    },
    {
        year: 1928,
        title: "Discovery of Penicillin",
        description: "Alexander Fleming discovers penicillin after observing that a mould contaminant inhibits bacterial growth in a laboratory culture. Its subsequent development revolutionises the treatment of bacterial infections.",
        era: "modern",
        location: [51.5255, -0.1240],
        place: "London, England"
    },
    {
        year: 1953,
        title: "Discovery of DNA Double Helix",
        description: "James Watson and Francis Crick propose the double-helix model of DNA, building on crucial experimental evidence produced by Rosalind Franklin and Maurice Wilkins. The discovery transforms modern genetics and molecular biology.",
        era: "modern",
        location: [52.2053, 0.1218],
        place: "Cambridge, England"
    },
    {
        year: 2015,
        title: "First Detection of Gravitational Waves",
        description: "Scientists at LIGO announce the first direct detection of gravitational waves, produced by two merging black holes. The discovery confirms a major prediction of Einstein's General Theory of Relativity and opens a new way of observing the universe.",
        era: "modern",
        location: [30.5629, -90.7742],
        place: "Livingston, Louisiana, USA"
    },
    // ================= EXPLORERS & EXPEDITIONS =================
    {
        year: 1498,
        title: "Vasco da Gama Reaches India",
        description: "Portuguese explorer Vasco da Gama reaches Calicut (Kozhikode) after sailing around the Cape of Good Hope. His voyage establishes a direct sea route between Europe and India, transforming global trade.",
        era: "modern",
        location: [11.2588, 75.7804],
        place: "Calicut, India"
    },
    {
        year: 1519,
        title: "Magellan Expedition Begins",
        description: "Ferdinand Magellan leads a Spanish expedition that sets out to circumnavigate the globe. Although Magellan dies in the Philippines, his expedition, completed under Juan Sebastián Elcano, becomes the first successful circumnavigation of Earth.",
        era: "modern",
        location: [-23.5505, -46.6333],
        place: "South America"
    },
    {
        year: 1911,
        title: "Amundsen Reaches the South Pole",
        description: "Norwegian explorer Roald Amundsen and his team become the first confirmed expedition to reach the geographic South Pole, beating Robert Falcon Scott's British expedition.",
        era: "modern",
        location: [-90, 0],
        place: "South Pole, Antarctica"
    },
    {
        year: 1953,
        title: "First Successful Ascent of Mount Everest",
        description: "Edmund Hillary of New Zealand and Tenzing Norgay, a Sherpa mountaineer from Nepal, become the first confirmed climbers to reach the summit of Mount Everest.",
        era: "modern",
        location: [27.9881, 86.9250],
        place: "Mount Everest, Nepal-China border"
    },

// ================= SPACE EXPLORATION =================

    {
        year: 1957,
        title: "Sputnik 1: First Artificial Satellite",
        description: "The Soviet Union launches Sputnik 1, the first artificial satellite to orbit Earth. Its launch marks the beginning of the Space Age and intensifies the Space Race.",
        era: "modern",
        location: [45.9650, 63.3050],
        place: "Baikonur Cosmodrome, Kazakhstan"
    },
    {
        year: 1961,
        title: "First Human in Space",
        description: "Soviet cosmonaut Yuri Gagarin becomes the first human to travel into outer space aboard Vostok 1, completing one orbit around Earth.",
        era: "modern",
        location: [46.0390, 63.0310],
        place: "Baikonur Cosmodrome, Kazakhstan"
    },
    {
        year: 1969,
        title: "Apollo 11 Moon Landing",
        description: "NASA's Apollo 11 mission successfully lands astronauts Neil Armstrong and Buzz Aldrin on the Moon. Armstrong becomes the first human to walk on its surface while Michael Collins remains in lunar orbit.",
        era: "modern",
        location: [28.5733, -80.6469],
        place: "Kennedy Space Center, Florida, USA"
    },
    {
        year: 1977,
        title: "Voyager Spacecraft Launched",
        description: "NASA launches Voyager 1 and Voyager 2 to explore the outer planets. Their missions provide unprecedented images and scientific information about Jupiter, Saturn, Uranus and Neptune.",
        era: "modern",
        location: [28.5729, -80.6490],
        place: "Cape Canaveral, Florida, USA"
    },
    {
        year: 1990,
        title: "Hubble Space Telescope Launched",
        description: "NASA launches the Hubble Space Telescope into Earth orbit. Its observations transform astronomy, helping scientists study distant galaxies, stars and the expansion of the universe.",
        era: "modern",
        location: [28.5733, -80.6469],
        place: "Kennedy Space Center, Florida, USA"
    },

// ================= MAJOR ARCHAEOLOGICAL DISCOVERIES =================

    {
    year: 1911,
        title: "Rediscovery of Machu Picchu",
        description: "American historian and explorer Hiram Bingham brings international attention to the Inca citadel of Machu Picchu in Peru. The ancient settlement becomes one of the most significant archaeological sites in the world.",
        era: "modern",
        location: [-13.1631, -72.5450],
        place: "Machu Picchu, Peru"
    },
    {
        year: 1922,
        title: "Tutankhamun's Tomb Discovered",
        description: "Archaeologist Howard Carter discovers the largely intact tomb of Egyptian pharaoh Tutankhamun in the Valley of the Kings. Its extraordinary collection of artefacts provides valuable insight into ancient Egyptian civilization.",
        era: "modern",
        location: [25.7402, 32.6014],
        place: "Valley of the Kings, Egypt"
    },

// ================= MODERN INDIAN HISTORY =================

    {
        year: 1857,
        title: "Indian Rebellion of 1857",
        description: "A major uprising against the rule of the British East India Company begins among Indian soldiers and spreads across several regions. It becomes a landmark in India's struggle against colonial rule.",
        era: "modern",
        location: [28.9845, 77.7064],
        place: "Meerut, India"
    },
    {
        year: 1885,
        title: "Indian National Congress Founded",
        description: "The Indian National Congress is established in Bombay with the participation of Indian political leaders and Allan Octavian Hume. It eventually becomes a central organization in India's independence movement.",
        era: "modern",
        location: [18.9388, 72.8354],
        place: "Bombay, India"
    },
    {
        year: 1919,
        title: "Jallianwala Bagh Massacre",
        description: "British troops under Brigadier-General Reginald Dyer open fire on an unarmed gathering at Jallianwala Bagh in Amritsar. The massacre becomes a turning point in India's freedom struggle.",
        era: "modern",
        location: [31.6200, 74.8800],
        place: "Amritsar, India"
    },
    {
        year: 1930,
        title: "Dandi March",
        description: "Mahatma Gandhi leads the Salt March from Sabarmati Ashram to Dandi to protest British colonial salt laws. The act of making salt becomes a powerful symbol of civil disobedience.",
        era: "modern",
        location: [20.9010, 72.8330],
        place: "Dandi, Gujarat, India"
    },
    {
        year: 1942,
        title: "Quit India Movement",
        description: "The Indian National Congress launches the Quit India Movement, demanding an immediate end to British rule. The movement triggers widespread protests and civil resistance across the country.",
        era: "modern",
        location: [18.9402, 72.8348],
        place: "Bombay, India"
    },
    {
        year: 1947,
        title: "Indian Independence",
        description: "India gains independence from British colonial rule on 15 August 1947. The transfer of power is accompanied by the Partition of British India into India and Pakistan, resulting in one of the largest mass migrations in history.",
        era: "modern",
        location: [28.6143, 77.1994],
        place: "New Delhi, India"
    },
    {
        year: "1896",
        title: "Philippine Revolution",
        description: "The Philippine Revolution began against Spanish colonial rule, led initially by the Katipunan revolutionary movement. It eventually paved the way for the Philippines' declaration of independence in 1898.",
        era: "modern",
        location: [14.2456, 120.8786],
        place: "Cavite, Philippines"
    },
    {
        year: "1910",
        title: "Mexican Revolution",
        description: "A major revolution against the dictatorship of Porfirio Díaz. The movement led to years of civil conflict and major political and social reforms, including land redistribution.",
        era: "modern",
        location: [19.4326, -99.1332],
        place: "Mexico City, Mexico"
    },
    {
        year: "1911",
        title: "Xinhai Revolution",
        description: "The Xinhai Revolution overthrew China's Qing dynasty, ending more than two thousand years of imperial rule and leading to the establishment of the Republic of China.",
        era: "modern",
        location: [30.5536, 114.3167],
        place: "Wuchang, Wuhan, China"
    },
{
    year: "1917",
    title: "October Revolution",
    description: "Bolshevik forces led by Vladimir Lenin overthrew the Provisional Government in Petrograd. The revolution paved the way for the creation of the Soviet state.",
    era: "modern",
    location: [59.9343, 30.3351],
    place: "Petrograd, Russia"
},
{
    year: "1949",
    title: "Founding of the People's Republic of China",
    description: "After the Chinese Civil War, Mao Zedong proclaimed the People's Republic of China in Beijing on October 1, establishing Communist Party rule over mainland China.",
    era: "modern",
    location: [39.9042, 116.4074],
    place: "Beijing, China"
},
{
    year: "1959",
    title: "Cuban Revolution",
    description: "Fidel Castro's revolutionary movement overthrew the dictatorship of Fulgencio Batista. The victory transformed Cuba's political system and its relationship with the United States.",
    era: "modern",
    location: [23.1136, -82.3666],
    place: "Havana, Cuba"
},
{
    year: "1961",
    title: "Construction of the Berlin Wall",
    description: "East Germany began constructing the Berlin Wall to prevent movement from East Berlin into West Berlin. It became one of the most powerful symbols of the Cold War.",
    era: "modern",
    location: [52.5200, 13.4050],
    place: "Berlin, Germany"
},
{
    year: "1971",
    title: "Bangladesh Liberation War",
    description: "East Pakistan fought for independence from West Pakistan following political repression and military violence. India intervened in December, and Bangladesh emerged as an independent nation.",
    era: "modern",
    location: [23.8103, 90.4125],
    place: "Dhaka, Bangladesh"
},
{
    year: "1975",
    title: "Fall of Saigon",
    description: "North Vietnamese forces captured Saigon, bringing the Vietnam War to an end and leading to the reunification of Vietnam under Communist rule.",
    era: "modern",
    location: [10.8231, 106.6297],
    place: "Saigon, South Vietnam"
},
{
    year: "1975",
    title: "Declaration of Emergency in India",
    description: "Prime Minister Indira Gandhi declared a national Emergency on June 25. Civil liberties were restricted, opposition leaders were arrested, and press censorship was imposed. The Emergency ended in 1977.",
    era: "modern",
    location: [28.6139, 77.2090],
    place: "New Delhi, India"
},
{
    year: "1979",
    title: "Iranian Revolution",
    description: "A mass revolutionary movement overthrew Shah Mohammad Reza Pahlavi. Ayatollah Ruhollah Khomeini returned to Iran, and the country became an Islamic Republic.",
    era: "modern",
    location: [35.6892, 51.3890],
    place: "Tehran, Iran"
},
{
    year: "1986",
    title: "People Power Revolution",
    description: "Millions of Filipinos participated in peaceful demonstrations against Ferdinand Marcos. The movement led to his departure and the restoration of democratic government under Corazon Aquino.",
    era: "modern",
    location: [14.5995, 120.9842],
    place: "Manila, Philippines"
},
{
    year: "1989",
    title: "Fall of the Berlin Wall",
    description: "Following growing public protests and political changes across Eastern Europe, East Germany opened its border crossings. The fall of the Berlin Wall became a defining moment in the decline of the Cold War.",
    era: "modern",
    location: [52.5200, 13.4050],
    place: "Berlin, Germany"
},
{
    year: "1989",
    title: "Velvet Revolution",
    description: "A largely peaceful movement of demonstrations and strikes ended Communist Party rule in Czechoslovakia. Václav Havel later became president.",
    era: "modern",
    location: [50.0755, 14.4378],
    place: "Prague, Czechoslovakia"
},
{
    year: "1990",
    title: "German Reunification",
    description: "East and West Germany officially reunited on October 3, ending decades of division that began after World War II.",
    era: "modern",
    location: [52.5200, 13.4050],
    place: "Berlin, Germany"
},
{
    year: "1994",
    title: "End of Apartheid in South Africa",
    description: "South Africa held its first democratic elections open to citizens of all races. Nelson Mandela became the country's first Black president, marking the end of apartheid rule.",
    era: "modern",
    location: [25.7479, 28.2293],
    place: "Pretoria, South Africa"
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


// ==========================================
// 3. ATLAS INTERACTIVE TIMELINE ENGINE
// ==========================================

const timelineContainer = document.getElementById("timeline-events");
const searchInput = document.getElementById("event-search");

// Convert historical dates into sortable numerical values.
// Negative = BCE, Positive = CE.

function getHistoricalYear(year) {

    const value = String(year).trim().toUpperCase();

    const number = parseInt(value.replace(/[^0-9]/g, ""), 10);

    if (isNaN(number)) return 0;

    if (value.includes("BCE") || value.includes("BC")) {
        return -number;
    }

    return number;
}


// Sort events chronologically.

const chronologicalEvents = [...events].sort((a, b) =>
    getHistoricalYear(a.year) - getHistoricalYear(b.year)
);


// Timeline state.

let activeEra = "all";
let selectedEventIndex = 0;
let visibleEvents = [...chronologicalEvents];


// ==========================================
// 4. BUILD INTERACTIVE TIMELINE INTERFACE
// ==========================================

function initializeTimeline() {

    timelineContainer.innerHTML = `

        <div class="atlas-timeline">

            <div class="timeline-toolbar">

                <div class="timeline-navigation">

                    <button id="timeline-prev" class="timeline-nav-btn">
                        ← Previous
                    </button>

                    <button id="timeline-next" class="timeline-nav-btn">
                        Next →
                    </button>

                </div>

                <div class="timeline-jump">

                    <select id="century-jump">
                        <option value="">Jump to century</option>
                    </select>

                    <select id="decade-jump">
                        <option value="">Jump to decade</option>
                    </select>

                </div>

            </div>


            <div class="timeline-range-info">

                <span id="timeline-position">EVENT 1</span>

                <span id="timeline-date"></span>

            </div>


            <div class="timeline-track-wrapper">

                <button class="track-arrow" id="track-left">
                    ‹
                </button>

                <div class="timeline-track-viewport" id="track-viewport">

                    <div class="timeline-track" id="timeline-track">

                    </div>

                </div>

                <button class="track-arrow" id="track-right">
                    ›
                </button>

            </div>


            <div class="timeline-progress-container">

                <div class="timeline-progress" id="timeline-progress"></div>

            </div>


            <div class="timeline-detail" id="timeline-detail">

            </div>

        </div>

    `;


    populateCenturyOptions();

    renderInteractiveTimeline();

    setupTimelineControls();

}


// ==========================================
// 5. CENTURY AND DECADE NAVIGATION
// ==========================================

function getCentury(year) {

    if (year < 0) {
        return Math.ceil(Math.abs(year) / 100);
    }

    return Math.ceil(year / 100);
}


function populateCenturyOptions() {

    const centurySelect = document.getElementById("century-jump");
    const decadeSelect = document.getElementById("decade-jump");

    const centuries = new Set();
    const decades = new Set();

    chronologicalEvents.forEach(event => {

        const year = getHistoricalYear(event.year);

        centuries.add(
            year < 0
                ? `${getCentury(year)}th Century BCE`
                : `${getCentury(year)}th Century CE`
        );

        if (year < 0) {

            const decade = Math.floor(Math.abs(year) / 10) * 10;

            decades.add(`${decade}s BCE`);

        } else {

            const decade = Math.floor(year / 10) * 10;

            decades.add(`${decade}s CE`);

        }

    });


    [...centuries].forEach(century => {

        const option = document.createElement("option");

        option.value = century;
        option.textContent = century;

        centurySelect.appendChild(option);

    });


    [...decades].forEach(decade => {

        const option = document.createElement("option");

        option.value = decade;
        option.textContent = decade;

        decadeSelect.appendChild(option);

    });

}


// ==========================================
// 6. RENDER TIMELINE EVENTS
// ==========================================

function renderInteractiveTimeline() {

    const track = document.getElementById("timeline-track");

    if (!track) return;

    track.innerHTML = "";

    visibleEvents = chronologicalEvents.filter(event => {

        const matchesEra =
            activeEra === "all" || event.era === activeEra;

        const searchTerm = searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";

        const searchableText = `
            ${event.title}
            ${event.year}
            ${event.description}
            ${event.place}
            ${event.era}
        `.toLowerCase();

        const matchesSearch = searchableText.includes(searchTerm);

        return matchesEra && matchesSearch;

    });


    if (visibleEvents.length === 0) {

        track.innerHTML = `
            <p class="timeline-empty">
                No historical events found.
                Try another search.
            </p>
        `;

        document.getElementById("timeline-detail").innerHTML = "";

        document.getElementById("timeline-position").textContent =
            "NO EVENTS";

        document.getElementById("timeline-date").textContent = "";

        document.getElementById("timeline-progress").style.width = "0%";

        return;

    }


    selectedEventIndex = Math.min(
        selectedEventIndex,
        visibleEvents.length - 1
    );


    visibleEvents.forEach((event, index) => {

        const item = document.createElement("div");

        item.className = "timeline-item";

        if (index === selectedEventIndex) {
            item.classList.add("selected");
        }

        const marker = document.createElement("button");

        marker.className = "timeline-marker";

        marker.setAttribute("aria-label", event.title);

        marker.innerHTML = `
            <span class="timeline-marker-dot"></span>
            <span class="timeline-marker-year">${event.year}</span>
            <span class="timeline-marker-title">${event.title}</span>
        `;


        marker.addEventListener("click", () => {

            selectedEventIndex = index;

            updateTimelineSelection();

        });


        item.appendChild(marker);

        track.appendChild(item);

    });


    updateTimelineSelection();

}


// ==========================================
// 7. EVENT DETAIL EXPLORER
// ==========================================

function updateTimelineSelection() {

    if (!visibleEvents.length) return;

    const event = visibleEvents[selectedEventIndex];

    const track = document.getElementById("timeline-track");

    const items = track.querySelectorAll(".timeline-item");

    items.forEach((item, index) => {

        item.classList.toggle(
            "selected",
            index === selectedEventIndex
        );

    });


    const detail = document.getElementById("timeline-detail");

    detail.innerHTML = `

        <div class="detail-header">

            <span class="event-year">
                ${event.year}
            </span>

            <span class="detail-category">
                ${event.era.toUpperCase()} HISTORY
            </span>

        </div>


        <h3>${event.title}</h3>

        <p class="detail-description">
            ${event.description}
        </p>


        <div class="detail-location">

            <span>⌖</span>

            ${event.place}

        </div>


        <div class="detail-footer">

            <span>
                EVENT ${selectedEventIndex + 1}
                OF ${visibleEvents.length}
            </span>

            <button id="view-on-map">
                EXPLORE ON MAP ↗
            </button>

        </div>

    `;


    document.getElementById("timeline-position").textContent =
        `EVENT ${selectedEventIndex + 1} / ${visibleEvents.length}`;

    document.getElementById("timeline-date").textContent =
        event.year;


    const progress =
        ((selectedEventIndex + 1) / visibleEvents.length) * 100;

    document.getElementById("timeline-progress").style.width =
        `${progress}%`;


    // Keep selected event visible.

    const selectedItem = items[selectedEventIndex];

    if (selectedItem) {

        selectedItem.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });

    }


    // Connect timeline with the world map.

    document.getElementById("view-on-map").addEventListener("click", () => {

        map.setView(event.location, 6, {
            animate: true
        });

        const matchingMarker = eventMarkers.find(marker =>
            marker.event === event
        );

        if (matchingMarker) {
            matchingMarker.marker.openPopup();
        }

        document.getElementById("map").scrollIntoView({
            behavior: "smooth"
        });

    });

}


// ==========================================
// 8. TIMELINE NAVIGATION CONTROLS
// ==========================================

function setupTimelineControls() {

    document.getElementById("timeline-prev").addEventListener("click", () => {

        if (selectedEventIndex > 0) {

            selectedEventIndex--;

            updateTimelineSelection();

        }

    });


    document.getElementById("timeline-next").addEventListener("click", () => {

        if (selectedEventIndex < visibleEvents.length - 1) {

            selectedEventIndex++;

            updateTimelineSelection();

        }

    });


    document.getElementById("track-left").addEventListener("click", () => {

        document.getElementById("track-viewport").scrollBy({
            left: -350,
            behavior: "smooth"
        });

    });


    document.getElementById("track-right").addEventListener("click", () => {

        document.getElementById("track-viewport").scrollBy({
            left: 350,
            behavior: "smooth"
        });

    });


    document.getElementById("century-jump").addEventListener("change", event => {

        const selectedCentury = event.target.value;

        if (!selectedCentury) return;

        const targetIndex = visibleEvents.findIndex(item => {

            const year = getHistoricalYear(item.year);

            const century = getCentury(year);

            const label = year < 0
                ? `${century}th Century BCE`
                : `${century}th Century CE`;

            return label === selectedCentury;

        });


        if (targetIndex !== -1) {

            selectedEventIndex = targetIndex;

            updateTimelineSelection();

        }

        event.target.value = "";

    });


    document.getElementById("decade-jump").addEventListener("change", event => {

        const selectedDecade = event.target.value;

        if (!selectedDecade) return;

        const targetIndex = visibleEvents.findIndex(item => {

            const year = getHistoricalYear(item.year);

            if (selectedDecade.includes("BCE")) {

                const decade = Math.floor(Math.abs(year) / 10) * 10;

                return year < 0 && `${decade}s BCE` === selectedDecade;

            }

            const decade = Math.floor(year / 10) * 10;

            return year >= 0 && `${decade}s CE` === selectedDecade;

        });


        if (targetIndex !== -1) {

            selectedEventIndex = targetIndex;

            updateTimelineSelection();

        }

        event.target.value = "";

    });


    // Keyboard navigation.

    document.addEventListener("keydown", event => {

        if (
            event.target.tagName === "INPUT" ||
            event.target.tagName === "TEXTAREA" ||
            event.target.tagName === "SELECT"
        ) return;

        if (event.key === "ArrowLeft") {

            if (selectedEventIndex > 0) {

                selectedEventIndex--;

                updateTimelineSelection();

            }

        }

        if (event.key === "ArrowRight") {

            if (selectedEventIndex < visibleEvents.length - 1) {

                selectedEventIndex++;

                updateTimelineSelection();

            }

        }

    });

}


// ==========================================
// 9. ERA FILTER INTEGRATION
// ==========================================

document.querySelectorAll(".filter").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".filter").forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        activeEra = button.dataset.era;

        selectedEventIndex = 0;

        renderInteractiveTimeline();

    });

});


// ==========================================
// 10. SEARCH INTEGRATION
// ==========================================

if (searchInput) {

    searchInput.addEventListener("input", () => {

        selectedEventIndex = 0;

        renderInteractiveTimeline();

    });

}


// ==========================================
// 11. INITIALIZE ATLAS TIMELINE
// ==========================================

initializeTimeline();

console.log("ATLAS Interactive Timeline initialized.");


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


// ==========================================
// INTERACTIVE WORLD MAP MARKERS
// ==========================================

const eventMarkers = [];

events.forEach(event => {

    const marker = L.marker(event.location).addTo(map);

    marker.bindPopup(`
        <b>${event.title}</b><br>
        ${event.year}<br>
        ${event.place}
    `);

    eventMarkers.push({
        event: event,
        marker: marker
    });

    marker.on("click", () => {

        document.getElementById("event-details").innerHTML = `
            <span class="event-year">
                ${event.year} · ${event.place}
            </span>

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



