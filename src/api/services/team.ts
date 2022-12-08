import { models } from "../config";
import ITeam from "../models/Team/type";
import { StatusError, updatePoints } from "../lib";
import { Team, User } from "../models";
import { ValidationError } from "sequelize";

interface ITeamResponse {
  error?: StatusError;
  team: Team | null;
}

interface ITeamsResponse {
  error?: StatusError;
  teams: Team[] | null;
}

const addTeam = async (teamData: ITeam): Promise<ITeamResponse> => {
  try {
    const team = await models.Team.create(teamData);
    return { team };
  } catch (error) {
    return { error: new StatusError(error), team: null };
  }
};

const addTeams = async (teamsData: ITeam[]): Promise<ITeamsResponse> => {
  try {
    const teams = await models.Team.bulkCreate(teamsData);
    return { teams };
  } catch (error) {
    return { error: new StatusError(error), teams: null };
  }
};

const getTeam = async (name: string): Promise<ITeamResponse> => {
  const team = await models.Team.findOne({
    where: {
      name,
    },
  });
  return { team };
};

const getTeams = async (names: string[]): Promise<ITeamsResponse> => {
  const teams = await models.Team.findAll({
    where: {
      name: names,
    },
  });
  return { teams };
};

const getAllTeams = async (): Promise<ITeamsResponse> => {
  const teams = await models.Team.findAll({
    include: [User],
  });
  return { teams };
};

const deleteTeam = async (name: string): Promise<ITeamResponse> => {
  const team = await models.Team.destroy({
    where: {
      name,
    },
  });

  const error = new StatusError(
    new ValidationError("Primary Key not found when deleting entity")
  );

  return team ? { team: null } : { error, team: null };
};

const getTeamsFromGroup = async (
  groupLetter: string
): Promise<ITeamsResponse> => {
  const teams = await models.Team.findAll({
    where: {
      groupLetter,
    },
  });

  return { teams };
};

const getTeamsFromRound = async (
  roundName: string
): Promise<ITeamsResponse> => {
  const teams = await models.Team.findAll({
    where: {
      roundName,
    },
  });

  return { teams };
};

const editTeam = async (name, teamData: ITeam): Promise<ITeamResponse> => {
  try {
    const team = await models.Team.findOne({
      where: {
        name,
      },
    });

    team.update(teamData);

    await updatePoints();

    return { team };
  } catch (error) {
    return { error: new StatusError(error), team: null };
  }
};

export {
  addTeam,
  addTeams,
  getTeam,
  getTeams,
  getAllTeams,
  deleteTeam,
  getTeamsFromGroup,
  getTeamsFromRound,
  editTeam,
};
