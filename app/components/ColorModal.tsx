import CheckedIcon from "../assets/icons/CheckedIcon.svg";
import SearchGrayIcon from "../assets/icons/SearchGrayIcon.svg";
import { Modal, type ModalActions } from "./Modal";
import { input } from "./Select";

const colors = [
  { name: "Black", color: "#16181a" },
  { name: "White", color: "#fff" },
  { name: "Gray", color: "#8e9196" },
  { name: "Brown", color: "#8b5a3c" },
  { name: "Beige", color: "#e3d3b3" },
  { name: "Red", color: "#e5262e" },
  { name: "Pink", color: "#ec7aa6" },
  { name: "Blue", color: "#2f80d8" },
  { name: "Green", color: "#2a7a33" },
  { name: "Yellow", color: "#f5c02a" },
  { name: "Gold", color: "#d29f35" },
  { name: "Multicolor", color: "conic-gradient(#e5262e, #f5c02a, #2a7a33, #2f80d8, #a64ad8, #e5262e)" },
];

export function ColorModal(actions: ModalActions) {
  return (
    <Modal title="Select colors" subtitle="Choose all colors available for this product." selected="2 colors selected" {...actions}>
      <label className="relative mt-5 block">
        <img src={SearchGrayIcon.src} alt="" className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input type="search" placeholder="Search colors" className="h-10 w-full bg-[#f2f2f2] pl-10 pr-3 text-[13px]" />
      </label>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {colors.map((c) => (
          <label key={c.name} className="flex h-[52px] items-center gap-3 border border-[#ddd] px-4 text-[15px] has-checked:border-[#3c433f]">
            <input type="checkbox" defaultChecked={c.name === "Black" || c.name === "White"} className="peer sr-only" />
            <span className="size-5 rounded-full border border-[#ddd]" style={{ background: c.color }} />
            {c.name}
            <img src={CheckedIcon.src} alt="" className="ml-auto hidden peer-checked:block" />
          </label>
        ))}
      </div>

      <div className="mt-5 border-t border-[#e6e6e6] pt-5">
        <p className="mb-4 text-lg">Add a custom color</p>
        <div className="flex gap-2.5">
          <input placeholder="e.g. Burgundy" className={input} />
          <button type="button" className="h-12 border border-[#3c433f] px-7">
            Add
          </button>
        </div>
      </div>
    </Modal>
  );
}
