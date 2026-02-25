import { X } from "lucide-react";

interface SearchFilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  typeFilter: string;
  onTypeChange: (t: string) => void;
  statusFilter: string;
  onStatusChange: (s: string) => void;
  runTypes: string[];
  statuses: string[];
}

export function SearchFilterBar({
  searchQuery,
  onSearchChange,
  typeFilter,
  onTypeChange,
  statusFilter,
  onStatusChange,
  runTypes,
  statuses,
}: SearchFilterBarProps) {
  const hasFilters =
    searchQuery || typeFilter !== "all" || statusFilter !== "all";

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1 max-w-xs px-3 py-1.5 text-sm border border-gray-200 rounded-md
                   bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:bg-white
                   placeholder-gray-400 transition-colors"
      />

      <select
        value={typeFilter}
        onChange={(e) => onTypeChange(e.target.value)}
        className="text-sm border border-gray-200 rounded-md px-2 py-1.5 bg-gray-50
                   focus:outline-none focus:ring-1 focus:ring-gray-300"
      >
        <option value="all">All types</option>
        {runTypes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <select
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value)}
        className="text-sm border border-gray-200 rounded-md px-2 py-1.5 bg-gray-50
                   focus:outline-none focus:ring-1 focus:ring-gray-300"
      >
        <option value="all">All statuses</option>
        {statuses.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      {hasFilters && (
        <button
          onClick={() => {
            onSearchChange("");
            onTypeChange("all");
            onStatusChange("all");
          }}
          className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </>
  );
}
