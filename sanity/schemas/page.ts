import { defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: DocumentIcon,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "page" }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the page",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      description: "The unique identifier for the page URL",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessibility.",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
              description: "Optional caption for the image",
            },
          ],
          options: {
            hotspot: true,
          },
        },
      ],
      description: "The main content of the page",
    }),
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
      content: "content",
    },
    prepare(selection) {
      const { title, slug, content } = selection;
      const block = (content || []).find(
        (block: any) => block._type === "block"
      );
      return {
        title,
        subtitle: slug ? `/${slug}/` : "No slug set",
        media: DocumentIcon,
        description: block
          ? block.children
              .filter((child: { _type: string }) => child._type === "span")
              .map((span: { text: string }) => span.text)
              .join("")
              .substring(0, 50) + "..."
          : "No content",
      };
    },
  },
});
