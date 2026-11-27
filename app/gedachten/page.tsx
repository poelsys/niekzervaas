import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gedachten",
};

export default function GedachtenPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Gedachten</h1>
      <p className="mt-2 text-gray-700">
        Gedachten en teksten volgen hier later.
      </p>
    </div>
  );
}
