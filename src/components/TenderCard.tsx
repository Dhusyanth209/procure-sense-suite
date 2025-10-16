import { Calendar, DollarSign, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TenderCardProps {
  title: string;
  organization: string;
  location: string;
  budget: string;
  deadline: string;
  category: string;
  status: "open" | "closing-soon" | "closed";
}

export const TenderCard = ({
  title,
  organization,
  location,
  budget,
  deadline,
  category,
  status
}: TenderCardProps) => {
  const statusColors = {
    open: "bg-success text-success-foreground",
    "closing-soon": "bg-warning text-warning-foreground",
    closed: "bg-muted text-muted-foreground"
  };

  return (
    <Card className="group shadow-card transition-all hover:shadow-elegant">
      <CardContent className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <Badge variant="outline" className="text-xs">{category}</Badge>
          <Badge className={statusColors[status]}>
            {status === "closing-soon" ? "Closing Soon" : status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
        
        <h3 className="mb-2 text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground">{organization}</p>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">{budget}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Deadline: {deadline}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="border-t bg-muted/30 p-4">
        <Button className="w-full group" variant="outline">
          View Details
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};
