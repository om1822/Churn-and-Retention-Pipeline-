"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { segment: "Enterprise", revenue: 2.8 },
  { segment: "Growth", revenue: 3.2 },
  { segment: "Steady", revenue: 4.1 },
  { segment: "At-Risk", revenue: 1.2 },
]

export function SegmentPerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue by Segment</CardTitle>
        <CardDescription>Monthly recurring revenue</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <XAxis dataKey="segment" stroke="#ffffff" fontSize={11} />
            <YAxis stroke="#ffffff" fontSize={11} tickFormatter={(value) => `$${value}M`} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
                color: "hsl(var(--popover-foreground))",
              }}
              formatter={(value: number) => [`$${value}M`, "Revenue"]}
            />
            <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
