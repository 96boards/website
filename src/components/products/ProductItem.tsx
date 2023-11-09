import type { GetImageResult } from "astro";
import type { CollectionEntry } from "astro:content";
import "solid-js";
import { Show, createSignal } from "solid-js";
type Product = CollectionEntry<"products">;

const ProductItem = ({
  data,
  slug,
  specificationThumbnail,
}: Product & { specificationThumbnail: GetImageResult }) => {
  const [showBuyLinks, setShowBuyLinks] = createSignal(false);

  const toggleBuyLinks = () => setShowBuyLinks(!showBuyLinks());
  return (
    <li class="col-span-1 flex flex-col items-center p-8 relative">
      <div class="absolute top-0 left-[5%] m-6 w-10 ">
        <img src={specificationThumbnail.src} class="bg-neutral-200" />
      </div>
      <div class="">
        <img src={data.product_images[0].src} class="object-fit h-36" />
      </div>
      <h3 class="font-normal">{data.title}</h3>
      <p class="text-xs text-center">{data.product_short_desc}</p>
      <div class="flex gap-1">
        <a
          href={`/${slug}`}
          class="bg-accent no-underline px-4 py-2 text-white"
        >
          View Product
        </a>
        <div class="relative">
          <button
            class="bg-accent no-underline px-4 py-2 text-white inline"
            onClick={toggleBuyLinks}
          >
            Buy <span class="text-xs">▼</span>
          </button>
          <Show when={showBuyLinks()}>
            <div class="absolute block top-full z-10 right-0 left-auto divide-y mt-2 rounded-lg shadow min-w-[16rem] max-w-full bg-neutral-100 ">
              <ul class="list-none p-0 m-0">
                {data.product_buy_links?.map((link) => (
                  <li class="underline  text-center py-2 px-2">
                    <a
                      href={link["link-url" as keyof typeof link]}
                      class="text-accent"
                    >
                      {link["link-title" as keyof typeof link]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Show>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
