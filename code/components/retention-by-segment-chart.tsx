"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts"

const data = [
  { segment: "Enterprise", month1: 99.2, month3: 97.8, month6: 96.5 },
  { segment: "Mid-Market", month1: 98.5, month3: 96.2, month6: 94.8 },
  { segment: "SMB", month1: 97.8, month3: 94.2, month6: 91.5 },
  { segment: "Startup", month1: 96.5, month3: 91.8, month6: 88.2 },
]

export function RetentionBySegmentChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Retention by Customer Segment</CardTitle>
        <CardDescription>Retention rates across different customer types</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis dataKey="segment" stroke="#ffffff" fontSize={12} />
            <YAxis stroke="#ffffff" fontSize={12} tickFormatter={(value) => `${value}%`} domain={[85, 100]} />
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
            <Bar dataKey="month1" fill="#22c55e" name="1 Month" radius={[4, 4, 0, 0]} />
            <Bar dataKey="month3" fill="#3b82f6" name="3 Months" radius={[4, 4, 0, 0]} />
            <Bar dataKey="month6" fill="#f59e0b" name="6 Months" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
