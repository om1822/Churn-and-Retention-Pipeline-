"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

const data = [
  { cohort: "Q1 2024", month1: 100, month3: 92, month6: 87 },
  { cohort: "Q2 2024", month1: 100, month3: 94, month6: 89 },
  { cohort: "Q3 2024", month1: 100, month3: 95, month6: 91 },
  { cohort: "Q4 2024", month1: 100, month3: 96, month6: 0 },
]

export function RetentionCohortChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Retention Cohort Analysis</CardTitle>
        <CardDescription>Customer retention by cohort over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
            <XAxis dataKey="cohort" stroke="#ffffff" fontSize={12} />
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
            <Bar dataKey="month1" fill="#22c55e" name="Month 1" radius={[4, 4, 0, 0]} />
            <Bar dataKey="month3" fill="#3b82f6" name="Month 3" radius={[4, 4, 0, 0]} />
            <Bar dataKey="month6" fill="#f59e0b" name="Month 6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
