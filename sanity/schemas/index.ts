import { pageType } from "../schemaTypes/documents/page";
import homePage from "../schemaTypes/documents/homePage";
import navigation from "../schemaTypes/documents/navigation";
import siteSettings from "../schemaTypes/documents/siteSettings";
import servicePage from "../schemaTypes/documents/servicePage";

import { textWithIllustration } from "../schemaTypes/blocks/textWithIllustration";
import { form } from "../schemaTypes/blocks/form";
import { video } from "../schemaTypes/blocks/video";

export const schemaTypes = [
  // Documents
  pageType,
  homePage,
  navigation,
  siteSettings,
  servicePage,

  // Objects
  textWithIllustration,
  form,
  video,
];
