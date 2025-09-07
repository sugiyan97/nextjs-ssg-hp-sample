import { Section } from "@/components/Section";

export const metadata = {
  title: "About | PROXIT Sample HP",
};

/** 会社概要ページ（静的テキストでOK） */
export default function AboutPage() {
  return (
    <Section
      title="About"
      subtitle="小回りの効くチームで、堅実で拡張しやすいバックエンド/AIシステムを提供します。"
    >
      <div className="card p-6 leading-8 text-[color:var(--muted)]">
        <p>
          私たちは、現場の運用とコストを意識しながら、可観測性と自動化を前提にした設計を重視します。
          小さく始めて段階的に磨くことで、リスクを抑えつつ価値の創出を最大化します。
        </p>
        <p className="mt-4">
          取り組み分野：Backend/API、RAG導入、モダナイズ、PoC検証、ETL基盤 など
        </p>
      </div>
    </Section>
  );
}
