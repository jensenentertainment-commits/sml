// app/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OFOKO – Opplysningskontoret for Opplysningskontor",
  description:
    "Offisiell informasjon om opplysningskontor og opplysningskontorenes opplysningsarbeid.",
  openGraph: {
    title: "OFOKO – Opplysningskontoret for Opplysningskontor",
    description:
      "Offisiell informasjon om opplysningskontor og opplysningskontorenes opplysningsarbeid.",
    locale: "nb_NO",
    type: "website",
  },
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#1F3A5F]/20 bg-white px-2.5 py-1 text-xs font-semibold text-[#1F3A5F]">
      {children}
    </span>
  );
}


function SectionTitle({
  id,
  title,
  subtitle,
}: {
  id: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-1">
      <h2 id={id} className="text-base font-semibold tracking-tight text-[#1F3A5F]">

      </h2>
      {subtitle ? (
        <p className="text-sm text-black/60">{subtitle}</p>
      ) : null}
    </div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-black/10 bg-white p-6 shadow-sm",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function LinkPill({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm font-semibold text-black/70 hover:bg-zinc-50"
    >
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-50 text-black">
      {/* Topbar */}
      <header className="sticky top-0 z-10 border-b border-black/10 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl border border-black/10 bg-zinc-50">
              <span className="text-xs font-bold tracking-tight text-black/70">
                OF
              </span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">
                Opplysningskontoret for Opplysningskontor
              </div>
              <div className="text-xs text-black/55">OFOKO</div>
            </div>
          </div>

          <nav className="hidden items-center gap-2 sm:flex">
            <LinkPill href="#om">Om</LinkPill>
            <LinkPill href="#ansvar">Ansvar</LinkPill>
            <LinkPill href="#organisering">Organisering</LinkPill>
            <LinkPill href="#faq">Spørsmål</LinkPill>
          </nav>

          <div className="flex items-center gap-2">
            <Badge>Informasjon</Badge>
            <Badge>Oppdatert ved behov</Badge>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-8 pt-10">
        <div className="rounded-3xl border border-[#1F3A5F]/10 bg-[#E8EEF5] p-8 shadow-sm">

          <div className="flex flex-wrap items-center gap-2">
            <Badge>OFOKO</Badge>
            <Badge>OFOKOLF</Badge>
            <Badge>Avdeling Øst (koord.)</Badge>
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight">
            Strukturert informasjon om opplysningskontor i Norge
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-black/75">
            OFOKO arbeider for å styrke kunnskapsgrunnlaget knyttet til
            opplysningskontorenes rolle, mandat og opplysningsarbeid.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-zinc-50 p-5">
              <div className="text-xs font-semibold text-black/60">
                Virkeområde
              </div>
              <div className="mt-1 text-sm text-black/75">
                Opplysningskontor (generelt)
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-zinc-50 p-5">
              <div className="text-xs font-semibold text-black/60">Status</div>
              <div className="mt-1 text-sm text-black/75">
                Prioriteres etter kapasitet
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-zinc-50 p-5">
              <div className="text-xs font-semibold text-black/60">
                Publikasjoner
              </div>
              <div className="mt-1 text-sm text-black/75">
                Tilgjengeliggjøres når de foreligger
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main */}
          <div className="space-y-6 lg:col-span-2">
            <Card>
              <SectionTitle
                id="om"
                title="Om OFOKO"
                subtitle="Formål, avgrensning og prinsipper"
              />
              <div className="mt-4 space-y-3 text-sm leading-7 text-black/75">
                <p>
                  Opplysningskontoret for Opplysningskontor (OFOKO) arbeider for
                  å bidra til et mer opplyst samfunn gjennom strukturert
                  informasjon om aktører som har til oppgave å opplyse.
                </p>
                <p>
                  Arbeidet gjennomføres innenfor et nøkternt rammeverk, med vekt
                  på begrepsavklaring, oversikt og tilgjengeliggjøring av
                  relevant informasjon.
                </p>
              </div>
            </Card>

            <Card>
              <SectionTitle
                id="ansvar"
                title="Ansvarsområder"
                subtitle="Kjerneområder for OFOKOs opplysningsarbeid"
              />
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/10 bg-white p-5">
                  <h3 className="text-sm font-semibold tracking-tight">
                    Kartlegging
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-black/75">
                    Kartlegging av opplysningskontorenes kartlegginger, herunder
                    formål, omfang og offentlig tilgjengelighet.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-5">
                  <h3 className="text-sm font-semibold tracking-tight">
                    Begrepsavklaring
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-black/75">
                    Avklaringer rundt begreper, roller og strukturer knyttet til
                    opplysningsarbeid.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-5">
                  <h3 className="text-sm font-semibold tracking-tight">
                    Kunnskapsgrunnlag
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-black/75">
                    Samling, strukturering og formidling av relevant
                    informasjon på et samlet sted.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-5">
                  <h3 className="text-sm font-semibold tracking-tight">
                    Opplysning
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-black/75">
                    Opplysning om opplysningsarbeid, inkludert kampanjer,
                    informasjonsmateriell og tilgrensende tiltak.
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-black/10 bg-zinc-50 p-4 text-sm text-black/70">
                Arbeidet prioriteres i tråd med kapasitet og løpende vurderinger.
              </div>
            </Card>

            <Card>
              <SectionTitle
                id="organisering"
                title="Organisering"
                subtitle="Landsdekkende samarbeid og regionale avdelinger"
              />
              <div className="mt-4 space-y-3 text-sm leading-7 text-black/75">
                <p>
                  OFOKO inngår i et landsdekkende samarbeid gjennom{" "}
                  <strong>
                    Opplysningskontoret for Opplysningskontors Landsforbund
                    (OFOKOLF)
                  </strong>
                  .
                </p>
                <p>
                  Landsforbundet er organisert med regionale avdelinger for å
                  ivareta geografisk forankring og koordinering.
                </p>

                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {[
                    "Avdeling Øst",
                    "Avdeling Sør",
                    "Avdeling Vest",
                    "Avdeling Midt",
                    "Avdeling Nord",
                  ].map((x) => (
                    <li
                      key={x}
                      className="rounded-2xl border border-black/10 bg-white p-3 text-sm text-black/75"
                    >
                      {x}
                    </li>
                  ))}
                </ul>

                <p className="text-black/60">
                  Enkelte avdelinger er under etablering.
                </p>
                <p className="text-black/60">
                  Avdeling Øst fungerer per i dag som koordinerende avdeling.
                </p>
              </div>
            </Card>
          </div>

          {/* Side panel */}
          <aside className="space-y-6">
            <Card className="p-6">
              <SectionTitle
                id="faq"
                title="Ofte stilte spørsmål"
                subtitle="Kortfattede avklaringer"
              />
              <div className="mt-4 space-y-3">
                <details className="rounded-2xl border border-black/10 bg-white p-4">
                  <summary className="cursor-pointer list-none text-sm font-semibold">
                    Finnes OFOKO?
                  </summary>
                  <p className="mt-2 text-sm leading-6 text-black/75">
                    OFOKO eksisterer som informasjonsaktør. Nærmere avklaringer
                    rundt organisatorisk plassering vurderes fortløpende.
                  </p>
                </details>

                <details className="rounded-2xl border border-black/10 bg-white p-4">
                  <summary className="cursor-pointer list-none text-sm font-semibold">
                    Hvem finansierer virksomheten?
                  </summary>
                  <p className="mt-2 text-sm leading-6 text-black/75">
                    Finansiering omtales samlet når grunnlaget foreligger.
                  </p>
                </details>

                <details className="rounded-2xl border border-black/10 bg-white p-4">
                  <summary className="cursor-pointer list-none text-sm font-semibold">
                    Har dere kontaktinformasjon?
                  </summary>
                  <p className="mt-2 text-sm leading-6 text-black/75">
                    Kontaktkanaler vurderes etablert når behovet er
                    tilstrekkelig dokumentert.
                  </p>
                </details>
              </div>
            </Card>

            <Card>
              <SectionTitle
                id="dokumenter"
                title="Dokumenter og publikasjoner"
                subtitle="Tilgjengeliggjøres når de foreligger"
              />
              <ul className="mt-4 space-y-2">
                <li className="rounded-2xl border border-black/10 bg-white p-4">
                  <div className="text-xs font-semibold text-black/60">
                    Notat 01/OFOKO
                  </div>
                  <div className="mt-1 text-sm text-black/75">
                    Begrepsavklaringer og avgrensninger (under utarbeidelse)
                  </div>
                </li>

                <li className="rounded-2xl border border-black/10 bg-white p-4">
                  <div className="text-xs font-semibold text-black/60">
                    Notat 02/OFOKO
                  </div>
                  <div className="mt-1 text-sm text-black/75">
                    Oversikt over opplysningskontor (foreløpig status)
                  </div>
                </li>
                <li className="rounded-2xl border border-black/10 bg-white p-4">
  <div className="text-xs font-semibold text-black/60">
    Notat 03/OFOKO
  </div>
  <div className="mt-1 text-sm text-black/75">
    Opplysningskontorenes rolle i opplysningsarbeidet
  </div>
  <a
    href="/notat-03"
    className="mt-2 inline-block text-xs font-semibold text-[#1F3A5F] underline underline-offset-4"
  >
    Åpne dokument
  </a>
</li>

              </ul>
              <p className="mt-3 text-xs text-black/55">
                Dokumenter publiseres ved behov og etter kapasitet.
              </p>
            </Card>

            <div className="rounded-2xl border border-[#5E7F6A]/30 bg-[#F3F7F5] p-5 text-xs text-black/65">

              <div className="font-semibold text-black/60">Merknad</div>
              <p className="mt-2 leading-6">
                Innhold oppdateres ved behov. Endringer i struktur og
                avgrensninger vurderes fortløpende.
              </p>
            </div>
          </aside>
        </div>

        <footer className="mt-10 border-t border-black/10 pt-6 text-xs text-black/55">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Opplysningskontoret for
              Opplysningskontors Opplysningskontor (OFOKO)
            </p>
            <p>Utarbeidet i et nøkternt og opplysende format.</p>
          </div>
        </footer>
      </section>
    </main>
  );
}
