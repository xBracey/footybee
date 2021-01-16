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
      link: "/account",
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
