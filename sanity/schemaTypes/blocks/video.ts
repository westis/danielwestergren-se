import { defineField, defineType } from "sanity";
import { PlayIcon } from "@sanity/icons";

export const video = defineType({
  name: "video",
  type: "object",
  title: "Video",
  icon: PlayIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "url",
      type: "url",
      description: "YouTube or Vimeo video URL",
    }),
  ],
  preview: {
    select: {
      title: "title",
      url: "url",
    },
    prepare({ title, url }) {
      return {
        title: title || "Untitled Video",
        subtitle: url,
        media: PlayIcon,
      };
    },
  },
});
