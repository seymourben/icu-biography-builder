// Individual page for Dr. Alex Rodriguez
// This file would be built into alex-rodriguez.html for SharePoint hosting

import { IndividualStaffPage } from "../components/IndividualStaffPage";
import { StaffMember } from "../components/StaffCard";

const alexRodriguez: StaffMember = {
  id: "3",
  photo: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1lZGljYWwlMjByZXNpZGVudHxlbnwxfHx8fDE3NTgyMzQzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  name: "Dr. Alex Rodriguez",
  role: "Surgery Resident",
  pgyLevel: "PGY-1",
  competencies: ["Central Lines", "ROTEM"],
  mainBackground: "Biochemistry with surgical research focus",
  timeInICU: "2 months",
  learningStyles: "Auditory learner, benefits from detailed explanations and verbal feedback",
  rotationGoals: "Understand post-operative critical care management and improve surgical decision-making skills",
  biography: "First-generation college graduate from Texas. I love soccer and mentoring pre-med students. My goal is to specialize in trauma surgery.",
  birthday: "November 8th",
  coffeeOrder: "Simple black coffee, extra strong",
  askMeAbout: "Soccer strategies, mentorship opportunities, or the best BBQ joints",
  specificSkills: "Bilingual (Spanish/English), trauma protocols, student mentoring"
};

export default function AlexRodriguezPage() {
  return <IndividualStaffPage staff={alexRodriguez} />;
}