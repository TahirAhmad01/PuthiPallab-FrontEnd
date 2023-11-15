const DashboardCard = ({ header, desc, totalWork }) => {
  return (
    <div className="bg-slate-300 rounded-lg p-4">
      <h1 className="text-2xl font-bold">{header}</h1>
      <h2 className="font-semibold">{totalWork}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default DashboardCard;
