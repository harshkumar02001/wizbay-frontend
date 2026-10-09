import ChevronIcon from "../assets/icons/ChevronIcon.svg";

export const input = "h-12 w-full border border-[#ddd] px-3.5 text-[15px] text-[#555] placeholder:text-[#777]";

export function Select({ options }: { options: string[] }) {
  return (
    <div className="relative">
      <select className={`${input} appearance-none`}>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <img src={ChevronIcon.src} alt="" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
    </div>
  );
}
