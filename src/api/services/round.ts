import { models } from "../config";
import IRound from "../models/Round/type";
import { StatusError } from "../lib";
import { Round } from "../models";
import { ValidationError } from "sequelize";

interface IRoundResponse {
  error?: StatusError;
  round: Round | null;
}

interface IRoundsResponse {
  error?: StatusError;
  rounds: Round[] | null;
}

const addRound = async (roundData: IRound): Promise<IRoundResponse> => {
  try {
    const round = await models.Round.create(roundData);
    return { round };
  } catch (error) {
    return { error: new StatusError(error), round: null };
  }
};

const addRounds = async (roundsData: IRound[]): Promise<IRoundsResponse> => {
  try {
    const rounds = await models.Round.bulkCreate(roundsData);
    return { rounds };
  } catch (error) {
    return { error: new StatusError(error), rounds: null };
  }
};

const getRound = async (name: string): Promise<IRoundResponse> => {
  const round = await models.Round.findOne({
    where: {
      name,
    },
  });

  return { round };
};

const getRounds = async (names: string[]): Promise<IRoundsResponse> => {
  const rounds = await models.Round.findAll({
    where: {
      name: names,
    },
  });
  return { rounds };
};

const getAllRounds = async (): Promise<IRoundsResponse> => {
  const rounds = await models.Round.findAll();
  return { rounds };
};

const deleteRound = async (name: string): Promise<IRoundResponse> => {
  const round = await models.Round.destroy({
    where: {
      name,
    },
  });

  const error = new StatusError(
    new ValidationError("Primary Key not found when deleting entity")
  );

  return round ? { round: null } : { error, round: null };
};

export { addRound, addRounds, getRound, getRounds, getAllRounds, deleteRound };
