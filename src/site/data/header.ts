import { IHeader } from "components/Header";
import { icons } from "../assets/icons";

export const headerData = (
  isAdmin: boolean,
  username: string,
  showKnockouts = false
): IHeader["menu"] => {
  const knockoutOrPredictions = showKnockouts
    ? {
        text: "Knockout",
        link: "/knockout",
      }
    : {
        text: "Predictions",
        link: "/predictions",
      };

  const menu: IHeader["menu"] = [
    {
      text: "How To Play",
      link: "/howtoplay",
    },
    knockoutOrPredictions,
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
          link: "/admin/groups",
        },
        ...menu,
      ]
    : menu;
};

export const adminHeaderData: (showRounds?: boolean) => IHeader["menu"] = (
  showRounds = false
) => {
  const roundOrGroups = showRounds
    ? {
        text: "Rounds",
        link: "/admin/rounds",
      }
    : {
        text: "Groups",
        link: "/admin/groups",
      };

  return [
    roundOrGroups,
    {
      text: "Teams",
      link: "/admin/teams",
    },
    {
      text: "Players",
      link: "/admin/players",
    },
  ];
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
