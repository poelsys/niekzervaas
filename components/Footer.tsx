import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-ink/10 bg-sand">
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm leading-relaxed text-ink">
        <p className="font-medium">Stichting SaMENS</p>
        <p className="mt-1">Oostvoorne</p>
        <p className="mt-1">
          <a href="mailto:info@samens.nl" className="text-zee hover:underline">
            info@samens.nl
          </a>
        </p>
        <p className="mt-1">
          <Link
            href="https://heelcentrumsamens.nl"
            className="text-zee hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            heelcentrumsamens.nl
          </Link>
        </p>
        <p className="mt-6 font-serif text-lg font-normal italic leading-snug text-niek">
          Kijk met de ogen van je hart
        </p>
      </div>
    </footer>
  );
}
