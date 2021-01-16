import { IHeader } from "components/Header";
import { icons } from "../assets/icons";

export const headerData = (isAdmin: boolean): IHeader["menu"] => {
  const menu: IHeader["menu"] = [
    {
      text: "Leagues",
      link: "/league",
    },
    {
      text: "Predictions",
      link: "/predictions",
    },
    {
      text: "Results",
      link: "/results",
    },
    {
      link: "/logout",
      SVG: icons.account,
    },
  ];

  return isAdmin
    ? [
        {
          text: "Admin",
          link: "/admin",
        },
        ...menu,
      ]
    : menu;
};

export const aboutHeaderData: IHeader["menu"] = [
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Terms",
    link: "/terms",
  },
  {
    text: "Privacy Policy",
    link: "/privacy",
  },
];
