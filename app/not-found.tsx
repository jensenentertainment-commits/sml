// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-50 text-black">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-xl font-semibold tracking-tight">
          Siden er ikke tilgjengelig
        </h1>

        <p className="mt-4 text-sm leading-7 text-black/75">
          Det forespurte innholdet kunne ikke vises. Dette kan skyldes at siden
          ikke er etablert, er flyttet, eller ikke lenger er tilgjengelig.
        </p>

        <p className="mt-4 text-sm leading-7 text-black/75">
          Det er ikke registrert ytterligere informasjon knyttet til forespørselen.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="text-sm font-semibold text-[#1F3A5F] underline underline-offset-4"
          >
            Gå til forsiden
          </Link>
        </div>
      </div>
    </main>
  );
}
