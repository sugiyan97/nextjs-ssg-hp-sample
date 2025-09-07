import { Section } from "@/components/Section";

const services = [
  {
    title: "Backend / API 開発",
    points: ["Go / Python / Node", "REST/GraphQL", "スケーラブル設計"],
  },
  {
    title: "生成AI（RAG特化）導入支援",
    points: ["Kendra/Bedrock/LangChain", "評価(RAGAS)", "運用ガイドライン"],
  },
  {
    title: "モダナイズ・リプレイス",
    points: ["IaC(Terraform/CDK)", "Observability", "セキュリティ強化"],
  },
  {
    title: "小規模PoC・技術検証",
    points: ["要件ヒアリング", "PoC実装", "効果検証・次アクション"],
  },
];

export const metadata = {
  title: "Services | PROXIT Sample HP",
};

export default function ServicesPage() {
  return (
    <>
      <Section
        title="Services"
        subtitle="要件に合わせて最短で価値を検証し、必要十分な形で段階的に育てます。"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="card p-6">
              <div className="text-lg font-semibold">{s.title}</div>
              <ul className="mt-3 list-disc pl-5 text-[color:var(--muted)]">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
