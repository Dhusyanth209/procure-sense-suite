import { AlertCircle, CheckCircle, Clock, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Alert {
  id: string;
  type: "success" | "warning" | "error" | "info";
  message: string;
  time: string;
}

const mockAlerts: Alert[] = [
  {
    id: "1",
    type: "warning",
    message: "Document verification pending for PAN card",
    time: "2 hours ago"
  },
  {
    id: "2",
    type: "success",
    message: "Bid submitted successfully for IT Services tender",
    time: "5 hours ago"
  },
  {
    id: "3",
    type: "info",
    message: "New tender matching your profile: Software Development",
    time: "1 day ago"
  }
];

export const AlertPanel = () => {
  const getAlertIcon = (type: Alert["type"]) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-success" />;
      case "warning":
        return <AlertCircle className="h-5 w-5 text-warning" />;
      case "error":
        return <XCircle className="h-5 w-5 text-destructive" />;
      default:
        return <Clock className="h-5 w-5 text-primary" />;
    }
  };

  const getAlertBorder = (type: Alert["type"]) => {
    switch (type) {
      case "success":
        return "border-l-success";
      case "warning":
        return "border-l-warning";
      case "error":
        return "border-l-destructive";
      default:
        return "border-l-primary";
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5" />
          Recent Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[280px]">
          <div className="space-y-3">
            {mockAlerts.map((alert) => (
              <div
                key={alert.id}
                className={cn(
                  "flex gap-3 rounded-lg border-l-4 bg-muted/30 p-4 transition-colors hover:bg-muted/50",
                  getAlertBorder(alert.type)
                )}
              >
                <div className="mt-0.5">{getAlertIcon(alert.type)}</div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-tight">{alert.message}</p>
                  <p className="text-xs text-muted-foreground">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
