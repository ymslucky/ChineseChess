import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-4xl font-bold tracking-tight">中国象棋</h1>
      <p className="max-w-xl text-center text-lg text-stone-600">
        基于 TypeScript + Next.js（App Router）+ Tailwind CSS 构建的在线对弈平台，
        由 EdgeOne Pages 提供边缘加速与 Serverless 后端。
      </p>
      <div className="flex gap-4">
        <Link
          href="/play"
          className="rounded-lg bg-amber-700 px-6 py-3 font-medium text-white transition hover:bg-amber-800"
        >
          开始对弈
        </Link>
      </div>
      <section className="mt-8 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-stone-300 bg-white p-4 text-center shadow-sm">
          <div className="text-2xl">♟</div>
          <h2 className="mt-2 font-semibold">规则引擎</h2>
          <p className="mt-1 text-sm text-stone-500">纯 TypeScript 实现的完整走法与合法性校验</p>
        </div>
        <div className="rounded-xl border border-stone-300 bg-white p-4 text-center shadow-sm">
          <div className="text-2xl">☁️</div>
          <h2 className="mt-2 font-semibold">边缘后端</h2>
          <p className="mt-1 text-sm text-stone-500">Pages Functions + KV/Blob 存储对局数据</p>
        </div>
        <div className="rounded-xl border border-stone-300 bg-white p-4 text-center shadow-sm">
          <div className="text-2xl">📱</div>
          <h2 className="mt-2 font-semibold">响应式棋盘</h2>
          <p className="mt-1 text-sm text-stone-500">移动端优先的交互式棋盘界面</p>
        </div>
      </section>
    </main>
  );
}
