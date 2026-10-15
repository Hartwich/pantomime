// Original, bilingual prompts chosen for recognisable physical actions.
const standardTerms = [
  {
    "id": "term-1",
    "de": "Flugzeug",
    "en": "Airplane"
  },
  {
    "id": "term-2",
    "de": "Zähne putzen",
    "en": "Brushing teeth"
  },
  {
    "id": "term-3",
    "de": "Kaktus",
    "en": "Cactus"
  },
  {
    "id": "term-4",
    "de": "Einhorn",
    "en": "Unicorn"
  },
  {
    "id": "term-5",
    "de": "Kaffee kochen",
    "en": "Making coffee"
  },
  {
    "id": "term-6",
    "de": "Taucher",
    "en": "Diver"
  },
  {
    "id": "term-7",
    "de": "Ritter",
    "en": "Knight"
  },
  {
    "id": "term-8",
    "de": "Achterbahn",
    "en": "Roller coaster"
  },
  {
    "id": "term-9",
    "de": "Koch",
    "en": "Chef"
  },
  {
    "id": "term-10",
    "de": "Gitarre spielen",
    "en": "Playing guitar"
  },
  {
    "id": "term-11",
    "de": "Schneemann",
    "en": "Snowman"
  },
  {
    "id": "term-12",
    "de": "Gespenst",
    "en": "Ghost"
  },
  {
    "id": "term-13",
    "de": "Hund",
    "en": "Dog"
  },
  {
    "id": "term-14",
    "de": "Katze",
    "en": "Cat"
  },
  {
    "id": "term-15",
    "de": "Elefant",
    "en": "Elephant"
  },
  {
    "id": "term-16",
    "de": "Giraffe",
    "en": "Giraffe"
  },
  {
    "id": "term-17",
    "de": "Pinguin",
    "en": "Penguin"
  },
  {
    "id": "term-18",
    "de": "Känguru",
    "en": "Kangaroo"
  },
  {
    "id": "term-19",
    "de": "Frosch",
    "en": "Frog"
  },
  {
    "id": "term-20",
    "de": "Schlange",
    "en": "Snake"
  },
  {
    "id": "term-21",
    "de": "Huhn",
    "en": "Chicken"
  },
  {
    "id": "term-22",
    "de": "Affe",
    "en": "Monkey"
  },
  {
    "id": "term-23",
    "de": "Schmetterling",
    "en": "Butterfly"
  },
  {
    "id": "term-24",
    "de": "Krabbe",
    "en": "Crab"
  },
  {
    "id": "term-25",
    "de": "Krokodil",
    "en": "Crocodile"
  },
  {
    "id": "term-26",
    "de": "Pferd",
    "en": "Horse"
  },
  {
    "id": "term-27",
    "de": "Schnecke",
    "en": "Snail"
  },
  {
    "id": "term-28",
    "de": "Biene",
    "en": "Bee"
  },
  {
    "id": "term-29",
    "de": "Hai",
    "en": "Shark"
  },
  {
    "id": "term-30",
    "de": "Flamingo",
    "en": "Flamingo"
  },
  {
    "id": "term-31",
    "de": "Feuerwehrmann",
    "en": "Firefighter"
  },
  {
    "id": "term-32",
    "de": "Zauberer",
    "en": "Magician"
  },
  {
    "id": "term-33",
    "de": "Dirigent",
    "en": "Conductor"
  },
  {
    "id": "term-34",
    "de": "Fotograf",
    "en": "Photographer"
  },
  {
    "id": "term-35",
    "de": "Friseur",
    "en": "Hairdresser"
  },
  {
    "id": "term-36",
    "de": "Gärtner",
    "en": "Gardener"
  },
  {
    "id": "term-37",
    "de": "Maler",
    "en": "Painter"
  },
  {
    "id": "term-38",
    "de": "Polizist",
    "en": "Police officer"
  },
  {
    "id": "term-39",
    "de": "Astronaut",
    "en": "Astronaut"
  },
  {
    "id": "term-40",
    "de": "Pirat",
    "en": "Pirate"
  },
  {
    "id": "term-41",
    "de": "Roboter",
    "en": "Robot"
  },
  {
    "id": "term-42",
    "de": "Detektiv",
    "en": "Detective"
  },
  {
    "id": "term-43",
    "de": "Schwimmen",
    "en": "Swimming"
  },
  {
    "id": "term-44",
    "de": "Skifahren",
    "en": "Skiing"
  },
  {
    "id": "term-45",
    "de": "Boxen",
    "en": "Boxing"
  },
  {
    "id": "term-46",
    "de": "Bogenschießen",
    "en": "Archery"
  },
  {
    "id": "term-47",
    "de": "Tennis spielen",
    "en": "Playing tennis"
  },
  {
    "id": "term-48",
    "de": "Fußball spielen",
    "en": "Playing football"
  },
  {
    "id": "term-49",
    "de": "Basketball spielen",
    "en": "Playing basketball"
  },
  {
    "id": "term-50",
    "de": "Gewichte heben",
    "en": "Lifting weights"
  },
  {
    "id": "term-51",
    "de": "Surfen",
    "en": "Surfing"
  },
  {
    "id": "term-52",
    "de": "Rudern",
    "en": "Rowing"
  },
  {
    "id": "term-53",
    "de": "Reiten",
    "en": "Horse riding"
  },
  {
    "id": "term-54",
    "de": "Seilspringen",
    "en": "Skipping rope"
  },
  {
    "id": "term-55",
    "de": "Ballett tanzen",
    "en": "Dancing ballet"
  },
  {
    "id": "term-56",
    "de": "Klettern",
    "en": "Climbing"
  },
  {
    "id": "term-57",
    "de": "Bowling spielen",
    "en": "Bowling"
  },
  {
    "id": "term-58",
    "de": "Schlittschuh laufen",
    "en": "Ice skating"
  },
  {
    "id": "term-59",
    "de": "Staubsaugen",
    "en": "Vacuuming"
  },
  {
    "id": "term-60",
    "de": "Fenster putzen",
    "en": "Cleaning windows"
  },
  {
    "id": "term-61",
    "de": "Bügeln",
    "en": "Ironing"
  },
  {
    "id": "term-62",
    "de": "Wäsche aufhängen",
    "en": "Hanging laundry"
  },
  {
    "id": "term-63",
    "de": "Geschirr spülen",
    "en": "Washing dishes"
  },
  {
    "id": "term-64",
    "de": "Haare föhnen",
    "en": "Drying hair"
  },
  {
    "id": "term-65",
    "de": "Rasieren",
    "en": "Shaving"
  },
  {
    "id": "term-66",
    "de": "Schminken",
    "en": "Applying makeup"
  },
  {
    "id": "term-67",
    "de": "Duschen",
    "en": "Showering"
  },
  {
    "id": "term-68",
    "de": "Schnürsenkel binden",
    "en": "Tying shoelaces"
  },
  {
    "id": "term-69",
    "de": "Koffer packen",
    "en": "Packing luggage"
  },
  {
    "id": "term-70",
    "de": "Geschenk einpacken",
    "en": "Wrapping gifts"
  },
  {
    "id": "term-71",
    "de": "Wecker ausschalten",
    "en": "Silencing alarms"
  },
  {
    "id": "term-72",
    "de": "Einschlafen",
    "en": "Falling asleep"
  },
  {
    "id": "term-73",
    "de": "Niesen",
    "en": "Sneezing"
  },
  {
    "id": "term-74",
    "de": "Schluckauf",
    "en": "Hiccups"
  },
  {
    "id": "term-75",
    "de": "Frieren",
    "en": "Feeling cold"
  },
  {
    "id": "term-76",
    "de": "Sonnenbrand",
    "en": "Sunburn"
  },
  {
    "id": "term-77",
    "de": "Pizza backen",
    "en": "Baking pizza"
  },
  {
    "id": "term-78",
    "de": "Suppe essen",
    "en": "Eating soup"
  },
  {
    "id": "term-79",
    "de": "Spaghetti essen",
    "en": "Eating spaghetti"
  },
  {
    "id": "term-80",
    "de": "Zitrone probieren",
    "en": "Tasting lemons"
  },
  {
    "id": "term-81",
    "de": "Zwiebel schneiden",
    "en": "Chopping onions"
  },
  {
    "id": "term-82",
    "de": "Teig kneten",
    "en": "Kneading dough"
  },
  {
    "id": "term-83",
    "de": "Eis essen",
    "en": "Eating gelato"
  },
  {
    "id": "term-84",
    "de": "Popcorn machen",
    "en": "Making popcorn"
  },
  {
    "id": "term-85",
    "de": "Banane schälen",
    "en": "Peeling bananas"
  },
  {
    "id": "term-86",
    "de": "Tee trinken",
    "en": "Drinking tea"
  },
  {
    "id": "term-87",
    "de": "Kokosnuss öffnen",
    "en": "Opening coconuts"
  },
  {
    "id": "term-88",
    "de": "Kuchen dekorieren",
    "en": "Decorating cakes"
  },
  {
    "id": "term-89",
    "de": "Regenschirm öffnen",
    "en": "Opening umbrellas"
  },
  {
    "id": "term-90",
    "de": "Drachensteigen",
    "en": "Kite flying"
  },
  {
    "id": "term-91",
    "de": "Zelt aufbauen",
    "en": "Pitching tents"
  },
  {
    "id": "term-92",
    "de": "Angeln",
    "en": "Fishing"
  },
  {
    "id": "term-93",
    "de": "Schneeballschlacht",
    "en": "Snowball fight"
  },
  {
    "id": "term-94",
    "de": "Blumen pflücken",
    "en": "Picking flowers"
  },
  {
    "id": "term-95",
    "de": "Hund ausführen",
    "en": "Walking dogs"
  },
  {
    "id": "term-96",
    "de": "Mücke fangen",
    "en": "Catching mosquitoes"
  },
  {
    "id": "term-97",
    "de": "Matschwandern",
    "en": "Mud walking"
  },
  {
    "id": "term-98",
    "de": "Gegenwind",
    "en": "Headwind"
  },
  {
    "id": "term-99",
    "de": "Ausrutschen",
    "en": "Slipping"
  },
  {
    "id": "term-100",
    "de": "Heißer Sand",
    "en": "Hot sand"
  },
  {
    "id": "term-101",
    "de": "Fahrrad fahren",
    "en": "Riding bicycles"
  },
  {
    "id": "term-102",
    "de": "Auto einparken",
    "en": "Parking cars"
  },
  {
    "id": "term-103",
    "de": "Motorrad fahren",
    "en": "Motorcycle riding"
  },
  {
    "id": "term-104",
    "de": "Bus verpassen",
    "en": "Missing buses"
  },
  {
    "id": "term-105",
    "de": "Reifen wechseln",
    "en": "Changing tyres"
  },
  {
    "id": "term-106",
    "de": "Fahrstuhl fahren",
    "en": "Elevator riding"
  },
  {
    "id": "term-107",
    "de": "Tür aufstemmen",
    "en": "Forcing doors"
  },
  {
    "id": "term-108",
    "de": "Unsichtbare Wand",
    "en": "Invisible wall"
  },
  {
    "id": "term-109",
    "de": "Seiltanz",
    "en": "Tightrope walking"
  },
  {
    "id": "term-110",
    "de": "Schatz ausgraben",
    "en": "Excavating treasure"
  },
  {
    "id": "term-111",
    "de": "Fliege verscheuchen",
    "en": "Shooing flies"
  },
  {
    "id": "term-112",
    "de": "Luftballon aufblasen",
    "en": "Inflating balloons"
  },
  {
    "id": "term-113",
    "de": "Klavier spielen",
    "en": "Playing piano"
  },
  {
    "id": "term-114",
    "de": "Geige spielen",
    "en": "Playing violin"
  },
  {
    "id": "term-115",
    "de": "Trommeln",
    "en": "Playing drums"
  },
  {
    "id": "term-116",
    "de": "Jonglieren",
    "en": "Juggling"
  },
  {
    "id": "term-117",
    "de": "Marionette",
    "en": "Puppet"
  },
  {
    "id": "term-118",
    "de": "Zeitlupe",
    "en": "Slow motion"
  },
  {
    "id": "term-119",
    "de": "Spiegelbild",
    "en": "Mirror image"
  },
  {
    "id": "term-120",
    "de": "Superheld",
    "en": "Superhero"
  },
  {
    "id": "term-121",
    "de": "Zombie",
    "en": "Zombie"
  },
  {
    "id": "term-122",
    "de": "Schlafwandler",
    "en": "Sleepwalker"
  },
  {
    "id": "term-123",
    "de": "Baby beruhigen",
    "en": "Soothing babies"
  },
  {
    "id": "term-124",
    "de": "Selfie machen",
    "en": "Taking selfies"
  }
] as const;

