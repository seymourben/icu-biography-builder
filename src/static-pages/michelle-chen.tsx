// Individual page for Dr. Michelle Chen
// This file would be built into michelle-chen.html for SharePoint hosting

import { IndividualStaffPage } from "../components/IndividualStaffPage";
import { StaffMember } from "../components/StaffCard";

const michelleChen: StaffMember = {
  id: "2",
  photo: "https://images.unsplash.com/photo-1753487050317-919a2b26a6ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU4MTg2NDUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  name: "Dr. Michelle Chen",
  role: "Emergency Medicine Resident",
  pgyLevel: "PGY-3",
  competencies: ["Airway", "Transport", "Arterial Lines"],
  mainBackground: "Biomedical Engineering with emergency medicine research experience",
  timeInICU: "4 months",
  learningStyles: "Kinesthetic learner, learns best through simulation and real-world application",
  rotationGoals: "Master advanced airway management and develop expertise in shock management protocols",
  biography: "Bay Area native who enjoys rock climbing and cooking. I'm interested in the intersection of technology and emergency medicine.",
  birthday: "August 22nd",
  coffeeOrder: "Cold brew with a splash of almond milk",
  askMeAbout: "Rock climbing routes, new tech gadgets, or the best dim sum in town",
  specificSkills: "Advanced cardiac life support instructor, Mandarin fluency, medical device innovation"
};

export default function MichelleChenPage() {
  return <IndividualStaffPage staff={michelleChen} />;
}