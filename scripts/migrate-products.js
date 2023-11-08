import { readdir, readFile, writeFile, rename, unlink } from "fs/promises";
import * as fs from "fs";
import matter from "gray-matter";
import { stringify } from "yaml";

const in_directory = "../old_website/_product_copy";

async function updateFrontMatter(filepath) {
  const { data: frontMatter, content } = matter(await readFile(filepath));

  // replace permalink with slug
  const { permalink, product_images, layout } = frontMatter;
  if (permalink) {
    let slug = permalink;
    if (slug.charAt(0) == "/") slug = slug.substr(1);
    frontMatter.slug = slug;
    delete frontMatter["permalink"];
  }

  // change images to relative paths
  if (product_images) {
    const new_product_images = product_images.map((image) => {
      let newImage = image;
      if (image.startsWith("images"))
        newImage = newImage.replace("images", "./_images");
      console.log(image, newImage);
      return newImage;
    });
    frontMatter.product_images = new_product_images;
  }

  // convert layout to relative path
  if (layout) {
    if (layout === "product")
      frontMatter.layout = "../../../../layouts/ProductLayout.astro";
    if (layout === "product-ai")
      frontMatter.layout = "../../../../layouts/AIProductLayout.astro";
  }

  // overwrite file
  const newContent = `---\n${stringify(frontMatter)}---\n${content}`;
  await writeFile(filepath, newContent);
  console.log(`- [x] ${filepath}`);
}

async function main() {
  const folders = await readdir(in_directory);
  folders.forEach(async (folder) => {
    const products = await readdir(`${in_directory}/${folder}`);
    products.forEach(async (product) => {
      const basePath = `${in_directory}/${folder}/${product}`;
      const files = await readdir(basePath);
      const markdownFilenames = files.filter((f) => f.endsWith(".md"));
      if (files.includes("images")) {
        await rename(`${basePath}/images`, `${basePath}/_images`);
      }
      if (files.includes("files")) {
        await rename(`${basePath}/files`, `${basePath}/_files`);
      }
      markdownFilenames.forEach(async (file) => {
        const path = `${basePath}/${file}`;
        updateFrontMatter(path);

        if (file === "README.md") {
          await rename(path, path.replace("README.md", `${product}.md`));
          await unlink(path);
        }
        if (file === "ai.md") {
          await rename(path, path.replace("ai.md", `${product}-ai.md`));
          await unlink(path);
        }
      });
    });
  });
  //
}

main();
