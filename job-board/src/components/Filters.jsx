const Filters = ({ setRole, setType, setSalary, setSort }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
      <select
        onChange={(e) => setRole(e.target.value)}
        className="p-2 border rounded cursor-pointer"
      >
        <option value="">Role</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Fullstack">Fullstack</option>
      </select>

      <select
        onChange={(e) => setType(e.target.value)}
        className="p-2 border rounded cursor-pointer"
      >
        <option value="">Type</option>
        <option value="Remote">Remote</option>
        <option value="Onsite">Onsite</option>
      </select>

      <select
        onChange={(e) => setSalary(e.target.value)}
        className="p-2 border rounded cursor-pointer"
      >
        <option value="">Salary</option>
        <option value="500000">Above 5 LPA</option>
        <option value="800000">Above 8 LPA</option>
      </select>

      <select
        onChange={(e) => setSort(e.target.value)}
        className="p-2 border rounded cursor-pointer"
      >
        <option value="">Sort</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>

      <button
        className="col-span-2 md:col-span-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition cursor-pointer"
        onClick={() => {
          setRole("");
          setType("");
          setSalary("");
          setSort("");
        }}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default Filters;
