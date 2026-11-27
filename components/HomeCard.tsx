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
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 18rem, 100vw"
          className="object-cover"
        />
      </div>
      <h2 className="mt-5 text-xl no-underline">{title}</h2>
      <p className="mt-3 flex-1">{text}</p>
      <Link
        href={href}
        className="mt-4 inline-block text-zee underline underline-offset-4"
      >
        {linkLabel}
      </Link>
    </article>
  );
}
