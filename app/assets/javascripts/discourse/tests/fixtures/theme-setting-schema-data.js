import ThemeSettings from "admin/models/theme-settings";

export default function schemaAndData(version = 1) {
  let schema, data;
  if (version === 1) {
    schema = {
      name: "level1",
      identifier: "name",
      properties: {
        name: {
          type: "string",
        },
        children: {
          type: "objects",
          schema: {
            name: "level2",
            identifier: "name",
            properties: {
              name: {
                type: "string",
              },
              grandchildren: {
                type: "objects",
                schema: {
                  name: "level3",
                  identifier: "name",
                  properties: {
                    name: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
        },
      },
    };

    data = [
      {
        name: "item 1",
        children: [
          {
            name: "child 1-1",
            grandchildren: [
              {
                name: "grandchild 1-1-1",
              },
              {
                name: "grandchild 1-1-2",
              },
            ],
          },
          {
            name: "child 1-2",
            grandchildren: [
              {
                name: "grandchild 1-2-1",
              },
            ],
          },
        ],
      },
      {
        name: "item 2",
        children: [
          {
            name: "child 2-1",
            grandchildren: [
              {
                name: "grandchild 2-1-1",
              },
              {
                name: "grandchild 2-1-2",
              },
            ],
          },
          {
            name: "child 2-2",
            grandchildren: [
              {
                name: "grandchild 2-2-1",
              },
              {
                name: "grandchild 2-2-2",
              },
              {
                name: "grandchild 2-2-3",
              },
              {
                name: "grandchild 2-2-4",
              },
            ],
          },
          {
            name: "child 2-3",
            grandchildren: [],
          },
        ],
      },
    ];
  } else if (version === 2) {
    schema = {
      name: "section",
      identifier: "name",
      properties: {
        name: {
          type: "string",
        },
        icon: {
          type: "string",
        },
        links: {
          type: "objects",
          schema: {
            name: "link",
            identifier: "text",
            properties: {
              text: {
                type: "string",
              },
              url: {
                type: "string",
              },
              icon: {
                type: "string",
              },
            },
          },
        },
      },
    };

    data = [
      {
        name: "nice section",
        icon: "arrow",
        links: [
          {
            text: "Privacy",
            url: "https://example.com",
            icon: "link",
          },
        ],
      },
      {
        name: "cool section",
        icon: "bell",
        links: [
          {
            text: "About",
            url: "https://example.com/about",
            icon: "asterisk",
          },
          {
            text: "Contact",
            url: "https://example.com/contact",
            icon: "phone",
          },
        ],
      },
    ];
  } else if (version === 3) {
    schema = {
      name: "something",
      identifier: "name",
      properties: {
        name: {
          type: "string",
        },
        integer_field: {
          type: "integer",
        },
        float_field: {
          type: "float",
        },
        boolean_field: {
          type: "boolean",
        },
        enum_field: {
          type: "enum",
          choices: ["nice", "awesome", "cool"]
        },
        category_field: {
          type: "category",
        },
        group_field: {
          type: "group",
        },
        tag_field: {
          type: "tag",
        }
      },
    };
    data = [
      {
        name: "lamb",
        integer_field: 92,
        boolean_field: true,
        enum_field: "awesome"
      },
      {
        name: "cow",
        integer_field: 820,
        boolean_field: false,
        enum_field: "cool"
      },
    ];
  } else {
    throw new Error("unknown fixture version");
  }

  return ThemeSettings.create({
    objects_schema: schema,
    value: data,
    setting: "objects_setting"
  });
}
