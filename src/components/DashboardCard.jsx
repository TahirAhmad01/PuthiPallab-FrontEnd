import { prototype } from "postcss/lib/previous-map";

const DashboardCard = ({ header, desc, totalWork }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <h1 className="text-2xl font-bold">{header}</h1>
      <h2 className="font-semibold">{totalWork}</h2>
      <p>{desc}</p>
    </div>
  );
};

DashboardCard.propTypes = {
  header: prototype.any,
  desc: prototype.any,
  totalWork: prototype.number,
};

export default DashboardCard;
