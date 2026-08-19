/**
 * 棋盘占位组件。
 *
 * 后续任务（棋盘 UI 与本地对局交互）将在此实现：
 * - 10 行 9 列网格、河界、九宫斜线、楚河汉界
 * - 点击选子 / 点击落点走子、合法落点提示
 * - 回合指示、将军提示、胜负结果弹层
 *
 * 走法判定必须调用 @/lib/xiangqi 引擎，禁止在 UI 层重复实现规则。
 */
export default function Board() {
  return (
    <div
      data-testid="board-placeholder"
      className="flex h-80 w-72 items-center justify-center rounded-lg border-2 border-board-dark bg-board-wood text-board-line"
    >
      棋盘加载中…
    </div>
  );
}
