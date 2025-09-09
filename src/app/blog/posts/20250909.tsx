import type { Metadata } from "next";
import Link from "next/link";

export const meta = {
  slug: "20250909",
  title: "グループの予定管理アプリを作っている話",
  date: "2025-09-09",
  excerpt:
    "所属している楽団で使っているグループ管理アプリの使いにくさが気になっていたので、自分で作ることにしました。",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.excerpt,
  openGraph: {
    title: meta.title,
    description: meta.excerpt,
    type: "article",
    publishedTime: meta.date,
  },
};

export default function PostPage() {
  return (
    <article className="prose">
      <h1>{meta.title}</h1>
      <p className="text-sm text-gray-500">{meta.date}</p>
      所属している楽団で使っているグループ管理アプリの使いにくさが気になっていたので、自分で作ることにしました。
      作成方針はこんな感じ。
      <ul>
        <li>シンプルに</li>
        多すぎる機能はユーザーを迷わせる。必要最低限の機能に絞り、足りないものは他のアプリを併用してもらう前提とする。
        <li>ランニングコストを抑える</li>
        開発コスト・運用コストを抑え、長く続けられるようにする。
        <li>無料で使えるように</li>
        便利な機能を無料版では制限し、費用を払うことで利用できる物が多いが、あまりやりたくない。
        <li>個人情報をあまり集めない</li>
        <li>自分が楽しい開発環境を作る</li>
        せっかくやるなら、最高の開発体験をしたい。自動テストとか、Remixによるフルスタック開発とか。
      </ul>
      まだ開発中ですが、興味があれば以下のリンクからどうぞ。
      <p>
        <Link href="https://circle.kjfsm.net">サークルスケジューラー</Link>
      </p>
      一応一通りの機能はできてきました。
    </article>
  );
}
