import ArrowRightIcon from "../assets/icons/ArrowRightIcon.svg";
import CloseIcon from "../assets/icons/CloseIcon.svg";
import PlusIcon from "../assets/icons/PlusIcon.svg";
import RemoveIcon from "../assets/icons/RemoveIcon.svg";
import UploadIcon from "../assets/icons/UploadIcon.svg";
import BagFront from "../assets/images/bag-front.png";
import BagSide from "../assets/images/bag-side.png";

const photos = [
  { name: "Front", image: BagFront },
  { name: "Side", image: BagSide },
  { name: "Back", image: BagSide },
  { name: "Interior", image: BagFront },
  { name: "Logo/Brand", image: BagSide },
  { name: "Serial/code", image: BagSide },
  { name: "Top", image: BagFront },
  { name: "Details", image: BagSide },
];

export function PhotosDrawer({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-30 flex justify-end bg-black/25">
      <div className="h-full w-full max-w-[600px] overflow-y-auto bg-white p-[30px] text-[#222]">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-[28px]">Add photos of your product</h2>
            <p className="mt-2 text-[#666]">clear, well-lit photos help your product sell faster</p>
          </div>
          <button type="button" aria-label="Close" onClick={onClose}>
            <img src={CloseIcon.src} alt="" />
          </button>
        </div>

        <label className="mt-10 flex h-[200px] cursor-pointer flex-col items-center justify-center border border-dashed border-[#ccc] bg-[#f7f7f7] text-center">
          <input type="file" accept="image/png, image/jpeg" multiple className="sr-only" />
          <img src={UploadIcon.src} alt="" />
          <span className="mt-3 text-[15px]">
            Drag & drop files or <span className="underline underline-offset-2">Browse</span>
          </span>
          <span className="mt-1 text-[13px] text-[#666]">or click to browse</span>
          <span className="mt-1 text-xs text-[#777]">Supports: JPG, PNG, JPEG (Max 8 images)</span>
          <span className="mt-1 text-xs text-[#777]">8 Slots Remaining</span>
        </label>

        <div className="mt-7 border-t border-[#e6e6e6] pt-7">
          <h3 className="text-[22px]">Product photos (8/8)</h3>
          <p className="mt-2 text-[15px] text-[#666]">clear, well-lit photos help your product sell faster</p>

          <div className="mt-7 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {photos.map(({ name, image }) => (
              <figure key={name}>
                <div className="relative aspect-square border border-[#e6e6e6]">
                  <img src={image.src} alt={name} className="size-full object-cover" />
                  <button type="button" aria-label={`Remove ${name} photo`} className="absolute -right-1.5 -top-1.5">
                    <img src={RemoveIcon.src} alt="" />
                  </button>
                </div>
                <figcaption className="mt-3 text-center text-[15px]">{name}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-7 border-t border-[#e6e6e6] pt-7">
          <div className="flex items-center gap-4 bg-[#f7f7f7] p-5">
            <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#ccc] bg-white">
              <img src={PlusIcon.src} alt="" />
            </span>
            <div>
              <p className="text-[15px]">Minimum 6 photos required</p>
              <p className="mt-1 text-[13px] text-[#666]">Items with clear photos get up to 3x more views and sell faster.</p>
            </div>
          </div>
        </div>

        <button type="button" onClick={onClose} className="mt-7 flex h-[60px] w-full items-center justify-center gap-3 bg-[#3c433f] text-white">
          Save and continue
          <img src={ArrowRightIcon.src} alt="" />
        </button>
      </div>
    </div>
  );
}
