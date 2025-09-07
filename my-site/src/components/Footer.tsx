/** 年が自動更新されるシンプルなフッタ */
export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container py-8 text-center text-sm text-[color:var(--muted)]">
        © {new Date().getFullYear()} PROXIT — All rights reserved.
      </div>
    </footer>
  );
}
