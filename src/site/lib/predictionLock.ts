import moment from "moment";

const usernames = ["Peter Oxley", "Rainham123"];

export const predictionLock = (username: string) => {
  return (
    moment().isAfter(moment.unix(1623436200)) && !usernames.includes(username)
  );
};

export const teamPredictionLock = (username: string) => {
  return (
    moment().isAfter(moment.unix(16234362000)) && !usernames.includes(username)
  );
};
