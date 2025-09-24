export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div className="my-8 flex flex-col items-center justify-center">
        <h1 className="mb-4 font-bold text-4xl">About</h1>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="mb-2 font-semibold text-2xl">名前</h2>
          <p className="text-lg">ふすま</p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold text-2xl">X アカウント</h2>
          <p className="text-lg">
            <a
              href="https://x.com/kjfsm4"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://x.com/kjfsm4
            </a>
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-semibold text-2xl">好きなもの</h2>
          <p className="text-lg">ゲーム</p>
        </section>

        <section>
          <h2 className="mb-4 font-semibold text-2xl">プログラミング</h2>

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-medium text-xl">Go言語</h3>
              <p className="text-base">
                ちょっと書ける。簡単なCLIとかバックエンドとかつくってた。
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-xl">Typescript</h3>
              <p className="text-base">
                ちょっと書いたことある。あんまり難しいことはできない。
                このサイトはTypescript + React Router + shadcn/ui
                で作っている。今のお気に入りの組み合わせ。
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-medium text-xl">Docker</h3>
              <p className="text-base">
                Dev
                Containerで開発環境作ったりなんかデプロイするときに使っている。
                あんまり難しいことはわからない。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
