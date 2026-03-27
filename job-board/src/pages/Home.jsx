import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import useDebounce from "../hooks/useDebounce";

import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import JobCard from "../components/JobCard";
import Pagination from "../components/Pagination";

const Home = () => {
  const [params, setParams] = useSearchParams();

  const [search, setSearch] = useState(params.get("search") || "");
  const [role, setRole] = useState(params.get("role") || "");
  const [type, setType] = useState(params.get("type") || "");
  const [salary, setSalary] = useState(params.get("salary") || "");
  const [sort, setSort] = useState(params.get("sort") || "");
  const [currentPage, setCurrentPage] = useState(
    Number(params.get("page")) || 1,
  );

  const [jobsData, setJobsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(search);

  // 🔥 Sync URL
  useEffect(() => {
    setParams({ search, role, type, salary, sort, page: currentPage });
  }, [search, role, type, salary, sort, currentPage]);

  // 🔥 Fetch from backend
  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);

      try {
        const query = new URLSearchParams({
          search: debouncedSearch,
          role,
          type,
          salary,
          sort,
        });

        const res = await fetch(`http://localhost:2021/api/jobs?${query}`);
        const data = await res.json();

        setJobsData(data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }

      setLoading(false);
    };

    fetchJobs();
  }, [debouncedSearch, role, type, salary, sort]);

  // 🔥 Reset page on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, role, type, salary, sort]);

  // 🔥 Pagination
  const itemsPerPage = 5;
  const start = (currentPage - 1) * itemsPerPage;
  const paginatedJobs = jobsData.slice(start, start + itemsPerPage);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Job Board</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <Filters
        setRole={setRole}
        setType={setType}
        setSalary={setSalary}
        setSort={setSort}
      />

      <div className="mt-6 space-y-4">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : paginatedJobs.length === 0 ? (
          <p className="text-center text-gray-500">No jobs found</p>
        ) : (
          paginatedJobs.map((job) => <JobCard key={job.id} job={job} />)
        )}
      </div>

      <div className="mt-6 flex justify-center">
        <Pagination
          total={jobsData.length}
          perPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Home;
