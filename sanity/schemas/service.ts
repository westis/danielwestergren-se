import { defineField, defineType } from "sanity";
import { CaseIcon } from "@sanity/icons";

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
      type: "icon",
      description: "Select an icon to represent this service",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
      icon: "icon",
    },
    prepare({ title, subtitle, icon }) {
      return {
        title,
        subtitle:
          subtitle && subtitle.length > 50
            ? subtitle.substring(0, 50) + "..."
            : subtitle,
        media: icon ? icon : CaseIcon,
      };
    },
  },
});
