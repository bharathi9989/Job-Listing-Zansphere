const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>Role: {job.role}</p>
      <p>Type: {job.type}</p>
      <p className="salary">₹{job.salary.toLocaleString()}</p>
    </div>
  );
};

export default JobCard;
