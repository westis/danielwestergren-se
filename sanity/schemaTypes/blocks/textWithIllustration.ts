import { defineField, defineType } from "sanity";
import { ImageIcon } from "@sanity/icons";

export const textWithIllustration = defineType({
  name: "textWithIllustration",
  type: "object",
  title: "Text with Illustration",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "text",
      type: "text",
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: "heading",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: title || "Text with Illustration",
        subtitle: "Text and image block",
        media: media || ImageIcon,
      };
    },
  },
});
