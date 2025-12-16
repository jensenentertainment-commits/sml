// app/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SML – Senter for Midlertidige Løsninger",
  description:
    "Senter for Midlertidige Løsninger (SML) dokumenterer, systematiserer og synliggjør løsninger som opprinnelig var ment å være midlertidige.",
  openGraph: {
    title: "SML – Senter for Midlertidige Løsninger",
    description:
      "Senter for Midlertidige Løsninger (SML) dokumenterer, systematiserer og synliggjør løsninger som opprinnelig var ment å være midlertidige.",
    locale: "nb_NO",
    type: "website",
  },
};

const THEME = {
  ink: "#1F2A37",
  slate: "#475569",
  line: "rgba(15, 23, 42, 0.10)",
  bg: "#F6F5F1", // varm off-white / beige-ish
  panel: "#FFFFFF",
  muted: "#F3F4F6",
};

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold"
      style={{ borderColor: THEME.line, color: THEME.slate, background: THEME.panel }}
    >
      {children}
    </span>
  );
}

function Card({
  title,
  children,
  id,
}: {
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="rounded-2xl border bg-white p-6 shadow-sm"
      style={{ borderColor: THEME.line, background: THEME.panel }}
    >
      <h2 className="text-sm font-semibold tracking-tight" style={{ color: THEME.ink }}>
        {title}
      </h2>
      <div className="mt-3 text-sm leading-7 text-black/75">{children}</div>
    </section>
  );
}

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      className="block rounded-xl px-3 py-2 text-sm font-semibold text-black/70 hover:bg-black/5"
    >
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen" style={{ background: THEME.bg, color: THEME.ink }}>
      {/* Top bar */}
      <header className="border-b" style={{ borderColor: THEME.line, background: THEME.panel }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div
              className="grid h-9 w-9 place-items-center rounded-xl border"
              style={{ borderColor: THEME.line, background: THEME.muted }}
            >
              <span className="text-xs font-bold tracking-tight" style={{ color: THEME.ink }}>
                SML
              </span>
            </div>

            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight" style={{ color: THEME.ink }}>
                Senter for Midlertidige Løsninger
              </div>
              <div className="text-xs" style={{ color: THEME.slate }}>
                Midlertidig etablert · Videreført ved behov
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Chip>Status: I drift</Chip>
            <Chip>Varighet: Uavklart</Chip>
          </div>
        </div>
      </header>

      {/* Layout */}
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 lg:grid-cols-4">
        {/* Left nav */}
        <aside
          className="h-fit rounded-2xl border p-4 shadow-sm"
          style={{ borderColor: THEME.line, background: THEME.panel }}
        >
          <div className="px-3 pb-2 text-xs font-semibold" style={{ color: THEME.slate }}>
            Innhold
          </div>
          <nav className="space-y-1">
            <NavLink href="#oversikt">Oversikt</NavLink>
            <NavLink href="#mandat">Mandat</NavLink>
            <NavLink href="#kriterier">Kriterier</NavLink>
            <NavLink href="#kategorier">Kategorier</NavLink>
            <NavLink href="#faq">Spørsmål</NavLink>
            <NavLink href="#publikasjoner">Publikasjoner</NavLink>
          </nav>

          <div
            className="mt-4 rounded-xl border p-3 text-xs"
            style={{ borderColor: THEME.line, background: THEME.muted }}
          >
            <div className="font-semibold" style={{ color: THEME.ink }}>
              Merknad
            </div>
            <div className="mt-1 leading-5 text-black/60">
              Midlertidige løsninger kan vedvare i påvente av permanent løsning.
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="space-y-6 lg:col-span-3">
          {/* Overview / hero-ish */}
          <section
            id="oversikt"
            className="rounded-2xl border p-7 shadow-sm"
            style={{ borderColor: THEME.line, background: THEME.panel }}
          >
            <div className="flex flex-wrap items-center gap-2">
              <Chip>SML</Chip>
              <Chip>Etablert: Midlertidig</Chip>
              <Chip>Omfang: Løpende</Chip>
            </div>

            <h1 className="mt-4 text-2xl font-semibold tracking-tight" style={{ color: THEME.ink }}>
              Systematisering av midlertidighet
            </h1>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-black/75">
              Senter for Midlertidige Løsninger (SML) arbeider for å dokumentere, systematisere og
              synliggjøre løsninger som opprinnelig var ment å være midlertidige.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border p-4" style={{ borderColor: THEME.line }}>
                <div className="text-xs font-semibold" style={{ color: THEME.slate }}>
                  Status
                </div>
                <div className="mt-1 text-sm text-black/75">I drift</div>
              </div>
              <div className="rounded-xl border p-4" style={{ borderColor: THEME.line }}>
                <div className="text-xs font-semibold" style={{ color: THEME.slate }}>
                  Etablert
                </div>
                <div className="mt-1 text-sm text-black/75">Ved behov</div>
              </div>
              <div className="rounded-xl border p-4" style={{ borderColor: THEME.line }}>
                <div className="text-xs font-semibold" style={{ color: THEME.slate }}>
                  Avslutning
                </div>
                <div className="mt-1 text-sm text-black/75">Vurderes fortløpende</div>
              </div>
            </div>
          </section>

          <Card id="mandat" title="Mandat">
            <p>
              SML skal bidra til en mer strukturert forståelse av midlertidige løsninger som fenomen,
              herunder årsaker til etablering, varighet og videreføring over tid.
            </p>
            <p className="mt-3">
              Innhold utarbeides i et nøkternt format og tar utgangspunkt i generelle beskrivelser,
              ikke enkeltsaker.
            </p>
          </Card>

          <Card id="kriterier" title="Kriterier">
            <p>En løsning kan anses som midlertidig når den:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>er etablert som en forbigående ordning eller tiltak</li>
              <li>videreføres i påvente av avklaring eller permanent løsning</li>
              <li>oppnår funksjonell stabilitet uten formalisert sluttdato</li>
              <li>omtales som midlertidig over tid</li>
            </ul>
            <div
              className="mt-4 rounded-xl border p-4 text-sm"
              style={{ borderColor: THEME.line, background: THEME.muted }}
            >
              Presisering: Kriteriene er veiledende og kan anvendes samlet eller delvis.
            </div>
          </Card>

          <Card id="kategorier" title="Kategorier (foreløpig)">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Midlertidige ordninger", "Ordninger etablert for å dekke et avgrenset behov."],
                ["Midlertidige systemer", "Tekniske løsninger etablert som interimtiltak."],
                ["Midlertidige rutiner", "Praksiser etablert for å sikre drift i overgangsperioder."],
                ["Midlertidige tiltak", "Tiltak innført som respons på situasjoner og endringer."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-xl border bg-white p-5" style={{ borderColor: THEME.line }}>
                  <div className="text-xs font-semibold" style={{ color: THEME.slate }}>
                    Kategori
                  </div>
                  <div className="mt-1 text-sm font-semibold" style={{ color: THEME.ink }}>
                    {t}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-black/75">{d}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card id="faq" title="Ofte stilte spørsmål">
            <div className="space-y-3">
              <details className="rounded-xl border bg-white p-4" style={{ borderColor: THEME.line }}>
                <summary className="cursor-pointer list-none text-sm font-semibold" style={{ color: THEME.ink }}>
                  Når avsluttes en midlertidig løsning?
                </summary>
                <p className="mt-2 text-sm leading-6 text-black/75">
                  Når den erstattes av permanent løsning eller avvikles.
                </p>
              </details>

              <details className="rounded-xl border bg-white p-4" style={{ borderColor: THEME.line }}>
                <summary className="cursor-pointer list-none text-sm font-semibold" style={{ color: THEME.ink }}>
                  Når erstattes den?
                </summary>
                <p className="mt-2 text-sm leading-6 text-black/75">
                  Det vurderes fortløpende.
                </p>
              </details>

              <details className="rounded-xl border bg-white p-4" style={{ borderColor: THEME.line }}>
                <summary className="cursor-pointer list-none text-sm font-semibold" style={{ color: THEME.ink }}>
                  Har dere kontaktinformasjon?
                </summary>
                <p className="mt-2 text-sm leading-6 text-black/75">
                  Kontaktkanaler vurderes etablert ved behov.
                </p>
              </details>
            </div>
          </Card>

          <Card id="publikasjoner" title="Publikasjoner">
            <ul className="space-y-2">
              <li className="rounded-xl border bg-white p-4" style={{ borderColor: THEME.line }}>
                <div className="text-xs font-semibold" style={{ color: THEME.slate }}>
                  Notat 01/SML
                </div>
                <div className="mt-1 text-sm text-black/75">
                  Definisjoner og avgrensninger (under utarbeidelse)
                </div>
              </li>

              <li className="rounded-xl border bg-white p-4" style={{ borderColor: THEME.line }}>
                <div className="text-xs font-semibold" style={{ color: THEME.slate }}>
                  Notat 02/SML
                </div>
                <div className="mt-1 text-sm text-black/75">
                  Klassifisering av midlertidige løsninger (foreløpig status)
                </div>
              </li>

              {/* Én død lenke (valgfritt, men riktig) */}
              <li className="rounded-xl border bg-white p-4" style={{ borderColor: THEME.line }}>
                <div className="text-xs font-semibold" style={{ color: THEME.slate }}>
                  Notat 03/SML
                </div>
                <div className="mt-1 text-sm text-black/75">
                  Overgangsordninger med uklar sluttdato
                </div>
                <a
                  href="/notat-03"
                  className="mt-2 inline-block text-xs font-semibold underline underline-offset-4"
                  style={{ color: THEME.ink }}
                >
                  Åpne dokument
                </a>
              </li>
            </ul>

            <p className="mt-3 text-xs text-black/55">
              Publikasjoner tilgjengeliggjøres når de foreligger.
            </p>
          </Card>

          <footer className="border-t pt-6 text-xs text-black/55" style={{ borderColor: THEME.line }}>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Senter for Midlertidige Løsninger (SML)</p>
              <p>Utarbeidet i et nøkternt format.</p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
