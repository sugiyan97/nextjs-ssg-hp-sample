import Link from "next/link";

/** ファーストビューの訴求コンポーネント */
export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500/20 to-indigo-500/10 p-8 md:p-14 ring-1 ring-white/10">
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Build reliable backends & modern AI features.
        </h1>
        <p className="mt-4 text-[color:var(--muted)]">
          Backend / API、RAG導入、レガシー刷新、PoC支援まで。
          Next.js × Cloud基盤で素早く安全にお届けします。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-brand-500 px-5 py-3 text-white shadow-soft hover:bg-brand-600 transition"
          >
            お問い合わせ
          </Link>
          <Link
            href="/services"
            className="rounded-xl border border-white/20 px-5 py-3 text-white hover:bg-white/10 transition"
          >
            サービスを見る
          </Link>
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl"
      />
    </section>
  );
}
