import { DashboardNav } from "@/components/dashboard-nav"
import { StatCard } from "@/components/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, TrendingDown, TrendingUp, Target, AlertTriangle, CheckCircle2 } from "lucide-react"
import { ChurnTrendChart } from "@/components/churn-trend-chart"
import { RetentionCohortChart } from "@/components/retention-cohort-chart"
import { RiskSegmentChart } from "@/components/risk-segment-chart"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <DashboardNav />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Customer Analytics Overview</h1>
          <p className="text-muted-foreground">Real-time insights into churn prediction and retention metrics</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatCard
            title="Total Customers"
            value="12,458"
            change="+8.2% from last month"
            changeType="positive"
            icon={Users}
          />
          <StatCard
            title="Churn Rate"
            value="4.2%"
            change="-1.3% from last month"
            changeType="positive"
            icon={TrendingDown}
          />
          <StatCard
            title="Retention Rate"
            value="95.8%"
            change="+1.3% from last month"
            changeType="positive"
            icon={Target}
          />
          <StatCard
            title="At-Risk Customers"
            value="523"
            change="-12% from last month"
            changeType="positive"
            icon={AlertTriangle}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <ChurnTrendChart />
          <RetentionCohortChart />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <RiskSegmentChart />

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Recent Predictions</CardTitle>
              <CardDescription>Latest churn risk assessments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { id: "C-10234", name: "Acme Corp", risk: "High", score: 87, trend: "up" },
                  { id: "C-10189", name: "TechStart Inc", risk: "Medium", score: 62, trend: "stable" },
                  { id: "C-10156", name: "Global Solutions", risk: "Low", score: 23, trend: "down" },
                  { id: "C-10098", name: "Innovation Labs", risk: "High", score: 91, trend: "up" },
                  { id: "C-10045", name: "Digital Ventures", risk: "Low", score: 18, trend: "down" },
                ].map((customer) => (
                  <div
                    key={customer.id}
                    className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="font-medium text-foreground">{customer.name}</p>
                        <p className="text-sm text-muted-foreground">{customer.id}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Risk Score</p>
                        <p className="font-semibold text-foreground">{customer.score}%</p>
                      </div>
                      <div
                        className={cn(
                          "rounded-full px-3 py-1 text-xs font-medium",
                          customer.risk === "High"
                            ? "bg-destructive/20 text-destructive"
                            : customer.risk === "Medium"
                              ? "bg-accent/20 text-accent-foreground"
                              : "bg-chart-2/20 text-chart-2",
                        )}
                      >
                        {customer.risk} Risk
                      </div>
                      {customer.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-destructive" />
                      ) : customer.trend === "down" ? (
                        <TrendingDown className="h-4 w-4 text-chart-2" />
                      ) : (
                        <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
