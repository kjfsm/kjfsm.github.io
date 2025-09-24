import { Link } from "react-router";
import { Button } from "~/shadcn/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-sm">
      <div className="mt-16 flex flex-col items-center space-y-8">
        <h1 className="font-bold text-4xl">ページが見つかりません</h1>
        <p className="mb-8 text-center text-muted-foreground">
          お探しのページは存在しないか、移動または削除された可能性があります。
        </p>
        <Button asChild>
          <Link to="/" aria-label="ホームに戻る">
            ホームに戻る
          </Link>
        </Button>
      </div>
    </div>
  );
}
