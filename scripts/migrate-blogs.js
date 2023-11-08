import { readdir, readFile, writeFile, rename, unlink } from "fs/promises";
import * as fs from "fs";
import matter from "gray-matter";
import { stringify } from "yaml";

const in_directory = "../old_website/_posts_copy";

async function updateFrontMatter(filepath) {
  const { data: frontMatter, content } = matter(await readFile(filepath));

  // replace permalink with slug
  const { slug } = frontMatter;
  if (slug) {
    let newSlug = slug;
    newSlug = `blog/${slug}/`;
    frontMatter.slug = newSlug;
    delete frontMatter["permalink"];
  }

  // change images to relative paths
  if (frontMatter.image) {
    let newImage = frontMatter.image;
    if (newImage.startsWith("/assets")) newImage = "../.." + newImage;
    frontMatter.image = newImage;
  }

  // convert layout to relative path
  if (frontMatter.layout) {
    frontMatter.layout = "../../layouts/Post.astro";
  }

  // overwrite file
  const newContent = `---\n${stringify(frontMatter)}---\n${content}`;
  await writeFile(filepath, newContent);
  console.log(`- [x] ${filepath}`);
}

async function main() {
  const files = await readdir(in_directory);
  const markdownFilenames = files.filter((f) => f.endsWith(".md"));

  markdownFilenames.forEach(async (file) => {
    updateFrontMatter(`${in_directory}/${file}`);
  });
}

main();
