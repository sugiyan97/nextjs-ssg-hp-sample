import Link from "next/link";

/** 404: App Router の予約ファイル。存在しないURLで自動表示される */
export default function NotFound() {
  return (
    <div className="min-h-[60vh] grid place-items-center text-center">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">404 Not Found</h1>
        <p className="text-slate-400">ページが見つかりませんでした。</p>
        <Link href="/" className="inline-block rounded-xl border border-white/20 px-5 py-3 hover:bg-white/10 transition">
          ホームへ戻る
        </Link>
      </div>
    </div>
  );
}
