const contact = {
  name: "contact",
  title: "contact",
  type: "document",
  fields: [
    {
      name: "email",
      title: "email",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "basedAt",
      title: "Based At",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "socialMedia",
      title: "Social Media",
      type: "array",
      of: [
        {
          type: "object",
          name: "socialMedia",
          fields: [
            { name: "name", title: "Name", type: "string" },
            { name: "url", title: "URL", type: "url" },
            { name: "image", title: "Image", type: "image" },
          ],
        },
      ],
    },
  ],
};

export default contact;
