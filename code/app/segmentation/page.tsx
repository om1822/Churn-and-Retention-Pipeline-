import { DashboardNav } from "@/components/dashboard-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Activity, Building2, Rocket, Briefcase } from "lucide-react"
import { SegmentDistributionChart } from "@/components/segment-distribution-chart"
import { SegmentPerformanceChart } from "@/components/segment-performance-chart"
import { SegmentGrowthChart } from "@/components/segment-growth-chart"

const segments = [
  {
    name: "Enterprise Champions",
    icon: Building2,
    color: "chart-1",
    customers: 234,
    revenue: "$2.8M",
    churnRate: "2.2%",
    growth: "+12%",
    characteristics: ["High engagement", "Long contracts", "Multiple users"],
    avgLifetime: "36 months",
    ltv: "$125,000",
  },
  {
    name: "Growth Accelerators",
    icon: Rocket,
    color: "chart-2",
    customers: 892,
    revenue: "$3.2M",
    churnRate: "3.8%",
    growth: "+24%",
    characteristics: ["Rapid expansion", "Feature adoption", "Referrals"],
    avgLifetime: "28 months",
    ltv: "$45,000",
  },
  {
    name: "Steady Performers",
    icon: Briefcase,
    color: "chart-3",
    customers: 3401,
    revenue: "$4.1M",
    churnRate: "4.5%",
    growth: "+8%",
    characteristics: ["Consistent usage", "Stable revenue", "Low support"],
    avgLifetime: "24 months",
    ltv: "$18,000",
  },
  {
    name: "At-Risk Explorers",
    icon: Activity,
    color: "chart-4",
    customers: 1523,
    revenue: "$1.2M",
    churnRate: "8.2%",
    growth: "-5%",
    characteristics: ["Low engagement", "Trial users", "Price sensitive"],
    avgLifetime: "12 months",
    ltv: "$6,500",
  },
]

export default function SegmentationPage() {
  return (
    <div className="flex min-h-screen">
      <DashboardNav />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Customer Segmentation</h1>
          <p className="text-muted-foreground">
            AI-powered customer segments based on behavior, value, and engagement patterns
          </p>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <SegmentDistributionChart />
          <SegmentPerformanceChart />
          <SegmentGrowthChart />
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment) => {
            const Icon = segment.icon
            return (
              <Card key={segment.name} className="relative overflow-hidden">
                <div
                  className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full opacity-10"
                  style={{ backgroundColor: `hsl(var(--${segment.color}))` }}
                />
                <CardHeader className="pb-3">
                  <div className="mb-2 flex items-center gap-2">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `hsl(var(--${segment.color}) / 0.1)` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: `hsl(var(--${segment.color}))` }} />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{segment.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Customers</span>
                    <span className="font-semibold text-foreground">{segment.customers}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Revenue</span>
                    <span className="font-semibold text-foreground">{segment.revenue}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Churn Rate</span>
                    <span className="font-semibold text-foreground">{segment.churnRate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Growth</span>
                    <Badge
                      variant={segment.growth.startsWith("+") ? "outline" : "destructive"}
                      className={segment.growth.startsWith("+") ? "border-chart-2 bg-chart-2/10 text-chart-2" : ""}
                    >
                      {segment.growth}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {segments.map((segment) => {
            const Icon = segment.icon
            return (
              <Card key={segment.name}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `hsl(var(--${segment.color}) / 0.1)` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: `hsl(var(--${segment.color}))` }} />
                    </div>
                    <div>
                      <CardTitle>{segment.name}</CardTitle>
                      <CardDescription>{segment.customers} customers</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Avg Lifetime</p>
                      <p className="text-lg font-semibold text-foreground">{segment.avgLifetime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Lifetime Value</p>
                      <p className="text-lg font-semibold text-foreground">{segment.ltv}</p>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-medium text-foreground">Key Characteristics</p>
                    <div className="flex flex-wrap gap-2">
                      {segment.characteristics.map((char, index) => (
                        <span key={index} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      View Customers
                    </Button>
                    <Button size="sm" className="flex-1">
                      Create Campaign
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </main>
    </div>
  )
}
