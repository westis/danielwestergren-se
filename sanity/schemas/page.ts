import { defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: DocumentIcon,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "page" }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the page",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      description: "The unique identifier for the page URL",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      description: "The main content of the page",
    }),
  ],
});
