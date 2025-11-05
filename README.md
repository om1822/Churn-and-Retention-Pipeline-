# Churn and Retention Analysis Dashboard

A comprehensive analytics platform for predicting customer churn and analyzing retention metrics using machine learning models and interactive visualizations. Built for leadership decision-making with enterprise-grade dashboards.

![Dashboard Preview](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)

## 🎯 Features

### 📊 Dashboard Overview
- Real-time KPI tracking (Total Customers, Churn Rate, Retention Rate, Customer LTV)
- Interactive trend visualizations
- Risk distribution analysis with color-coded segments
- Cohort retention tracking

### 🔮 Churn Prediction
- AI-powered risk scoring using Decision Trees and Random Forests
- Customer risk classification (High, Medium, Low)
- Detailed customer risk profiles with actionable insights
- Searchable customer database with risk trends
- Recommended retention actions for at-risk customers

### 📈 Retention KPIs
- Multi-period retention rate tracking (30/60/90 days)
- Customer Lifetime Value (CLV) analysis
- Segment-based retention comparison
- Cohort analysis with monthly breakdowns
- Actionable insights and recommendations

### 👥 Customer Segmentation
- AI-driven customer segmentation
- Four key segments: Champions, At-Risk, Growth Potential, New Customers
- Segment performance metrics (Revenue, Churn Rate, LTV, Growth)
- Visual distribution and trend analysis
- Strategic recommendations per segment

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Charts:** Recharts
- **UI Components:** shadcn/ui
- **Icons:** Lucide React

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
\`\`\`bash
git clone https://github.com/yourusername/churn-retention-dashboard.git
cd churn-retention-dashboard
\`\`\`

2. **Install dependencies**
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. **Run the development server**
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Usage

### Navigation
The dashboard includes four main sections accessible via the sidebar:

1. **Overview** (`/`) - High-level metrics and trends
2. **Churn Prediction** (`/churn`) - AI-powered customer risk analysis
3. **Retention** (`/retention`) - Detailed retention KPIs and cohort analysis
4. **Segmentation** (`/segmentation`) - Customer segment performance

### Key Metrics Explained

- **Churn Rate:** Percentage of customers who stopped using the service
- **Retention Rate:** Percentage of customers who continue using the service
- **Customer LTV:** Average lifetime value per customer
- **Risk Score:** AI-calculated probability of customer churn (0-100)

## 📁 Project Structure

\`\`\`
├── app/
│   ├── page.tsx                 # Dashboard overview
│   ├── churn/
│   │   └── page.tsx            # Churn prediction interface
│   ├── retention/
│   │   └── page.tsx            # Retention KPI dashboards
│   ├── segmentation/
│   │   └── page.tsx            # Customer segmentation analysis
│   ├── layout.tsx              # Root layout with navigation
│   └── globals.css             # Global styles and design tokens
├── components/
│   ├── dashboard-nav.tsx       # Sidebar navigation
│   ├── stat-card.tsx           # KPI metric cards
│   ├── churn-trend-chart.tsx   # Churn trend visualization
│   ├── retention-cohort-chart.tsx
│   ├── risk-segment-chart.tsx
│   ├── churn-prediction-chart.tsx
│   ├── customer-risk-table.tsx
│   ├── retention-rate-chart.tsx
│   ├── customer-lifetime-chart.tsx
│   ├── retention-by-segment-chart.tsx
│   ├── segment-distribution-chart.tsx
│   ├── segment-performance-chart.tsx
│   └── segment-growth-chart.tsx
└── components/ui/              # shadcn/ui components
\`\`\`

## 🎨 Design System

### Color Palette
- **Primary:** Blue (#3b82f6) - Trust and reliability
- **Success:** Green (#22c55e) - Positive metrics
- **Warning:** Amber (#f59e0b) - Medium risk
- **Danger:** Red (#ef4444) - High risk
- **Background:** Dark theme (#0a0a0a, #171717)

### Typography
- **Headings:** Geist Sans
- **Body:** Geist Sans
- **Monospace:** Geist Mono

## 🔧 Customization

### Adding New Metrics
Edit the respective page files in `app/` directory to add new KPI cards or charts.

### Modifying Chart Colors
All charts use a consistent color scheme defined in each component. Update the `stroke` or `fill` properties in chart components.

### Connecting Real Data
Currently uses mock data. To connect real data:
1. Create API routes in `app/api/`
2. Implement data fetching in page components
3. Replace mock data with API calls

## 🤖 ML Models (Conceptual)

This dashboard visualizes results from:
- **Decision Trees:** For interpretable churn prediction rules
- **Random Forests:** For ensemble-based risk scoring
- **Segmentation Algorithms:** K-means or hierarchical clustering

*Note: Actual ML model implementation would require a separate backend service.*

## 📊 Sample Data

The dashboard includes realistic sample data for demonstration:
- 12,458 total customers
- 4.2% churn rate
- 89.3% retention rate
- $4,850 average customer LTV

## 🚢 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/churn-retention-dashboard)

Or manually:
\`\`\`bash
npm run build
vercel --prod
\`\`\`

### Other Platforms
The app can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
