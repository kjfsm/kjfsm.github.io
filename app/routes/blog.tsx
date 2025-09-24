import { Link } from "react-router";

export default function BlogPage() {
  // For now, a simple blog index page
  return (
    <main className="space-y-6">
      <h1 className="font-bold text-3xl">Blog</h1>
      <div className="space-y-4">
        <div className="rounded border p-4">
          <h2 className="font-semibold text-xl">
            <Link to="/blog/20250909" className="hover:text-primary">
              グループの予定管理アプリを作っている話
            </Link>
          </h2>
          <p className="text-muted-foreground text-sm">2025-09-09</p>
          <p className="mt-2">
            所属している楽団で使っているグループ管理アプリの使いにくさが気になっていたので、自分で作ることにしました。
          </p>
        </div>
      </div>
    </main>
  );
}
