// This file defines the structure for your multi-step form.
// Path: src/utils/formFields.js (or similar)

export const appSubmissionSteps = [
  {
    step: 0,
    title: "",
    description: "",
    fields: [
      {
        name: "name",
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
        placeholder: "Choose Category",
        type: "text",
        required: true,
      },
      {
        name: "email",
        label: "Customer support email address",
        placeholder: "server@defcomm.ng",
        type: "email",
        required: true,
      },
      {
        name: "phone",
        label: "Customer support phone",
        placeholder: "+234 70 32205578",
        type: "tel",
        required: true,
      },
      {
        name: "supportWebsite",
        label: "Customer support phone (Optional)",
        placeholder: "www.defcomm.ng",
        type: "url",
        required: false,
      },
    ],
  },
  {
    step: 1,
    title: "",
    description: "", // No step-level description here
    fields: [
      {
        name: "os",
        label: "Platforms ?",
        type: "radio-group-flex",
        options: ["Android", "IOS", "Ubuntu", "DefcommOS"],
        required: false,
      },
      // Graphics Section (Heading and Description)
      {
        name: "graphicsHeading",
        type: "display", // New type to indicate a non-input display element
        component: "h3", // Suggests rendering as an h3
        text: "Graphics", // The actual text content
      },
      {
        name: "graphicsDescription",
        type: "display", // New type for description
        component: "p", // Suggests rendering as a paragraph
        text: `Ensure your app icon, screenshots, and videos are optimized for promoting your app on Defcomm Stores. Familiarize yourself with the content guidelines before uploading new graphics. If you provide translations for your store listing without localized graphics, we will use the graphics from your default language.`,
      },
      {
        name: "app_icon",
        label: "App Icon",
        type: "image",
        layout: true,
        desc: "Your app icon must be a PNG or JPEG, up to 1 MB, 512px by 512px",
        required: true,
      },
      {
        name: "feature_image",
        label: "Featured Images",
        layout: true,
        type: "image",
        desc: "Your feature graphic must be a PNG or JPEG, up to 15 MB, 1,024px by 500px",
        required: true,
      },
      {
        name: "policy",
        label: "Privacy Policy",
        placeholder: "",
        layout: true, // For layout purposes (label on left, input on right)
        type: "text",
        required: true,
      },
    ],
  },
  {
    step: 2,
    title: "Creating App Release",
    description: "", // No step-level description here
    fields: [
      {
        name: "app_bundle",
        label: "App Bundles",
        type: "file",
        layout: true,
        desc: "Drop app bundles here to upload",
        required: true,
      },
      {
        name: "name_release",
        label: "Release name",
        placeholder: "",
        type: "text",
        layout: true,
        required: true,
        desc: "This is intended for internal use-efficiencies purposes only and will not be displayed to users on the Defcomm Store. We've proposed a name based on the initial app bundle or APK in this release.",
      },
      {
        name: "version",
        label: "Version",
        placeholder: "",
        type: "text",
        layout: true,
        required: true,
      },
      {
        name: "copyright",
        label: "Copyright",
        placeholder: "",
        type: "text",
        layout: true,
        required: false,
      },
      {
        name: "releaseTypeHeading",
        type: "display",
        component: "h3",
        text: "Creating App Release",
        className: "text-xl font-bold mt-8 mb-2 text-gray-800",
      },
      {
        name: "releaseIntroText",
        type: "display",
        component: "p",
        text: "This is intended for internal use-efficiencies purposes only and will not be displayed to users on the Defcomm Store. We've proposed a name based on the initial app bundle or APK in this release.",
        className: "text-gray-700 text-sm mb-4",
      },
      {
        name: "release",
        label: "",
        type: "radio-group",
        options: [
          "Manually release this version",
          "Automatically release this version",
          "Automatically release this version after App Review, no earlier than",
        ],
        required: true,
      },
    ],
  },
  {
    step: 3,
    title: "Data Collection",
    description: `Thanks for helping users understand your app's privacy practices. Remember that you're responsible for any third-party code that is added to your app, so if your third-party partners collect data from your app, you must represent that in your responses.

    • "Collect" refers to transmitting data off the device in a way that allows you and/or your third-party partners to access it for a period longer than necessary to service the transmitted request in real time.

    • Third-party partners include analytics tools, advertising networks, third-party SDKs, or other external vendors whose code you have added to the app.

    You can view the full list of questions at any time.`,
    fields: [
      {
        name: "collect_data",
        label:
          "Do you or your third-party partners collect data from this app?",
        type: "radio-group",
        options: [
          "Yes, we collect data from this app",
          "No, we do not collect data from this app",
        ],
        required: true,
      },
    ],
  },
  {
    step: 4,
    title: "App Privacy", // Title based on the "App Privacy.jpg" screenshot's implication of reviewing
    description: "", // Removed description as it's dynamically handled in AppSubmissionForm.jsx
    fields: [], // No form fields for this step, as they are dynamically set in AppSubmissionForm.jsx
    content: "", // Removed content as it's dynamically set in AppSubmissionForm.jsx
  },
  {
    step: 5,
    title: "Final Review",
    description:
      "You're almost there! Review all your details before submitting.",
    fields: [], // No form fields for this step
    content: "You've completed all steps. Submit when ready.", // Static content for final review
  },
];

