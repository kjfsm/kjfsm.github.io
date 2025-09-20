import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <div className="max-w-sm mx-auto">
      <div className="mt-16 flex flex-col items-center space-y-8">
        <h1 className="text-4xl font-bold">ページが見つかりません</h1>
        <p className="text-muted-foreground text-center mb-8">
          お探しのページは存在しないか、移動または削除された可能性があります。
        </p>
        <Button asChild>
          <Link to="/" aria-label="ホームに戻る">
            ホームに戻る
          </Link>
        </Button>
      </div>
    </div>
  )
}