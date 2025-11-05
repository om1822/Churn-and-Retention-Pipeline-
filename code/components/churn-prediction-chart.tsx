"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts"

const data = [
  { date: "Jan 1", high: 450, medium: 3800, low: 8200 },
  { date: "Jan 8", high: 480, medium: 3750, low: 8150 },
  { date: "Jan 15", high: 510, medium: 3700, low: 8100 },
  { date: "Jan 22", high: 495, medium: 3720, low: 8180 },
  { date: "Jan 29", high: 520, medium: 3680, low: 8220 },
  { date: "Feb 5", high: 505, medium: 3710, low: 8240 },
  { date: "Feb 12", high: 523, medium: 3701, low: 8234 },
]

export function ChurnPredictionChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Risk Trend Analysis</CardTitle>
        <CardDescription>Customer risk distribution over the past 6 weeks</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorHigh" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorMedium" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorLow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis dataKey="date" stroke="#ffffff" fontSize={12} />
            <YAxis stroke="#ffffff" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
                color: "hsl(var(--popover-foreground))",
              }}
            />
            <Legend wrapperStyle={{ color: "#ffffff" }} />
            <Area
              type="monotone"
              dataKey="high"
              stackId="1"
              stroke="#ef4444"
              strokeWidth={2}
              fill="url(#colorHigh)"
              name="High Risk"
            />
            <Area
              type="monotone"
              dataKey="medium"
              stackId="1"
              stroke="#f59e0b"
              strokeWidth={2}
              fill="url(#colorMedium)"
              name="Medium Risk"
            />
            <Area
              type="monotone"
              dataKey="low"
              stackId="1"
              stroke="#10b981"
              strokeWidth={2}
              fill="url(#colorLow)"
              name="Low Risk"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
