import { addLeagues } from "../../services";

const leagueSeed = async () => {
  const leagues = [
    {
      leagueName: "brace",
      password: "1234",
      displayName: "Brace's Predictor",
    },
  ];

  await addLeagues(leagues);
};

export default leagueSeed;
