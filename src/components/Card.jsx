export default function Card({ title, price, description }) {
  return (
    <div className="p-6 bg-white shadow rounded-2xl hover:shadow-lg transition text-center border border-gray-100">
      <h3 className="text-2xl font-bold text-[#3B82F6] mb-2">{title}</h3>
      <p className="text-3xl text-[#FACC15] font-semibold mb-2">{price}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
