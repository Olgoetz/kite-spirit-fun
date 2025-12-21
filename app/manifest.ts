import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ocean-Spirit-Fun Camp 2025",
    short_name: "Kitecamp",
    description:
      "Ocean-Spirit-Fun Camp 2026 in Soma Bay (Ägypten) mit Michaela Süßbauer und Katja Frank",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
