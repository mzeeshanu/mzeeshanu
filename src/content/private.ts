import "server-only";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Revealed only after a visitor unlocks with the access code.
// The repo is public, so this data is NOT in source control. It comes from:
//   - the PRIVATE_CONTENT environment variable (JSON) in production, or
//   - private-content.json at the repo root (gitignored) during local development.
// Shape: see private-content.example.json.

type PrivateContent = {
  basedIn?: string;
  eras: Record<string, { org: string; location: string; dates: string }>;
  projects: { name: string; url: string; status: string; summary: string }[];
};

const EMPTY: PrivateContent = { eras: {}, projects: [] };

function load(): PrivateContent {
  try {
    if (process.env.PRIVATE_CONTENT) return { ...EMPTY, ...JSON.parse(process.env.PRIVATE_CONTENT) };
    const file = join(process.cwd(), "private-content.json");
    if (existsSync(file)) return { ...EMPTY, ...JSON.parse(readFileSync(file, "utf8")) };
  } catch (e) {
    console.error("Could not parse private content:", e);
  }
  return EMPTY;
}

export const privateContent = load();
