import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-gray-700">
        <p className="font-medium text-gray-900">Stichting SaMENS</p>
        <p className="mt-1">Oostvoorne</p>
        <p className="mt-1">
          <a href="mailto:info@samens.nl" className="hover:text-gray-900">
            info@samens.nl
          </a>
        </p>
        <p className="mt-1">
          <Link
            href="https://heelcentrumsamens.nl"
            className="hover:text-gray-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            heelcentrumsamens.nl
          </Link>
        </p>
        <p className="mt-4 italic text-gray-600">
          Kijk met de ogen van je hart
        </p>
      </div>
    </footer>
  );
}
