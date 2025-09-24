import { User, ExternalLink, Code, Container } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/shadcn/components/ui/card";
import { Button } from "~/shadcn/components/ui/button";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <User className="size-8 text-primary" />
          <h1 className="font-bold text-4xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            About
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">ふすまについて</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <h3 className="font-medium text-lg mb-2">名前</h3>
              <p className="text-muted-foreground">ふすま</p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-2">X アカウント</h3>
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
              <h3 className="font-medium text-lg mb-2">好きなもの</h3>
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
            <CardDescription>
              使用している技術やツール
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-secondary rounded-lg">
                <h3 className="font-medium text-lg mb-1">Go言語</h3>
                <p className="text-muted-foreground text-sm">
                  ちょっと書ける。簡単なCLIとかバックエンドとかつくってた。
                </p>
              </div>

              <div className="p-3 bg-secondary rounded-lg">
                <h3 className="font-medium text-lg mb-1">TypeScript</h3>
                <p className="text-muted-foreground text-sm">
                  ちょっと書いたことある。あんまり難しいことはできない。
                  このサイトはTypeScript + React Router + shadcn/ui
                  で作っている。今のお気に入りの組み合わせ。
                </p>
              </div>

              <div className="p-3 bg-secondary rounded-lg">
                <h3 className="font-medium text-lg mb-1 flex items-center gap-2">
                  <Container className="size-4" />
                  Docker
                </h3>
                <p className="text-muted-foreground text-sm">
                  Dev Containerで開発環境作ったりなんかデプロイするときに使っている。
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
          <CardDescription>使用しているフレームワークとライブラリ</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-secondary rounded-lg">
              <h3 className="font-medium text-lg mb-2">React Router v7</h3>
              <p className="text-muted-foreground text-sm">最新のReact Router</p>
            </div>
            <div className="text-center p-4 bg-secondary rounded-lg">
              <h3 className="font-medium text-lg mb-2">shadcn/ui</h3>
              <p className="text-muted-foreground text-sm">美しいUIコンポーネント</p>
            </div>
            <div className="text-center p-4 bg-secondary rounded-lg">
              <h3 className="font-medium text-lg mb-2">Tailwind CSS v4</h3>
              <p className="text-muted-foreground text-sm">ユーティリティファーストCSS</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
