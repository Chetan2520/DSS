import fs from 'fs';
import { caseStudies } from './src/lib/data/caseStudies.js';

let html = `
<html>
<head>
<meta charset="utf-8">
<style>
  table { border-collapse: collapse; font-family: sans-serif; }
  th, td { border: 1px solid #ccc; padding: 10px; text-align: left; vertical-align: top; }
  .heading { background-color: yellow; font-weight: bold; text-align: center; font-size: 16px; }
  .subheading { background-color: pink; font-weight: bold; font-size: 14px; }
</style>
</head>
<body>
<table>
`;

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
  
  { main: "Testimonial", sub: "Quote", key: (c) => c.testimonial?.quote },
  { main: "Testimonial", sub: "Author", key: (c) => c.testimonial?.author },
  
  { main: "Doctor Take", sub: "Note", key: (c) => c.doctorTake?.note }
];

html += "<tr>";
for (const col of columns) {
  html += `<th class="heading">${col.main}</th>`;
}
html += "</tr><tr>";
for (const col of columns) {
  html += `<th class="subheading">${col.sub}</th>`;
}
html += "</tr>";

for (const study of caseStudies) {
  html += "<tr>";
  for (const col of columns) {
    html += `<td>${col.key(study) || ''}</td>`;
  }
  html += "</tr>";
}

html += `
</table>
</body>
</html>
`;

fs.writeFileSync('case-studies-export.html', html);
console.log('Exported to case-studies-export.html');
