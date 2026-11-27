import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Contact</h1>
      <p className="mt-2 text-gray-700">
        Contactgegevens volgen hier later.
      </p>
    </div>
  );
}
