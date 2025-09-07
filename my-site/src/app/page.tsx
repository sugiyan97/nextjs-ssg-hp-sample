import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import Link from "next/link";

/**
 * トップページ:
 * - まずは静的要素のみで構成（SSGに相性◎）
 * - 追加導線は Section コンポーネントで増やす
 */
export default function Page() {
  return (
    <>
      <Hero />

      <Section
        className="mt-12"
        eyebrow="What we do"
        title="小さく始めて、大きく伸ばす。"
        subtitle="バックエンド/API、生成AI（RAG）、レガシー刷新、PoC支援を中心に、クラウドネイティブで拡張性の高い構成を提供します。"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Backend / API", desc: "FastAPI / Go / Node で拡張しやすいAPI。" },
            { title: "RAG 導入支援", desc: "Kendra/Bedrock/LangChain で安全に知識活用。" },
            { title: "モダナイズ支援", desc: "レガシー刷新・可観測性・CI/CDの整備。" },
          ].map((s) => (
            <div key={s.title} className="card p-6">
              <div className="text-lg font-semibold">{s.title}</div>
              <p className="mt-2 text-[color:var(--muted)]">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/services"
            className="inline-block rounded-xl border border-white/20 px-5 py-3 hover:bg-white/10 transition"
          >
            詳細を見る
          </Link>
        </div>
      </Section>
    </>
  );
}
