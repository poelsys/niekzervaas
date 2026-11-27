import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { artikelen, getArtikel, type Artikel } from "@/lib/media";

type ArtikelPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return artikelen.map((artikel) => ({ slug: artikel.slug }));
}

export function generateMetadata({ params }: ArtikelPageProps): Metadata {
  const artikel = getArtikel(params.slug);

  if (!artikel) {
    return { title: "Media" };
  }

  return { title: artikel.titel };
}

function isTussenkop(alinea: string) {
  return alinea.startsWith("## ");
}

function Ondertekening({ regels }: { regels: string[] }) {
  if (regels.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 max-w-prose space-y-1 font-serif text-lg font-normal italic leading-snug text-niek">
      {regels.map((regel) => (
        <p key={regel}>{regel}</p>
      ))}
    </div>
  );
}

function Alineas({ alineas }: { alineas: string[] }) {
  return (
    <div className="prose-niek space-y-5">
      {alineas.map((alinea) =>
        isTussenkop(alinea) ? (
          <h3 key={alinea} className="text-2xl">
            {alinea.slice(3)}
          </h3>
        ) : (
          <p key={alinea}>{alinea}</p>
        ),
      )}
    </div>
  );
}

function artikelDelen(artikel: Artikel) {
  const regels = artikel.ondertekening ?? [];
  const scheiding = regels.indexOf("");
  const begin = scheiding === -1 ? [] : regels.slice(0, scheiding);
  const eind = scheiding === -1 ? regels : regels.slice(scheiding + 1);
  const intro = begin.length > 0 ? artikel.alineas.slice(0, 2) : artikel.alineas;
  const vervolg = begin.length > 0 ? artikel.alineas.slice(2) : [];

  return { begin, eind, intro, vervolg };
}

export default function ArtikelPage({ params }: ArtikelPageProps) {
  const artikel = getArtikel(params.slug);

  if (!artikel) {
    notFound();
  }

  const { begin, eind, intro, vervolg } = artikelDelen(artikel);

  return (
    <article className="py-4 md:py-8">
      <p className="text-sm">{artikel.datum}</p>
      <h1 className="mt-2 text-3xl md:text-4xl">{artikel.titel}</h1>
      {artikel.ondertitel ? (
        <p className="mt-3 max-w-prose">{artikel.ondertitel}</p>
      ) : null}
      {artikel.foto ? (
        <div className="relative mt-8 aspect-[4/3] max-w-3xl overflow-hidden rounded-2xl">
          <Image
            src={artikel.foto.src}
            alt={artikel.foto.alt}
            fill
            priority
            sizes="(min-width: 768px) 48rem, 100vw"
            className="object-cover"
          />
        </div>
      ) : null}
      <div className="mt-8">
        <Alineas alineas={intro} />
        <Ondertekening regels={begin} />
        {vervolg.length > 0 ? (
          <div className="mt-8">
            <Alineas alineas={vervolg} />
          </div>
        ) : null}
        <Ondertekening regels={eind} />
      </div>
      <p className="mt-12">
        <Link href="/media" className="text-zee underline underline-offset-4">
          Terug naar Media
        </Link>
      </p>
    </article>
  );
}
