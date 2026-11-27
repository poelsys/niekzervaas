import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Home</h1>
      <p className="mt-2 text-gray-700">
        Welkom. Deze pagina wordt later gevuld.
      </p>
    </div>
  );
}
