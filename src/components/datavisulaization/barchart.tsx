import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import NewNairaIcon from "@/assets/icons/nairaIcon";

// Actual values
const data = [
  { name: "JAN", uv: 180, pv: 220, amt: 200 },
  { name: "FEB", uv: 130, pv: 210, amt: 170 },
  { name: "MAR", uv: 200, pv: 190, amt: 220 },
  { name: "APR", uv: 240, pv: 170, amt: 210 },
  { name: "MAY", uv: 180, pv: 240, amt: 230 },
  { name: "JUN", uv: 190, pv: 180, amt: 210 },
  { name: "JUL", uv: 220, pv: 200, amt: 200 },
];

const Barchart = () => {

  const legendFormatter = (value:any) => {
    return (
      <span
        style={{
          fontWeight: 500,
          fontSize: "20px",
          color: "black",
          marginRight: "20px",
        }}
      >
        {value === "pv" ? "Agent" : "Individual"} 
      </span>
    );
  };

 
  const tooltipFormatter = (value:any) => `₦ ${value}`;

  return (
    <div className="font-[500]">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid stroke="#ccc" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis
            domain={[0, 250]}
            ticks={[0, 50, 100, 150, 200, 250]}
            tickFormatter={(value) => `₦ ${value}K`}
          />
          <Tooltip formatter={tooltipFormatter} />
          <Legend
            layout="horizontal"
            verticalAlign="top"
            align="right"
            iconType="rect"
            iconSize={35}
            formatter={legendFormatter}
            wrapperStyle={{ paddingBottom: "10px" }} // Applied bottom padding
          />
          <defs>
            <linearGradient id="gradientUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3D3066" />
              <stop offset="100%" stopColor="#7A60CC" />
            </linearGradient>
          </defs>
        
          <Bar
            dataKey="uv" 
            fill="url(#gradientUv)"
            barSize={50}
            radius={[8, 8, 0, 0]}
          />
          <Bar
            dataKey="pv"
            fill="#3D30661A"
            barSize={50}
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;
