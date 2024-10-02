import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "The name of the person giving the testimonial",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      description: "The role or position of the person",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
      description: "The testimonial content",
    }),
  ],
});
