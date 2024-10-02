import { defineField, defineType } from "sanity";

export default defineType({
  name: "test",
  title: "Test",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "icon",
    }),
  ],
  preview: {
    select: {
      title: "title",
      icon: "icon",
    },
    prepare({ title, icon }) {
      return {
        title,
        media: icon,
      };
    },
  },
});
