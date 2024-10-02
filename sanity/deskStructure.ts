import {
  HomeIcon,
  CaseIcon,
  CommentIcon,
  UsersIcon,
  DocumentIcon,
  CogIcon,
} from "@sanity/icons";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export const structure = (S: any, context: any) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home Page")
        .icon(HomeIcon)
        .child(
          S.list()
            .title("Home Page")
            .items([
              S.documentListItem().schemaType("homePage").id("homePage"),
              S.listItem()
                .title("Services")
                .icon(CaseIcon)
                .child(S.documentTypeList("service")),
              S.listItem()
                .title("Testimonials")
                .icon(CommentIcon)
                .child(S.documentTypeList("testimonial")),
              S.listItem()
                .title("Community Links")
                .icon(UsersIcon)
                .child(S.documentTypeList("communityItem")),
            ])
        ),
      orderableDocumentListDeskItem({
        type: "page",
        title: "Pages",
        icon: DocumentIcon,
        S,
        context,
      }),

      S.listItem()
        .title("Site Settings")
        .icon(CogIcon)
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
    ]);
