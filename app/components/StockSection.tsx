"use client";

import { useState } from "react";
import ChevronIcon from "../assets/icons/ChevronIcon.svg";
import PhotoIcon from "../assets/icons/PhotoIcon.svg";
import PlusIcon from "../assets/icons/PlusIcon.svg";
import TickIcon from "../assets/icons/TickIcon.svg";
import TrashIcon from "../assets/icons/TrashIcon.svg";
import { input, Select } from "./Select";

const field = "grid gap-3 text-lg text-[#222]";
const chip = "flex h-[38px] items-center gap-2 bg-[#ededed] px-3.5 text-[15px]";
const addChip = "flex h-[38px] items-center gap-2 border border-dashed border-[#ccc] px-3.5 text-[15px]";
const row = "grid grid-cols-[245px_110px_160px_1fr] items-center gap-3 px-4";
const cell = "h-10 w-full border border-[#ddd] bg-white px-3 text-[15px]";

const sizes = ["Small", "Medium"];
const colors = [
  { name: "Black", color: "#16181a" },
  { name: "White", color: "#fff" },
];
const combinations = [
  { size: "Small", color: colors[0], quantity: 3, price: "83.99" },
  { size: "Small", color: colors[1], quantity: 2, price: "83.99" },
  { size: "Medium", color: colors[0], quantity: 4, price: "93.99" },
  { size: "Medium", color: colors[1], quantity: 1, price: "93.99" },
];

function Dot({ color }: { color: string }) {
  return <span className="size-[18px] rounded-full border border-[#ddd]" style={{ background: color }} />;
}

type StockSectionProps = {
  onAddSize: () => void;
  onAddColor: () => void;
};

export function StockSection({ onAddSize, onAddColor }: StockSectionProps) {
  const [variants, setVariants] = useState(false);
  const [openRow, setOpenRow] = useState(0);

  return (
    <section className="mt-8 rounded-lg border-2 border-[#e6e6e6] p-[30px] text-[#222]">
      <h2 className="mb-6 text-2xl">{variants ? "Sizes, colors & stock" : "Size, color & stock"}</h2>
      <label className="flex gap-3">
        <input type="checkbox" checked={variants} onChange={() => setVariants(!variants)} className="mt-1 size-5 accent-[#3c433f]" />
        <span>
          This product comes in other sizes or colors
          <span className="block text-xs text-[#666]">
            {variants ? "Choose your options. We'll create a row for each combination." : "Select this to add more variants."}
          </span>
        </span>
      </label>

      {variants ? (
        <>
          <p className="mb-3 mt-8 text-lg">Sizes</p>
          <div className="flex flex-wrap gap-2.5">
            {sizes.map((size) => (
              <span key={size} className={chip}>
                <img src={TickIcon.src} alt="" />
                {size}
              </span>
            ))}
            <button type="button" onClick={onAddSize} className={addChip}>
              <img src={PlusIcon.src} alt="" />
              Add size
            </button>
          </div>

          <p className="mb-3 mt-6 text-lg">Colors</p>
          <div className="flex flex-wrap gap-2.5">
            {colors.map((c) => (
              <span key={c.name} className={chip}>
                <img src={TickIcon.src} alt="" />
                <Dot color={c.color} />
                {c.name}
              </span>
            ))}
            <button type="button" onClick={onAddColor} className={addChip}>
              <img src={PlusIcon.src} alt="" />
              Add color
            </button>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-[#e6e6e6] pt-7">
            <p className="text-lg">{combinations.length} combinations</p>
            <button type="button" className="text-[15px] underline underline-offset-4">
              Apply price to all
            </button>
          </div>

          <div className="mt-5 overflow-x-auto border border-[#e6e6e6] text-[15px]">
            <div className={`${row} h-12 bg-[#f5f5f5] text-[13px]`}>
              <span className="pl-[26px]">Size / Color</span>
              <span>Quantity</span>
              <span>Price (€)</span>
            </div>
            {combinations.map((c, i) => (
              <div key={i} className="border-t border-[#e6e6e6]">
                <div className={`${row} h-[62px]`}>
                  <button type="button" onClick={() => setOpenRow(openRow === i ? -1 : i)} className="flex items-center gap-2 text-left">
                    <img src={ChevronIcon.src} alt="" className={openRow === i ? "" : "-rotate-90"} />
                    <Dot color={c.color.color} />
                    {c.size} / {c.color.name}
                  </button>
                  <input defaultValue={c.quantity} className={cell} />
                  <input defaultValue={c.price} className={cell} />
                  <button type="button" aria-label="Delete" className="justify-self-end">
                    <img src={TrashIcon.src} alt="" />
                  </button>
                </div>
                {openRow === i && (
                  <div className="flex flex-wrap gap-6 border-t border-[#e6e6e6] bg-[#f5f5f5] px-8 py-5 text-[13px]">
                    <label className="grid flex-1 gap-2">
                      SKU (optional)
                      <input placeholder="Optional" className={cell} />
                    </label>
                    <div className="grid gap-2">
                      Option photos (optional)
                      <button type="button" className="flex h-10 items-center gap-2 border border-[#ddd] bg-white px-8">
                        <img src={PhotoIcon.src} alt="" />
                        Add photos
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 text-[17px]">Total stock: 10 items</p>
          <p className="mt-1 text-[#666]">Product photos are used unless you add photos for an option.</p>
        </>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <label className={field}>
            Size
            <Select options={["Medium", "Small", "Large"]} />
          </label>
          <label className={field}>
            Color
            <Select options={["Black", "White", "Brown"]} />
          </label>
          <label className={field}>
            Price (€)
            <input placeholder="83.99" className={input} />
          </label>
          <label className={field}>
            Quantity
            <input placeholder="1" className={input} />
          </label>
          <label className={`${field} sm:col-span-2`}>
            SKU (optional)
            <input placeholder="Enter SKU" className={input} />
          </label>
        </div>
      )}
    </section>
  );
}
