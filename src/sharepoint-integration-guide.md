# SharePoint Integration Guide - Self-Service Biography Cards

## Overview
This updated solution provides a self-service biography builder where ICU staff can create their own cards, then integrate with SharePoint for hosting and roster management:

1. **Self-Service Creation**: Staff fill out their own biography using the interactive form
2. **Data Export**: Staff download their biography data as JSON
3. **Static File Generation**: IT generates individual HTML files from the JSON data
4. **SharePoint Hosting**: Host HTML files in Document Library and manage roster in SharePoint List

## Updated Workflow

### Phase 1: Self-Service Biography Creation

#### Staff Experience:
1. **Access the Biography Builder**: Staff navigate to the biography creation page
2. **Fill Out Information**: 
   - Upload profile photo
   - Complete all text fields
   - Select competencies (Transport, Lines, ROTEM, Airway, etc.)
   - See live preview as they type
3. **Export Data**: Download their information as a JSON file
4. **Submit to IT**: Email the JSON file to IT/admin for processing

#### Admin/IT Receives:
- JSON file with complete staff data
- Uploaded photo (embedded as base64 in JSON)
- All form fields properly structured

### Phase 2: HTML Generation (IT Process)

#### Batch Processing:
1. **Collect JSON Files**: Gather all submitted JSON files from staff
2. **Run Build Script**: Use automated script to generate HTML files
3. **Quality Check**: Preview generated cards before deployment
4. **Batch Upload**: Upload all HTML files to SharePoint at once

#### Build Script Enhancement:
```javascript
// Enhanced script reads JSON files and generates HTML
const processStaffSubmissions = () => {
  // Read all JSON files from submissions folder
  // Generate individual HTML pages
  // Create SharePoint list import CSV
  // Package everything for upload
};
```

### Phase 3: SharePoint Implementation

#### Document Library Setup:
- **Library Name**: "ICU Staff Biographies"
- **Structure**: 
  ```
  /ICU Staff Biographies/
    ├── sarah-johnson.html
    ├── michelle-chen.html
    ├── alex-rodriguez.html
    └── ...
  ```

#### SharePoint List for Roster:
- **List Name**: "ICU Team Roster"
- **Enhanced Columns**:
  - **Title** → Staff Name
  - **Role** → Position/Specialty  
  - **PGY Level** → PGY-1, PGY-2, etc.
  - **Competencies** → Multi-select: Transport, Lines, ROTEM, Airway
  - **Biography Link** → Direct link to HTML file
  - **Status** → Active, Rotation, Alumni
  - **Last Updated** → When bio was last modified
  - **Photo Thumbnail** → Small version for list view
  - **Submission Date** → When they submitted their bio

### Phase 4: Staff Workflow

#### Initial Setup:
1. **Email Link**: IT sends biography builder link to all staff
2. **Complete Bio**: Staff fill out their information at their convenience  
3. **Submit Data**: Staff email JSON file back to IT
4. **IT Processing**: IT generates HTML and updates SharePoint
5. **Go Live**: Biography appears in team roster

#### Updates:
1. **Staff Updates**: Staff use same link to update their information
2. **Export New Data**: Download updated JSON file
3. **Email Changes**: Send updated JSON to IT
4. **IT Updates**: Replace HTML file in SharePoint (URL stays same)

### Phase 5: SharePoint List Integration

#### Sample List Structure:
```csv
Title,Role,PGYLevel,Competencies,BiographyLink,Status,LastUpdated,SubmissionDate
"Dr. Sarah Johnson","Internal Medicine Resident","PGY-2","Transport;Central Lines;ROTEM","https://site.sharepoint.com/.../sarah-johnson.html","Active","2024-01-15","2024-01-10"
"Dr. Michelle Chen","Emergency Medicine Resident","PGY-3","Airway;Transport;Arterial Lines","https://site.sharepoint.com/.../michelle-chen.html","Active","2024-01-12","2024-01-08"
```

#### Custom List Views:
- **All Staff**: Complete roster with filters
- **By Specialty**: Group by medical specialty
- **By PGY Level**: Filter by training level
- **By Competencies**: Find staff with specific skills
- **Recent Updates**: Show recently modified biographies

### Phase 6: Advanced Features

#### Automated Notifications:
- **Power Automate Flow**: 
  - Notify IT when staff submit updates
  - Remind staff to update biographies quarterly
  - Alert team when new members join

#### Mobile Experience:
- **Responsive Design**: Biography cards work perfectly on mobile
- **SharePoint Mobile**: List view accessible via SharePoint mobile app
- **Quick Access**: QR codes linking to individual biographies

#### Integration Options:
- **Teams Integration**: Add roster as Teams tab
- **Email Signatures**: Include biography links in staff email signatures
- **Intranet Integration**: Embed in hospital intranet pages

## Benefits of Self-Service Approach

✅ **Staff Ownership**: People create and own their own content
✅ **Reduced IT Burden**: No manual data entry or photo processing
✅ **Better Accuracy**: Staff provide their own information directly
✅ **Easy Updates**: Staff can update anytime, IT just processes
✅ **Scalable**: Works for any size team without IT bottlenecks
✅ **Professional Quality**: Beautiful, consistent design for all cards
✅ **SharePoint Native**: Leverages existing SharePoint infrastructure

## Implementation Timeline

**Week 1**: Set up Biography Builder and SharePoint structure
**Week 2**: Test with small group, refine process
**Week 3**: Roll out to full ICU team
**Week 4**: Process all submissions and go live
**Ongoing**: Monthly processing of updates

## Support Documentation

Create simple instructions for staff:
1. **"How to Create Your Biography"** - Step-by-step guide
2. **"Biography Field Explanations"** - What to write in each section  
3. **"Photo Guidelines"** - Technical requirements and tips
4. **"How to Update Your Information"** - Process for changes

This approach empowers your ICU team to create professional, personalized biography cards while maintaining centralized management through SharePoint.