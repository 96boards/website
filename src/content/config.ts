import { string } from "astro/zod";
import { z, defineCollection, reference } from "astro:content";

const pages = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      sticky_tab_bar: z.boolean().optional(),
      hero: z
        .object({
          title: z.string().optional(),
          background_image: image().optional(),
          style: z.string().optional(),
          title_style: z.string().optional(),
          description: z.string().optional(),
          inner_image: z
            .object({
              src: image(),
              alt: z.string(),
            })
            .optional(),
          buttons: z
            .array(
              z.object({
                url: z.string(),
                style: z.string().optional(),
                title: z.string(),
              })
            )
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
                  feature_block_content: z
                    .object({
                      text: z.string(),
                      title: z.string(),
                      buttons: z
                        .array(
                          z.object({
                            url: z.string(),
                            style: z.string(),
                            title: z.string(),
                          })
                        )
                        .optional(),
                      position: z.enum(["left", "right"]),
                      image_content_path: image(),
                      type: z.string(),
                    })
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

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: reference("authors"),
      description: z.string().optional(),
      title: z.string(),
      date: z.date(),
      image: image().optional(),
    }),
});

const authors = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      username: z.string(),
      image: image().optional(),
    }),
});

const products = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      product: z.boolean().optional(),
      shortname: z.string(),
      archived: z.boolean().optional(),
      dateAdded: z.date().optional(),
      ai_board: z.boolean().optional(),
      ai_board_desc: z.string().optional(),
      description: z.string(),
      keywords: z.string().optional(),
      display_product: z.boolean().optional(),
      product_short_desc: z.string(),
      product_specification: reference("specifications"),
      product_images: z.array(image()),
      sticky_bar_bar: z
        .array(
          z.object({
            title: z.string(),
            url: z.string(),
            tab_position: z.number(),
            tab_align_right: z.boolean(),
          })
        )
        .optional(),
      product_buy_links: z
        .array(
          z
            .object({
              "link-title": z.string(),
              "link-url": z.string(),
              from: z.string().optional(),
              type: z.string().optional(),
              "link-price": z.string().or(z.number()).optional(),
              "link-price-currency": z.string().optional(),
              product_sidebar_sections: z
                .array(z.any())
                .or(z.null())
                .optional(),
            })
            .or(
              z.object({
                title: z.string(),
                url: z.string().optional(),
                icon: z.string().optional(),
                items: z
                  .array(
                    z.object({
                      title: z.string(),
                      link: z.string(),
                    })
                  )
                  .optional(),
              })
            )
        )
        .optional(),
      product_button_section: z
        .array(
          z.object({
            title: z.string(),
            url: z.string().optional(),
            items: z.array(
              z.object({
                title: z.string(),
                link: z.string(),
              })
            ),
          })
        )
        .optional(),
      vendor: z
        .object({
          name: z.string(),
          url: z.string(),
        })
        .optional(),
      attributes: z
        .array(
          z.object({
            name: z.string(),
            value: z.string().or(z.boolean()).optional(),
          })
        )
        .or(z.null())
        .optional(),
    }),
});

const specifications = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      thumbnail: image(),
    }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = {
  specifications,
  products,
  blog,
  authors,
  pages,
  rows,
  sections,
  data,
};
