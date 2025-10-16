import { DashboardHeader } from "@/components/DashboardHeader";
import { StatsCard } from "@/components/StatsCard";
import { TenderCard } from "@/components/TenderCard";
import { AlertPanel } from "@/components/AlertPanel";
import { VerificationStatus } from "@/components/VerificationStatus";
import { QuickActions } from "@/components/QuickActions";
import { FileText, TrendingUp, Clock, CheckCircle } from "lucide-react";

const Index = () => {
  const tenders = [
    {
      title: "Cloud Infrastructure Services",
      organization: "Ministry of Electronics & IT",
      location: "New Delhi, India",
      budget: "₹50L - ₹1Cr",
      deadline: "15 Nov 2025",
      category: "IT Services",
      status: "open" as const
    },
    {
      title: "Office Supplies & Equipment",
      organization: "State Transport Department",
      location: "Mumbai, Maharashtra",
      budget: "₹10L - ₹25L",
      deadline: "25 Oct 2025",
      category: "Supplies",
      status: "closing-soon" as const
    },
    {
      title: "Software Development Contract",
      organization: "National Health Authority",
      location: "Bengaluru, Karnataka",
      budget: "₹75L - ₹2Cr",
      deadline: "30 Nov 2025",
      category: "Development",
      status: "open" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Welcome back, TechVendor Inc.</h2>
          <p className="mt-1 text-muted-foreground">Here's what's happening with your procurement activities</p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Active Bids"
            value="12"
            change="+3 this week"
            icon={FileText}
            trend="up"
          />
          <StatsCard
            title="Win Rate"
            value="68%"
            change="+5% from last month"
            icon={TrendingUp}
            trend="up"
          />
          <StatsCard
            title="Pending Reviews"
            value="4"
            change="2 urgent"
            icon={Clock}
            trend="neutral"
          />
          <StatsCard
            title="Completed"
            value="47"
            change="This quarter"
            icon={CheckCircle}
            trend="up"
          />
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <QuickActions />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Tenders List - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold">Active Tenders</h3>
              <button className="text-sm font-medium text-primary hover:underline">
                View All →
              </button>
            </div>
            <div className="grid gap-6">
              {tenders.map((tender, idx) => (
                <TenderCard key={idx} {...tender} />
              ))}
            </div>
          </div>

          {/* Sidebar - Takes 1 column */}
          <div className="space-y-6">
            <AlertPanel />
            <VerificationStatus />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
