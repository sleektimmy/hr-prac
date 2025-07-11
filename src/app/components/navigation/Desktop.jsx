import NavData from "./NavData";

export default function Desktop() {
  return (
    <ul className="md:flex md:flex-row hidden justify-around items-center text-slate-50 bg-red-800 h-32 font-semibold text-2xl capitalize">
      <NavData />
    </ul>
  );
}
