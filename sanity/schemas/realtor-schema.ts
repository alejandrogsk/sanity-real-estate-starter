const relator = {
    name: "realtor",
    title: "Realtors",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string"
      },
      {
        name: "lastName",
        title: "Last Name",
        type: "string"
      },
      {
        name: "phone",
        title: "Phone",
        type: "string"
      },
      {
        name: "email",
        title: "Email",
        type: "string"
      },
      {
        name: 'profileImage',
        title: 'Profile Image',
        type: 'customImage',
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "name", maxLength: 96 }
      },

    ]
  }
  
  export default relator;