import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { iconify } from "sanity-plugin-iconify";
import { structure } from "./deskStructure";

export default defineConfig({
  name: "default",
  title: "Daniel Westergren",

  projectId: "p8xdhqgt",
  dataset: "production",

  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
    iconify({
      collections: ["fa", "mdi", "heroicons"],
      showName: false,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
