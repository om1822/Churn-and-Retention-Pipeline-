"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

const data = [
  { segment: "Enterprise", lifetime: 36.2, value: 125000 },
  { segment: "Mid-Market", lifetime: 28.5, value: 45000 },
  { segment: "SMB", lifetime: 18.3, value: 12000 },
  { segment: "Startup", lifetime: 14.7, value: 6500 },
]

export function CustomerLifetimeChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Lifetime by Segment</CardTitle>
        <CardDescription>Average customer lifetime in months</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis type="number" stroke="#ffffff" fontSize={12} />
            <YAxis dataKey="segment" type="category" stroke="#ffffff" fontSize={12} width={80} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
                color: "hsl(var(--popover-foreground))",
              }}
              formatter={(value: number, name: string) => {
                if (name === "lifetime") return [`${value} months`, "Avg Lifetime"]
                return [`$${value.toLocaleString()}`, "LTV"]
              }}
            />
            <Bar dataKey="lifetime" fill="#3b82f6" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
