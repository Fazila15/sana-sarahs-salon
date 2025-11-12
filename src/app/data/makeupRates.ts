// Branch keys we use everywhere
export type BranchKey =
  | "johar"
  | "northNazimabad"
  | "hyderabad"
  | "dha"
  | "tariqRoad"
  | "lahore";

// Branches where Expert category EXISTS
export const HAS_EXPERT: Record<BranchKey, boolean> = {
  johar: true,
  northNazimabad: true,
  hyderabad: true,
  dha: false,
  tariqRoad: false,
  lahore: false,
};

// ------------------------------
// PRICE TABLE (cleaned numbers)
// ------------------------------
type PriceRow = Partial<Record<BranchKey, number>>;

export const PRICE = {
  // Signature by Sana Sarah
  "Signature by Sana Sarah": {
    Engagement: { johar: 35000, dha: 70000, northNazimabad: 70000, tariqRoad: 70000, hyderabad: 200000, lahore: 150000 },
    Mehndi:     { johar: 35000, dha: 70000, northNazimabad: 70000, tariqRoad: 70000, hyderabad: 200000, lahore: 150000 },
    Mayoun:     { johar: 35000, dha: 70000, northNazimabad: 70000, tariqRoad: 70000, hyderabad: 200000, lahore: 150000 },
    Nikkah:     { johar: 35000, dha: 70000, northNazimabad: 70000, tariqRoad: 70000, hyderabad: 200000, lahore: 150000 },
    Bridal:     { johar: 40000, dha: 70000, northNazimabad: 70000, tariqRoad: 70000, hyderabad: 200000, lahore: 150000 },
    Party:      { johar: 25000, dha: 40000, northNazimabad: 40000, tariqRoad: 40000, hyderabad: 200000, lahore: 150000 },
  },

  // Signature Artist
  "Signature Artist": {
    Bridal:     { johar: 32000, dha: 32000, northNazimabad: 32000, tariqRoad: 32000, hyderabad: 35000, lahore: 50000 },
    Engagement: { johar: 25000, dha: 25000, northNazimabad: 25000, tariqRoad: 25000, hyderabad: 30000, lahore: 40000 },
    Mehndi:     { johar: 25000, dha: 25000, northNazimabad: 25000, tariqRoad: 25000, hyderabad: 30000, lahore: 40000 },
    Mayoun:     { johar: 25000, dha: 25000, northNazimabad: 25000, tariqRoad: 25000, hyderabad: 30000, lahore: 40000 },
    Nikkah:     { johar: 25000, dha: 25000, northNazimabad: 25000, tariqRoad: 25000, hyderabad: 30000, lahore: 40000 },
    Party:      { johar: 15000, dha: 15000, northNazimabad: 15000, tariqRoad: 15000, hyderabad: 20000, lahore: 25000 },
  },

  // Senior Artist
  "Senior Artist": {
    "Party (General)":        { johar: 10000, northNazimabad: 10000, hyderabad: 15000 },
    "Model Party Makeup":     { dha: 10000, tariqRoad: 10000, lahore: 12500 },
    "Glamorous Party Makeup": { dha: 8000,  tariqRoad: 8000,  lahore: 10000 },
    "Soft Party Makeup":      { dha: 6000,  tariqRoad: 6000,  lahore: 7500 },
  },

  // Expert Artist — only for Expert branches
  "Expert Artist": {
    "Model Party Makeup":     { johar: 10000, northNazimabad: 10000, hyderabad: 7500 },
    "Glamorous Party Makeup": { johar: 7500,  northNazimabad: 7500,  hyderabad: 10000 },
    "Soft Party Makeup":      { johar: 6000,  northNazimabad: 5000,  hyderabad: 5000 },
  },
} as const;

export type CategoryKey = keyof typeof PRICE;
export type SubcatKey<C extends CategoryKey> = keyof typeof PRICE[C];

// ----------------------------------------------------
// Updated: Decide which subcategories to DISPLAY (Fix #3)
// ----------------------------------------------------
export function subcatsForCategory(category: CategoryKey, branch?: BranchKey): string[] {
  if (category === "Expert Artist") {
    return [
      "Bridal",
      "Engagement",
      "Mehndi",
      "Mayoun",
      "Nikkah",
      "Model Party Makeup",
      "Glamorous Party Makeup",
      "Soft Party Makeup",
    ];
  }

  if (category === "Senior Artist") {
    if (branch && HAS_EXPERT[branch]) {
      // Expert exists → simplified senior list
      return ["Bridal", "Engagement", "Mehndi", "Mayoun", "Nikkah", "Party (General)"];
    } else {
      // No Expert → include all 3 party types
      return [
        "Bridal",
        "Engagement",
        "Mehndi",
        "Mayoun",
        "Nikkah",
        "Model Party Makeup",
        "Glamorous Party Makeup",
        "Soft Party Makeup",
      ];
    }
  }

  // Signature by Sana Sarah / Signature Artist
  return Object.keys(PRICE[category]) as string[];
}

// ---------------------------------------------
// Price resolver (unchanged except comments)
// ---------------------------------------------
export function getPrice(
  category: CategoryKey,
  subcat: string,
  branch: BranchKey
): number | null {
  if (
    category === "Senior Artist" &&
    (subcat === "Model Party Makeup" ||
      subcat === "Glamorous Party Makeup" ||
      subcat === "Soft Party Makeup") &&
    HAS_EXPERT[branch]
  ) return null;

  if (
    category === "Expert Artist" &&
    (subcat === "Model Party Makeup" ||
      subcat === "Glamorous Party Makeup" ||
      subcat === "Soft Party Makeup") &&
    !HAS_EXPERT[branch]
  ) return null;

  const row = (PRICE[category] as Record<string, PriceRow>)[subcat];
  const val = row?.[branch];
  return typeof val === "number" ? val : null;
}

export const makeupRates = PRICE;
