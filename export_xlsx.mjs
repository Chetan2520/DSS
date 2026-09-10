import fs from 'fs';
import ExcelJS from 'exceljs';
import { caseStudies } from './src/lib/data/caseStudies.js';

async function generateExcel() {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Case Studies');

  const columns = [
    { main: "Basic Info", sub: "ID", key: (c) => c.id },
    { main: "Basic Info", sub: "Title", key: (c) => c.title },
    { main: "Basic Info", sub: "Doctor", key: (c) => c.doctorName },
    { main: "Basic Info", sub: "Specialty", key: (c) => c.specialty },
    { main: "Basic Info", sub: "Summary", key: (c) => c.summary },
    
    { main: "Patient", sub: "Age", key: (c) => c.patient?.age },
    { main: "Patient", sub: "Gender", key: (c) => c.patient?.gender },
    { main: "Patient", sub: "Condition", key: (c) => c.patient?.condition },
    { main: "Patient", sub: "Treatment", key: (c) => c.patient?.treatment },
    
    { main: "Story", sub: "Problem", key: (c) => c.patientStory?.problem },
    { main: "Story", sub: "Impact", key: (c) => c.patientStory?.impact },
    
    { main: "Assessment", sub: "Diagnosis", key: (c) => c.clinicalAssessment?.diagnosis },
    { main: "Assessment", sub: "Symptoms", key: (c) => c.clinicalAssessment?.symptoms?.join(', ') },
    { main: "Assessment", sub: "Findings", key: (c) => c.clinicalAssessment?.findings },
    
    { main: "Challenge", sub: "Details", key: (c) => c.challenge?.details },
    { main: "Challenge", sub: "Severity", key: (c) => c.challenge?.severity },
    
    { main: "Plan", sub: "Procedure", key: (c) => c.treatmentPlan?.procedure },
    { main: "Plan", sub: "Reason", key: (c) => c.treatmentPlan?.reason },
    
    { main: "Results", sub: "Metrics", key: (c) => c.results?.map(r => `${r.metric} - ${r.description}`).join('\n') },
    { main: "Timeline", sub: "Stages", key: (c) => c.surgeryTimeline?.map(s => `${s.stage}: ${s.details}`).join('\n') },
    { main: "Recovery", sub: "Journey", key: (c) => c.recoveryJourney?.map(r => `${r.time}: ${r.details}`).join('\n') },

    { main: "Testimonial", sub: "Quote", key: (c) => c.testimonial?.quote },
    { main: "Testimonial", sub: "Author", key: (c) => c.testimonial?.author },
    
    { main: "Doctor Take", sub: "Note", key: (c) => c.doctorTake?.note }
  ];

  // Add Row 1 (Main Headings)
  const row1 = sheet.addRow(columns.map(c => c.main));
  row1.eachCell((cell) => {
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFFFFF00' } // Yellow
    };
    cell.font = { bold: true };
    cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
  });

  // Add Row 2 (Sub Headings)
  const row2 = sheet.addRow(columns.map(c => c.sub));
  row2.eachCell((cell) => {
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFFFC0CB' } // Pink
    };
    cell.font = { bold: true };
    cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
  });

  // Add Data
  for (const study of caseStudies) {
    const rowData = columns.map(c => {
        const val = c.key(study);
        return val !== undefined && val !== null ? val : '';
    });
    const row = sheet.addRow(rowData);
    row.eachCell((cell) => {
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    });
  }

  // Write to file
  await workbook.xlsx.writeFile('case-studies.xlsx');
  console.log('Exported to case-studies.xlsx');
}

generateExcel().catch(console.error);
