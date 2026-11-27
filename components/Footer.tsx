import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-sand/80 bg-sand">
      <div className="mx-auto max-w-5xl px-4 py-8 font-sans text-sm text-ink/80">
        <p className="font-medium text-ink">Stichting SaMENS</p>
        <p className="mt-1">Oostvoorne</p>
        <p className="mt-1">
          <a href="mailto:info@samens.nl" className="hover:text-niek">
            info@samens.nl
          </a>
        </p>
        <p className="mt-1">
          <Link
            href="https://heelcentrumsamens.nl"
            className="hover:text-niek"
            target="_blank"
            rel="noopener noreferrer"
          >
            heelcentrumsamens.nl
          </Link>
        </p>
        <p className="mt-4 font-serif italic text-niek">
          Kijk met de ogen van je hart
        </p>
      </div>
    </footer>
  );
}
