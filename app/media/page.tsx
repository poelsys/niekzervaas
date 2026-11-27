import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { artikelen, filmAlineas } from "@/lib/media";

const filmUrl = "https://www.youtube.com/watch?v=umVf3aZ4pPw";

export const metadata: Metadata = {
  title: "Media",
};

export default function MediaPage() {
  return (
    <div className="space-y-16 py-4 md:space-y-24 md:py-8">
      <h1 className="text-3xl md:text-4xl">Media</h1>

      <section>
        <h2 className="text-3xl">Een dansend hart</h2>
        <a
          href={filmUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-8 block aspect-video overflow-hidden rounded-2xl"
        >
          <Image
            src="/fotos/IMG_7563.JPG"
            alt="Filmposter Een dansend hart, klik om de film op YouTube te bekijken"
            fill
            priority
            sizes="(min-width: 768px) 64rem, 100vw"
            className="object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-niek/50">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-7 w-7 translate-x-0.5"
              >
                <polygon points="8,5 19,12 8,19" className="fill-white" />
              </svg>
            </span>
          </span>
        </a>
        <p className="mt-3">
          <a
            href={filmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zee underline underline-offset-4"
          >
            Bekijk de film op YouTube
          </a>
        </p>
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
