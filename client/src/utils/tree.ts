import { RunNode } from "../types";

export interface TreeNode extends RunNode {
  children: TreeNode[];
}

export function buildTree(nodes: RunNode[]): TreeNode[] {
  const map = new Map<string, TreeNode>();
  const roots: TreeNode[] = [];

  for (const node of nodes) {
    map.set(node.id, { ...node, children: [] });
  }

  for (const node of nodes) {
    const treeNode = map.get(node.id)!;
    if (node.parent_run_id && map.has(node.parent_run_id)) {
      map.get(node.parent_run_id)!.children.push(treeNode);
    } else {
      roots.push(treeNode);
    }
  }

  const sortByTime = (a: TreeNode, b: TreeNode) =>
    new Date(a.start_time).getTime() - new Date(b.start_time).getTime();

  const sortRecursive = (node: TreeNode) => {
    node.children.sort(sortByTime);
    node.children.forEach(sortRecursive);
  };

  roots.sort(sortByTime);
  roots.forEach(sortRecursive);

  return roots;
}

export function filterTree(
  roots: TreeNode[],
  predicate: (node: TreeNode) => boolean
): TreeNode[] {
  function filterNode(node: TreeNode): TreeNode | null {
    const filteredChildren = node.children
      .map(filterNode)
      .filter((c): c is TreeNode => c !== null);

    if (predicate(node) || filteredChildren.length > 0) {
      return { ...node, children: filteredChildren };
    }
    return null;
  }

  return roots
    .map(filterNode)
    .filter((r): r is TreeNode => r !== null);
}
