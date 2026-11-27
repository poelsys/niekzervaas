import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HomeCard from "@/components/HomeCard";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <div className="space-y-20 py-4 md:space-y-28 md:py-8">
      <section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <Image
          src="/fotos/IMG_7552.JPG"
          alt="Close-up van een blauw oog"
          width={1280}
          height={851}
          priority
          sizes="(min-width: 768px) 32rem, 100vw"
          className="h-auto w-full rounded-2xl"
        />
        <div>
          <h1 className="text-3xl md:text-4xl">
            Welkom in de wereld gezien door mijn ogen
          </h1>
          <p className="mt-6 font-serif text-xl font-normal italic leading-snug text-niek md:text-2xl">
            What you see is not what you get. Niets is wat het lijkt.
          </p>
        </div>
      </section>

      <section className="grid gap-12 md:grid-cols-3 md:gap-8">
        <HomeCard
          href="/bestellen"
          src="/fotos/IMG_7566.JPG"
          alt="Omslag van het boek Uit de bron"
          title="UIT DE BRON"
          text="Liefdevolle helende teksten van Niek."
          linkLabel="Ik wil het boek UIT DE BRON bestellen"
        />
        <HomeCard
          href="/media"
          src="/fotos/IMG_7563.JPG"
          alt="Filmposter van Een dansend hart"
          title="Een dansend hart"
          text="De film is nog steeds beschikbaar: EEN DANSEND HART, gemaakt van mijn leven en mijn boodschap door mijn goede vriend en filmmaker Rishi Chamman."
          linkLabel="Een dansend hart"
        />
        <HomeCard
          href="/lezing"
          src="/fotos/IMG_7547.JPG"
          alt="Niek in zijn rolstoel tijdens een bijeenkomst in een kring"
          title="LEZING"
          text="Dit mooie ontroerende verhaal willen wij graag delen met een ieder die het wil horen."
          linkLabel="Interesse in een LEZING over mij en mijn gedachtegoed?"
        />
      </section>

      <section>
        <div className="prose-niek">
          <h2 className="text-3xl">Tijd voor jouw cadeau aan de wereld</h2>
          <div className="mt-6 space-y-5">
            <p>
              22 augustus is Niek&apos;s geboortedag, hij zou 30 jaar geworden
              zijn. Tijd voor een mooi cadeau aan de wereld.
            </p>
            <p>
              Er waren nog zoveel waardevolle teksten van Niek op mijn
              computer. Wanneer ze daar blijven staan had niemand er wat aan.
              Daarom was het idee geboren een boek uit te brengen met al deze
              liefdevolle gedachten en gesprekken.
            </p>
            <p>
              Niek&apos;s geboortedag was een mooi moment om deze teksten te
              bundelen en te delen, de dag dat hij in onze wereld verscheen.
              Hij heeft lang zonder woorden gecommuniceerd, maar na zijn 18de
              jaar kon hij zijn energie voor ons zichtbaar maken met
              prachtige, helende woorden. Woorden die ons direct raken in het
              hart.
            </p>
            <p>
              De teksten van Niek zijn geometrisch, geen woord teveel, geen
              woord te weinig. Ze raken de kern en worden, al naar gelang meer
              gelezen, steeds dieper in ons aangeraakt.
            </p>
            <p>
              Verspreid Niek&apos;s teksten en leef ze, dat is wat Niek wil en
              jouw cadeau aan de wereld.
            </p>
            <p>
              Wil je ook het mooie boek &apos;UIT DE BRON&apos; met liefdevolle
              helende teksten van Niek bestellen?
            </p>
          </div>
          <Link
            href="/bestellen"
            className="mt-8 inline-block rounded-md bg-niek px-5 py-2.5 text-white no-underline"
          >
            Ik wil het boek
          </Link>
        </div>
      </section>

      <section className="rounded-2xl bg-sand px-6 py-10 md:px-10 md:py-12">
        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
          <div className="prose-niek">
            <h2 className="text-3xl">Niek:</h2>
            <div className="mt-6 space-y-5">
              <p>
                De stilte verbindt op een diepgaande manier, die voelbaar is
                in het hart en resoneert in de dagelijkse realiteit. Mijn
                fysieke aanwezigheid is een wens van de persoonlijkheid. Het
                is ook mijn verlangen fysiek aanwezig te zijn, maar de
                intrinsieke waarheid van de kracht van het innerlijk licht
                wordt niet aangetast door mijn afwezigheid. Het stralende
                licht wordt door een geopend hart altijd verspreid. Mijn
                aanwezigheid op hoger niveau is altijd voelbaar voor diegene,
                die hun hart daarvoor openen.
              </p>
              <p>
                Het fysieke lichaam en de verschijning daarvan wordt steeds
                minder belangrijk. Juist de afwezigheid van het fysieke lichaam
                biedt de opening naar het betreden van energetisch hoger
                gelegen paden. Hoewel ik zelf heel graag in de stof aanwezig
                ben, want mijn persoonlijkheid heeft ook een stem, levert dat
                niet de bijdrage op hoger energetisch niveau. Beide
                mogelijkheden brengen ieder een eigen kwaliteit met zich mee.
              </p>
              <p>Niek heeft op 13 augustus 2011 zijn lichaam verlaten.</p>
            </div>
          </div>
          <Image
            src="/fotos/IMG_7558.JPG"
            alt="Beschilderde kist met een vlinder"
            width={480}
            height={480}
            sizes="(min-width: 768px) 24rem, 100vw"
            className="h-auto w-full rounded-2xl"
          />
        </div>
      </section>

      <section>
        <p className="prose-niek">
          Wij zijn gewend om alles wat we zien en horen te interpreteren, maar
          we weten niet wat we waarnemen. Lees als je wilt ook mijn{" "}
          <Link
            href="/gedachten"
            className="text-zee underline underline-offset-4"
          >
            LIEFDEVOLLE GEDACHTEN
          </Link>. Die kunnen bijdragen aan inzicht en herkenning.
        </p>
      </section>
    </div>
  );
}
