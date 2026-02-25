import { TreeNode } from "../utils/tree";
import { TreeNodeComponent } from "./TreeNodeComponent";

interface TraceTreeProps {
  nodes: TreeNode[];
  selectedRunId: string | null;
  expandedNodes: Set<string>;
  onSelect: (id: string) => void;
  onToggle: (id: string) => void;
}

export function TraceTree({
  nodes,
  selectedRunId,
  expandedNodes,
  onSelect,
  onToggle,
}: TraceTreeProps) {
  return (
    <div className="py-1">
      {nodes.map((node) => (
        <TreeNodeComponent
          key={node.id}
          node={node}
          depth={0}
          selectedRunId={selectedRunId}
          expandedNodes={expandedNodes}
          onSelect={onSelect}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
