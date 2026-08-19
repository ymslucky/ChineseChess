import type { Metadata } from 'next';
import Board from '@/components/Board';

export const metadata: Metadata = {
  title: '对弈',
};

export default function PlayPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="mb-6 text-2xl font-bold">象棋对弈</h1>
      <Board />
    </main>
  );
}
