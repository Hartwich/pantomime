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
    "en": "Packing a suitcase"
  },
  {
    "id": "term-70",
    "de": "Geschenk einpacken",
    "en": "Wrapping a present"
  },
  {
    "id": "term-71",
    "de": "Wecker ausschalten",
    "en": "Turning off an alarm"
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
    "en": "Tasting a lemon"
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
    "en": "Eating ice cream"
  },
  {
    "id": "term-84",
    "de": "Popcorn machen",
    "en": "Making popcorn"
  },
  {
    "id": "term-85",
    "de": "Banane schälen",
    "en": "Peeling a banana"
  },
  {
    "id": "term-86",
    "de": "Heißen Tee trinken",
    "en": "Drinking hot tea"
  },
  {
    "id": "term-87",
    "de": "Kokosnuss öffnen",
    "en": "Opening a coconut"
  },
  {
    "id": "term-88",
    "de": "Kuchen dekorieren",
    "en": "Decorating a cake"
  },
  {
    "id": "term-89",
    "de": "Regenschirm öffnen",
    "en": "Opening an umbrella"
  },
  {
    "id": "term-90",
    "de": "Drachen steigen lassen",
    "en": "Flying a kite"
  },
  {
    "id": "term-91",
    "de": "Zelt aufbauen",
    "en": "Putting up a tent"
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
    "en": "Walking a dog"
  },
  {
    "id": "term-96",
    "de": "Mücke fangen",
    "en": "Catching a mosquito"
  },
  {
    "id": "term-97",
    "de": "Durch Matsch laufen",
    "en": "Walking through mud"
  },
  {
    "id": "term-98",
    "de": "Im Wind laufen",
    "en": "Walking in the wind"
  },
  {
    "id": "term-99",
    "de": "Auf Eis ausrutschen",
    "en": "Slipping on ice"
  },
  {
    "id": "term-100",
    "de": "Barfuß über heißen Sand",
    "en": "Walking on hot sand"
  },
  {
    "id": "term-101",
    "de": "Fahrrad fahren",
    "en": "Riding a bicycle"
  },
  {
    "id": "term-102",
    "de": "Auto einparken",
    "en": "Parking a car"
  },
  {
    "id": "term-103",
    "de": "Motorrad fahren",
    "en": "Riding a motorcycle"
  },
  {
    "id": "term-104",
    "de": "Bus verpassen",
    "en": "Missing a bus"
  },
  {
    "id": "term-105",
    "de": "Reifen wechseln",
    "en": "Changing a tyre"
  },
  {
    "id": "term-106",
    "de": "Fahrstuhl fahren",
    "en": "Riding a lift"
  },
  {
    "id": "term-107",
    "de": "Eine schwere Tür öffnen",
    "en": "Opening a heavy door"
  },
  {
    "id": "term-108",
    "de": "Unsichtbare Wand",
    "en": "Invisible wall"
  },
  {
    "id": "term-109",
    "de": "Auf einem Seil balancieren",
    "en": "Balancing on a tightrope"
  },
  {
    "id": "term-110",
    "de": "Einen Schatz ausgraben",
    "en": "Digging up treasure"
  },
  {
    "id": "term-111",
    "de": "Eine Fliege verscheuchen",
    "en": "Shooing a fly"
  },
  {
    "id": "term-112",
    "de": "Einen Luftballon aufblasen",
    "en": "Inflating a balloon"
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
    "de": "Ein Baby beruhigen",
    "en": "Soothing a baby"
  },
  {
    "id": "term-124",
    "de": "Ein Selfie machen",
    "en": "Taking a selfie"
  }
] as const;

