// This is how you'd modify your component to work with SharePoint List data
// This example shows the structure for Power Apps or SPFx integration

import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

// SharePoint List item structure
export interface SharePointStaffItem {
  Id: number;
  Title: string; // Staff Name (using default Title field)
  Role: string;
  PGYLevel?: string;
  MainBackground: string;
  TimeInICU: string;
  LearningStyles: string;
  RotationGoals: string;
  Biography: string;
  Birthday: string;
  CoffeeOrder: string;
  AskMeAbout: string;
  SpecificSkills: string;
  Photo: {
    Url: string;
    Description: string;
  };
}

interface SharePointStaffCardProps {
  staff: SharePointStaffItem;
}

export function SharePointStaffCard({ staff }: SharePointStaffCardProps) {
  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-sm border border-border">
      <CardContent className="p-6">
        {/* Photo and Basic Info */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-32 h-32 mb-4">
            <img
              src={staff.Photo?.Url || '/placeholder-avatar.png'}
              alt={`${staff.Title} photo`}
              className="w-full h-full object-cover rounded-full border-2 border-border"
            />
          </div>
          <h2 className="text-center mb-2">{staff.Title}</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="secondary">{staff.Role}</Badge>
            {staff.PGYLevel && (
              <Badge variant="outline">{staff.PGYLevel}</Badge>
            )}
          </div>
        </div>

        <Separator className="mb-4" />

        {/* Professional Information */}
        <div className="space-y-3 mb-4">
          <div>
            <span className="text-muted-foreground">Main Background:</span>
            <p className="mt-1">{staff.MainBackground}</p>
          </div>
          
          <div>
            <span className="text-muted-foreground">Time in ICU:</span>
            <p className="mt-1">{staff.TimeInICU}</p>
          </div>
          
          <div>
            <span className="text-muted-foreground">Learning Styles:</span>
            <p className="mt-1">{staff.LearningStyles}</p>
          </div>
          
          <div>
            <span className="text-muted-foreground">Rotation Goals:</span>
            <p className="mt-1">{staff.RotationGoals}</p>
          </div>
          
          <div>
            <span className="text-muted-foreground">Specific Skills:</span>
            <p className="mt-1">{staff.SpecificSkills}</p>
          </div>
        </div>

        <Separator className="mb-4" />

        {/* Biography */}
        <div className="mb-4">
          <span className="text-muted-foreground">About Me:</span>
          <p className="mt-1">{staff.Biography}</p>
        </div>

        <Separator className="mb-4" />

        {/* Personal Information */}
        <div className="space-y-3">
          <div>
            <span className="text-muted-foreground">Birthday:</span>
            <p className="mt-1">{staff.Birthday}</p>
          </div>
          
          <div>
            <span className="text-muted-foreground">Coffee Order:</span>
            <p className="mt-1">{staff.CoffeeOrder}</p>
          </div>
          
          <div>
            <span className="text-muted-foreground">Ask Me About:</span>
            <p className="mt-1">{staff.AskMeAbout}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Example of how to fetch data from SharePoint List (for SPFx)
export async function getStaffFromSharePoint(): Promise<SharePointStaffItem[]> {
  // This would be implemented in SPFx using PnPjs or SharePoint REST API
  // Example endpoint: /_api/web/lists/getbytitle('ICU Staff')/items
  
  const mockData: SharePointStaffItem[] = [
    {
      Id: 1,
      Title: "Dr. Sarah Johnson",
      Role: "Internal Medicine Resident",
      PGYLevel: "PGY-2",
      MainBackground: "Biology with focus on molecular research",
      TimeInICU: "6 months",
      LearningStyles: "Visual learner, prefers hands-on experience",
      RotationGoals: "Improve ventilator management",
      Biography: "Originally from Portland, I love hiking and photography.",
      Birthday: "March 15th",
      CoffeeOrder: "Large oat milk latte with an extra shot",
      AskMeAbout: "Travel photography, weekend hiking spots",
      SpecificSkills: "Ultrasound-guided procedures, Spanish fluency",
      Photo: {
        Url: "https://example.com/photos/sarah.jpg",
        Description: "Dr. Sarah Johnson"
      }
    }
  ];
  
  return mockData;
}