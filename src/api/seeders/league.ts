import { addLeagues } from "../services";

const leagueSeed = async () => {
  const leagues = [
    {
      leagueName: "Test League 1",
      displayName: "Tom's League",
      password: "1234",
    },
    {
      leagueName: "Test League 2",
      displayName: "Tom's League",
      password: "1234",
    },
    {
      leagueName: "Test League Delete 1",
      displayName: "Tom's League",
      password: "1234",
    },
    {
      leagueName: "Test League Delete 2",
      displayName: "Tom's League",
      password: "1234",
    },
  ];

  await addLeagues(leagues);
};

export default leagueSeed;
