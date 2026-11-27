import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over Niek",
};

export default function OverNiekPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Over Niek</h1>
      <p className="mt-2 text-gray-700">
        Informatie over Niek volgt hier later.
      </p>
    </div>
  );
}
