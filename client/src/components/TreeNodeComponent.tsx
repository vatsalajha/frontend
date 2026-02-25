import { ChevronDown, ChevronRight } from "lucide-react";
import { TreeNode } from "../utils/tree";

interface TreeNodeProps {
  node: TreeNode;
  depth: number;
  selectedRunId: string | null;
  expandedNodes: Set<string>;
  onSelect: (id: string) => void;
  onToggle: (id: string) => void;
}

export function TreeNodeComponent({
  node,
  depth,
  selectedRunId,
  expandedNodes,
  onSelect,
  onToggle,
}: TreeNodeProps) {
  const isExpanded = expandedNodes.has(node.id);
  const isSelected = node.id === selectedRunId;
  const hasChildren = node.children.length > 0;

  return (
    <div>
      <div
        className={`
          flex items-center gap-2 py-1.5 px-2 cursor-pointer
          transition-colors duration-150
          ${isSelected ? "bg-gray-100" : "hover:bg-gray-50"}
        `}
        style={{ paddingLeft: `${depth * 20 + 8}px` }}
        onClick={() => onSelect(node.id)}
      >
        {hasChildren ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggle(node.id);
            }}
            className="w-4 h-4 flex items-center justify-center text-gray-400 hover:text-gray-600 flex-shrink-0"
          >
            {isExpanded ? (
              <ChevronDown className="w-3 h-3" />
            ) : (
              <ChevronRight className="w-3 h-3" />
            )}
          </button>
        ) : (
          <span className="w-4 h-4 flex-shrink-0" />
        )}

        <span
          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
            node.status === "success"
              ? "bg-green-400"
              : node.status === "error"
                ? "bg-red-400"
                : "bg-yellow-400"
          }`}
        />

        <span className="text-sm truncate text-gray-800 min-w-0">
          {node.name}
        </span>

        <span className="text-[11px] text-gray-400 flex-shrink-0">
          {node.run_type}
        </span>

        {node.total_tokens != null && node.total_tokens > 0 && (
          <span className="text-[11px] text-gray-300 flex-shrink-0 ml-auto tabular-nums">
            {node.total_tokens.toLocaleString()}
          </span>
        )}
      </div>

      {hasChildren && isExpanded && (
        <div>
          {node.children.map((child) => (
            <TreeNodeComponent
              key={child.id}
              node={child}
              depth={depth + 1}
              selectedRunId={selectedRunId}
              expandedNodes={expandedNodes}
              onSelect={onSelect}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
}
