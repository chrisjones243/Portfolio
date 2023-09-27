const workExperience = {
    name: "workExperience",
    title: "work Experience",
    type: "document",
    fields: [
      {
        name: "company",
        title: "Company",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "jobTitle",
        title: "Job Title",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "start",
        title: "Start",
        type: "date",
      },
      {
        name: "finish",
        title: "Finish",
        type: "date",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string",
          },
        ],
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "link",
        title: "Link",
        type: "url",
      },
    ],
  };
  
  export default workExperience;
  