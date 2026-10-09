import CheckIcon from "../assets/icons/CheckIcon.svg";

const steps = ["Product type", "Product details", "Delivery details", "Inclusions", "Review"];
const current = 2;

export function ListingSteps() {
  return (
    <aside className="hidden w-[230px] shrink-0 bg-[#f4f4f4] px-[30px] pt-[60px] md:block">
      <h2 className="mb-4 text-base uppercase tracking-wide text-[#333]">Listing steps</h2>
      <ol className="text-sm text-[#222]">
        {steps.map((step, i) => (
          <li key={step} className="flex h-11 items-center gap-2.5 border-b border-[#e2e2e2] last:border-0">
            <span
              className={`grid size-[18px] place-items-center rounded-full border border-[#3c433f] text-[9px] ${
                i < current ? "bg-[#3c433f] text-white" : ""
              }`}
            >
              {i + 1}
            </span>
            {step}
            {i + 1 < current && <img src={CheckIcon.src} alt="" className="ml-auto" />}
          </li>
        ))}
      </ol>
    </aside>
  );
}
