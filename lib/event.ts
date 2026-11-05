// Central place to edit event copy & data shown across the landing page.
// Dates, deadlines, and all customer-facing text live here so they stay in sync.

// Early-bird deadline used for the countdown + urgency messaging.
// Format: ISO string (local time).
export const earlyBirdDeadline = "2027-01-31T23:59:59";

// Total number of spots and how many are still available.
// Update `spotsLeft` as bookings come in to drive the scarcity messaging.
export const totalSpots = 20;
export const spotsLeft = 8;

// What's included in every package – shown once in the "Das ist alles dabei"
// section. Edit freely.
export const inclusions = [
  { icon: "cocktail", text: "Welcome Cocktail" },
  { icon: "yoga", text: "Sunrise & Sunset Yoga" },
  { icon: "fitness", text: "Abwechslungsreiches Fitnessprogramm" },
  { icon: "trainer", text: "Betreuung durch erfahrene Trainer" },
  { icon: "dinner", text: "Bedouin Dinner am Strand" },
  { icon: "boat", text: "Sunset Boot Tour" },
  { icon: "shuttle", text: "Kostenloser Shuttle zum Kitespot & zur Marina" },
  { icon: "beach", text: "Kostenlose Daybeds & Liegen am Strand" },
  { icon: "dive", text: "Tauchschule direkt am Hotel" },
  { icon: "halfboard", text: "6 Nächte, Halbpension, unbegrenzt Trinkwasser" },
];

// A typical day – shown in the "So sieht dein Tag aus" timeline.
export const schedule = [
  {
    time: "07:00",
    title: "Sunrise Yoga",
    desc: "Sanfter Start in den Tag mit Blick aufs Meer.",
  },
  {
    time: "08:30",
    title: "Frühstück",
    desc: "Ausgiebiges Frühstück am Buffet.",
  },
  {
    time: "10:00",
    title: "Kite- & Wing-Session",
    desc: "Auf dem Wasser mit Betreuung – oder entspannen am Strand.",
  },
  {
    time: "13:00",
    title: "Lunch & Freizeit",
    desc: "Pause, Schnorcheln oder einfach Sonne tanken.",
  },
  {
    time: "16:00",
    title: "Mobility & Workout",
    desc: "Faszientraining, Kraft & Recovery für Wassersportler.",
  },
  {
    time: "18:30",
    title: "Sunset & Community",
    desc: "Sunset Boot Tour, Bedouin Dinner oder gemeinsamer Ausklang.",
  },
];

// Testimonials – replace with real quotes, names, and photos.
// `image` is optional; falls back to initials if omitted.
export const testimonials = [
  {
    quote:
      "Das war die beste Woche meines Jahres. Ich kam als absolute Anfängerin und bin mit neuen Freunden und einem riesigen Grinsen nach Hause.",
    name: "Sandra",
    detail: "42, München",
    image: "",
  },
  {
    quote:
      "Michi schafft eine Atmosphäre, in der sich jeder sofort wohlfühlt. Kiten, Yoga, Community – alles hat einfach gepasst.",
    name: "Thomas",
    detail: "38, Hamburg",
    image: "",
  },
  {
    quote:
      "Ich war als Solo-Reisende dabei und habe mich nie allein gefühlt. Life-changing trifft es wirklich am besten.",
    name: "Nadine",
    detail: "35, Köln",
    image: "",
  },
];

// FAQ – edit answers to match your real policies.
export const faqs = [
  {
    q: "Für wen ist das Camp geeignet?",
    a: "Für alle – Anfänger wie Fortgeschrittene, Paare, Freunde und Solo-Reisende. Du brauchst keine Vorerfahrung im Kiten; wer möchte, kann einen Kurs direkt vor Ort dazubuchen.",
  },
  {
    q: "Ist die Anreise im Preis enthalten?",
    a: "Nein, die Flüge organisierst du selbst. Der nächste Flughafen ist Hurghada (ca. 45 Min. zum Hotel). Gerne helfe ich dir bei der Planung und beim Finden von Mitreisenden.",
  },
  {
    q: "Was ist im Preis inbegriffen?",
    a: "6 Nächte im Breakers mit Halbpension, das komplette Fitness- & Yoga-Programm, Welcome Cocktail, Sunset Boot Tour, Bedouin Dinner und die Shuttles zum Kitespot. Kitematerial, -kurse und Tauchgänge sind optional und werden separat gebucht.",
  },
  {
    q: "Reise ich als Solo-Reisende*r allein?",
    a: "Überhaupt nicht. Ein großer Teil der Gruppe kommt allein – genau das macht die Community aus. Für das Einzelzimmer gibt es die Option 'Doppelzimmer zur Einzelnutzung'.",
  },
  {
    q: "Wie läuft die Buchung und Anzahlung ab?",
    a: "Du schickst eine unverbindliche Buchungsanfrage über das Formular. Wir melden uns mit allen Details zu Anzahlung und Zahlungsmodalitäten bei dir.",
  },
  {
    q: "Bis wann bekomme ich den Frühbucher-Rabatt?",
    a: "20% Rabatt bei Buchung bis 31.01.2027, 10% zwischen 01.02. und 31.03.2027. Ab dem 01.04.2027 gilt der reguläre Preis.",
  },
];

// Partner venues – logos shown in a trust strip. Add logo paths in /public.
export const partners = [
  {
    name: "The Breakers Soma Bay",
    url: "https://www.thebreakers-somabay.com/de/",
    logo: "/breakers.png",
  },
  {
    name: "7Bft Kitehouse",
    url: "https://kitehouse-somabay.com/de/",
    logo: "/kitehouse.png",
  },
  {
    name: "Orca Dive Club",
    url: "https://orca.de/aegypten/tauchbasen-orca-dive-club-soma-bay",
    logo: "/orca.png",
  },
];
