import { ArrowLeft, FileText } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { MetaFunction } from "react-router";
import { Link, useLoaderData } from "react-router";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import { loadTermsContent } from "~/lib/utils/legal-content.server";
import { Button } from "~/shadcn/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "利用規約 - サークルスケジューラー" },
    {
      name: "description",
      content: "サークルスケジューラーの利用規約をご確認いただけます。",
    },
  ];
};

export async function loader() {
  const termsData = loadTermsContent();
  return termsData;
}

export default function TermsPage() {
  const { content, version, lastUpdated } = useLoaderData<typeof loader>();
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6 md:p-10 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
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
              <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-bold text-2xl text-transparent">
              利用規約
            </h1>
          </div>
          <p className="text-gray-600">
            最終更新日: {lastUpdated}（バージョン {version}）
          </p>
        </header>

        {/* Terms Content */}
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
