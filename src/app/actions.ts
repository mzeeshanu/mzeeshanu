"use server";

import { cookies } from "next/headers";
import { ACCESS_COOKIE, accessToken, codeMatches } from "@/lib/access";

export type UnlockState = { error?: string };

export async function unlock(_prev: UnlockState, formData: FormData): Promise<UnlockState> {
  const code = String(formData.get("code") ?? "");
  if (!codeMatches(code)) {
    await new Promise((r) => setTimeout(r, 800)); // slow down guessing
    return { error: "That code didn't work." };
  }
  (await cookies()).set(ACCESS_COOKIE, accessToken()!, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
  });
  return {};
}

export async function lock() {
  (await cookies()).delete(ACCESS_COOKIE);
}
