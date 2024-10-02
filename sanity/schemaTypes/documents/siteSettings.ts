import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  groups: [
    {
      name: "general",
      title: "General",
    },
    {
      name: "navigation",
      title: "Navigation",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      description: "The main title of the website",
      group: "general",
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
      description: "A brief description of the website",
      group: "general",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "The main logo of the website",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "A description of the logo for accessibility and SEO",
        },
      ],
      group: "general",
    }),
    defineField({
      name: "navigationMenus",
      title: "Navigation Menus",
      type: "array",
      of: [{ type: "reference", to: [{ type: "navigation" }] }],
      group: "navigation",
    }),
  ],
});
