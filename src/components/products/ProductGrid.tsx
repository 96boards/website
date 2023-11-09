import "solid-js";
import type { CollectionEntry } from "astro:content";
import ProductItem from "./ProductItem";
import type { GetImageResult } from "astro";
type Product = CollectionEntry<"products">;

const ProductGrid = ({
  products,
  specificationThumbnails,
}: {
  products: Product[];
  specificationThumbnails: Record<
    CollectionEntry<"specifications">["slug"],
    GetImageResult
  >;
}) => {
  console.log(products);
  return (
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0 gap-10 items-center ">
      {products.map((product) => (
        <ProductItem
          {...product}
          specificationThumbnail={
            specificationThumbnails[product.data.product_specification.slug]
          }
        />
      ))}
    </ul>
  );
};

export default ProductGrid;
