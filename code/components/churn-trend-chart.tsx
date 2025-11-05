"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

const data = [
  { month: "Jan", churnRate: 5.2, predicted: 5.1 },
  { month: "Feb", churnRate: 4.8, predicted: 4.9 },
  { month: "Mar", churnRate: 5.5, predicted: 5.3 },
  { month: "Apr", churnRate: 4.9, predicted: 5.0 },
  { month: "May", churnRate: 4.5, predicted: 4.6 },
  { month: "Jun", churnRate: 4.2, predicted: 4.3 },
  { month: "Jul", churnRate: 4.0, predicted: 4.1 },
]

export function ChurnTrendChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Churn Rate Trends</CardTitle>
        <CardDescription>Actual vs predicted churn over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis dataKey="month" stroke="#ffffff" fontSize={12} />
            <YAxis stroke="#ffffff" fontSize={12} tickFormatter={(value) => `${value}%`} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
                color: "hsl(var(--popover-foreground))",
              }}
              formatter={(value: number) => [`${value}%`, ""]}
            />
            <Line
              type="monotone"
              dataKey="churnRate"
              stroke="#ef4444"
              strokeWidth={3}
              name="Actual"
              dot={{ fill: "#ef4444", r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="#3b82f6"
              strokeWidth={3}
              strokeDasharray="5 5"
              name="Predicted"
              dot={{ fill: "#3b82f6", r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
