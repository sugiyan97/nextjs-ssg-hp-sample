import { Section } from "@/components/Section";

export const metadata = {
  title: "Contact | PROXIT Sample HP",
};

export default function ContactPage() {
  return (
    <Section
      title="Contact"
      subtitle="お問い合わせ内容を簡潔にご記入ください。通常 1-2 営業日でご返信します。"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <form
          className="card p-6 space-y-4"
          // 例: Formspark / Google Forms に置き換え
          // action="https://submit-form.com/your-formspark-id"
          action="mailto:hello@example.com"
          method="post"
        >
          <div>
            <label className="block text-sm mb-1">お名前</label>
            <input
              name="name"
              required
              className="w-full rounded-xl bg-transparent ring-1 ring-white/10 px-3 py-2 focus:outline-none focus:ring-brand-500"
              placeholder="山田 太郎"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">メールアドレス</label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-xl bg-transparent ring-1 ring-white/10 px-3 py-2 focus:outline-none focus:ring-brand-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">内容</label>
            <textarea
              name="message"
              required
              rows={6}
              className="w-full rounded-xl bg-transparent ring-1 ring-white/10 px-3 py-2 focus:outline-none focus:ring-brand-500"
              placeholder="ご相談内容・想定スケジュール・ご予算感など"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-brand-500 px-5 py-3 text-white shadow-soft hover:bg-brand-600 transition"
          >
            送信
          </button>
        </form>

        <div className="card p-6 text-[color:var(--muted)]">
          <div className="text-white font-semibold">その他の連絡手段</div>
          <ul className="mt-3 space-y-2">
            <li>メール: hello@example.com</li>
            <li>X(Twitter): @example</li>
            <li>GitHub: example</li>
          </ul>
          <p className="mt-4 text-sm">
            * フォーム送信先を Formspark / Google Forms に切り替える場合は
            <code className="ml-1 rounded bg-white/10 px-1">action</code> を変更してください。
          </p>
        </div>
      </div>
    </Section>
  );
}