// Adult-only, original prompts. These never enter the default U18 pool.
const adultTerms = [
  {
    "id": "adult-1",
    "de": "Morgenkater",
    "en": "Morning hangover"
  },
  {
    "id": "adult-2",
    "de": "Heimlich heimschleichen",
    "en": "Sneaking home"
  },
  {
    "id": "adult-3",
    "de": "Cocktail mixen",
    "en": "Mixing cocktails"
  },
  {
    "id": "adult-4",
    "de": "Bierfass anzapfen",
    "en": "Keg tapping"
  },
  {
    "id": "adult-5",
    "de": "Tequila trinken",
    "en": "Drinking tequila"
  },
  {
    "id": "adult-6",
    "de": "Champagner entkorken",
    "en": "Uncorking champagne"
  },
  {
    "id": "adult-7",
    "de": "Bierpong spielen",
    "en": "Beer pong"
  },
  {
    "id": "adult-8",
    "de": "Tischtanz",
    "en": "Table dancing"
  },
  {
    "id": "adult-9",
    "de": "Barflirt",
    "en": "Bar flirting"
  },
  {
    "id": "adult-10",
    "de": "Türsteher überzeugen",
    "en": "Convincing bouncers"
  },
  {
    "id": "adult-11",
    "de": "High Heels",
    "en": "High heels"
  },
  {
    "id": "adult-12",
    "de": "Club-Bass",
    "en": "Club bass"
  },
  {
    "id": "adult-13",
    "de": "Betrunkenes Karaoke",
    "en": "Drunken karaoke"
  },
  {
    "id": "adult-14",
    "de": "Taxi erwischen",
    "en": "Catching taxis"
  },
  {
    "id": "adult-15",
    "de": "Partyrechnung",
    "en": "Party bill"
  },
  {
    "id": "adult-16",
    "de": "Shots bestellen",
    "en": "Ordering shots"
  },
  {
    "id": "adult-17",
    "de": "Peinliches Date",
    "en": "Awkward date"
  },
  {
    "id": "adult-18",
    "de": "Heimlicher Kuss",
    "en": "Secret kiss"
  },
  {
    "id": "adult-19",
    "de": "Knutschfleck",
    "en": "Love bite"
  },
  {
    "id": "adult-20",
    "de": "Heiratsantrag",
    "en": "Marriage proposal"
  },
  {
    "id": "adult-21",
    "de": "Liebesbrief verstecken",
    "en": "Hidden letter"
  },
  {
    "id": "adult-22",
    "de": "Fremdgehen ertappt",
    "en": "Caught cheating"
  },
  {
    "id": "adult-23",
    "de": "Ex treffen",
    "en": "Ex encounter"
  },
  {
    "id": "adult-24",
    "de": "Missglückter Anmachspruch",
    "en": "Failed flirting"
  },
  {
    "id": "adult-25",
    "de": "Dating-App",
    "en": "Dating app"
  },
  {
    "id": "adult-26",
    "de": "Blind Date",
    "en": "Blind date"
  },
  {
    "id": "adult-27",
    "de": "Striptease",
    "en": "Striptease"
  },
  {
    "id": "adult-28",
    "de": "Poledance",
    "en": "Pole dancing"
  },
  {
    "id": "adult-29",
    "de": "Handschellen",
    "en": "Handcuffs"
  },
  {
    "id": "adult-30",
    "de": "BH öffnen",
    "en": "Unhooking bras"
  },
  {
    "id": "adult-31",
    "de": "Kondom überziehen",
    "en": "Unrolling condoms"
  },
  {
    "id": "adult-32",
    "de": "Kondomautomat",
    "en": "Condom machine"
  },
  {
    "id": "adult-33",
    "de": "Quietschendes Bett",
    "en": "Squeaky bed"
  },
  {
    "id": "adult-34",
    "de": "Autosex",
    "en": "Car sex"
  },
  {
    "id": "adult-35",
    "de": "Duschsex",
    "en": "Shower sex"
  },
  {
    "id": "adult-36",
    "de": "Leerer Vibrator",
    "en": "Dead vibrator"
  },
  {
    "id": "adult-37",
    "de": "Sexpuppe aufblasen",
    "en": "Inflatable doll"
  },
  {
    "id": "adult-38",
    "de": "Lauter Porno",
    "en": "Loud porn"
  },
  {
    "id": "adult-39",
    "de": "Erotische Massage",
    "en": "Erotic massage"
  },
  {
    "id": "adult-40",
    "de": "One-Night-Stand",
    "en": "One-night stand"
  },
  {
    "id": "adult-41",
    "de": "Nacktsonnen",
    "en": "Nude sunbathing"
  },
  {
    "id": "adult-42",
    "de": "Vergessene Unterhose",
    "en": "Forgotten underwear"
  },
  {
    "id": "adult-43",
    "de": "Nackt ausgesperrt",
    "en": "Locked-out nudist"
  },
  {
    "id": "adult-44",
    "de": "Sexgeräusche",
    "en": "Sex noises"
  },
  {
    "id": "adult-45",
    "de": "Joint drehen",
    "en": "Rolling joints"
  },
  {
    "id": "adult-46",
    "de": "Bong benutzen",
    "en": "Using bongs"
  },
  {
    "id": "adult-47",
    "de": "Kiffer-Heißhunger",
    "en": "Cannabis munchies"
  },
  {
    "id": "adult-48",
    "de": "Rauchmelder auslösen",
    "en": "Smoke alarm"
  },
  {
    "id": "adult-49",
    "de": "Zigarette anzünden",
    "en": "Lighting cigarettes"
  },
  {
    "id": "adult-50",
    "de": "Nikotin-Pflaster aufkleben",
    "en": "Nicotine patch"
  },
  {
    "id": "adult-51",
    "de": "Shisha vorbereiten",
    "en": "Preparing hookahs"
  },
  {
    "id": "adult-52",
    "de": "Zigarre rauchen",
    "en": "Smoking cigars"
  },
  {
    "id": "adult-53",
    "de": "Verstopfte Toilette",
    "en": "Blocked toilet"
  },
  {
    "id": "adult-54",
    "de": "Klopapier fehlt",
    "en": "Missing tissue"
  },
  {
    "id": "adult-55",
    "de": "Furz verbergen",
    "en": "Hiding farts"
  },
  {
    "id": "adult-56",
    "de": "Wildpinkeln",
    "en": "Public urination"
  },
  {
    "id": "adult-57",
    "de": "Volle Blase",
    "en": "Full bladder"
  },
  {
    "id": "adult-58",
    "de": "Intimrasur",
    "en": "Intimate shaving"
  },
  {
    "id": "adult-59",
    "de": "Intimwaxing",
    "en": "Intimate waxing"
  },
  {
    "id": "adult-60",
    "de": "Schwangerschaftstest",
    "en": "Pregnancy test"
  },
  {
    "id": "adult-61",
    "de": "Urologenbesuch",
    "en": "Urologist visit"
  },
  {
    "id": "adult-62",
    "de": "Prostatauntersuchung",
    "en": "Prostate examination"
  },
  {
    "id": "adult-63",
    "de": "Zwickender Tanga",
    "en": "Uncomfortable thong"
  },
  {
    "id": "adult-64",
    "de": "Tampon einführen",
    "en": "Inserting tampons"
  },
  {
    "id": "adult-65",
    "de": "Steuererklärung",
    "en": "Tax return"
  },
  {
    "id": "adult-66",
    "de": "Chef anlügen",
    "en": "Deceiving bosses"
  },
  {
    "id": "adult-67",
    "de": "Büroschlaf",
    "en": "Office nap"
  },
  {
    "id": "adult-68",
    "de": "Festival-Kater",
    "en": "Festival hangover"
  },
  {
    "id": "adult-69",
    "de": "Gehaltserhöhung verlangen",
    "en": "Salary negotiation"
  },
  {
    "id": "adult-70",
    "de": "Dispo entdecken",
    "en": "Overdraft discovery"
  },
  {
    "id": "adult-71",
    "de": "Strafzettel",
    "en": "Parking ticket"
  },
  {
    "id": "adult-72",
    "de": "Ehering abziehen",
    "en": "Removing rings"
  },
  {
    "id": "adult-73",
    "de": "Schwiegerelternbesuch",
    "en": "In-law visit"
  },
  {
    "id": "adult-74",
    "de": "Midlife-Crisis",
    "en": "Midlife crisis"
  },
  {
    "id": "adult-75",
    "de": "Tattoo bereuen",
    "en": "Tattoo regret"
  },
  {
    "id": "adult-76",
    "de": "Intimpiercing",
    "en": "Intimate piercing"
  }
] as const;

export const terms = [
  ...standardTerms.map((term) => ({ ...term, category: "standard" as const })),
  ...adultTerms.map((term) => ({ ...term, category: "adult" as const }))
] as const;
