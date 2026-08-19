# 中国象棋对弈平台

基于 **TypeScript + Next.js（App Router）+ Tailwind CSS** 构建的在线中国象棋对弈平台，适配 **EdgeOne Pages**（现已升级为 EdgeOne Makers）部署：前端为静态导出站点，后端由 Pages Functions 提供，状态与数据存于平台内置 KV / Blob 存储。

## 技术栈

| 层 | 技术 |
| --- | --- |
| 前端框架 | Next.js 14（App Router，`output: 'export'` 静态导出） |
| UI | React 18 + Tailwind CSS 3 |
| 语言 | TypeScript（strict 模式） |
| 后端 | EdgeOne Pages Functions（Edge Runtime，标准 Web APIs） |
| 存储 | EdgeOne KV（对局/计数）+ Blob（棋谱文件） |
| 测试 | Vitest（规则引擎单元测试） |

## 目录结构

```text
.
├── app/                    # Next.js App Router 页面
│   ├── layout.tsx          # 根布局（lang=zh-CN、全局元信息）
│   ├── page.tsx            # 首页
│   ├── play/page.tsx       # 对弈页
│   └── globals.css         # 全局样式（Tailwind 指令）
├── src/
│   ├── components/         # React 组件（Board 等）
│   └── lib/
│       └── xiangqi/        # 象棋规则引擎（纯 TS、零依赖、前后端共用）
├── functions/              # EdgeOne Pages Functions（后端 API）
│   ├── api/
│   │   └── [[default]].js  # API 兜底路由（目录路径即 URL 路径）
│   └── types.d.ts          # Functions 运行时类型声明
├── next.config.js          # 静态导出等配置
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json           # 含 @/* → ./src/* 路径别名
└── package.json
```

## 本地开发

环境要求：Node.js ≥ 18.17。

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器（http://localhost:3000）
npm run dev

# 3. 生产构建（静态导出到 out/）
npm run build

# 4. 代码检查
npm run lint        # ESLint（next/core-web-vitals）
npm run typecheck   # TypeScript 严格类型检查

# 5. 单元测试（规则引擎）
npm test
```

> 本地开发时后端 Functions 走内存 mock（通过环境变量切换，详见后续 README 更新）。

## 部署到 EdgeOne Pages（Makers）

1. **推送代码到 Git 仓库**（GitHub / GitLab / Gitee 均可）。
2. 登录 [EdgeOne 控制台](https://console.cloud.tencent.com/edgeone)，进入 **Pages（Makers）** → **创建项目** → 选择 **导入 Git 仓库**，选中本项目仓库。
3. 构建配置：
   - **框架预设**：Next.js（Static / 静态导出）
   - **构建命令**：`npm run build`
   - **输出目录**：`out`
   - **安装命令**：`npm install`
4. 点击 **部署**，平台自动构建并发布，获得 `*.edgeone.app` 域名（可绑定自定义域名）。
5. **绑定存储**（按需）：项目设置中开通并绑定 **KV 命名空间**（对局会话、战绩计数）与 **Blob 桶**（棋谱 JSON 存储）。
6. **函数目录**：本项目按任务约定使用 `functions/` 目录承载 Pages Functions；EdgeOne Makers 当前官方目录为 `edge-functions/`（Edge Functions）与 `cloud-functions/`（Cloud Functions），文件路由规则相同（`/functions/api/foo.js` → `/api/foo`）。若构建时控制台提示函数目录未识别，将 `functions/` 重命名为 `edge-functions/` 即可，代码无需修改。
7. 后续推送代码到默认分支即自动触发重新部署。

### 部署检查清单

- [ ] `npm run build` 本地通过，`out/` 生成完整静态资源
- [ ] 控制台构建日志无错误，部署状态为成功
- [ ] 访问首页 / `/play/` 页面正常渲染
- [ ] （后端任务完成后）`GET /api` 返回 API 端点 JSON
- [ ] KV / Blob 绑定完成且函数可读写

## 路线图

- [x] 项目骨架与静态导出配置
- [ ] 象棋规则引擎（走法生成、将死/困毙判定、FEN 与中文记谱）
- [ ] 交互式棋盘 UI（选子走子、悔棋、将军提示）
- [ ] Pages Functions 后端（对局会话、服务端校验落子、KV/Blob 持久化）
- [ ] 棋谱保存 / 回放、排行榜
- [ ] 联机对战、AI 对手

## License

MIT
