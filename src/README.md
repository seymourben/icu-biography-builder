# ICU Biography Builder

A self-service biography builder for ICU staff to create professional biography cards that integrate seamlessly with SharePoint.

## Features

- **Interactive Form Builder**: Staff can fill out their own information with live preview
- **Photo Upload**: Upload and preview profile photos
- **Role-Based Badges**: Color-coded badges for different roles (Resident, Junior Registrar, Senior Registrar, Fellow)
- **Competency Selection**: Checkbox selection for ICU competencies (Transport, Central Lines, ROTEM, Airway, Bronchoscopy, ECMO)
- **ICU Brand Colors**: Uses official ICU colors (#FBB040 orange, #1A1446 navy)
- **HTML Export**: Generates complete, standalone HTML files ready for SharePoint upload
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Professional Medical Aesthetic**: Clean, healthcare-appropriate design

## Usage

1. **Staff Access**: Visit the deployed application URL
2. **Fill Out Form**: Complete biography information with live preview
3. **Upload Photo**: Add professional headshot
4. **Select Competencies**: Choose relevant ICU skills
5. **Export HTML**: Download complete HTML biography card
6. **Send to IT**: Email the HTML file for SharePoint integration

## SharePoint Integration

The exported HTML files can be:
- Uploaded to SharePoint Document Libraries
- Linked from SharePoint lists
- Embedded using SharePoint web parts
- Integrated with existing ICU roster systems

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

This application can be deployed to:
- **Vercel** (recommended for quick deployment)
- **Azure Static Web Apps** (best for Microsoft integration)
- **Netlify**
- Any static hosting service

## Tech Stack

- **React 18** with TypeScript
- **Next.js 14** for framework
- **Tailwind CSS v4** for styling
- **Radix UI** for accessible components
- **Lucide React** for icons

## License

MIT License - Created for ICU staff biography management.