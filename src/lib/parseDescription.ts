import type { CollectionEntry } from "astro:content";
import { remark } from "remark";
import strip from "strip-markdown";

export const parseDescription = async (post: CollectionEntry<"blog">) => {
  const { headings } = await post.render();

  const h1 = headings[0]?.text;
  const firstBlock = post.body.split("\n").slice(0, 6).join(" ");

  return String(
    await remark()
      .use(strip, {
        remove: h1?.length > 15 ? ["heading"] : [],
      })
      .process(
        post.data.description ||
          (h1?.length > 15 && h1) ||
          (firstBlock.split(" ").length > 50
            ? firstBlock.split(" ").slice(0, 50).join(" ") + "..."
            : firstBlock)
      )
  );
};
