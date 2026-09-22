"use client";

import { useActionState, useState } from "react";
import { lock, unlock, type UnlockState } from "@/app/actions";

export function Unlock({ unlocked }: { unlocked: boolean }) {
  const [open, setOpen] = useState(false);
  const [state, action, pending] = useActionState<UnlockState, FormData>(unlock, {});

  if (unlocked) {
    return (
      <form action={lock} className="unlock">
        <span className="unlock-status">● Full details visible</span>
        <button className="link-button" type="submit">Lock</button>
      </form>
    );
  }

  if (!open) {
    return (
      <button className="unlock-toggle" onClick={() => setOpen(true)}>
        <span aria-hidden>🔒</span> Have an access code? See companies, locations &amp; dates
      </button>
    );
  }

  return (
    <form action={action} className="unlock">
      <label htmlFor="code" className="sr-only">Access code</label>
      <input id="code" name="code" type="password" placeholder="Access code" autoComplete="off" autoFocus required />
      <button type="submit" disabled={pending}>{pending ? "Checking…" : "Unlock"}</button>
      {state.error && <p className="unlock-error" role="alert">{state.error}</p>}
    </form>
  );
}
