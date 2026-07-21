export default function StatsCards() {
  const stats = [
    ["250+", "Projects"],
    ["100+", "Clients"],
    ["5M+", "Reach"],
    ["98%", "Retention"],
  ];

  return (
    <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map(([number, label]) => (
        <div
          key={label}
          className="rounded-2xl border border-blue-100 bg-white/70 p-6 text-center shadow-lg backdrop-blur"
        >
          <h3 className="text-3xl font-bold text-blue-600">{number}</h3>
          <p className="mt-2 text-slate-600">{label}</p>
        </div>
      ))}
    </div>
  );
}