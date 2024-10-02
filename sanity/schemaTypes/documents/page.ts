import { defineField, defineType, defineArrayMember } from "sanity";
import { DocumentIcon } from "@sanity/icons";

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
        defineArrayMember({ type: "textWithIllustration" }),
        defineArrayMember({ type: "form" }),
        defineArrayMember({ type: "video" }),
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
              of: ["hero", "textWithIllustration", "gallery"],
            },
            {
              name: "media",
              title: "Media Blocks",
              of: ["video", "gallery"],
            },
            {
              name: "callsToAction",
              title: "Call to Action Blocks",
              of: ["callToAction", "form"],
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
