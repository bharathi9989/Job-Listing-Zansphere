import { useState } from "react"
import useDebounce from "../hooks/useDebounce";
import { jobs } from "../data/jobs";

const Home = () => {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const debouncedSearch = useDebounce(search);

  // Filter Logic

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(debouncedSearch.toLowerCase()) &&
      (role ? job.role === role : true) &&
      (type ? job.type === type : true) &&
      (salary ? job.salary >= Number(salary) : true)
    );
  });

  // 🔥 PAGINATION
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedJobs = filteredJobs.slice(
    startIndex,
    startIndex + itemsPerPage,
  );
    
    return (
      <div>
        <h1>Job Board</h1>

        <SearchBar search={search} setSearch={setSearch} />

        <Filters setRole={setRole} setType={setType} setSalary={setSalary} />

        {paginatedJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}

        <Pagination
          total={filteredJobs.length}
          perPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    );
};

export default Home;