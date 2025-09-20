export default function CirclePage() {
  return (
    <div className="max-w-2xl space-y-8">
      <h1 className="text-4xl font-bold">サークルスケジューラー</h1>
      
      <p className="text-lg">
        サークルスケジューラーは、サークル活動のスケジュール管理を支援するアプリです。
      </p>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">できること</h2>
        <ul className="space-y-2 list-disc pl-6">
          <li>グループの作成</li>
          <li>メンバーの招待・管理</li>
          <li>イベントの作成・編集・削除</li>
          <li>カレンダー表示でのスケジュール確認</li>
        </ul>
      </div>
      
      <p className="text-lg">
        興味のある方は以下のリンクからアクセスしてください。
      </p>
      
      <p>
        <a 
          href="https://circle.kjfsm.net"
          className="text-primary hover:underline text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          サークルスケジューラー
        </a>
      </p>
    </div>
  )
}