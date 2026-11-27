import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gastenboek",
};

export default function GastenboekPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Gastenboek</h1>
      <p className="mt-2 text-gray-700">
        Het gastenboek volgt hier later.
      </p>
    </div>
  );
}
