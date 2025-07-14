import divTwo from "../assets/grommet-icons_resources.png";
import divThree from "../assets/gg_profile.png";
import divFour from "../assets/Group 5338.png";
import divFive from "../assets/Vector.png";
import divSix from "../assets/Vector (1).png";
import divSeven from "../assets/secure 2.png";
import divEight from "../assets/icons8-contacts 1.png";

export const listofregistration = {
  individual: [
    {
      bold: "Legal Name: ",
      text: "Your full legal name is necessary to enter into agreements with Defcomm. This name will also be displayed as the seller name for your applications on the Defcomm Store.",
    },
    {
      bold: "Contact Information: ",
      text: " You must provide a valid email address, phone number, and physical address. P.O. Boxes are not accepted.",
    },
  ],
  organization: [
    {
      bold: "Legal Binding Authority: ",
      text: "As the Account Holder, you must have the legal authority to bind your organization to agreements with Defcomm. This means you must be the owner/founder, an executive team member, a senior project lead, or an employee with legal authority granted by a senior leader.",
    },
    {
      bold: "Legal Entity Name and Status: ",
      text: "Your organization must be a registered legal entity that can enter into contracts with Defcomm. DBAs, fictitious business names, trade names, or branches are not accepted. The legal entity name will appear as the seller name on the App Store.",
    },
    {
      bold: "License DPCOs No: ",
      text: "Except for government entities, your organization must have a License DPCOs, assigned by NDPC, to verify its identity, legal entity status, and address. You can check whether your organization already has a License DPCOs No and request one if needed.",
    },
    {
      bold: "Phone and Email: ",
      text: "Your work email must be associated with your organization’s domain name.",
    },
    {
      bold: "Website: ",
      text: "Your organization must have a publicly accessible website, with a domain name linked to your organisation.",
    },
  ],
};

export const navItems = [
  { src: divTwo, path: "/resources" },
  { src: divThree, path: "/profile" },
  { src: divFour, path: "/PPT" },
  { src: divFive, path: "/medical" },
  { src: divSix, path: "/apps" },
  { src: divSeven, path: "/dataCol" },
  { src: divEight, path: "/appSub" },
];
