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
        defineField({
          name: "image",
          title: "Hero Image",
          type: "image",
          options: {
            hotspot: true, // Enable hotspot functionality
          },
        }),
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
      name: "servicesTitle",
      title: "Services Section Title",
      type: "string",
      description: "The title for the Services section",
    }),
    defineField({
      name: "services",
      title: "Featured Services",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "service" }],
        },
      ],
      validation: (Rule) => Rule.max(4),
    }),
    defineField({
      name: "testimonialsTitle",
      title: "Testimonials Section Title",
      type: "string",
      description: "The title for the Testimonials section",
    }),
    defineField({
      name: "testimonials",
      title: "Featured Testimonials",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "testimonial" }],
        },
      ],
    }),
    defineField({
      name: "communityTitle",
      title: "Community Section Title",
      type: "string",
      description: "The title for the Community section",
    }),
    defineField({
      name: "communityItems",
      title: "Featured Community Items",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "communityItem" }],
        },
      ],
    }),
    defineField({
      name: "isHomePage",
      title: "Is Home Page",
      type: "boolean",
      validation: (Rule) => Rule.required(),
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
