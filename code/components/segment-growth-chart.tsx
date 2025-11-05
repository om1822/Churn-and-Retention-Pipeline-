"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Aug", growth: 5 },
  { month: "Sep", growth: 8 },
  { month: "Oct", growth: 12 },
  { month: "Nov", growth: 15 },
  { month: "Dec", growth: 18 },
  { month: "Jan", growth: 16 },
]

export function SegmentGrowthChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Overall Growth</CardTitle>
        <CardDescription>Customer base growth rate</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis dataKey="month" stroke="#ffffff" fontSize={11} />
            <YAxis stroke="#ffffff" fontSize={11} tickFormatter={(value) => `${value}%`} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
                color: "hsl(var(--popover-foreground))",
              }}
              formatter={(value: number) => [`${value}%`, "Growth"]}
            />
            <Line type="monotone" dataKey="growth" stroke="#22c55e" strokeWidth={3} dot={{ fill: "#22c55e", r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
