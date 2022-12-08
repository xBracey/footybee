import { GroupMatchPrediction, Player, Team, TeamPrediction } from "../models";
import { getAllUsers } from "../services/user";

export const updatePoints = async (): Promise<any> => {
  const { users } = await getAllUsers();

  for (let index = 0; index < users.length; index++) {
    const user = users[index];

    const groupMatchPoints = await GroupMatchPrediction.sum("points", {
      where: { username: user.username },
    });

    const teamPoints = await TeamPrediction.sum("points", {
      where: { username: user.username },
    });

    const favouritePlayer = await Player.findOne({
      where: {
        name: user.goldenBootPrediction,
      },
    });

    const favouriteTeam = await Team.findOne({
      where: {
        name: user.winnerPrediction,
      },
    });

    // @ts-ignore
    if (groupMatchPoints !== NaN) {
      user.update({
        points:
          groupMatchPoints +
          teamPoints +
          (favouritePlayer ? favouritePlayer.goals * 10 : 0) +
          (favouriteTeam ? favouriteTeam.wins * 10 : 0),
      });
    }
  }
};
