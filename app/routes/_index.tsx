import { generateMeta } from "@forge42/seo-tools/remix/metadata";
import {
  ArrowRight,
  Calendar,
  CheckSquare,
  Globe,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { Link, type MetaFunction } from "react-router";
import { getCommonStructuredData } from "~/lib/seo";
import { Button } from "~/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/shadcn/components/ui/card";

export const meta: MetaFunction = () => {
  const domain = "https://kjfsm.net";

  return generateMeta(
    {
      title: "kjfsm.net - ふすまのウェブサイト",
      description:
        "ふすまのウェブサイト - React Router v7 + shadcn/ui + Tailwind CSS。サークルスケジューラーや刀剣乱舞ツールなど。",
      url: domain,
      siteName: "kjfsm.net",
      image: `${domain}/favicon.ico`,
      twitterCard: "summary",
    },
    [
      // 共通の構造化データを追加
      ...getCommonStructuredData(domain),
      {
        name: "keywords",
        content:
          "kjfsm,ふすま,React Router,shadcn/ui,Tailwind CSS,フロントエンド,ウェブ開発",
      },
      { name: "author", content: "ふすま (kjfsm)" },
      { name: "robots", content: "index, follow" },
      { property: "og:locale", content: "ja_JP" },
      { property: "og:image:width", content: "48" },
      { property: "og:image:height", content: "48" },
      { property: "og:image:type", content: "image/x-icon" },
      { name: "theme-color", content: "#2563eb" },
      { name: "msapplication-TileColor", content: "#2563eb" }
    ],
  );
};

export default function Index() {
  const features = [
    {
      icon: Calendar,
      title: "スケジュール管理",
      description:
        "グループメンバーのスケジュールを一元管理し、最適な日程を自動で提案します。",
    },
    {
      icon: Users,
      title: "メンバー管理",
      description:
        "グループメンバーの権限管理や所属部署の設定が簡単にできます。",
    },
    {
      icon: CheckSquare,
      title: "出欠管理",
      description:
        "イベントの出欠確認を効率的に行い、リアルタイムで参加状況を把握できます。",
    },
    {
      icon: Zap,
      title: "簡単操作",
      description:
        "直感的なインターフェースで誰でも簡単にイベント管理ができます。",
    },
    {
      icon: Globe,
      title: "どこからでも",
      description: "スマートフォンやタブレットからいつでもアクセス可能です。",
    },
    {
      icon: Shield,
      title: "セキュア",
      description: "Google認証による安全なログインシステムを採用しています。",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 font-bold text-4xl tracking-tight md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              シンプルなスケジュール管理アプリ
            </span>
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl lg:text-2xl">
            サークル、チーム、コミュニティのイベント管理を
            <br className="hidden md:block" />
            シンプルで効率的に。
          </p>

          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <Button size="lg" asChild className="w-full md:w-auto">
              <a
                href="https://circle.kjfsm.net/auth/google"
                target="_blank"
                className="flex items-center"
                rel="noopener"
              >
                Googleでログイン
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full md:w-auto"
            >
              <Link to="/how-to-use">使い方を見る</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-3xl md:text-4xl">
            なぜサークルスケジューラーなのか？
          </h2>
          <p className="text-lg text-muted-foreground">
            グループ運営を効率化する強力な機能をご紹介
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={`feature-${feature.title}-${index}`}
                className="group hover:-translate-y-1 relative overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="rounded-lg bg-primary/10 p-2 transition-colors group-hover:bg-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
                <div className="absolute bottom-0 left-0 h-1 w-full scale-x-0 transform bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-300 group-hover:scale-x-100" />
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 font-bold text-3xl md:text-4xl">
              今すぐ始めましょう
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              無料でサークルスケジューラーを体験し、グループ運営を効率化しましょう。
            </p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Button size="lg" asChild>
                <a href="https://circle.kjfsm.net/auth/google">無料で始める</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-medium">サークルスケジューラー</span>
            </div>
            <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
              <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                <Link
                  to="/terms"
                  className="transition-colors hover:text-foreground"
                >
                  利用規約
                </Link>
                <Link
                  to="/privacy"
                  className="transition-colors hover:text-foreground"
                >
                  プライバシーポリシー
                </Link>
              </div>
              <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                <span>v1.1.0</span>
                <span>© {new Date().getFullYear()} kjfsm</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
