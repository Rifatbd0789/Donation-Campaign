import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { getLocalstorage } from "../Utilities/localStorage";

const Statistics = () => {
  const prev = getLocalstorage();
  const totalDonations = 12;

  const data = [
    { name: "Your Donations", value: prev.length },
    { name: "Remaining Donation", value: totalDonations - prev.length },
  ];

  const COLORS = ["#00C49F", "#FF444A"];

  return (
    <div className="font-bold text-lg" style={{ width: "100%", height: 500 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(2)}%`
            }
            outerRadius={200}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
