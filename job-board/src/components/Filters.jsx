const Filters = ({ setRole, setType, setSalary, setSort }) => {
  return (
    <div className="filters">
      <select onChange={(e) => setRole(e.target.value)}>
        <option value="">Role</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Fullstack">Fullstack</option>
      </select>

      <select onChange={(e) => setType(e.target.value)}>
        <option value="">Type</option>
        <option value="Remote">Remote</option>
        <option value="Onsite">Onsite</option>
      </select>

      <select onChange={(e) => setSalary(e.target.value)}>
        <option value="">Salary</option>
        <option value="500000">Above 5 LPA</option>
        <option value="800000">Above 8 LPA</option>
      </select>

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>

      <button
        className="reset-btn"
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
