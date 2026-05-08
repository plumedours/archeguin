import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Forfaits from "./pages/Forfaits";
import Galerie from "./pages/Galerie";
import Contact from "./pages/Contact";
import NewsletterSubscribe from "./pages/NewsletterSubscribe";
import NewsletterUnsubscribe from "./pages/NewsletterUnsubscribe";
import Unsubscribe from "./pages/Unsubscribe";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forfaits" element={<Forfaits />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newsletter/subscribe" element={<NewsletterSubscribe />} />
          <Route path="/newsletter/unsubscribe" element={<NewsletterUnsubscribe />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
        </Routes>
      </Layout>
    </Router>
  );
}
