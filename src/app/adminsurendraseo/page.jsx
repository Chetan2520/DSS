import AdminPanel from "@/components/AdminPanel";

export const metadata = {
  title: "Admin Panel | DSS Secure",
  robots: { index: false, follow: false }
};

export default function AdminPageRoute() {
  return <AdminPanel />;
}
