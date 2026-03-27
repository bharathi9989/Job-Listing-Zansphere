import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import useDebounce from "../hooks/useDebounce";
import { jobs } from "../data/jobs";

import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import JobCard from "../components/JobCard";
import Pagination from "../components/Pagination";

const Home = () => {
  // 🔥 URL Params
  const [params, setParams] = useSearchParams();

  // 🔥 State Initialization from URL
  const [search, setSearch] = useState(params.get("search") || "");
  const [role, setRole] = useState(params.get("role") || "");
  const [type, setType] = useState(params.get("type") || "");
  const [salary, setSalary] = useState(params.get("salary") || "");
  const [sort, setSort] = useState(params.get("sort") || "");
  const [currentPage, setCurrentPage] = useState(
    Number(params.get("page")) || 1,
  );

  // 🔥 Debounce
  const debouncedSearch = useDebounce(search);

  // 🔥 Sync state → URL
  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const query = new URLSearchParams({
        search,
        role,
        type,
        salary,
        sort,
      });

      const res = await fetch(`http://localhost:5000/api/jobs?${query}`);
      const data = await res.json();
      setJobsData(data);
    };

    fetchJobs();
  }, [debouncedSearch, role, type, salary, sort]);

  // 🔥 Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, role, type, salary, sort]);

  // 🔥 Filter + Sort (Optimized)
  const filteredJobs = useMemo(() => {
    let result = jobs.filter((job) => {
      return (
        job.title.toLowerCase().includes(debouncedSearch.toLowerCase()) &&
        (role ? job.role === role : true) &&
        (type ? job.type === type : true) &&
        (salary ? job.salary >= Number(salary) : true)
      );
    });

    // Sorting
    if (sort === "low") {
      result.sort((a, b) => a.salary - b.salary);
    } else if (sort === "high") {
      result.sort((a, b) => b.salary - a.salary);
    }

    return result;
  }, [debouncedSearch, role, type, salary, sort]);

  // 🔥 Pagination
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedJobs = filteredJobs.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Job Board</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <Filters
        setRole={setRole}
        setType={setType}
        setSalary={setSalary}
        setSort={setSort}
      />

      <div className="mt-6 space-y-4">
        {paginatedJobs.length === 0 ? (
          <p className="text-center text-gray-500">No jobs found</p>
        ) : (
          paginatedJobs.map((job) => <JobCard key={job.id} job={job} />)
        )}
      </div>

      <div className="mt-6 flex justify-center">
        <Pagination
          total={filteredJobs.length}
          perPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Home;
