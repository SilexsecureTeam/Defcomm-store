export const appSubmissionSteps = [
  {
    step: 0,
    title: "",
    fields: [
      {
        name: "appName",
        label: "App Name",
        placeholder: "Max 100 characters",
        type: "text",
        required: true,
        maxLength: 100,
      },
      {
        name: "description",
        label: "App Description",
        placeholder: "Max 200 characters",
        type: "textarea",
        required: true,
        maxLength: 200,
      },
      {
        name: "category",
        label: "App Categories",
        placeholder: "Choose categories",
        type: "text",
        required: true,
      },
      {
        name: "supportEmail",
        label: "Customer Support Email",
        placeholder: "server@defcomm.ng",
        type: "email",
        required: true,
      },
      {
        name: "supportPhone",
        label: "Customer Support Phone",
        placeholder: "+234 ********43",
        type: "tel",
        required: true,
      },
      {
        name: "supportWebsite",
        label: "Customer Support Website (Optional)",
        placeholder: "www.defcomm.ng",
        type: "url",
        required: false,
      },
    ],
  },
  {
    step: 1,
    title: "",
    fields: [
      {
        name: "platform",
        label: "Platforms ?",
        type: "radio-group-flex",
        options: ["Android", "IOS", "Ubuntu", "DefcommOS"],
        required: true,
      },
      {
        name: "graphics",
        label: "Graphics",
        desc: "Ensure your app icon, screenshots, and videos are optimized for promoting your app on Defcomm Stores. Familiarize yourself with the content guidelines before uploading new graphics. If you provide translations for your store listing without localized graphics, we will use the graphics from your default language.",
        options: [
          {
            name: "app_icon",
            label: "App Icon",
            type: "image",
            desc: "Your app icon must be a PNG or JPEG, up to 1 MB, 512px by 512px",
          },
          {
            name: "featured_images",
            label: "Featured Images",
            type: "image",
            desc: "Your featured graphic must be a PNG or JPEG, up to 15 MB, 1,024px by 500px",
          },
        ],
        type: "images",
        required: true,
      },
      {
        name: "privacy",
        label: "Privacy Policy",
        placeholder: "",
        layout: true,
        type: "text",
        required: true,
      },
    ],
  },
  {
    step: 2,
    title: "Create App Release",
    fields: [
      {
        name: "",
        label: "",
        placeholder: "",
        options: [
          {
            name: "bundle",
            label: "App Bundles",
            placeholder: "e.g. bundle.release.1",
            type: "images",
            required: true,
          },
        ],
        type: "images",
        required: true,
      },
      {
        name: "releaseName",
        label: "Release Name",
        placeholder: "e.g. v1.0.0",
        type: "text",
        layout: true,
        required: true,
      },
      {
        name: "version",
        label: "Version",
        placeholder: "e.g. 1.0.0",
        layout: true,
        type: "text",
        required: true,
      },
      {
        name: "copyright",
        label: "Copyright",
        placeholder: "© 2025 Defcomm",
        type: "text",
        layout: true,
        required: false,
      },
      {
        name: "releaseType",
        label: "Release Type",
        type: "radio-group",
        options: ["Manually", "Automatically", "Auto after review"],
        required: true,
      },
    ],
  },
  {
    step: 3,
    title: "Data Collection",
    fields: [
      {
        name: "collectsData",
        label:
          "Do you or your third-party partners collect data from this app?",
        type: "radio-group",
        options: ["Yes", "No"],
        required: true,
      },
    ],
  },
  {
    step: 4,
    title: "Confirm Privacy",
    fields: [],
    content:
      "This app collects no user data. Data is not collected from this app.",
  },
  {
    step: 5,
    title: "Final Review",
    fields: [],
    content: "You've completed all steps. Submit when ready.",
  },
];
