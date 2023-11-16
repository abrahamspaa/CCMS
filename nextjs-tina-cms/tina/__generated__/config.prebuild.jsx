// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  build: {
    publicFolder: "public",
    outputFolder: "admin"
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: ""
    }
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Page",
        path: "content/pages",
        format: "json",
        ui: {
          router: (props) => props.document._sys.relativePath === "home.json" ? "/" : props.document._sys.filename
        },
        fields: [
          {
            name: "title",
            type: "string"
          },
          {
            name: "blocks",
            label: "Blocks",
            type: "object",
            list: true,
            templates: [
              {
                name: "welcomeHero",
                label: "Welcome Hero",
                fields: [
                  {
                    name: "message",
                    type: "rich-text"
                  },
                  {
                    name: "image",
                    type: "image"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "form",
        label: "Form",
        path: "content/form",
        format: "json",
        ui: {
          router: () => "/form"
        },
        fields: [
          {
            name: "title",
            type: "string"
          },
          {
            name: "fields",
            label: "Fields",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => ({ label: `${item.label}-${item.field}` })
            },
            fields: [
              { type: "string", name: "label" },
              {
                type: "string",
                name: "field",
                options: ["Input", "Button"]
              },
              {
                type: "string",
                name: "style",
                options: ["Simple", "primary"]
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
