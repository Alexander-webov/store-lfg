import ProductsContainer from "@/components/products/ProductsContainer";

async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; search?: string }>;
}) {
  const sp = await searchParams;
  const layout = sp.layout || "grid";
  const search = sp.search || "";

  return <ProductsContainer layout={layout} search={search} />;
}

export default ProductsPage;
