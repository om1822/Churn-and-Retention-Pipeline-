"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts"

const data = [
  { month: "Jul", day30: 98.5, day60: 96.2, day90: 93.1 },
  { month: "Aug", day30: 98.1, day60: 95.8, day90: 92.5 },
  { month: "Sep", day30: 98.3, day60: 96.0, day90: 92.8 },
  { month: "Oct", day30: 98.7, day60: 96.5, day90: 93.2 },
  { month: "Nov", day30: 98.4, day60: 96.3, day90: 92.9 },
  { month: "Dec", day30: 98.9, day60: 96.8, day90: 93.5 },
  { month: "Jan", day30: 98.2, day60: 96.1, day90: 92.4 },
]

export function RetentionRateChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Retention Rate Trends</CardTitle>
        <CardDescription>30, 60, and 90-day retention over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis dataKey="month" stroke="#ffffff" fontSize={12} />
            <YAxis stroke="#ffffff" fontSize={12} tickFormatter={(value) => `${value}%`} domain={[90, 100]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
                color: "hsl(var(--popover-foreground))",
              }}
              formatter={(value: number) => [`${value}%`, ""]}
            />
            <Legend wrapperStyle={{ color: "#ffffff" }} />
            <Line
              type="monotone"
              dataKey="day30"
              stroke="#22c55e"
              strokeWidth={3}
              name="30-Day"
              dot={{ fill: "#22c55e", r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="day60"
              stroke="#3b82f6"
              strokeWidth={3}
              name="60-Day"
              dot={{ fill: "#3b82f6", r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="day90"
              stroke="#f59e0b"
              strokeWidth={3}
              name="90-Day"
              dot={{ fill: "#f59e0b", r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
