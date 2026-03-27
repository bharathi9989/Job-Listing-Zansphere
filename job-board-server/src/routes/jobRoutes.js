import express from "express";
import { jobs } from "../data/jobs.js";

const router = express.Router();

// ✅ GET ALL JOBS
router.get("/", (req, res) => {
  const { search, role, type, salary, sort } = req.query;

  let result = [...jobs];

  if (search) {
    result = result.filter((job) =>
      job.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  if (role) {
    result = result.filter((job) => job.role === role);
  }

  if (type) {
    result = result.filter((job) => job.type === type);
  }

  if (salary) {
    result = result.filter((job) => job.salary >= Number(salary));
  }

  if (sort === "low") {
    result.sort((a, b) => a.salary - b.salary);
  }

  if (sort === "high") {
    result.sort((a, b) => b.salary - a.salary);
  }

  res.json(result);
});

export default router;
