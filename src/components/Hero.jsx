import { asset } from "../utils/assets";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#1E3A8A] via-[#2563EB] to-[#38BDF8] text-white text-center py-32">
      <div className="max-w-4xl mx-auto px-4">
        <img src={asset("logo.png")} alt="Logo Archeguin" className="h-24 mx-auto mb-8 drop-shadow-xl" />
        <h1 className="text-6xl font-extrabold mb-6 leading-tight">
          Club de tir à l’arc <span className="text-[#FACC15]">Archeguin</span>
        </h1>
        <p className="text-xl text-gray-100 mb-8">
          Une expérience moderne du tir à l’arc : initiation, loisir et compétition à Saint-Romuald.
        </p>
        <Link
          to="/forfaits"
          className="bg-[#FACC15] text-[#111827] px-8 py-4 rounded-2xl font-semibold shadow hover:bg-[#fde047] transition"
        >
          Découvrir nos forfaits
        </Link>
      </div>
    </section>
  );
}
