"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Enterprise Champions", value: 234, color: "#3b82f6" },
  { name: "Growth Accelerators", value: 892, color: "#22c55e" },
  { name: "Steady Performers", value: 3401, color: "#f59e0b" },
  { name: "At-Risk Explorers", value: 1523, color: "#ef4444" },
]

export function SegmentDistributionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Segment Distribution</CardTitle>
        <CardDescription>Customer count by segment</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={2} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
                color: "hsl(var(--popover-foreground))",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
