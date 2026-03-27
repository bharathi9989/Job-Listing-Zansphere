import { useState } from "react"
import useDebounce from "../hooks/useDebounce";
import { jobs } from "../data/jobs";

const Home = () => { 
    const [search, setSearch] = useState("");
    const [role, setRole] = useState("");
    const [type, setType] = useState("");
    const [salary, setSalary] = useState("");
    const [currentPage, setCurrentPage] = useState(1);


    const debouncedSearch = useDebounce(search)


    // Filter Logic

    const filteredJobs = jobs.filter((job) => { 
        return (
            job.title.toLowerCase().includes(debouncedSearch.toLowerCase()) && 
            (role ? job.role === role : true) &&
            (type ? job.type === type : true) &&
            (salary ? job.salary >= Number(salary):true )
        )
    })
}