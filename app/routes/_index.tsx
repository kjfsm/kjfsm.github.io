import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "kjfsm.net" },
    { name: "description", content: "ふすまのウェブサイト" },
  ];
};

export default function HomePage() {
  return (
    <div className="my-8 flex flex-col items-center justify-center space-y-4">
      <h1 className="mb-4 font-bold text-4xl">kjfsm.net</h1>
      <p className="text-lg">スケジュール管理アプリを作りました</p>
      <p className="text-lg">
        <a
          href="https://circle.kjfsm.net"
          className="text-primary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          サークルスケジューラー
        </a>
      </p>
    </div>
  );
}
