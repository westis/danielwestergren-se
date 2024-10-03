import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { iconify } from "sanity-plugin-iconify";
import { structure } from "./deskStructure";
import { presentationTool } from "sanity/presentation";

const SANITY_STUDIO_PREVIEW_URL =
  process.env.SANITY_STUDIO_PREVIEW_URL ||
  "https://danielwestergrense.netlify.app";

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
    presentationTool({
      previewUrl: SANITY_STUDIO_PREVIEW_URL,
      title: "Visual Preview",
      name: "visual-preview",
      // You can add a custom icon if desired
      // icon: YourCustomIcon,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
