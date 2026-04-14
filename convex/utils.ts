/** Comparator: sort by optional `order` field (asc), falling back to `_creationTime` (desc).
 *  Use with Array.prototype.sort — the native method preserves the full element type.
 */
export function byOrder(
  a: { order?: number; _creationTime: number },
  b: { order?: number; _creationTime: number }
): number {
  if (a.order !== undefined && b.order !== undefined) return a.order - b.order;
  if (a.order !== undefined) return -1;
  if (b.order !== undefined) return 1;
  return b._creationTime - a._creationTime;
}
