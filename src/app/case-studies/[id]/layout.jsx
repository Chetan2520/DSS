import { caseStudies } from "@/lib/data/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id,
  }));
}

export default function CaseStudyLayout({ children }) {
  return children;
}
