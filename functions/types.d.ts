/**
 * Pages Functions 运行时类型（EdgeOne Edge Runtime，基于标准 Web APIs）。
 *
 * 本文件仅提供 TypeScript 类型声明，不参与构建产物。
 * 供 functions/ 目录下的函数在编辑器中获得类型提示；
 * 构建时以原生 JS 运行，无需编译。
 */

declare interface PagesFunctionsContext {
  /** 原始请求对象（标准 Fetch API） */
  request: Request;
  /** 路由参数（动态路由 [id] / [[default]] 捕获的值） */
  params: Record<string, string | string[]>;
  /** 环境变量与平台绑定（KV / Blob 等命名空间在控制台绑定） */
  env: Record<string, unknown>;
  /** 下一个匹配的处理函数（用于中间件链） */
  next: () => Promise<Response>;
}

declare interface KVNamespace {
  get(key: string, type?: 'text' | 'json'): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
  delete(key: string): Promise<void>;
  list(options?: { prefix?: string; limit?: number }): Promise<{
    keys: Array<{ name: string }>;
    list_complete: boolean;
  }>;
}

declare interface Bucket {
  put(path: string, data: string | ArrayBuffer): Promise<void>;
  get(path: string): Promise<{ body: string } | null>;
  delete(path: string): Promise<void>;
  list(options?: { prefix?: string; limit?: number }): Promise<{
    objects: Array<{ key: string; size: number; uploaded?: string }>;
  }>;
}
