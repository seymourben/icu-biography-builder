import { useState } from "react";
import { StaffCard, StaffMember } from "./StaffCard";
import { BiographyBuilder } from "./BiographyBuilder";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import benSeymourPhoto from 'figma:asset/6625392142e1876b44a950b553e17ec2d8d658a4.png';
import krisoulaZahariouPhoto from 'figma:asset/9181706333bb54360d2fbe81e197c638537e25d9.png';

// Sample completed cards for reference
const sampleStaff: StaffMember[] = [
  {
    id: "ben-seymour",
    photo: benSeymourPhoto,
    name: "Dr. Ben Seymour",
    role: "Fellow",
    pgyLevel: "PGY-10",
    competencies: ["Transport", "Central Lines", "ROTEM", "Airway", "Bronchoscopy", "ECMO"],
    mainBackground: "Intensive Care",
    timeInICU: "9 years",
    learningStyles: "I learn best when I teach others.",
    rotationGoals: "I am trying to walk the fine line between supervising juniors, being involved in clinical decisions, and not micromanaging. Tell me how I'm doing!",
    biography: "I grew up in Cairns and moved down to SEQ for intensive care training. I live with my wife and elderly golden retriever, Evie. I spend almost all of my time outside of working trying to get outdoors - most recently with a lot of mountain bike riding. Before I worked as a doctor I spent 8 years working in hospitality - everything from being the dish pig, to front of house, to line cook and chef.",
    birthday: "September 3rd",
    coffeeOrder: "Cappucino",
    askMeAbout: "What I'm planning to cook this weekend, 4WD camping in Namibia",
    specificSkills: "I have a knack for remembering papers I read, and mostly people at work know me for this. However, my true passion is cooking for my friends."
  },
  {
    id: "krisoula-zahariou",
    photo: krisoulaZahariouPhoto,
    name: "Dr. Krisoula Zahariou",
    role: "Senior Registrar",
    pgyLevel: "PGY-10",
    competencies: ["Transport", "Central Lines", "ROTEM", "Airway", "Bronchoscopy"],
    mainBackground: "Intensive Care",
    timeInICU: "7 years",
    learningStyles: "Bedside discussions and hands-on patient care; Didactic lectures; Teaching others;",
    rotationGoals: "Fellowship exam. Maintain POCUS skills. Subclavian under US. Meet more awesome people working in ICU.",
    biography: "I grew up in Greece, Glasgow & Melbourne. Kos Island is my home. I speak Greek, English, Scottish & Japanese. I love airways, outstanding EOLC & teamwork. I help people pass primary exams. Rest of bio can be found in the Lady Gaga catalogue.",
    birthday: "25/5",
    coffeeOrder: "Extra hot latte",
    askMeAbout: "Your next Greek holiday, MJ, any soccer ⚽️ any time",
    specificSkills: "I was an Anaesthetic trainee in my past life"
  }
];

export function TemplateViewer() {
  const [activeTab, setActiveTab] = useState("create");

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="mb-4 text-icu-navy">ICU Team Biography System</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Create your own biography card or view examples of completed cards.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-icu-orange to-icu-navy mx-auto mt-4 rounded-full"></div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="create">Create Your Card</TabsTrigger>
            <TabsTrigger value="examples">View Examples</TabsTrigger>
          </TabsList>

          <TabsContent value="create" className="space-y-0">
            <BiographyBuilder />
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle>Example Biography Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Here are examples of completed biography cards to give you inspiration for your own.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                  {sampleStaff.map((staff) => (
                    <StaffCard key={staff.id} staff={staff} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}