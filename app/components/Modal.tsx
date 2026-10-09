import type { ReactNode } from "react";
import ArrowLeftIcon from "../assets/icons/ArrowLeftIcon.svg";
import ArrowRightIcon from "../assets/icons/ArrowRightIcon.svg";
import CloseIcon from "../assets/icons/CloseIcon.svg";

export type ModalActions = {
  onClose: () => void;
  onBack: () => void;
  onNext: () => void;
};

type ModalProps = ModalActions & {
  title: string;
  subtitle: string;
  selected: string;
  children: ReactNode;
};

export function Modal({ title, subtitle, selected, onClose, onBack, onNext, children }: ModalProps) {
  return (
    <div className="fixed inset-0 z-30 overflow-y-auto bg-black/25 px-4">
      <div className="mx-auto my-[60px] max-w-[830px] bg-white p-[30px] text-[#222]">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-[22px]">{title}</h2>
            <p className="mt-1 text-[#666]">{subtitle}</p>
          </div>
          <button type="button" aria-label="Close" onClick={onClose}>
            <img src={CloseIcon.src} alt="" />
          </button>
        </div>

        {children}

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#e6e6e6] pt-6">
          <p className="text-lg">{selected}</p>
          <div className="flex items-center gap-8">
            <button type="button" onClick={onBack} className="flex items-center gap-2">
              <img src={ArrowLeftIcon.src} alt="" />
              Back
            </button>
            <button type="button" onClick={onNext} className="flex items-center gap-3 bg-[#3c433f] px-7 py-4 text-white">
              Save and continue
              <img src={ArrowRightIcon.src} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
