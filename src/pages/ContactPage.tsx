export default function ContactPage() {
  return (
    <div className="max-w-2xl space-y-8">
      <h1 className="text-4xl font-bold">Contact</h1>
      
      <div className="space-y-6">
        <p className="text-lg">
          お問い合わせは以下の方法でお願いします。
        </p>
        
        <div>
          <h2 className="text-2xl font-semibold mb-2">X (Twitter)</h2>
          <p>
            <a 
              href="https://x.com/kjfsm4"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @kjfsm4
            </a>
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-2">その他</h2>
          <p className="text-muted-foreground">
            準備中です。しばらくお待ちください。
          </p>
        </div>
      </div>
    </div>
  )
}