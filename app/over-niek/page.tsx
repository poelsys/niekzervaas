import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Quote from "@/components/Quote";

export const metadata: Metadata = {
  title: "Over Niek",
};

const facts = [
  ["Naam", "Niek Zervaas"],
  ["Geboren", "22 augustus 1987"],
  [
    "Werkzaamheden",
    "Schrijven; Adviseur van Stichting SaMENS; Columnist in 'van Hart tot Hart'",
  ],
  ["Favoriete onderwerp", "Harten van mensen openen"],
  [
    "Ik hou van",
    "de natuur, reizen, muziek, dansen, filosoferen, gezelligheid, mensen helpen",
  ],
  ["Mijn missie en passie", "LIEFDE verspreiden op aarde"],
  [
    "Persoonlijk motto",
    "What you see is not what you get (Niets is wat het lijkt)",
  ],
] as const;

const photos = [
  {
    src: "/fotos/IMG_7560.JPG",
    alt: "Zwart-wit portret van Niek met een zonnebril",
    position: "object-center",
  },
  {
    src: "/fotos/IMG_7555.JPG",
    alt: "Portret van Niek met een bril en een muts",
    position: "object-center",
  },
  {
    src: "/fotos/IMG_7551.JPG",
    alt: "Niek kijkt omhoog naar de bomen",
    position: "object-left-bottom",
  },
] as const;

export default function OverNiekPage() {
  return (
    <div className="space-y-16 py-4 md:space-y-24 md:py-8">
      <header>
        <h1 className="text-3xl md:text-4xl">Over Niek</h1>
        <div className="mt-8">
          <Quote large>
            Mijn lichaam doet niet wat ik denk. Ik ben niet mijn lichaam.
          </Quote>
        </div>
      </header>

      <section className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/fotos/IMG_7549.JPG"
            alt="Portret van Niek"
            fill
            priority
            sizes="(min-width: 768px) 24rem, 100vw"
            className="object-cover"
          />
        </div>
        <div className="prose-niek space-y-5">
          <h2 className="text-3xl">Over mij</h2>
          <p>Hallo, mijn naam is Niek en ik ben 23 jaar.</p>
          <p>
            Wanneer je naar mij kijkt, zie je iemand met een zwaar gehandicapt
            lichaam, die niet kan lopen of praten en overal ondersteuning bij
            nodig heeft.
          </p>
          <p>MAAR NIETS IS WAT HET LIJKT!</p>
          <p>
            Ik aanvaard mijn leven &apos;pal in de wind&apos; en nodig anderen
            uit dit ook te doen. Ik ben geboren in een lichaam dat vele fysieke
            beperkingen kent. Mijn lichaam stelt mijn familie regelmatig voor
            uitdagingen die voor de persoonlijkheid (ego) moeilijk te
            aanvaarden zijn. Mijn lichaam is beperkt, maar mijn geest is vrij
            en stelt mij in staat mijn bewustzijn te vergroten waardoor ik
            leef in vrijheid, welk probleem zich ook aandient.
          </p>
          <p>
            Sinds mijn 18de jaar heb ik door een techniek uit Amerika,
            Faciliterende Communicatie, de mogelijkheid gekregen te
            communiceren en nu kan ik mensen laten weten wat een vrije geest
            ervaart.
          </p>
          <p>
            Ik ben niet gebonden aan tijd en ruimte: IK LEEF IN DE EEUWIGHEID.
          </p>
          <p>
            Ondanks dat je het niet altijd aan mij ziet VERSTA, ZIE, HOOR EN
            BEGRIJP IK ALLES en hou ik van dezelfde dingen als iedereen.
            Daarbij heb ik alleen wat meer hulp nodig. Ik heb dezelfde
            gevoelens als iemand van mijn leeftijd en ik praat terug met
            lichamelijke ondersteuning en mijn letterbord.
          </p>
          <p>
            Lees, als je wilt, ook mijn{" "}
            <Link
              href="/gedachten"
              className="text-zee underline underline-offset-4"
            >
              liefdevolle gedachten
            </Link>, die kunnen bijdragen aan inzichten en herkenning.
          </p>
          <p>
            Met de liefdevolle gedachten probeer ik mensen te helpen anders
            naar het leven te kijken, maar ook naar zichzelf. Door te kijken
            met de &apos;ogen van je hart&apos; (zonder oordeel), in plaats van
            te kijken met de &apos;ogen van het lichaam&apos; (ego) word je je
            bewust waar het in het leven werkelijk om gaat: Leven in LIEFDE
            zonder oordeel.
          </p>
        </div>
      </section>

      <section className="rounded-2xl bg-sand px-6 py-10 md:px-10 md:py-12">
        <h2 className="text-3xl">Wat je moet weten</h2>
        <dl className="mt-8 max-w-prose divide-y divide-ink/10">
          {facts.map(([label, value]) => (
            <div
              key={label}
              className="grid gap-1 py-4 sm:grid-cols-[14rem_1fr] sm:gap-6"
            >
              <dt className="font-medium">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className="text-3xl">Favoriete muziek</h2>
        <ol className="prose-niek mt-6 list-decimal space-y-2 pl-6">
          <li>Deva Premal, Miten &amp; Manose</li>
          <li>Muziek van mijn vader</li>
          <li>New cool collective</li>
        </ol>
      </section>

      <section>
        <div className="grid gap-6 md:grid-cols-3">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 18rem, 100vw"
                className={`object-cover ${photo.position}`}
              />
            </div>
          ))}
        </div>
        <Link
          href="/media/fotos"
          className="mt-8 inline-block rounded-md bg-niek px-5 py-2.5 text-white no-underline"
        >
          Bekijk alle foto&apos;s
        </Link>
      </section>
    </div>
  );
}
