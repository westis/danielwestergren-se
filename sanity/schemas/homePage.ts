import { defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
    }),
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({ name: "image", title: "Hero Image", type: "image" }),
        defineField({ name: "title", title: "Hero Title", type: "string" }),
        defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
        defineField({
          name: "roles",
          title: "Roles",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "buttonText",
          title: "Button Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "services",
      title: "Featured Services",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "service" }],
          options: {
            disableNew: true,
          },
        },
      ],
      validation: (Rule) => Rule.max(4),
    }),
    defineField({
      name: "testimonials",
      title: "Featured Testimonials",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "testimonial" }],
          options: {
            disableNew: true,
          },
        },
      ],
    }),
    defineField({
      name: "communityItems",
      title: "Featured Community Items",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "communityItem" }],
          options: {
            disableNew: true,
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title || "Untitled Home Page",
      };
    },
  },
});
