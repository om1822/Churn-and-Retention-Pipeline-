"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Mail, Phone } from "lucide-react"

const customers = [
  {
    id: "C-10234",
    name: "Acme Corp",
    email: "contact@acme.com",
    riskScore: 87,
    risk: "High",
    trend: "up",
    factors: ["Low engagement", "Payment delays", "Support tickets"],
    lastActivity: "2 days ago",
  },
  {
    id: "C-10189",
    name: "TechStart Inc",
    email: "hello@techstart.io",
    riskScore: 62,
    risk: "Medium",
    trend: "stable",
    factors: ["Decreased usage", "Feature requests"],
    lastActivity: "5 hours ago",
  },
  {
    id: "C-10156",
    name: "Global Solutions",
    email: "info@globalsol.com",
    riskScore: 23,
    risk: "Low",
    trend: "down",
    factors: ["Active user", "Recent upgrade"],
    lastActivity: "1 hour ago",
  },
  {
    id: "C-10098",
    name: "Innovation Labs",
    email: "team@innovlabs.com",
    riskScore: 91,
    risk: "High",
    trend: "up",
    factors: ["No recent login", "Contract ending", "Competitor mention"],
    lastActivity: "7 days ago",
  },
  {
    id: "C-10045",
    name: "Digital Ventures",
    email: "contact@digiven.com",
    riskScore: 18,
    risk: "Low",
    trend: "down",
    factors: ["High engagement", "Positive feedback"],
    lastActivity: "30 minutes ago",
  },
  {
    id: "C-10012",
    name: "CloudTech Systems",
    email: "support@cloudtech.io",
    riskScore: 74,
    risk: "High",
    trend: "up",
    factors: ["Budget concerns", "Usage decline"],
    lastActivity: "3 days ago",
  },
]

export function CustomerRiskTable() {
  return (
    <div className="space-y-4">
      {customers.map((customer) => (
        <div
          key={customer.id}
          className="flex flex-col gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-accent/5"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h3 className="font-semibold text-foreground">{customer.name}</h3>
                <Badge
                  variant={
                    customer.risk === "High" ? "destructive" : customer.risk === "Medium" ? "secondary" : "outline"
                  }
                  className={
                    customer.risk === "Low"
                      ? "border-chart-2 bg-chart-2/10 text-chart-2"
                      : customer.risk === "Medium"
                        ? "border-chart-4 bg-chart-4/10 text-chart-4"
                        : ""
                  }
                >
                  {customer.risk} Risk
                </Badge>
                {customer.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-destructive" />
                ) : customer.trend === "down" ? (
                  <TrendingDown className="h-4 w-4 text-chart-2" />
                ) : null}
              </div>
              <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                <span>{customer.id}</span>
                <span>•</span>
                <span>{customer.email}</span>
                <span>•</span>
                <span>Last active: {customer.lastActivity}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-foreground">{customer.riskScore}%</div>
              <div className="text-xs text-muted-foreground">Risk Score</div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {customer.factors.map((factor, index) => (
                <span key={index} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                  {factor}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                <Mail className="h-3 w-3" />
                Email
              </Button>
              <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                <Phone className="h-3 w-3" />
                Call
              </Button>
              <Button size="sm">View Details</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