// Adult-only, original prompts. These never enter the default U18 pool.
const adultTerms = [
  {
    "id": "adult-1",
    "de": "Kater am Morgen",
    "en": "Morning hangover"
  },
  {
    "id": "adult-2",
    "de": "Betrunken nach Hause schleichen",
    "en": "Sneaking home drunk"
  },
  {
    "id": "adult-3",
    "de": "Einen Cocktail mixen",
    "en": "Mixing a cocktail"
  },
  {
    "id": "adult-4",
    "de": "Ein Bierfass anzapfen",
    "en": "Tapping a beer keg"
  },
  {
    "id": "adult-5",
    "de": "Tequila mit Salz und Zitrone",
    "en": "Tequila with salt and lemon"
  },
  {
    "id": "adult-6",
    "de": "Champagner entkorken",
    "en": "Uncorking champagne"
  },
  {
    "id": "adult-7",
    "de": "Bierpong spielen",
    "en": "Playing beer pong"
  },
  {
    "id": "adult-8",
    "de": "Auf dem Tisch tanzen",
    "en": "Dancing on a table"
  },
  {
    "id": "adult-9",
    "de": "An der Bar flirten",
    "en": "Flirting at the bar"
  },
  {
    "id": "adult-10",
    "de": "Den Türsteher überzeugen",
    "en": "Convincing the bouncer"
  },
  {
    "id": "adult-11",
    "de": "High Heels auf Kopfsteinpflaster",
    "en": "High heels on cobblestones"
  },
  {
    "id": "adult-12",
    "de": "Im Club den Bass spüren",
    "en": "Feeling the bass at a club"
  },
  {
    "id": "adult-13",
    "de": "Karaoke nach drei Drinks",
    "en": "Karaoke after three drinks"
  },
  {
    "id": "adult-14",
    "de": "Das letzte Taxi erwischen",
    "en": "Catching the last taxi"
  },
  {
    "id": "adult-15",
    "de": "Die Rechnung nach der Partynacht",
    "en": "The bill after a night out"
  },
  {
    "id": "adult-16",
    "de": "Eine Runde Shots bestellen",
    "en": "Ordering a round of shots"
  },
  {
    "id": "adult-17",
    "de": "Ein peinliches erstes Date",
    "en": "An awkward first date"
  },
  {
    "id": "adult-18",
    "de": "Ein heimlicher Kuss",
    "en": "A secret kiss"
  },
  {
    "id": "adult-19",
    "de": "Ein Knutschfleck",
    "en": "A love bite"
  },
  {
    "id": "adult-20",
    "de": "Ein Heiratsantrag",
    "en": "A marriage proposal"
  },
  {
    "id": "adult-21",
    "de": "Einen Liebesbrief verstecken",
    "en": "Hiding a love letter"
  },
  {
    "id": "adult-22",
    "de": "Beim Fremdgehen erwischt",
    "en": "Caught cheating"
  },
  {
    "id": "adult-23",
    "de": "Den Ex auf einer Party treffen",
    "en": "Meeting your ex at a party"
  },
  {
    "id": "adult-24",
    "de": "Ein missglückter Anmachspruch",
    "en": "A failed pickup line"
  },
  {
    "id": "adult-25",
    "de": "Auf einer Dating-App wischen",
    "en": "Swiping on a dating app"
  },
  {
    "id": "adult-26",
    "de": "Ein Blind Date suchen",
    "en": "Looking for a blind date"
  },
  {
    "id": "adult-27",
    "de": "Einen romantischen Striptease tanzen",
    "en": "Performing a romantic striptease"
  },
  {
    "id": "adult-28",
    "de": "Eine Pole-Dance-Stange erklimmen",
    "en": "Climbing a pole-dancing pole"
  },
  {
    "id": "adult-29",
    "de": "In Handschellen feststecken",
    "en": "Getting stuck in handcuffs"
  },
  {
    "id": "adult-30",
    "de": "Ein BH-Verschluss klemmt",
    "en": "A stuck bra clasp"
  },
  {
    "id": "adult-31",
    "de": "Ein Kondom überziehen",
    "en": "Putting on a condom"
  },
  {
    "id": "adult-32",
    "de": "Ein Kondomautomat klemmt",
    "en": "A jammed condom machine"
  },
  {
    "id": "adult-33",
    "de": "Ein quietschendes Bett",
    "en": "A squeaky bed"
  },
  {
    "id": "adult-34",
    "de": "Sex im Auto",
    "en": "Sex in a car"
  },
  {
    "id": "adult-35",
    "de": "Sex unter der Dusche",
    "en": "Sex in the shower"
  },
  {
    "id": "adult-36",
    "de": "Ein Vibrator mit leerem Akku",
    "en": "A vibrator with a dead battery"
  },
  {
    "id": "adult-37",
    "de": "Eine Sexpuppe aufblasen",
    "en": "Inflating a sex doll"
  },
  {
    "id": "adult-38",
    "de": "Ein Porno läuft versehentlich laut",
    "en": "Accidentally playing porn out loud"
  },
  {
    "id": "adult-39",
    "de": "Eine erotische Massage",
    "en": "An erotic massage"
  },
  {
    "id": "adult-40",
    "de": "Ein One-Night-Stand schleicht hinaus",
    "en": "A one-night stand sneaking out"
  },
  {
    "id": "adult-41",
    "de": "Beim Nacktsonnen überrascht",
    "en": "Caught sunbathing naked"
  },
  {
    "id": "adult-42",
    "de": "Die Unterhose im falschen Zimmer",
    "en": "Underwear in the wrong room"
  },
  {
    "id": "adult-43",
    "de": "Nackt aus dem Bad ausgesperrt",
    "en": "Locked out of the bathroom naked"
  },
  {
    "id": "adult-44",
    "de": "Die Nachbarn beim Sex hören",
    "en": "Hearing neighbours having sex"
  },
  {
    "id": "adult-45",
    "de": "Ein Joint wird gedreht",
    "en": "Rolling a joint"
  },
  {
    "id": "adult-46",
    "de": "Eine Bong benutzen",
    "en": "Using a bong"
  },
  {
    "id": "adult-47",
    "de": "Heißhunger nach dem Kiffen",
    "en": "The munchies after smoking weed"
  },
  {
    "id": "adult-48",
    "de": "Rauchmelder beim Rauchen auslösen",
    "en": "Setting off a smoke alarm while smoking"
  },
  {
    "id": "adult-49",
    "de": "Eine Zigarette im Regen anzünden",
    "en": "Lighting a cigarette in the rain"
  },
  {
    "id": "adult-50",
    "de": "Nikotin-Pflaster aufkleben",
    "en": "Applying a nicotine patch"
  },
  {
    "id": "adult-51",
    "de": "Eine Shisha vorbereiten",
    "en": "Preparing a hookah"
  },
  {
    "id": "adult-52",
    "de": "Der erste Zug an einer Zigarre",
    "en": "The first puff of a cigar"
  },
  {
    "id": "adult-53",
    "de": "Eine verstopfte Toilette",
    "en": "A blocked toilet"
  },
  {
    "id": "adult-54",
    "de": "Kein Klopapier mehr",
    "en": "Running out of toilet paper"
  },
  {
    "id": "adult-55",
    "de": "Einen Furz verbergen",
    "en": "Hiding a fart"
  },
  {
    "id": "adult-56",
    "de": "In der Öffentlichkeit pinkeln",
    "en": "Peeing in public"
  },
  {
    "id": "adult-57",
    "de": "Mit voller Blase Schlange stehen",
    "en": "Queuing with a full bladder"
  },
  {
    "id": "adult-58",
    "de": "Intimrasur",
    "en": "Shaving intimate areas"
  },
  {
    "id": "adult-59",
    "de": "Waxing im Intimbereich",
    "en": "Intimate waxing"
  },
  {
    "id": "adult-60",
    "de": "Ein Schwangerschaftstest",
    "en": "A pregnancy test"
  },
  {
    "id": "adult-61",
    "de": "Beim Urologen",
    "en": "At the urologist"
  },
  {
    "id": "adult-62",
    "de": "Eine Prostatauntersuchung",
    "en": "A prostate examination"
  },
  {
    "id": "adult-63",
    "de": "Ein Tanga zwickt",
    "en": "An uncomfortable thong"
  },
  {
    "id": "adult-64",
    "de": "Einen Tampon einführen",
    "en": "Inserting a tampon"
  },
  {
    "id": "adult-65",
    "de": "Die Steuererklärung verzweifelt ausfüllen",
    "en": "Desperately filing a tax return"
  },
  {
    "id": "adult-66",
    "de": "Dem Chef etwas vorspielen",
    "en": "Putting on an act for the boss"
  },
  {
    "id": "adult-67",
    "de": "Im Büro heimlich schlafen",
    "en": "Secretly sleeping at the office"
  },
  {
    "id": "adult-68",
    "de": "Montagmorgen nach dem Festival",
    "en": "Monday morning after a festival"
  },
  {
    "id": "adult-69",
    "de": "Eine Gehaltserhöhung verlangen",
    "en": "Asking for a pay rise"
  },
  {
    "id": "adult-70",
    "de": "Den Dispo im Banking entdecken",
    "en": "Discovering an overdraft"
  },
  {
    "id": "adult-71",
    "de": "Ein Strafzettel am Auto",
    "en": "A parking ticket on your car"
  },
  {
    "id": "adult-72",
    "de": "Den Ehering heimlich abziehen",
    "en": "Secretly taking off a wedding ring"
  },
  {
    "id": "adult-73",
    "de": "Die Schwiegereltern stehen vor der Tür",
    "en": "The in-laws at the door"
  },
  {
    "id": "adult-74",
    "de": "Eine Midlife-Crisis auf dem Motorrad",
    "en": "A midlife crisis on a motorcycle"
  },
  {
    "id": "adult-75",
    "de": "Ein Tattoo bereuen",
    "en": "Regretting a tattoo"
  },
  {
    "id": "adult-76",
    "de": "Piercing an einer empfindlichen Stelle",
    "en": "A piercing in a sensitive place"
  }
] as const;

export const terms = [
  ...standardTerms.map((term) => ({ ...term, category: "standard" as const })),
  ...adultTerms.map((term) => ({ ...term, category: "adult" as const }))
] as const;
