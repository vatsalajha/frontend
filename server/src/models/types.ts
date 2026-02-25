// Trace tree types
export interface RunNode {
  name: string;
  run_type: string;
  start_time: string;
  end_time: string | null;
  error: string | null;
  parent_run_id: string | null;
  trace_id: string;
  total_tokens?: number | null;
  total_cost?: number | null;
  id: string;
  status: string;
}

export type TraceTree = RunNode[];

export interface RunContent {
  id: string;
  inputs: Record<string, any>;
  outputs: Record<string, any>;
}

// Trace list item for the GET /api/traces endpoint
export interface TraceListItem {
  id: string;
  name: string;
}
