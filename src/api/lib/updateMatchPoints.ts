import { GroupMatchPrediction } from "../models";
import { getAllUsers } from "../services/user";

export const updateMatchPoints = async (): Promise<any> => {
  const { users } = await getAllUsers();

  for (let index = 0; index < users.length; index++) {
    const user = users[index];

    const groupMatchPoints = await GroupMatchPrediction.sum("points", {
      where: { username: user.username },
    });

    if (groupMatchPoints !== NaN) {
      user.update({ points: groupMatchPoints });
    }
  }
};
