// src/data/gallery.ts

export type GalleryItem = {
  title: string;
  src: string; // path under /public
};

export type GalleryMap = Record<string, GalleryItem[]>;

/**
 * IMPORTANT
 * Slugs (object keys) must match your route param `[category]` AND the folder
 * names inside /public/catalogue/.
 *
 * Folders seen in your project:
 *   /public/catalogue/
 *     ├─ expert-artist/
 *     ├─ glamorous-party-makeup/
 *     ├─ model-party-makeup/
 *     ├─ senior-artist/
 *     ├─ signature-by-sana-sarah/
 *     └─ signature-senior-artist/
 */
export const GALLERY_VIDEOS: GalleryMap = {
  // 1) Signature by Sana Sarah — 2 videos only
  "signature-by-sana-sarah": [
    { title: "Signature by Sana Sarah", src: "/catalogue/signature-by-sana-sarah/video-1.mp4" },
    { title: "Signature by Sana Sarah", src: "/catalogue/signature-by-sana-sarah/video-2.mp4" },
    // NOTE: you also have video-2.mp4 in this folder; not listed per your requirement
  ],

  // 2) Signature Senior Artist — 4 videos
  "signature-senior-artist": [
    { title: "Signature Engagement", src: "/catalogue/signature-senior-artist/signature-engagement.mp4" },
    { title: "Signature Nikkah",     src: "/catalogue/signature-senior-artist/signature-nikkah.mp4" },
    { title: "Signature Bridal",     src: "/catalogue/signature-senior-artist/signature-bridal.mp4" },
    { title: "Signature Valima",     src: "/catalogue/signature-senior-artist/signature-valima.mp4" },
     { title: "Signature Party",     src: "/catalogue/signature-senior-artist/signature-party.mp4" },
  ],

  // 3) Senior Artist — 4 videos
  "senior-artist": [
    { title: "Senior Engagement", src: "/catalogue/senior-artist/senior-engagement.mp4" },
    { title: "Senior Nikkah",     src: "/catalogue/senior-artist/senior-nikkah.mp4" },
    { title: "Senior Bridal",     src: "/catalogue/senior-artist/senior-bridal.mp4" },
    { title: "Senior Valima",     src: "/catalogue/senior-artist/senior-valima.mp4" },
     { title: "Senior Party",     src: "/catalogue/senior-artist/senior-party.mp4" },
    // You also have senior-party.mp4 in this folder; omitted to match your spec
  ],

  // 4) Expert Artist — 3 videos
  "expert-artist": [
    { title: "Expert Nikkah", src: "" },
    { title: "Expert Bridal", src: "/catalogue/expert-artist/expert-bridal.mp4" },
    { title: "Expert Valima", src: "/catalogue/expert-artist/expert-valima.mp4" },
  ],

  // 5) Model Party Makeup — 2 videos
  "model-party-makeup": [
    { title: "Model Party",                 src: "/catalogue/model-party-makeup/model-party.mp4" },
    { title: "Model Party with Scarf Setting", src: "/catalogue/model-party-makeup/model-party-with-scarf-setting.mp4" },
  ],

  // 6) Glamorous Party Makeup — 4 videos (as present in your folder)
  "glamorous-party-makeup": [
    { title: "Glamorous with Glittery Eyes", src: "/catalogue/glamorous-party-makeup/glamorous-with-glittery-eyes.mp4" },
    { title: "Glamorous with Glittery Eye",  src: "/catalogue/glamorous-party-makeup/glamorous-with-glittery-eye.mp4" },
    { title: "Glamorous with Smoky Eyes",    src: "/catalogue/glamorous-party-makeup/glamorous-with-smoky-eyes.mp4" },
    { title: "Glamorous with Smoky Eyes",    src: "/catalogue/glamorous-party-makeup/glamorous-with-smoky-eyes-2.mp4" },
  ],
};
