import BreadCrumbs from "../../../components/singleProduct/BreadCrumbs";
import { fetchSingleProduct } from "../../utils/actions";
import Image from "next/image";
import { formatCurrency } from "../../utils/format";
import FavoriteToggleButton from "../../../components/products/FavoriteToggleButton";
import AddToCart from "../../../components/singleProduct/AddToCart";
import ProductRating from "../../../components/singleProduct/ProductRating";

async function SingleProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await fetchSingleProduct(id);
  const { name, image, company, description, price } = product;
  const dollarAmount = formatCurrency(price);

  return (
    <section>
      <BreadCrumbs name={name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16 rounded object-cover">
        {/* IMAGE FIRST COL */}
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
            priority
            className="w-full"
          />
        </div>
        {/* PRODUCT INFO SECOND COL */}
        <div className="">
          <div className="flex gap-x-8 items-center">
            <h1 className="text-3xl capitalize font-bold">{name}</h1>
            <FavoriteToggleButton productId={params.id} />
          </div>
          <ProductRating productId={params.id} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded">
            {dollarAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={params.id} />
        </div>
      </div>
    </section>
  );
}

export default SingleProductPage;
