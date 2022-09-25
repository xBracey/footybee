import { IHeader } from "components/Header";
import { icons } from "../assets/icons";

export const headerData = (
  isAdmin: boolean,
  username: string
): IHeader["menu"] => {
  const menu: IHeader["menu"] = [
    {
      text: "How To Play",
      link: "/howtoplay",
    },
    // {
    //   text: "Knockout",
    //   link: "/knockout",
    // },
    {
      text: "Predictions",
      link: "/predictions",
    },
    {
      text: "Results",
      link: "/results",
    },
    {
      link: `/profile/${username}`,
      SVG: icons.account,
    },
  ];

  return isAdmin
    ? [
        {
          text: "Admin",
          link: "/admin/rounds",
        },
        ...menu,
      ]
    : menu;
};

export const adminHeaderData: IHeader["menu"] = [
  // {
  //   text: "Rounds",
  //   link: "/admin/rounds",
  // },
  {
    text: "Groups",
    link: "/admin/groups",
  },
  {
    text: "Teams",
    link: "/admin/teams",
  },
  {
    text: "Players",
    link: "/admin/players",
  },
];

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
