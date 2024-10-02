import { defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export const form = defineType({
  name: "form",
  type: "object",
  title: "Form",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "formId",
      type: "string",
      description: "ID of the form in your form provider",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled Form",
        subtitle: "Form block",
        media: DocumentIcon,
      };
    },
  },
});
