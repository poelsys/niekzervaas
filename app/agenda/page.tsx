import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenda",
};

export default function AgendaPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Agenda</h1>
      <p className="mt-2 text-gray-700">
        Agenda-items volgen hier later.
      </p>
    </div>
  );
}
