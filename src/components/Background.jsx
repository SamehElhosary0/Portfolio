export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#030712]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent animate-pulse"></div>
    </div>
  );
}