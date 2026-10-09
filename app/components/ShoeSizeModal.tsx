import CheckedIcon from "../assets/icons/CheckedIcon.svg";
import InfoIcon from "../assets/icons/InfoIcon.svg";
import { Modal, type ModalActions } from "./Modal";

const systems = ["EU", "UK", "US"];
const sizes = ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"];

export function ShoeSizeModal(actions: ModalActions) {
  return (
    <Modal title="Select shoe sizes" subtitle="Choose all sizes available for this product." selected="2 sizes selected" {...actions}>
      <div className="mt-5 border-t border-[#e6e6e6] pt-5">
        <p className="text-lg">Select size system</p>
        <div className="mt-4 flex border-b border-[#ddd] text-[17px]">
          {systems.map((s, i) => (
            <button key={s} type="button" className={`-mb-px px-4 pb-3 ${i === 0 ? "border-b-2 border-[#3c433f]" : "text-[#666]"}`}>
              {s}
            </button>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-8">
          {sizes.map((size) => (
            <label key={size} className="flex h-[52px] items-center border border-[#ddd] px-3 text-[15px] has-checked:border-[#3c433f]">
              <input type="checkbox" defaultChecked={size === "36" || size === "38"} className="peer sr-only" />
              {size}
              <img src={CheckedIcon.src} alt="" className="ml-auto hidden peer-checked:block" />
            </label>
          ))}
        </div>

        <label className="mt-4 flex items-center justify-between text-[15px]">
          Half sizes
          <input type="checkbox" className="peer sr-only" />
          <span className="relative h-7 w-[50px] rounded-full bg-[#d5d8dc] after:absolute after:left-1 after:top-1 after:size-5 after:rounded-full after:bg-white after:transition peer-checked:bg-[#3c433f] peer-checked:after:translate-x-[22px]" />
        </label>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="flex min-h-9 items-center gap-2 bg-[#f5f5f5] px-3 py-2 text-[13px] text-[#555]">
            <img src={InfoIcon.src} alt="" className="shrink-0" />
            Sizes are saved with selected system.
          </p>
          <button type="button" className="shrink-0 text-[15px] underline underline-offset-4">
            Size guide
          </button>
        </div>
      </div>
    </Modal>
  );
}
