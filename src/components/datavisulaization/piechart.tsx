import React from "react";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data01 = [
  { name: "Data", value: 700, color: "#3D3066" },
  { name: "Internet", value: 500, color: "#3D30664D" },
  { name: "NIN Services", value: 350, color: "#00D7F7" },
  { name: "Airtime", value: 180, color: "#F5F5F5" },
];

const Piechart = () => {
  return (
    <div className="flex flex-wrap items-start justify-between w-full p-4 space-x-4">
      {/* Pie Chart Section */}
      <div className="flex-1 max-w-full lg:max-w-2xl h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data01}
              cx="50%"
              cy="50%"
              outerRadius={125}
              innerRadius={75}
              paddingAngle={5}
            >
              {data01.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend Section */}
      <div className="flex-none pl-4 mt-14">
        <ul className="list-none p-0">
          {data01.map((entry, index) => (
            <li
              key={`legend-${index}`}
              className="flex items-center mb-6 text-lg font-medium"
            >
              <div
                className="w-9 h-9"
                style={{ backgroundColor: entry.color }}
              ></div>
              <span className="ml-3">{entry.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Piechart;