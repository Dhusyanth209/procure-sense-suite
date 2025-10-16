import { CheckCircle, Clock, XCircle, Upload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Document {
  name: string;
  status: "verified" | "pending" | "rejected" | "not-uploaded";
}

const documents: Document[] = [
  { name: "PAN Card", status: "verified" },
  { name: "GST Certificate", status: "verified" },
  { name: "Bank Details", status: "pending" },
  { name: "Quality Certificate", status: "not-uploaded" }
];

export const VerificationStatus = () => {
  const verifiedCount = documents.filter(d => d.status === "verified").length;
  const progress = (verifiedCount / documents.length) * 100;

  const getStatusIcon = (status: Document["status"]) => {
    switch (status) {
      case "verified":
        return <CheckCircle className="h-5 w-5 text-success" />;
      case "pending":
        return <Clock className="h-5 w-5 text-warning" />;
      case "rejected":
        return <XCircle className="h-5 w-5 text-destructive" />;
      default:
        return <Upload className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusText = (status: Document["status"]) => {
    switch (status) {
      case "verified":
        return "Verified";
      case "pending":
        return "Under Review";
      case "rejected":
        return "Rejected";
      default:
        return "Upload Required";
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Document Verification</CardTitle>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Overall Progress</span>
            <span className="font-semibold">{verifiedCount}/{documents.length} Verified</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {documents.map((doc) => (
            <div
              key={doc.name}
              className="flex items-center justify-between rounded-lg border bg-card p-4 transition-colors hover:bg-muted/30"
            >
              <div className="flex items-center gap-3">
                {getStatusIcon(doc.status)}
                <div>
                  <p className="font-medium">{doc.name}</p>
                  <p className={cn(
                    "text-xs",
                    doc.status === "verified" && "text-success",
                    doc.status === "pending" && "text-warning",
                    doc.status === "rejected" && "text-destructive",
                    doc.status === "not-uploaded" && "text-muted-foreground"
                  )}>
                    {getStatusText(doc.status)}
                  </p>
                </div>
              </div>
              {doc.status === "not-uploaded" && (
                <Button size="sm" variant="outline">
                  Upload
                </Button>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
