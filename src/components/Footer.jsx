export default function Footer() {
  return (
    <footer className="bg-[#111827] text-[#F9FAFB] text-center py-8 mt-auto">
      <p className="text-sm mb-4">
        © {new Date().getFullYear()} Club de tir à l’arc Archeguin
      </p>
      <p className="text-sm mb-6">
        265 Av. Taniata, Saint-Romuald, QC · (418) 831-0564
      </p>

      {/* Réseaux sociaux */}
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.facebook.com/profile.php?id=100057619741791" // 🔗 mets le vrai lien de ta page
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#3B82F6] transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54V12h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
