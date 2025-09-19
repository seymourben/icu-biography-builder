import { StaffCard, StaffMember } from "./StaffCard";

interface IndividualStaffPageProps {
  staff: StaffMember;
}

export function IndividualStaffPage({ staff }: IndividualStaffPageProps) {
  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="mb-2">ICU Staff Biography</h1>
          <p className="text-muted-foreground">
            Get to know our team member and their background, goals, and interests.
          </p>
        </div>
        
        {/* Staff Card - centered and full width on mobile */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <StaffCard staff={staff} />
          </div>
        </div>
        
        {/* Back to roster link placeholder */}
        <div className="text-center mt-8">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-primary hover:underline"
            onClick={() => window.history.back()}
          >
            ← Back to ICU Team Roster
          </a>
        </div>
      </div>
    </div>
  );
}