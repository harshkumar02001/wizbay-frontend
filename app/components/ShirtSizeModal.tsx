import CheckedIcon from "../assets/icons/CheckedIcon.svg";
import InfoIcon from "../assets/icons/InfoIcon.svg";
import { Modal, type ModalActions } from "./Modal";

const systems = ["Letter", "Collar (cm)"];
const sizes = ["XS", "S", "M", "L", "XL", "XXL", "2XL", "3XL"];

export function ShirtSizeModal(actions: ModalActions) {
  return (
    <Modal title="Select shirt sizes" subtitle="Choose all sizes available for this product." selected="2 sizes selected" {...actions}>
      <div className="mt-5 border-t border-[#e6e6e6] pt-5">
        <p className="text-lg">Select size system</p>
        <div className="mt-4 flex border-b border-[#ddd] text-[17px]">
          {systems.map((s, i) => (
            <button key={s} type="button" className={`-mb-px px-4 pb-3 uppercase ${i === 0 ? "border-b-2 border-[#3c433f]" : "text-[#666]"}`}>
              {s}
            </button>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-8">
          {sizes.map((size) => (
            <label key={size} className="flex h-[52px] items-center border border-[#ddd] px-3 text-[15px] has-checked:border-[#3c433f]">
              <input type="checkbox" defaultChecked={size === "XS" || size === "M"} className="peer sr-only" />
              {size}
              <img src={CheckedIcon.src} alt="" className="ml-auto hidden peer-checked:block" />
            </label>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="flex min-h-9 items-center gap-2 bg-[#f5f5f5] px-3 py-2 text-[13px] text-[#555]">
            <img src={InfoIcon.src} alt="" className="shrink-0" />
            For dress shirts, choose Collar (cm)
          </p>
          <button type="button" className="shrink-0 text-[15px] underline underline-offset-4">
            Size guide
          </button>
        </div>
      </div>
    </Modal>
  );
}
