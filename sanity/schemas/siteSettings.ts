import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      description: "The main title of the website",
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
      description: "A brief description of the website",
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
    }),
  ],
});
