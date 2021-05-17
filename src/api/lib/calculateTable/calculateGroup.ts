import _ from "lodash";
import IGroupMatch from "../..//models/GroupMatch/type";

export interface IGroupTeam {
  name: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

export interface IGroupTeams {
  [name: string]: IGroupTeam;
}

export const calculateMatch = (match: IGroupMatch, teams: IGroupTeams) => {
  const { homeTeam, awayTeam, homeGoals, awayGoals } = match;

  if ((!homeGoals && homeGoals !== 0) || (!awayGoals && awayGoals !== 0)) {
    return;
  }

  teams[homeTeam].played += 1;
  teams[awayTeam].played += 1;

  teams[homeTeam].goalsFor += homeGoals;
  teams[awayTeam].goalsFor += awayGoals;

  teams[homeTeam].goalsAgainst += awayGoals;
  teams[awayTeam].goalsAgainst += homeGoals;

  if (homeGoals > awayGoals) {
    teams[homeTeam].wins += 1;
    teams[awayTeam].losses += 1;
  } else if (homeGoals < awayGoals) {
    teams[homeTeam].losses += 1;
    teams[awayTeam].wins += 1;
  } else {
    teams[homeTeam].draws += 1;
    teams[awayTeam].draws += 1;
  }
};

export const calculateGroup = (groupMatches: IGroupMatch[]): IGroupTeams => {
  const homeTeams = groupMatches.map(match => match.homeTeam);
  const awayTeams = groupMatches.map(match => match.awayTeam);

  const teamNames = _.uniq([...homeTeams, ...awayTeams]);

  const teams: IGroupTeams = {};

  teamNames.forEach(name => {
    teams[name] = {
      name,
      played: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0,
    };
  });

  groupMatches.forEach(match => {
    calculateMatch(match, teams);
  });

  teamNames.forEach(name => {
    teams[name].points = teams[name].wins * 3 + teams[name].draws;
    teams[name].goalDifference =
      teams[name].goalsFor - teams[name].goalsAgainst;
  });

  return teams;
};
