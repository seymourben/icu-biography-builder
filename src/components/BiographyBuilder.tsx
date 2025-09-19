import { useState, useRef } from "react";
import { StaffCard, StaffMember } from "./StaffCard";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Upload, Download, Eye, EyeOff } from "lucide-react";

const COMPETENCY_OPTIONS = ["Transport", "Central Lines", "ROTEM", "Airway", "Bronchoscopy", "ECMO"];
const ROLE_OPTIONS = ["Resident", "Junior Registrar", "Senior Registrar", "Fellow"];

export function BiographyBuilder() {
  const [showPreview, setShowPreview] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [staffData, setStaffData] = useState<StaffMember>({
    id: "new-staff",
    photo: "",
    name: "",
    role: "",
    pgyLevel: "",
    competencies: [],
    mainBackground: "",
    timeInICU: "",
    learningStyles: "",
    rotationGoals: "",
    biography: "",
    birthday: "",
    coffeeOrder: "",
    askMeAbout: "",
    specificSkills: ""
  });

  const handleInputChange = (field: keyof StaffMember, value: string) => {
    setStaffData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCompetencyChange = (competency: string, checked: boolean) => {
    setStaffData(prev => ({
      ...prev,
      competencies: checked 
        ? [...prev.competencies, competency]
        : prev.competencies.filter(c => c !== competency)
    }));
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setStaffData(prev => ({
          ...prev,
          photo: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const exportData = () => {
    // Generate complete HTML file
    const htmlContent = generateStandaloneHTML(staffData);
    const dataBlob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${staffData.name.toLowerCase().replace(/\s+/g, '-')}-biography.html`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Function to generate role-specific styling
  const getRoleStyleHTML = (role: string) => {
    switch (role) {
      case "Resident":
        return "background-color: white; color: #2563eb; border: 1px solid #2563eb;";
      case "Junior Registrar":
        return "background-color: #fbbf24; color: black; border: none;";
      case "Senior Registrar":
        return "background-color: #6b21a8; color: white; border: none;";
      case "Fellow":
        return "background-color: black; color: white; border: none;";
      default:
        return "background-color: #f1f5f9; color: #334155; border: 1px solid #e2e8f0;";
    }
  };

  const generateStandaloneHTML = (staff: StaffMember) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${staff.name} - ICU Biography Card</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.5;
            color: #1e293b;
            background-color: #f8fafc;
            padding: 20px;
        }
        
        .biography-card {
            max-width: 400px;
            margin: 0 auto;
            background: white;
            border-radius: 10px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(0, 0, 0, 0.1);
            padding: 24px;
        }
        
        .photo-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 24px;
        }
        
        .profile-photo {
            width: 128px;
            height: 128px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid rgba(0, 0, 0, 0.1);
            margin-bottom: 16px;
        }
        
        .staff-name {
            font-size: 1.25rem;
            font-weight: 500;
            text-align: center;
            margin-bottom: 8px;
            color: #1A1446;
        }
        
        .badges-container {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            justify-content: center;
            margin-bottom: 12px;
        }
        
        .role-badge {
            padding: 4px 12px;
            border-radius: 6px;
            font-size: 0.875rem;
            font-weight: 500;
            ${getRoleStyleHTML(staff.role)}
        }
        
        .pgy-badge {
            padding: 4px 12px;
            border-radius: 6px;
            font-size: 0.875rem;
            background-color: #f1f5f9;
            color: #334155;
            border: 1px solid #e2e8f0;
        }
        
        .competencies-section {
            width: 100%;
            margin-top: 12px;
        }
        
        .competencies-label {
            color: #64748b;
            font-size: 0.875rem;
            text-align: center;
            display: block;
            margin-bottom: 8px;
        }
        
        .competencies-container {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
            justify-content: center;
        }
        
        .competency-badge {
            background-color: #FBB040;
            color: #1A1446;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: 500;
        }
        
        .separator {
            height: 1px;
            background-color: #e2e8f0;
            margin: 16px 0;
        }
        
        .section {
            margin-bottom: 16px;
        }
        
        .section:last-child {
            margin-bottom: 0;
        }
        
        .section-title {
            color: #1A1446;
            font-size: 1.125rem;
            font-weight: 500;
            margin-bottom: 8px;
            padding-bottom: 4px;
            border-bottom: 1px solid rgba(251, 176, 64, 0.2);
        }
        
        .field-group {
            margin-bottom: 12px;
        }
        
        .field-group:last-child {
            margin-bottom: 0;
        }
        
        .field-label {
            color: #64748b;
            font-size: 0.875rem;
            display: block;
            margin-bottom: 4px;
        }
        
        .field-value {
            color: #1e293b;
            font-size: 1rem;
        }
        
        @media (max-width: 480px) {
            body {
                padding: 10px;
            }
            
            .biography-card {
                padding: 16px;
            }
            
            .profile-photo {
                width: 100px;
                height: 100px;
            }
        }
        
        @media print {
            body {
                background-color: white;
                padding: 0;
            }
            
            .biography-card {
                box-shadow: none;
                border: 1px solid #ccc;
            }
        }
    </style>
</head>
<body>
    <div class="biography-card">
        <!-- Photo and Basic Info -->
        <div class="photo-section">
            ${staff.photo ? `<img src="${staff.photo}" alt="${staff.name} photo" class="profile-photo" />` : ''}
            <h2 class="staff-name">${staff.name}</h2>
            <div class="badges-container">
                <span class="role-badge">${staff.role}</span>
                ${staff.pgyLevel ? `<span class="pgy-badge">${staff.pgyLevel}</span>` : ''}
            </div>
            
            ${staff.competencies.length > 0 ? `
            <div class="competencies-section">
                <span class="competencies-label">Competencies:</span>
                <div class="competencies-container">
                    ${staff.competencies.map(comp => `<span class="competency-badge">${comp}</span>`).join('')}
                </div>
            </div>
            ` : ''}
        </div>

        <div class="separator"></div>

        <!-- Professional Information -->
        <div class="section">
            <h3 class="section-title">Professional Background</h3>
            ${staff.mainBackground ? `
            <div class="field-group">
                <span class="field-label">Main Background:</span>
                <p class="field-value">${staff.mainBackground}</p>
            </div>
            ` : ''}
            
            ${staff.timeInICU ? `
            <div class="field-group">
                <span class="field-label">Previous ICU Experience:</span>
                <p class="field-value">${staff.timeInICU}</p>
            </div>
            ` : ''}
            
            ${staff.learningStyles ? `
            <div class="field-group">
                <span class="field-label">Learning Styles:</span>
                <p class="field-value">${staff.learningStyles}</p>
            </div>
            ` : ''}
            
            ${staff.rotationGoals ? `
            <div class="field-group">
                <span class="field-label">Rotation Goals:</span>
                <p class="field-value">${staff.rotationGoals}</p>
            </div>
            ` : ''}
            
            ${staff.specificSkills ? `
            <div class="field-group">
                <span class="field-label">Specific Skills:</span>
                <p class="field-value">${staff.specificSkills}</p>
            </div>
            ` : ''}
        </div>

        ${staff.biography ? `
        <div class="separator"></div>

        <div class="section">
            <h3 class="section-title">About Me</h3>
            <p class="field-value">${staff.biography}</p>
        </div>
        ` : ''}

        <div class="separator"></div>

        <!-- Personal Information -->
        <div class="section">
            <h3 class="section-title">Personal Details</h3>
            ${staff.birthday ? `
            <div class="field-group">
                <span class="field-label">Birthday:</span>
                <p class="field-value">${staff.birthday}</p>
            </div>
            ` : ''}
            
            ${staff.coffeeOrder ? `
            <div class="field-group">
                <span class="field-label">Coffee Order:</span>
                <p class="field-value">${staff.coffeeOrder}</p>
            </div>
            ` : ''}
            
            ${staff.askMeAbout ? `
            <div class="field-group">
                <span class="field-label">Ask Me About:</span>
                <p class="field-value">${staff.askMeAbout}</p>
            </div>
            ` : ''}
        </div>
    </div>
</body>
</html>`;
  };

  const isFormValid = staffData.name && staffData.role;

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <h1 className="mb-4 text-icu-navy">Create Your ICU Biography Card</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fill out your information below to create your personalised ICU team biography card. 
            You can see a live preview as you type.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-icu-orange to-icu-navy mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-icu-navy">
                  <Upload className="w-5 h-5 text-icu-orange" />
                  Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Photo Upload */}
                <div className="space-y-2">
                  <Label htmlFor="photo">Profile Photo</Label>
                  <div className="flex flex-col space-y-2">
                    <Button
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      {staffData.photo ? "Change Photo" : "Upload Photo"}
                    </Button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                    {staffData.photo && (
                      <div className="w-20 h-20 mx-auto">
                        <ImageWithFallback
                          src={staffData.photo}
                          alt="Preview"
                          className="w-full h-full object-cover rounded-full border-2 border-border"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={staffData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Dr. Sarah Johnson"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role *</Label>
                    <Select
                      value={staffData.role}
                      onValueChange={(value) => handleInputChange("role", value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        {ROLE_OPTIONS.map((role) => (
                          <SelectItem key={role} value={role}>
                            {role}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pgyLevel">PGY Level</Label>
                  <Input
                    id="pgyLevel"
                    value={staffData.pgyLevel}
                    onChange={(e) => handleInputChange("pgyLevel", e.target.value)}
                    placeholder="PGY-2"
                  />
                </div>

                {/* Competencies */}
                <div className="space-y-2">
                  <Label className="text-icu-navy">Competencies</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {COMPETENCY_OPTIONS.map((competency) => (
                      <div key={competency} className="flex items-center space-x-2">
                        <Checkbox
                          id={competency}
                          checked={staffData.competencies.includes(competency)}
                          onCheckedChange={(checked) => 
                            handleCompetencyChange(competency, checked as boolean)
                          }
                          className="data-[state=checked]:bg-icu-orange data-[state=checked]:border-icu-orange"
                        />
                        <Label htmlFor={competency} className="text-sm">
                          {competency}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-icu-navy">Professional Background</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="mainBackground">Main Background</Label>
                  <Textarea
                    id="mainBackground"
                    value={staffData.mainBackground}
                    onChange={(e) => handleInputChange("mainBackground", e.target.value)}
                    placeholder="ICU, Emergency, Anaesthetics, Surgery, Medicine, something else!"
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeInICU">Previous ICU Experience</Label>
                  <Input
                    id="timeInICU"
                    value={staffData.timeInICU}
                    onChange={(e) => handleInputChange("timeInICU", e.target.value)}
                    placeholder="None, 6 months, 8 years"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="learningStyles">Learning Styles</Label>
                  <Textarea
                    id="learningStyles"
                    value={staffData.learningStyles}
                    onChange={(e) => handleInputChange("learningStyles", e.target.value)}
                    placeholder="Bedside discussions and hands-on patient care, simulation, case based discussions, reading papers"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rotationGoals">Rotation Goals</Label>
                  <Textarea
                    id="rotationGoals"
                    value={staffData.rotationGoals}
                    onChange={(e) => handleInputChange("rotationGoals", e.target.value)}
                    placeholder="Procedural skills, clinical decision making, education & teaching, quality & systems"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specificSkills">Specific Skills</Label>
                  <Textarea
                    id="specificSkills"
                    value={staffData.specificSkills}
                    onChange={(e) => handleInputChange("specificSkills", e.target.value)}
                    placeholder="Tell us how you stand out!"
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-icu-navy">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="biography">About Me</Label>
                  <Textarea
                    id="biography"
                    value={staffData.biography}
                    onChange={(e) => handleInputChange("biography", e.target.value)}
                    placeholder="Where you grew up, languages you speak, clinical interests, hobbies, fun facts"
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="birthday">Birthday (DD/MM)</Label>
                    <Input
                      id="birthday"
                      value={staffData.birthday}
                      onChange={(e) => handleInputChange("birthday", e.target.value)}
                      placeholder="15/03"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="coffeeOrder">Coffee Order</Label>
                    <Input
                      id="coffeeOrder"
                      value={staffData.coffeeOrder}
                      onChange={(e) => handleInputChange("coffeeOrder", e.target.value)}
                      placeholder="Large oat milk latte with an extra shot"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="askMeAbout">Ask Me About</Label>
                  <Textarea
                    id="askMeAbout"
                    value={staffData.askMeAbout}
                    onChange={(e) => handleInputChange("askMeAbout", e.target.value)}
                    placeholder="4WD trips in Namibia, uncharted reef fishing spots, my dog"
                    rows={2}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => setShowPreview(!showPreview)}
                variant="outline"
                className="flex-1"
              >
                {showPreview ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
                {showPreview ? "Hide Preview" : "Show Preview"}
              </Button>
              <Button
                onClick={exportData}
                disabled={!isFormValid}
                className="flex-1"
              >
                <Download className="w-4 h-4 mr-2" />
                Export HTML File
              </Button>
            </div>
          </div>

          {/* Preview Section */}
          {showPreview && (
            <div className="lg:sticky lg:top-8 lg:self-start">
              <div className="text-center mb-4">
                <h2 className="mb-2">Live Preview</h2>
                <p className="text-muted-foreground">
                  This is how your biography card will appear
                </p>
              </div>
              {isFormValid ? (
                <StaffCard staff={staffData} />
              ) : (
                <Card className="w-full max-w-md mx-auto bg-white shadow-sm border border-border">
                  <CardContent className="p-6 text-center">
                    <p className="text-muted-foreground">
                      Fill out your name and role to see preview
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}