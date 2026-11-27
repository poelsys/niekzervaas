import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lezing",
};

export default function LezingPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Lezing</h1>
      <p className="mt-2 text-gray-700">
        Informatie over lezingen volgt hier later.
      </p>
    </div>
  );
}
