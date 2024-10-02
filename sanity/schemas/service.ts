import { defineField, defineType } from "sanity";
import { CaseIcon } from "@sanity/icons";
import { preview } from "sanity-plugin-icon-picker";

const options = {
  providers: ["fa", "mdi", "hi"],
  outputFormat: "react",
};

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "iconPicker",
      options,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
      provider: "icon.provider",
      name: "icon.name",
    },
    prepare(selection) {
      const { title, subtitle, provider, name } = selection;
      return {
        title,
        subtitle,
        media: preview({ provider, name, options }),
      };
    },
  },
});
