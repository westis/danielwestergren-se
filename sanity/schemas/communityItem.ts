import { defineField, defineType } from "sanity";
import { UsersIcon } from "@sanity/icons";

export default defineType({
  name: "communityItem",
  title: "Community Item",
  type: "document",
  icon: UsersIcon,
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "link", title: "Link", type: "url" }),
  ],
});
