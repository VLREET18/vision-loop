export default function CTAButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <button className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105">
        Book Free Consultation
      </button>

      <button className="rounded-full border-2 border-blue-600 px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">
        View Portfolio
      </button>
    </div>
  );
}