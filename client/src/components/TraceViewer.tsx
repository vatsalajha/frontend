import { useEffect, useMemo, useState } from "react";
import { RunContent, RunNode } from "../types";
import { buildTree, filterTree } from "../utils/tree";
import { RunDetailsPanel } from "./RunDetailsPanel";
import { SearchFilterBar } from "./SearchFilterBar";
import { TraceTree } from "./TraceTree";

export function TraceViewer() {
  const [flatNodes, setFlatNodes] = useState<RunNode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedRunId, setSelectedRunId] = useState<string | null>(null);
  const [runDetails, setRunDetails] = useState<RunContent | null>(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());

  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    fetch("/api/traces")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: RunNode[]) => {
        setFlatNodes(data);
        setExpandedNodes(new Set(data.map((n) => n.id)));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const tree = useMemo(() => buildTree(flatNodes), [flatNodes]);

  const filteredTree = useMemo(() => {
    if (!searchQuery && typeFilter === "all" && statusFilter === "all") {
      return tree;
    }
    return filterTree(tree, (node) => {
      const matchesSearch =
        !searchQuery ||
        node.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = typeFilter === "all" || node.run_type === typeFilter;
      const matchesStatus =
        statusFilter === "all" || node.status === statusFilter;
      return matchesSearch && matchesType && matchesStatus;
    });
  }, [tree, searchQuery, typeFilter, statusFilter]);

  const runTypes = useMemo(
    () => [...new Set(flatNodes.map((n) => n.run_type))].sort(),
    [flatNodes]
  );
  const statuses = useMemo(
    () => [...new Set(flatNodes.map((n) => n.status))].sort(),
    [flatNodes]
  );

  useEffect(() => {
    if (!selectedRunId) {
      setRunDetails(null);
      return;
    }
    setDetailsLoading(true);
    fetch(`/api/traces/${selectedRunId}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: RunContent) => {
        setRunDetails(data);
        setDetailsLoading(false);
      })
      .catch(() => {
        setRunDetails(null);
        setDetailsLoading(false);
      });
  }, [selectedRunId]);

  const toggleNode = (nodeId: string) => {
    setExpandedNodes((prev) => {
      const next = new Set(prev);
      if (next.has(nodeId)) next.delete(nodeId);
      else next.add(nodeId);
      return next;
    });
  };

  const selectedNode = flatNodes.find((n) => n.id === selectedRunId) || null;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="animate-spin rounded-full h-5 w-5 border-2 border-gray-200 border-t-gray-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <p className="text-sm text-gray-400">Failed to load traces</p>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-white">
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-gray-100">
        <h1 className="text-sm font-medium text-gray-900 mr-3">
          Trace Viewer
        </h1>
        <SearchFilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          typeFilter={typeFilter}
          onTypeChange={setTypeFilter}
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
          runTypes={runTypes}
          statuses={statuses}
        />
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-2/5 border-r border-gray-100 overflow-y-auto">
          {filteredTree.length === 0 ? (
            <div className="p-8 text-center text-gray-300 text-sm">
              No matching runs
            </div>
          ) : (
            <TraceTree
              nodes={filteredTree}
              selectedRunId={selectedRunId}
              expandedNodes={expandedNodes}
              onSelect={setSelectedRunId}
              onToggle={toggleNode}
            />
          )}
        </div>
        <div className="w-3/5 overflow-y-auto bg-gray-50/50">
          <RunDetailsPanel
            node={selectedNode}
            details={runDetails}
            loading={detailsLoading}
          />
        </div>
      </div>
    </div>
  );
}
