import type { MetaFunction } from "react-router";
import { ExternalLink, Sparkles } from "lucide-react";
import { Button } from "~/shadcn/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "kjfsm.net" },
    { name: "description", content: "ふすまのウェブサイト" },
  ];
};

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="font-bold text-5xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            kjfsm.net
          </h1>
          <p className="text-muted-foreground text-lg">ふすまのウェブサイトへようこそ</p>
        </div>
      </section>

      {/* Featured Project */}
      <section className="bg-card rounded-lg border p-8 space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="size-5 text-primary" />
          <h2 className="font-semibold text-2xl">最新プロジェクト</h2>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium text-xl">サークルスケジューラー</h3>
          <p className="text-muted-foreground">
            サークル活動のスケジュール管理を支援するWebアプリケーション。
            メンバーの出欠管理やイベントの作成・編集が簡単にできます。
          </p>
          <Button asChild className="w-fit">
            <a
              href="https://circle.kjfsm.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              サークルスケジューラーを開く
              <ExternalLink className="size-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="space-y-6">
        <h2 className="font-semibold text-2xl text-center">使用技術</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card rounded-lg border p-4 text-center">
            <h3 className="font-medium text-lg mb-2">React Router v7</h3>
            <p className="text-muted-foreground text-sm">最新のReact Routerでモダンなルーティング</p>
          </div>
          <div className="bg-card rounded-lg border p-4 text-center">
            <h3 className="font-medium text-lg mb-2">shadcn/ui</h3>
            <p className="text-muted-foreground text-sm">美しくアクセシブルなUIコンポーネント</p>
          </div>
          <div className="bg-card rounded-lg border p-4 text-center">
            <h3 className="font-medium text-lg mb-2">Tailwind CSS v4</h3>
            <p className="text-muted-foreground text-sm">効率的なユーティリティファーストCSS</p>
          </div>
        </div>
      </section>
    </div>
  );
}
