"use client";

import Link from "next/link";
import { useState } from "react";
import ArrowLeftIcon from "../assets/icons/ArrowLeftIcon.svg";
import ArrowRightIcon from "../assets/icons/ArrowRightIcon.svg";
import DressIcon from "../assets/icons/DressIcon.svg";
import PlusIcon from "../assets/icons/PlusIcon.svg";
import ShirtIcon from "../assets/icons/ShirtIcon.svg";
import Handbag from "../assets/images/handbag.png";
import { ColorModal } from "./ColorModal";
import { PhotosDrawer } from "./PhotosDrawer";
import { input, Select } from "./Select";
import { ShirtSizeModal } from "./ShirtSizeModal";
import { ShoeSizeModal } from "./ShoeSizeModal";
import { SizeModal } from "./SizeModal";
import { StockSection } from "./StockSection";
import { TrouserSizeModal } from "./TrouserSizeModal";

const card = "rounded-lg border-2 border-[#e6e6e6] p-[30px]";
const field = "grid gap-3 text-lg text-[#222]";

const audiences = [
  { name: "Women", icon: DressIcon },
  { name: "Men", icon: ShirtIcon },
  { name: "Unisex", icon: ShirtIcon },
];

export function ProductDetails() {
  const [popup, setPopup] = useState<"photos" | "sizes" | "trousers" | "shoes" | "shirts" | "colors" | null>(null);
  const close = () => setPopup(null);

  return (
    <div className="mx-auto max-w-[862px] px-4 py-[60px]">
      <div className="mb-10 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-[30px] text-[#222]">Product details</h1>
          <p className="mt-2 text-base text-[#666]">Be as accurate as possible to attract the right buyers</p>
        </div>
        <span className="shrink-0 rounded-lg bg-[#f2f2f2] px-5 py-3 text-[17px] text-[#222]">STEP 2/5</span>
      </div>

      <form>
        <section className={card}>
          <h2 className="mb-6 text-2xl text-[#222]">Product information</h2>
          <p className="mb-4 text-lg text-[#222]">Who is it for?</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {audiences.map((a) => (
              <label
                key={a.name}
                className="flex h-14 items-center gap-3 border border-[#ccc] px-4 text-[17px] text-[#222] has-checked:border-2 has-checked:border-[#3c433f]"
              >
                <input type="radio" name="audience" defaultChecked={a.name === "Women"} className="size-[22px] accent-[#3c433f]" />
                {a.name}
                <img src={a.icon.src} alt="" className="ml-auto" />
              </label>
            ))}
          </div>

          <div className="mt-[30px] grid gap-x-6 gap-y-5 sm:grid-cols-[160px_1fr_1fr]">
            <div className="sm:row-span-2">
              <img src={Handbag.src} alt="Classic leather handbag" className="h-[140px] w-full rounded-md object-cover" />
              <button type="button" onClick={() => setPopup("photos")} className="mt-3 h-11 w-full border border-[#3c433f] text-[15px] uppercase tracking-wide text-[#222]">
                Add photos
              </button>
            </div>
            <label className={field}>
              Title
              <input placeholder="Classic leather handbag" className={input} />
            </label>
            <label className={field}>
              Brand
              <input placeholder="Wizbay" className={input} />
            </label>
            <label className={field}>
              Category
              <Select options={["Bags"]} />
            </label>
            <label className={field}>
              Subcategory
              <Select options={["Handbags"]} />
            </label>
          </div>

          <label className={`${field} mt-8`}>
            Product description *
            <textarea
              rows={5}
              placeholder="Describe the item's condition, material, and any flaws or original packaging..."
              className={`${input} h-auto py-3`}
            />
          </label>
          <p className="mt-2 text-right text-xs text-[#666]">0/500</p>

          <label className={`${field} mt-6`}>
            Bullet Points *
            <input placeholder="Enter bullet points in EN 1" className={input} />
          </label>
          <button type="button" className="mt-5 flex items-center gap-2 border border-[#3c433f] px-4 py-1.5 text-sm text-[#222]">
            <img src={PlusIcon.src} alt="" />
            Add
          </button>
        </section>

        <StockSection onAddSize={() => setPopup("sizes")} onAddColor={() => setPopup("colors")} />

        <div className="mt-10 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[#222]">
            <img src={ArrowLeftIcon.src} alt="" />
            Back
          </Link>
          <button type="button" onClick={() => setPopup("sizes")} className="flex items-center gap-3 bg-[#3c433f] px-7 py-4 text-white">
            Save and continue
            <img src={ArrowRightIcon.src} alt="" />
          </button>
        </div>
      </form>

      {popup === "photos" && <PhotosDrawer onClose={close} />}
      {popup === "sizes" && <SizeModal onClose={close} onBack={close} onNext={() => setPopup("trousers")} />}
      {popup === "trousers" && <TrouserSizeModal onClose={close} onBack={() => setPopup("sizes")} onNext={() => setPopup("shoes")} />}
      {popup === "shoes" && <ShoeSizeModal onClose={close} onBack={() => setPopup("trousers")} onNext={() => setPopup("shirts")} />}
      {popup === "shirts" && <ShirtSizeModal onClose={close} onBack={() => setPopup("shoes")} onNext={close} />}
      {popup === "colors" && <ColorModal onClose={close} onBack={close} onNext={close} />}
    </div>
  );
}
