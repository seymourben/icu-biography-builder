import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { StaticImageData } from "next/image";

export interface StaffMember {
  id: string;
  photo: string | StaticImageData;
  name: string;
  role: string;
  pgyLevel?: string;
  competencies: string[]; // New field for transport/lines/ROTEM/airway
  mainBackground: string;
  timeInICU: string;
  learningStyles: string;
  rotationGoals: string;
  biography: string;
  birthday: string;
  coffeeOrder: string;
  askMeAbout: string;
  specificSkills: string;
}

interface StaffCardProps {
  staff: StaffMember;
}

// Function to get role-specific styling
const getRoleStyle = (role: string) => {
  switch (role) {
    case "Resident":
      return "bg-white text-blue-600 border border-blue-600";
    case "Junior Registrar":
      return "bg-yellow-400 text-black border-0";
    case "Senior Registrar":
      return "bg-purple-800 text-white border-0";
    case "Fellow":
      return "bg-black text-white border-0";
    default:
      return "bg-secondary text-secondary-foreground"; // Default styling
  }
};

export function StaffCard({ staff }: StaffCardProps) {
  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-sm border border-border">
      <CardContent className="p-6">
        {/* Photo and Basic Info */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-32 h-32 mb-4">
            <ImageWithFallback
              src={typeof staff.photo === 'string' ? staff.photo : staff.photo.src}
              alt={`${staff.name} photo`}
              className="w-full h-full object-cover rounded-full border-2 border-border"
            />
          </div>
          <h2 className="text-center mb-2">{staff.name}</h2>
          <div className="flex flex-wrap gap-2 justify-center mb-3">
            <Badge variant="secondary" className={getRoleStyle(staff.role)}>{staff.role}</Badge>
            {staff.pgyLevel && (
              <Badge variant="outline">{staff.pgyLevel}</Badge>
            )}
          </div>
          
          {/* Competencies */}
          <div className="w-full">
            <span className="text-muted-foreground block text-center mb-2">Competencies:</span>
            <div className="flex flex-wrap gap-1 justify-center">
              {staff.competencies.map((competency, index) => (
                <Badge key={index} className="bg-icu-orange text-icu-orange-foreground hover:bg-icu-orange/90 text-xs">
                  {competency}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <Separator className="mb-4" />

        {/* Professional Information */}
        <div className="space-y-3 mb-4">
          <h3 className="text-icu-navy mb-2 pb-1 border-b border-icu-orange/20">Professional Background</h3>
          <div>
            <span className="text-muted-foreground">Main Background:</span>
            <p className="mt-1">{staff.mainBackground}</p>
          </div>
          
          <div>
            <span className="text-muted-foreground">Previous ICU Experience:</span>
            <p className="mt-1">{staff.timeInICU}</p>
          </div>
          
          <div>
            <span className="text-muted-foreground">Learning Styles:</span>
            <p className="mt-1">{staff.learningStyles}</p>
          </div>
          
          <div>
            <span className="text-muted-foreground">Rotation Goals:</span>
            <p className="mt-1">{staff.rotationGoals}</p>
          </div>
          
          <div>
            <span className="text-muted-foreground">Specific Skills:</span>
            <p className="mt-1">{staff.specificSkills}</p>
          </div>
        </div>

        <Separator className="mb-4" />

        {/* Biography */}
        <div className="mb-4">
          <h3 className="text-icu-navy mb-2 pb-1 border-b border-icu-orange/20">About Me</h3>
          <p className="mt-1">{staff.biography}</p>
        </div>

        <Separator className="mb-4" />

        {/* Personal Information */}
        <div className="space-y-3">
          <h3 className="text-icu-navy mb-2 pb-1 border-b border-icu-orange/20">Personal Details</h3>
          <div>
            <span className="text-muted-foreground">Birthday:</span>
            <p className="mt-1">{staff.birthday}</p>
          </div>
          
          <div>
            <span className="text-muted-foreground">Coffee Order:</span>
            <p className="mt-1">{staff.coffeeOrder}</p>
          </div>
          
          <div>
            <span className="text-muted-foreground">Ask Me About:</span>
            <p className="mt-1">{staff.askMeAbout}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}