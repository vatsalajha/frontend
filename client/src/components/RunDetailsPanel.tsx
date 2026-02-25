import { Loader2 } from "lucide-react";
import { RunContent, RunNode } from "../types";

interface RunDetailsPanelProps {
  node: RunNode | null;
  details: RunContent | null;
  loading: boolean;
}

export function RunDetailsPanel({
  node,
  details,
  loading,
}: RunDetailsPanelProps) {
  if (!node) {
    return (
      <div className="flex items-center justify-center h-full text-gray-300">
        <div className="text-center">
          <p className="text-base">Select a run to view details</p>
          <p className="text-sm mt-1">Click on any node in the trace tree</p>
        </div>
      </div>
    );
  }

  const duration =
    node.end_time
      ? (
          (new Date(node.end_time).getTime() -
            new Date(node.start_time).getTime()) /
          1000
        ).toFixed(2)
      : null;

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-900">{node.name}</h2>
        <div className="flex flex-wrap gap-x-6 gap-y-1 mt-2 text-sm text-gray-500">
          <span>{node.run_type}</span>
          <span className={node.status === "error" ? "text-red-500" : "text-green-600"}>
            {node.status}
          </span>
          {node.total_tokens != null && (
            <span>{node.total_tokens.toLocaleString()} tokens</span>
          )}
          {node.total_cost != null && (
            <span>${node.total_cost.toFixed(6)}</span>
          )}
          <span>{new Date(node.start_time).toLocaleTimeString()}</span>
          {duration && <span>{duration}s</span>}
        </div>
      </div>

      {node.error && (
        <div className="mb-6 p-3 border border-red-200 rounded bg-red-50">
          <p className="text-xs font-medium text-red-600 mb-1">Error</p>
          <pre className="text-sm text-red-500 whitespace-pre-wrap font-mono">
            {node.error}
          </pre>
        </div>
      )}

      {loading && (
        <div className="flex justify-center py-8">
          <Loader2 className="w-5 h-5 text-gray-300 animate-spin" />
        </div>
      )}

      {details && !loading && (
        <>
          <JsonSection title="Inputs" data={details.inputs} />
          <JsonSection title="Outputs" data={details.outputs} />
        </>
      )}
    </div>
  );
}

function JsonSection({
  title,
  data,
}: {
  title: string;
  data: Record<string, unknown>;
}) {
  const json = JSON.stringify(data, null, 2);

  const highlighted = json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(
      /("(?:[^"\\]|\\.)*")(?=\s*:)/g,
      '<span class="text-gray-400">$1</span>'
    )
    .replace(
      /:\s*("(?:[^"\\]|\\.)*")/g,
      ': <span class="text-green-400">$1</span>'
    )
    .replace(
      /:\s*(\d+\.?\d*)/g,
      ': <span class="text-amber-300">$1</span>'
    )
    .replace(
      /:\s*(true|false)/g,
      ': <span class="text-orange-300">$1</span>'
    )
    .replace(
      /:\s*(null)/g,
      ': <span class="text-gray-600">$1</span>'
    );

  return (
    <div className="mb-5">
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">
        {title}
      </p>
      <pre
        className="bg-gray-950 text-gray-300 p-4 rounded-md overflow-x-auto text-xs font-mono leading-relaxed"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </div>
  );
}
