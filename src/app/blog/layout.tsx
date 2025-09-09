export default function BlogLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      {children}
    </section>
  );
}
