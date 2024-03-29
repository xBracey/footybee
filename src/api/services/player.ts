import { models } from "../config";
import IPlayer from "../models/Player/type";
import { StatusError, updatePoints } from "../lib";
import { Player } from "../models";
import { Op, ValidationError } from "sequelize";

interface IPlayerResponse {
  error?: StatusError;
  player: Player | null;
}

interface IPlayersResponse {
  error?: StatusError;
  players: Player[] | null;
}

const addPlayer = async (playerData: IPlayer): Promise<IPlayerResponse> => {
  try {
    const player = await models.Player.create(playerData);
    return { player };
  } catch (error) {
    return { error: new StatusError(error), player: null };
  }
};

const addPlayers = async (
  playersData: IPlayer[]
): Promise<IPlayersResponse> => {
  try {
    const players = await models.Player.bulkCreate(playersData);
    return { players };
  } catch (error) {
    return { error: new StatusError(error), players: null };
  }
};

const getPlayer = async (name: string): Promise<IPlayerResponse> => {
  const player = await models.Player.findOne({
    where: {
      name,
    },
  });
  return { player };
};

const getPlayers = async (names: string[]): Promise<IPlayersResponse> => {
  const players = await models.Player.findAll({
    where: {
      name: names,
    },
  });
  return { players };
};

const getAllPlayers = async (): Promise<IPlayersResponse> => {
  const players = await models.Player.findAll();
  return { players };
};

const deletePlayer = async (name: string): Promise<IPlayerResponse> => {
  const player = await models.Player.destroy({
    where: {
      name,
    },
  });

  const error = new StatusError(
    new ValidationError("Primary Key not found when deleting entity")
  );

  return player ? { player: null } : { error, player: null };
};

export const searchPlayers = async (
  name: string
): Promise<IPlayersResponse> => {
  const players = await models.Player.findAll({
    where: {
      name: {
        [Op.like]: `%${name}%`,
      },
    },
  });
  return { players };
};

const editPlayer = async (
  name,
  playerData: IPlayer
): Promise<IPlayerResponse> => {
  try {
    const player = await models.Player.findOne({
      where: {
        name,
      },
    });

    player.update(playerData);

    await updatePoints();

    return { player };
  } catch (error) {
    return { error: new StatusError(error), player: null };
  }
};

export {
  addPlayer,
  addPlayers,
  editPlayer,
  getPlayer,
  getPlayers,
  getAllPlayers,
  deletePlayer,
};
