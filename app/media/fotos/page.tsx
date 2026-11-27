import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foto's",
};

export default function FotosPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Foto&apos;s</h1>
      <p className="mt-2 text-gray-700">
        Foto&apos;s volgen hier later.
      </p>
    </div>
  );
}
