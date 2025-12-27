export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Move, Spirit und Fun Event (Ocean Edition)",
    description:
      "Kitesurfen, Yoga und Fitness Event in Soma Bay mit Michaela Süßbauer und Katja Frank. Erlebe unvergessliche Momente am Roten Meer!",
    image: [
      `${process.env.URL}/opengraph-image`,
      `${process.env.URL}/hero.jpeg`,
      `${process.env.URL}/michi_und_katja.jpeg`,
    ],
    startDate: "2026-05-01",
    endDate: "2026-05-08",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "The Breakers Diving & Surfing Lodge",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Soma Bay",
        addressLocality: "Soma Bay",
        addressCountry: "EG",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "26.7922",
        longitude: "34.0117",
      },
    },
    offers: {
      "@type": "AggregateOffer",
      url: process.env.URL,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      validFrom: "2025-12-01",
    },
    organizer: [
      {
        "@type": "Person",
        name: "Michaela Süßbauer",
        description: "Kitesurf und Fitness Trainerin",
      },
      {
        "@type": "Person",
        name: "Katja Frank",
        description: "Yoga Trainerin",
      },
    ],
    performer: [
      {
        "@type": "Person",
        name: "Michaela Süßbauer",
      },
      {
        "@type": "Person",
        name: "Katja Frank",
      },
    ],
    sponsor: {
      "@type": "Organization",
      name: "Kite Spirit Fun",
      url: process.env.URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
