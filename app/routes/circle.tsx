export default function CirclePage() {
  return (
    <div className="max-w-2xl space-y-8">
      <h1 className="font-bold text-4xl">サークルスケジューラー</h1>

      <p className="text-lg">
        サークルスケジューラーは、サークル活動のスケジュール管理を支援するアプリです。
      </p>

      <div>
        <h2 className="mb-4 font-semibold text-2xl">できること</h2>
        <ul className="list-disc space-y-2 pl-6">
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
          className="text-lg text-primary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          サークルスケジューラー
        </a>
      </p>
    </div>
  );
}
