export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100" />

      <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
    </>
  );
}