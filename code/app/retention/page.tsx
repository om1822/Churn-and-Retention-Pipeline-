import { DashboardNav } from "@/components/dashboard-nav"
import { StatCard } from "@/components/stat-card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, TrendingUp, Calendar, Award, Zap } from "lucide-react"
import { RetentionCohortChart } from "@/components/retention-cohort-chart"
import { RetentionRateChart } from "@/components/retention-rate-chart"
import { CustomerLifetimeChart } from "@/components/customer-lifetime-chart"
import { RetentionBySegmentChart } from "@/components/retention-by-segment-chart"

export default function RetentionPage() {
  return (
    <div className="flex min-h-screen">
      <DashboardNav />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Retention KPIs</h1>
          <p className="text-muted-foreground">Track customer retention metrics and lifetime value across cohorts</p>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Overall Retention"
            value="95.8%"
            change="+1.3% from last month"
            changeType="positive"
            icon={Target}
          />
          <StatCard
            title="30-Day Retention"
            value="98.2%"
            change="+0.8% from last month"
            changeType="positive"
            icon={Calendar}
          />
          <StatCard
            title="90-Day Retention"
            value="92.4%"
            change="+2.1% from last month"
            changeType="positive"
            icon={Award}
          />
          <StatCard
            title="Avg Customer Lifetime"
            value="24.3 mo"
            change="+1.2 mo from last quarter"
            changeType="positive"
            icon={Zap}
          />
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-2">
          <RetentionRateChart />
          <CustomerLifetimeChart />
        </div>

        <div className="mb-8">
          <RetentionCohortChart />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <RetentionBySegmentChart />

          <Card>
            <CardHeader>
              <CardTitle>Retention Insights</CardTitle>
              <CardDescription>Key findings and recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border border-chart-2/30 bg-chart-2/5 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-chart-2" />
                    <h4 className="font-semibold text-foreground">Strong Q4 Performance</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Q4 2024 cohort shows 96% retention at 3 months, highest in 2 years. New onboarding flow is driving
                    engagement.
                  </p>
                </div>

                <div className="rounded-lg border border-chart-4/30 bg-chart-4/5 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4 text-chart-4" />
                    <h4 className="font-semibold text-foreground">Enterprise Segment Leading</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Enterprise customers have 97.8% retention vs 94.2% for SMB. Focus on expanding enterprise features.
                  </p>
                </div>

                <div className="rounded-lg border border-chart-1/30 bg-chart-1/5 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Award className="h-4 w-4 text-chart-1" />
                    <h4 className="font-semibold text-foreground">Loyalty Program Impact</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Customers in loyalty program show 8.3% higher retention. Consider expanding program benefits.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted/30 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4 text-muted-foreground" />
                    <h4 className="font-semibold text-foreground">Action Required</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Q1 2024 cohort retention dropped to 87% at 6 months. Review customer feedback from that period.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
