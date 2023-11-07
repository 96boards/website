import { z, defineCollection, reference } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      hero: z
        .object({
          title: z.string(),
          background_image: image(),
          style: z.string(),
          title_style: z.string().optional(),
          description: z.string().optional(),
          inner_image: z
            .object({
              src: image(),
              alt: z.string(),
            })
            .optional(),
        })
        .optional(),
      flow: z
        .array(
          z.object({
            row: reference("rows"),
            sections: z.array(
              z
                .object({
                  component: reference("sections"),
                  blocks: z
                    .array(
                      z.object({
                        description: z.string(),
                        title: z.string(),
                        image: image(),
                        buttons: z.array(
                          z.object({
                            url: z.string(),
                            style: z.string(),
                            title: z.string(),
                          })
                        ),
                      })
                    )
                    .optional(),
                })
                .catchall(z.any())
            ),
          })
        )
        .optional(),
    }),
});

const rows = defineCollection({
  type: "content",
  schema: z.object({
    path: z.string(),
  }),
});

const sections = defineCollection({
  type: "content",
  schema: z.object({
    path: z.string(),
  }),
});

const data = defineCollection({
  type: "data",
  schema: z.any(),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = {
  pages,
  rows,
  sections,
  data,
};
