import type { Metadata } from "next";
import Link from "next/link";
import { artikelen, filmAlineas } from "@/lib/media";

export const metadata: Metadata = {
  title: "Media",
};

export default function MediaPage() {
  return (
    <div className="space-y-16 py-4 md:space-y-24 md:py-8">
      <h1 className="text-3xl md:text-4xl">Media</h1>

      <section>
        <h2 className="text-3xl">Een dansend hart</h2>
        <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube-nocookie.com/embed/umVf3aZ4pPw"
            title="Een dansend hart"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="prose-niek mt-8 space-y-5">
          {filmAlineas.map((alinea) => (
            <p key={alinea}>{alinea}</p>
          ))}
          <p>
            <Link
              href="/bestellen"
              className="text-zee underline underline-offset-4"
            >
              De film is nog steeds te bestellen
            </Link>
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl">Artikelen</h2>
        <ul className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
          {artikelen.map((artikel) => (
            <li key={artikel.slug} className="flex flex-col">
              <h3 className="text-xl">{artikel.titel}</h3>
              <p className="mt-2 text-sm">{artikel.datum}</p>
              <Link
                href={`/media/${artikel.slug}`}
                className="mt-4 inline-block text-zee underline underline-offset-4"
              >
                Lees verder
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10">
          <Link
            href="/media/fotos"
            className="text-sm text-zee underline underline-offset-4"
          >
            Foto&apos;s
          </Link>
        </p>
      </section>
    </div>
  );
}
