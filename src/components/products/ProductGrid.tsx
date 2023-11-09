import "solid-js";
import type { CollectionEntry } from "astro:content";
import ProductItem from "./ProductItem";
import ProductFilters from "./ProductFilters";
import type { GetImageResult } from "astro";
import { For, createEffect, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
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
  const [filteredProducts, setFilteredProducts] = createStore([...products]);
  createEffect(() => console.log(filteredProducts));

  const filterProducts = (sortFunction: (a: Product, b: Product) => number) => {
    setFilteredProducts([...products.sort(sortFunction)]);
  };

  return (
    <div>
      <ProductFilters filterProducts={filterProducts} />
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0 gap-10 items-center">
        <For each={filteredProducts}>
          {(product) => (
            <ProductItem
              data={product.data}
              slug={product.slug}
              specificationThumbnail={
                specificationThumbnails[product.data.product_specification.slug]
              }
            />
          )}
        </For>
      </ul>
    </div>
  );
};

export default ProductGrid;
