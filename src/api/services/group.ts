import { models } from "../config";
import IGroup from "../models/Group/type";
import { StatusError } from "../lib";
import { Group } from "../models";
import { ValidationError } from "sequelize";

interface IGroupResponse {
  error?: StatusError;
  group: Group | null;
}

interface IGroupsResponse {
  error?: StatusError;
  groups: Group[] | null;
}

const addGroup = async (groupData: IGroup): Promise<IGroupResponse> => {
  try {
    const group = await models.Group.create(groupData);
    return { group };
  } catch (error) {
    return { error: new StatusError(error), group: null };
  }
};

const addGroups = async (groupsData: IGroup[]): Promise<IGroupsResponse> => {
  try {
    const groups = await models.Group.bulkCreate(groupsData);
    return { groups };
  } catch (error) {
    return { error: new StatusError(error), groups: null };
  }
};

const getGroup = async (letter: string): Promise<IGroupResponse> => {
  const group = await models.Group.findOne({
    where: {
      letter,
    },
  });
  return { group };
};

const getGroups = async (letters: string[]): Promise<IGroupsResponse> => {
  const groups = await models.Group.findAll({
    where: {
      letter: letters,
    },
  });
  return { groups };
};

const getAllGroups = async (): Promise<IGroupsResponse> => {
  const groups = await models.Group.findAll();
  return { groups };
};

const deleteGroup = async (letter: string): Promise<IGroupResponse> => {
  const group = await models.Group.destroy({
    where: {
      letter,
    },
  });

  const error = new StatusError(
    new ValidationError("Primary Key not found when deleting entity")
  );

  return group ? { group: null } : { error, group: null };
};

export { addGroup, addGroups, getGroup, getGroups, getAllGroups, deleteGroup };
