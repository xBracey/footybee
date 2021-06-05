import { addUserLeagues } from "../../services";

const userLeagueSeed = async () => {
  const userLeagues = [
    {
      username: "Test User 1",
      leagueCode: "Test League Code 1",
    },
    {
      username: "Test User 1",
      leagueCode: "Test League Code 2",
    },
    {
      username: "Test User 2",
      leagueCode: "Test League Code 1",
    },
    {
      username: "Test User 2",
      leagueCode: "Test League Code 2",
    },
  ];

  await addUserLeagues(userLeagues);
};

export default userLeagueSeed;
