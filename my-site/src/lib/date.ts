/**
 * どんな入力でも JST "YYYY.MM.DD" 文字列で返すユーティリティ
 * - 直接 Date を描画してしまう事故を防ぐため、常に文字列を返す
 */
export function formatJstYmdStrict(input: unknown): string {
  // 1) Date の場合
  if (input instanceof Date && !isNaN(input.getTime())) {
    return fmtJst(input);
  }

  // 2) 文字列の場合
  if (typeof input === "string" && input.trim()) {
    // よくある 3 パターンを吸収
    // a) YYYY-MM-DD
    const m = input.trim().match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (m) {
      const y = Number(m[1]), mo = Number(m[2]) - 1, d = Number(m[3]);
      const date = new Date(Date.UTC(y, mo, d, 0, 0, 0)); // UTCで作ってJSTで表示
      return fmtJst(date);
    }

    // b) ISO 文字列や toString() 済みの文字列などは Date に投げてみる
    const d2 = new Date(input);
    if (!isNaN(d2.getTime())) return fmtJst(d2);
  }

  // 3) それ以外（null/undefined/空文字など）は空を返す
  return "";
}

function fmtJst(date: Date): string {
  // "ja-JP" & Asia/Tokyo で日付部分だけを安定表示
  const s = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
  // 2025/09/01 -> 2025.09.01
  return s.replaceAll("/", ".");
}
