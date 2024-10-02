import { defineField, defineType, defineArrayMember } from "sanity";
import { DocumentIcon } from "@sanity/icons";
import { textWithIllustration } from "../schemaTypes/blocks/textWithIllustration";
import { form } from "../schemaTypes/blocks/form";
import { video } from "../schemaTypes/blocks/video";

export const pageType = defineType({
  name: "page",
  type: "document",
  title: "Page",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Page Title",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Page Content",
      of: [
        defineArrayMember(textWithIllustration),
        defineArrayMember(form),
        defineArrayMember(video),
        // Add more block types as needed
      ],
      options: {
        layout: "grid",
        insertMenu: {
          filter: true,
          groups: [
            {
              name: "content",
              title: "Content Blocks",
              of: ["textWithIllustration"],
            },
            {
              name: "media",
              title: "Media Blocks",
              of: ["video"],
            },
            {
              name: "callsToAction",
              title: "Call to Action Blocks",
              of: ["form"],
            },
          ],
          views: [
            { name: "list" },
            {
              name: "grid",
              previewImageUrl: (schemaTypeName) =>
                `/static/preview-${schemaTypeName}.jpg`,
            },
          ],
        },
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
    },
    prepare({ title, slug }) {
      return {
        title: title || "Untitled Page",
        subtitle: slug ? `/${slug}/` : "No slug set",
        media: DocumentIcon,
      };
    },
  },
});
