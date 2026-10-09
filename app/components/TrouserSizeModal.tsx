import CloseIcon from "../assets/icons/CloseIcon.svg";
import InfoIcon from "../assets/icons/InfoIcon.svg";
import PlusIcon from "../assets/icons/PlusIcon.svg";
import { Modal, type ModalActions } from "./Modal";
import { Select } from "./Select";

const field = "grid gap-3 text-lg";
const combinations = ["W30 / L30", "W32 / L32"];

export function TrouserSizeModal(actions: ModalActions) {
  return (
    <Modal title="Select trouser sizes" subtitle="Choose all sizes available for this product." selected="2 combinations selected" {...actions}>
      <label className={`${field} mt-5`}>
        Size system
        <Select options={["Waist/Length (inches)"]} />
      </label>

      <div className="mt-5 grid gap-6 sm:grid-cols-2">
        <label className={field}>
          Waist (in)
          <Select options={["32"]} />
        </label>
        <label className={field}>
          Length (in)
          <Select options={["30"]} />
        </label>
      </div>

      <button type="button" className="mt-6 flex h-[54px] w-full items-center justify-center gap-2 border-2 border-[#3c433f] text-lg">
        <img src={PlusIcon.src} alt="" />
        Add combination
      </button>

      <div className="mt-6 border-t border-[#e6e6e6] pt-6">
        <p className="mb-4 text-lg">Selected combinations</p>
        {combinations.map((c) => (
          <div key={c} className="mb-4 flex h-[52px] items-center justify-between border border-[#ddd] bg-[#f2f2f2] px-4 text-[17px]">
            {c}
            <button type="button" aria-label={`Remove ${c}`}>
              <img src={CloseIcon.src} alt="" className="size-[18px]" />
            </button>
          </div>
        ))}
        <div className="flex items-center justify-between gap-4">
          <p className="flex min-h-9 items-center gap-2 bg-[#f5f5f5] px-3 py-2 text-[13px] text-[#555]">
            <img src={InfoIcon.src} alt="" className="shrink-0" />
            Add only the waist and length pairs you stock.
          </p>
          <button type="button" className="shrink-0 text-[15px] underline underline-offset-4">
            Size guide
          </button>
        </div>
      </div>
    </Modal>
  );
}
