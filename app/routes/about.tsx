import { Code, Container, ExternalLink, User } from "lucide-react";
import { Button } from "~/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/shadcn/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Header */}
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <User className="size-8 text-primary" />
              <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-bold text-4xl text-transparent">
                About
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">ふすまについて</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Profile */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="size-5 text-primary" />
                  プロフィール
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-2 font-medium text-lg">名前</h3>
                  <p className="text-muted-foreground">ふすま</p>
                </div>

                <div>
                  <h3 className="mb-2 font-medium text-lg">X アカウント</h3>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://x.com/kjfsm4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      @kjfsm4
                      <ExternalLink className="size-3" />
                    </a>
                  </Button>
                </div>

                <div>
                  <h3 className="mb-2 font-medium text-lg">好きなもの</h3>
                  <p className="text-muted-foreground">ゲーム</p>
                </div>
              </CardContent>
            </Card>

            {/* Tech Stack */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="size-5 text-primary" />
                  プログラミング
                </CardTitle>
                <CardDescription>使用している技術やツール</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="rounded-lg bg-secondary p-3">
                    <h3 className="mb-1 font-medium text-lg">Go言語</h3>
                    <p className="text-muted-foreground text-sm">
                      ちょっと書ける。簡単なCLIとかバックエンドとかつくってた。
                    </p>
                  </div>

                  <div className="rounded-lg bg-secondary p-3">
                    <h3 className="mb-1 font-medium text-lg">TypeScript</h3>
                    <p className="text-muted-foreground text-sm">
                      ちょっと書いたことある。あんまり難しいことはできない。
                      このサイトはTypeScript + React Router + shadcn/ui
                      で作っている。今のお気に入りの組み合わせ。
                    </p>
                  </div>

                  <div className="rounded-lg bg-secondary p-3">
                    <h3 className="mb-1 flex items-center gap-2 font-medium text-lg">
                      <Container className="size-4" />
                      Docker
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Dev
                      Containerで開発環境作ったりなんかデプロイするときに使っている。
                      あんまり難しいことはわからない。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Current Tech Stack */}
          <Card>
            <CardHeader>
              <CardTitle>このサイトの技術構成</CardTitle>
              <CardDescription>
                使用しているフレームワークとライブラリ
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-secondary p-4 text-center">
                  <h3 className="mb-2 font-medium text-lg">React Router v7</h3>
                  <p className="text-muted-foreground text-sm">
                    最新のReact Router
                  </p>
                </div>
                <div className="rounded-lg bg-secondary p-4 text-center">
                  <h3 className="mb-2 font-medium text-lg">shadcn/ui</h3>
                  <p className="text-muted-foreground text-sm">
                    美しいUIコンポーネント
                  </p>
                </div>
                <div className="rounded-lg bg-secondary p-4 text-center">
                  <h3 className="mb-2 font-medium text-lg">Tailwind CSS v4</h3>
                  <p className="text-muted-foreground text-sm">
                    ユーティリティファーストCSS
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
