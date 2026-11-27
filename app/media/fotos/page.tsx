import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { fotos } from "@/lib/fotos";

export const metadata: Metadata = {
  title: "Foto's",
};

export default function FotosPage() {
  return (
    <div className="space-y-16 py-4 md:space-y-24 md:py-8">
      <header>
        <h1 className="text-3xl md:text-4xl">Mijn foto&apos;s</h1>
        <p className="prose-niek mt-6">
          Hier zie je foto&apos;s uit mijn leven met geliefde mensen om mij
          heen.
        </p>
      </header>

      <ul className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8">
        {fotos.map((foto) => (
          <li key={foto.bestand}>
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={`/fotos/${foto.bestand}`}
                alt={foto.alt}
                fill
                sizes="(min-width: 768px) 20rem, 50vw"
                className={
                  foto.bestand === "IMG_7551.JPG"
                    ? "object-cover object-left-bottom"
                    : "object-cover"
                }
              />
            </div>
          </li>
        ))}
      </ul>

      <p>
        <Link href="/media" className="text-zee underline underline-offset-4">
          Terug naar Media
        </Link>
      </p>
    </div>
  );
}
