import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),
    defineField({
      name: "repositoryLink",
      title: "Repository Link",
      type: "url",
      description: "Link to the project repository",
    }),
    defineField({
      name: "stack",
      title: "Stack",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "carouselImages",
      title: "Carousel Images",
      type: "array",
      of: [
        {
          type: "object",
          name: "carouselImage",
          title: "Carousel Image",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative Text",
                },
              ],
            },
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
