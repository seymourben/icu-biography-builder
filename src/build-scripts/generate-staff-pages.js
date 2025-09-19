// Build script to generate individual staff biography pages
// Run with: node build-scripts/generate-staff-pages.js

const fs = require('fs');
const path = require('path');

// Staff data - in production, this could come from a JSON file or database
const staffData = [
  {
    id: "sarah-johnson",
    name: "Dr. Sarah Johnson",
    role: "Resident",
    pgyLevel: "PGY-2",
    competencies: ["Transport", "Central Lines", "ROTEM"],
    photo: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkb2N0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTgyMjYyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    mainBackground: "Emergency Medicine",
    timeInICU: "6 months",
    learningStyles: "bedside discussions and hands-on patient care, simulation, case based discussions",
    rotationGoals: "Procedural skills/exposure, clinical decision making, education & teaching",
    biography: "Originally from Adelaide, now calling Melbourne home. Speak English and Italian. Love teaching junior staff and procedural work energises me. Clinical interests include airway management and ECMO. Weekend hiking enthusiast and terrible but enthusiastic rock climber.",
    birthday: "15/03",
    coffeeOrder: "Large oat milk latte with an extra shot",
    askMeAbout: "Travel photography, weekend hiking spots, or the latest medical podcasts",
    specificSkills: "Ultrasound-guided procedures, Italian fluency, research methodology"
  },
  // Add more staff members here...
];

// Template for individual staff pages
const pageTemplate = (staff) => `
import { IndividualStaffPage } from "../components/IndividualStaffPage";
import { StaffMember } from "../components/StaffCard";

const ${staff.id.replace('-', '')}Data: StaffMember = ${JSON.stringify(staff, null, 2)};

export default function ${staff.id.split('-').map(word => 
  word.charAt(0).toUpperCase() + word.slice(1)
).join('')}Page() {
  return <IndividualStaffPage staff={${staff.id.replace('-', '')}Data} />;
}
`;

// Generate pages
function generateStaffPages() {
  // Create static-pages directory if it doesn't exist
  const outputDir = path.join(__dirname, '..', 'static-pages');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Generate a page for each staff member
  staffData.forEach(staff => {
    const fileName = `${staff.id}.tsx`;
    const filePath = path.join(outputDir, fileName);
    const content = pageTemplate(staff);
    
    fs.writeFileSync(filePath, content.trim());
    console.log(`Generated: ${fileName}`);
  });

  console.log(`\nGenerated ${staffData.length} staff biography pages!`);
  console.log('\nNext steps:');
  console.log('1. Build each page to HTML using your React build process');
  console.log('2. Upload HTML files to SharePoint Document Library');
  console.log('3. Add entries to SharePoint List with links to the HTML files');
}

// Generate SharePoint list data
function generateSharePointListData() {
  const listData = staffData.map(staff => ({
    Title: staff.name,
    Role: staff.role,
    PGYLevel: staff.pgyLevel,
    Competencies: staff.competencies.join('; '),
    BiographyLink: `https://yoursite.sharepoint.com/sites/ICU/Shared%20Documents/ICU%20Staff%20Biographies/${staff.id}.html`,
    Status: "Active",
    StartDate: new Date().toISOString().split('T')[0], // Today's date as placeholder
    Photo: staff.photo
  }));

  const csvContent = [
    'Title,Role,PGYLevel,Competencies,BiographyLink,Status,StartDate,Photo',
    ...listData.map(row => 
      Object.values(row).map(val => `"${val}"`).join(',')
    )
  ].join('\n');

  fs.writeFileSync(
    path.join(__dirname, '..', 'sharepoint-list-data.csv'), 
    csvContent
  );
  
  console.log('\nGenerated sharepoint-list-data.csv for bulk import!');
}

// Run the generators
generateStaffPages();
generateSharePointListData();