import type { CollectionEntry } from "astro:content";
import dayjs from "dayjs";
import "solid-js";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
  AiOutlineCalendar,
} from "solid-icons/ai";
import type { JSX } from "solid-js/h/jsx-runtime";
import { createEffect, createSignal, type Setter } from "solid-js";
type Product = CollectionEntry<"products">;

const sortFunctions: Record<string, (a: Product, b: Product) => number> = {
  date: (a: Product, b: Product) =>
    dayjs(b.data.dateAdded).diff(a.data.dateAdded),
  dateReverse: (a: Product, b: Product) =>
    dayjs(a.data.dateAdded).diff(b.data.dateAdded),
  alphabetical: (a: Product, b: Product) =>
    a.data.title < b.data.title ? -1 : 1,
  alphabeticalReverse: (a: Product, b: Product) =>
    a.data.title < b.data.title ? 1 : -1,
};

const Button = ({ currentSort, key, onClick, children }: any) => (
  <button
    data-sort={key}
    onClick={onClick}
    class="w-auto flex items-center px-4 py-2 border border-neutral-300 first:rounded-l-md last:rounded-r-md"
    classList={{
      "bg-neutral-700 text-white": currentSort() === key,
      "bg-neutral-200 text-black": currentSort() !== key,
    }}
  >
    {children}
  </button>
);

const ProductFilters = ({
  filterProducts,
}: {
  filterProducts: (sortFunction: (a: Product, b: Product) => number) => void;
}) => {
  const [currentSort, setCurrentSort] =
    createSignal<keyof typeof sortFunctions>("date");

  const onSort: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (e) => {
    const sortKey = e.currentTarget.dataset.sort;
    if (sortKey) {
      setCurrentSort(sortKey);
      filterProducts(sortFunctions[sortKey]);
    }
  };

  return (
    <div class="flex w-full justify-center my-6">
      <Button onClick={onSort} key="alphabetical" currentSort={currentSort}>
        <AiOutlineSortAscending />
      </Button>
      <Button
        onClick={onSort}
        key="alphabeticalReverse"
        currentSort={currentSort}
      >
        <AiOutlineSortDescending />
      </Button>
      <Button onClick={onSort} key="date" currentSort={currentSort}>
        Date (newest) <AiOutlineCalendar />
      </Button>
      <Button onClick={onSort} key="dateReverse" currentSort={currentSort}>
        Date (oldest) <AiOutlineCalendar />
      </Button>
    </div>
  );
};

export default ProductFilters;
