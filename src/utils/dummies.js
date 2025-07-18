import { FiUploadCloud, FiUser, FiFileText } from "react-icons/fi";
import { MdApps, MdContactPhone } from "react-icons/md";
import { FaNotesMedical } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiOutlineDocumentText } from "react-icons/hi";

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
  { icon: FiUploadCloud, path: "/app/publish" },
  { icon: MdApps, path: "/apps" },
  { icon: FaNotesMedical, path: "/medical" },
  { icon: CgProfile, path: "/profile" },
  { icon: MdContactPhone, path: "/contact" },
];

export const appAnalytics = [
  {
    name: "MyTravel",
    downloads: 1200,
    activeUsers: 800,
    revenue: 2500,
    rating: 4.5,
  },
  {
    name: "ShopMate",
    downloads: 850,
    activeUsers: 650,
    revenue: 1800,
    rating: 4.2,
  },
  {
    name: "EduLink",
    downloads: 900,
    activeUsers: 700,
    revenue: 2100,
    rating: 4.6,
  },
];

export const growthData = [
  { month: "Jan", downloads: 500 },
  { month: "Feb", downloads: 700 },
  { month: "Mar", downloads: 1100 },
  { month: "Apr", downloads: 1300 },
  { month: "May", downloads: 1500 },
  { month: "Jun", downloads: 1700 },
];
