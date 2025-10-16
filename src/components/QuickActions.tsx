import { FileText, Upload, Calendar, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";

const actions = [
  {
    icon: FileText,
    label: "View Active Bids",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Upload,
    label: "Upload Documents",
    color: "bg-accent/10 text-accent"
  },
  {
    icon: Calendar,
    label: "Schedule Meeting",
    color: "bg-success/10 text-success"
  },
  {
    icon: MessageSquare,
    label: "Contact Support",
    color: "bg-warning/10 text-warning"
  }
];

export const QuickActions = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {actions.map((action) => (
        <Card
          key={action.label}
          className="group cursor-pointer shadow-card transition-all hover:scale-105 hover:shadow-elegant"
        >
          <div className="flex flex-col items-center gap-3 p-6 text-center">
            <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${action.color} transition-transform group-hover:scale-110`}>
              <action.icon className="h-7 w-7" />
            </div>
            <span className="text-sm font-medium">{action.label}</span>
          </div>
        </Card>
      ))}
    </div>
  );
};
