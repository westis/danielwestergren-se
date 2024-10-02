import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { iconPicker } from "sanity-plugin-icon-picker";
import { structure } from "./deskStructure";

export default defineConfig({
  name: "default",
  title: "Daniel Westergren",

  projectId: "p8xdhqgt",
  dataset: "production",

  plugins: [
    structureTool({
      structure, // Add this line to use your custom structure
    }),
    visionTool(),
    iconPicker(),
  ],

  schema: {
    types: schemaTypes,
  },
});
