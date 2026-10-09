import Link from "next/link";
import HelpIcon from "../assets/icons/HelpIcon.svg";

export function Footer() {
  return (
    <footer className="flex items-center justify-between px-6 py-3 text-xs text-gray-500">
      <div className="flex items-center gap-4">
        <button type="button" className="border border-gray-200 px-3 py-1">
          English
        </button>
        <Link href="/help" className="flex items-center gap-1.5">
          <img src={HelpIcon.src} alt="" />
          Help & support
        </Link>
      </div>
      <span>WizBay Limited</span>
    </footer>
  );
}
