import { Options, WebSocketHook } from "./types";
export declare const useBaseWebsocket: <T = unknown>(url: string | (() => string | Promise<string>) | null, options?: Options, connect?: boolean) => Omit<WebSocketHook<T, MessageEvent<any> | null>, "lastMessage" | "lastJsonMessage">;
export declare const useWebSocket: <T = unknown>(url: string | (() => string | Promise<string>) | null, options?: Options, connect?: boolean) => WebSocketHook<T, MessageEvent<any> | null>;
