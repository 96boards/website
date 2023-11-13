import { readdir, readFile, writeFile, rename, unlink } from "fs/promises";
import matter from "gray-matter";
import { stringify } from "yaml";

const in_directory = "../old_website/_projects_copy";

async function updateFrontMatter(filepath) {
  const { data: frontMatter, content } = matter(await readFile(filepath));

  // replace permalink with slug
  const { permalink, image } = frontMatter;
  if (permalink) {
    let newSlug = permalink;
    if (newSlug.charAt(0) == "/") newSlug = newSlug.substr(1);
    frontMatter.slug = newSlug;
    delete frontMatter["permalink"];
  }

  // change images to relative paths
  if (image) {
    let newImage = image;
    if (newImage.startsWith("/assets")) newImage = "../.." + newImage;

    frontMatter.image = newImage;
  }

  // convert layout to relative path
  frontMatter.layout = "../../layouts/Project.astro";

  // overwrite file
  const newContent = `---\n${stringify(frontMatter)}---\n${content}`;
  await writeFile(filepath, newContent);
  console.log(`- [x] ${filepath}`);
}

async function main() {
  const projects = await readdir(in_directory);
  projects.forEach(async (project) => {
    const basePath = `${in_directory}/${project}`;
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
        await rename(path, path.replace("README.md", `${project}.md`));
      }

      if (file === "ai.md") {
        await unlink(`${path}/${file}`);
      }
    });
  });
}

main();
