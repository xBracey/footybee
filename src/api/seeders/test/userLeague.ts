import { addUserLeagues } from "../../services";

const userLeagueSeed = async () => {
  const userLeagues = [
    {
      username: "Test User 1",
      leagueName: "Test League 1",
    },
    {
      username: "Test User 1",
      leagueName: "Test League 2",
    },
    {
      username: "Test User 2",
      leagueName: "Test League 1",
    },
    {
      username: "Test User 2",
      leagueName: "Test League 2",
    },
  ];

  await addUserLeagues(userLeagues);
};

export default userLeagueSeed;
