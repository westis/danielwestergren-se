import { defineField, defineType } from "sanity";
import { MenuIcon } from "@sanity/icons";

export default defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  icon: MenuIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "This is for internal reference only",
    }),
    defineField({
      name: "items",
      title: "Navigation Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "text", type: "string", title: "Link Text" }),
            defineField({
              name: "link",
              type: "reference",
              title: "Link to",
              to: [{ type: "page" }, { type: "homePage" }],
            }),
          ],
        },
      ],
    }),
  ],
});
