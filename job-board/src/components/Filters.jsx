const Filters = ({ setRole, setType, setSalary }) => {
  return (
    <div>
      <select onChange={(e) => setRole(e.target.value)}>
        <option value="">All Roles</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Fullstack">Fullstack</option>
      </select>

      <select onChange={(e) => setType(e.target.value)}>
        <option value="">All Types</option>
        <option value="Remote">Remote</option>
        <option value="Onsite">Onsite</option>
      </select>

      <select onChange={(e) => setSalary(e.target.value)}>
        <option value="">All Salaries</option>
        <option value="500000">Above 5 LPA</option>
        <option value="800000">Above 8 LPA</option>
      </select>

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="low">Salary Low → High</option>
        <option value="high">Salary High → Low</option>
      </select>
    </div>
  );
};

export default Filters;
