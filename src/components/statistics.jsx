import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Assignment 1", mark: 60 },
  { name: "Assignment 2", mark: 50 },
  { name: "Assignment 3", mark: 60 },
  { name: "Assignment 4", mark: 60 },
  { name: "Assignment 5", mark: 50 },
  { name: "Assignment 6", mark: 50 },
  { name: "Assignment 7", mark: 40 },
];

// ...

class Statistics extends PureComponent {
  render() {
    return (
      <div>
        <h2 className="mt-8 mb-8">Assignment Marks</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="mark" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Statistics;
