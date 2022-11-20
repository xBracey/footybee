import moment from "moment";

const usernames = ["Bcraske", "JBrace14"];

export const predictionLock = (username: string) => {
  return (
    moment().isAfter(moment.unix(1668959940)) && !usernames.includes(username)
  );
};

export const teamPredictionLock = (username: string) => {
  return (
    moment().isAfter(moment.unix(1668959940)) && !usernames.includes(username)
  );
};
