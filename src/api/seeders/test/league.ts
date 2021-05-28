import { addLeagues } from "../../services";

const leagueSeed = async () => {
  const leagues = [
    {
      leagueName: "Test League 1",
      code: "1234",
    },
    {
      leagueName: "Test League 2",
      code: "1234",
    },
    {
      leagueName: "Test League Delete 1",
      code: "1234",
    },
    {
      leagueName: "Test League Delete 2",
      code: "1234",
    },
    {
      leagueName: "Test User League 1",
      code: "1234",
    },
    {
      leagueName: "Test User League 2",
      code: "1234",
    },
  ];

  await addLeagues(leagues);
};

export default leagueSeed;
