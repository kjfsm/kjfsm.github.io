import { Link } from 'react-router-dom'

export default function BlogPage() {
  // For now, a simple blog index page
  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="space-y-4">
        <div className="border rounded p-4">
          <h2 className="text-xl font-semibold">
            <Link to="/blog/20250909" className="hover:text-primary">
              グループの予定管理アプリを作っている話
            </Link>
          </h2>
          <p className="text-sm text-muted-foreground">2025-09-09</p>
          <p className="mt-2">
            所属している楽団で使っているグループ管理アプリの使いにくさが気になっていたので、自分で作ることにしました。
          </p>
        </div>
      </div>
    </main>
  )
}