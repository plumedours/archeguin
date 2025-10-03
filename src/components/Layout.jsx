import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9FAFB] font-sans">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
