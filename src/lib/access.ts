import "server-only";
import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ACCESS_COOKIE = "zu_access";

// The cookie holds a hash derived from the access code, so rotating ACCESS_CODE revokes every existing unlock.
export function accessToken(): string | null {
  const code = process.env.ACCESS_CODE;
  if (!code) return null;
  return createHash("sha256").update(`mzeeshanu:${code}`).digest("hex");
}

export function codeMatches(input: string): boolean {
  const code = process.env.ACCESS_CODE;
  if (!code) return false;
  const a = createHash("sha256").update(input.trim()).digest();
  const b = createHash("sha256").update(code).digest();
  return timingSafeEqual(a, b);
}

export async function hasAccess(): Promise<boolean> {
  // Read the cookie first: it marks the page as per-request even when ACCESS_CODE isn't configured.
  const value = (await cookies()).get(ACCESS_COOKIE)?.value;
  const token = accessToken();
  if (!token) return false;
  return !!value && value.length === token.length && timingSafeEqual(Buffer.from(value), Buffer.from(token));
}
