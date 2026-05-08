import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#f6f4ee] text-[#17201a]">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