export const yesCollect = [
  {
    name: "contactInfoHeading",
    type: "display",
    component: "h3",
    text: "Contact Info",
    className: "text-xl font-semibold mt-8 mb-2 text-gray-800",
  },
  {
    name: "contact_name",
    label: "Name",
    type: "checkbox",
    desc: "Including first or last name",
  },
  {
    name: "contact_name_value",
    type: "hidden",
  },
  {
    name: "contact_email",
    label: "Email Address",
    type: "checkbox",
    desc: "Including but not limited to a hashed email address",
  },
  {
    name: "contact_email_value",
    type: "hidden",
  },
  {
    name: "contact_phone",
    label: "Phone Numbers",
    type: "checkbox",
    desc: "Including but not limited to a hashed phone number",
  },
  {
    name: "contact_phone_value",
    type: "hidden",
  },
  {
    name: "contact_address",
    label: "Physical Address",
    type: "checkbox",
    desc: "Such as a home address, physical address, or mailing address",
  },
  {
    name: "contact_address_value",
    type: "hidden",
  },
  {
    name: "contact_other",
    label: "Other Contact Info",
    type: "checkbox",
    desc: "Any other information that can be used to contact the user outside the app",
  },

  {
    name: "locationHeading",
    type: "display",
    component: "h3",
    text: "Location",
    className: "text-xl font-semibold mt-8 mb-2 text-gray-800",
  },
  {
    name: "location_precise",
    label: "Precise Location",
    type: "checkbox",
    desc: "Information that describes the location of a user or device with the same or greater resolution as a latitude and longitude with three or more decimal places",
  },
  {
    name: "location_coarse",
    label: "Coarse Location",
    type: "checkbox",
    desc: "Information that describes the location of a user or device with lower resolution than a latitude and longitude with three or more decimal places, such as approximate location services",
  },

  {
    name: "sensitiveInfoHeading",
    type: "display",
    component: "h3",
    text: "Sensitive Info",
    className: "text-xl font-semibold mt-8 mb-2 text-gray-800",
  },
  {
    name: "healthFitness",
    label: "",
    type: "checkbox",
    desc: "Such as racial or ethnic data, sexual orientation, pregnancy or childbirth information, disability, religious or philosophical beliefs, trade union membership, political opinion, genetic information, or biometric data",
  },
];

export const noCollect = [
  {
    name: "dataNotCollected",
    type: "display",
    component: "div",
    text: `<div class="bg-gray-100 p-6 rounded-lg text-center flex flex-col items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-lime-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="text-xl font-semibold text-gray-800 mb-1">Data Not Collected</p>
                        <p class="text-gray-600 text-sm">The developer does not collect any data from this app.</p>
                      </div>
                      <div class="text-center mt-6">
                           <button type="button" class="bg-lime-600 text-white px-5 pb-2 rounded-md font-semibold hover:bg-lime-700 transition-colors duration-200">
                             Data Types
                           </button>
                           <p class="text-gray-600 text-sm mt-2">Data is not collected from this app.</p>
                       </div>
                    `,
    className: "text-center",
  },
];
