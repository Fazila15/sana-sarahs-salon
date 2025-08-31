// src/data/gallery.ts
// Keep this OUTSIDE the /app folder.

export type GalleryItem = { title: string; src: string };
export type GalleryMap = Record<string, GalleryItem[]>;

/**
 * Folder ↔ slug must MATCH exactly (all kebab-case)
 * /public/catalogue/
 *   expert-artist/
 *   glamorous-party-makeup/
 *   model-party-makeup/
 *   senior-artist/
 *   signature-by-sana-sarah/
 *   signature-senior-artist/
 */
export const GALLERY_VIDEOS: GalleryMap = {
  // 1) Signature by Sana Sarah — 2 videos only
  "signature-by-sana-sarah": [
    { title: "Signature by Sana Sarah — 1", src: "/catalogue/signature-by-sana-sarah/sana.mp4" },
    { title: "Signature by Sana Sarah — 2", src: "/catalogue/signature-by-sana-sarah/video-1.mp4" },
  ],

  // 2) Signature Senior Artist — 4
  "signature-senior-artist": [
    { title: "Signature Engagement", src: "/catalogue/signature-senior-artist/signature-engagement.mp4" },
    { title: "Signature Nikkah",     src: "/catalogue/signature-senior-artist/signature-nikkah.mp4" },
    { title: "Signature Bridal",     src: "/catalogue/signature-senior-artist/signature-bridal.mp4" },
    { title: "Signature Valima",     src: "/catalogue/signature-senior-artist/signature-valima.mp4" },
  ],

  // 3) Senior Artist — 4
  "senior-artist": [
    { title: "Senior Engagement", src: "/catalogue/senior-artist/senior-engagement.mp4" },
    { title: "Senior Nikkah",     src: "/catalogue/senior-artist/senior-nikkah.mp4" },
    { title: "Senior Bridal",     src: "/catalogue/senior-artist/senior-bridal.mp4" },
    { title: "Senior Valima",     src: "/catalogue/senior-artist/senior-valima.mp4" },
  ],

  // 4) Expert Artist — 3
  "expert-artist": [
    { title: "Expert Nikkah", src: "/catalogue/expert-artist/expert-nikkah.mp4" },
    { title: "Expert Bridal", src: "/catalogue/expert-artist/expert-bridal.mp4" },
    { title: "Expert Valima", src: "/catalogue/expert-artist/expert-valima.mp4" },
  ],

  // 5) Model Party Makeup — 2
  "model-party-makeup": [
    { title: "Model Party",                  src: "/catalogue/model-party-makeup/model-party.mp4" },
    { title: "Model Party with Scarf Setting", src: "/catalogue/model-party-makeup/model-party-with-scarf-setting.mp4" },
  ],

  // 6) Glamorous Party Makeup — 4
  "glamorous-party-makeup": [
    { title: "Glamorous with Glittery Eyes", src: "/catalogue/glamorous-party-makeup/glamorous-with-glittery-eyes.mp4" },
    { title: "Glamorous with Glittery Eye",  src: "/catalogue/glamorous-party-makeup/glamorous-with-glittery-eye.mp4" },
    { title: "Glamorous with Smoky Eyes",    src: "/catalogue/glamorous-party-makeup/glamorous-with-smoky-eyes.mp4" },
    { title: "Glamorous with Smoky Eyes (2)",src: "/catalogue/glamorous-party-makeup/glamorous-with-smoky-eyes-2.mp4" },
  ],
};
