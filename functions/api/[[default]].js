/**
 * EdgeOne Pages Functions — 统一 API 入口（占位）。
 *
 * 目录约定说明：
 * - 本项目按看板任务约定使用 functions/ 作为 Pages Functions 目录；
 * - EdgeOne Makers（原 Pages）当前官方文档的函数目录为
 *   edge-functions/（Edge Functions）与 cloud-functions/（Cloud Functions），
 *   两者文件路由规则一致（目录路径即 URL 路径）。
 *   若项目在控制台构建时报函数目录未识别，可将 functions/ 重命名为
 *   edge-functions/ 或按控制台指引调整，路由规则无需改动。
 *
 * 后续任务（Pages Functions 后端 API）将在此实现：
 * - POST /api/session   创建对局（KV: game:{id}，含 TTL）
 * - GET  /api/session/:id 恢复对局
 * - POST /api/move      服务端调用 @/lib/xiangqi 引擎校验并落子
 * - POST /api/records   对局棋谱写入 Blob（users/{uid}/games/{date}/{gameId}.json）
 * - GET  /api/records?uid=  列出用户棋谱
 * - POST/GET /api/stats 与 /api/leaderboard  战绩统计与积分排行
 *
 * Edge Runtime 兼容性注意：
 * - 使用标准 Fetch API（fetch / Request / Response / URL）
 * - 不使用 Node 专有 API（fs / path / Buffer / process 等）
 */
export function onRequest(context) {
  const { request } = context;
  return new Response(
    JSON.stringify({
      name: 'chinese-chess-api',
      status: 'ok',
      endpoints: [
        'POST /api/session',
        'GET /api/session/:id',
        'POST /api/move',
        'POST /api/records',
        'GET /api/records?uid=',
        'POST/GET /api/stats',
        'GET /api/leaderboard',
      ],
      now: Date.now(),
      method: request.method,
    }),
    {
      status: 200,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    },
  );
}
