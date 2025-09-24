import { ArrowLeft, Shield } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { MetaFunction } from "react-router";
import { Link, useLoaderData } from "react-router";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { loadPrivacyContent } from "~/lib/utils/legal-content.server";
import { Button } from "~/shadcn/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "プライバシーポリシー - サークルスケジューラー" },
    {
      name: "description",
      content:
        "サークルスケジューラーのプライバシーポリシーをご確認いただけます。",
    },
  ];
};

export async function loader() {
  const privacyData = loadPrivacyContent();
  return privacyData;
}

export default function PrivacyPage() {
  const { content, version, lastUpdated } = useLoaderData<typeof loader>();

  return (
    <main className="min-h-screen bg-gray-50/50 p-6 md:p-10">
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
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
              <Shield className="h-5 w-5 text-green-600" />
            </div>
            <h1 className="font-bold text-2xl text-gray-900">
              プライバシーポリシー
            </h1>
          </div>
          <p className="text-gray-600">
            最終更新日: {lastUpdated}（バージョン {version}）
          </p>
        </header>

        {/* Privacy Policy Content */}
        <div className="prose prose-gray max-w-none rounded-lg bg-white p-8 shadow-sm">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkBreaks]}
            components={{
              h1: ({ children }) => (
                <h1 className="mb-6 border-gray-200 border-b pb-3 font-bold text-3xl text-gray-900">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="mt-8 mb-4 font-semibold text-gray-900 text-xl">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="mt-6 mb-3 font-semibold text-gray-900 text-lg">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="mb-4 ml-6 list-disc space-y-1">{children}</ul>
              ),
              li: ({ children }) => (
                <li className="text-gray-700">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-gray-900">
                  {children}
                </strong>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
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
