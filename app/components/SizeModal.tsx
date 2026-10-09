import CheckedIcon from "../assets/icons/CheckedIcon.svg";
import InfoIcon from "../assets/icons/InfoIcon.svg";
import SearchGrayIcon from "../assets/icons/SearchGrayIcon.svg";
import { Modal, type ModalActions } from "./Modal";
import { input } from "./Select";

const sizes = ["Mini", "Small", "Medium", "Large", "Extra large", "One size"];

export function SizeModal(actions: ModalActions) {
  return (
    <Modal title="Select bag sizes" subtitle="Choose all sizes available for this product." selected="2 sizes selected" {...actions}>
      <label className="relative mt-5 block">
        <img src={SearchGrayIcon.src} alt="" className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input type="search" placeholder="Search sizes" className="h-10 w-full bg-[#f2f2f2] pl-10 pr-3 text-[13px]" />
      </label>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {sizes.map((size) => (
          <label key={size} className="flex h-[52px] items-center border border-[#ddd] px-4 text-[15px] has-checked:border-[#3c433f]">
            <input type="checkbox" defaultChecked={size === "Mini" || size === "Medium"} className="peer sr-only" />
            {size}
            <img src={CheckedIcon.src} alt="" className="ml-auto hidden peer-checked:block" />
          </label>
        ))}
      </div>

      <p className="mt-3 flex h-11 items-center gap-2.5 bg-[#f5f5f5] px-4 text-[13px] text-[#555]">
        <img src={InfoIcon.src} alt="" />
        One size cannot be combined with other sizes
      </p>

      <div className="mt-5 border-t border-[#e6e6e6] pt-5">
        <p className="mb-4 text-lg">Add a custom size</p>
        <div className="flex gap-2.5">
          <input placeholder="e.g. 28 cm" className={input} />
          <button type="button" className="h-12 border border-[#3c433f] px-7">
            Add
          </button>
        </div>
      </div>
    </Modal>
  );
}
