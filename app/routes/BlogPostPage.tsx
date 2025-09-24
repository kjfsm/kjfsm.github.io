import { Link, useParams } from "react-router";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  // For now, hardcode the single blog post
  if (slug === "20250909") {
    return (
      <article className="prose max-w-none">
        <h1>グループの予定管理アプリを作っている話</h1>
        <p className="text-muted-foreground text-sm">2025-09-09</p>

        <p>
          所属している楽団で使っているグループ管理アプリの使いにくさが気になっていたので、自分で作ることにしました。
          作成方針はこんな感じ。
        </p>

        <ul>
          <li>
            <strong>シンプルに</strong>
            <br />
            多すぎる機能はユーザーを迷わせる。必要最低限の機能に絞り、足りないものは他のアプリを併用してもらう前提とする。
          </li>
          <li>
            <strong>ランニングコストを抑える</strong>
            <br />
            開発コスト・運用コストを抑え、長く続けられるようにする。
          </li>
          <li>
            <strong>無料で使えるように</strong>
            <br />
            便利な機能を無料版では制限し、費用を払うことで利用できる物が多いが、あまりやりたくない。
          </li>
          <li>
            <strong>個人情報をあまり集めない</strong>
          </li>
          <li>
            <strong>自分が楽しい開発環境を作る</strong>
            <br />
            せっかくやるなら、最高の開発体験をしたい。自動テストとか、Remixによるフルスタック開発とか。
          </li>
        </ul>

        <p>興味があれば以下のリンクからどうぞ。</p>
        <p>
          <a
            href="https://circle.kjfsm.net"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            サークルスケジューラー
          </a>
        </p>

        <div className="mt-8">
          <Link to="/blog" className="text-primary hover:underline">
            ブログトップに戻る
          </Link>
        </div>
      </article>
    );
  }

  return (
    <div>
      <h1 className="mb-4 font-bold text-3xl">記事が見つかりません</h1>
      <Link to="/blog" className="text-primary hover:underline">
        ブログトップに戻る
      </Link>
    </div>
  );
}
