import { addLeagues } from "../../services";

const leagueSeed = async () => {
  const leagues = [
    {
      leagueName: "Test League 1",
      code: "Test League Code 1",
    },
    {
      leagueName: "Test League 2",
      code: "Test League Code 2",
    },
    {
      leagueName: "Test League Delete 1",
      code: "Test League Delete Code 1",
    },
    {
      leagueName: "Test League Delete 2",
      code: "Test League Delete Code 2",
    },
    {
      leagueName: "Test User League 1",
      code: "Test User League Code 1",
    },
    {
      leagueName: "Test User League 2",
      code: "Test User League Code 2",
    },
  ];

  await addLeagues(leagues);
};

export default leagueSeed;
