import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function IqamaStats() {
  const iqamaDistribution = [
    { name: "Active", value: 33.3, color: "#2E7D32" },
    { name: "Expiring Soon", value: 33.3, color: "#FBC02D" },
    { name: "Expired", value: 33.3, color: "#C62828" },
  ];

  const expiryDays = [
    { name: "1-30 Days", count: 27 },
    { name: "30-60 Days", count: 55 },
    { name: "60 and Above", count: 61 },
  ];

  const expiryTimeline = [
    { year: "2025", count: 27 },
    { year: "2024", count: 43 },
    { year: "2023", count: 63 },
    { year: "2022", count: 20 },
    { year: "2021", count: 46 },
    { year: "2020", count: 55 },
  ];

  return (
    <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-4 bg-white shadow rounded-lg">
        <h2 className="text-lg font-semibold mb-4 text-[#1A6D73]">Iqama Status Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={iqamaDistribution} cx="50%" cy="50%" label innerRadius={50} outerRadius={80} fill="#8884d8" dataKey="value">
              {iqamaDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="p-4 bg-white shadow rounded-lg">
        <h2 className="text-lg font-semibold mb-4 text-[#1A6D73]">Remaining days for Iqama expiry</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={expiryDays}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#2E7D32" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="col-span-1 md:col-span-2 p-4 bg-white shadow rounded-lg w-full text-center">
        <h2 className="text-lg font-semibold mb-4 text-[#1A6D73]">Iqama Expiry Timeline</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={expiryTimeline} layout="vertical">
            <YAxis dataKey="year" type="category" />
            <XAxis type="number" />
            <Tooltip />
            <Bar dataKey="count" fill="#00695C" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
