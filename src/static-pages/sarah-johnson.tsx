// Individual page for Dr. Sarah Johnson
// This file would be built into sarah-johnson.html for SharePoint hosting

import { IndividualStaffPage } from "../components/IndividualStaffPage";
import { StaffMember } from "../components/StaffCard";

const sarahJohnson: StaffMember = {
  id: "1",
  photo: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkb2N0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTgyMjYyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  name: "Dr. Sarah Johnson",
  role: "Internal Medicine Resident",
  pgyLevel: "PGY-2",
  competencies: ["Transport", "Central Lines", "ROTEM"],
  mainBackground: "Biology with focus on molecular research",
  timeInICU: "6 months",
  learningStyles: "Visual learner, prefers hands-on experience and case-based discussions",
  rotationGoals: "Improve ventilator management and gain experience with complex hemodynamic monitoring",
  biography: "Originally from Portland, I love hiking and photography. I'm passionate about critical care and hope to pursue a fellowship in pulmonary critical care medicine.",
  birthday: "March 15th",
  coffeeOrder: "Large oat milk latte with an extra shot",
  askMeAbout: "Travel photography, weekend hiking spots, or the latest medical podcasts",
  specificSkills: "Ultrasound-guided procedures, Spanish fluency, research methodology"
};

export default function SarahJohnsonPage() {
  return <IndividualStaffPage staff={sarahJohnson} />;
}