import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Crown,
  Info,
  LogIn,
  Shield,
  Star,
  User,
  Users,
  Zap,
} from "lucide-react";
import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { Button } from "~/shadcn/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/shadcn/components/ui/card";

export const meta: MetaFunction = () => {
  return [
    { title: "使い方 - サークルスケジューラー" },
    {
      name: "description",
      content:
        "サークルスケジューラーの使い方と権限システムについて説明します。",
    },
  ];
};

export default function HowToUsePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 p-6 md:p-10">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              トップページに戻る
            </Link>
          </Button>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/20">
              <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-bold text-2xl text-transparent">使い方ガイド</h1>
          </div>
          <p className="text-gray-600">
            サークルスケジューラーの基本的な使い方と権限システムについて説明します
          </p>
        </header>

        <div className="space-y-8">
          {/* Quick start */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="border-gray-100 border-b pb-6">
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-600" />
                クイックスタート
              </CardTitle>
              <CardDescription>
                3つのステップでサークルスケジューラーを始めましょう
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 font-medium text-blue-600 text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 font-medium text-gray-900">
                      <LogIn className="h-4 w-4" />
                      ログイン
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Googleアカウントでアクセス
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 font-medium text-blue-600 text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 font-medium text-gray-900">
                      <Users className="h-4 w-4" />
                      グループ参加
                    </h4>
                    <p className="text-gray-600 text-sm">
                      新規作成または招待コードで参加
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 font-medium text-blue-600 text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 font-medium text-gray-900">
                      <Calendar className="h-4 w-4" />
                      イベント管理
                    </h4>
                    <p className="text-gray-600 text-sm">
                      イベント作成・出欠管理を開始
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Role system */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="border-gray-100 border-b pb-6">
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                権限システム
              </CardTitle>
              <CardDescription>
                階層的な権限システムで柔軟なグループ運営を実現
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {/* Owner */}
                <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-100">
                      <Crown className="h-4 w-4 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 font-semibold text-amber-900">
                        オーナー（グループ作成者）
                      </h4>
                      <p className="mb-3 text-amber-800 text-sm">
                        全メンバーの権限管理を行う最高権限者
                      </p>
                      <div className="grid gap-2 text-amber-700 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-amber-600"></div>
                          <span>グループの削除・編集</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-amber-600"></div>
                          <span>全メンバーへの権限付与・剥奪</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-amber-600"></div>
                          <span>招待コードの管理</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Group Admin */}
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <Star className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 font-semibold text-blue-900">
                        グループ管理者
                      </h4>
                      <p className="mb-3 text-blue-800 text-sm">
                        グループ設定とメンバー管理権限を担当
                      </p>
                      <div className="grid gap-2 text-blue-700 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-blue-600"></div>
                          <span>グループ情報の編集</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-blue-600"></div>
                          <span>メンバー管理権限の付与・剥奪</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-blue-600"></div>
                          <span>招待コードの管理</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Member Admin */}
                <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                      <Users className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 font-semibold text-green-900">
                        メンバー管理者
                      </h4>
                      <p className="mb-3 text-green-800 text-sm">
                        メンバー管理とイベント管理権限を担当
                      </p>
                      <div className="grid gap-2 text-green-700 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-green-600"></div>
                          <span>一般メンバーの情報編集・削除</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-green-600"></div>
                          <span>イベント管理権限の付与・剥奪</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Admin */}
                <div className="rounded-lg border border-purple-200 bg-purple-50 p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
                      <Calendar className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 font-semibold text-purple-900">
                        イベント管理者
                      </h4>
                      <p className="mb-3 text-purple-800 text-sm">
                        イベント管理に特化した権限
                      </p>
                      <div className="grid gap-2 text-purple-700 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-purple-600"></div>
                          <span>イベントの作成・編集・削除</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-purple-600"></div>
                          <span>出欠状況の管理</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Regular Member */}
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
                      <User className="h-4 w-4 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 font-semibold text-gray-900">
                        一般メンバー
                      </h4>
                      <p className="mb-3 text-gray-700 text-sm">
                        基本的な利用権限を持つメンバー
                      </p>
                      <div className="grid gap-2 text-gray-600 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                          <span>イベント一覧の閲覧・出欠回答</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                          <span>メンバー管理の閲覧</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                          <span>自分のプロフィール編集</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important notes */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="border-gray-100 border-b pb-6">
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-600" />
                重要な注意事項
              </CardTitle>
              <CardDescription>
                権限システムを正しく理解するための重要なポイント
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                  <h4 className="mb-2 font-medium text-amber-900">
                    権限の重複
                  </h4>
                  <p className="text-amber-800 text-sm">
                    一人のユーザーが複数の管理者権限を持つことができます。
                    例えば、グループ管理者かつイベント管理者の権限を持つことが可能です。
                  </p>
                </div>
                <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                  <h4 className="mb-2 font-medium text-red-900">権限の制限</h4>
                  <p className="text-red-800 text-sm">
                    自分より上位の権限を持つメンバーや、同等の権限を持つメンバー（自分以外）の編集・削除はできません。
                  </p>
                </div>
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                  <h4 className="mb-2 font-medium text-blue-900">
                    オーナーの特権
                  </h4>
                  <p className="text-blue-800 text-sm">
                    オーナーのみがグループの削除と、全メンバーの権限変更を行うことができます。
                    オーナー以外の管理者は、自分に付与された権限の範囲内でのみ操作が可能です。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              トップページに戻る
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
