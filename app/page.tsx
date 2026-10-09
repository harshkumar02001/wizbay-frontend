import { Footer } from "./components/Footer";
import { ListingSteps } from "./components/ListingSteps";
import { ProductDetails } from "./components/ProductDetails";
import { TopBar } from "./components/TopBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <div className="flex flex-1">
        <ListingSteps />
        <main className="flex-1">
          <ProductDetails />
        </main>
      </div>
      <Footer />
    </>
  );
}
