const JobCard = ({ job }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{job.title}</h3>
      <p className="text-gray-600">Role: {job.role}</p>
      <p className="text-gray-600">Type: {job.type}</p>
      <p className="text-blue-600 font-bold mt-2">
        ₹{job.salary.toLocaleString()}
      </p>
    </div>
  );
};

export default JobCard;
