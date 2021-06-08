import { UserLeague } from "../models";
import { getAllLeaguesWithUsers } from "../services/league";

export const updateRanks = async (): Promise<any> => {
  const { leagues } = await getAllLeaguesWithUsers();

  for (let index = 0; index < leagues.length; index++) {
    const league = leagues[index];

    const sortedUsers = league.users.sort((b, a) => a.points - b.points);

    for (let index2 = 0; index2 < sortedUsers.length; index2++) {
      const user = sortedUsers[index2];

      UserLeague.update(
        { rank: index2 + 1 },
        { where: { username: user.username, leagueCode: league.code } }
      );
    }
  }
};
