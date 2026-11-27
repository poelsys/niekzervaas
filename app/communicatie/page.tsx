import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Quote from "@/components/Quote";

export const metadata: Metadata = {
  title: "Communicatie",
};

const technique = [
  ["Naam techniek", "Faciliterende Communicatie (FC)."],
  [
    "Waarom",
    "\"Mijn lichaam doet niet wat ik denk.\" Ik kan mijn lichaam niet gebruiken omdat ik mij niet bewust ben van een lichaam.",
  ],
  [
    "Hoe",
    "Iemand ondersteunt mijn arm, hand en vinger om mij daarvan bewust te zijn zodat ik letters aan kan wijzen.",
  ],
  [
    "Door wie",
    "Jeroen, Marty, Marianne, Belinda, Patries, Dieneke, Carin faciliteren, ondersteunen mij.",
  ],
  [
    "Voor wie is FC geschikt",
    "Voor mensen die (verbaal) niet kunnen communiceren of wel kunnen praten, maar niet bij hun gevoel kunnen komen.",
  ],
  [
    "Waarmee",
    "Een houten letterbord of het toetsenbord van de computer.",
  ],
] as const;

export default function CommunicatiePage() {
  return (
    <div className="space-y-16 py-4 md:space-y-24 md:py-8">
      <h1 className="text-3xl md:text-4xl">Communicatie</h1>

      <section className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/fotos/IMG_7554.JPG"
            alt="Een hand ondersteunt een vinger op een houten letterbord"
            fill
            priority
            sizes="(min-width: 768px) 24rem, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl">Hoe communiceer ik?</h2>
          <dl className="mt-8 divide-y divide-ink/10">
            {technique.map(([label, value]) => (
              <div key={label} className="grid gap-1 py-4">
                <dt className="font-medium">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/fotos/IMG_7550.JPG"
            alt="Niek wijst letters aan op het letterbord, met ondersteuning"
            fill
            sizes="(min-width: 768px) 24rem, 100vw"
            className="object-cover"
          />
        </div>
        <div className="prose-niek space-y-5">
          <h2 className="text-3xl">Ik praat via mijn letterbord</h2>
          <p>
            Als iemand niet kan praten of dit gewoonlijk niet doet, dan wil
            dat nog niet zeggen dat hij niets kenbaar te maken heeft. Veel
            mensen die niet kunnen praten hebben net als ieder ander soms
            behoefte aan diepgaande gesprekken.
          </p>
          <p>
            Marilyn werkt voor de Syracuse University, waar zij mensen helpt
            uitzoeken hoe iemand zijn lichaam het beste kan gebruiken voor
            communicatie.
          </p>
          <p>
            Er zijn vele manieren van communiceren. Bijvoorbeeld door te
            praten, door hulpmiddelen, zoals apparaten en door lichamelijke
            ondersteuning (Faciliterende Communicatie).
          </p>
          <Quote>
            Niek: Ik ben mij niet bewust van mijn lichaam en daarom heb ik
            ondersteuning nodig om te kunnen communiceren. VOORDAT IK KON
            COMMUNICEREN HEB IK ALTIJD GEDACHT DAT IK ONZICHTBAAR WAS.
          </Quote>
          <p>
            Marilyn heeft een techniek ontwikkeld om diepgaande gesprekken te
            voeren met mensen die moeilijk communiceren. Zij gaat ervan uit dat
            mensen zoals ik zichzelf leren lezen en schrijven. Ik heb dat ook
            zelf geleerd doordat mijn omgeving mij altijd heeft aangesproken
            als iemand van mijn leeftijd en ervan uit is gegaan dat ik alles
            begreep.
          </p>
          <p>
            Marilyn vertelt ook dat er vele manieren zijn waarop iemand kan
            lezen en kijken.
          </p>
          <Quote>
            Niek: In een oogopslag neem ik waar en scan ik de situatie, ook
            bijvoorbeeld met een boek of krant. Ik kijk niet zoals andere
            mensen. Bij mij is het meer een opname, die zich in mijn hoofd
            afspeelt.
          </Quote>
          <p>
            Maar er is nog meer..... Je kunt ook communiceren met elkaars
            gedachten. Ze noemen dit ook wel telepathie.
          </p>
        </div>
      </section>

      <section className="rounded-2xl bg-sand px-6 py-10 md:px-10 md:py-12">
        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
          <div className="prose-niek space-y-5">
            <h2 className="text-3xl">
              Ervaringen met Faciliterende Communicatie (FC): Ook FC
              uitproberen?
            </h2>
            <p>
              Marty, Belinda en Patty houden individuele sessies met mensen om
              Faciliterende Communicatie bij hen uit te proberen. Enkele
              ervaringen hiermee worden hieronder beschreven.
            </p>
            <p>
              Wilt u ook weten of Faciliterende Communicatie iets voor uw
              dierbare zou kunnen zijn, neem dan contact op met{" "}
              <a
                href="mailto:info@samens.nl"
                className="text-zee underline underline-offset-4"
              >
                info@samens.nl
              </a>
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/fotos/IMG_7545.JPG"
              alt="Niek aan het letterbord, een meisje ondersteunt zijn hand"
              fill
              sizes="(min-width: 768px) 24rem, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="grid items-center gap-8 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/fotos/IMG_7548.JPG"
            alt="Houten letterbord"
            fill
            sizes="(min-width: 768px) 16rem, 100vw"
            className="object-cover"
          />
        </div>
        <h2 className="text-2xl">
          <Link
            href="/bestellen"
            className="text-zee underline underline-offset-4"
          >
            Ook een houten letterbord bestellen?
          </Link>
        </h2>
      </section>
    </div>
  );
}
