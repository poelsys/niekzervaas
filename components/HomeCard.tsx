import Image from "next/image";
import Link from "next/link";

type HomeCardProps = {
  href: string;
  src: string;
  alt: string;
  title: string;
  text: string;
  linkLabel: string;
};

export default function HomeCard({
  href,
  src,
  alt,
  title,
  text,
  linkLabel,
}: HomeCardProps) {
  return (
    <article className="flex flex-col">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-sand">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 18rem, 100vw"
          className="object-contain"
        />
      </div>
      <h2 className="mt-5 text-xl">
        {linkLabel === title ? (
          <Link
            href={href}
            className="text-niek underline decoration-niek/30 underline-offset-4"
          >
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
      <p className="mt-3">{text}</p>
      {linkLabel === title ? null : (
        <Link
          href={href}
          className="mt-4 inline-block text-zee underline underline-offset-4"
        >
          {linkLabel}
        </Link>
      )}
    </article>
  );
}
