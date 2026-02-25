import { Router } from "express";
import { traceTree } from "../data/traceTree";
import { singleRuns } from "../data/singleRuns";

const router = Router();

// GET /api/traces - Get list of available traces
router.get("/", async (req, res) => {
  // Add artificial delay to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (traceTree.length === 0) {
    return res.status(404).json({ error: "Trace not found" });
  }

  res.json(traceTree);
});

// GET /api/traces/:runId - Get single run details
router.get("/:runId", async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const { runId } = req.params;
  const run = singleRuns[runId];
  if (!run) {
    return res.status(404).json({ error: "Run not found" });
  }
  res.json(run);
});

export default router;
