import type { PoolActionType } from "../contract/types";

export type VaultQueryKey = readonly [
  scope: "nolo",
  resource: string,
  ...parts: readonly (string | number | boolean | null | undefined)[],
];

const normalize = (value: string | null | undefined): string => value?.trim() || "anonymous";

export const vaultQueryKeys = {
  all: ["nolo"] as const,
  config: () => ["nolo", "config"] as const,
  poolLists: () => ["nolo", "pools"] as const,
  pools: (filter = "all") => ["nolo", "pools", filter] as const,
  pool: (poolId: string) => ["nolo", "pool", poolId] as const,
  poolDetail: (poolId: string, walletAddress?: string | null) =>
    ["nolo", "pool-detail", poolId, normalize(walletAddress)] as const,
  account: (walletAddress?: string | null) => ["nolo", "account", normalize(walletAddress)] as const,
  userPosition: (poolId: string, walletAddress?: string | null) =>
    ["nolo", "position", poolId, normalize(walletAddress)] as const,
  rewards: (walletAddress?: string | null) => ["nolo", "rewards", normalize(walletAddress)] as const,
  prizes: (walletAddress?: string | null) => ["nolo", "prizes", normalize(walletAddress)] as const,
  portfolio: (walletAddress?: string | null) => ["nolo", "portfolio", normalize(walletAddress)] as const,
  savedPools: (walletAddress?: string | null, network?: string, contractId?: string) =>
    ["nolo", "saved-pools", normalize(walletAddress), network || "unknown", contractId || "unknown"] as const,
  transaction: (actionIdOrTxHash: string) => ["nolo", "transaction", actionIdOrTxHash] as const,
  actionFlow: (type: PoolActionType, poolId: string, walletAddress?: string | null) =>
    ["nolo", "action-flow", type, poolId, normalize(walletAddress)] as const,
};

export function serializeQueryKey(key: readonly unknown[]): string {
  return JSON.stringify(key);
}

export function queryKeyStartsWith(key: readonly unknown[], prefix: readonly unknown[]): boolean {
  if (prefix.length > key.length) return false;
  return prefix.every((part, index) => Object.is(part, key[index]));
}
