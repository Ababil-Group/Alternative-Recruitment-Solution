import Footer from "@/common/Footer";
import Navbar from "@/common/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
