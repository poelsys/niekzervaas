import type { Metadata } from "next";
import Image from "next/image";
import Quote from "@/components/Quote";

export const metadata: Metadata = {
  title: "Lezing",
};

export default function LezingPage() {
  return (
    <div className="space-y-16 py-4 md:space-y-24 md:py-8">
      <header>
        <h1 className="text-3xl md:text-4xl">
          Ook interesse in een lezing over Niek Zervaas?
        </h1>
        <div className="mt-8">
          <Quote large>
            Ik ben mijn leven begonnen met een lichaam dat met zijn
            beperkingen niet gezien wordt als volwaardig. Dat is mijn keuze
            geweest waardoor ik in liefde kan zijn en niet word afgeleid door
            aardse beslommeringen. (Niek)
          </Quote>
        </div>
      </header>

      <section className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/fotos/IMG_7547.JPG"
            alt="Niek in zijn rolstoel tijdens een bijeenkomst in een kring"
            fill
            priority
            sizes="(min-width: 768px) 24rem, 100vw"
            className="object-cover"
          />
        </div>
        <div className="prose-niek space-y-5">
          <p>Ik ben Patty Zervaas, moeder van Niek Zervaas.</p>
          <p>
            Na 18 jaar, ogenschijnlijk opgesloten te hebben gezeten in zijn
            lichaam krijgt Niek een stem. Hij communiceert, via een letterbord
            en fysieke ondersteuning, de mooiste dingen. Dingen die aan ons
            verstand voorbij gaan en ons direct raken in het hart. Hiermee
            heeft hij talloze mensen inzicht gegeven en geheeld. Hij wil deze
            wijsheid graag met zoveel mogelijk mensen delen. Niek wil je laten
            voelen en bewust maken waar het in het leven om gaat: Leven zonder
            oordelen door te &apos;kijken&apos; met de &apos;ogen van je
            hart&apos;.
          </p>
          <p>
            Helaas heeft Niek op 13 augustus 2011 zijn lichaam verlaten. Hij
            is bijna 24 jaar geworden en heeft ons zoveel nagelaten. Daarom
            hebben we een prachtige lezing gemaakt over zijn leven en zijn
            gedachtegoed en daarin veel van zijn teksten verwerkt.
          </p>
          <p>
            Dit mooie ontroerende verhaal willen wij graag delen met een ieder
            die het wil horen. U kunt ons hiervoor uitnodigen, ook met een
            klein gezelschap.
          </p>
          <p>
            Reiskosten en uitwisseling in overleg. Daarmee steunt u tevens het
            voortzetten van Niek zijn werk.
          </p>
          <a
            href="mailto:info@samens.nl?subject=Lezing%20over%20Niek%20Zervaas"
            className="mt-4 inline-block rounded-md bg-niek px-5 py-2.5 text-white no-underline"
          >
            Mail ons over een lezing
          </a>
        </div>
      </section>
    </div>
  );
}
