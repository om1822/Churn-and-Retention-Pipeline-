import { DashboardNav } from "@/components/dashboard-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, TrendingUp, TrendingDown, AlertTriangle, Filter } from "lucide-react"
import { ChurnPredictionChart } from "@/components/churn-prediction-chart"
import { CustomerRiskTable } from "@/components/customer-risk-table"

export default function ChurnPredictionPage() {
  return (
    <div className="flex min-h-screen">
      <DashboardNav />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Churn Prediction</h1>
          <p className="text-muted-foreground">
            AI-powered predictions to identify at-risk customers before they churn
          </p>
        </div>

        <div className="mb-6 flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search customers by name or ID..." className="pl-10" />
          </div>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">High Risk</CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">523</div>
              <p className="text-xs text-destructive">
                <TrendingUp className="inline h-3 w-3" /> +12 from yesterday
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Medium Risk</CardTitle>
              <AlertTriangle className="h-4 w-4 text-chart-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">3,701</div>
              <p className="text-xs text-chart-2">
                <TrendingDown className="inline h-3 w-3" /> -45 from yesterday
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Low Risk</CardTitle>
              <AlertTriangle className="h-4 w-4 text-chart-2" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">8,234</div>
              <p className="text-xs text-chart-2">
                <TrendingUp className="inline h-3 w-3" /> +33 from yesterday
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <ChurnPredictionChart />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Customer Risk Analysis</CardTitle>
            <CardDescription>Detailed churn predictions with risk factors and recommended actions</CardDescription>
          </CardHeader>
          <CardContent>
            <CustomerRiskTable />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
