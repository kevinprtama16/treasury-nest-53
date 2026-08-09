import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Treasury Account Management — Dashboard Akun & Limit" },
      {
        name: "description",
        content:
          "Kelola akun treasury, limit pemakaian bulanan, perangkat terhubung, dan pantau harga emas serta kurs USD/IDR dalam satu dashboard.",
      },
      { property: "og:title", content: "Treasury Account Management" },
      {
        property: "og:description",
        content:
          "Dashboard FinTech untuk manajemen akun treasury: limit 20x/bulan, activity log, dan grafik pasar keuangan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/treasury.html"
      title="Treasury Account Management"
      className="h-screen w-screen border-0"
    />
  );
}
