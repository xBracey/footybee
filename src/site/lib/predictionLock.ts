import moment from "moment";

const usernames = [];

export const predictionLock = (username: string) => {
  return (
    moment().isAfter(moment.unix(1668902400)) && !usernames.includes(username)
  );
};

export const teamPredictionLock = (username: string) => {
  return (
    moment().isAfter(moment.unix(1668902400)) && !usernames.includes(username)
  );
};
