const Skeleton = () => {
  return (
    <div className="animate-pulse border p-4 rounded">
      <div className="h-4 bg-gray-300 mb-2 w-1/2"></div>
      <div className="h-3 bg-gray-300 mb-1 w-1/3"></div>
      <div className="h-3 bg-gray-300 w-1/4"></div>
    </div>
  );
};

export default Skeleton;
    