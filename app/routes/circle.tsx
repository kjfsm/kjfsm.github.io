import { 
  ArrowRight, 
  Calendar, 
  CheckSquare, 
  ExternalLink, 
  Users, 
  UserPlus 
} from "lucide-react";
import { Button } from "~/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/shadcn/components/ui/card";

export default function CirclePage() {
  const features = [
    {
      icon: Users,
      title: "グループの作成",
      description: "サークルやチームのグループを簡単に作成できます",
    },
    {
      icon: UserPlus,
      title: "メンバーの招待・管理",
      description: "メンバーを招待し、権限を管理することができます",
    },
    {
      icon: Calendar,
      title: "イベントの作成・編集・削除",
      description: "イベントの詳細情報を管理し、効率的に運営できます",
    },
    {
      icon: CheckSquare,
      title: "カレンダー表示でのスケジュール確認",
      description: "視覚的に分かりやすいカレンダーでスケジュールを確認",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Header */}
          <div className="space-y-6 text-center">
            <h1 className="mb-6 font-bold text-4xl tracking-tight md:text-6xl">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                サークルスケジューラー
              </span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              サークル活動のスケジュール管理を支援するアプリです。
              <br className="hidden md:block" />
              効率的なグループ運営をサポートします。
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 pt-4 md:flex-row">
              <Button size="lg" asChild className="w-full md:w-auto">
                <a
                  href="https://circle.kjfsm.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  サークルスケジューラーを使う
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="mb-4 font-bold text-3xl">主な機能</h2>
              <p className="text-lg text-muted-foreground">
                サークル運営に必要な機能が揃っています
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
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
                  </Card>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center text-white">
            <h3 className="mb-4 font-bold text-2xl">
              今すぐ始めましょう
            </h3>
            <p className="mb-6 text-blue-100">
              興味のある方は以下のリンクからアクセスしてください。
            </p>
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              <a
                href="https://circle.kjfsm.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                サークルスケジューラー
                <ExternalLink className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
